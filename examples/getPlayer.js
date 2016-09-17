import { getPlayerStatus, createSession } from 'smite.js'

createSession({
  auth_id: '1234',
  auth_key: 'FFFF1234'
})
.then(a => a.json())
.then(data => {
  getPlayerStatus({
    auth_id: '1234',
    auth_key: 'FFFF1234',
    session: data.session_id,
    player_name: 'HirezPlayer'
  })
  .then(a => a.json())
  .then(data => {
    console.log(data)
  })
})
