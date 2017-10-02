var jsRefs =
    ['/js/chores.js',
        '/js/roomie.js',
        'js/calendar.js',
        'js/jquery-3.2.1.js'
    ];
// load script references
for (var i = 0; i < jsRefs.length; i++) {
    var script = document.createElement('script');
    script.src = jsRefs[i];
    script.type = 'text/javascript';
    script.async = false;
    var scripts = document.getElementsByTagName('script')[0];
    scripts.parentNode.insertBefore(script, scripts);
};