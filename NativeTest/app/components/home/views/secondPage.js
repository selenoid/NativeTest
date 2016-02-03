var view = require("ui/core/view");
var viewModel = require("./secondPageModel");

exports.pageLoaded = function(args) {
    console.log("initing load secondPageModel from secondPageModelJS");
}

exports.navigatedTo = function (args) {
    
    var page = args.object;
    page.bindingContext = viewModel;
    console.log("navigated to : " + page);
    
    var dataBundle = page.navigationContext;
    
    viewModel.initApp(dataBundle);
};