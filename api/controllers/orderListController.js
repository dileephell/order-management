'use strict';

var mongoose = require('mongoose'),
    Order = mongoose.model('Orders');

// Get all orders from the database
exports.list_all_orders = function (req, res) {
    return Order.find({}, function (err, order) {
        if (err)
            res.send(err);
        res.json(order);
    });
};

// Post a order into database
exports.create_a_order = function (req, res) {
    var new_order = new Order(req.body);
    new_order.save(function (err, order) {
        if (err)
            res.send(err);
        res.json(order);
    });
};

// Read a order from the database
exports.read_a_order = function (req, res) {
    return Order.findById(req.params.orderId, function (err, order) {
        if (err)
            res.send(err);
        res.json(order);
    });
};

//Update a order 
exports.update_a_order = function (req, res) {
    return Order.findOneAndUpdate({ _id: req.params.orderId }, req.body, { new: true }, function (err, order) {
        if (err)
            res.send(err);
        res.json(order);
    });
};

// Delete a order from the database.
exports.delete_a_order = function (req, res) {
    return Order.remove({
        _id: req.params.orderId
    }, function (err, order) {
        if (err)
            res.send(err);
        res.json({ message: 'order successfully deleted' });
    });
};

// Common function to read the order by name or address
function read_a_order(req, res) {
    var query = {};
    if (req.params.name) {
        query.name = req.params.name;
    }
    if (req.params.address) {
        query.address = req.params.address;
    }
    Order.find(query, function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
};
exports.read_a_order_by_name = read_a_order;
exports.read_a_order_by_address = read_a_order;

// Diaplay a order in descending order
exports.read_a_order_by_desc_order = function (req, res) {
    return Order.find().sort({ created_at: -1 }).exec(function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
};