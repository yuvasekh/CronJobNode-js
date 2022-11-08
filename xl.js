const xlsxToJson = require('xlsx-to-json');
ds=[]

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
          ds.push(JSON.stringify(result[i]))
        }
      }
    }
    nd=JSON.parse(ds[0])
    console.log(nd.Name)

  };


var options = {
   
    input: "data.xlsx", 
    output: "yu.json"

};


xlsxToJson(options, callback);
