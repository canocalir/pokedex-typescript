export const urlCorrector = (url: string) => {
  if (url === "nidoran-f" || url === "nidoran-m") {
    return url.replace("-", "");
  } else {
    return url;
  }
};
