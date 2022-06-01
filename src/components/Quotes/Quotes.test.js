import { render, screen } from "@testing-library/react";
import Quotes from ".";

const quote = {
  quote: "test quote",
  author: "test author",
  date: "test date",
};

test("renders received quote, author and date", () => {
  render(
    <Quotes quote={quote.quote} author={quote.author} date={quote.date} />
  );

  const quoteElement = screen.getByText(quote.quote)
  const authorElement = screen.getByText(quote.author)
  const dateElement = screen.getByText(quote.date)

  expect(quoteElement).toBeInTheDocument()
  expect(authorElement).toBeInTheDocument()
  expect(dateElement).toBeInTheDocument()
});
