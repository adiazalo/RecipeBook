Meteor.publish('recipes', function(){
  return Recipes.find({author: this.userId});
  // Only the current user's recipes will be available to them
});

Meteor.publish('singleRecipe', function(id){
  check(id, String);
  return Recipes.find({_id: id});
});
