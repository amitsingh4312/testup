import http from 'http';

const PORT = process.env.PORT

const ser = http.createServer((req, res, next)=>{
    if(req.url === "/"){
        res.end("worki");
    }else{
        res.end("Four Zero Four Not Found");
    }
    
});

ser.listen(PORT, ()=>{
    console.log('Server is Running');
});