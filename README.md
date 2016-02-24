# Droidfoot 2 Student Project

This was a Partially Working Prototype from an INFO3130 student project at Conestoga.	I am using it as an example, because I thought that the students came up with a simple/elegant solution that I preferred to the [nativedroid2 demo on github](http://nd2.godesign.ch/). The Prototype contains list and categories of restaurants with full description of menu, prices, operating times and locations.

The students that worked on this project were:

Anton Nepsha, Thomas Tran, Ahmad Hussain, and Nick Galatsis.

Starting out with the overall design of the code for the site, the students used typical jQuery mobile `data-role=` type markup.

```

<div data-role="page" class="nd2-no-menu-swipe">

	<nd2-include data-src="examples/fragments/panel.left.html"></nd2-include>


	<div data-role="header" data-position="fixed" class="wow fadeIn">
		<a href="#leftpanel" class="ui-btn ui-btn-left"><i class="zmdi zmdi-menu"></i></a>
		<h1 class="wow fadeIn" data-wow-delay='0.4s'>Restaurants</h1>

		<ul data-role="nd2tabs" data-swipe="true">
			<li data-tab="work" data-tab-active="true">All Restaurants</li>
			<li data-tab="colors">Categories</li>
			<!--<li data-tab="colors">Desserts</li>-->
		</ul>

	</div>

	<div role="main" class="ui-content wow fadeIn" data-inset="false" data-wow-delay="0.2s">

		<div data-role="nd2tab"
       data-tab="friends">



```

To make the app have a name and version, the following config.xml is used.

```

<?xml version="1.0" encoding="UTF-8" ?>
<widget xmlns="http://www.w3.org/ns/widgets" xmlns:gap="http://phonegap.com/ns/1.0" id="io.github.rhildred.studentprototype" version="0.0.1">

    <name>Student Prototype</name>

    <description>
        Prototyping example from Conestoga College INFO3130 class
    </description>
    <content src="index.html" />
    <author href="https://anepsha.github.io">
        Anton Nepsha, Thomas Tran, Ahmad Hussain, and Nick Galatsis
    </author>
    <access origin="*" />
</widget>

```

To add an android like toast that shows up when the `deviceready` message comes one could do something like this:

```

<script src="cordova.js"></script>
<script>

var phonegapReady = function(){
    new jQuery.nd2Toast({
        message:"in phonegap",
        ttl: 5000
    });
}

document.addEventListener("deviceready", phonegapReady, false);

</script>

```

As I mentioned when I started out, I like this better than the  [nativedroid2 demo on github](http://nd2.godesign.ch/). It seems more in the jQuery mobile SPA style.
