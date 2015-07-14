(function () {
  mainIllustration = document.getElementById('main-illustration');
  if(mainIllustration) {
    var purpleCloud = document.getElementById('purple-cloud_1_');
    var yellowCloud = document.getElementById('yellow_cloud_1_');

    TweenMax.to(purpleCloud, 7, {
      repeat:-1,
      ease: Sine. easeInOut,
      x:"5%",
      y:"1%",
      yoyo:true
    });
    TweenMax.to(yellowCloud, 5, {
      repeat:-1,
      ease: Sine. easeInOut,
      x:"-5%",
      y: "2%",
      yoyo:true
    });

  }
}());
