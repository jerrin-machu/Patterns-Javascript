let n = 5;
let row ;
let col;
string = ""
for(row =1; row<=n; row++){
    for(col =0; col<row; col++){
        string = string + String.fromCharCode((row -1) +65)
    }
    string = string + "\n"
}

console.log(string)