const express = require("express");
const cors = require("cors"); // assuming CORS middleware is also installed
const findRecipes = require("./findRecipes");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.post("/find-recipes", async (req, res) => {
  try {
    const selectedIngredients = req.body.selectedIngredients;
    const results = await findRecipes(selectedIngredients);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
