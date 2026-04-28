This repo consists of all the JavaScript functions I've used that were not included by default in vanilla JS.

esdf.js provides mathematical functions such as cosecant, secant, and cotangent.

base64.js provides access to Base64 encoding and includes the option to use a numeral-first alphabet. If `text` is a string, then:
* `text.base64Encode()` and `text base64Decode()` encodes and decodes (respectively) a string as UTF-8 and converts it to Base64 according to RFC 4648 (A-Za-z0-9+/).
* `text.base64Encode("n")` and `text base64Decode("n")` encodes and decodes as well, but using the numeral-first alphabet (0-9A-Za-z+/).

jq_math_init.js initialises MathJax and jQuery simultaneously on an HTML page.
