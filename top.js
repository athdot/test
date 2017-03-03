chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('/test/window.html', {
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });
});
