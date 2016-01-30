
const { Router, Route, IndexRoute } = ReactRouter;

const requireAuth = function(nextState, replaceState) {
  if (! Meteor.loggingIn() && ! Meteor.user()) {
    replaceState({ nextPathname: nextState.location.pathname }, '/sign-in');
  }
};

if (Meteor.isClient) {
  const createHistory = ReactRouter.history.createHistory;

  const router = (
    <Router history={createHistory()}>
      <Route path="/" component={App.Container} >
        <Route component={App.LayoutIntro}>
          <IndexRoute component={Intro.ViewContainer} />

          <Route path="intro/:id" component={Intro.ViewContainer} />
        </Route>

        <Route component={App.LayoutMain}>
          <Route path="home" component={Home.ViewContainer} />

          <Route path="sign-in" component={Account.SignInContainer} />
          <Route path="sign-up" component={Account.SignUpContainer} />
          <Route path="forgot-password"
                 component={Account.ForgotPasswordContainer} />
          <Route path="reset-password/:token"
                 component={Account.ResetPasswordContainer} />

          <Route path="profile"
                 component={Profile.ViewContainer}
                 onEnter={requireAuth} />
          <Route path="profile/edit/:name"
                 component={Profile.EditContainer}
                 onEnter={requireAuth} />

          <Route path="about" component={About.ViewContainer} />

          <Route path="category/:id" component={Category.ViewContainer} />

          <Route path="posts" component={Post.ListContainer} />
          <Route path="post/view/:id" component={Post.ViewContainer} />
          <Route path="post/edit/:id" component={Post.EditContainer} />
          <Route path="post/new" component={Post.NewContainer} />

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
