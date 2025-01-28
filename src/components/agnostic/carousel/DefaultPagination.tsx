import styled from "styled-components";

type DefaultPaginationProps = {
  selectedIndex: number;
  index: number;
};

const StyledDiv = styled.div({
  width: "0.75rem",
  height: "0.75rem",
  backgroundColor: "rgba(255,255,255,.5)",
  borderWidth: "1px",
  borderColor: "white",
  borderRadius: "999px",
  transition: "all",
  "&:hover": {
    width: "1rem",
    height: "1rem",
  },
});

const DefaultPagination = (props: DefaultPaginationProps) => {
  const { selectedIndex, index } = props;

  return (
    <StyledDiv
      key={index}
      style={{
        width: selectedIndex === index ? "1rem" : "",
        height: selectedIndex === index ? "1rem" : "",
        cursor: selectedIndex === index ? "auto" : "pointer",
        backgroundColor: selectedIndex === index ? "white" : "",
      }}
    ></StyledDiv>
  );
};

export default DefaultPagination;
