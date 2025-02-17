import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { NavMenu } from "../../constant/navMenu";
import { cn } from "../../utils/utils";
import Logo from "../Logo";

type NavbarProps = {
  className?: string;
  exposeRef?: (ref: HTMLDivElement) => void;
};

const Root = styled.div({
  width: "100%",
  height: "max-content",
});

const MenuContainer = styled.div({
  width: "max-content",
  height: "max-content",
  fontFamily: "Nunito",
  fontWeight: "700",
});

const Navbar = ({ className, exposeRef }: NavbarProps) => {
  const [scroll, setScroll] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const scrollFunction = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else setScroll(false);
  };

  window.addEventListener("scroll", scrollFunction);

  useEffect(() => {
    if (!exposeRef || !rootRef.current) return;
    exposeRef(rootRef.current);
  }, [exposeRef, rootRef]);

  return (
    <Root
      ref={rootRef}
      id="navbar"
      className={cn(
        "px-[32px] py-[30px] flex flex-row items-center justify-between transition-all fixed bg-[rgba(0,0,0,0)] z-10",
        { [`bg-[#0A1045] px-5 py-3`]: scroll },
        className
      )}
    >
      <Logo />
      <MenuContainer className="w-max h-max text-lg text-[#dadefb] flex flex-row gap-5 items-center justify-center">
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
                  className="w-max h-max px-2 py-1 flex items-center justify-center bg-[#dadefb] rounded-full text-[#0A1045] hover:cursor-pointer hover:bg-[#FDE12D] transition-all hover:scale-105"
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
