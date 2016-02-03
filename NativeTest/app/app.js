var application = require("application");
var appModule = require('./appModel.js');

application.mainModule = "components/home/views/testPage";
application.cssFile = "./app.css";

application.on(application.launchEvent, function (args) { 
    console.info("application inited..");
    
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
        var activity = application.android.startActivity;
        
        appModule.initModule(application.android);
    } else if (args.ios !== undefined) {
        
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
        
        try {
            appModule.initModule(application.ios);
        }catch (error) {
            console.log("error in application init : " + error.toString());
        }
    }
});

application.start();