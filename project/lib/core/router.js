/**
 * Helpers router
 */
Router.getCurrentRouterName = function() {
    var routeName, router;
    router = Router.current();
    if (!router) {
        return;
    }
    routeName = router.route.name;
    return routeName;
};

Router.reload = function(){
    var current = Router.current();
    Router.go(current.route.name, current.params);
};