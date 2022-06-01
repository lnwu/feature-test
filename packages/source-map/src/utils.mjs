export const foo = () => {
  console.log("foo");
};

export const bar = () => {
  console.log("bar");
};

export const sleep = (time = 1000) => {
  const now = new Date().getTime();
  while (new Date().getTime() < now + time) {}
};
