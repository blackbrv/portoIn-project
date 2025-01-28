import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar className="absolute bg-transparent z-10" />
      <Header />
    </>
  );
};

export default LandingPage;
