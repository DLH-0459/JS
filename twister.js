//<![CDATA[

String.prototype.twingle = function(sw) {
    let bytes = (new TextEncoder()).encode(this);
    let WINDOWS_1252_LQ = {
        0x80: "\u20AC", 0x81: "\uFFFD", 0x82: "\u201A", 0x83: "\u0192",
        0x84: "\u201E", 0x85: "\u2026", 0x86: "\u2020", 0x87: "\u2021",
        0x88: "\u02C6", 0x89: "\u2030", 0x8A: "\u0160", 0x8B: "\u2039",
        0x8C: "\u0152", 0x8D: "\uFFFD", 0x8E: "\u017D", 0x8F: "\uFFFD",
        0x90: "\uFFFD", 0x91: "\u2018", 0x92: "\u2019", 0x93: "\u201C",
        0x94: "\u201D", 0x95: "\u2022", 0x96: "\u2013", 0x97: "\u2014",
        0x98: "\u02DC", 0x99: "\u2122", 0x9A: "\u0161", 0x9B: "\u203A",
        0x9C: "\u0153", 0x9D: "\uFFFD", 0x9E: "\u017E", 0x9F: "\u0178",
    };

    sw = sw.toLocaleLowerCase().replace(/[^A-Za-z0-9]/g, "");

    if (sw === "bestfit")
    {
        WINDOWS_1252_LQ[0x81] = "\u0081";
        WINDOWS_1252_LQ[0x8D] = "\u008D";
        WINDOWS_1252_LQ[0x8F] = "\u008F";
        WINDOWS_1252_LQ[0x90] = "\u0090";
        WINDOWS_1252_LQ[0x9d] = "\u009D";
    }

    return Array.from(bytes, b => ((b >= 0x80 && b <= 0x9F) ? WINDOWS_1252_LQ[b] : String.fromCharCode(b))).join("");
}

//]]>