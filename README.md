ProfileBox
==========

A simple jquery popup effect that can be used on members list webpages. I'm using this to 
to display our club members' profile information if their names are clicked. I did this 
from scratch to play around with jquery, and you can see its implementation on my clubs 
website, http://www.acm.uiuc.edu/webmonkeys/2012/?page_id=93 . Click on the first member
to see this affect at its best. It works for all the other members, but I did not add as
much information for many of the others. There are a few easy bugs that still need to be 
fixed.

Example
=======
http://www.acm.uiuc.edu/webmonkeys/2012/?page_id=93#


Instructions
============

1.) Add the infoCard stylesheet to your header

	<link rel="stylesheet" type="text/css" href="infoCard.css" />

2.) Add the id attribute "infoCard_list" to list tag you want to use. Then add an anchor tag surrounding the
	text you want to display.

	<ul id="infoCard_list">
		<li><a href="#">Your Name Here</a></li>
		.
		.
		.
		<li></li>
	</ul>

3.) Inside your first li element, surround the rest with a div with the class of "info". This is needed to hide your 	profile information until a list item is clicked.

	<ul id="infoCard_list">
		<li>
			<a href="#"">Your Name Here</a>
			<div class=".info">
				<ul>
					<li>/* Profile information goes here. */</li>
					.
					.
					.
					<li>/* Profile information goes here. */</li>
				</ul>
			</div>
		</li>
	</ul>

4.) Add the jquery library and the infoCard javascript files.
	
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script type="text/javascript" src="js/infoCard.js"><script>

5.) Directly under the infoCard script file add the following javascript.

	<script>
		var deck = new InfoCard({
				list: 'infoCard_list'
			});
		deck.init();
	</script>



Bugs:

1.) The width and height of the info bubble is fixed. It does not expand if content gets too big.

2.) If any member other than the first one is clicked, undefined will be returned 
on the bubble. If no information is given. I at least put all of the members names
on the bubble to cover this minor problem up.
