


export default function Header () {
    return(
        <div className="bg-gray-100 rounded-t-lg flex justify-between p-8 ">
         <img src="logo.png" alt="logo" className="w-32 h-12" />    
          <div className="relative ">
            <input type="text" className="w-96 rounded-full p-4" placeholder="Search " />
            <button className="icon absolute right-0 rounded-full w-40 h-14 text-white uppercase hover:hover:scale-110 ">Search</button> 
          </div>  
           <ion-icon name="heart" class='text-4xl text-red-400'></ion-icon>
      </div>
    )
}
  