module.exports = (sequelize, Sequelize) => {
  const Manga = sequelize.define("manga", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    name: {
      type: Sequelize.STRING
    },
    synopsis: {
      type: Sequelize.STRING
    },
    chapter: {
      type: Sequelize.INTEGER
    },
    filename: {
      type: Sequelize.STRING
    }
  });

  return Manga;
}