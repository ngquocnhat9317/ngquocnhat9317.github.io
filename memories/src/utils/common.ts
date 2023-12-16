export const _clx = (...str: (string | undefined | boolean)[]) => {
  return str.filter(i => i !== undefined && typeof i !== "boolean").join(" ");
};

export const getLocalStorage = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) ?? "");
  } catch {
    return null;
  }
};

export const setLocalStorage = (key: string, value: unknown) => {
  if (typeof window !== "undefined")
    localStorage.setItem(key, JSON.stringify(value));
};