let n =5;
string =""
for(let i =1; i<=n; i++){
    for(let j =0;j<n-i;j++){
        string = string + " "
    }
    for(let k =0; k <((2*i)-1);k++){
        string = string + "*"
    }
    string = string + "\n"
}

console.log(string)