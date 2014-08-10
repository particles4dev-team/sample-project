if(Meteor.isClient){
    Items = new Meteor.Collection('items',{connection: null});
    for (var i = 10; i >= 0; i--) {
        Items.insert({
            name: i
        });
    };
}