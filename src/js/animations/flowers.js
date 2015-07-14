(function () {
  mainIllustration = document.getElementById('main-illustration');
  if(mainIllustration) {
    var leftRedFlowers = document.getElementById('red-flowers').querySelectorAll('g');
    var rightRedFlowers = document.getElementById('red-flowers_1_').querySelectorAll('g');
    var redFlowers = Array.prototype.slice.call(rightRedFlowers).concat(Array.prototype.slice.call(leftRedFlowers));

    var leftPurpleFlowers = document.getElementById('purple-flowers').querySelectorAll('path');
    var RightPurpleFlowers = document.getElementById('purple_flowers').querySelectorAll('path');
    var purpleFlowers = Array.prototype.slice.call(leftPurpleFlowers).concat(Array.prototype.slice.call(RightPurpleFlowers));


    function Tween(flower, direction) {
      TweenMax.to(flower, 15, {
        repeat:-1,
        ease:Linear.easeNone,
        rotation:direction,
        transformOrigin:"50% 50%"
      });
    }

    for (var i = 0; i < redFlowers.length; i++) {
        var flower = redFlowers[i];
        Tween(flower, 360);
    }

    for (var i = 0; i < purpleFlowers.length; i++) {
        var flower = purpleFlowers[i];
        Tween(flower, -360);
    }
  }
}());

