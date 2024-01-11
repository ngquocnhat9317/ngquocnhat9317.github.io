import React, {
  ElementRef,
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";

import { IMAGE_KIT_URL } from "@/utils/const";

type ImageProps = {
  path: string;
  alt: string;
};

const ImageKit = memo((props: ImageProps) => {
  const [[widthImage, heightImage], setImageSize] = useState<[number, number]>([100, 133]);
  const refSpan = useRef<ElementRef<"span">>(null);

  useEffect(() => {
    const setImageSizeHandle = () => {
      const width = refSpan.current?.clientWidth ?? 0;
      setImageSize([width, Math.floor((width * 4) / 3)]);
    };

    window.addEventListener("resize", setImageSizeHandle);
    const timeout = setTimeout(setImageSizeHandle, 10);

    return () => {
      window.removeEventListener("resize", setImageSizeHandle);
      clearTimeout(timeout);
    };
  }, []);

  const srcMemo = useMemo(() => {
    let path = props.path;
    if (path.startsWith("/")) path = path.slice(1);
    const params = ["q-100", "f-webp"];
    const paramsString = params.join(",");

    return `${IMAGE_KIT_URL}/${path}?tr=${paramsString}`;
  }, [props.path]);

  return (
    <span ref={refSpan}>
      <Image
        src={srcMemo}
        alt={props.alt}
        width={widthImage}
        height={heightImage}
        placeholder='blur'
        style={{
          objectFit: "cover",
          display: "block",
          width: widthImage,
          height: heightImage,
        }}
        sizes='100%'
        loading='lazy'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII='
      />
    </span>
  );
});

ImageKit.displayName = "ImageKit";

export default ImageKit;
