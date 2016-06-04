// Returns undefined
var foot = {
  kick: function() {
    this.yelp = "Ouch!";
    setTimeout(function() {
      console.log(this.yelp);
    }, 1000);
  }
};
foot.kick();


// Use `bind`
var foot = {
  kick: function() {
    this.yelp = "Ouch!";
    setTimeout(function () {
        console.log(this.yelp);
    }.bind(this), 1000);
  }
};
foot.kick();

// Use `that`
var foot = {
  kick: function() {
    this.yelp = "Ouch!";
    var that = this;
    setTimeout(function () {
        console.log(that.yelp);
    }, 1000);
  }
};
foot.kick();

// Use arrow function!
var foot = {
  kick: function() {
    this.yelp = "Ouch!";
    setInterval( () => { console.log(this.yelp) }, 1000);
  }
};
foot.kick();
