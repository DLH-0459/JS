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
function gcd(x, y)
{
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
Math.prototype.rect = function(r, theta) {
    return {
        x: r * Math.sin(theta),
        y: r * Math.cos(theta)
    };
}

/**
 * Converts Cartesian coordinates (x, y) to polar
 * 
 * @param {Number} x - X-coordinate
 * @param {Number} y - Y-coordinate
 * @returns {Object} - Returns a JSON object containing the radius and angle (in radians).
 */
Math.prototype.pol = function(x, y) {
    return {
        r: Math.sqrt(x * x + y * y),
        theta: Math.atan2(y, x)
    };
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
 * Returns an array of x^i (mod n) for an integer x and a prime number n, for nonnegative integers i starting at 0 and
 * continuing until the remainder returns to being equal to 1.
 * 
 * @param {Number} x - Number whose powers are being 
 * @param {Number} n - Number to be tested against
 * @returns {Array}
 */
function remainderCycle(x, n)
{
    let i = x, j = 0, result = [];
    x = Math.floor(x);
    n = Math.floor(n);

    if (x <= 0 || n <= 0)
    {
        return [];
    }

    result.push([0, 1]);

    while (i != 1)
    {
        j++;
        result.push([j, i]);
        i = i * x % n;
    }

    result.push([j + 1, 1]);
    return result;
}

//]]>
