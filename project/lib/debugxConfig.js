/**
 * LOGS SYSTEM FOR APP
 * Colors Rule:
 *      Error : Red
 *      Info : white
 *      Warn : yellow
 *      Trace: cyan (pub/sub)
 */

DEBUGX.denyAll();
DEBUGX.allow('*');
DEBUGX.deny('*');

DEBUGX.allow(function(group){
    var reg = /FIXTURES/gi;
    return reg.test(group);
});

DEBUGX.allow(function(group){
    var reg = /PUBLICATIONS/gi;
    return reg.test(group);
});

/**
DEBUGX.deny(function(group){
    return group === 'hidden';
});
*/

DEBUGX._time = function(){
    return moment().format('hh:mm:ss A DD/MM/YY');
};

loginfo = function(group, message){
    DEBUGX.info(group.color('white'), message.color('white'));
};

logtrace = function(group, message){
    DEBUGX.info(group.color('cyan'), message.color('cyan'));
};

logerror = function(group, message){
    DEBUGX.info(group.color('red'), message.color('red'));
};
