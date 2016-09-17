const expect = require('chai').expect
const getPlayer = require('../lib/index').getPlayer
const getPlayerStatus = require('../lib/index').getPlayerStatus

describe('getPlayer', () => {
  it('should be a function', () => {
    expect(getPlayer).to.be.a('function')
  })
})

describe('getPlayerStatus', () => {
  it('should be a function', () => {
    expect(getPlayerStatus).to.be.a('function')
  })
})
