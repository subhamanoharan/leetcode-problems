import {createReadableStream} from './index'

describe("typeCheck", () => {
  it('test', () => {
    const r = new createReadableStream('sdfsdf')
    r.push('blah')
    expect(1).toBe(1)
  })
});
