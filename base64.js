//<![CDATA[

let Base64 = {
    /**
     * Converts a string into Base64, with LF (\n) newlines, and using the RFC 4648 alphabet (A-Z, a-z, 0-9, +, /).
     * 
     * @param {String} str - The string to be encoded.
     * @returns {String}
     */
    encode: function(str) {
        return this._enc(str);
    },

    /**
     * Converts a string into Base64, with LF (\n) newlines, and using the numeral-first alphabet (0-9, A-Z, a-z, +, /).
     * 
     * @param {String} str - The string to be encoded.
     * @returns {String}
     */
    encodeA: function(str) {
        return this._enc(str, "a");
    },

    /**
     * Converts a string into Base64, with CRLF (\r\n) newlines, and using the RFC 4648 alphabet (A-Z, a-z, 0-9, +, /).
     * 
     * @param {String} str - The string to be encoded.
     * @returns {String}
     */
    encodeL: function(str) {
        return this._enc(str, "", "crlf");
    },

    /**
     * Converts a string into Base64, with CRLF (\r\n) newlines, and using the numeral-first alphabet (0-9, A-Z, a-z, +, /).
     * 
     * @param {String} str - The string to be encoded.
     * @returns {String}
     */
    encodeAL: function(str) {
        return this._enc(str, "a", "crlf");
    },

    /**
     * Decodes a Base64 string.
     * 
     * @param {String} str - The string to be decoded.
     * @returns {String}
     */
    decode: function(str) {
        return this._dec(str);
    },

    /**
     * Decodes a Base64 string using the numeral-first alphabet (0-9, A-Z, a-z, +, /).
     * 
     * @param {String} str - The string to be decoded.
     * @returns {String}
     */
    decodeA: function(str) {
        return this._dec(str, "a");
    },

    _enc: function(str, alpha = "", nl = "") {
        // Handle newlines
        str = str.replace(/(?:\r*\n\r*|\n*\r\n*)/g, ((nl == "CRLF") ? "\r\n" : "\n"));

        /**
         * Use encodeURIComponent to get percent-encoded Unicode, then we convert the percent encodings into raw bytes which can
         * be fed into btoa.
         */
        let result = btoa(encodeURIComponent(str).replace(/%([0-9A-Fa-f]{2})/g, (m, p1) => String.fromCharCode("0x" + p1)));

        if (alpha == "a")
        {
            result = this._transl(result, true);
        }

        return result;
    },

    _dec: function(str, alpha = "") {
        // Strip out invalid characters
        str = str.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        if (alpha == "a")
        {
            str = this._transl(result, false);
        }

        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split("").map(ch => "%" + ("00" + ch.charCodeAt(0).toString(16)).slice(-2)).join(""));
    },

    /**
     * "Translator" function to convert between RFC 4648 (A-Za-z0-9+/) and numeral-first (0-9A-Za-z+/) alphabets.
     * 
     * @param {String} str - The base64 string to be processed
     * @param {boolean} t - "true" if going from RFC 4648 to numeral-first, "false" if going from numeral-first to RFC 4648.
     */
    _transl: function(str, t) {
        let dicta = [["A", "0"], ["B", "1"], ["C", "2"], ["D", "3"], ["E", "4"], ["F", "5"], ["G", "6"], ["H", "7"],
            ["I", "8"], ["J", "9"], ["K", "A"], ["L", "B"], ["M", "C"], ["N", "D"], ["O", "E"], ["P", "F"], ["Q", "G"],
            ["R", "H"], ["S", "I"], ["T", "J"], ["U", "K"], ["V", "L"], ["W", "M"], ["X", "N"], ["Y", "O"], ["Z", "P"],
            ["a", "Q"], ["b", "R"], ["c", "S"], ["d", "T"], ["e", "U"], ["f", "V"], ["g", "W"], ["h", "X"], ["i", "Y"],
            ["j", "Z"], ["k", "a"], ["l", "b"], ["m", "c"], ["n", "d"], ["o", "e"], ["p", "f"], ["q", "g"], ["r", "h"],
            ["s", "i"], ["t", "j"], ["u", "k"], ["v", "l"], ["w", "m"], ["x", "n"], ["y", "o"], ["z", "p"], ["0", "q"],
            ["1", "r"], ["2", "s"], ["3", "t"], ["4", "u"], ["5", "v"], ["6", "w"], ["7", "x"], ["8", "y"], ["9", "z"]];
        let l = str.split("");
        let result = "";

        for (let i = 0; i < l.length; i++)
        {
            let ch = l[i];
            
            if ("+/=".indexOf(ch) >= 0)
            {
                result += ch;
            }
            else
            {
                for (let j = 0; j < dicta.length; j++)
                {
                    let c = dicta[j];
                    
                    if (t)
                    {
                        if (ch == c[0])
                        {
                            result += c[1];
                        }
                    }
                    else
                    {
                        if (ch == c[1])
                        {
                            result += c[0];
                        }
                    }
                }
            }
        }

        return result;
    }
};

//]]>