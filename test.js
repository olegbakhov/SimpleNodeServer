const sinon = require('sinon')
const express = require('express')
const chai = require('chai')
const expect = chai.expect
const app = require('./app.js')
var MyClass = require('./app.js')
var myObj = new MyClass();



it ('spy the callback method', function() {
  var callback = sinon.spy();
  myObj.callTheCallback(callback);
  expect(callback.calledOnce).to.be.true;
  })