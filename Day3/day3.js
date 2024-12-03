
// function to get all occurances inside string for substring
function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

// check if string is numeric or not
function is_numeric(str){
    return /^\d+$/.test(str);
}

// fetch Data from input text file ( Note : This needs to be through live server to get correct response)
fetch("./day3.txt")
  .then((res) => res.text())
  .then((input) => {
        // initialize total    
        let total = 0;
        const occurances = getIndicesOf('mul(', input , false);
        // adding +3 to get first digit
        const newOcuurances = occurances.map((val)=> val + 3);
        
        newOcuurances.forEach((index)=>{
            const traverse = 8;
            let i = 1;
            const j = index;
            let firstNumStr = "";
            let secondNumStr = "";
            let firstNumCompleted = false;
            let secondNumCompleted = false;
            let notOurString = false;
        
            // loop for max probability as both numbers can be of 1-3 digits
            while(i <= traverse){       
                if(is_numeric(input[j + i])){
                    if(!firstNumCompleted)
                        firstNumStr = firstNumStr + input[j + i];
                    else
                        secondNumStr = secondNumStr + input[j + i];
                }else if(input[j + i] === ','){
                    firstNumCompleted = true;
                }else if(input[j + i] === ')'){
                    secondNumCompleted = true;
                }
                else{
                    if(!firstNumCompleted || !secondNumCompleted)
                        notOurString = true;
                }
                i++;
            }     
            if(!notOurString && firstNumCompleted && secondNumCompleted){
                const firstNum = !isNaN(parseInt(firstNumStr))? parseInt(firstNumStr): 0;
                const secondNum = !isNaN(parseInt(secondNumStr))? parseInt(secondNumStr): 0;
                total = total + (firstNum * secondNum);
            }
        });
        // Print output to console
        console.log(total);
   })
  .catch((e) => console.error(e));



