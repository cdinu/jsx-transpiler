import { transpile } from '../src';

describe('Transpile', () => {
  it('transpiles simple html code', () => {
    expect(transpile('<h1>hello</h1>')).toEqual({
      code: 'h("h1",null,"hello");',
    });
  });
  it('transpiles simple html code using different pragma', () => {
    expect(transpile('<h1>hello</h1>', { pragma: 'coco' })).toEqual({
      code: 'coco("h1",null,"hello");',
    });
  });
  it('transpiles simple html code using empty pragma', () => {
    expect(transpile('<h1>hello</h1>', { pragma: '' })).toEqual({
      code: 'React.createElement("h1",null,"hello");',
    });
  });
  it('transpiles hierarchical html code', () => {
    expect(transpile('<h1>hello, <em>world</em>!</h1>')).toEqual({
      code: 'h("h1",null,"hello, ",h("em",null,"world"),"!");',
    });
  });
  it('transpiles unknown tags', () => {
    expect(transpile('<SomeComponent>hello</SomeComponent>')).toEqual({
      code: 'h(SomeComponent,null,"hello");',
    });
  });
  it('crashes on errors', () => {
    expect(transpile('<h1>hello</h>')).toHaveProperty(
      'error.code',
      'BABEL_PARSE_ERROR'
    );
  });
});
