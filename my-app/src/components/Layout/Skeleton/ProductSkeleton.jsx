

export default function ProductSkeleton (){
    return(
    <div className="w-1/4 flex flex-col border-r-2 h-screen">
       {
           [0,1,2,3,4,5,6,7,8,9].map((el)=>{
               return(
                <div key={el} className="flex justify-around items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-100">
            
                    </div>
                    <div className="w-32 h-4 bg-gray-100">
                        
                    </div>
                </div>
               )
           })
           
       }
    </div>
    )
}