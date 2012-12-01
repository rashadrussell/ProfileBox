ProfileBox
==========

A simple jquery popup effect that can be used on members list webpages. I'm using this to 
to display our club members' profile information if their names are clicked. I did this 
from scratch to play around with jquery, and you can see its implementation on my clubs 
website, http://www.acm.uiuc.edu/webmonkeys/2012/?page_id=93 . Click on the first member
to see this affect at its best. It works for all the other members, but I did not add as
much information for many of the others. There are a few easy bugs that still need to be 
fixed.

Bugs:

1.) Bubble box does not expand if content gets too big.

2.) If any member other than the first one is clicked, undefined will be returned 
on the bubble. If no information is given. I at least put all of the members names
on the bubble to cover this minor problem up.
