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


app.get('/api/company', async function(req, res) {
    
    const location = req.query.location
    const company = await db.all(`select id from company where location=?`, location);
    
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
 app.post('/api/company', async function(req, res){


    const power = await db.all(`SELECT company.id, company.company_name, company.area, company.location FROM company INNER JOIN weather ON company.id=weather.company_id;`)
    res.json({
        //"location": "Johannesburg"
        power
    })
 })


console.log('done');

const PORT = 6001;
app.listen(PORT, function(){
    console.log(`Solar prediction API started at ${PORT}`)
});