"attribute" and "property"
===========================

What's the difference between an "attribute" and a "property"?

In general terms (and in normal English usage) the terms mean the same thing.
In the specific context of HTML / Javascript the terms get confused because the HTML representation of a DOM element has attributes (that being the term used in XML for the key/value pairs contained within a tag) but when represented as a JavaScript object those attributes appear as object properties.

Describe Event Bubbling

A button is clicked and the event is directed to the button. If an event handler
is set for that object, the event is triggered.If no event handler is set to that 
object, the event bubbles up to the objects parents.

The event bubbles up from parent to parent until it is handled, or until it reaches
the document object.
