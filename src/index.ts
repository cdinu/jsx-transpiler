import { transform } from '@babel/standalone';

export interface TranspileOptions {
  pragma?: string;
  minified?: boolean;
}

export interface TranspileResult {
  error?: SyntaxError;
  code?: string;
}

/**
 * @example
 * var source = '<h1>Hello!</h1>';
 * console.log(transpile(source)); // { code: 'h("h1", null, "Hello!"), error: undefined }'}
 */
export const transpile = (
  jsxCode: string,
  options?: TranspileOptions
): TranspileResult => {
  const { pragma = 'h', minified = true } = options || {};

  const babelConfig = {
    babelrc: false,
    minified,
    presets: [['es2015', { modules: false }], ['react', { pragma }]],
    highlightCode: false,
  };

  try {
    const { code } = transform(jsxCode, babelConfig);
    return { code };
  } catch (err) {
    return { error: err };
  }
};
