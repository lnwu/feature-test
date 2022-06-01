# 打包为 npm 包

## 暴露方法如下

```js
import { foo, bar, add } from "sample-package";

foo(); // log foo;
bar(); // log bar;
add(); // return 2 & effect window.globalEffect = true;
```
