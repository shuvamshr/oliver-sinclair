const contentful = require("contentful");

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "lgr8vbujxrx3",
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    "wIx6FDQA0r-r42C91HcFhbwGGxxhecZyFL3AliJCjIg",
});
