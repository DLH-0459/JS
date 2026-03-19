//<![CDATA[

/**
 * Library providing functionality missing from vanilla JS.
 */

/**
 * Checks to see if a string is empty.
 * 
 * @param {String} str - String to be tested
 * @returns {boolean}
 */
function isEmpty(str)
{
    return !(str.replace(/\s+/, "").length);
}

/**
 * Checks to see if a string is an evaluable expression
 * 
 * @param {String} str - String to be tested
 * @returns {boolean}
 */
function isEvaluable(str)
{
    try
    {
        let x = eval(str);
    }
    catch (err)
    {
        return false;
    }

    return true;
}

/**
 * Rounds a number to a specified number of decimal places.
 * 
 * @param {Number} x - The number to be formatted
 * @param {Number} m - The number of decimal places to round to
 * @returns {Number}
 */
function formatN(x, m)
{
    return Math.round(x * Math.pow(10, m)) / Math.pow(10, m);
}

/**
 * Returns the greatest common divisor (GCD) of two numbers.
 * 
 * @param {Number} x - The first number
 * @param {Number} y - The second number
 * @returns {Number}
 */
Math.gcd = function(x, y) {
    while (y != 0)
    {
        let z = x % y;
        x = y;
        y = z;
    }
    return x;
}

/**
 * Converts an angle from degrees to radians.
 * 
 * @param {Number} theta - The angle to be converted
 * @returns {Number}
 */
function degrees_to_radians(theta)
{
    return theta / 180 * Math.PI;
}

/**
 * Converts polar coordinates to rectangular coordinates.
 * 
 * @param {Number} r - Radius
 * @param {Number} theta - Angle
 * @returns {Object} - Returns a JSON object containing the X and Y coordinates.
 */
Math.rect = function(r, theta) {
    return [r * Math.cos(theta), r * Math.sin(theta)];
}

/**
 * Converts Cartesian coordinates (x, y) to polar
 * 
 * @param {Number} x - X-coordinate
 * @param {Number} y - Y-coordinate
 * @returns {Object} - Returns a JSON object containing the radius and angle (in radians).
 */
Math.pol = function(x, y) {
    return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}

/**
 * Returns the "signed floor" of a number.
 * 
 * @param {Number} x
 * @returns {Number}
 */
function sfloor(x)
{
    return ((x > 0) ? Math.floor(x) : Math.ceil(x));
}

/**
 * Returns the "signed ceiling" of a number.
 * 
 * @param {Number} x
 * @returns {Number}
 */
function sceil(x)
{
    return ((x > 0) ? Math.ceil(x) : Math.floor(x));
}

/**
 * Returns the "signed lower fractional part" of a number.
 * 
 * @param {Number} x
 * @returns {Number}
 */
function slfrac(x)
{
    return x - sfloor(x);
}

/**
 * Returns the "signed upper fractional part" of a number.
 * 
 * @param {Number} x
 * @returns {Number}
 */
function sufrac(x)
{
    return sceil(x) - x;
}

/**
 * Linear interpolation function.
 * 
 * @param {Object} a - Coordinates of the first point
 * @param {Object} b - Coordinates of the second point
 * @param {Number} f - Weight (at least 0, at most 1)
 * @returns {Object}
 */
function lin_interp(a, b, f)
{
    if (f > 1)
    {
        f = 1;
    }
    else if (f < 0)
    {
        f = 0;
    }

    return {
        x: a.x * (1 - f) + b.x * f,
        y: a.y * (1 - f) + b.y * f
    };
}

/**
 * Calculates the cosecant of an angle in radians.
 * 
 * @param {Number} n - A real number
 * @returns {Number}
 */
Math.csc = function(n) {
    return 1 / Math.sin(n);
}

/**
 * Calculates the secant of an angle in radians.
 * 
 * @param {Number} n - A real number
 * @returns {Number}
 */
Math.sec = function(n) {
    return 1 / Math.cos(n);
}

/**
 * Calculates the cotangent of an angle in radians.
 * 
 * @param {Number} n - A real number
 * @returns {Number}
 */
Math.cot = function(n) {
    return 1 / Math.tan(n);
}

/**
 * Inserts, at a specified index, a string into another string.
 * 
 * @param {Number} index - The index of the string to be inserted at
 * @param {String} str - The string to be inserted
 */
String.prototype.insert_at = function(index, str) {
    return ((index > 0) ? this.substring(0, index) + str + this.substring(index, this.length) : string + this);
};

/**
 * Returns an array consisting of the decimal code units that each character in a given string corresponds to.
 * 
 * @returns {Array<Number>}
 */
String.prototype.toCharCodes = function() {
    return this.split("").map(x => x.charCodeAt(0));
};

/**
 * Returns an array consisting of the hexadecimal code units that each character in a given string corresponds to.
 * 
 * @returns {Array<String>}
 */
String.prototype.toHexCharCodes = function() {
    return this.split("").map(x => x.charCodeAt(0).toString(16));
};

/**
 * Like String.fromCharCode, but takes an array of decimal numbers as a single parameter instead of invidiual numbers in
 * their own parameters.
 * 
 * @returns {String}
 */
String.fromCharCodeArray = function(a) {
    return eval(`String.fromCharCode(${a.join()})`);
};

/**
 * JavaScript equivalent of PHP's "htmlspecialchars" function. Escapes "special" characters so they can be displayed
 * literally instead of being interpreted as HTML. Useful for preventing XSS attacks.
 * 
 * @param {String} text - The text to be processed
 * @returns {String}
 */
function htmlspecialchars(text)
{
    return text.replace(/\&/g, "&amp;")
        .replace(/\</g, "&lt;")
        .replace(/\>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/\'/g, "&#39;");
}

/**
 * JavaScript equivalent of PHP's "htmlspecialchars_decode" function to decode HTML entities. Use of DOMParser helps prevent
 * XSS vulnerabilities compared to a simple div, span, or textarea element.
 * 
 * @param {String} text - The string to be processed
 */
function htmlspecialchars_decode(text)
{
    const page = (new DOMParser()).parseFromString(text, "text/html");
    return page.documentElement.textContent;
}

/**
 * Improves behaviour of "encodeURIComponent" function by escaping characters ! ~ * ' ( ) which are not normally escaped
 * by encodeURI or encodeURIComponent.
 * 
 * @param {String} text - The string to be processed
 * @returns {String}
 */
function encodeURIComponentAll(text)
{
    return encodeURIComponent(text).replace(/[!~\*\'\(\)]/g, ch => "%" + ch.charCodeAt(0).toString(16).toUpperCase());
}

//]]>
