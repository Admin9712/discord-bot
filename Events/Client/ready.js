const { loadCommands } = require("../../Handlers/commandHandler");

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
      console.log("El cliente ya esta listo");

      client.user.setActivity("Jugan2");

      loadCommands(client);
    },
  };
