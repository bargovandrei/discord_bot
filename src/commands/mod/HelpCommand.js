const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'mod', []);
  }

  run(client, message, args) {
    message.channel.send("**prefix is = ** '\n' [prefix]**blackjack** [bet] (work in progress) '\n' [prefix]**double** [1 or 2] [bet] '\n' [prefix]**credits** '\n' [prefix]**register**(use this command to register your account, also gives you 50k credits)  ");
  }
}