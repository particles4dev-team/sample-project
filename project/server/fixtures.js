/**
 * Config, variable
 */
var Future = Npm.require('fibers/future');
var Fiber = Npm.require('fibers');
var Files = APP.namespace('app.utils.Files');

/**
 * Methods, functions
 */
var loadUsers = function(){
    var users = Files.loadStaticJSONFile('users.json');
    var usersModule = APP.namespace('app.collections.USERS');
    _.each(users.data, function(user){
        loginfo('FIXTURES - User', user.username);
        try {
            usersModule.insertByObject(user);
        }
        catch (err){
            logerror('FIXTURES -- User Insert Failed', err.message);
        }
    });
};

// export
(function(){
    var self = this;
    self.init = function(){
        loadUsers();
    };
    self.setIndex = function(){
        try {
            // Interest
            // MongoIndex.createIndex('interest', [ ['userId', 1] ]);
        }
        catch (err){
            logerror('FIXTURES -- Set Collection Index Failed', err.message);
        }
    };
}).apply(APP.namespace('app.module.FIXTURES'));