class Task{
    constructor(title,deadline ){
        this.status = 'Open'; //'Inprogress', 'Complete'
        this.title = title;
        this.deadline = deadline;
    }

    get status(){
        return this._status;
    }
    set status(value){
        this._status = value;
        //'Open','Inprogress', 'Complete'
    }

    get deadline(){
        return this._deadline;
    }
    set deadline(value){
        if(value < Date.now()){
            throw new Error ('Cannot create a task with deadline in the past');
        }
        this._deadline = value;
    }

    get isOverdue(){
        if(this._deadline<=Date.now()){
           return true; 
        }    
        return false;      
    }

    static comparator(a,b){
        let statusA = a.status;
        if(a.isOverdue && a.status!='Complete'){
            statusA = 'Overdue';
        }

        let statusB = b.status;
        if(b.isOverdue && b.status!='Complete'){
            statusB = 'Overdue';
        }

        let order = {
            'Overdue': 1,
            'In Progress': 2, 
            'Open':3,            
            'Complete':4       
        }
        
        if((order[statusA]-order[statusB])!==0){
            return (order[statusA]-order[statusB]);
        } else {
            return a.deadline - b.deadline;
        }
    }

    toString(){
        let icons = {
            'Open':'\u2731', //✱
            'In Progress':'\u219D', //↝
            'Complete':'\u2714', //✔
            'Overdue':'\u26A0' //⚠
        }

        let status = this.status;   
        let result = '';     

        if(this.isOverdue && this.status!='Complete'){
            status = 'Overdue';
            result += `[${icons[status]}] ${this.title} (overdue)}`;
        } else if (this.status === 'Complete'){
            result += `[${icons[status]}] ${this.title}`;
        }  else {
            result += `[${icons[status]}] ${this.title} (deadline: ${this.deadline})`;
        }  
        return result;   
    }

}

let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date()); 
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
  tasks.sort(Task.comparator);
  console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later


try{
    let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
} catch (err)
{
    console.log(err.message);
}

try{
    task1.deadline = new Date(2005, '4', '20');
} catch (err)
{
    console.log(err.message);
}

console.log(task1.isOverdue);





