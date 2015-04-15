var eventsController = require('./events-controller.js');

module.exports = function (myApp) {
  // app === linkRouter injected from middleware.js

  // app.param will hijack any request with a 'code' parameter on in
  // like line 16 below. That code will actually be the shortned url
  // so the real URL will be pre fetched from mongo and attached to
  // req.navLink before it reaches line 16.

  app.route('/events')
    .get(eventsController.allEvents)
    .post(eventsController.newEvent);

};