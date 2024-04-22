import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";


export default function Home() {
  return (
    <main className='h-screen w-full overflow-x-hidden overflow-y-auto snap-mandatory snap-y no-scrollbar'>
      <SectionOne />
      <SectionTwo />
    </main>
  );
}
