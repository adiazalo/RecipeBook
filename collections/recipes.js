// Used autoform and collection2 packages
Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  // If user ID excits, it means you are signed in and you are able to add a recipe.
  //this is necessary since we deleted predefined packges from the packages file.
  insert: function(userId, doc){
  return !!userId;
  }
});

Ingredient = new SimpleSchema({
//
  name: {
    type: String
  },
  amount: {
    type: String
  }
});

RecipeSchema = new SimpleSchema({
// Inside this object we fill in the properties that we want our schema to have.
//We can tell which field is required or not. By defaulst all fields are required.
  name: {
    //This is another obeject and here we define its properties.
    type: String,
    label: "Name" //Label used in the formfield.
  },
  desc: {
    type: String,
    label: "Description"
  },
  ingredients: {
    type: [Ingredient] //By puting it in [] it became an array and meteor allows us to have incrementing box fields. Otherwise it'd show as the name field above (single box field).
  },
  inMenu: {
    //this property will check if the recipi is in this week's menu and if so, it will add the ingredients to the shopping list.
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
        type: "hidden" //We don't want the user to see this.
    }
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function(){ //This will give it a default value.
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function(){
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }
});

//Finally, we need to attached our schema to our collection
Recipes.attachSchema( RecipeSchema );
