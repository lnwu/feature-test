// Good
class MyClass {}
enum MyEnum {
  MyFoo,
  MyBar,
}
const MY_CONST = 1;
const getFunction = () => {
  const myVar = 1;
};

type MyType = {
  myVar: number;
};

const Component = () => <div />;

// Bad
// eslint-disable-next-line @typescript-eslint/naming-convention
class myClass {}
// eslint-disable-next-line @typescript-eslint/naming-convention
class my_class {}
// eslint-disable-next-line @typescript-eslint/naming-convention
enum my_enum {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  myFoo,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  my_bar,
}
// eslint-disable-next-line @typescript-eslint/naming-convention
const myConst: number = 1;
// eslint-disable-next-line @typescript-eslint/naming-convention
const GET_FUNCTION = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const MY_VAR = 1;
};
// eslint-disable-next-line @typescript-eslint/naming-convention
type my_type = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  MyVar: number;
};

// TODO separate react function with normal function
const component = () => <div />;
