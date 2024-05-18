import { memo } from "react";

import { _clsx } from "@/utilities/common";

const Points = memo(({ index, maxIndex }: Readonly<{ index: number; maxIndex: number }>) => {
  return (
    <div className="absolute right-[5px] top-[50%] -translate-y-[50%] grid gap-[8px]">
      {Array(maxIndex + 1)
        .fill(0)
        .map((_, _index) => (
          <div
            key={_index}
            className={_clsx(
              "h-[10px] w-[8px] rounded-[4px] bg-[#5c5c44] opacity-30",
              _index === index && "!opacity-100",
            )}
          />
        ))}
    </div>
  );
});

Points.displayName = "Points";

export default Points;
