import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import express from 'express';




const app = express();

app.use(express.json());
app.use(express.static('public'));
const db = await sqlite.open({
    filename: './forecast_plan.db',
    driver: sqlite3.Database
});

console.log('db initialized');

await db.migrate();

app.post('/api/weather', async function(req, res) {

    //showing ghi_actual when inputing time stamp 5 min interval.

    const weather = await db.all(`select location from weather where period_start=?`, req.body.ghi_actual);
    
    console.log(weather);
    
   res.json({
        weather
    })

});

app.get('/api/company', async function(req, res) {
    
    const company = await db.all(`select *  from company`);
    
    res.json({
        company 
    })
});
app.get('/api/weather', async function(req, res) {
    
    const weathers = await db.all(`select *  from weather`);
    
    res.json({
        weathers 
    })

});
 app.post('/api/company', async function(req,res){

    const location = req.body.location;

    ///const password = req.body.password;

    const company = await db.all(`SELECT ghi_actual from company where staff_name =? and password =?`,username & password);
    console.log(company)
    
    res.json({
        company
    })
 });
 app.post('/api/company', async function(req, res){


    const power = await db.all(`SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate FROM Orders INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;`)
    res.json({

    })
 })


console.log('done');

const PORT = 6001;
app.listen(PORT, function(){
    console.log(`Solar prediction API started at ${PORT}`)
});