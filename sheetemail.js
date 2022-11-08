const cron = require('node-cron');
const nodemailer = require('nodemailer');
a=[
    {
     "Name": "Yagneswara rao",
     "DOB": "13-08-1998",
     "Email": "ykantreddi@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Bhaskar Vemavarapu",
     "DOB": "17-01-1999",
     "Email": "bvemavarapu@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Rohit Dasari",
     "DOB": "25-12-1997",
     "Email": "rdasari3@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Priyank Boddeti",
     "DOB": "11-5-1998",
     "Email": "pboddeti@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "saikumar suravaram",
     "DOB": "05-08-1996",
     "Email": "ssuravaram@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Chaitanya Kalyan Grandhi",
     "DOB": "13-10-2000",
     "Email": "cgrandhi1@miraclesoft.com",
     "Team": "RPA"
    },
    {
     "Name": "Om Sri Sai Kumar Sammeta",
     "DOB": "05-06-1997",
     "Email": "osammeta@miraclesoft.com",
     "Team": "RPA"
    },
    {
     "Name": "Bali Naveen",
     "DOB": "27-12-1998",
     "Email": "nbali@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Purushottam naidu mudili",
     "DOB": "08-05-1989",
     "Email": "pmudili@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Latha Erothu",
     "DOB": "31-07-2000",
     "Email": "lerothu@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Anusha Terli",
     "DOB": "14-09-2000",
     "Email": "aterli@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Surya teja madasi ",
     "DOB": "28-02-1999",
     "Email": "smadasi@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "bindu Priya rajvanshi kadambaram",
     "DOB": "07-July-1998",
     "Email": "bkadambaram@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Sampath Kumar Kemburu",
     "DOB": "16-21-1998",
     "Email": "skemburu@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Jyothsna Dasari",
     "DOB": "06-03-1988",
     "Email": "jdasari@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Ajay Relli",
     "DOB": "05-12-1998",
     "Email": "arelli@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Kiran Kumar mallavarapu ",
     "DOB": "04-Oct-1996"
    },
    {
     "Name": "Maheswari Rambha",
     "DOB": "04-06-2000",
     "Email": "mrambha@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Manasa Nandhamudi",
     "DOB": "20-06-1999",
     "Email": "mnandhamudi@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Veera siva Subrahmanyam Nukala",
     "DOB": "28-12-1998",
     "Email": "snukala1@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Nagarapu Parimala",
     "DOB": "28-08-1999",
     "Email": "pnagarapu@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "munasala mohan sai krishna",
     "DOB": "02-08-2000",
     "Email": "mmunasala@miraclesoft.com",
     "Team": "LABS"
    },
    {
     "Name": "Kandala Vasu",
     "DOB": "06-12-1999",
     "Email": "vkandala@miraclesoft.com",
     "Team": "LABS"
    }
   ]
   console.log(a[0])
d=new Date();
for(i=0;i<a.length;i++)
{
    str=a[i].DOB;

const [month, day, year] = str.split('-');
if(d.getDate()==day && (d.getMonth()+1)==month)
{
email=a[i].Email;
uname=a[i].Name;
cron.schedule('4 * * * *  *', () => {
fn(email,uname)
console.log('running a task every minute');
});
}
}

function fn(email,uname)// a=[{name:"yuva",email:"syuva893@gmail.com",dob:new Date(2000,7,21),team:"innovation"},
// {name:"swetha",email:"swethapidugu1234@gmail.com",dob:new Date(2000,10,21),team:"INTEGRATION"},
// {name:"sony",email:"sravanibalisetti1@gmail.com",dob:new Date(2000,11,23),team:"B2B"},
// {name:"veerababu",email:"veerababup9999@gmail.com",dob:new Date(2000,10,22),team:"B2B"}]
{
    console.log("hit")
usname=uname
umail=email;
console.log(usname)
console.log(umail)
const msg = {
from: 'syuva893@gmail.com',
to: umail,
subject: 'Birthday Remainder',
text: 'Hpy Birthday'+usname
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
}
