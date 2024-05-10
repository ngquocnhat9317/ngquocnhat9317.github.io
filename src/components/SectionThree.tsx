import { memo } from "react";

const SectionThree = memo(() => {
  return (
    <section
      className="h-full snap-always snap-center box-border w-full lg:w-4/5 flex justify-center mx-auto"
      id="section_three"
    >
      <div />
    </section>
  );
});

SectionThree.displayName = "SectionThree";

export default SectionThree;
