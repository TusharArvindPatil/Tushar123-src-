function userRepository(){

    this.loginValidationAsync=async function(userModelPara){
     let response=null;
     try{
       return await new Promise((resolve)=>{
let tempUserName="Tushar";
let tempPassword="123";
  
        if(tempUserName===userModelPara.userName && 
            tempPassword===userModelPara.Password){
                response=true;

            }
            else
{
    response="user Name & Password come not m"
}
return resolve(response);
       });

     }
      catch(ex){
          throw ex;
      }
    }





}