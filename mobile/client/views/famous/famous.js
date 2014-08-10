(function(){
    Template.__define__("famous", (function() {
        var self = this;
        var template = this;
        var surface = new Surface({
            size: [100, 100],
            properties: {
                color: 'white',
                textAlign: 'center',
                backgroundColor: '#FA5C4F'
            }
        });
        self.hello = function(){
            console.log('hello');
        };
        console.log(self);
        return [function() {
            return Spacebars.mustache(self.lookup("template"));
        }];
    }));
})();