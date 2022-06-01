import { Quote, Author, Credits, Date } from "./styles";
import { string } from "prop-types";

const Quotes = ({ quote, author, date }) => {
  return (
    <div role="contentinfo">
      <Quote>{quote}</Quote>
      <Credits>
        <Author>{author}</Author>
        <Date>{date}</Date>
      </Credits>
    </div>
  );
};

Quotes.propTypes = {
  quote: string,
  author: string,
  date: string,
};

export default Quotes;
