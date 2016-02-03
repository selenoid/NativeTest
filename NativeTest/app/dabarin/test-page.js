var http = require("http");
var view = require("ui/core/view");
var logger = require("~/util/util.js");
var imageSource = require("image-source");
var fs = require("file-system");
var observableModule = require("data/observable");
var observableArray = require("data/observable-array");

var pageData = new observableModule.Observable();

var testVal = "Car";
var img = 'http://androidexample.com/media/webservice/LazyListView_images/image0.png';
//var img = "res://logo";
var id = "PageModule";

var imageSourceModule = require("image-source");
var imageCache = require("ui/image-cache");

var cache = new imageCache.Cache();
var defaultImageSource = imageSourceModule.fromFile("~/app/images/loading.gif");
var defaultNotFoundImageSource = imageSourceModule.fromFile("~/app/images/no-image.png");

cache.invalid = defaultNotFoundImageSource;
cache.placeholder = defaultImageSource;
cache.maxRequests = 5;

function displayImage(viewModel, url, propertyName) {
    logger.log("tag", "requesting image " + url);
    var source = cache.get(url);
    logger.log("tag", ("source : " + source));
    propertyName = propertyName || "image";

    if (source) {
        logger.log("tag", ("first case : " + source));
        viewModel.set(propertyName, source);
    } else {
        viewModel.set(propertyName, defaultImageSource);
        logger.log("tag", ("propertyName : " + propertyName + ", " + defaultImageSource));
        
        cache.push({
                       key: url,
                       url: url,
                       completed: function (result, key) {
                           if (key === url) {
                               logger.log("tag", ("onComplete" + "" + result + " key:" + key));

                               viewModel.set(propertyName, result);
                               var object = viewModel.get(propertyName);
                               logger.log("tag", "object: " + object);
                           }
                       }
                   });
    }
}

function pageLoaded(args) {
    logger.log("tag", "loaded test-page...");

    var page = args.object;
    pageData.set("myImg", img);
    pageData.set("myTextVal", testVal);
    
    page.bindingContext = pageData;
    
    /*var tempImg = imageSource.fromUrl("https://www.google.com/images/errors/logo_sm_2.png")
        .then(function (res) {
            console.log("tag","Image successfully loaded : " + res);
        }, function (error) {
            console.log("Error loading image: " + error);
        });
    
    logger.log("tag","image loaded..."+tempImg);*/
    
    //displayImage(pageData, 'https://farm2.staticflickr.com/1536/23850779813_800f9052ec.jpg', img);
}

exports.pageLoaded = pageLoaded;