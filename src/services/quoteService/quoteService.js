import axios from "axios";

export const quoteService = () => {};

export const getQuote = async () => {
  try {
    const { data } = await axios.get("https://quotes.rest/qod");
    if (data) return data
  } catch (e) {
    console.error(e);
  }
};
