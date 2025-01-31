import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";

const Body = styled.div({
  fontFamily: "Inter",
  width: "100%",
  height: "calc(100vh)",
  backgroundColor: "#dadefb",
  display: "flex",
});

const TemplatePage = () => {
  return (
    <>
      <Navbar className="relative bg-[#0A1045] px-5 py-3" />
      <Body>
        <div
          id="left-panel"
          className=" w-[calc(100vh/4)] h-screen shadow-xl px-[8px] py-[16px]"
        >
          Panel page
        </div>
      </Body>
    </>
  );
};

export default TemplatePage;
