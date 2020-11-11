import Document, { Head, Main, NextScript } from 'next/document';

const BaseCSS = ({ css }) => (
  <style
    dangerouslySetInnerHTML={{
      __html: css,
    }}
  />
);

BaseCSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}',
};

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="generator" content="mdx-docs" />
          <link
            href="https://fonts.googleapis.com/css?family=Capriola&amp;subset=latin-ext"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css?family=Alex+Brush&amp;subset=latin-ext"
            rel="stylesheet"></link>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:400,600,700,800,900&display=swap"
            rel="stylesheet"></link>
          <link
            href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800"
            rel="stylesheet"
          />
          <BaseCSS />
        </Head>
        <body className="try">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
