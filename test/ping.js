const expect = require('chai').expect
const ping = require('../lib/index').ping

describe('ping', () => {
  it('should be a function', () => {
    expect(ping).to.be.a('function')
  })
})
