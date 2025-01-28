import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import styled from "styled-components";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
} & { css?: React.CSSProperties };

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

const StyledDiv = styled.div({});
const Button = styled.button({});
const SrOnlySpan = styled.span({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
});

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    CarouselProps & { css?: React.CSSProperties }
>(
  (
    {
      children,
      orientation = "horizontal",
      opts,
      setApi,
      css,
      plugins,
      ...rest
    },
    forwardRef
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <StyledDiv
          ref={forwardRef}
          onKeyDownCapture={handleKeyDown}
          style={{ position: "relative", ...css }}
          role="region"
          aria-roledescription="carousel"
          {...rest}
        >
          {children}
        </StyledDiv>
      </CarouselContext.Provider>
    );
  }
);

export type CarouselContentProps = React.HTMLAttributes<HTMLDivElement> & {
  css?: React.CSSProperties;
};
const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ children, css, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    const baseStyles =
      orientation === "horizontal"
        ? { display: "flex", marginLeft: "-1rem" }
        : { display: "flex", marginTop: "-1rem", flexDirection: "column" };
    return (
      <div ref={carouselRef} style={{ overflow: "hidden" }}>
        <StyledDiv
          ref={ref}
          style={{ ...baseStyles, ...css } as React.CSSProperties}
          {...props}
        >
          {children}
        </StyledDiv>
      </div>
    );
  }
);

type CarouselItemProps = React.HTMLAttributes<HTMLDivElement> & {
  css?: React.CSSProperties;
};
const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ css, ...props }, ref) => {
    const { orientation } = useCarousel();
    let baseStyles = {
      minWidth: 0,
      flexShrink: 0,
      flexGrow: 0,
      flexBasis: "100%",
    };
    const h = { paddingLeft: "1rem" };
    const v = { paddingTop: "1rem" };
    if (orientation === "vertical") baseStyles = { ...baseStyles, ...v };
    else baseStyles = { ...baseStyles, ...h };
    return (
      <StyledDiv
        ref={ref}
        role="group"
        aria-roledescription="slide"
        style={{ ...baseStyles, ...css }}
        {...props}
      />
    );
  }
);

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button> & { css?: React.CSSProperties }
>(({ children, css, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  let baseStyles = {
    position: "absolute",
    borderRadius: "50%",
    width: "1.5rem",
    height: "1.5rem",
    left: "-3rem",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: canScrollPrev ? "pointer" : "",
  };
  const v = {
    top: "-3rem",
    left: "50%",
    transform: "translateX(-50%) rotate(90deg)",
  };
  if (orientation === "vertical") baseStyles = { ...baseStyles, ...v };
  const style = { ...baseStyles, ...css };
  return (
    <Button
      ref={ref}
      style={style as React.CSSProperties}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      {children}
      <SrOnlySpan />
    </Button>
  );
});

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button> & { css?: React.CSSProperties }
>(({ children, css, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  let baseStyles = {
    position: "absolute",
    borderRadius: "50%",
    width: "1.5rem",
    height: "1.5rem",
    right: "-3rem",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: canScrollNext ? "pointer" : "",
  };

  const v = {
    bottom: "-3rem",
    left: "50%",
    transform: "translateX(-50%) rotate(90deg)",
  };

  if (orientation === "vertical") baseStyles = { ...baseStyles, ...v };
  const style = { ...baseStyles, ...css };

  return (
    <Button
      ref={ref}
      style={style as React.CSSProperties}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      {children}
      <SrOnlySpan />
    </Button>
  );
});

const PaginationHolder = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { css?: React.CSSProperties }
>(({ children, css, ...props }, ref) => {
  const styles: React.CSSProperties = {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.02rem",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    height: "auto",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "0.5rem",
    padding: "5px",
  };

  const style = { ...styles, ...css };

  return (
    <StyledDiv ref={ref} style={style} {...props}>
      {children}
    </StyledDiv>
  );
});

//Components
const CustomPagination = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button> & { css?: React.CSSProperties }
>(({ children, css, ...props }, ref) => {
  return (
    <Button ref={ref} style={css} {...props}>
      {children}
    </Button>
  );
});

Carousel.displayName = "Carousel";
CarouselContent.displayName = "CarouselContent";
CarouselItem.displayName = "CarouselItem";
CarouselPrevious.displayName = "CarouselPrevious";
CarouselNext.displayName = "CarouselNext";
PaginationHolder.displayName = "CarouselPaginationHolder";
CustomPagination.displayName = "CarouselPagination";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  PaginationHolder,
  CustomPagination,
};
