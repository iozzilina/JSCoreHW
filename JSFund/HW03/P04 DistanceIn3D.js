function distance3d(coords) {
   let x1=coords[0];
   let y1=coords[1];
   let z1=coords[2];
   let x2=coords[3];
   let y2=coords[4];
   let z2=coords[5];

   let dist = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) + (z2-z1)*(z2-z1));

   console.log(dist);

}