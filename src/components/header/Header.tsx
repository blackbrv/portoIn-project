import { IcChevronLeft } from "../../assets/iconify";
import { Carousel as C } from "../agnostic/carousel";

const content = [
  {
    content: "Build Your Story, Showcase Your Skills",
    src: "https://r4.wallpaperflare.com/wallpaper/892/692/922/howl-s-moving-castle-studio-ghibli-fantasy-art-clouds-daylight-hd-wallpaper-3be62c2d93012fc995842bf94d4cdc00.jpg",
  },
  {
    content: "Your Dream Job, Start With a Good Portofolio",
    src: "https://r4.wallpaperflare.com/wallpaper/145/482/535/ocean-view-room-digital-art-anime-painting-hd-wallpaper-1816bd8860e0ece8400cb13e48a2346a.jpg",
  },
  {
    content: "Portofolios Made Simple, Jobs Made Possible",
    src: "https://r4.wallpaperflare.com/wallpaper/587/793/76/alexandre-cabanel-painting-angel-fallen-angel-hd-wallpaper-03ea33eae8c5cc1dc8422e63b1883241.jpg",
  },
];

const defaultCarousel: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const prevBtn: React.CSSProperties = {
  paddingTop: 5,
  paddingLeft: 5,
  paddingRight: 5,
  paddingBottom: 5,
  left: "0.3rem",
  width: "auto",
  height: "auto",
};

const carouselCont: React.CSSProperties = {
  height: "calc(100vh)",
};

const nextBtn: React.CSSProperties = {
  paddingTop: 5,
  paddingLeft: 5,
  paddingRight: 5,
  paddingBottom: 5,
  right: "0.3rem",
  width: "auto",
  height: "auto",
};

const carItem: React.CSSProperties = {
  paddingLeft: "16px",
  paddingRight: "0px",
  color: "white",
  width: "100%",
};

const Header = () => {
  return (
    <div className="w-full h-[100vh] bg-[#0A1045]">
      <C.Carousel css={defaultCarousel}>
        <C.CarouselContent css={carouselCont}>
          {content.map((item, index) => (
            <C.CarouselItem key={index} css={carItem}>
              <div className="w-full h-full">
                <img
                  src={item.src}
                  className="w-full h-full -z-50 object-cover absolute"
                />
                <div className="z-50 w-full h-full flex items-center justify-center text-[5rem] font-black text-center font-[Konkhmer_Sleokchher] bg-[rgba(0,0,0,.5)] absolute backdrop-blur-md text-wrap tracking-widest p-32">
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
    </div>
  );
};

export default Header;
