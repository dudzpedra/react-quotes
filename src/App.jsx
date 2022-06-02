import { useEffect } from "react";
import { AppWrapper, ContentWrapper } from "./assets/styles/Wrapper";
import HomeImage from "./components/HomeImage";
import Quotes from "./components/Quotes";
import RandomButton from "./components/RandomButton";
import { getQuote } from "./services";

function App() {
  useEffect(() => {
    const getData = async () => await getQuote();

    getData();
  }, []);
  return (
    <AppWrapper>
      <h1>Hello Quotes</h1>
      <ContentWrapper>
        <Quotes
          quote="I am a father! This is the happiest day of my life!"
          author="Eduardo Pedra"
          date="24/05/2019"
        />
        <HomeImage />
      </ContentWrapper>
      <RandomButton>New Quote</RandomButton>
    </AppWrapper>
  );
}

export default App;
