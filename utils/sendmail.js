const Mailjet = require('node-mailjet')

const mailjet = new Mailjet({
    apiKey : "b73591b34f611b6340bddb4caf4d69be",
    apiSecret : "0f5399be3807d5f7eac53e33f7b4e9c6"
});

module.exports.sendMail = async function(email,subject, body){

  return await mailjet.post('send', { version: 'v3.1' }).request({
  Messages: [
    {
      From: {
        Email: 'bhartikochhar123@gmail.com',
        Name: 'bharti',
      },
      To: email,
      Subject: subject,
      HTMLPart: body
    },
  ],
})
}