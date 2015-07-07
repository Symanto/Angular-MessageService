# Angular-MessageService
## Installation
###Bower
The easiest way to install the MessageService is by including the bower package to your solution
```shell
bower install symanto-angular-messageservice --save
```
Afterwards you just need to add the module and the required [bootstrap-notify][1] module to your HTML file. If you use bower you do not need to download it seperately, bower does that for you.
```html
<script src="bower_components/remarkable-bootstrap-notify/dist/bootstrap-notify.min.js"></script>
<script src="bower_components/symanto-angular-messageservice/MessageService.js"></script>
```

## Usage
To display a message to the user with the message service just inject it and call one of the following methods:
```javascript
angular.module("Test").controller("TestController", function (MessageService) {
  // success
  MessageService.success("Wohoo, everything went fine! \o/");
  // warning
  MessageService.warning("Watch your steps, dude!");
  // error
  MessageService.error("WTF! Everything crashed!");
});
```

  [1]: https://github.com/mouse0270/bootstrap-notify
  
