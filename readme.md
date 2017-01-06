# xsultan/satd-patterns [![Build Status](https://travis-ci.org/xsultan/satd-patterns.svg?branch=master)](https://travis-ci.org/xsultan/satd-patterns) [![Coverage Status](https://coveralls.io/repos/github/xsultan/satd-patterns/badge.svg?branch=master)](https://coveralls.io/github/xsultan/satd-patterns?branch=master) [![Build status](https://ci.appveyor.com/api/projects/status/9j2ma9u4gcd7h59x?svg=true)](https://ci.appveyor.com/project/xsultan/satd-patterns)


> A list of patterns used to identify technical debt through source code comments.

Technical debt refers to incomplete or temporary workarounds that allow us to speed software development in the short term at the cost of paying a higher price later on. Recently, studies have shown that technical debt can be detected from source code comments, referred to as self-admitted technical debt.


A list of patterns to detect technical debt from source code comments, it is just a JSON file so it is convenient to be used. 


## Install

```
$ npm install --save satd-patterns
```

```js
const satd_patterns = require('satd-patterns');

console.log(satd_patterns);
//=> ['hack', 'workaround', 'fixme', ...]
```


## Related Publication

- [`An Exploratory Study on Self-Admitted Technical Debt`](http://das.encs.concordia.ca/uploads/2016/01/Potdar_ICSME2014.pdf)


## License

MIT © [Sultan Wehaibi](https://github.com/xsultan)
