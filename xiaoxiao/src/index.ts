/* npx tsx .\index.ts  */
import dotenv from 'dotenv-safe'
import express from 'express'
import fs from 'fs'
import https from 'https'
import path from 'path'
import { Server } from 'socket.io'

import { ChatGPTAPI } from '../../src'

dotenv.config()

var privateCrt = fs.readFileSync(
  path.join('D:\\laixiao/soft/ssl/Nginx/diluapp.cn_bundle.crt'),
  'utf8'
)
var privateKey = fs.readFileSync(
  path.join('D:\\laixiao/soft/ssl/Nginx/diluapp.cn.key'),
  'utf8'
)
var privateCrt = fs.readFileSync(
  path.join('C:\\Users/Administrator/Desktop/ssl/Nginx/diluapp.cn_bundle.crt'),
  'utf8'
)
var privateKey = fs.readFileSync(
  path.join('C:\\Users/Administrator/Desktop/ssl/Nginx/diluapp.cn.key'),
  'utf8'
)
console.log(privateCrt, privateKey)

const app = express()
const httpsServers = https.createServer(
  { key: privateKey, cert: privateCrt },
  app
)
const io = new Server(httpsServers, {
  /* options */
})

app.use('/public', express.static('xiaoxiao/public'))

io.on('connection', (socket) => {
  console.log('用户连接', socket.id)

  socket.on('chat_single', (anotherSocketId, msg) => {
    socket.to(anotherSocketId).emit('chat_single', socket.id, msg)
  })
})
// io.listen(3000);

httpsServers.listen(443, () => {
  console.log(`HTTPS Server is running on: https://localhost:443`)
  console.log(`HTTPS Server is running on: https://www.diluapp.cn`)
})

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/openai', function (req, res) {
  res.send('openai')
})

// /**
//  * Demo CLI for testing the `onProgress` streaming support.
//  *
//  * ```
//  * npx tsx demos/demo-on-progress.ts
//  * ```
//  */
// async function main() {
//   const api = new ChatGPTAPI({
//     apiKey: process.env.OPENAI_API_KEY,
//     apiBaseUrl: 'https://openapi.ssiic.com/v1'
//   })

//   const prompt = 'git的子存储库是什么'

//   console.log(prompt)
//   const res = await api.sendMessage(prompt, {
//     onProgress: (partialResponse) => {
//       console.log(partialResponse.text)
//     }
//   })
//   console.log(res.text)
// }

// main().catch((err) => {
//   console.error(err)
//   process.exit(1)
// })
