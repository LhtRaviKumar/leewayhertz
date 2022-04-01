import "./App.css";
import Customer from "./Customer";
import Industries from "./Industries";
import Insights from "./Insights";
import Nav from "./Nav";
import News from "./News";
import Slide1 from "./Slide1";
import Technologies from "./Technologies";
import Work from "./Work";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Nav />
      <Slide1 />
      <img className="mt-10 hidden lg:flex" src="slideclients.png" alt=""></img>
      {/* companies */}
      <Technologies />
      <Industries />
      <Work />
      <Insights />
      <Customer />
      <News />
    </>
  );
}

export default App;
