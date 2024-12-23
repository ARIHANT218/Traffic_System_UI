
function App() {
  return (
    <>
      <div className=" bg-gray-800">
          <header className="relative gap-5 flex max-w-screen-xl flex-col overflow-hidden  m-7 px-4 py-6 text-blue-900 md:mx-auto md:flex-row md:items-center">
            <div className=" m-5 flex  gap-20 items-center justify-between">
              <a href="#" className="flex cursor-pointer items-center whitespace-nowrap text-3xl font-black text-blue-500">
              
                    EVOLVE AI
              </a>
           
            
                    <h1  className="cursor-pointer items-center whitespace-nowrap text-3xl font-black text-white">SMART TRAFFIC SYSTEM  </h1>
            
            </div>
            <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
              <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                <li className="font-bold text-gray-100 md:mr-12"><a href="#">HOME</a></li>
                <li className="text-gray-100 md:mr-12"><a href="#">FEATURES</a></li>
                
                
              </ul>
            </nav>
          </header>
        
          <div className="mx-auto h-full px-4 py-28 md:py-38 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="">
                <div className="lg:max-w-xl lg:pr-5">
                  <p className="flex text-sm uppercase text-gray-300">
                    AI TRAFFIC MANAGEMENT SYSTEM
                    {/*  */}
                    </p>
                  <h2 className="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-white sm:text-7xl sm:leading-snug">
                    We make your ride 
                    <span className="my-1 inline-block border-b-8 border-white bg-orange-400 px-4 font-bold text-white">safe</span>
                  </h2>
                  <p className="  text-gray-400 text-2xl" >Upload Lane Image or Video to get the Green light Timing Based on Vehicles Priority.</p>
                </div>
                <div className="mt-10 flex flex-col items-center md:flex-row">
                  <button className="bg-blue-800 text-white px-6 py-3 rounded-md font-medium tracking-wide shadow-md transition md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-900">Upload</button>
                  
                  
                    
                </div>




              </div>
              <div className="relative hidden lg:ml-42 lg:block lg:w-1/2">
                
                <div className="abg-orange-400 w-370 h-270 flex-wrap rounded-[2rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWS9hpDJJXRyrEY7y1vm5IIyiWs4Xn3E-Qlw&s" alt="hero" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
    
    </>
  )
}

export default App