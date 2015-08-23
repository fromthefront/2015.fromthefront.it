(function () {
  map = document.getElementById('svg-map');
  if(map) {
    var partyToggle = document.getElementById('party-toggle');
    var venueToggle = document.getElementById('venue-toggle');
    var activeClass = 'is-tip-active';

    function openTip(event) {
      event.stopPropagation();
      var currentTip = '.m-tip--'+event.target.getAttribute("id");
      //document.querySelector('.'+activeClass).className.replace(activeClass, '');
      document.querySelector(currentTip).className += " "+activeClass;
    }

    function closeTips(){
      var activeTip = document.querySelector('.'+activeClass);

      if(activeTip) {
        activeTip.classList.remove(activeClass);
      }
    }

    document.body.addEventListener('click', closeTips, false);

    partyToggle.addEventListener('click', openTip, false);
    venueToggle.addEventListener('click', openTip, false);
    partyToggle.addEventListener('mouseenter', openTip, false);
    venueToggle.addEventListener('mouseenter', openTip, false);
    partyToggle.addEventListener('mouseleave', closeTips, false);
    venueToggle.addEventListener('mouseleave', closeTips, false);

  }
}());
