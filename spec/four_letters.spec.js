var index = require('../index')

describe('generate 4 letters will', () => {
  it('returns a string of length 4', () => {
    const val = index.generateFourLetters();
    console.log(val);
    expect(val).toHaveLength(4)
  })

  it('returns different strings if called twice', () => {
    const first = index.generateFourLetters();
    const second = index.generateFourLetters();

    console.log(first)
    console.log(second)
    expect(second).not.toEqual(first)
  })
})


