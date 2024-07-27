console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins its initialization workflow.");

  new Dialog({
    title: "Hello World",
    content: "<p>Hello, World!</p>",
    buttons: {
      ok: {
        label: "OK",
        callback: () => console.log("Dialog OK clicked!")
      }
    },
    default: "ok"
  }).render(true);
});


Hooks.on("ready", function() {
  console.log("This code runs once core initialization is ready and game data is available.");
});

Hooks.on("renderSidebarTab", function(app, html, data) {
    if (app.options.id === "settings") {
      html.find('.settings-directory').append('<button id="my-module-button">My Button</button>');
    }
  });

$(document).on("click", "#my-module-button", function() {
  console.log("Button Clicked!");
});