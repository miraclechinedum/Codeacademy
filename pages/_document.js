// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
// import Pagesetup from "../components/Pagesetup";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <style>
          {`
              * {
                font-family: 'Open Sans', sans-serif;
                box-sizing : border-box ;
                margin: 0;
                padding: 0;
              }
              a{
                text-decoration : none ;
              }
            `}
        </style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
