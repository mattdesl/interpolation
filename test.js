var test = require('tape').test;
var lerp = require('./').lerp;
var smoothstep = require('./').smoothstep;

test('lerp is correct', function(t) {
    t.equal( lerp(0, 1, 0), 0 );
    t.equal( lerp(-25, 50, 1), 50 );
    t.equal( lerp(-25, 50, 0), -25 );
    t.equal( lerp(100, 10, 0), 100 );
    t.equal( lerp(0, 100, 0.5), 50 );
    t.end();
});

test('smoothstep is correct', function(t) {
    t.equal( smoothstep( 100, 200, 150 ), 0.5 );
    t.equal( smoothstep( 10, 20, 9 ), 0 );
    t.equal( smoothstep( 10, 20, 30 ), 1 );
    t.equal( smoothstep( 0, 1, 0.6 ), 0.648 );
    t.end();
});