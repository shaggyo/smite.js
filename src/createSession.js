import md5 from 'md5'
import moment from 'moment'
import fetch from 'isomorphic-fetch'

export function createSession (opts) {
  if(!opts) {
    throw new Error('You must specify options!')
  }

  let auth_id = opts.auth_id || null
  let auth_key = opts.auth_key || null

  if(auth_id == null || auth_key == null) {
    throw new Error('You must specify auth id and key!')
  }

  let s_time = moment().utc().format('YYYYMMDDHHmmss')
  let auth_hash = md5(`${auth_id}createsession${auth_key}${s_time}`)
  let base_url = 'http://api.smitegame.com/smiteapi.svc/createsessionjson/'

  let r_url = `${base_url}${auth_id}/${auth_hash}/${s_time}`

  return fetch(r_url, {
    'no-cors': false
  })
}
