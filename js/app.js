var phonegapReady = function(){
    new jQuery.nd2Toast({
        message:"in phonegap",
        ttl: 5000
    });
}

document.addEventListener("deviceready", phonegapReady, false);