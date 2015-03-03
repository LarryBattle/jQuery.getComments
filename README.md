# Note
Project is retired and not under active development.

#jQuery.getComments#

A jQuery plugin to help you retrieve comments hidden within HTML elements.

##Version##
0.1, June 11, 2012

## Example: ##
**HTML:**

	<div id="example">I am a div. <!--Duh!--></div>

**Javascript:**

	$("#example").getComments(true); // returns [ "Duh!" ]

## Documentation ##
**@function** $.fn.getComments() <br/>
**@args** {boolean} asArray - If true, returns an array of the comments values. Otherwise returns an array of comment nodes.

##Author##
[Larry Battle](http://bateru.com/news/contact-me)

##License##
[MIT](http://www.opensource.org/licenses/mit-license.php)

##Project page##
https://github.com/LarryBattle/jQuery.getComments

##Testcases:##
http://jsfiddle.net/96rux/light/
