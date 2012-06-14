#jQuery.getComments#

A jQuery plugin to help you retrieve comments hidden within HTML elements.

## Example: ##
HTML:
`<div id="example">I am a div. <!--Duh!--></div>`

Javascript:
`$("#example").getComments(true) // returns [ "Duh!" ]`

## Documentation ##
**@function** $.fn.getComments()
**@args** {boolean} asArray
	If true, returns an array of the comments values. Otherwise returns an array of comment nodes.

##Author## 
[Larry Battle](http://bateru.com/news/contact-me)

##Version## 
0.1, June 11, 2012

##License##
MIT

##Project page##
https://github.com/LarryBattle/jQuery.getComments

##Testcases:##
http://jsfiddle.net/96rux/light/