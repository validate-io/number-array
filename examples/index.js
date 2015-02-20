'use strict';

var isNumberArray = require( './../lib' );

console.log( isNumberArray( [3.14,5.24,1] ) );
// returns true

console.log( isNumberArray( [] ) );
// returns false

console.log( isNumberArray( [1,'2',3] ) );
// returns false
