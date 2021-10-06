const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const request = require("request");
client.on("ready", () => {
  console.log(`${client.user.tag}에 로그인하였습니다!`);
  
});
//사용자가 채팅을 입력할때 실행되는 function 
client.on("message", msg => {
 console.log(msg);
  let content = "";
 
  if (msg.content == "!youtube") {
    //content = msg.content.split("");
    msg.reply("https://www.youtube.com");
  }
  
 
 
 
   
  
  
});
//client.login("토큰");

client.login('ODk0NzM5Mzg5Nzk0NjQ0MTE4.YVuY_Q.ZWBi8qyn28g89wSKXdGgvsac5-g');