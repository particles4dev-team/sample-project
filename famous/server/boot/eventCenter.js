/**
 * What the problem ? what is event center do ?
 * http://nodejs.org/api/events.html#events_class_events_eventemitter
 */
/**
 * Config, variable
 */
var EventEmitter = Npm.require("events").EventEmitter;

/**
 * Method
 */
Meteor.methods({

});

/**
 * Function or class
 */

/**
 * export
 */
(function(){
    var sandbox = new EventEmitter();
    var self = this;
    _.extend(self, {
        on: function (eventName, handFunc) {
            return sandbox.on(eventName, handFunc);
        },
        off: function (eventName, handFunc) {
            return sandbox.removeListener(eventName, handFunc);
        },
        emit: function (eventName) {
            var args = Array.prototype.slice.call(arguments);
            sandbox.emit.apply(sandbox, args);
        }
    });
}).apply(APP.namespace('app.module.Event_Center'));

/**
 * Quick test
 */
Meteor.startup(function () {
});