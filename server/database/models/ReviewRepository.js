const AbstractRepository = require("./AbstractRepository");

class ReviewRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "offer" as configuration
    super({ table: "review" });
  }

  async create(review) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (rate, comment) VALUES (?, ?)`,
      [
        review.rate,
        review.comment,
        // review.user_id, // Assurez-vous que user_id est passé correctement
      ]
    );

    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all offers from the "offer" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of offers
    return rows;
  }
}

module.exports = ReviewRepository;
