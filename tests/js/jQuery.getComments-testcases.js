/**
* Provides Qunit test cases for jQuery.getComments()
*
* @author Larry Battle <http://bateru.com/news>
* @date June 11, 2012
*/
// Hide testArea for testing purposes.
$("#testArea").hide();

$(function () {

    test("test $.fn.getComments() with elements with no comments", function () {
        var func = function (str) {
            return $("#testArea").html(str).getComments();
        };
        var str;
        
        str = "";
        equal(func(str).length, 0);
        
        str = "<div>I'm a div</div>";
        equal(func(str).length, 0);
        
        str = "No html tags in here.";
        equal(func(str).length, 0);
    });
    
    test("test $.fn.getComments() with elements with comments", function () {
        var func = function (str) {
            return $("#testArea").html(str).getComments();
        };
        var str;
        str = "<!--1-->";
        equal(func(str).length, 1);
        
        str = "<!--1--><div>This is a div</div><!--2-->";
        equal(func(str).length, 2);
        
        str = "<a href='#'>This is a link</a>.<!--1--><span> ok </span>, then <!--2--> <b>be</b> <!--3--><b>bold</b>";
        equal(func(str).length, 3);
    });
    
    test("test $.fn.getComments() with elements with comments in array format", function () {
        var func = function (str) {
            return $("#testArea").html(str).getComments(true);
        };
        var str;
        str = "<!--3-->";
        deepEqual(func(str), ["3"]);
        
        str = "Test is ? <!--<div><b>hidden content</b></div>-->";
        deepEqual(func(str), ["<div><b>hidden content</b></div>"]);
        
        str = "<!--1--><div>This is a div</div><!--2--><span>This is a span</span><!--3--><b>ok></b><!--4-->...";
        deepEqual(func(str), ["1", "2", "3", "4"]);
    });
});