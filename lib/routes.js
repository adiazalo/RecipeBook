// How to use flow router
FlowRouter.route('/', {
  // Tell meteor to render a specific template
  name: 'home',
  action() {
  // Do this when this route path is hit
  BlazeLayout.render('HomeLayout');
  }
});


FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
  BlazeLayout.render('MainLayout', {main: 'Recipes'});
  }
});
