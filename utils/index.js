export const checkImageUrl = (url) => {
  if (!url) return false;
  else {
    const pattern = new ReqExp(
      `^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$`,
      "i"
    );
    return pattern.test(url);
  }
};
