



export default function ShoppingList({button, recipeObj, }){

   function parseIngredients(el){
            const unitsLong = ['tablespoons','tablespoon','ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups' ]
            const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup'];
            const units = [...unitsShort, 'kg', 'g', 'pound'];
            console.log(units)

            // 1. uniform unit
            let ingredient =el.toLowerCase(); 
            unitsLong.forEach((unit,i)=> {
                ingredient = ingredient.replace(unit, unitsShort[i])
            })

            // 2. remove paranetheses
            ingredient = ingredient.replace(/ *\(([^)]*)\) */g, ' ')
            
            // Parse ingredients into count, unit and ingredient
            const arrIng = ingredient.split(" ");
            const unitIndex = arrIng.findIndex(el2 => units.includes(el2))

            let ObjIng;
            if(unitIndex > -1){
               const arrCount= arrIng.slice(0, unitIndex)
               
               let count;
               if(arrCount.length ===1){
                   arrCount[0].includes('-')?
                   count = eval(arrCount[0].replace("-", '+'))
                   :
                  count = eval(arrCount[0])
                   
               }else{
                   count = eval(arrCount.join('+'))
               }
               ObjIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1 ).join(" ")
               }
            
            }else if(parseInt(arrIng[0], 10)){
                // There is no unit but number
                ObjIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1 ).join(" ")
               }
            }else if(unitIndex === -1){
                //There is not unit
                ObjIng = {
                    count: 1,
                    unit: "",
                    ingredient: arrIng.slice(unitIndex + 1 ).join(" ")
               }
            }
              return (
                  <div className="flex ml-2">
                    <input type="number" className="w-12" value={ObjIng.count } />
                    <p>{ObjIng.unit}</p>
                    <div className="ml-3">{ObjIng.ingredient}</div>
                  </div>
                  )
            
            

        

   
    }
    return(
      
        <div className="w-1/4">  

       {button && 
            recipeObj.ingredients.map( (el,index) => {
            return(
 <div className="shop" key={index}><span className="ml-2">{parseIngredients(el) }</span></div>
)}
)   
}  


              </div>
   
    )
}