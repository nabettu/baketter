import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import { AppRegistry } from "react-native";
import config, { title, url, description, ogpUrl } from "../app.json";
// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent(config.name, () => Main);
    // @ts-ignore: react-native-web method
    const { getStyleElement } = AppRegistry.getApplication(config.name);
    const page = renderPage();
    const styles = [
      <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
      getStyleElement(),
    ];
    return { ...page, styles: React.Children.toArray(styles) };
  }

  render() {
    return (
      <html style={{ height: "100%" }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={title} />
          <meta property="og:description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta id="ogurl" property="og:url" content={url} />
          <meta id="ogimage" property="og:image" content={ogpUrl} />
          <meta id="twitterimage" property="twitter:image" content={ogpUrl} />
        </Head>
        <body style={{ height: "100%", overflow: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
