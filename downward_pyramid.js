n=5
string = ""
for(let i =1; i<=n;i++){
    for (j =0; j<i; j++){
        string = string + " "
    }

    for(let k =0; k<((2*(n-i))-1); k++){
        string = string + "*"
    }

    string = string + "\n"
}

console.log(string)