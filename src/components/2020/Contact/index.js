import React, { PureComponent } from 'react';
import { navigate } from 'gatsby';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Column, Columns, Field, Control, Input, TextArea } from 'bloomer';
import Typography from '../Typography';
import Button from '../Button';
import Image from '../Image';
import styles from './css/index.module.scss';
import img from '../../../resources/2020/home/coubuild-v.svg';

const title = {
  default: {
    level: 4,
    fontWeight: 'bold',
  },
  lg: {
    level: 2,
    fontWeight: 'bold',
  },
};

const subTitle = {
  default: {
    level: 9,
    fontWeight: 'lighter',
  },
};

const description = {
  title: {
    default: {
      level: 11,
      fontWeight: 'bold',
    },
  },
  subTitle: {
    default: {
      level: 13,
      fontWeight: 'lighter',
    },
  },
};

const Title = () => (
  <div className={styles.contact_title}>
    <Typography tag="h6" size={title} hasTextAlign="left">
      Write Us!
    </Typography>
    <Typography tag="span" size={subTitle} hasTextAlign="left">
      Your business takes off right now
    </Typography>
  </div>
);

const Description = () => (
  <Typography tag="p" size={description.title}>
    Where are we?
    <br />
    <Typography tag="span" size={description.subTitle}>
      66 West Flagler St, Suite 900, Miami, Florida 33130 +1 (786) 991-3467 contact@cobuildlab.com
    </Typography>
  </Typography>
);

export default class Contact extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: '',
        email: '',
        phone: '',
        message: '',
        landingName: 'Cobuild Lab',
      },
      isLoading: false,
    };
    this.url = 'https://api.cobuild-lab.com/landing/contact';
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    const field = { [e.target.name]: e.target.value };
    this.setState((state) => ({
      data: {
        ...state.data,
        ...field,
      },
    }));
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      data: { name, email, message, phone, landingName },
    } = this.state;

    if (!name.length) {
      toast.dismiss();
      toast.error("Last name can't be empty", {
        position: 'bottom-right',
      });
      return;
    }

    if (!email.length) {
      toast.dismiss();
      toast.error("Email can't be empty", {
        position: 'bottom-right',
      });
      return;
    }

    if (!message.length) {
      toast.dismiss();
      toast.error("Message can't be empty", {
        position: 'bottom-right',
      });
      return;
    }

    this.setState({
      isLoading: true,
    });

    const data = {
      name,
      email,
      message,
      phone,
      landingName,
    };

    const settings = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    fetch(this.url, settings)
      .then((res) => res.json())
      .then((response) => {
        if (response.statusCode >= 400) {
          toast.dismiss();

          toast.error(response.message, {
            position: 'bottom-right',
          });

          this.setState({
            isLoading: false,
          });
        } else {
          toast.dismiss();

          toast.success(response.message, {
            position: 'bottom-right',
          });

          navigate('/thanks-contact');
        }
      });
  }

  render() {
    const {
      data: { name, phone, email, message },
      isLoading,
    } = this.state;

    return (
      <Container>
        <ToastContainer />
        <Columns isCentered>
          <Column className={styles.contact_column} isSize={{ mobile: 12, desktop: 6 }}>
            <Title />
            <form onSubmit={this.onSubmit}>
              <Field>
                <Control>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Input
                    type="number"
                    name="phone"
                    placeholder="Phone number is optional"
                    value={phone}
                    onChange={this.handleChange}
                  />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </Control>
              </Field>
              <Field>
                <Control>
                  <TextArea
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={this.handleChange}
                  />
                </Control>
              </Field>
              <Field isGrouped>
                <Columns>
                  <Column isSize={{ mobile: 12, desktop: 4 }}>
                    <Control>
                      <Button isLoading={isLoading} htmlType="submit">
                        Submit
                      </Button>
                    </Control>
                  </Column>
                  <Column isSize={{ mobile: 12, desktop: 6 }}>
                    <Description />
                  </Column>
                </Columns>
              </Field>
            </form>
          </Column>
          <Column className={styles.contact_column} isSize={{ mobile: 12, desktop: 6 }}>
            <Image src={img} alt="contact form" />
          </Column>
        </Columns>
      </Container>
    );
  }
}
