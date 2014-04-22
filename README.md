## htmlclose

Close open html elements in a string of html. Made this to guard against strange html coming from the Tumblr api when split on the `<!-- read more -->` comment. It's not meant to create a usable html structure.

```
$ npm install htmlclose
```

## Usage

```javascript
var htmlclose = require('htmlclose');

htmlclose('<div class="foo"><span>this is a div</span>');
// => "<div class="foo"><span>this is a div</span></div>"
```

## Tests

```
$ npm test
```

## License

(The MIT License)

Copyright (c) 2014 TJ Krusinski &lt;tjkrus@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
