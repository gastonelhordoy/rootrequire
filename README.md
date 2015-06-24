# rootrequire

Require files relative to your project root.

## Install

```
npm install --save root-require
```

## Use

```js
var
  rootRequire = require('root-require'),
  myLib = rootRequire('path/to/lib');
```

## Why?

* You can move files around more easily than you can with relative paths like `../../lib/my-lib.js`
* Every file documents your app's directory structure for you. You'll know exactly where to look for things.
* Dazzle your coworkers.


## More about the topic
You can read more about this topic on the following discussions/blogs:
[Better local require() paths for Node.js](https://gist.github.com/branneman/8048520)
[Solving Nodejs Relative Requires](http://www.jondelamotte.com/solving-node-project-requires/)
