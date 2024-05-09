export const _clsx = (...str: (string | undefined | boolean)[]) => {
  return str.filter((i) => i !== undefined && typeof i !== "boolean").join(" ");
};
