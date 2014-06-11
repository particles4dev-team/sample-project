/**
 * Set up iron router
 */
Router.getCurrentRouterName = function(){
    return Router.current().route.name;
};
Router.reload = function(){
    var current = Router.current();
    Router.go(current.route.name, current.params);
};

/**
 * Before Hooks
 */
var IRBeforeHooks = {
    loading: function (pause) {
        var self = this;
        var tmpl;

        if (!self.ready()) {
            tmpl = self.lookupProperty('loadingTemplate');

            if (tmpl) {
                self.render(tmpl);
                self.renderRegions();
                pause();
            }
        }
    },
    nProgressHook: function (pause) {
        if(this._waitList._list.length == 0){
            // no wait on
            NProgress.start();
            NProgress.done();
        }
        else {
            if (this.ready()) {
                NProgress.done();
            } else {
                NProgress.start();
            }
        }
    }
};
/**
 * After Hooks
 */
var IRAfterHooks = {
    resetScroll: function() {
        if (Router.current().route.name !== Session.get('Router.lastPage')) {
            Session.set('Router.lastPage', Router.current().route.name);
            Meteor.startup(function() {
                window.scrollTo(0,0);
            });
        }
        return Router.current().route.name;
    }
};
/**
 * CONFIGURE GLOBAL ROUTER "on" HOOKS
 */
Router.onBeforeAction(IRBeforeHooks.nProgressHook);
Router.onBeforeAction(IRBeforeHooks.loading);
Router.onAfterAction(IRAfterHooks.resetScroll);
/**
 * CONFIGURE GLOBAL ROUTER PARAMETERS
 */
Router.configure({
    notFoundTemplate: 'notFoundPage',
    loadingTemplate : 'loadingPage',
    waitOn: function () {
        return [];
    }
});