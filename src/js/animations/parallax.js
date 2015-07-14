(function () {
    mainIllustration = document.getElementById('main-illustration');
    if(mainIllustration) {
      var documentElement = document.documentElement;
      var targetPosY = window.innerHeight;

      var tweens = [
        TweenLite.to( document.getElementById("far"), 1, {css:{y:50}, paused:true}),
        TweenLite.to( document.getElementById("middle"), 1, {css:{y:75}, paused:true}),
        TweenLite.to( document.getElementById("near"), 1, {css:{y:100}, paused:true}),
        TweenLite.to( document.getElementById("clouds"), 1, {css:{y:50}, paused:true}),
      ];

      window.onscroll = function (event) {
        ( !! window.requestAnimationFrame) ? requestAnimationFrame(onScroll) : onScroll();
      }

      function onScroll(){
        var top =  Math.max(Math.min(window.pageYOffset || documentElement.scrollTop, targetPosY), 0);
        if(top <= targetPosY){
            var progress = (top / targetPosY);
            Array.prototype.forEach.call(tweens, function(tween){
              tween.progress(progress);
            });
        }
      }
    }
}());
