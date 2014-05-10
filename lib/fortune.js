var fortuneCookies = [
  'You are a dreamer, keep dreaming.',
  'A beautiful other will soon show interest.',
  'There is a large prize on the horizon.',
  'More people in the world are following your actions.',
  'This is the first day of the rest of your life.'

];

exports.getFortune = function() {
    var idx = Math.floor( Math.random() * fortuneCookies.length );
    return fortuneCookies[idx];
};
