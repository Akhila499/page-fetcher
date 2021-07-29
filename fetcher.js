const request = require('request');
const fs = require('fs');

const input = process.argv.slice(2);
//console.log(typeof input[1]);
request(input[0], (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  const content = body;
  fs.writeFile(input[1],content, err =>{
    if(err){
      console.error(err);
      return
    }else {
      fs.stat(input[1], (err, stats) =>{
        if (err){
          console.log("file doesn't fs.exists.")
        }else {
          console.log(`Downloaded and saved ${stats.size} bytes to ${input[1]}`);
        }
      })
      
    }
  })
});





