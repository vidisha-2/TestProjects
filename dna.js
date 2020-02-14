function pairElement(str) {
  var arr =[];
  for(var i=0; i<str.length; i++){
	
	if(str[i]=="G"){
		
      arr.push(["G","C"]);
	  
     }
    else if(str[i]=="C"){
      
      arr.push(["C","G"]);
    }
    else if(str[i]=="T"){
     
      arr.push(["T","A"]);
    }
    else {
     
      arr.push(["A","T"]);
    }
	
  }
  return arr;
}

console.log(pairElement("GCG"));