const data = require('../utils/data');

const getCharacter = (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const characterFound = data.find(character => character.id === +req.params.id);
    return res.json(characterFound);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  };
};

module.exports = {
  getCharacter
}