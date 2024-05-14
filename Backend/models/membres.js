const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const membresSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
});

// Hashage du mot de passe avant de sauvegarder le nouveau membre
membresSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

module.exports = mongoose.model("Membre", membresSchema);
