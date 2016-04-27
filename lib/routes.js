// How to use flow router
FlowRouter.route('/', {
  // Tell meteor to render a specific template
  name: 'home',
  action() {
  GAnalytics.pageview();
  // Do this when this route path is hit
  BlazeLayout.render('HomeLayout');
  }
});


FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
  GAnalytics.pageview();
  BlazeLayout.render('MainLayout', {main: 'Recipes'});
  }
});

FlowRouter.route('/recipe/:id', {
  name: 'recipe-book',
  action() {
  GAnalytics.pageview();
  BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
  }
});
