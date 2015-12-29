function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check if the user is okay to get some notification
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification

  var url = "http://www.5xruby.tw";

  var titleText = "ルビーコン";

  var bodyText = {
        body: "資料下載處 " + url,
        icon: "/assets/image/fokayx.jpg",
        dir : "ltr"
    };

  var notification = new Notification(titleText , bodyText);

    //  notification 點擊時
    notification.onclick = function () {
      console.log(bodyText.body);
      window.open(url);
    };

    // notification 出現時
    notification.onshow = function () {
      window.navigator.vibrate(300);
      console.log("hihshow me");
    };

    // notification 關閉時
    notification.onclose = function () {
      console.log('closeeeeee');
    };


    // notification 出錯時
    notification.onerror = function () {
      console.log('something wrong');
    };
  }



  // Otherwise, we need to ask the user for permission
  // Note, Chrome does not implement the permission static property
  // So we have to check for NOT 'denied' instead of 'default'
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // Whatever the user answers, we make sure we store the information
      if (!('permission' in Notification)) {
        Notification.permission = permission;
      }

      // If the user is okay, let's create a notification
      if (permission === "granted") {
        var options = {
              body: "This is the body of the notification",
              icon: "/assets/fokayx.jpg",
              dir : "ltr"
          };
        var notification = new Notification("Hi there",options);
      }
    });
  }

  // At last, if the user already denied any notification, and you
  // want to be respectful there is no need to bother them any more.
}

