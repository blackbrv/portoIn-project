import styled from "styled-components";
import { NavMenu } from "../../constant/navMenu";
import { cn } from "../../utils/utils";

const Root = styled.div({
  width: "100%",
  height: "max-content",
});

const MenuContainer = styled.div({
  width: "max-content",
  height: "max-content",
  fontFamily: "Inter",
  fontWeight: "600",
});

const Logo = () => {
  return (
    <a
      className="w-max h-max p-2 text-white font-[Konkhmer_Sleokchher] flex flex-row text-2xl cursor-pointer transition-all hover:scale-105"
      href="/"
    >
      <p>Porto</p>
      <p className="text-[#FDE12D]">In</p>
    </a>
  );
};

const Navbar = ({ className }: { className?: string }) => {
  return (
    <Root
      className={cn(
        "bg-[#0A1045] px-5 py-3 flex flex-row items-center justify-between",
        className
      )}
    >
      <Logo />
      <MenuContainer className="w-max h-max text-lg text-white flex flex-row gap-5 items-center justify-center">
        {NavMenu.map((item, index) => {
          console.log(index);
          return (
            <>
              {index !== NavMenu.length - 1 ? (
                <a
                  href={item.src}
                  key={index}
                  className="hover:cursor-pointer transition-all hover:text-[#FDE12D]"
                >
                  {item.value}
                </a>
              ) : (
                <a
                  href={item.src}
                  key={index}
                  className="w-max h-max px-2 py-1 flex items-center justify-center bg-white rounded-full text-[#0A1045] hover:cursor-pointer hover:bg-[#FDE12D] transition-all"
                >
                  {item.value}
                </a>
              )}
            </>
          );
        })}
      </MenuContainer>
    </Root>
  );
};

export default Navbar;
