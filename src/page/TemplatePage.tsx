import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import { UnderDevel } from "../assets/iconify";
import { useState } from "react";

const Body = styled.div({
  fontFamily: "Nunito",
  width: "100%",
  // backgroundColor: "#dadefb",
  display: "flex",
});

const TemplatePage = () => {
  const [navRef, setNavRef] = useState<HTMLDivElement | null>(null);
  const navHeight = navRef?.getBoundingClientRect().height;

  return (
    <>
      <Navbar
        className="relative bg-[#0A1045] px-5 py-3"
        exposeRef={(ref) => setNavRef(ref)}
      />
      <Body
        className="items-center justify-center flex-col"
        style={{
          height: `calc(100vh - ${navHeight}px)`,
        }}
      >
        <UnderDevel className="fill-transparent w-full h-full]" />
        <h1 className="text-[5rem] font-semibold text-wrap text-center">
          UNDER <br /> DEVELOPMENT!
        </h1>
      </Body>
    </>
  );
};

export default TemplatePage;
