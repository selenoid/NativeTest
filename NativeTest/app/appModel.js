
var http = require("http");
var frameModule = require("ui/frame");
var observable = require("data/observable");
var observableModule = require("data/observable");
var observableArray = require("data/observable-array");

//var id = "appModel";
//var listItems = new observableArray.ObservableArray([]);
//var appInstance = null;
//var counter = 0;
//Creates an instance of an observable object.
var appModel = new observable.Observable();
var viewDelegate = new observable.Observable();

appModel.id = "appModel";
appModel.requestType = -1;

appModel.initModule = function (app) {
    console.log("initing module..." + app);
    setTimeout(changePage, 2000);
}

function changePage () {
    console.info("changing page...");
    
    navigationEntry = {
        moduleName : "components/home/views/secondPage",
        context : {
            viewData : "simpleViewData",
            viewDelegate : appModel
        }
    };
    
    var topmost = frameModule.topmost();
    topmost.navigate(navigationEntry);
}

//Exposes the observable object as a module, which can be required from another js file.
module.exports = appModel;