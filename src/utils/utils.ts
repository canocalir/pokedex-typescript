const urlCorrector: Function = (url: string): string => {
  if (url === "nidoran-f" || url === "nidoran-m") {
    return url.replace("-", "");
  } else {
    return url;
  }
};

export {urlCorrector}
