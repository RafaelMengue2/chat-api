const salaModel = require("../model/salaModel");

exports.get = async()=>{
    return await salaModel.listarSalas();

    exports.enviarMensagem = async (nick, msg, idsala)=>{
        const sala = await salaModel.buscarSala(idsala);
        if(!sala.msgs){
            sala.msgs=[];
        }
        timestamp=Date.now()
        sala.msgs.push(
            {
                timestamp:timestamp,
                msg:msg,
                nick:nick
            }
        )
        let resp = await salaModel.atualizarMensagens(sala);
        return {"msg":"OK", "timestamp":timestamp};
    }

    exports.entrar= async(iduser, idsala)=>{
        const sala = await salaModel.buscarSala(idsala);
        let usuarioModel=require('../models/usuarioModel');
        let user= await usuarioModel.buscarUsuario(iduser);
        user.sala={_id:sala._id,nome:sala.nome,tipo:sala.tipo};
        if(await usuarioModel.alterarUsuario(user)){
            return {msg:"OK", timestamp:timestamp=date.now()}
        }
        return false;
    }
}