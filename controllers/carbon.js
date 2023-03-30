const Carbon = require('.models/carbon.js')

app.post('carbon', (req, res)=>{
    Carbon.create(req.body, (err, createdCarbon)=>{
        res.json(createdCarbon);
    });
});