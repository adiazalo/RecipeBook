/*Anything added should not be visible in your code and not in your repo*/
/*since you might store very sensitve infor such a s private keys*/
/*This is for google analytics pacakge called 'ga'.*/
/*When doing google analytics you will be give a number which you will add below in account*/

// subscription managment is important for a performing application
//subscriptions to recipes will show the recipes of ALL users signed in. Not very practiva so we'll change that
// Meteor.subscribe('recipes');
// To optmize we will use template lvl subscriptions. Once the template is loaded, then we are going to subscribe to the correct data.

Template.Recipes.onCreated(function(){
  var self = this;
  // The selfautorun will unsubscribe us from old subscriptions
  self.autorun(function() {
    self.subscribe('recipes');
  });
});

/* curly braquests {} are called 'big event signs'*/
Template.Recipes.helpers({
  recipes: ()=> {
    return Recipes.find({});
  }
});
