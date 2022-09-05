console.log("Printing squre pattern")

let n = 5;
string = ""


for( let row =0; row<n; row++ ){
    for(let col = 0; col<n; col++ ){
        string = string + "*"
    }
    string = string + "\n"
}


console.log(string)