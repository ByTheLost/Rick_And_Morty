const Router = require('express');
const { getCharacter } = require('../controllers/character.controllers');

const router = Router();

router.get('/:id', getCharacter);

module.exports = router;
