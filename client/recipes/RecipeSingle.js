Template.RecipeSingle.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('recipes');
  });
});

Template.RecipeSingle.helpers({
  recipe: ()=> {
    var id = FlowRouter.getParam('id');
    return Recipes.findOne({_id: id});
    // When it looks through the recipes it will only find the one with the id from the parameter
  }
});
