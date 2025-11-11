require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
// simple health
app.get('/api/health', (req,res)=>res.json({ok:true,uptime:process.uptime()}));
// placeholder PayPal create order
app.post('/api/paypal/create-order', async (req,res)=>{
  // TODO: create order with PayPal SDK (use env keys)
  res.json({ok:true,orderId:'TEST_ORDER_123'});
});
// webhook endpoint for PayPal (validate in production)
app.post('/api/paypal/webhook', (req,res)=>{
  console.log('paypal webhook', req.body);
  res.status(200).send('ok');
});
const port = process.env.PORT || 3001;
app.listen(port, ()=>console.log('Backend listening on', port));
