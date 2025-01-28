import { useState } from "react";
import { IcChevronLeft } from "../../assets/iconify";
import { content, listContent } from "../../constant/constatLIst";
import {
  Carousel as C,
  DefaultPagination,
  useDotButton,
} from "../agnostic/carousel";
import { type UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Benefits = () => {
  const [cRef, setCRef] = useState<HTMLDivElement | null>(null);
  const [apis, setApis] = useState<UseEmblaCarouselType[1] | undefined>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(apis);
  const carHeight = cRef ? cRef.getBoundingClientRect() : null;

  return (
    <section
      id="benefits"
      className="w-full h-screen bg-[#dadefb] flex col-span-2 flex-row"
    >
      <div className="w-full h-full flex flex-col items-start justify-start p-[32px] gap-5 text-[#0A1045]">
        <h1 className="text-[3rem] font-bold font-[Inter]">
          Why Portofolios Matter ?
        </h1>
        <p className="text-[1.5rem] font-medium font-[Inter] italic text-wrap">
          “85% of recruiters say a strong portfolio is key to understanding a
          candidate’s skills and potential.”
        </p>
        <div className="w-full my-[32px]">
          {listContent.map((item, index) => {
            return (
              <div
                className="w-full h-max py-5 flex flex-col text-[1.5rem] font-medium"
                key={index}
              >
                <div className="w-full h-max flex flex-row gap-2 items-center">
                  <IcChevronLeft className="w-5 h-5 font-bold rotate-180" />
                  <h1>{item.title}</h1>
                </div>
                <p>{item.parag}</p>
              </div>
            );
          })}
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <a
            href="https://google.com"
            rel="noreferer"
            target="_blank"
            className="w-max h-max bg-[#0A1045] rounded-lg p-3 text-xl font-bold text-[#dadefb] tracking-wide hover:scale-105 hover:bg-[#fde12d] hover:text-[#0A1045] transition-all hover:cursor-pointer"
          >
            Start Building Your Portfolio Today!
          </a>
        </div>
      </div>
      <div className="w-full h-full p-[52px] flex flex-col items-center justify-center">
        <C.Carousel
          setApi={(val) => setApis(val)}
          ref={(c) => setCRef(c)}
          css={{ position: "relative", width: "100%", height: "100%" }}
          plugins={[
            Autoplay({
              playOnInit: true,
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <C.CarouselContent
            css={{
              height: carHeight?.height ?? "100%",
            }}
          >
            {content.map((item, index) => (
              <C.CarouselItem css={{ height: "100%", borderRadius: "8px" }}>
                <img
                  key={index}
                  src={item.src}
                  className="h-full w-full object-cover rounded-lg"
                />
              </C.CarouselItem>
            ))}
          </C.CarouselContent>
          <C.PaginationHolder>
            {scrollSnaps.map((_, index) => {
              return (
                <C.CustomPagination
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                >
                  <DefaultPagination
                    selectedIndex={selectedIndex}
                    index={index}
                  />
                </C.CustomPagination>
              );
            })}
          </C.PaginationHolder>
        </C.Carousel>
      </div>
    </section>
  );
};

export default Benefits;
