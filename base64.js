/**
 * Encodes a UTF-8 string into Base64.
 * 
 * @param {String} a - Indicates numeral-first or RFC 4648 alphabet
 * @returns {String}
 */
String.prototype.encodeBase64 = function(a = "") {
    a = a.replace(/\W+/g, "").toLocaleLowerCase();

    let result = "";
    const alphabet = ((a == "n") ? "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/" : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
    const str = this.replace(/\r\n|\n\r|\r|\n/g, "\r\n");
    const b = (new TextEncoder()).encode(str);

    for (let i = 0; i < b.length; i += 3)
    {
        const b0 = b[i];
        const b1 = b[i + 1];
        const b2 = b[i + 2];

        // 24-bit value with up to 3 bytes, missing bytes read as 0
        const tr = (b0 << 16) | ((b1 ?? 0) << 8) | (b2 ?? 0);

        result += alphabet[(tr >> 18) & 0x3F]
            + alphabet[(tr >> 12) & 0x3F]
            + ((b1 === undefined) ? "=" : alphabet[(tr >> 6) & 0x3F])   // First padding
            + ((b2 === undefined) ? "=" : alphabet[tr & 0x3F]);         // Second padding
    }
    return result;
};

/**
 * Decodes a Base64 string into UTF-8 text.
 * 
 * @param {String} a - Indicates numeral-first or RFC 4648 alphabet
 * @returns {String}
 */
String.prototype.decodeBase64 = function(a = "") {
    a = a.replace(/\W+/g, "").toLocaleLowerCase();

    let bytes = [];
    const str = this.replace(/[^A-Za-z0-9\+\/]/g, "");
    const alphabet = ((a == "n") ? "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/" : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
    const lookup = {};

    // Convert char to 6-bit value
    for (let i = 0; i < 64; i++)
    {
        lookup[alphabet[i]] = i;
    }

    for (let j = 0; j < str.length; j += 4)
    {
        const c0 = lookup[str[j]];
        const c1 = lookup[str[j + 1]];
        const c2 = lookup[str[j + 2]];
        const c3 = lookup[str[j + 3]];

        // Reassemble 24-bit value, read missing chars as 0
        const tr = (c0 << 18) | ((c1 ?? 0) << 12) | ((c2 ?? 0) << 6) | (c3 ?? 0);

        bytes.push((tr >> 16) & 0xFF);

        if (c2 !== undefined)
        {
            bytes.push((tr >> 8) & 0xFF);
        }

        if (c3 !== undefined)
        {
            bytes.push(tr & 0xFF);
        }
    }

    return (new TextDecoder()).decode(new Uint8Array(bytes));
};
