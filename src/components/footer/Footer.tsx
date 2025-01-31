import { socialLinks } from "../../constant/constatLIst";
import Logo from "../Logo";
import { cn } from "../../utils/utils";

const Footer = () => {
  return (
    <section className="w-full h-[calc(100vh/4)] bg-[#0A1045] p-[32px] text-[#dadefb] text-[1.5rem] font-medium font-[Inter] flex col-span-2 justify-center items-center">
      <div className="w-full h-full flex items-start justify-center flex-col px-[32px]">
        <Logo className="text-[50px] p-0 hover:scale-100" />
        <p className="text-[15px] font-normal -mt-3">PortoIn, 2025.</p>
      </div>
      <div className="w-full h-full flex flex-row items-center justify-center">
        <div className="w-full h-max">
          <p>Have Any Question ?</p>
          <p>Meet the creators !</p>
        </div>
        <div className="w-full h-max flex gap-3">
          {socialLinks.map((item, index) => {
            return (
              <a
                href={item.href}
                key={index}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <item.ico
                  className={cn("w-[3rem] h-[3rem]", {
                    ["fill-[#dadefb]"]: item.title !== "Mail",
                  })}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
