Meteor.startup(function(){
    // fixtures
    var fixturesModule = APP.namespace('app.module.FIXTURES');
    fixturesModule.reset();
    fixturesModule.setIndex();
    fixturesModule.init();
});
