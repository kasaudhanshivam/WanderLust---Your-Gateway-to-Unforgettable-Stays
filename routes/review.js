const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");



const reviewController = require("../controllers/reviews.js");
const review = require("../models/review.js");







// Post Route
router.post("/",isLoggedIn, validateReview , wrapAsync (reviewController.postReview));



//Delete Route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.deleteReview)
);


module.exports = router;