const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all offers from the database
    const reviews = await tables.review.readAll();

    // Respond with the offers in JSON format
    res.json(reviews);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const review = req.body;
    console.info(review);

    // Créer un nouvel utilisateur
    const insertUserId = await tables.review.create(review);
    // const insertCandiateId = await tables.candidate.create(user, insertUserId);

    res.status(201).json(insertUserId); // Répondre avec l'utilisateur créé
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  add,
};
