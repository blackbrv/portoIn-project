import { Carousel as C } from "../agnostic/carousel";

const totalItem = 5;
const item = Array.from(Array(totalItem).keys());

const Header = () => {
  return (
    <div className="w-full h-max p-5 bg-[#0A1045] bg-red-500">
      <C.Carousel className="bg-green-500 w-full h-full p-5">
        <C.CarouselContent>
          {item.map((item, index) => (
            <C.CarouselItem key={index}>{index}</C.CarouselItem>
          ))}
        </C.CarouselContent>
        <C.CarouselPrevious>ico</C.CarouselPrevious>
        <C.CarouselNext>ico</C.CarouselNext>
      </C.Carousel>
    </div>
  );
};

export default Header;
