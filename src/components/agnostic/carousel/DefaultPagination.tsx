import { useMemo } from "react";
import styled from "styled-components";

type DefaultPaginationProps = {
  selectedIndex: number;
  index: number;
  inActiveColor?: string;
  activeColor?: string;
};

const StyledDiv = styled.div({
  width: "0.75rem",
  height: "0.75rem",
  borderWidth: "1px",
  borderRadius: "999px",
  transition: "all",
  "&:hover": {
    width: "1rem",
    height: "1rem",
  },
});

const DefaultPagination = (props: DefaultPaginationProps) => {
  const { selectedIndex, index, inActiveColor, activeColor } = props;

  const colorSwatch = useMemo(() => {
    let color: string | undefined = "white";
    let inColor: string | undefined = "rgba(255,255,255,.5)";

    if (inActiveColor || activeColor) {
      color = activeColor;
      inColor = inActiveColor;
    }
    return { color, inColor };
  }, [inActiveColor, activeColor]);

  return (
    <StyledDiv
      key={index}
      style={{
        width: selectedIndex === index ? "1rem" : "",
        height: selectedIndex === index ? "1rem" : "",
        cursor: selectedIndex === index ? "auto" : "pointer",
        backgroundColor:
          selectedIndex === index ? colorSwatch.color : colorSwatch.inColor,
        borderColor: colorSwatch.color,
      }}
    ></StyledDiv>
  );
};

export default DefaultPagination;
