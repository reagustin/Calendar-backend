/*
    Rutas de Eventos
    host + /api/events
*/

const { Router} = require('express');
const { validarJWT } = require('../middlewares/validar-JWT');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events');

const router = Router();

//Todas tienen que pasar por la validacion del JWT
router.use(validarJWT);

// Obtener eventos
router.get('/', getEventos)

// Crear evento
router.post('/', crearEvento)

// Actualizar eventos
router.put('/:id', actualizarEvento)

// Obtener eventos
router.delete('/:id', eliminarEvento)


module.exports = router;