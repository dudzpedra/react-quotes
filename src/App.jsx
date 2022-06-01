import { AppWrapper, ContentWrapper } from "./assets/styles/Wrapper";
import HomeImage from "./components/HomeImage";
import Quotes from "./components/Quotes";
import RandomButton from "./components/RandomButton";

function App() {
  return (
    <AppWrapper>
      <h3>Hello Quotes</h3>
      <ContentWrapper>
        <Quotes quote='test quote' author='test author' date='test date' />
        <HomeImage />
      </ContentWrapper>
      <RandomButton />
    </AppWrapper>
  );
}

export default App;
