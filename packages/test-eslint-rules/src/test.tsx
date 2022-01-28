/* eslint-disable @typescript-eslint/naming-convention */
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
class myClass {}
class my_class {}
enum my_enum {
  myFoo,
  my_bar,
}
const myConst: number = 1;
const GET_FUNCTION = () => {
  const MY_VAR = 1;
};
type my_type = {
  MyVar: number;
};

// TODO separate react function with normal function
const component = () => <div />;
