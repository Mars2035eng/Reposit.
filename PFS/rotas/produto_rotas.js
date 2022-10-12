const express = require('express'); // importa o express
const router = express.Router(); // cria uma variável

const controller = require('../controller/produto_controller')

//Encaminhado para /api/produtos/

//---------------- GET de produtos
router.get('/', controller.listar);

//---------------- BUSCAR POR ID
router.get('/:id', controller.buscarPorId);

//--------------- INSERIR
router.post('/', controller.inserir);

//--------------- ATUALIZAR
router.put('/:id', controller.atualizar);

//--------------- DELETAR
router.delete('/:id', controller.deletar);



module.exports = router;
