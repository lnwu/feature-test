export const foo = () => {
  console.log("foo");
};

export const bar = () => {
  console.log("bar");
};

export * from "./add";
export { default as addDefault } from "./default";
