Meteor.startup(function(){
    // fixtures
    var fixturesModule = APP.namespace('app.module.FIXTURES');

    fixturesModule.setIndex();
    fixturesModule.init();
});