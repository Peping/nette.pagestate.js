# nette.pagestate.js

Nette Pagestate is a library that helps keep a [nette](http://github.com/nette/nette) application state between subrequests (signals) by storing the state on the page and submitting it to the server each time a subrequest is made via AJAX (using [nette.ajax.js](https://github.com/vojtech-dobes/nette.ajax.js). It is especially useful in situations when you need to create more complex and interactive nette components using javascript, but your project's UI and most operations still need to be done on the server.

**BE SURE TO ALSO INSTALL THE SERVER SIDE:** [peping/nette-pagestate](https://github.com/Peping/nette-pagestate)

## Installation
Use Bower to install the client side package:
```
bower install nette.pagestate.js --save
```

## Usage
Just put the nette.pagestate.js file somewhere in your html. Probably the best place to put it would be your `@layout.latte` files.
```html
<script type="text/javascript" src="path/to/nette.pagestate.js"></script>
```