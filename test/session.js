const expect = require('chai').expect
const createSession = require('../lib/index').createSession

describe('createSession', () => {
  it('should be a function', () => {
    expect(createSession).to.be.a('function')
  })

  describe('params', () => {
    it('should throw no options error', () => {
      expect(createSession).to.throw('You must specify options!')
    })

    it('should throw no auth id or key error', () => {
      expect(createSession.bind(undefined, {})).to.throw('You must specify auth id and key!')
    })

    it('should throw no auth id or key error', () => {
      expect(createSession.bind(undefined, {
        auth_id: 1337
      })).to.throw('You must specify auth id and key!')
    })

    it('should throw no auth id or key error', () => {
      expect(createSession.bind(undefined, {
        auth_key: 'FFFF1337'
      })).to.throw('You must specify auth id and key!')
    })
  })
})
