#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> Regular expression for matching non conditional HTML comments


## Install

```sh
$ npm install --save html-non-conditional-comment-regex
```


## Usage

```js
var htmlNonConditionalCommentRegex = require('html-non-conditional-comment-regex');

htmlNonConditionalCommentRegex.test('<!DOCTYPE html><!--\nnormal comment \n--><html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body></body></html>');
//=> true

htmlNonConditionalCommentRegex.test('<!DOCTYPE html><!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]--><html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body></body></html>');
//=> false
```


## License

MIT © [Steve Mao](https://github.com/stevemao)


[npm-image]: https://badge.fury.io/js/html-non-conditional-comment-regex.svg
[npm-url]: https://npmjs.org/package/html-non-conditional-comment-regex
[travis-image]: https://travis-ci.org/stevemao/html-non-conditional-comment-regex.svg?branch=master
[travis-url]: https://travis-ci.org/stevemao/html-non-conditional-comment-regex
