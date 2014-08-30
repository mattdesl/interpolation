[![browser support](https://ci.testling.com/mattdesl/color-luminance.png)](https://ci.testling.com/mattdesl/color-luminance)

# interpolation

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Wraps two common interpolation functions: [lerp](https://www.npmjs.org/package/lerp) (linear interpolation) and [smoothstep](https://www.npmjs.org/package/smoothstep) (Hermite interpolation). 

```npm install interpolation```


Use:

```js
var lerp = require('interpolation').lerp;
var smoothstep = require('interpolation').smoothstep;

var res = lerp(a, b, t);
var res2 = smoothstep(a, b, t);
```

# License

MIT.