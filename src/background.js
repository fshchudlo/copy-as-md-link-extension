chrome.commands.onCommand.addListener(function (command) {
  if (command != "md-link-paste") {
    return;
  }

  var createLink = function (foundTabs) {
    var link = "[" + foundTabs[0].title + "](" + foundTabs[0].url + ")";
    var input = document.createElement("textarea");
    document.body.appendChild(input);

    try {
      input.value = link;
      input.focus();
      input.select();
      document.execCommand("Copy");
    } catch (err) {
      input.remove();
      alert(err);
    }
  };

  chrome.tabs.query({ currentWindow: true, active: true }, createLink);
});
