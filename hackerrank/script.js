var grid = ['1112', '1912', '1892', '1234', '898'];
var newgrid=[]
grid.map(el => {

        if(el.length %2 == 0){
            if(el[el.length/2] > el[0] && el[el.length/2] > el[el.length-1] && el[el.length/2] >el[(el.length/2)-1] ){
                
          newgrid.push(el.replace(el[el.length/2], 'X')) 
            }
            else if(el[(el.length/2)-1] > el[0] && el[(el.length/2)-1] > el[el.length-1]){
                newgrid.push(el.replace(el[(el.length/2)-1], 'X'))  
            }
            else{
                newgrid.push(el)
            }
        }
     
    else{
  
        if(el[Math.round(el.length/2)-1] > el[0] && el[Math.round(el.length/2)-1] > el[el.length-1] ){
                
            newgrid.push(el.replace(el[Math.round(el.length/2)-1], 'X'))  
         }
         else{
            newgrid.push(el)
        }
    }}
)
console.log(newgrid)