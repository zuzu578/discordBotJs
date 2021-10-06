const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const request = require("request");
client.on("ready", () => {
  console.log(`${client.user.tag}에 로그인하였습니다!`);
  
});
//app.use(bodyParser.urlencoded({extended : false}));
//app.use(bodyParser.json());
// discord bot 전적 검색 api 
const apiKey = 'RGAPI-66f21ad9-1721-4a65-a4c3-8b23584e7caa'; // 해당 api key 는 유효시간이 있으므로 , 갱신해주어야합니다.
const summonerInfo = [];

//사용자가 채팅을 입력할때 실행되는 function 
client.on("message", msg => {
 console.log(msg);
  let content = "";
 
  if (msg.content == "!전적검색") {
    //content = msg.content.split("");
    msg.reply("누구의 전적을 검색할거야?");
  }
  if(msg.content == "오순도순도란도란"){
    const url = 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+encodeURIComponent(msg.content); // encoding! 
    const queryParams ='?' + encodeURIComponent('api_key') + '='+apiKey 
    console.log('소환사 정보 params = > ' , queryParams);
    console.log('url + queryParams => ' , url + queryParams);
    var url2 = url + queryParams;
    console.log("url2 => " , url2);
    request({
        url: url + queryParams,
        
        method: 'GET'
    }, function (error, response, body) {
        console.log('Status', response.statusCode);
        console.log('Headers', JSON.stringify(response.headers));
        console.log('Reponse received', body);
       // res.send(body);
         console.log("body ==> " , body);
         msg.reply(body);
         

       
    });


  }
  
 
 
 
   
  
  
});
//client.login("토큰");

client.login('ODk0NzM5Mzg5Nzk0NjQ0MTE4.YVuY_Q.ZWBi8qyn28g89wSKXdGgvsac5-g');
