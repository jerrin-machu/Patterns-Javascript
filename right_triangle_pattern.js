let n = 5
let row;
let col;
let star;
let string = ""

for ( row =1; row <= n; row ++){
    for (col =0; col <n-row; col ++){
        string = string + " "
    }

    for(star =0; star<row; star++){
        string = string + "*"
    }

    string = string + "\n"
}

console.log(string)