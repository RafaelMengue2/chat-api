const db = require("./db");

async function listarSalas(){
    return await db.findAll("salas");

let atualizarMensagens = async (sala) => {
    return await db.updateOne("salas", sala,{_id:sala.id});
    }
}

let buscarMensagens = async (idsala, timestamp)=>{
    let sala = await buscarSala(idsala);
    if(sala.msgs){
        let msgs=[];
        sala.msgs.forEach((msg)=>{
            if(msg.timestamp >= timestamp){
                msgs.push(msg);
            }
        });
        return msgs;
    }
    return [];
}

let buscarSala= async(idsala)=>{
    return db.findOne("salas", idsala);
}

module.exports = { listarSalas };