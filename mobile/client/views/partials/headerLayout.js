/**
 * HELPERS
 */

/**
 * EVENTS
 */
Template.headerLayout.events({
    'click .openLeftSideMenu': function(evt, tmp){
        evt.preventDefault();
        var self = this;
        console.log('openLeftSideMenu');
        animate('page', function(pageModifier){
            pageModifier.setTransform(Transform.translate(0, 0, 0), {
                duration: 300,
                curve: 'easeOut'
            });
        });
    }
});
/**
 * CLASS FUNCTION
 */