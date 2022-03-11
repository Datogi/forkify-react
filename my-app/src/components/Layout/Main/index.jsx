


export default function Main({recipeObj}) {
  console.log(recipeObj)
    return( 
    
        <div className="flex flex-col w-2/4">
            
    
      <figure className="relative origin-top h-80">
        <img src={recipeObj?.image_url} alt={recipeObj?.title} className="h-full w-full "/> 
        <h1 className="  text-white font-bold uppercase text-5xl text-center before:content-[''] before:block  before:h-full before:w-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-r from-orange-500 to-red-300 before:opacity-60">
          <span className="  absolute top-32 right-3 text-white font-bold text-5xl ">{recipeObj?.title}</span>
        </h1>
      </figure>

      <div className="bg-slate-300 flex h-24 ">
        <div className="ml-24 flex mt-7">
        <ion-icon name="time" class="text-orange-500 text-3xl mt-1 -ml-14"></ion-icon>
          <span className="ml-5 mt-2">60</span>
          <span className="ml-1 mt-2"> minutes</span>
        </div>
        <div className="ml-36 flex mt-7">
        <ion-icon name="people" class="text-orange-500 text-3xl mt-1 -ml-14"></ion-icon>
          <span className="ml-5 mt-2">4</span>
          <span className="ml-1 mt-2"> servings</span>
         
        </div>
        <div className="mt-7 ml-32 cursor-pointer"><ion-icon name="bookmark" class="text-white icon rounded-full text-3xl mt-1 -ml-14"></ion-icon></div>
        

       
      </div>

      <div className=" bg-zinc-100">
      <div className="ml-3">
        <ul className="flex flex-col">
    {recipeObj?.ingredients?.map((el, index) =><div className="p-2"><div className="h-7 w-7 border-2 border-text float-left  rounded-full mr-2"><span className="flex  justify-center">{index+1}</span></div><li> {el}</li></div>  )}
        </ul>
        <div className="flex justify-center my-3">
        <button className="shopping-list-button h-10 rounded-full">
       
            <span className="text-white p-5">Add to shopping list</span>
        </button>
        </div>
    </div>
        </div>

        <div className="flex justify-center flex-col items-center bg-slate-200">
        <h2 className="my-5 title uppercase font-bold text-lg">How to cook it</h2>
        <p className="text-center mx-5 font-thin">
            This recipe was carefully designed and tested by
            <span class="text-black font-bold"> {recipeObj?.publisher}</span>. Please check out directions at their website.
        </p>
        <button className="shopping-list-button h-10 rounded-full my-7">
       
            <span className="text-white p-14">Directions</span>
        </button>
    </div>

     
     
    </div>
            
      
    )
}