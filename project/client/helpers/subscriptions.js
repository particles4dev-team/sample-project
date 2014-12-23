/**
 * Global Subscriptions
 */
Tracker.autorun(function(){
    if (depsLoggedin()) {
        if(isAdminNonReactive){
            console.log('admin');
        }
        if(isModeratorNonReactive){
            console.log('moderator');
        }
        if(isUserNonReactive){
            console.log('user');
        }
    }
    else {
        // anonymous
        console.log('anonymous');
    }
});