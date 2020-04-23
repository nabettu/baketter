export const bake = (text: string) =>
  process.browser
    ? new TextDecoder("SJIS").decode(new TextEncoder().encode(text))
    : "";
