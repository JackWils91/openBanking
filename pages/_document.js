import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            src={"https://cdn.plaid.com/link/v2/stable/link-initialize.js"}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
