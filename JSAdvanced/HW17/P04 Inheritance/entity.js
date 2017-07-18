class Entity{

    constructor(name){
        if(new.target === Entity){
            throw new Error ('cannot instance directly');
        }
        this.name  = name;
    }
}

module.exports = Entity;