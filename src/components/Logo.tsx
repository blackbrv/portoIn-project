import { cn } from "../utils/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <a
      id="logo"
      className={cn(
        "w-max h-max p-2 text-white font-[Konkhmer_Sleokchher] flex flex-row text-2xl cursor-pointer transition-all hover:scale-105",
        className
      )}
      href="/"
    >
      <p>Porto</p>
      <p className="text-[#FDE12D]">In</p>
    </a>
  );
}
