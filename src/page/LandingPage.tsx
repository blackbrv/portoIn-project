import Benefits from "../components/content/benefits";
import CheckTemplate from "../components/content/checkTemplate";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Benefits />
      <CheckTemplate />
    </>
  );
};

export default LandingPage;
