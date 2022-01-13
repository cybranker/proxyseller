export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const ucFirst = (str) => {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
