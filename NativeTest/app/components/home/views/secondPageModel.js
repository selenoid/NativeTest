var http = require("http");
var observable = require("data/observable");

//Creates an instance of an observable object.
var vm = new observable.Observable();

vm.initApp = function(dataBundle, lv) {
    console.info("*******initialize secondPageModel..." + dataBundle.viewData);
}

//Exposes the observable object as a module, which can be required from another js file.
module.exports = vm;