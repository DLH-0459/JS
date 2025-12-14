//<![CDATA[

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
 * literally instead of being interpreted as HTML.
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
    return encodeURIComponent(text).replace(/[!~\*\'\(\)]/g, ch => "%" + ch.charcodeAt(0).toString(16).toUpperCase());
}

/**
 * Extends JavaScript's built in btoa function to properly encode a UTF-8 string into Base64.
 * 
 * @param {String} str - The string to be processed
 * @returns {String}
 */
function btoa64(str)
{
    // First we use encodeURIComponent to get percent-encoded Unicode, then we convert the percent encodings into raw bytes
    // which can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (m, p1) => String.fromCharCode("0x" + p1)));
}

/**
 * Extends JavaScript's built-in atob function to properly decode Base64-encoded data to UTF-8.
 * 
 * @param {String} str - The string to be processed
 * @returns {String}
 */
function atob64(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split("").map(ch => "%" + ("00" + ch.charCodeAt(0).toString(16)).slice(-2)).join(""));
}

//]]>
