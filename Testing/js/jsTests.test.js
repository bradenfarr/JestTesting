
const {calculator, capitilize, reverseString, analyzeArray, caesarCipher} = require('./jsTests')

//calculator

test('calculate two sums depending on operator', () => {
    expect(calculator(2, '+', 2)).toBe(4)
})

test('calculate two sums depending on operator', () => {
    expect(calculator(2, '-', 2)).toBe(0)
})

test('calculate two sums depending on operator', () => {
    expect(calculator(2, '*', 2)).toBe(4)
})

test('calculate two sums depending on operator', () => {
    expect(calculator(2, '/', 2)).toBe(1)
})

test('return invalid input when entering an invalid input', () => {
    expect(calculator(2, '/', 'y')).toBe("Invalid Number Input")
})

test('return invalid input when entering an invalid input', () => {
    expect(calculator(2, 8, 2)).toBe("Invalid Operator Input")
})

//capitilize


test('capatilize all first letters of a string', () => {
    expect(capitilize('take a trip on a golden airplane')).toBe('Take A Trip On A Golden Airplane')
})

test('return invalid input when entering an invalid input', () => {
    expect(capitilize(37)).toBe("Invalid Input")
})

test('return invalid input when entering an invalid input', () => {
    expect(capitilize("")).toBe("Enter text to capitilize it")
})

// //reverse string

test('reverse a string', () => {
    expect(reverseString('Hello World!')).toBe('!dlroW olleH')
})

test('return invalid input when entering an invalid input', () => {
    expect(reverseString(500)).toBe("Invalid Input")
})

test('return invalid input when entering an invalid input', () => {
    expect(reverseString("")).toBe("Enter text to reverse it")
})

//analyze array

const thisArray = [5, 16, 35, 100, 22]

test('Analyze a given array', () => {
    expect(analyzeArray(thisArray)).toStrictEqual({"min": 5, "max": 100, "length": 5, "average": 35.6})
})

// caesar cipher

test('Code a string with the ceasar cipher', () => {
    expect(caesarCipher("Hello World!", 2)).toStrictEqual("Jgnnq Yqtnf!")
})

test('return invalid input when entering an invalid input', () => {
    expect(caesarCipher(2, "yes")).toStrictEqual("Invalid Input")
})

test('return invalid input when entering an invalid input', () => {
    expect(caesarCipher("", 2)).toStrictEqual("Invalid Input")
})