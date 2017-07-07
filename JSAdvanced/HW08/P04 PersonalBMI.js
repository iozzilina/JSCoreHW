/*A wellness clinic has contacted you with an offer – they want you to write for them a program that composes patient charts and performs some preliminary evaluation of their condition. The data comes in the form of several arguments, describing a person – their name, age, weight in kilograms and height in centimeters. Your program must compose this information into an object and return it for further processing.
The patient chart object must contain the following properties:

•	name
•	personalInfo, which is an object holding their age, weight and height as properties
•	BMI – body mass index. You can find information about how to calculate it here: https://en.wikipedia.org/wiki/Body_mass_index
•	status

The status is one of the following:
•	underweight, for BMI less than 18.5;
•	normal, for BMI less than 25;
•	overweight, for BMI less than 30;
•	obese, for BMI 30 or more;

Once the BMI and status are calculated, you can make a recommendation. 
If the patient is obese, add an additional property called recommendation 
and set it to “admission required”.

Input
Your function needs to take four arguments – name, age, weight and height

Output
Your function needs to return an object with properties as described earlier. 
All numeric values should be rounded to the nearest whole number. 
All fields should be named exactly as described, their order is not important. 
Look at the sample output for more information.

Sample Input
“Peter”, 29, 75, 182

Sample Output
{   ame: 'Peter',
    personalInfo: 
    {
        age: 29,
        weight: 75,
        height: 182
    },
    BMI: 23,
    status: 'normal' 
}


Sample Input
“Honey Boo Boo”, 9, 57, 137

Sample Output
{ 
    name: 'Honey Boo Boo', 
    personalInfo: 
    {   age: 9, 
        weight: 57, 
        height: 137 
    }, 
    BMI: 30, 
    status: 'obese', 
    recommendation: 'admission required' 
}

*/

function bmi(name,age,weight,height){

    let calcBmi = Math.round(weight/Math.pow(height/100,2));


    let calcStatus = '';
    if( calcBmi < 18.5){
        calcStatus = 'underweight';        
    } else if( calcBmi >= 18.5 && calcBmi<25){
        calcStatus = 'normal'; 
    } else if( calcBmi >= 25 && calcBmi<30){
        calcStatus = 'overweight'; 
    } else {
         calcStatus = 'obese'; 
    }


    let patient = {
        name: name,
        personalInfo:{
            age:age,
            weight:weight,
            height:height
        },
        BMI: calcBmi,
        status: calcStatus
    };

    if(patient.status=='obese'){
        patient.recommendation="admission required";
    }

    return patient;

}

console.log(bmi('Honey Boo Boo', 9, 57, 137));
console.log(bmi('Peter', 29, 75, 182));

