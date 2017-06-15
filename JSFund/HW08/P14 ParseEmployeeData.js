// Write a JS function that validates employee data, and stores it if it is valid. The employee data consists of 3 elements – employee name, employee salary and employee position.
// The input comes as an array of strings. Each element represents input employee data. You should capture only the valid from them. The input will have the following format:
// {employeeName} - {employeeSalary} - {employeePosition}
// The Employee name will be a string, which can contain only English alphabet letters and must start with a capital. 
// The Employee salary should be a VALID number. 
// The employee position can contain English alphabet letters, digits, dashes, and can consist of several words. 
// Any input that does NOT follow the specified above rules, is to be treated as invalid, and is to be ignored.
// The output should be printed on the console. 
// For every valid employee data found, you should print each of its elements. 
// Check the examples.

// Input
// Isacc - 1000 - CEO
// Ivan - 500 - Employee
// Peter - 500 - Employee
//
// Output
// Name: Isacc
// Position: CEO
// Salary: 1000
// Name: Ivan
// Position: Employee
// Salary: 500
// Name: Peter
// Position: Employee
// Salary: 500	

function parseEmployees(arr){
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;

    for(let line of arr){
        let result = regex.exec(line);

        if(result !== null){
            console.log(`Name: ${result[1]}\nPosition: ${result[3]}\nSalary: ${result[2]}`);           
        }
    } 

}

parseEmployees(['Isacc - 1000 - CEO with many-words',
'Ivan - 500 - Employee',
'I - 500 - Employee',
'Iova - 0500 - Employee',
'Peter - 500 - Employee']);