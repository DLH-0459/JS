//<![CDATA[

/**
 * Library providing functionality missing from vanilla JS.
 */

function isEvaluable(str)
{
    /**
     * Checks to see if a string is an evaluable expression
     * 
     * @param {String} str - String to be tested
     */
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

function formatN(x, m)
{
    /**
     * Rounds a number to a specified number of decimal places.
     * 
     * @param {Number} x - The number to be formatted
     * @param {Number} m - The number of decimal places to round to
     */
    return Math.round(x * Math.pow(10, m)) / Math.pow(10, m);
}

function gcd(x, y)
{
    /**
     * Returns the greatest common divisor (GCD) of two numbers.
     * 
     * @param {Number} x
     * @param {number} y
     */
    while (y != 0)
    {
        let z = x % y;
        x = y;
        y = z;
    }
    return x;
}

function degrees_to_radians(theta)
{
    /**
     * Converts an angle from degrees to radians.
     * 
     * @param {Number} theta - The angle to be converted
     */
    return theta / 180 * Math.PI;
}

function rectangular(r, theta)
{
    /**
     * Converts polar coordinates to rectangular coordinates.
     * 
     * @param {Number} r - Radius
     * @param {Number} theta - Angle
     */
    return [r * Math.sin(theta), r * Math.cos(theta)];
}

function sfloor(x)
{
    /**
     * Returns the "signed floor" of a number.
     * 
     * @param {Number} x
     */
    return ((x > 0) ? Math.floor(x) : Math.ceil(x));
}

function sceil(x)
{
    /**
     * Returns the "signed ceiling" of a number.
     * 
     * @param {Number} x
     */
    return ((x > 0) ? Math.ceil(x) : Math.floor(x));
}

function slfrac(x)
{
    /**
     * Returns the "signed lower fractional part" of a number.
     * 
     * @param {Number} x
     */
    return x - sfloor(x);
}

function sufrac(x)
{
    /**
     * Returns the "signed upper fractional part" of a number.
     * 
     * @param {Number} x
     */
    return sceil(x) - x;
}

function lin_interp(a, b, f)
{
    /**
     * Linear interpolation function.
     * 
     * @param {Object} a - Coordinates of the first point
     * @param {Object} b - Coordinates of the second point
     * @param {Number} f - Weight (at least 0, at most 1)
     */
    return {
        x: a.x * (1 - f) + b.x * f,
        y: a.y * (1 - f) + b.y * f
    };
}

function isEmpty(str)
{
    /**
     * Checks to see if a string is empty or consists of only whitespaces.
     * 
     * @param {String} str
     */
    return !str.replace(/\s+/, "").length;
}

Math.csc = function(n) {
    /**
     * Calculates the cosecant of an angle in radians.
     * 
     * @param {number} n - A real number
     */
    return 1 / Math.sin(n);
}

Math.sec = function(n) {
    /**
     * Calculates the secant of an angle in radians.
     * 
     * @param {number} n - A real number
     */
    return 1 / Math.cos(n);
}

Math.cot = function(n) {
    /**
     * Calculates the cotangent of an angle in radians.
     * 
     * @param {number} n - A real number
     */
    return 1 / Math.tan(n);
}

//]]>