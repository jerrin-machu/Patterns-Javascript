/*

*
* *
* . *
* . . *
* . . . *
* * * * **

i=0 i=1 i=2 i=3
j=0 j=1 j=2 j=0


*
* *
* .*



*/
let n = 6
string = ""

for(let i = 0; i<n; i++){
    for (let j = 0; j<=i; j++){
        if(i === 0 || i === n-1){
            string = string + "*"
        }else {
            if(j === 0 || j=== i){
                string = string + "*"
            }else{
                string = string + " "
            }
        }
    }

    string = string + "\n"
}

console.log(string)