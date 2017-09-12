'use strict';
module.exports = function (app) {
    var orderList = require('../controllers/orderListController');

    // orderList Routes
    app.route('/orders')
        .get(orderList.list_all_orders)  // get all orders
        .post(orderList.create_a_order)  // post a order

    app.route('/getOrdersByName/:name')
        .get(orderList.read_a_order_by_name) // get orders by name
        
     app.route('/getOrdersByAddress/:address')   
        .get(orderList.read_a_order_by_address) //get orders by address

     app.route('/orders/desc-order')  
        .get(orderList.read_a_order_by_desc_order); //read a order in descending order

    app.route('/orders/:orderId')
        .get(orderList.read_a_order)  // get a order by id
        .put(orderList.update_a_order) // update a order by id
        .delete(orderList.delete_a_order); // delete a order by id

};