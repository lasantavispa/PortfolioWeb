// 'use strict';

// let api_token = "";

// const callToApiSign = (formData) => {
//     return fetch ("http://localhost:4001/signIn", {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {"Content-type": "application/json"},
//     })
//     .then((response) => response.json())
//     .then((response) => {
//         return (response);
    
//     })
//     .catch((error)=> {
//         console.error("Error calling API:", error);
  
//     });
// };

// const callToApiLog = (logData) => {
//     return fetch ("http://localhost:4001/login", {
//         method: "POST",
//         body: JSON.stringify(logData),
//         headers: {"Content-type": "application/json"},
//     })
//     .then((response) => response.json())
//     .then((response) => {
//         api_token = response.token;
//         return (response);        
//     })
//     .catch((error)=> {
//         console.error("Error calling API:", error);  
//     });
// };

// const getProfile = () => {
//    return fetch ("http://localhost:4001/profile", 
//    {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': api_token
//     }})
//     .then(response => response.json())
//     .then(response => {
//         console.log('Server response:', response);

//     })
// }
//  const object = {callToApiSign: callToApiSign, callToApiLog: callToApiLog, getProfile: getProfile} ;
//  export default object;