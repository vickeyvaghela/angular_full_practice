var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PWD
    }
});



function sendSingle(mailOptions)    {
    //console.log('mailOptions ',mailOptions);

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        return;
    });
}

function sendMulti(emailAry) {
    console.log('sendMulti Function');
}

function sendAttachment(mailOptions,attachUrl) {
    console.log('sendAttachment Function');

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        return;
    });
}

function sendAttachmentMulti(emailAry,attachUrl) {
    console.log('sendAttachmentMulti Function');
}

module.exports = {sendSingle, sendMulti, sendAttachment, sendAttachmentMulti};