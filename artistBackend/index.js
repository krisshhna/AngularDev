const express   =   require('express');
const app       =   express();

app.get('/api',(req, res)=>{
    app.json({
        success:    1,
        message:    'The rest api is working fine',
    })
})

app.listen(3000,()=>{
    console.log('The server is working fine');
})