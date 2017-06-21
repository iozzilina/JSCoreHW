function postixOps(arr){
    let result = [];
        
    for( let i = 0; i<arr.length; i++){
        //console.log(arr[i]);  

        if(arr[i]/1===arr[i]){
            //console.log('is number');
            result.push(arr[i]/1);
        } else {
            //console.log('is operation');
            if(result.length >=2){
                let b = result.pop();
                let a = result.pop();

                let res = calculate(a,b,arr[i]);
                //console.log(b + arr[i] + a + "-> " + res );
                result.push(res)
            } else {
                console.log("Error: not enough operands!");
                return;
            }
        }        
    }

    if(result.length === 1){
        console.log(result[0]);
    } else if(result.length >1){
        console.log('Error: too many operands!');       
    }
   
    
    function calculate(a, b, op){

        function doIt(a,b,operation){
            return operation(a,b);
        }

        let add = function(a,b){
            return a+b;
        }

        let subtract = function(a,b){
            return a-b;
        }

        let multiply = function (a,b){
            return a*b;
        }

        let divide = function(a,b){
            return a/b;
        }

        switch (op){
            case '+' : return doIt(a,b,add);
            case '-' : return doIt(a,b,subtract);
            case '*' : return doIt(a,b,multiply);
            case '/' : return doIt(a,b,divide);
        }
    }
}

/*
postixOps(
[3,
 4,
 '+'
]);
*/
//7 - check


/*
postixOps(
[5,
 3,
 4,
 '*',
 '-']
);
*/
//-7 - check


///*
postixOps(
[7,
 33,
 8,
 '-']
);
//*/
//Error: too many operands!

/*
postixOps(
[31,
 2,
 '+',
 11,
 '/']
);
*/
//3 - check

/*
postixOps(
    [15, 
    '/']
    );
*/
//Error: not enough operands! - check


/*
postixOps(
    [-1,
 1,
 '+',
 101,
 '*',
 18,
 '+',
 3,
 '/']);
*/
//6 - check!






