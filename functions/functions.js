function randomSymbols() {
  var text = "";
  var possible = "!@#$%^&*()_-+={}[]:;'<,>.?/";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};
exports.randomSymbols = randomSymbols;

function randomTextSymbols() {
  var text = "";
  var possible = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};
exports.randomTextSymbols = randomTextSymbols;