'use strict';
const querystring =require("querystring")
module.exports.createUser = async (event) => {
  
  const body=querystring.parse(event["body"])
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Peticion para crear ',
        input: `hola ${body.user}`,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
