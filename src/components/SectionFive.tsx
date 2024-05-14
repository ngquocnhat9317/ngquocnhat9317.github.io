import Image from "next/image";
import { memo, useCallback, useEffect, useState } from "react";

import { CrimsonText } from "@/fonts";
import stylesLayout from "@/styles/Layout.module.scss";
import stylesSectionThree from "@/styles/SectionThree.module.scss";
import { _clsx } from "@/utilities/common";
import { HEADER } from "@/utilities/constant";

type BankInfoRowProps = {
  content: string;
};

const SectionFive = memo(() => {
  return (
    <section
      className={_clsx(
        "h-full snap-always snap-center box-border w-full",
        "flex justify-center items-center",
        "mx-auto bg-[#edd6c2]",
      )}
      id={HEADER.section_5.id}
    >
      <div
        className={_clsx(
          "h-[90%] md:h-[80%] w-[90%] lg:w-3/4 relative",
          "bg-[#fcf8f7] rounded-lg",
          "flex justify-center items-center flex-col md:flex-row",
        )}
      >
        <div
          className={_clsx(
            "h-[300px] w-[300px] m-[20px]",
            "rounded-lg relative overflow-hidden",
            "border-solid border-[#846860] border-2",
          )}
        >
          <Image src="images/qr_code.jpg" alt="" fill />
        </div>

        <div className="w-[300px] h-[140px] grid grid-cols-6 gap-[10px]">
          <BankInfoRow content="TECHCOMBANK" />
          <BankInfoRow content="NGUYEN DOAN QUOC NHAT" />
          <BankInfoRow content="19035241900011" />
        </div>
        <p className="absolute text-[10px] bottom-[5px] right-[10px] text-[#bbb]">@Made by Quắc Tô</p>
      </div>
    </section>
  );
});

const BankInfoRow = memo(({ content }: BankInfoRowProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    let i: NodeJS.Timeout | undefined = undefined;
    if (isCopied) {
      i = setTimeout(() => setIsCopied(false), 3000);
    }

    return () => clearTimeout(i);
  }, [isCopied]);

  const copyClipboard = useCallback(() => {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
  }, [content]);

  return (
    <>
      <div
        className={_clsx(
          "grid col-span-5 h-[40px]",
          "bg-white content-center",
          "rounded-md border-solid border-[#846860] border-2",
        )}
      >
        <p
          className={_clsx(
            "text-center m-0 font-bold text-[#333]",
            CrimsonText.className,
            stylesSectionThree.text_story,
          )}
        >
          {content}
        </p>
      </div>
      <div
        className={_clsx(
          "bg-[#846860] h-[40px]",
          "rounded-md border-solid border-[#846860] border-2",
          "flex justify-center items-center",
        )}
      >
        <button
          type="button"
          onClick={copyClipboard}
          className={_clsx(
            stylesLayout.icon,
            isCopied ? stylesLayout.icon_check : stylesLayout.icon_copy,
            "w-[70%] h-[70%]",
          )}
        />
      </div>
    </>
  );
});

BankInfoRow.displayName = "BankInfoRow";

SectionFive.displayName = "SectionFive";

export default SectionFive;
