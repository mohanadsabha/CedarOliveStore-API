const express = require('express');
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
    .route('/')
    .get(reviewController.getAllReviews)
    .post(
        authController.restrictTo('user'),
        reviewController.setProductUserIds,
        reviewController.createReview,
    );

router
    .route('/:id')
    .get(reviewController.getReview)
    .patch(reviewController.updateReview) // TODO:FIX: update and delete restrict to the owner user and admins
    .delete(reviewController.deleteReview);

module.exports = router;
