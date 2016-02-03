
var http = require("http");

var observable = require("data/observable");
var observableModule = require("data/observable");
var observableArray = require("data/observable-array");

var id = "mainViewModel";
var menuItems = new observableArray.ObservableArray([]);

//Creates an instance of an observable object.
var vm = new observable.Observable();

vm.startApp = function() {
    console.log('start app :: mainView');
    //getService('menu');
}




//Exposes the observable object as a module, which can be required from another js file.
module.exports = vm;