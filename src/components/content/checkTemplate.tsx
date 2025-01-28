import { useState } from "react";
import { content } from "../../constant/constatLIst";
import { type UseEmblaCarouselType } from "embla-carousel-react";

import {
  Carousel as C,
  DefaultPagination,
  useDotButton,
} from "../agnostic/carousel";

const CheckTemplate = () => {
  const [carouselRef, setCarouselRef] = useState<HTMLDivElement | null>(null);
  const [apis, setApis] = useState<UseEmblaCarouselType[1] | undefined>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(apis);
  const carouselSize = carouselRef ? carouselRef.getBoundingClientRect() : null;

  return (
    <section
      id="benefits"
      className="w-full h-max bg-[#0A1045] relative flex col-span-2 flex-row items-start justify-center py-[22px]"
    >
      <div className="w-full h-full flex flex-col gap-3">
        <h1 className="text-white text-[3rem] text-center font-[Inter] font-bold">
          Checkout Our Template
        </h1>
        <div className="bg-[rgba(0,0,0,.3)] w-full h-full py-[32px]">
          <C.Carousel
            css={{ width: "100%", height: "max-content" }}
            ref={(ref) => setCarouselRef(ref)}
            setApi={(api) => setApis(api)}
          >
            <C.CarouselContent
              style={{
                display: "flex",
                marginLeft: "-1rem",
                gap: "5rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}
            >
              {content.map((item, index) => {
                return (
                  <C.CarouselItem
                    key={index}
                    style={{
                      width: carouselSize ? carouselSize.width / 3 : "600px",
                      height: carouselSize?.height ?? "100%",
                      borderRadius: "1rem",
                      minWidth: 0,
                      flexShrink: 0,
                      flexGrow: 0,
                      flexBasis: "calc(100%/3)",
                    }}
                  >
                    <img
                      src={item.src}
                      className="h-full object-cover object-center"
                      style={{ borderRadius: "inherit" }}
                    />
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
                    />
                  </C.CustomPagination>
                );
              })}
            </C.PaginationHolder>
          </C.Carousel>
        </div>
        <div className="w-full h-full flex justify-center items-center mt-5">
          <a
            href="https://google.com"
            rel="noreferer"
            target="_blank"
            className="w-max h-max bg-[#dadefb] rounded-lg p-3 text-xl font-bold text-[#0A1045] tracking-wide hover:scale-105 hover:bg-[#fde12d] hover:text-[#0A1045] transition-all hover:cursor-pointer"
          >
            Try it Free!
          </a>
        </div>
      </div>
    </section>
  );
};

export default CheckTemplate;
