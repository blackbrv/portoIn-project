type NavMenuProps = {
  title: string;
  value: string;
  src: string;
};

export const NavMenu: NavMenuProps[] = [
  { title: "Home", value: "Home", src: "/" },
  { title: "Template", value: "Template", src: "/template" },
  {
    title: "Design Your Own",
    value: "Design Your Own",
    src: "/design-your-own",
  },
];
