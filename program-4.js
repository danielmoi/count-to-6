// var foot = {
//   kick: function() {
//     this.yelp = "Ouch!";
//     console.log('4' + this);
//     setImmediate(function() {
//       console.log('6' + this);
//       console.log('7' + this.yelp);
//     });
//   }
// };
// foot.kick();

var foot = {
  kick: function() {
    this.yelp = "Ouch!";
    setImmediate( () => { console.log(this.yelp) });
  }
};
foot.kick();
