# Webpack tree shaking 测试

### 结论

- 默认配置能够 tree shaking 掉不使用的函数
  - 如果配置的 sideEffect 参数为 false，则会被 tree shaking 掉。
- 关于 side effect
  - 依赖中包含全局 effect 的代码，这个代码不会被 tree shaking 掉，只能依靠 lazy loading
  - 包括 export default 然后 reexport as xxx
