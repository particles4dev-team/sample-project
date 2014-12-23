/**
 * Global templates helpers
 */

/**
 * permissions rule
 */
UI.registerHelper('isAdmin', function (userId) {
    return isAdmin(userId);
});

UI.registerHelper('isModerator', function (userId) {
    return isModerator(userId);
});

UI.registerHelper('isUser', function (userId) {
    return isUser(userId);
});

/**
 * 
 * @param {date|string} time 
 * @param {string} format 
 *
 * @return {string} 
 */
UI.registerHelper('moment', function (time, format) {
    var t = moment(time)
    return t.format(format);
});

/**
 * get constants
 */
UI.registerHelper('constants', function (namespace) {
    var parts = namespace.split('.'),
    parent = window,
    i;
    for (i = 0; i < parts.length; i += 1) {
        // create a property if it doesn't exist
        if (typeof parent[parts[i]] === "undefined") {
            return null;
        }
        parent = parent[parts[i]];
    }
    return parent;
});

