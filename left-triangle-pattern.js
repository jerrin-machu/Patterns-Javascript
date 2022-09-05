let row ;
let col;
let n =5;
string = ""

for ( row =1; row<= 5; row++){
    for(col = 0; col<row; col++){
        string = string + "*"
    }
    string = string + "\n"

}

console.log(string)