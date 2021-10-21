import http from 'http';

const ser = http.createServer((req, res, next)=>{
    res.end("worki");
});

ser.listen(2020,"localhost", );