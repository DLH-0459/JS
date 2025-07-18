//<![CDATA[

/**
 * Library providing access to various string functions.
 */

const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const alphaOnly = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const lowerOnly = "abcdefghijklmnopqrstuvwxyz";

function randString(len)
{
    /**
     * Generates a random string of a specified length.
     * 
     * @param {Number} len
     */
    var res = alphaOnly.charAt(Math.floor(Math.random() * alphaOnly.length));

    if (len < 0)
    {
        return "";
    }

    for (var i = 1; i < len; i++)
    {
        res += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }

    return res;
}

function randString_randLen(max_len)
{
    /**
     * Generates a random string of a random length with a specified maximum length. Defaults to 20 characters.
     * 
     * @param {Number} max_len - Maximum number of characters
     */
    max_len = Math.round(max_len) || 20;
    var out = "";

    if (max_len <= 0)
    {
        return "";
    }

    for (var i = 0; i <= Math.floor(Math.random() * max_len); i++)
    {
        out += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }

    return out;
}

function randString_lower(len)
{
    /**
     * Generates a random string of lowercase characters.
     * 
     * @param {Number} len
     */
    var res = "";

    for (var i = 0; i < len; i++)
    {
        res += lowerOnly.charAt(Math.floor(Math.random() * lowerOnly.length));
    }

    return res;
}

function randID_preset()
{
    /**
     * Generates a random identifier. This format is based on observations I've made between 2017 and 2021 on Quora's
     * website, when I found that they were inserting random invisible strings between words such as "sponsored", "promoted",
     * and "ad" in an attempt to evade detection by ad blockers.
     * 
     * Intended to be assigned as the <id> attribute.
     */
    return ("__" + randString(2) + "_" + randString(10) + "_" + randString(50));
}

function randID_header(str)
{
    /**
     * Generates a random "header" identifier with a specified type. Also based on Quora. Intended to be assigned as the <id>
     * attribute like randID_preset().
     * 
     * @param {String} str
     */
    return "__" + randString(2) + "_" + randString(10) + "_" + str;
}

String.prototype.insert_at = function(index, str) {
    /**
     * Inserts, at a specified index, a string into another string.
     * 
     * @param {Number} index
     * @param {String} str
     */
    if (index > 0)
    {
       return this.substring(0, index) + str + this.substring(index, this.length);
    }

    return string + this;
};

String.prototype.toCharCodes = function() {
    return this.split("").map(x => x.charCodeAt(0));
};

String.prototype.toHexCharCodes = function() {
    return this.split("").map(x => x.charCodeAt(0).toString(16));
};

String.fromCharCodeArray = function(a) {
    return eval("String.fromCharCode(" + a.join(",") + ")");
};

function htmlspecialchars(text)
{
    /**
     * JavaScript equivalent of PHP's "htmlspecialchars" function. Escapes "special" characters so they can be displayed
     * literally instead of being interpreted as HTML.
     * 
     * @param {String} text
     */
    return text.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#39;");
}

function htmlspecialchars_decode(text)
{
    /**
     * JavaScript equivalent of PHP's "htmlspecialchars_decode" function. Decodes HTML entities, and passes through DOMParser
     * instead of a div, span, or other conventional element to prevent XSS and other vulnerabilities.
     * 
     * @param {String} text
     */
    const page = (new DOMParser()).parseFromString(text, "text/html");
    return page.documentElement.textContent;
}

function encodeURIComponentAll(text)
{
    /**
     * Improves behaviour of "encodeURIComponent" function by escaping characters ! ~ * ' ( ) which are not normally escaped
     * by encodeURI or encodeURIComponent.
     * 
     * @param {String} text
     */
    return encodeURIComponent(text).replace(/[!~\*\'\(\)]/g, ch => "%" + ch.charcodeAt(0).toString(16).toUpperCase());
}

//]]>