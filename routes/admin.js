// apenas as coisa que o admim pode fazer


//importa o express


const express = require('express')

//iniciar rotas
 
const router = express.Router()// este R tem que ser maiusculo . Com o r menusculo é a variavel


//copia do nosso app.js e apaga o de lá. Troca o verbo po router

router.post('/add-product', function (req, res) {

    res.send({
        created:"ok",
        sucess: true,
        method: "GET"
        
        })
})
router.get('/add-product', function (req, res) {

res.send({

created:"ok",
sucess: true,
method: "GET"

})
})


router.post('/delete-product',  (req, res) =>  // => mesma coisa que uma function

{
    res.send({
        created:"ok",
        sucess: true,
        method: "GET"
        
        })
})

module.exports = router;



//