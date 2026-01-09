const endDate="10 JAN 2026 12:30 AM";

document.getElementById("end-Date").innerText=endDate;
const inputs=document.querySelectorAll("input");

function clock(){
        const end=new Date(endDate) //mili second
        const now=new Date()
        const diff=(end-now)/1000;
         
        if(diff<0){
                  return;
         }

         //convert into days
        inputs[0].value=(Math.floor(diff/3600/24));
        inputs[1].value=(Math.floor(diff/3600)%24);
        inputs[2].value=(Math.floor(diff/60)%60);
        inputs[3].value=(Math.floor(diff)%60);


}
clock()//call function

setInterval( 
        ()=>{
                  clock()
        },
        1000
)

