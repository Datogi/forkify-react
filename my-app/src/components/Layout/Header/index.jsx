import { useRef } from "react"


export default function Header ({changeQuery, bookmarkArr}) {

    const inputElement = useRef();

    function handlerButton(){
      const searchValue = inputElement.current.value;
      changeQuery(searchValue)
    }
    function showlist(){
    if(bookmarkArr.length > 0 ){
      if(document.getElementById("liked").className =="flex flex-col w-72 absolute right-28 top-48 bg-gray-200"){
        document.getElementById("liked").className ="flex flex-col w-72 absolute right-28 top-48 hidden bg-gray-200"
      }
      else{
        document.getElementById("liked").className ="flex flex-col w-72 absolute right-28 top-48 bg-gray-200"
      }
    }
   
    
}
 
    

    return(
        <div className="bg-gray-100 rounded-t-lg flex justify-between p-8 ">
         <img src="logo.png" alt="logo" className="w-32 h-12" />    
          <div className="relative ">
            <input type="text" className="w-96 rounded-full p-4" placeholder="Search " ref={inputElement}/>
           
            <button 
              className="icon absolute right-0 rounded-full w-40 h-14 text-white uppercase hover:hover:scale-110"
              onClick={() => handlerButton()}
            >
                Search
            </button> 
          </div>  
          <button  onClick={showlist}>
           <ion-icon name="heart" class='text-4xl text-red-400 '  ></ion-icon>
           <div id="liked" className="flex flex-col w-72 absolute right-28 top-48 bg-gray-200">
          { bookmarkArr.map(el =>{
      return(
      <div key={el.recipe_id} className='px-4 shadow-md pb-1 flex'> 
      <a  className="flex items-center ml-2 mt-2 hover:bg-gray-100"  > 
           <img className="w-16 h-16 rounded-full " src={el.image_url } alt={el.title} /> 
          <p className="ml-2 text-2xl italic title" > {el.title } </p>
      </a>
  </div>
      )
  })}
          
          </div>
          </button>
          
      </div>
    )
}
  