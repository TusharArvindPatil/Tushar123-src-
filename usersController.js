

function usersController(userModelPara=null,userContextpara=null){

    let _userModelObj=userModelPara;
    let _userContextObj=_userContextPara;
   
    //private method 
    let getUserCredentialsAsync=async function(){
        try{
            return await new Promise((resolve)=>{
   //model 
    _userModelObj.userName=$("#txtUserName").val();
    _userModelObj.userName=$("#txtPasswork").val();  

    return resolve(true);
        });
    }
        catch(ex){
            throw ex;
        }
        

}


//Validate User
let validationUserAsync=async function(){
    let inFlag=null;
    try
    {
        return await new Promise((resolve)=>{
          if(
              (_userModelObj.userName==null)
              &&
          (_userModelObj.password==null)
          ){
              $("#validationUser").html("n & p be empty");
              isFlag=false;
          }
          else
          {
              isFlag=true;

          }
           return resolve(isFlag);
        });
    }
        catch(ex){
            throw ex;
        }
    }

//Validate User

//Credential

let validationUserCredentialsAsync=async function(isValidationDone){
  let response=undefined;
  try{
    return await new Promise(async(resolve)=>{
      if(isValidationDone===true)
      {
          response=await _userContextObj.loginValidationAsync(_userModelObj);
      }
    });

  }
  catch(ex){
      throw ex;
  }

}

//Credention close 


//Redirect To Deshboard 

let redirectToDashboardAsync=async function(response){
    try
    {
        return await new Promise((resolve)=>{

            if(typeof(response)==="boolean"){
                
            }
            else
            {
                $("#validationUser").html(response);
            }

            return resolve(true);

        });
    }
    catch(ex)
    {
        throw ex;
    }
}

// Deshboard Cls 


//Submit 
this.OnSubmilAsync=async function(){
  try{
    return await new Promise(async (resolve)=>{
 await getUserCredentialsAsync();
  let isValidationDone=await validationUserAsync();
  let response=await validationUserCredentialsAsync(isValidationDone);
await redirectToDashboardAsync(response);
return resolve(true);
    });
  }
  catch(ex)
  {
    throw ex;
  }
}

//Submit close

//Non async
function onSubmitButtonClickEvent(){
    try
    {
        
        let userModelObj=new userModel();
        let userRepositoryObj=new userRepository();
        let userContextObj=new userContext(userRepositoryObj);
        let userControllerObj=new usersController(userModelObj,userContextObj);
        userControllerObj
        .onSubmitAsync()
        .then((resolve)=> console.log(resolve));
    }
    catch(ex)
    {
        console.log(ex.message);
        console.log(ex.stack);
    }
}