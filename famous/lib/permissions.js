/**
 * set permissions rule
 */
isAdmin = function(userId){
    return isRoles(SC.ADMIN, userId);
};
isModerator = function(userId){
    return isRoles(SC.MODERATOR, userId);
};
isUser = function(userId){
    return isRoles(SC.USER, userId);
};
isLoggedin = function(userId){
    return isRoles(SC.USER, userId);
};
isRoles = function(role, userId){
    var loggedInUser;
    if(_.isNull(userId) || _.isUndefined(userId) || _.isArray(userId) || _.isNumber(userId))
        loggedInUser = Meteor.user();
    else
        loggedInUser = Users.findOne(userId);
    if(!_.isArray(role)){
        role = [role];
    }
    if(!loggedInUser)
        return false;
    if (Roles.userIsInRole(loggedInUser, role)) {
        return true;
    }
    return false;
};
if(Meteor.isClient) {
    isLoggedin = function(){
        return !Meteor.loggingIn() && !!Meteor.user();
    };

    var reactiveLoggedin = new Tracker.Dependency();
    var loggedin = false; 
    depsLoggedin = function () {
        reactiveLoggedin.depend();
        return loggedin;
    };
    var setReactiveLoggedin = function (value) {
        loggedin = value;
        reactiveLoggedin.changed();
    };
    isAdminNonReactive      = Tracker.nonreactive(isAdmin);
    isModeratorNonReactive  = Tracker.nonreactive(isModerator);
    isUserNonReactive       = Tracker.nonreactive(isUser);
    Tracker.autorun(function(){
        if(Meteor.user()){
            isAdminNonReactive      = Tracker.nonreactive(isAdmin);
            isModeratorNonReactive  = Tracker.nonreactive(isModerator);
            isUserNonReactive       = Tracker.nonreactive(isUser);
        }
        setReactiveLoggedin(Tracker.nonreactive(isLoggedin));
    });
}