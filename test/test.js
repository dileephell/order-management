'use strict';

var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000")

// In this test it's expected a task list of two tasks
    describe('GET /orders', function() {
        it('returns a list of order', function(done) {
            server
                .get('/orders')
                .expect(200)
                .end(function(err, res) {
                    res.status.should.equal(200);
                    done(err);
                });
        });
    });

    // Testing the save task expecting status 201 of success
    describe('POST /orders', function() {
        it('saves a new order', function(done) {
            server
                .post('/orders')
                .send({
                    name: 'SuperTraders',
                    done: false
                })
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });
        });
    });

    // Here it'll be tested two behaviors when try to find a task by id
    describe('GET /orders/:orderId', function() {
        // Testing how to find a task by id
        it('returns a order by id', function(done) {
            server.get('/orders/:orderId')
                .expect(200)
                .end(function(err, res) {
                    res.status.should.equal(200);
                    done(err);
                });
        });
     });   

    // Testing how to update a task expecting status 200 of success
    describe('PUT /orders/:orderId', function() {
        it('updates a task', function(done) {
            server.put('/orders/:orderId')
                .send({
                    name: 'SuperTraders',
                    done: false
                })
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });
        });
    });

    // Testing how to delete a task expecting status 200 of success
    describe('DELETE /orders/:orderId', function() {
        it('removes a task', function(done) {
            server.put('/orders/:orderId')
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });
        });
    });
