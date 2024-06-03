import Email from "../model/email.js"
//jo send email tha usko ya pa save karaga
// request=>api request ki puri information milti ha request ka andar
//export const saveSentEmail=(request,response)=>{
  //ya pa data ko database ma store karna ha 
  //payload ma jo information ha usko save karna ha database ka andar
  //phela validate karaga jo frontend sa ayga fir save karaga uska liya model create karaga
  //try{
    //const email=new Email(request.body);
    //email.save();

    //response.status(200).json('email saved successfully');
  //}catch(error){
   //response.status(500).json(error.message)
  //}
//}

export const saveSentEmail = async (request, response) => {
    try {
      //const email = new Email(request.body);
      const email=await Email.create(request.body)
      await email.save();
  
      response.status(200).json('email saved successfully');
    } catch (error) {
      response.status(500).json(error.message);
    }
  }
  
  export const getEmails=async(request,response)=>{
    try{
       let emails;
       if(false){
       
       }else{
        emails=await Email.find({ type:request.params.type})
       }
       return response.status(200).json(emails)
   }catch(error){
      console.log(error);
      response.status(500).json(error.message);
    }
  }