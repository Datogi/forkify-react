


export default function Header () {
    return(
        <div className="bg-gray-100 rounded-t-lg flex justify-between p-8 relative">
         <img src="logo.png" alt="logo" className="w-32 h-12" />    
         <div className="flex  relative">
         <input type="text" className="w-80 rounded-full " placeholder="     Search over 1,000,000 recipes..." />
         <button className="icon  rounded-full w-40 h-12 text-white uppercase hover:hover:scale-110 ">Search</button> 
           </div>  
           <ion-icon name="heart" class='text-4xl text-red-400'></ion-icon>
      </div>
    )
}
  