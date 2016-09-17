import fetch from 'isomorphic-fetch'

export function ping () {
  const url = 'http://api.smitegame.com/smiteapi.svc/pingJson'

  return fetch(url, {
    'no-cors': true
  })
}
