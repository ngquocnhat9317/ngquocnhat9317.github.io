import ImageNext, { ImageLoaderProps } from "next/image";
import React, { memo } from "react";

const imageKitLoader = ({ src, width, quality }: ImageLoaderProps) => {
  if (src.startsWith("/")) src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");
  const urlEndpoint = process.env.NEXT_PUBLIC_BASE_URL || "";
  return `${urlEndpoint}/${src}?tr=${paramsString}`;
};

type ImageProps = {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
};

const Image = memo((props: ImageProps) => {
  return (
    <ImageNext
      {...props}
      loader={imageKitLoader}
      placeholder='blur'
      blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII='
    />
  );
});

Image.displayName = "Image";

export default Image;
