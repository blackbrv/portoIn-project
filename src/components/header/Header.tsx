import { IcChevronLeft } from "../../assets/iconify";
import {
  carItem,
  carouselCont,
  defaultCarousel,
  nextBtn,
  prevBtn,
} from "../../constant/carouselCss";
import { content } from "../../constant/constatLIst";
import { Carousel as C } from "../agnostic/carousel";

const Header = () => {
  return (
    <section id="header" className="w-full h-[100vh] bg-[#0A1045]">
      <C.Carousel css={defaultCarousel}>
        <C.CarouselContent css={carouselCont}>
          {content.map((item, index) => (
            <C.CarouselItem key={index} css={carItem}>
              <div className="w-full h-full">
                <img
                  src={item.src}
                  className="w-full h-full -z-50 object-cover absolute"
                />
                <div className="z-50 w-full h-full flex items-center justify-center text-[5rem] font-black text-center font-[Inter] bg-[rgba(0,0,0,.5)] absolute backdrop-blur-md text-wrap tracking-widest p-32">
                  {item.content}
                </div>
              </div>
            </C.CarouselItem>
          ))}
        </C.CarouselContent>
        <C.CarouselPrevious css={prevBtn}>
          <IcChevronLeft className="w-[2rem] h-[2rem] text-white" />
        </C.CarouselPrevious>
        <C.CarouselNext css={nextBtn}>
          <IcChevronLeft className="w-[2rem] h-[2rem] rotate-180 text-white" />
        </C.CarouselNext>
      </C.Carousel>
    </section>
  );
};

export default Header;
