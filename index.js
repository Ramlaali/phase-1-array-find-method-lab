function superbowlWin(record){
   
   const found = record.find(record => record.result === `W`);
   console.log(found)

   if (found) {
       return found.year;
   } else {
       return undefined
   }

    

    
    

}




