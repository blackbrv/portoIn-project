import { useState } from "react";
import styled from "styled-components";
import { NavMenu } from "../../constant/navMenu";
import { cn } from "../../utils/utils";
import Logo from "../Logo";

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

const Navbar = ({ className }: { className?: string }) => {
  const [scroll, setScroll] = useState<boolean>(false);

  const scrollFunction = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else setScroll(false);
  };

  window.addEventListener("scroll", scrollFunction);

  return (
    <Root
      id="navbar"
      className={cn(
        "px-[32px] py-[30px] flex flex-row items-center justify-between transition-all fixed bg-[rgba(0,0,0,0)] z-10",
        { [`bg-[#0A1045] px-5 py-3`]: scroll },
        className
      )}
    >
      <Logo />
      <MenuContainer className="w-max h-max text-lg text-white flex flex-row gap-5 items-center justify-center">
        {NavMenu.map((item, index) => {
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
                  className="w-max h-max px-2 py-1 flex items-center justify-center bg-white rounded-full text-[#0A1045] hover:cursor-pointer hover:bg-[#FDE12D] transition-all hover:scale-105"
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
