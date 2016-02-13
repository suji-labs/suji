
const sessionId = 'CS_CONNECTION_CLIENT_ID_KEY';

function getClientId() {
  let clientId = Session.get(sessionId);

  if (! clientId) {
    clientId = Meteor._localStorage.getItem(sessionId);

    if (! clientId) {
      clientId = Random.id();
      Meteor._localStorage.setItem(sessionId, clientId);
    }

    Session.set(sessionId, clientId);
  }

  return clientId;
}

// save connection ID  to the local storage
Tracker.autorun(function() {
  let connected = Meteor.status().connected;

  if (connected) {
    let clientId = getClientId();
    Meteor.call('connectionInit', clientId, (error) => {
      if (error) {
        console.log('connectionInit Error' + error.reason);
      } else {
        console.log('connectionInit success');
      }
    });
  }
});

// update login status to the server
Tracker.autorun(function() {
  if (Meteor.userId()) {
    console.log('User signed in');
  }

  Meteor.call('connectionUpdateUser');
});
