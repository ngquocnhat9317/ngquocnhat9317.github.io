import SectionOne from "@/components/SectionOne";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";

export default function Home() {
  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-auto snap-mandatory snap-y no-scrollbar">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}
