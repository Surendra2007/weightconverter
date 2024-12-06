
        let input=document.querySelector("input");
        let result=document.getElementById("result");
        let error=document.getElementById("error");
        let errorTime;

        input.addEventListener("input",()=>{
            let Pound=input.value;
            if(isNaN(Pound) || Pound>0){
                let ans=Pound*(0.453592);
                result.textContent=ans;
                
            }
            else{
                error.textContent="Please enter the vaild number"
                clearTimeout(errorTime);
                errorTime=setTimeout(()=>{
                    error.textContent='';
                    input.value="";
                },2000)
            }
        })
