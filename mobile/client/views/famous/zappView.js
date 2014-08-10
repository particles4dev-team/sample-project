//https://github.com/EventedMind/blaze-layout

/*** PageView.js ***/

define('views/PageView', ['famous/core/View', 'famous/core/Surface', 'famous/core/Transform', 'famous/modifiers/StateModifier'],function(require, exports, module) {
    
    function PageView() {
        View.apply(this, arguments);

        _createLayout.call(this);
        _createHeader.call(this);
        _createBody.call(this);

        _setListeners.call(this);
    }

    PageView.prototype = Object.create(View.prototype);
    PageView.prototype.constructor = PageView;

    PageView.DEFAULT_OPTIONS = {
        headerSize: 44
    };

    function _createLayout() {
        this.layout = new HeaderFooter({
            headerSize: this.options.headerSize
        });

        var layoutModifier = new StateModifier({
            transform: Transform.translate(0, 0, 0.1)
        });

        this.add(layoutModifier).add(this.layout);
    }
    function _createHeader() {
        var backgroundSurface = new Surface({
            properties: {
                backgroundColor: 'black'
            }
        });

        var backgroundModifier = new StateModifier({
            transform: Transform.behind
        });

        this.hamburgerSurface = new ImageSurface({
            size: [44, 44],
            content: 'http://launch.famo.us/fu-assets/timbre/slide-menu/img/hamburger.png'
        });

        var searchSurface = new ImageSurface({
            size: [232, 44],
            content: 'http://launch.famo.us/fu-assets/timbre/slide-menu/img/search.png'
        });

        var iconSurface = new ImageSurface({
            size: [44, 44],
            content: 'http://launch.famo.us/fu-assets/timbre/slide-menu/img/icon.png'
        });

        var hamburgerModifier = new StateModifier({
            origin: [0, 0.5],
            align : [0, 0.5]
        });

        var searchModifier = new StateModifier({
            origin: [0.5, 0.5],
            align : [0.5, 0.5]
        });

        var iconModifier = new StateModifier({
            origin: [1, 0.5],
            align : [1, 0.5]
        });

        this.layout.header.add(hamburgerModifier).add(this.hamburgerSurface);
        this.layout.header.add(searchModifier).add(searchSurface);
        this.layout.header.add(iconModifier).add(iconSurface);
        this.layout.header.add(backgroundModifier).add(backgroundSurface);
    }
    function _createBody() {
        this.bodySurface = new ImageSurface({
            size : [undefined, true],
            content : 'http://launch.famo.us/fu-assets/timbre/slide-menu/img/body.png'
        });

        this.layout.content.add(this.bodySurface);
    }
    function _setListeners() {
        this.hamburgerSurface.on('click', function() {
            this._eventOutput.emit('menuToggle');
        }.bind(this));
    }
    module.exports = PageView;
});

/*** AppView.js ***/

define('AppView', ['famous/core/View',
    'famous/core/Surface',
    'famous/core/Transform',
    'famous/modifiers/StateModifier'], function(require, exports, module) {

    var PageView = require('views/PageView');

    var AppView = createFamousView(function(){
        this.menuToggle = false;
        _createPageView.call(this);
        _setListeners.call(this);
    }, {
        toggleMenu: function() {
            if(this.menuToggle) {
                this.slideLeft();
            } else {
                this.slideRight();
            }
            this.menuToggle = !this.menuToggle;
        },
        slideRight: function() {
            this.pageModifier.setTransform(Transform.translate(276, 0, 0), {
                duration: 300,
                curve: 'easeOut'
            });
        },
        slideLeft: function() {
            this.pageModifier.setTransform(Transform.translate(0, 0, 0), {
                duration: 300,
                curve: 'easeOut'
            });
        }
    });

    AppView.DEFAULT_OPTIONS = {};

    function _createPageView() {
        this.pageView = new PageView();
        this.pageModifier = new StateModifier();

        this.add(this.pageModifier).add(this.pageView);
    }

    function _setListeners() {
        this.pageView.on('menuToggle', this.toggleMenu.bind(this));
    }

    module.exports = AppView;
});
Meteor.startup(function(){
    var app             = require('AppView');
    var Engine          = require('famous/core/Engine');
    var mainContext     = Engine.createContext();
    createDevice();
    function createDevice() {
        mainContext.add(new app());
    }
});