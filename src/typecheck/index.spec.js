import typeCheck from './index'

describe("typeCheck", () => {
  test('when passed an empty object', () => {
    const obj = {}
    expect(typeCheck(obj)).toEqual(obj);
  });

  it('when passed an object with no type definition', () => {
    const obj = { b: 2 }
    const validatingObj = typeCheck(obj)
    expect(validatingObj).toEqual(obj);
  });

  test('when passed an object with and without type definition', () => {
    const obj = { b: 2, name_string:  'sample' }
    const validatingObj = typeCheck(obj)
    expect(validatingObj).toEqual(obj);
  });

  test('when update an object with and without type definition', () => {
    const obj = { b: 2, name_string:  'sample' }
    const validatingObj = typeCheck(obj)
    validatingObj.b = '3453453'
    expect(validatingObj).toEqual({name_string:  'sample', b: '3453453' });
  });
  describe('string', () => {
    test('allow creation with valid data', () => {
      const obj = { name_string:  'sample' }
      const validatingObj = typeCheck(obj)
      expect(validatingObj).toEqual(obj);
    });
    test('fail creation with invalid data', () => {
      const obj = {name_string: 2}
      expect(() => {
        typeCheck(obj)
      }).toThrow(new Error("'set' on proxy: trap returned falsish for property 'name_string'"))
    });
    test('fail update with invalid data', () => {
      const obj = {}
      const validatingObj = typeCheck(obj)
      expect(() => {
        validatingObj.name_string = 2
      }).toThrow(new Error("'set' on proxy: trap returned falsish for property 'name_string'"))
    });

    test('pass update with valid data', () => {
      const obj = {}
      const validatingObj = typeCheck(obj)
      expect(() => {
        validatingObj.name_string = 'valid'
      }).not.toThrow()
    });
  })

  describe('int', () => {
    it('allow creation with valid data', () => {
      const obj = { age_int:  12 }
      const validatingObj = typeCheck(obj)
      expect(validatingObj).toEqual(obj);
    });
    test('fail creation with invalid data', () => {
      const obj = { age_int:  'twelve' }
      expect(() => {
        typeCheck(obj)
      }).toThrow(new Error("'set' on proxy: trap returned falsish for property 'age_int'"))
    });

    test('pass update with valid data', () => {
      const obj = {}
      const validatingObj = typeCheck(obj)
      expect(() => {
        validatingObj.age_int = 12.00
      }).not.toThrow()
    });

    test('fail update with invalid data', () => {
      const obj = {}
      const validatingObj = typeCheck(obj)
      expect(() => {
        validatingObj.age_int = 2.34
      }).toThrow(new Error("'set' on proxy: trap returned falsish for property 'age_int'"))
    });

  })

  describe('float', () => {
    it('allow creation with valid data', () => {
      const obj = { price_float:  12.34 }
      const validatingObj = typeCheck(obj)
      expect(validatingObj).toEqual(obj);
    });
    test('fail creation with invalid data', () => {
      const obj = { price_float:  'ma' }
      expect(() => {
        typeCheck(obj)
      }).toThrow(new Error("'set' on proxy: trap returned falsish for property 'price_float'"))
    });

    test('pass update with valid data', () => {
      const obj = {}
      const validatingObj = typeCheck(obj)
      expect(() => {
        validatingObj.price_float = 12.01
      }).not.toThrow()
    });

    test('fail update with invalid data', () => {
      const obj = {}
      const validatingObj = typeCheck(obj)
      expect(() => {
        validatingObj.price_float = 'blue'
      }).toThrow(new Error("'set' on proxy: trap returned falsish for property 'price_float'"))
    });

  })

  describe('number', () => {
    it('allow creation with valid float data', () => {
      const obj = { price_number:  12.34 }
      const validatingObj = typeCheck(obj)
      expect(validatingObj).toEqual(obj);
    });
    it('allow creation with valid int data', () => {
      const obj = { price_number:  12 }
      const validatingObj = typeCheck(obj)
      expect(validatingObj).toEqual(obj);
    });
    test('fail creation with invalid data', () => {
      const obj = { price_number:  'ma' }
      expect(() => {
        typeCheck(obj)
      }).toThrow(new Error("'set' on proxy: trap returned falsish for property 'price_number'"))
    });

    test('pass update with valid data', () => {
      const obj = {}
      const validatingObj = typeCheck(obj)
      expect(() => {
        validatingObj.price_number = 12.01
      }).not.toThrow()
    });

    test('fail update with invalid data', () => {
      const obj = {}
      const validatingObj = typeCheck(obj)
      expect(() => {
        validatingObj.price_number = 'blue'
      }).toThrow(new Error("'set' on proxy: trap returned falsish for property 'price_number'"))
    });

  })

  describe('bool', () => {
    it('allow creation with valid data', () => {
      const obj = { price_bool:  true }
      const validatingObj = typeCheck(obj)
      expect(validatingObj).toEqual(obj);
    });
    test('fail creation with invalid data', () => {
      const obj = { price_bool:  'true' }
      expect(() => {
        typeCheck(obj)
      }).toThrow(new Error("'set' on proxy: trap returned falsish for property 'price_bool'"))
    });

    test('pass update with valid data', () => {
      const obj = {}
      const validatingObj = typeCheck(obj)
      expect(() => {
        validatingObj.price_bool = false
      }).not.toThrow()
    });

    test('fail update with invalid data', () => {
      const obj = {}
      const validatingObj = typeCheck(obj)
      expect(() => {
        validatingObj.price_bool = 'blue'
      }).toThrow(new Error("'set' on proxy: trap returned falsish for property 'price_bool'"))
    });

  })
});
