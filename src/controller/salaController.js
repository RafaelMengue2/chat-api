exports.get = async(req, res)=>{

    let salaModel = require("../model/salaModel");
    return{"status":"ok", "controller":"Sala"};
}

const salaModel = require("../model/salaModel");

exports.get = async()=>{
    return await salaModel.listarSalas();
}