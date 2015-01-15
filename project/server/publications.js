/**
 * Config, variable
 */
var Future = Npm.require('fibers/future');
var Fiber = Npm.require('fibers');

var isLoging = true;

/**
 * Helpers
 */
var logging = function(collection, message){
    if(!_.isString(message))
        message = '';
    logtrace('[PUBLICATIONS][' + collection + ']', message);
};

var info = function(collection){
    var message = '';
    if(isLoging) {
        var args = Array.prototype.slice.call(arguments, 1);
        _.each(args, function (value) {
            message += ' ' + value;
        });
        loginfo('[PUBLICATIONS][info ' + collection + ']', message);
    }
};

var _handCursor = function (cursor, sub, options) {
    if(!cursor)
        return;
    var collection = cursor._cursorDescription.collectionName;
    var observeHandle = cursor.observeChanges({
        added: function (id, fields) {
            if(options && _.isFunction(options.beforeAdded))
                fields = options.beforeAdded.call(sub, id, fields);
            sub.added(collection, id, fields);
        },
        changed: function (id, fields) {
            if(options && _.isFunction(options.beforeChanged))
                fields = options.beforeChanged.call(sub, id, fields);
            sub.changed(collection, id, fields);
        },
        removed: function (id) {
            sub.removed(collection, id);
        }
    });
    var name = 'anonymous';
    if(sub.userId) {
        name = APP.namespace('suitor.collections.USERS').getNameById(sub.userId);
    }
    logging(collection, 'subscribe by ' + name);
    sub.onStop(function () {
        logging(collection, 'unsubscribe by ' + name);
        observeHandle.stop();
    });
};

var _publishCursor = function (cursor, sub, options) {
    if(!isCursor(cursor) && !_.isArray(cursor)) {
        sub.ready();
        return;
    }
    if(isCursor(cursor)) {
        _handCursor(cursor, sub, options);
    }
    else if(_.isArray(cursor)) {
        _.each(cursor, function (value) {
            _handCursor(value, sub, options);
        });
    }
    sub.ready();
};

/**
 * PUBLICATIONS
 */
Meteor.publish("delay", function(){
    var fiber = Fiber.current;
    setTimeout(function() {
        fiber.run();
    }, 10000);
    Fiber.yield();
    this.ready();
});
