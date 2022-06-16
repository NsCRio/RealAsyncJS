# RealAsyncJS

A simple **JS** script to asynchronously load **Javascript** and **CSS** files into a html web page.
**jQuery** is *required*.

# How to install
Add **JS** file after jQuery source.
You can choose a minified (*real-load-async.min.js*) version or not (*real-load-async.js*).
```html
<script  type="text/javascript"  src="/js/jquery.min.js"></script>
<script  type="text/javascript"  src="/js/real-async.min.js"></script>
```

# How to use

There are three methods to use this script. All three methods are very simple to use.

**Attention!**
These types of async load are not recommended and are not suitable for resources that need to be uploaded before the page is fully loaded, such as files:

  - *main.css* or ***style.css***
  - ***main.js*** or *all.js*
  
## On user action loading (recommended for speed up the page)

The first method is the recommended one to load your web page in the **fastest way possible**. This method leaves aside all unuseful resources while the page is loading and loads them only when the user interacts with the page, thereby indicating to the script that it can load the files set aside at the beginning. This is also very useful for fooling **bots**.

Example:
```html
<!-- CSS Async Load -->
<link rel="stylesheet" async-css data-href="/css/fontawesome.min.css" type="text/css">

<!-- Javascript Async Load -->
<script  type="text/javascript" async-js data-src="/js/select2.min.js"></script>
```
These two files will be loaded on the page only when the user makes an interaction with it such as:

 - Move the mouse 
 - Click with the mouse or finger 
 - Click on the keyboard
 - Scroll with the mouse or finger

All actions have been tested on both desktop and smartphone and on **all browser versions**.
*Resources are still loaded at the end of a 6000ms timeout.*

## On document ready loading

This method loads the set resources when the whole page has finished loading. It is useful to load all the resources that must be available at the start of a page but which are not needed while it is starting (eg JS and CSS custom script). Use jQuery's **document.ready()** function.

Example:
```html
<!-- CSS Async Load -->
<link rel="stylesheet" async-css-ready data-href="/css/custom.min.css" type="text/css">
<link rel="stylesheet" async-css-ready data-href="/css/colors.min.css" type="text/css">

<!-- Javascript Async Load -->
<script  type="text/javascript" async-js-ready data-src="/js/custom.min.js"></script>
```
*Resources are still loaded at the end of a 6000ms timeout.*

## On timeout end loading

This option allows you to load the resources asynchronously at the end of a preset timer (of **2000 ms**), this allows you to load the resources only when they are really needed by a user, therefore when he has already been on the page for a while (*so did not open it by mistake*). It also serves to avoid loading these resources to crawler bots, which generally stay a few seconds on the page. This allows tools such as **PageSpeed** or others not to view certain resources and consequently load the page faster. It is very useful to combine with **Google Analytics** and **Google Adsense** to have the latter load asynchronously (It is not bannable).

 **The timeout is skipped when the user interacts with the page, so the resources are loaded immediately.**

```html
<!-- CSS Async Load -->
<link rel="stylesheet" async-css-timeout data-href="/css/colors2.min.css" type="text/css">

<!-- Javascript Async Load -->
<script  type="text/javascript" async-js-timeout data-src="/js/g-analytics.min.js"></script>
<script  type="text/javascript" async-js-timeout data-src="/js/g-adsense.min.js"></script>
```

*Resources are still loaded at the end of a 6000ms timeout.*


# Note

**DO NOT USE** this script over this script or over jQuery... 
```html
<!-- Javascript Async Load -->
<script  type="text/javascript" async-js src="/js/jquery.min.js"></script>
<script  type="text/javascript" async-js src="/js/real-async.min.js"></script>
```
