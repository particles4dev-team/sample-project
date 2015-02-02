Package.describe({
    summary: "<summary/>",
    version: "1.0.0",
    name: "particle4dev:<package name/>",
    git: "<github link/>"
});

// meteor test-packages ./
var both        = ['client', 'server'];
var client      = ['client'];
var server      = ['server'];
var cordova     = ['web.cordova']
// Cordova.depends({
    //'com.phonegap.plugins.facebookconnect': 'https://github.com/Wizcorp/phonegap-facebook-plugin/tarball/5287cbf9a7a275dcb76477789c3b52b0a5ce0d42'
// });

// Npm.depends({
    //'debug': '0.7.3', // DEBUG
// });

// Package.registerBuildPlugin({
//     name: 'configuration',
//     use: [
//         'check'
//     ],
//     sources: [
//         'plugin/push.configuration.js'
//     ]
// });

Package.on_use(function(api) {
    api.versionsFrom('1.0');

    // import packages
    api.use(['underscore'], both);

    // add files
    // api.add_files('facebook_server.js', server);
    // api.add_files('facebook.js', 'web');
});
