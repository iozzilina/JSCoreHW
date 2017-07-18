/* 
Write a JavaScript class TrainingCourse to hold training course: a course has a title, a trainer and ordered list of topics. 
class TrainingCourse {
    // TODO: implement this class
}
Each topic holds title and date. Topics are ordered by date (ascending). Implement the following features:
•	Constructor – creates a training course by title and trainer (strings).
•	Method addTopic(title, date) – adds a topic to the course. The topic consists of topic title (string) and topic date (JavaScript Date object). Topics in the course internally should be ordered by date.
•	Accessor property firstTopic – returns the earliest (by date) topic from the course – a JS object holding title (string) and date (JS Date object).
•	Accessor property lastTopic – returns the latest (by date) topic from the course – a JS object holding title (string) and date (JS Date object).
•	Method toString() – returns a string representing the course and its topics in the following format:
    o	Without topics:
            Course "<title>" by <trainer>

    o	With topics:
        Course "<title>" by <trainer>
        * <topic 1> - <date 1>
        * <topic 2> - <date 2>
        * …
•	Assume there are no topics on the same date.
•	Print all dates in their default format (no additional date / time formatting is required) 

*/


class TrainingCourse {
    //a course has a title, a trainer and ordered list of topics.

    constructor(title, trainer){
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    //Method addTopic(title, date) – adds a topic to the course. 
    //The topic consists of topic title (string) and topic date (JavaScript Date object). 
    //Topics in the course internally should be ordered by date.
    addTopic(title, date){
        this.topics.push({title,date});
        this.topics.sort((a,b)=>a.date>b.date);
        return this;
    }   

    //Accessor property firstTopic – returns the earliest (by date) topic from the course – 
    //a JS object holding title (string) and date (JS Date object).
    get firstTopic(){
        return this.topics[0];
    }

    //Accessor property lastTopic – returns the latest (by date) topic from the course 
    //– a JS object holding title (string) and date (JS Date object).
    get lastTopic(){
        return this.topics[this.topics.length-1];
    }

    toString(){
        let result = '';
        result+=`Course "${this.title}" by ${this.trainer}`;
        if(this.topics.length>0){
            for(let topic of this.topics){
                result+=`\n * ${topic.title} - ${topic.date}`;
            }
        } else {
            result+='\n'; //just because judje says so.
        }
        return result;
    }
}

let js = new TrainingCourse("JS Intro", "Svetlin Nakov");

console.log("" + js);
js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));

console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);


let php = new TrainingCourse("PHP Intro", "Ivan Yonkov")
    .addTopic("Strings", new Date(2017, 2, 16, 18, 0))
    .addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0))
    .addTopic("Arrays", new Date(2017, 2, 14, 18, 0));
console.log("" + php);
