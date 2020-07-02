import axios from "axios"

const compileCode=async(code,langcode)=>{

  try{
    return  await axios({
      "method":"POST",
      "url":"https://judge0.p.rapidapi.com/submissions/",
      "base64_encoded":true,
      "headers":{
      "base64_encoded":true,
      "content-type":"application/json",
      "x-rapidapi-host":"judge0.p.rapidapi.com",
      "x-rapidapi-key":"wPMpbkLEmLmshwh6YlxiBfgOjTB2p1BSO2JjsnPM8wlg92PjFg",
      "accept":"application/json",
      "useQueryString":true,
      },"data":{
      "language_id":langcode,
      "source_code":code,
      }
      })
     

   
 
  }catch(e){

  }
     
}

const getOutput=(token)=>{

  return  axios({
        "method":"GET",
        "url":`https://judge0.p.rapidapi.com/submissions/${token}/`,
        "headers":{
        "base64_encoded":true,
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"judge0.p.rapidapi.com",
        "x-rapidapi-key":"wPMpbkLEmLmshwh6YlxiBfgOjTB2p1BSO2JjsnPM8wlg92PjFg",
        "useQueryString":true
        }
        })


}

export {compileCode,getOutput}