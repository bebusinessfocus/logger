check:

https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object

```js
const util = require('util');

console.log(util.inspect(myObject, { showHidden: false, depth: null }));

// alternative shortcut
console.log(util.inspect(myObject, false, null, true /* enable colors */));
```

https://nodejs.org/api/util.html#util_util_format_format_args
