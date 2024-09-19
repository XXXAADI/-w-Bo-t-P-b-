module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`‎‎𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 𝐁𝐨𝐭 😇👈 
●============================================● 𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 🌹
●============================================● 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊👈 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 https://www.facebook.com/aadibabu143?mibextid=ZbWKwL
●============================================●

                 🥰 𝐌𝐨𝐬𝐭 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 🥰 
●============================================●𝐈𝐬𝐬𝐞 𝐝𝐮𝐛𝐚𝐫𝐚 𝐚𝐝𝐝 𝐧𝐡𝐢 𝐤𝐚𝐫 𝐩𝐚𝐲𝐚  ${name} 𝐆𝐫𝐨𝐮𝐩 𝐦𝐚𝐢 :( `, event.threadID)
   } else api.sendMessage(`𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 𝐁𝐨𝐭 😇👈 
●============================================● 𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 🌹
●============================================● 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊👈 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 https://www.facebook.com/aadibabu143?mibextid=ZbWKwL
●============================================●

                 🥰 𝐌𝐨𝐬𝐭 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 🥰 
●============================================●𝐁𝐡𝐚𝐠 𝐤𝐞 𝐣𝐚𝐚𝐧𝐞 𝐤𝐚 𝐧𝐡𝐢 , ${name} 𝐁𝐚𝐛𝐲, 𝐝𝐞𝐤𝐡𝐨 𝐩𝐡𝐢𝐫 𝐬𝐞 𝐚𝐝𝐝 𝐤𝐚𝐫 𝐝𝐢𝐲𝐚 𝐚𝐚𝐩𝐤𝐨`, event.threadID);
  })
 }
}
