Meteor.publish('recipes', function(){
  return Recipes.find({author: this.userId});
  // Only the current user's recipes will be available to them
});
