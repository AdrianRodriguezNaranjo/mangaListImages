const db = require("../models");
const Manga = db.mangas;
const Op = db.Sequelize.Op;

// Create and Save a new Bicycle
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a manga
  const manga = {
    id: req.body.id,
    name: req.body.name,
    synopsis: req.body.synopsis,
    chapter: req.body.chapter,
    filename: req.file ? req.file.filename : ""
  }

  // Save Manga in the database
  Manga.create(manga).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the bicycle"
    })
  });
};

// Retrieve all Mangas from the database.
exports.findAll = (req, res) => {
  Manga.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Mangas"
    })
  })
};

// Find a single manga with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Manga.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Manga with id=${id} was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Manga with id=" + id
      });
    });
}

// Update a manga by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  const manga = {
    id: req.body.id,
    name: req.body.name,
    synopsis: req.body.synopsis,
    chapter: req.body.chapter,
    filename: req.file ? req.file.filename : ""
  }

  Manga.update(manga, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send(num);
      } else {
        res.status(404).send({
          message: `Cannot update Manga with id=${id}. Maybe Manga was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not update Manga with id=" + id
      });
    });
};

// Update a manga by the id in the request without updating a image
exports.update2 = (req, res) => {
  const id = req.params.id;

  Manga.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send(num);
      } else {
        res.status(404).send({
          message: `Cannot update Manga with id=${id}. Maybe Manga was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not update Manga with id=" + id
      });
    });
};

// Delete a manga with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Manga.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Manga was deleted successfully." });
      } else {
        res.status(404).send({
          message: `Cannot delete Manga with id=${id}. Maybe Manga was not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Manga with id=" + id
      });
    });
};
