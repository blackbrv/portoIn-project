type NavMenuProps = {
  title: string;
  value: string;
  src: string;
};

export const NavMenu: NavMenuProps[] = [
  { title: "Home", value: "home", src: "/" },
  { title: "Template", value: "template", src: "/template" },
  {
    title: "Design Your Own",
    value: "design-your-own",
    src: "/design-your-own",
  },
];
