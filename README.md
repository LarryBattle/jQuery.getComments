jQuery.getComments
==================

A jQuery plugin to help you get the Comments from HTML 
$.fn.getComments() is used to extract the html comments from a HTML elements.
<hr/>
@author Larry Battle <http://bateru.com/news/contact-me>

@license MIT

@date June 11, 2012

@version 0.1

@args {boolean} asArray - If true, returns an array of the comments values. Otherwise returns jquery objects of the node comments.
<hr/>
Example:
HTML:
`<div id="example">I am a div. <!--Duh!--></div>`

Javascript:
`$("#example").getComments(true) // returns [ "Duh!" ]`
<hr/>
Testcases:
http://jsfiddle.net/96rux/light/