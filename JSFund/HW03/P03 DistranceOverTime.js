function getRemaningDistance(arr){
    let v1 = arr[0]*1000/3600;//km/h to m/s
    let v2 = arr[1]*1000/3600;//km/h to m/s
    let t = arr[2]; //seconds

    //find distance in meters
   
    let dist1 = v1*t;
    let dist2 = v1*t;

    console.log(Math.abs(dist1-dist2));
}

//getRemaningDistance([5, -5, 40]);