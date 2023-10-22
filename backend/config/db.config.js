module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "jklnt2000_",
    DB: "db.mangas",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}