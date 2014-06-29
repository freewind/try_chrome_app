chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('popup.html',
    {id: 'poppopwin', width: 1024, height: 768});
});