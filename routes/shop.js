const express = require("express");
const patch = require('path')
const shop = express.Router();

//importar o patch para o gerenciamento dos arquivos para serem

shop.get('/product', (req, res)=> {

  res.sendFile(patch.join(__dirname, '../','views', 'index.html'))// dois pontos(..) para voltar para a  'raiz'

})



shop.get('/brands', function (req, res) {

  res.send({
        created:"ok",
        sucess: true,
        method: "GET"
        
        })
})
module.exports=router;
