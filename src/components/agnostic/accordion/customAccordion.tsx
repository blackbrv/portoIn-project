import * as Accordion from "@radix-ui/react-accordion";
import React from "react";
import styled, { keyframes } from "styled-components";

const StyledRoot = styled(Accordion.Root)({});

const StyledItem = styled(Accordion.Item)({
  width: "100%",
  height: "max-content",
  padding: "8px 12px",
  backgroundColor: "inherit",
});

const StyledHeader = styled(Accordion.Header)({
  all: "unset",
  width: "max-content",
  height: "max-content",
  paddingLeft: "8px",
  paddingRight: "8px",
  paddingTop: "12px",
  paddingBottom: "12px",
  backgroundColor: "inherit",
});

const StyledTrigger = styled(Accordion.Trigger)({
  width: "100%",
  height: "max-content",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  backgroundColor: "inherit",
});

const slideDown = keyframes`
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }`;

const slideUp = keyframes`
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }`;

const StyledContent = styled(Accordion.Content)`
  width: 100%;
  height: max-content;
  padding: 8px;
  background-color: inherit;
  overflow: hidden;

  &[data-state="open"] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state="closed"] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;

type RootProps = (
  | Accordion.AccordionSingleProps
  | Accordion.AccordionMultipleProps
) &
  React.RefAttributes<HTMLDivElement> & {
    css?: React.CSSProperties;
  };

type ItemProps = Accordion.AccordionItemProps &
  React.RefAttributes<HTMLDivElement> & {
    css?: React.CSSProperties;
  };

type HeaderProps = Accordion.AccordionHeaderProps &
  React.RefAttributes<HTMLDivElement> & {
    css?: React.CSSProperties;
  };

type TriggerProps = Accordion.AccordionTriggerProps &
  React.RefAttributes<HTMLButtonElement> & {
    css?: React.CSSProperties;
  };

type ContentProps = Accordion.AccordionContentProps &
  React.RefAttributes<HTMLDivElement> & {
    css?: React.CSSProperties;
  };

const Root = React.forwardRef<HTMLDivElement, RootProps>(
  ({ children, css, ...rest }, ref) => (
    <StyledRoot ref={ref} style={css} {...rest}>
      {children}
    </StyledRoot>
  )
);

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ children, css, ...rest }, forwardRef) => (
    <StyledItem ref={forwardRef} style={css} {...rest}>
      {children}
    </StyledItem>
  )
);

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, css, ...rest }, forwardRef) => (
    <StyledHeader ref={forwardRef} style={css} {...rest}>
      {children}
    </StyledHeader>
  )
);

const Trigger = React.forwardRef<HTMLButtonElement, TriggerProps>(
  ({ children, css, ...rest }, forwardRef) => (
    <StyledTrigger ref={forwardRef} style={css} {...rest}>
      {children}
    </StyledTrigger>
  )
);

const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ children, css, ...rest }, forwardRef) => (
    <StyledContent ref={forwardRef} style={css} {...rest}>
      {children}
    </StyledContent>
  )
);

Root.displayName = "Root";

Item.displayName = "Item";

Trigger.displayName = "Trigger";

Content.displayName = "Content";

Header.displayName = "Header";

export { Root, Item, Trigger, Content, Header };
