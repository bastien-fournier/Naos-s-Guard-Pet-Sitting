const AbstractSeeder = require("./AbstractSeeder");
// const CompanySeeder = require("./CompanySeeder");
// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)

const reviews = [
  {
    rate: "10",
    comment:
      "Super bien passé !! Plein de photos et vidéos. Bastien était super avec Dax.",
  },
  {
    rate: "10",
    comment:
      "Excellente première réservation avec Bastien. Communication très clair, accueil au top pour mon chien Pippin dans son appartement et des nouvelles à la pelle 🤗 je ne peux demander mieux ! Encore merci et à bientôt !!",
  },
];

class ReviewSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "review" });
  }

  // The run method - Populate the 'offer' table with data of jobTitles

  run() {
    reviews.forEach((review) => {
      const values = {
        rate: review.rate,
        comment: review.comment,

        // company_id: offer.company_id,
      };
      this.insert(values);
    });
  }
}

// Export the offerSeeder class
module.exports = ReviewSeeder;
