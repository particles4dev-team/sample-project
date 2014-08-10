// https://github.com/EventedMind/blaze-layout/blob/master/layout.js
createFamousView = function(init, objExt){
    var v = function(){
        View.apply(this, arguments);
        init.apply(this, arguments);
    }
    v.prototype = Object.create(View.prototype);
    _.extend(v.prototype, objExt);
    return v;
};

Meteor.startup(function(){
    var mainContext = Engine.createContext();

    Package['iron-router'].Router.configure({
        uiManager: {
            /**

            */
            render: function (props, parentComponent) {
                
            },
            /**

            */
            insert: function (parentDom, parentComponent, props) {
        
            },
            /**

            */
            layout: function(){},
            /**

            */
            setRegion: function(){},
            /**

            */
            getRegionKeys: function(){},
            /**

            */
            clearRegion: function(){},
            /**

            */
            getData: function(){},
            /**

            */
            setData: function(){}
        }
    });
});
