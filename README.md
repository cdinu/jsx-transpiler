# JSX Transpiler

A simple utility library to transform a JSX text to its equivalent React Javascript code.

It is designed to be used inside a node application.

Licensed under GPL v3 or later.

```javascript
import { transpile } from '@hypersay/jsx-transpiler';

const source = `
  <div className="pinky">
    <p>Hello World!</p>
    <p>Today is {new Date()}</p>
  </div>
`;
```

```javascript
transpile(source, { pragma: 'customFn', minified: true });
// 
// {
//     code: 'customFn("div",{className:"pinky"},customFn("p",null,"Hello World!"),customFn("p",null,"Today is ",new Date));'
//  }
```
 
Contact [Cristian Dinu](https://twitter.com/cdinu) for details or use GitHub issues / PRs.
 
 