import Header from "./components/header/Header";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import HeroBanner from "./components/heroBanner/HeroBanner";
import Body from "./components/Body/Body";

function App() {
  return (
    <>
      <Header />
      <HeroBanner/>
      <Body/>
    </>
  );
}

export default App;
