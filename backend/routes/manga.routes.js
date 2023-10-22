module.exports = app => {
  const mangas = require("../controllers/manga.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new Manga
  router.post("/", upload.single('file'), mangas.create);
  router.post("/", mangas.create);

  // Retrieve all mangas
  router.get("/", mangas.findAll);

  // Retrieve a single manga with id
  router.get("/:id", mangas.findOne);

  // Update a manga with id
  router.put("/:id", upload.single('file'), (req, res) => {
    if (req.file) {
      // Handle updating with an image
      mangas.update(req, res);
    } else {
      // Handle updating without an image
      mangas.update2(req, res);
    }
  });

  // Delete a manga with id
  router.delete("/:id", mangas.delete);

  app.use("/api/mangas", router);
}