'use strict';

angular.module('feelingsJournal')
  .constant('AUTH_EVENTS', {
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })

  .constant('API', {
    // SERVER_LOCAL_MDB: 'http://localhost:4800/api/v1/',
    // SERVER_HEROKU: 'http://snailbox-api.herokuapp.com/api/v1/'
  });