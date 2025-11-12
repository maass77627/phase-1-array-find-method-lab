



function superbowlWin(record) {
  
   let newRecord = record.find((element) => element.result === "W")
    
   if(newRecord){

        return newRecord.year;
       }else{
    
        return undefined;
       }
   
 }

 superbowlWin(record)



const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]

