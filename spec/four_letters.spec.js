var index = require('../index')

describe('generate 4 letters will', () => {
  it('returns a string of length 4', () => {
    expect(index.generateFourLetters()).toHaveLength(4)
  })

  it('returns different strings if called twice', () => {
    const first = index.generateFourLetters();
    const second = index.generateFourLetters();


    expect(second).not.toEqual(first)
  })
})


