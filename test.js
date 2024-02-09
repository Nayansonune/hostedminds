
var data=10;
const stop=setInterval(()=>{
 
 console.log(data);
 data--;
 if(data==0){
 clearInterval(stop);
 }
    
},1000)