const BoardgameService = require("../services/boardgame.service");

module.exports = {
  addNewGame(req, res) {
    const { title, yearPublished, image } = req.body;

    BoardgameService.add(title, yearPublished, image, response => {
      res.json({ response });
    });
  },
  deleteGame(req, res) {
    const { id } = req.params;
    BoardgameService.deleteById(id, boardgame => {
      res.json({ message: "Boardgame deleted", boardgame });
    });
  },
  getAllGames(req, res) {
    BoardgameService.findAll(boardgames => {
      res.json({ boardgames });
    });
  },
  getSingleGame(req, res) {
    const { id } = req.params;
    BoardgameService.findById(id, boardgame => {
      res.json({ boardgame });
    });
  }
};
