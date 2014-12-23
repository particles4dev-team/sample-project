Meteor.startup(function(){
    // fixtures
    var fixturesModule = APP.namespace('APP.FIXTURES');

    fixturesModule.setIndex();
    fixturesModule.init();
});