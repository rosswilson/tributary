module.exports = (req, res, next) => {
  console.log('OnPublish called')
  console.log(JSON.stringify(req.body, null, 2))
  res.status(200).send('OK')
}
