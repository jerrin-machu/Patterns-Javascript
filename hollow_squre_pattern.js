let n = 5
let row;
let col;
string= ""

for(row = 0; row < n; row ++){
    for(col = 0; col < n; col++){
        if(row === 0 || row === n-1){
            string = string + "*"
        }else {
            if(col === 0 || col === n-1){
                string = string + "*"
            }else {
                string = string + " "
            }
        }
    }

    string = string + "\n"
}

console.log(string)