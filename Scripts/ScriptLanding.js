/////////////// Scripts para Landing.html /////////////// 
let show_beers = document.getElementById('show_beers');
show_beers.addEventListener('click', function () {
    location.href = 'Beers.html';
})

// function addEvent(obj, evt, fn) {
//     if (obj.addEventListener) {
//         obj.addEventListener(evt, fn, false);
//     }
//     else if (obj.attachEvent) {
//         obj.attachEvent("on" + evt, fn);
//     }
// }
// addEvent(window, "load", function (e) {
//     addEvent(document, "mouseout", function (e) {
//         e = e ? e : window.event;
//         var from = e.relatedTarget || e.toElement;
//         if (!from || from.nodeName == "HTML") {
//             // stop your drag event here
//             // for now we can just use an alert
//             alert("FREE BEER!!");
//             alert('Now that I have your attention, keep browsing');
//         }
//     });
// });







