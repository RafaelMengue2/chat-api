function listarSalas() {
    return [
        {
            "_id": {
                "$oid": "807f98s790709sd8f790s798udf9sfs"
            },
            "nome": "Guerreiros da InfoCimol",
            "tipo": "publico"
        }, {
            "_id": {
                "$oid": "80m0w8cgsmcuihltglgh035mchg0x34"
            },
            "nome": "Só os confirmado",
            "tipo": "privada",
            "chave": "at08g0j0"
        }, {
            "_id": {
                "$oid": "803048ijfecjfjjfpw,cfj0384piwbr"
            },
            "nome": "Informatica legal",
            "tipo": "publico"  
        }
    ];
}

const db = require("./db");
function listarSalas(){
    return db.find("salas");
}

module.exports = { listarSalas }