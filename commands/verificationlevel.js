const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
    let developers = bot.devs
        let embed = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("❌» Nemate dozvolu da koristite ovu komandu", "Ovu komandu mogu koristiti samo Developeri Bota") 
        
  if(!developers.includes(message.author.id)) return message.channel.send(embed)
  
  
          let embed9 = new Discord.RichEmbed()
    .setColor("GREEN")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("🤖» Verification Level", "Highest") 
    
  message.channel.send(embed9)
  
  
  message.guild.setVerificationLevel(4)
        
}

module.exports.help = {
  name: "verificationlevel",
  aliases: ["verifylvl", "verifylevel", "verify", "level"],
  perm: "",
  role: "",
  group: "economy"
}
