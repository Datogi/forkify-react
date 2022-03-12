import { useState, useEffect, useReducer } from "react";

export default function ProductList({recipesList,  changeRecipeObj}){
    console.log(recipesList)
    const [ viewList, setViewList ]= useState(recipesList.slice(0,10));
    const [ page, setPage ] = useState(1);
    const [ backBtn, setBackBtn ] = useState(true);
    const [ nextBtn, setNextBtn ] = useState(true);
    const pages =Math.round(recipesList.length/10)
    
 
    useEffect(() => {
        console.log('p')
        renderResult()
    },[page])

    function renderResult( resPerPage = 10  )  {
        //Render results of current page
        const start = (page - 1) * resPerPage; // 20
        const end = page * resPerPage; // 30
        setViewList(recipesList.slice(start, end));
    }

     

    function nextBtnHandler(){
        if(pages - page == 1){
            setNextBtn(false)
        }
        setPage(page+1)
        setBackBtn(true)
        }
    
    
    
    function backBtnHandler(){
        if(page === 2){
            setBackBtn(false)
        }
      setNextBtn(true)  
      setPage(page-1)
      console.log(page)}

    
    async function fetchData(id){
        const data = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`); 
        if(data.status == 200){
          const res = await data.json();
          changeRecipeObj(res.recipe);
        } else{
          changeRecipeObj({})
        }
    }

    function handlerAnchor(id){
        fetchData(id)
    }
    
    return(
        <div className="w-1/4 flex flex-col border-r-2 h-screen">
         
                    
                    {viewList.length>0 ? viewList.map(el =>{
                        return(
                            
                            <div key={el.recipe_id} className='px-4 shadow-md pb-1'> 
                                <a onClick={() => handlerAnchor(el.recipe_id)} href={`#${el.recipe_id}`} className='flex items-center ml-2 mt-2 hover:bg-gray-100  '> 
                                    <img className="w-16 h-16 rounded-full " src={el.image_url} alt={el.title} />
                                    <p className="ml-2 text-base italic title" >{el.title}</p>
                                </a>
                            </div>
                            
                        )
                    }):
                    <p className="flex">no result</p>
              
           } 
            <div className="flex  mt-2">
                <div className="w-1/2 flex justify-start">
                    {backBtn && <button onClick={() => backBtnHandler()} className="shopping-list-button h-10 rounded-full w-3/5 " >back</button>}
                </div>
                <div className="w-1/2 flex justify-end">
                    {nextBtn && <button onClick={() => nextBtnHandler()} className="shopping-list-button h-10 rounded-full w-3/5 ">Next</button>}
                </div>
            </div>
        </div>
    )
}