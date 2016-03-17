var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

/* GET /todos listing. */
router.get('/todos', function(req, res, next) {
	Todo.find(function (err, todos) {
		if (err) return next(err);
		
		res.json(todos);
	});
});

/* POST /todos */
router.post('/todos', function(req, res, next) {
	Todo.create(req.body, function (err, post) {
		if (err) return next(err);
		
		res.json(post);
	});
});


/* GET /todos/id */
router.get('/todos/:id', function(req, res, next) {
	Todo.findById(req.params.id, function (err, post) {
		if (err) return next(err);
		
		res.json(post);
	});
});


/* PUT /todos/:id  - UPDATE specific field */
router.put('/todos/:id', function(req, res, next) {
	Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		
		res.json(post);
	});
});


/* DELETE /todos/:id */
router.delete('/todos/:id', function(req, res, next) {
	Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
    
		res.json(post);
	});
});



module.exports = router;
