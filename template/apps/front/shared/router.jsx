
const { Router, Route, IndexRoute } = ReactRouter;

const requireAuth = function(nextState, replaceState) {
  if (! Meteor.loggingIn() && ! Meteor.user()) {
    replaceState({ nextPathname: nextState.location.pathname }, '/sign-in');
  }
};

if (Meteor.isClient) {
  const createHistory = ReactRouter.history.createHistory;
  const onRouterUpdate = App.LayoutMain.hide;

  const router = (
    <Router history={createHistory()} onUpdate={onRouterUpdate}>
      <Route path="/" component={App.Container} >
        <Route component={App.LayoutMain}>
          <IndexRoute component={Home.ViewContainer} />

          <Route path="home" component={Home.ViewContainer} />

          <Route path="sign-in" component={Accounts.ui.SignInContainer} />
          <Route path="sign-up" component={Accounts.ui.SignUpContainer} />
          <Route path="forgot-password"
                 component={Accounts.ui.ForgotPasswordContainer} />
          <Route path="reset-password/:token"
                 component={Accounts.ui.ResetPasswordContainer} />

          <Route path="profile"
                 component={Profile.ViewContainer} onEnter={requireAuth} />
          <Route path="profile/edit/:name"
                 component={Profile.EditContainer} onEnter={requireAuth} />

          <Route path="about" component={About.ViewContainer} />

          <Route path="category/:id" component={Category.ViewContainer} />

          <Route path="posts" component={Post.ListContainer} />
          <Route path="post/view/:id" component={Post.ViewContainer} />
          <Route path="post/edit/:id" component={Post.EditContainer} />
          <Route path="post/new" component={Post.NewContainer} />
        </Route>

        <Route component={App.LayoutSingle}>
          <Route path="*" component={App.NotFound} />
        </Route>

      </Route>
    </Router>
  );

  Accounts.onResetPasswordLink((token) => {
    createHistory().pushState(null, `/reset-password/${token}`);
  });

  Meteor.startup(function() {
    ReactDOM.render(router, document.getElementById('app-container'));
  });

} else {
  // server-side routes
  /*
  const routes = (
    <Route path="/" component={App.Layout}>
      <IndexRoute component={App.HomeContainer}/>
      <Route path="home" component={App.HomeContainer}/>
      <Route path="*" component={App.NotFound}/>
    </Route>
  );

  ReactRouterSSR.Run(routes);
  */
}
