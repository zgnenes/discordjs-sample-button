const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { MessageButton } = require('discord-buttons');

exports.run = async (client, message, args) => {
  
  
  var embed = new MessageEmbed()
  .setColor("YELLOW")
  .setTitle("Choose one")
  
  var buton1 = new MessageButton()
  .setStyle("green")
  .setLabel("1st Button")
  .setID("buton1")

  var buton3 = new MessageButton()
  .setStyle("blurple")
  .setLabel("blurple")
  .setID("buton3")

  var buton2 = new MessageButton()
  .setStyle("red")
  .setLabel("Delete this message")
  .setID("buton2")

  return message.delete(), message.channel.send({
    buttons: [buton1, buton3, buton2],
    embed: embed
  })

};



exports.conf = {
  aliases: ['secim'],
  permLevel: 0,
  kategori: "General",
};

exports.help = {
  name: 'button',
  description: 'Belirttiğiniz kişiyi sunucudan atar.',
  usage: 'button',
 
};