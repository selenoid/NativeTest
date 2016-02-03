var view = require("ui/core/view");
var viewModel = require("./testPageModel");

exports.pageLoaded = function(args) {
    
    console.log("page loaded...");
    var page = args.object;
    page.bindingContext = viewModel;
    
    //viewModel.initApp();
}