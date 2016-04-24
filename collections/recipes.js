// Used autoform and collection2 packages
Recipes = new Mongo.Collection('recipes');

RecipeSchema = new SimpleSchema({
// Inside this object we fill in the properties that we want our schema to have
//We can tell which field is required or not. By defaulst all fields are required.
  name: {
    //This is another obeject and here we define its properties
    type: String,
    label: "Name" //Label used in the formfield
  },
  desc: {
    type: String,
    label: "Description"
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function(){ //This will give it a default value
      return this.userId
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date()
    }
  }
});

//Finally, we need to attached our schema to our collection
Recipes.attachSchema( RecipeSchema );
