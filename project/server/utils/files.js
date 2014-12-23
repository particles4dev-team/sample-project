/**
 * Config, variable
 */
var loadStaticJSONFile = function(file) {
    return EJSON.parse(Assets.getText(file));
};

// export
(function(){
    var self = this;
    self.loadStaticJSONFile = loadStaticJSONFile;
}).apply(APP.namespace('app.utils.Files'));