//classes are functions.
// instances of classes are objects

class Rectangle{
    //function, but dont use the key word
    constructor(width, height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

class RectangleWithDesctructuring{
    //function, but dont use the key word
    constructor(width, height,color){
        [this.width, this.height, this.color] = [width,height,color];
    }
}


class RectangleWithDefaultValues{
    //function, but dont use the key word
    constructor(width=1, height=1,color="white"){
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

class RectangleWithDefaultValuesOld{
    //function, but dont use the key word
    constructor(width, height,color){
        this.width = width || 1;
        this.height = height || 1;
        this.color = color || 'white';
    }
}

class RectangleValidationInConstruct{
    //function, but dont use the key word
    constructor(width, height,color){
        if(width<0){
            throw new RangeError('Cannot have negative size');
        }
        this.width = width || 1;
        this.height = height || 1;
        this.color = color || 'white';
    }
}




