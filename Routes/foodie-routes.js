const express = require('express');
const foodieController = require('../Controller/foodie-controller')
const router = express.Router();


router.get('/', foodieController.homePage);
router.get('/categories',foodieController.allCategoriess)
router.get('/recipes',foodieController.allrecipes)
router.get('/recipe/:cateName',foodieController.getCategoryContent)
router.get('/recipeDetails/:id',foodieController.getRecipeDetails)
// search recipe
router.post('/search', foodieController.searchRecipe)
// get submit form
router.get('/submitRecipe', foodieController.getSubmitRecipe)
// post submit form
router.post('/submitRecipe', foodieController.postSubmitRecipe)
// to get edit recipe form
router.get('/editRecipe/:id', foodieController.getEditForm)
// to edit form
router.put('/editRecipe/:id', foodieController.editRecipe)
// delete recipe
router.delete('/deleteRecipe/:id', foodieController.deleteRecipe)
module.exports = router