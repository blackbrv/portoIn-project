import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import {
  Carousel as C,
  DefaultPagination,
  useDotButton,
} from "../components/agnostic/carousel";
import { type UseEmblaCarouselType } from "embla-carousel-react";
import { useState } from "react";
import { portoTemplates } from "../constant/constatLIst";

const Body = styled.div({
  fontFamily: "Nunito",
  width: "100%",
  backgroundColor: "#dadefb",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  overflow: "hidden",
});

const TemplatePage = () => {
  const [navRef, setNavRef] = useState<HTMLDivElement | null>(null);
  const navHeight = navRef?.getBoundingClientRect().height;

  const [apis, setApis] = useState<UseEmblaCarouselType[1] | undefined>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(apis);

  return (
    <>
      <Navbar
        className="relative bg-[#0A1045] px-5 py-3"
        exposeRef={(ref) => setNavRef(ref)}
        whichActive="template"
      />
      <Body
        style={{
          height: `calc(100vh - ${navHeight}px)`,
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div className="text-[3rem] font-bold text-center mt-[1rem]">
          Pick one of the template
        </div>
        <C.Carousel
          css={{
            width: "100%",
            position: "relative",
            height: "max-content",
            marginTop: "auto",
            marginBottom: "auto",
          }}
          setApi={(api) => setApis(api)}
        >
          <C.CarouselContent
            style={{
              display: "flex",
              marginLeft: "-1rem",
              marginRight: "1rem",
              gap: "5rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            {portoTemplates.map((item, index) => {
              return (
                <C.CarouselItem
                  key={index}
                  style={{
                    height: "600px",
                    borderRadius: "1rem",
                    minWidth: 0,
                    flexShrink: 0,
                    flexGrow: 0,
                  }}
                >
                  <a
                    style={{ borderRadius: "inherit" }}
                    href={item.href}
                    rel="noreferer"
                  >
                    <img
                      src={item.src}
                      className="h-full object-cover object-center"
                      style={{ borderRadius: "inherit" }}
                    />
                  </a>
                </C.CarouselItem>
              );
            })}
          </C.CarouselContent>
          <C.PaginationHolder css={{ bottom: "-1rem", position: "relative" }}>
            {scrollSnaps.map((_, index) => {
              return (
                <C.CustomPagination
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                >
                  <DefaultPagination
                    index={index}
                    selectedIndex={selectedIndex}
                    activeColor="#0A1045"
                    inActiveColor="rgba(10,16,69,.5)"
                  />
                </C.CustomPagination>
              );
            })}
          </C.PaginationHolder>
        </C.Carousel>
      </Body>
    </>
  );
};

export default TemplatePage;
