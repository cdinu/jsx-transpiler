const transpiler = require('@hypersay/jsx-transpiler');

const source = `
  <div className="pinky">
    <p>Hello World!</p>
    <p>Today is {new Date()}</p>
  </div>
`;

console.log("Raw source");
console.log(source);

console.log("Compiled source, no minimize");
console.log(transpiler.transpile(source, { minified: false }));

console.log("Compiled source, React pragma");
console.log(transpiler.transpile(source, { pragma: '', minified: false }));

console.log("Compiled source, default parameters");
console.log(transpiler.transpile(source));