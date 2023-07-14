const express = require('express');
var yahooFinance = require('yahoo-finance');
const app = express();


let stock = ['AAPL', 'AMD','BTC-USD','ETH-USD','TSLA'];
app.get('/getdatahistorical',async (req, res) => {
    let to = new Date();
    let start = new Date();
    let list=[];
    for(let i =0;i<stock.length;i++){
        let result = await yahooFinance.historical({
        symbol: stock[i],
        from: start.toLocaleDateString('en-CA'),
        to: to.toLocaleDateString('en-CA'),
        });
        console.log(result);
        list.push({SYMBOL:stock[i],data:result[0]});
    }
    res.status(200).send(list);

});
app.listen(9000, () => {
  console.log('Application is running on port 9000');
});