let express = require("express");
let app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const router = express.Router();
app.use('/', router.get('/', (requ, res)=>{
    res.status(200).send("<h1>API - CHAT</h1>")
}))

app.use('/',router.get('/sobre', (req, res)=>{
    res.status(200).send({
        "nome":"chat-api",
        "versão":"0.1.0",
        "autor":"Rafael Mengue"
    })
}));

module.exports=app;