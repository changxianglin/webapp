var express = require('express')
var router = express.Router()
const request = require('request')
const app = new express()

const port = 5000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next()
})

app.post('/api', (req, res, next) => {
  const url = decodeURIComponent(req.body.url)
  const data = req.body.params
  console.log(data, 'request')
  const options = {
    uri: url,
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
      'Content-type': 'application/x-www-form-urlencoded',
      'Host': 'i.waimai.meituan.com',
      'Referer': 'http://i.waimai.meituan.com',
      'Cookie': ''
    },
    form: data
  }
  request(options, (error, response, body) => {
    console.log('body', body)
    try {
      res.json(JSON.parse(body))
    }catch(e) {
      res.json({})
    }
  })
})

app.get('/api', (req, res, next) => {
  res.json({
    code: 0,
    mes: '成功',
  })
})

app.listen(port, () => {
  console.log(`app running port in ${port}`)
})