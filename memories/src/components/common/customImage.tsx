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
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
};

const ImageKit = memo((props: ImageProps) => {
  const [[widthImage, heightImage], setImageSize] = useState([100, 133]);
  const refSpan = useRef<ElementRef<"span">>(null);

  useEffect(() => {
    const setImageSizeHandle = () => {
      const width = refSpan.current?.clientWidth ?? 0;
      setImageSize([width, (width * 4) / 3]);
    };

    window.addEventListener("resize", setImageSizeHandle);
    const timeout = setTimeout(setImageSizeHandle, 200);

    return () => {
      window.removeEventListener("resize", setImageSizeHandle);
      clearTimeout(timeout);
    };
  }, []);

  const srcMemo = useMemo(() => {
    let src = props.src;
    if (src.startsWith("/")) src = src.slice(1);
    const params = [`w-${widthImage}`, `h-${heightImage}`, "q-100"];
    const paramsString = params.join(",");

    return `${IMAGE_KIT_URL}/${src}?tr=${paramsString}`;
  }, [props.src, widthImage, heightImage]);

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
