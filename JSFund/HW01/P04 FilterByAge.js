function filterByAge(filter,name1,age1,name2,age2){
    let person1 = {name:name1, age : age1};
    let person2 = {name:name2,age : age2};

    if(person1.age>=filter){
        console.log(person1);
    }

    if(person2.age>=filter){
        console.log(person2);
    }
}