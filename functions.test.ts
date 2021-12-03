const { add, product } = require('./functions.ts')

describe('functions tests', () => {
  describe('add', () => {
    test('positive numbers', () => {
      expect(add(2, 2)).toBe(4)
      expect(add(2, 3)).toBe(5)
    })

    test('negative numbers', () => {
      expect(add(-2, -4)).toBe(-6)
    })
  })
  
  describe('product', () => {
    test('positive numbers', () => {
      expect(product(3, 5)).toBe(15)
    })
  })
})

