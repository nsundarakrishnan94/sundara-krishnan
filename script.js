AOS.init();

//---------------------shuffle js-----------------------
var Shuffle = window.Shuffle;
var element = document.querySelector('.my-shuffle-container');
var sizer = element.querySelector('.my-sizer-element');

var shuffleInstance = new Shuffle(element, {
  itemSelector: '.picture-item',
  sizer: sizer // could also be a selector: '.my-sizer-element'
});
// shuffleInstance.filter('animal');
$("#all").on("click", function(){
   shuffleInstance.filter();
});
$("#btn-design").on("click", function(){
   shuffleInstance.filter('design');
});
$("#btn-development").on("click", function(){
   shuffleInstance.filter('development');
});




// --------------------------Preload-Animation-----------------------------------------------------------
$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#preloader').delay(2000).fadeOut('fast'); // will fade out the white DIV that covers the website. 
    $('body').delay(100).css({'overflow':'visible'});
  });






//-----------------------------Particle JS Animation-----------------------------------------------------
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });


//------------------------------Typed JS Animation----------------------------------------------------------------

  var typed = new Typed('.dynamictexttype', {
    strings: ['',' a UI Designer', ' a Frontend Developer', ' a Photographer'],
    typeSpeed:120,
    backSpeed:120,
    loop:true
  });


//--------------------------------GSAP Animation------------------------------------------------

// const headerwrapper= document.querySelector('.header-wrapper');

// const t1= new TimelineMax();

// t1.fromTo(headerwrapper,1,{height:"0%"}, {height:"100%"});

var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});




//whatsapp


    // (function () {
    //     var options = {
    //         whatsapp: "+91 9445661857", // WhatsApp number
    //         call: "+91 7010433256", // Call phone number
    //         call_to_action: "Let us have a chat", // Call to action
    //         button_color: "#666666", // Color of button
    //         position: "right", // Position may be 'right' or 'left'
    //         order: "whatsapp,call", // Order of buttons
    //     };
    //     var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    //     var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    //     s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    //     var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    // })();










 // Chat bot    
!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('4gxc4fvgha62');






