let row;
let col;
let string = ""
let n = 5

for (row = 1; row<=n; row ++){
    for(col = 0; col<row; col++){
        string = string + String.fromCharCode(col +65)
    }

    string = string + "\n"
}


console.log(string)