module.exports = (req, res, next) => {
  console.log('OnConnect called')
  console.log(JSON.stringify(req.body, null, 2))
  res.status(200).send('OK')
}
