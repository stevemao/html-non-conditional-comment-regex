'use strict';
var assert = require('assert');
var htmlNonConditionalCommentRegex = require('./');

var html = '<!DOCTYPE html><!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"><!-- normal comment 1 --><!-- normal comment 2--> <!--normal comment 3 --> <!--\nnormal comment 4 --><!--\nnormal comment 5\n--><![endif]--><!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]--><!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]--><!--[if gt IE 8]><!--><html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body></body></html>';

it('html should match the regex', function() {
  var result = htmlNonConditionalCommentRegex.exec(html);
  assert.deepEqual(result[0], '<!-- normal comment 1 -->');
  assert.deepEqual(result[1], ' normal comment 1 ');

  result = htmlNonConditionalCommentRegex.exec(html);
  assert.deepEqual(result[0], '<!-- normal comment 2-->');
  assert.deepEqual(result[1], ' normal comment 2');

  result = htmlNonConditionalCommentRegex.exec(html);
  assert.deepEqual(result[0], '<!--normal comment 3 -->');
  assert.deepEqual(result[1], 'normal comment 3 ');

  result = htmlNonConditionalCommentRegex.exec(html);
  assert.deepEqual(result[0], '<!--\nnormal comment 4 -->');
  assert.deepEqual(result[1], '\nnormal comment 4 ');

  result = htmlNonConditionalCommentRegex.exec(html);
  assert.deepEqual(result[0], '<!--\nnormal comment 5\n-->');
  assert.deepEqual(result[1], '\nnormal comment 5\n');
});
