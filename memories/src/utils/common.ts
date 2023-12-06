export const _clx = (...str: (string | undefined | boolean)[]) => {
  return str.filter(i => i !== undefined && typeof i !== 'boolean').join(' ');
};