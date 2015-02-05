/**
 * Helpers router
 */
if(typeof Router != 'undefined'){
    Router.getCurrentRouterName = function() {
        var routeName, router;
        router = Router.current();
        if (!router) {
            return;
        }
        routeName = router.route.getName();
        return routeName;
    };

    Router.reload = function(){
        var current = Router.current();
        Router.go(current.route.name, current.params);
    };
}
