export const getCounterInitalValue = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.round(Math.random() * 10));
    }, 250);
  });
};

export const getAvailbleActions = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        "+": "+",
        "-": "-",
        "^": "^",
        reset: "reset"
      });
    }, 500 + Math.round(Math.random() * 100));
  });
};
