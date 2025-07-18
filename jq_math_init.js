//<![CDATA[
if (typeof(window.jQuery) === "undefined")
{
    document.write(decodeURIComponent("%3Cscript%20type%3D%22text%2Fjavascript%22%20src%3D%22jquery.min.js%22%3E%3C%2Fscript%3E"));
}

if ((window.MathJax == "undefined") || (typeof(window.MathJax) === "undefined"))
{
    window.MathJax = {
        tex: {
            inlineMath: [["$", "$"], ["\\(", "\\)"], ["[;", ";]"]],
            displayMath: [["$$", "$$"], ["\\[", "\\]"]],
            processEscapes: true,
            processEnvironments: true,
            processRefs: true
        },
        svg: {
            fontCache: "global"
        }
    };
    document.write(decodeURIComponent("%3Cscript%20type%3D%22text%2Fjavascript%22%20src%3D%22MathJax-master%2Fes5%2Ftex-chtml-full.js%22%3E%3C%2Fscript%3E"));
}
//]]>
