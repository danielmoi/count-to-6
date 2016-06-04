console.log('HELLO ES6');

// hrd.cm/1qEi9EU
var msg = [76, 101, 116, 116, 104, 101, 98, 101, 115, 116, 116, 115, 116, 97, 114, 116, 117, 112, 115, 97, 112, 112, 108, 121, 116, 111, 121, 111, 117, 46];

var string = [];

msg.forEach(function(el) {
  var char = String.fromCharCode(el);
  string.push(char);
});
console.log(string.join(''));
