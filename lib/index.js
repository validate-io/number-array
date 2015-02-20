/**
*
*	VALIDATE: number-array
*
*
*	DESCRIPTION:
*		- Validates if a value is a number array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isNumber = require( 'validate.io-number' );


// IS NUMBER ARRAY //

/**
* FUNCTION: isNumberArray( value )
*	Validates if a value is a number array.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a number array
*/
function isNumberArray( value ) {
	var len;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( var i = 0; i < len; i++ ) {
		if ( !isNumber( value[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isNumberArray()


// EXPORTS //

module.exports = isNumberArray;
