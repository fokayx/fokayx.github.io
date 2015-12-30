// Make it vivrate for 300ms
window.navigator.vibrate(300);
// Currently different browsers have different events
var hidden, visibilityChange;
if (typeof document.hidden !== 'undefined') {
    // Opera 12.10, Firefox >=18, Chrome >=31, IE11
    hidden = 'hidden';
    visibilityChangeEvent = 'visibilitychange';
} else if (typeof document.mozHidden !== 'undefined') {
    // Older firefox
    hidden = 'mozHidden';
    visibilityChangeEvent = 'mozvisibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
    // IE10
    hidden = 'msHidden';
    visibilityChangeEvent = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
    // Chrome <31 and Android browser (4.4+ !)
    hidden = 'webkitHidden';
    visibilityChangeEvent = 'webkitvisibilitychange';
}

// Event handler: log change to browser console
function visibleChangeHandler() {
    if (document[hidden]) {
        console.log('Page is not visible\n');
    } else {
        console.log('Page is visible\n');
    }
}

//Register event handler
if (typeof document.addEventListener === 'undefined' ||
             typeof document[hidden] === 'undefined'   ) {
    console.log("Page Visibility API isn't supported, sorry!");
} else {
    document.addEventListener(visibilityChangeEvent, visibleChangeHandler, false);
}

//Register event and requests permission
document.addEventListener('visibilitychange', visibleChangeHandler, false);
var notification = window.Notification || window.mozNotification || window.webkitNotification;
notification.requestPermission(function(permission){});

//Poll our backend for notifications, set some reasonable timeout for your application
window.setTimeout(function() {
    console.log('poll...');
 //   jQuery.ajax({
 //       url: '/',
 //       dataType: 'json',
 //       data: {userid:'1234', token:'other data'},    //Include your own data, think about CSRF!
 //       success: function(data, status) {
 //           notificationPoster(data, status);
 //       }
 //   });
  if (!("Notification" in window)) {
    alert("This browser does not suppot desktop notification");
  }
  else if (Notification.permission === "granted") {
     var url = "http://www.5xruby.tw";
     var titleText = "fokayx";
     var bodyText = {
           body: "foxxxxxx",
           icon: "/assets/image/fokayx.jpg",
           dir : "ltr"
     };

     var notify = new Notification(titleText, bodyText);

     notify.onclick = function () {
       console.log("clicked");
       window.open(url);
       notify.close();
     };
     notify.onshow = function () {
       window.setTimeout(function() {notify.close();}, 7000);
       console.log("show me");
     };
   }
 //  else if (Notification.permission === "denied") {
 //    console.log("老爺不要…");
 //    document.location.href="http://www.5xruby.tw";
 //  }
   else if (Notification.permission === "default") {
     window.setTimeout(function () {
     location.reload();
     }, 5000);
   };

}, 0);

var originalTitle = '', messageCount = 0;
function notificationPoster(data, status)
{
  console.log("wowo");
 //  if (document['hidden']) {
 //      console.log('page not visible, use notification and vibrate');
 //      //Vibrate and try to send notification
 //      window.navigator.vibrate(500);
 //      if (false == Notify(data.title, data.body)) {
 //          //Fallback signaling which updates the tab title
 //          if ('' == originalTitle)
 //              originalTitle = document.title;
 //          messageCount++;
 //          document.title = '('+messageCount+' messages!) '+originalTitle;
 //      } else {
 //          //Notification was shown
 //      }
 //  }
 //  else {
 //      console.log('page visible, push to normal notification queue'); 
 //      doYourOwnSignaling(data);

 //      //Reset fallback handling
 //      messageCount = 0;
 //      if ('' != originalTitle)
 //          document.title = originalTitle;
 //      originalTitle = '';
 //  }
}
