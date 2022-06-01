# Webpack tree shaking 测试

### 结论

- 默认配置能够 tree shaking 掉不使用的函数
  - 依赖中包含全局 effect 的代码，这个代码不会被 tree shaking 掉。
  - 如果配置的 sideEffect 参数为 false，则会被 tree shaking 掉。
