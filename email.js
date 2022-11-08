const cron = require('node-cron');
const xlsxToJson = require('xlsx-to-json');
const nodemailer = require('nodemailer');
a=[]
umail=[]
uname=[]
var callback = function(err, result) {
    if(err) {
  
      console.log('Error : ', err);
    }
    else { 
     
      console.log('You are done!');
      for(i=0;i<result.length;i++)
      {
        if(result[i].Team=='')
        {

        }
        else
        {
          a.push(JSON.stringify(result[i]))
        }
      }
    }
    const d = new Date();
    console.log(a)
   

    for(i=0;i<a.length;i++)
    {
        nd=JSON.parse(a[i])
       
        str=nd.DOB;
    const [day,month,year] = str.split('-');
    if(d.getDate()==day && (d.getMonth()+1)==month)
    {
      console.log(nd.Email)
    usmail=nd.Email;
    usname=nd.Name;
    umail.push(usmail)
    uname.push(usname)
  
       cron.schedule('1 * * * *  *', function()  {
      console.log(umail)
    const msg = {
    from: 'syuva893@gmail.com',
    subject: 'Birthday Remainder',
    text: 'Manny More Happy Returns of the Day '+uname
    };
    nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user:"syuva893@gmail.com",
    pass:"ciuzijdkvodejnzl"
    },port:465,
    host:'smtp@gmail.com'
    })
    .sendMail(msg,(err)=>{
    if(err)
    {
    return console.log(err)
    }
    else{
    return console.log("Email sent");
    }
    })
    
  });
    }
    }
  };
var options = {
   
    input: "data.xlsx", 
    output: "yu.json"

};
xlsxToJson(options, callback);

