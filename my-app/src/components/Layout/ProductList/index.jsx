

export default function ProductList({recipesList}){
console.log(recipesList)

    return(
        <div className="w-1/4 flex flex-col ">
      {
      
        recipesList.map(el =>{
            return(
                <div key={el.recipe_id} className='flex ml-2 mt-2 '> 
                    <img className="w-16 h-16 rounded-full " src={el.image_url} alt={el.title} />
                    <p className="ml-2 text-base italic title" >{el.title}</p>
                  
                </div>
            )
        }

      )}
      </div>
    )
}