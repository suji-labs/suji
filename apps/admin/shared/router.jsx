
const { Router, Route, IndexRoute } = ReactRouter;

const requireAuth = function(nextState, replaceState) {
  const user = Meteor.user()
  if (! Meteor.loggingIn() && ! user) {
    replaceState({ nextPathname: nextState.location.pathname }, '/sign-in');
  } else {
    if (user) {
      if (! (user.profile && user.profile.isAdmin)) {
        replaceState(null, '/access-denied');
      }
    }
  }
};

if (Meteor.isClient) {
  const createHistory = ReactRouter.history.createHistory;

  const router = (
    <Router history={createHistory()}>
      <Route path="/" component={App.Container}>
        <Route component={App.LayoutMain} onEnter={requireAuth} >
          <IndexRoute component={Dashboard.ViewContainer} />

          <Route path="dashboard" component={Dashboard.ViewContainer} />

          <Route path="profile" component={Profile.ViewContainer} />
          <Route path="profile/edit/:name" component={Profile.EditContainer} />

          <Route path="about" component={About.ViewContainer} />

          <Route path="admins" component={Admin.ListContainer} />
          <Route path="admin/view/:id" component={Admin.ViewContainer} />
          <Route path="admin/edit/:id" component={Admin.EditContainer} />

          <Route path="accounts" component={Account.ListContainer} />
          <Route path="account/edit/:id" component={Account.EditContainer} />

          <Route path="categories" component={Category.ListContainer} />

          <Route path="posts" component={Post.ListContainer} />
          <Route path="post/view/:id" component={Post.ViewContainer} />
          <Route path="post/edit/:id" component={Post.EditContainer} />
          <Route path="post/new" component={Post.NewContainer} />
        </Route>

        <Route component={App.LayoutSingle}>
          <Route path="sign-in" component={Accounts.ui.SignInContainer} />
          <Route path="sign-up" component={Accounts.ui.SignUpContainer} />
          <Route path="forgot-password"
                 component={Accounts.ui.ForgotPasswordContainer} />
          <Route path="reset-password/:token"
                 component={Accounts.ui.ResetPasswordContainer} />

          <Route path="access-denied" component={App.AccessDenied} />

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
