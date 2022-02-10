import { foo } from "./utils.mjs";
import { foo as libFoo } from "sample-package";

// Test source code
foo();

// Test node_modules
libFoo();
