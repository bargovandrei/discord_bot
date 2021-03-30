const BaseCommand = require('../../utils/structures/BaseCommand');
const userSchema = require("../../schemas/user");
const mongo = require('../../utils/mongo');

module.exports = class RegisterCommand extends BaseCommand {
  constructor() {
    super('register', 'mod', []);
  }

  async run(client, message, args) {
    
    const {member, guild, author} = message;

    await mongo().then(async (mongoose)=>{
      try{
        console.log("connected")

      // check if user is registerd
      const findResult1 = await userSchema.find({
        _id:author.id
      });
      if(findResult1==''){
        await new userSchema({
          _id: author.id,
          guildId: guild.id,
          user: author.username,
          credits: 50000
        }).save()
        message.channel.send(message.author.username + " Just registered!")
      }else{
        message.channel.send(message.author.username + " Allready registered!")
      }
      }catch(e){

      }finally{
        mongoose.connection.close();
        console.log("disconnected")
      
      }
    })
  }
}