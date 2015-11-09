document.getElementById("auth-button").addListener( function() { 
    chrome.identity.getAuthToken( {
        'interactive': true,
        }, function(token) {
            console.log( "HAVE TOKEN!" );
        }
    );
});
