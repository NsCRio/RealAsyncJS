/****
 *
 * Created by NsC_Rio
 * https://github.com/NsCRio
 *
*/
console.log('<<<< Real Load Async JS - Created by NsC_Rio >>>>');

var timeout = 2000;
var load_all_timeout = 6000;
var loaded = false;
var loaded_on_ready = false;
var loaded_timeout = false;

/** Load ASYNC on Timeout End */
setTimeout(loadAsyncTimeout, timeout);

/** Load ASYNC on Document Ready */
$(function () {
    loadAsyncOnReady();
});

/** Load ASYNC on User Actions */
$(document).on("click keydown keyup mousemove scroll", function() {
    if(loaded == false){
        loadAsync();
    }
});
/** If user not call an action set timeout */
setTimeout(loadAsync, load_all_timeout);

/** Load ASYNC on User Actions */
function loadAsync(){
    if(loaded == false){
        loadAsyncTimeout();
        loadAsyncOnReady();
        /** Javascript */
        $("*[async-js]").each(function (i, element){
            var src = $(element).attr('data-src');
            $(element).attr('src', src);
            $(element).removeAttr('data-src');
            $(element).removeAttr('async-js');
        });
        /** Css */
        $("*[async-css]").each(function (i, element){
            var href = $(element).attr('data-href');
            $(element).attr('href', href);
            //$(element).attr('media', 'all');
            $(element).removeAttr('data-href');
            $(element).removeAttr('async-css');
        });
        loaded = true;
        console.log('<<<< Javascript and CSS loaded in async mode >>>>');
    }
}

/** Load ASYNC on Document Ready */
function loadAsyncOnReady(){
    if(loaded_on_ready == false){
        /** Javascript */
        $("*[async-js-ready]").each(function (i, element){
            var src = $(element).attr('data-src');
            $(element).attr('src', src);
            $(element).removeAttr('data-src');
            $(element).removeAttr('async-js-ready');
        });
        /** Css */
        $("*[async-css-ready]").each(function (i, element){
            var href = $(element).attr('data-href');
            $(element).attr('href', href);
            $(element).removeAttr('data-href');
            $(element).removeAttr('async-css-ready');
        });
        loaded_on_ready = true;
        console.log('<<<< Javascript and CSS (on ready) loaded in async mode >>>>');
    }
}

/** Load ASYNC on Timeout End */
function loadAsyncTimeout(){
    if(loaded_timeout == false){
        /** Javascript */
        $("*[async-js-timeout]").each(function (i, element){
            var src = $(element).attr('data-src');
            $(element).attr('src', src);
            $(element).removeAttr('data-src');
            $(element).removeAttr('async-js-timeout');
        });
        /** Css */
        $("*[async-css-timeout]").each(function (i, element){
            var href = $(element).attr('data-href');
            $(element).attr('href', href);
            //$(element).attr('media', 'all');
            $(element).removeAttr('data-href');
            $(element).removeAttr('async-css-timeout');
        });
        loaded_timeout = true;
        console.log('<<<< Javascript and CSS (timeout) loaded in async mode >>>>');
    }
}
