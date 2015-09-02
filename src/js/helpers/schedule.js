module.exports.register = function (Handlebars, options)  {
  Handlebars.registerHelper('schedule', function(list, options) {

  // helper for sorting
  var sort_by = function(field, reverse, primer){
    var key = primer ?
         function(x) {return primer(x[field])} :
         function(x) {return x[field]};
     reverse = !reverse ? 1 : -1;
     return function (a, b) {
         return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
       }
  };

  // ordering & slicing & ordering again
  var orderedPerDay = list.sort(sort_by('day', false, parseInt));
  var firstDay = orderedPerDay.slice(0, -8).sort(sort_by('place', false, parseInt));
  var secondDay = orderedPerDay.slice(8).sort(sort_by('place', false, parseInt));;

  // outputting stuff
  var out = '';
  var speakers = firstDay;
  if (options.hash.day == 'second') {
    var speakers = secondDay;
  }
  for(var i=0, l=speakers.length; i<l; i++) {
    out = out + options.fn(speakers[i]);
  }
  return out;
  });
};
