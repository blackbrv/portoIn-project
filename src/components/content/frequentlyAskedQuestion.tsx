import { useState } from "react";
import { IcChevronLeft } from "../../assets/iconify";
import { content, Faqu } from "../../constant/constatLIst";
import { Accordion as A } from "../agnostic/accordion";
import {
  DefaultPagination,
  useDotButton,
  Carousel as C,
} from "../agnostic/carousel";
import { type UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const FrequentlyAskedQuestion = () => {
  const [cRef, setCRef] = useState<HTMLDivElement | null>(null);
  const [apis, setApis] = useState<UseEmblaCarouselType[1] | undefined>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(apis);
  const carHeight = cRef ? cRef.getBoundingClientRect() : null;

  return (
    <section
      id="benefits"
      className="w-full h-[calc(100vh/1.5)] bg-[#dadefb] flex flex-row col-span-2 transition-all"
    >
      <div className="w-full h-full p-[32px] flex flex-col items-center justify-center">
        <C.Carousel
          setApi={(val) => setApis(val)}
          ref={(c) => setCRef(c)}
          css={{ position: "relative", width: "100%", height: "100%" }}
          plugins={[
            Autoplay({
              playOnInit: true,
              delay: 5000,
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
              <C.CarouselItem css={{ height: "100%", borderRadius: "2.5rem" }}>
                <img
                  key={index}
                  src={item.src}
                  className="h-full w-full object-cover"
                  style={{ borderRadius: "inherit" }}
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
      <div className="w-full py-[50px] px-[32px] flex flex-col items-center font-[Nunito] text-[#0A1045] gap-[5rem]">
        <h1 className="text-[2.5rem] font-bold"> Frequently Asked Question </h1>
        <div className="w-full">
          <A.Root type="single" collapsible>
            {Faqu.map((item, index) => {
              return (
                <A.Item value={`${index}`} key={index}>
                  <A.Trigger
                    className="group"
                    css={{
                      justifyContent: "space-between",
                      fontSize: "1.2rem",
                      alignItems: "center",
                    }}
                  >
                    <A.Header>{item.title}</A.Header>
                    <IcChevronLeft
                      className="w-[1.5rem] h-[1.5rem] font-black rotate-270 group-data-[state=open]:rotate-90 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)]"
                      aria-hidden
                    />
                  </A.Trigger>
                  <A.Content>{item.content}</A.Content>
                </A.Item>
              );
            })}
          </A.Root>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestion;
