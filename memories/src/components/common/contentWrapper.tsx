import React, { memo } from "react";

type Props = {
  condition: boolean;
  children: React.ReactNode | React.ReactNode[];
};

const ContentWrapper = memo(({ condition, children }: Props) => {
  return condition ? <>{children}</> : null;
});

ContentWrapper.displayName = "ContentWrapper";

export default ContentWrapper;
