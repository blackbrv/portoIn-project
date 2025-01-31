import Benefits from "../components/content/benefits";
import CheckTemplate from "../components/content/checkTemplate";
import FrequentlyAskedQuestion from "../components/content/frequentlyAskedQuestion";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Benefits />
      <CheckTemplate />
      <FrequentlyAskedQuestion />
    </>
  );
};

export default LandingPage;
