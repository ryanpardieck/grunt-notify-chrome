grunt-notify-chrome
================================

![Alt text](/../screenshots/images/screenshot.png?raw=true "Extension Screenshot")

This is a somewhat hastily made fork of [grunt-notify] (https://github.com/dylang/grunt-notify "grunt-notify") 
designed to send remote notifications. Technically the client recieving the notifiction could be whatever,
but this was made with the chrome.notifications API in mind, and I have a companion extension available as 
[chrome-grunt-notifier] (https://github.com/ryanpardieck/chrome-grunt-notifier "chrome-grunt-notifier").
It is guaranteed to be at least no harder to use than this.

Currently this module assumes that __if you have it installed, then you exclusively want to send
remote notifications__. It won't check for other platforms.

Set Up
-----

grunt-notify-chrome simply feeds your notifications to a Firebase of your choosing. 

First run: ```npm install grunt-notify-chrome```

You have to create a secrets.js file in node_modules/grunt-notify-chrome/lib.

secrets.js should be a one-line file that reads like this:

```
module.exports = "https://my_personal_firebase_here.firebaseIO.com"
```

Of course you also need to sign up for your own Firebase at firebase.com.

Credit
-----

This is forked from the dylang's awesome grunt-notify: https://github.com/dylang/grunt-notify

License
-------
[MIT](https://tldrlegal.com/license/mit-license).
