import md5 from 'md5'
import moment from 'moment'
import fetch from 'isomorphic-fetch'

export function getPlayer (opts) {
  if(!opts) {
    throw new Error('You must specify options!')
  }

  let auth_id = opts.auth_id || null
  let auth_key = opts.auth_key || null
  let session = opts.session || null
  let player_name = opts.player_name || null

  if(auth_id == null || auth_key == null || session == null) {
    throw new Error('You must specify auth id, key and session!')
  }

  let timestamp = moment().utc().format('YYYYMMDDHHmmss')
  let hash = md5(`${auth_id}getplayer${auth_key}${timestamp}`)
  let base_url = 'http://api.smitegame.com/smiteapi.svc/getplayerJson/'

  let url = `${base_url}${auth_id}/${hash}/${session}/${timestamp}/${player_name}`

  return fetch(url, {
    'no-cors': false
  })
}

export function getPlayerStatus (opts) {
  if(!opts) {
    throw new Error('You must specify options!')
  }

  let auth_id = opts.auth_id || null
  let auth_key = opts.auth_key || null
  let session = opts.session || null
  let player_name = opts.player_name || null

  if(auth_id == null || auth_key == null || session == null) {
    throw new Error('You must specify auth id, key and session!')
  }

  let timestamp = moment().utc().format('YYYYMMDDHHmmss')
  let hash = md5(`${auth_id}getplayerstatus${auth_key}${timestamp}`)
  let base_url = 'http://api.smitegame.com/smiteapi.svc/getplayerstatusJson/'

  let url = `${base_url}${auth_id}/${hash}/${session}/${timestamp}/${player_name}`

  return fetch(url, {
    'no-cors': false
  })
}
