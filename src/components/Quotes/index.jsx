const Quotes = ({ quote, author, date }) => {
  return (
    <div role='contentinfo'>
      <p>{quote}</p>
      <p>{author}</p>
      <p>{date}</p>
    </div>
  );
};

export default Quotes;
