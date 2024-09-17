const fs = require("fs");
module.exports.config = {
	name: "fyoutoo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "fuck",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("FUCK YOU")==0 || event.body.indexOf("Fuck You")==0 || event.body.indexOf("Fuck you")==0 || event.body.indexOf("fuck you")==0 || event.body.indexOf("fuck You")==0 || event.body.indexOf("FUCK U")==0 || event.body.indexOf("Fuck U")==0 || event.body.indexOf("Fuck u")==0 || event.body.indexOf("fuck u")==0 || event.body.indexOf("fuck U")==0 || event.body.indexOf("pak yu")==0 || event.body.indexOf("Pak yu")==0) {
		var msg = {
				body: "F____ YOU _____ TOO",
				attachment: fs.createReadStream(__dirname + `/AADI/Messenger_creation_1253019069211350.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }