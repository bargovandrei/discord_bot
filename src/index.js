
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client();
const mongo = require("./utils/mongo.js");

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;

  await mongo().then(mongoose=>{
    try{
      console.log("connected")
    }catch(e){

    }finally{
      mongoose.connection.close();
      console.log("disconnected")
    }
  })

  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);

})();

