import React from 'react'
import Recaptcha from 'react-recaptcha'
import { Link, navigate } from 'gatsby'
import { ToastContainer, toast } from 'react-toastify'
import {
  Container,
  Title,
  Subtitle,
  Column,
  Columns,
  Card,
  Content,
  Field,
  Label,
  Control,
  Input,
  TextArea,
} from 'bloomer'

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
      isVerified: false,
      landingName: 'Cobuild Lab',
    }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()

    if (this.state.firstName.length <= 0) {
      toast.error("First name can't be empty", {
        position: 'bottom-right',
      })
      return
    }

    if (this.state.lastName.length <= 0) {
      toast.error("Last name can't be empty", {
        position: 'bottom-right',
      })
      return
    }

    if (this.state.email.length <= 0) {
      toast.error("Email can't be empty", {
        position: 'bottom-right',
      })
      return
    }

    if (this.state.comment.length <= 0) {
      toast.error("Comment can't be empty", {
        position: 'bottom-right',
      })
      return
    }

    const url = 'https://api.cobuild-lab.com/landing/contact'

    const settings = {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }

    if (this.state.isVerified) {
      fetch(url, settings)
        .then(res => res.json())
        .then(response => {
          if (response.statusCode >= 400) {
            toast.error(response.message, {
              position: 'bottom-right',
            })
          } else {
            navigate('/thanks-contact')
          }
        })
    } else {
      toast.error("Please verify you're human", {
        position: 'bottom-right',
      })
    }
  }

  recaptchaVerify = response => {
    if (response) {
      this.setState({
        isVerified: true,
      })
    } else {
      toast.error('Error with the captcha', {
        position: 'bottom-right',
      })
    }
  }

  onloadCallback = () => {}

  render() {
    const siteKey = '6Lfd_3MUAAAAAOAlex8YpF0xyMhGym53UFNL5Y7Y'

    return (
      <section id="contact" className="section bg-section">
        <Container>
          <Columns isCentered>
            <Column className="p-f" isSize="1/2">
              <Title isSize={2} className="title-section" hasTextAlign="left">
                Where we are?
              </Title>
              <Card>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7185.8011732692985!2d-80.194957!3d25.773847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69bc4ede3f9%3A0x16e796cf8c581432!2s66+W+Flagler+St+%23900%2C+Miami%2C+FL+33130%2C+EE.+UU.!5e0!3m2!1ses!2sve!4v1537197642139"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0, width: '100%' }}
                  allowFullScreen
                />
              </Card>
            </Column>
            <Column className="p-f" isSize="1/2">
              <Title isSize={2} className="title-section" hasTextAlign="left">
                Write Us!
              </Title>
              <Content isSize="small">
                Your business takes off right now
              </Content>
              <form onSubmit={e => this.onSubmit(e)}>
                <Columns>
                  <Column isSize="1/2">
                    <Field>
                      <Label>First Name</Label>
                      <Control>
                        <Input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={this.state.firstName}
                          onChange={e => this.handleChange(e)}
                        />
                      </Control>
                    </Field>
                  </Column>
                  <Column isSize="1/2">
                    <Field>
                      <Label>Last Name</Label>
                      <Control>
                        <Input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={this.state.lastName}
                          onChange={e => this.handleChange(e)}
                        />
                      </Control>
                    </Field>
                  </Column>
                </Columns>
                <Field>
                  <Label>Email</Label>
                  <Control>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={e => this.handleChange(e)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Label>Comment or Message</Label>
                  <Control>
                    <TextArea
                      name="comment"
                      placeholder="Your message or comment goes here"
                      value={this.state.comment}
                      onChange={e => this.handleChange(e)}
                    />
                  </Control>
                </Field>
                <Field isGrouped>
                  <Control>
                    <Recaptcha
                      elementID="contactForm"
                      sitekey={siteKey}
                      render="explicit"
                      onloadCallback={this.recaptchaLoad}
                      verifyCallback={this.recaptchaVerify}
                    />
                    <br />
                    <button
                      className="button is-primary is-medium is-rounded"
                      type="submit"
                    >
                      Submit
                    </button>
                    <ToastContainer />
                  </Control>
                </Field>
                <Content hasTextAlign="centered">
                  <Subtitle>Privacy Policy</Subtitle>
                  <Link to="/privacy-policy">
                    Here you can access the information about how we treat your
                    data.
                  </Link>
                </Content>
              </form>
            </Column>
          </Columns>
        </Container>
      </section>
    )
  }
}
