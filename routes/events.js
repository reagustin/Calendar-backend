/*
    Rutas de Eventos
    host + /api/events
*/

const { Router} = require('express');
const { validarJWT } = require('../middlewares/validar-JWT');
const { validarCampos } = require('../middlewares/validar-campos');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events');
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');

const router = Router();

//Todas tienen que pasar por la validacion del JWT
router.use(validarJWT);

// Obtener eventos
router.get('/', getEventos)

// Crear evento
router.post(
    '/', 
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','La fecha de inicio es obligatoria').custom(isDate),
        check('end','La fecha de finalizacion es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento)

// Actualizar eventos
router.put(
    '/:id',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalización es obligatoria').custom( isDate ),
        validarCampos
    ],
    actualizarEvento)

// Borrar eventos
router.delete('/:id', eliminarEvento)


module.exports = router;