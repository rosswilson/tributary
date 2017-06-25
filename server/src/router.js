const router = require('express').Router()

const onConnect = require('./controllers/on_connect')
const onPlay = require('./controllers/on_play')
const onPublish = require('./controllers/on_publish')
const onDone = require('./controllers/on_done')

router.post('/connect', onConnect)
router.post('/play', onPlay)
router.post('/publish', onPublish)
router.post('/done', onDone)

module.exports = router
