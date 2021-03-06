# helper-reflinks [![NPM version](https://img.shields.io/npm/v/helper-reflinks.svg?style=flat)](https://www.npmjs.com/package/helper-reflinks) [![NPM downloads](https://img.shields.io/npm/dm/helper-reflinks.svg?style=flat)](https://npmjs.org/package/helper-reflinks) [![Build Status](https://img.shields.io/travis/helpers/helper-reflinks.svg?style=flat)](https://travis-ci.org/helpers/helper-reflinks)

Async template helper for generating a list of markdown reference links.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save helper-reflinks
```

## Usage

```js
var reflinks = require('helper-reflinks');
```

Since this is an async helper, it can only registered with engines that support async helpers:

* [assemble](#assemble)
* [templates](#templates)
* [verb](#verb)

### templates

Register the helper for use with [templates](https://github.com/jonschlinkert/templates)

```js
var templates = require('templates');
var app = templates();

app.asyncHelper('reflinks', reflinks());
```

### assemble

To register the helper for use with [assemble](https://github.com/assemble/assemble) ^0.6.0:

```js
var assemble = require('assemble');
var app = assemble();

app.asyncHelper('reflinks', reflinks());
```

### verb

Register the helper for use with [verb](https://github.com/verbose/verb):

```js
var verb = require('verb');
var app = verb();

app.asyncHelper('reflinks', reflinks());

app.task('default', function() {
  app.src('.verb*.md')
    .pipe(app.dest('./'));
});
```

## Related projects

You might also be interested in these projects:

* [helper-related](https://www.npmjs.com/package/helper-related): Template helper for generating a list of links to the homepages of related GitHub/npm projects. | [homepage](https://github.com/helpers/helper-related)
* [handlebars-helpers](https://www.npmjs.com/package/handlebars-helpers): More than 130 Handlebars helpers in ~20 categories. Helpers can be used with Assemble, Generate… [more](https://github.com/assemble/handlebars-helpers) | [homepage](https://github.com/assemble/handlebars-helpers)
* [template-helpers](https://www.npmjs.com/package/template-helpers): Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or… [more](https://github.com/jonschlinkert/template-helpers) | [homepage](https://github.com/jonschlinkert/template-helpers)

## Contributing

This document was generated by [verb-readme-generator][] (a [verb](https://github.com/verbose/verb) generator), please don't edit directly. Any changes to the readme must be made in [.verb.md](.verb.md). See [Building Docs](#building-docs).

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Or visit the [verb-readme-generator][] project to submit bug reports or pull requests for the readme layout template.

## Building docs

_(This document was generated by [verb-readme-generator][] (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-readme-generator && verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/helpers/helper-reflinks/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on July 13, 2016._

[verb-readme-generator]: https://github.com/verbose/verb-readme-generator