import Image from "next/image";
import { memo } from "react";

import { BLUR_URL } from "@/utilities/constant";

type StoryImageProps = {
  src: string;
};

const StoryImage = memo(({ src }: StoryImageProps) => {
  return (
    <Image
      className="w-[90%] max-w-[320px] aspect-square rounded-md mb-[30px] lg:mb-0 mt-[-50px] lg:mt-0 bg-white"
      src={src}
      alt=""
      width={350}
      height={350}
      placeholder="blur"
      blurDataURL={BLUR_URL}
      style={{
        objectFit: "contain",
      }}
    />
  );
});

StoryImage.displayName = "StoryImage";

export default StoryImage;
