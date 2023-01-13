objs=['rock','paper','sciss']
var n=0
const random=(objs)=>{
  const index=Math.floor(Math.random()*objs.length)
   return(objs[index])
}
 
var executescis=()=>{
var computer=random(objs)
if(computer=='rock'){document.getElementById('computer').src="rock.jpg";
   document.getElementById('display').value="YOU LOSS THE MATCH"}

else if(computer=='paper'){document.getElementById('computer').src="pape.jpg";
    document.getElementById('display').value="YOU WON THE MATCH"
    n++
    document.getElementById('start').value=n
}
else{document.getElementById('computer').src="scissors-neon-icons.jpg";
document.getElementById('display').value="OH WE ARE FRIENDS"}
}



var executerock=()=>{
    var computer=random(objs)
    if(computer=='rock'){document.getElementById('computer').src="rock.jpg";
       document.getElementById('display').value="OH WE ARE FRIENDS"}
    
    else if(computer=='paper'){document.getElementById('computer').src="pape.jpg";
        document.getElementById('display').value="YOU LOSS THE MATCH"
    }
    else{document.getElementById('computer').src="scissors-neon-icons.jpg";
    document.getElementById('display').value="YOU WON THE MATCH"
    n++
    document.getElementById('start').value=n}
    }



    var executepaper=()=>{
        var computer=random(objs)
        
        if(computer=='rock'){
            document.getElementById('computer').src="rock.jpg";
           document.getElementById('display').value="YOU WON THE MATCH"
           n++
    document.getElementById('start').value=n
        }
        else if(computer=='paper'){ document.getElementById('computer').src="pape.jpg";
            document.getElementById('display').value="OH WE ARE FRIENDS"
        }
        else{ document.getElementById('computer').src="scissors-neon-icons.jpg";
        document.getElementById('display').value="YOU LOSS THE MATCH"}
        } 



        