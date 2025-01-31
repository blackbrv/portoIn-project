import { IcChevronLeft } from "../../assets/iconify";
import { Faqu } from "../../constant/constatLIst";
import { Accordion as A } from "../agnostic/accordion";

const FrequentlyAskedQuestion = () => {
  return (
    <section
      id="benefits"
      className="w-full h-[calc(100vh/1.5)] bg-[#dadefb] flex flex-row col-span-2 transition-all"
    >
      <div className="w-full h-full p-[32px] flex flex-col items-center justify-center">
        <h1>Carousel</h1>
      </div>
      <div className="w-full h-full py-[50px] px-[32px] flex flex-col items-center font-[Inter] text-[#0A1045] gap-[5rem]">
        <h1 className="text-[2.5rem] font-bold"> Frequently Asked Question </h1>
        <div className="w-full h-full px-[1rem] transition-all">
          <A.Root
            type="single"
            collapsible
            css={{ width: "100%", transition: "all", height: "100%" }}
          >
            {Faqu.map((item, index) => {
              return (
                <A.Item
                  value={`${index}`}
                  key={index}
                  css={{ transition: "all" }}
                >
                  <A.Trigger
                    className="group"
                    css={{
                      justifyContent: "space-between",
                      fontSize: "1.2rem",
                      alignItems: "center",
                    }}
                  >
                    <A.Header>{item.title}</A.Header>
                    <IcChevronLeft className="w-[1.5rem] h-[1.5rem] font-black rotate-270 group-data-[state=open]:rotate-90 transition-transform duration-300 eas-[cubic-bezier(0.87,_0,_0.13,_1)]" />
                  </A.Trigger>
                  <A.Content>{item.content}</A.Content>
                </A.Item>
              );
            })}
          </A.Root>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestion;
