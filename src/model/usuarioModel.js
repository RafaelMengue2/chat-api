const db = require("./db");

async function registrarUsuario(nick) {
    return await db.insertOne("usuario", {"nick":nick});
}

let alterarUsuario = async (user) =>{
    return await db.updateOne('usuarios', user,{_id:user._id});
}

let buscarUsuario = async (idsala) =>{
    let user = await db.findOne("usuarios", iduser);
    return user;
}

module.exports = {registrarUsuario}