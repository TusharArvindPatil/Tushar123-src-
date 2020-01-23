function userContext(userRepositoryPara){
    let _userRepository=userRepositoryPara;

    this.loginValidetionAsync=async function(userModelPara){
         let response=null;
         try{
            return await new Promise(async (resolve)=>{
               response= await _userRepository.loginValidetionAsync(userModelPara); 
return resolve(response)
            });
         }
         catch(ex)
         {
             throw ex;
         }
    } 
}