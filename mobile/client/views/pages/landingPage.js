/**
Template.__define__("landingPage", (function() {
    var self = this;
    var template = this;
    return HTML.DIV({
        id: "landingPage",
        "class": "m-page"
    }, "\n        ", HTML.H1(function() {
        return Spacebars.mustache(self.lookup("value"));
    }), "\n    ");
}));

*/

Template.landingPage.rendered = function(){
    /**
    var Engine        = require('famous/core/Engine');
    var PageView        = require('library/meteor/core/PageView');
    console.log(Engine, PageView);
    var DeviceView    = require("widgets/DeviceView");
    console.log(DeviceView);
    var mainContext   = Engine.createContext();
    createDevice();
    function createDevice() {
        var deviceOptions = {
            type: 'iphone',
            height: window.innerHeight - 100
        };
        var device = new DeviceView(deviceOptions);
        mainContext.add(device);
    }
    */
};
/**
 * Test
 */
Session.setDefault('key', null);
Meteor.startup(function(){
    var i = 0;
    Meteor.setInterval(function(){
        Session.set('key', i);
        i++;
    }, 1000);
});
Template.session.value = function(){
    return Session.get('key');
};
var renderTemplateWithSurface = function(){
    var Surface   = require("famous/core/Surface");

    var div = document.createElement('div');
    div.style.width='100%'; div.style.height='100%';
    var newComponent = UI.renderWithData(Template.session, {});
    UI.insert(newComponent, div);
    return new Surface({
        size: [200, 100],
        content: div,
        properties : {background : 'red'},
        classes: ["test-surface2"]
    });
};