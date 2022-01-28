# 命名规范 Eslint 配置

### [x] 意味着是否包含测试用例

#### TS

- [x] 所有的类名，Enum 变量，Enum 的成员，类型，接口使用 PascalCase
- [x] 所有在最外层作用域定义的常量（除函数），使用全大写 UPPER_CASE
- [x] 其他情况下的所有的函数、常量、变量、成员变量都一律使用 camelCase
- [x] 文件名一律使用 kebab-case, 这是唯一一种保持跨平台场景下文件名被正确处理的方式(macOS 不区分大小写，Windows 与 Linux 区分，Git 按配置情况区分大小写)

#### React TS

- [ ] React 组件使用 PascalCase
- [ ] React 代码中的回调函数命名：
  - 组件的 Props 用 on 开头.
  - 传给子组件的回调，除了该组件透传以外的用 handle 开头.
