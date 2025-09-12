
import '../hero.css';
export default function Hero() {
    const facts =[
        
                // "I really love sharwarma",
                "I recently won a hackathon",
                "Jollof rice is my love language",
                "I make high-impact products",
                "I might have a slight sugar-addiction",
               
                // "I want to buld tools that makes tech less scary and more accesible",
                    // "I love to code",
            "I am extremely Type B",

        
           
            ];
  return (
    <div className="flex flex-col md:flex-col lg:flex-row w-full max-w-6xl min-h-screen items-left  mt-6  mx-auto px-10  py-3">
      
{/* Left 60% */}       
<div className="w-full lg:w-[70%] px-[10px] overflow-hidden">       
  <h1 className='lg:text-6xl text-3xl text-left font-bold mb-6 neulis text-top-shadow break-words'>
    Hello, I'm Treasure
  </h1>         
  <div className="lg:max-h-[180px] max-h-[120px] rounded-lg flex text-[#7c7c7c] font-sans font-medium text-[25px] box-content overflow-hidden">             
    <div className="facts-container relative overflow-hidden w-full">           
      {facts.map((fact, index) => (                     
        <span 
          key={index} 
          className="fact block h-full text-[#956afa] lg:text-7xl text-4xl font-black break-words leading-tight"
        >
          {fact}
        </span>                  
      ))}             
    </div>         
  </div>         
  <div className="flex justify-between px-[10px] lg:mt-15 mt-5 overflow-hidden">             
    <div className="min-w-0 flex-1">                 
      <h2 className='font-semibold text-xl break-words'>Currently at:</h2>                 
      <p className='text-xl text-gray-600 mt-1 break-words'>Lincoln University</p>             
    </div>             
    {/* <div>             
    <h2 className='font-semibold text-xl'>Currently at:</h2>             
    </div> */}       
  </div>       
</div>


      {/* Divider */}
      <div className="hidden lg:block w-px h-120 bg-gray-300 mx-4" /> {/* vertical line */}
      <div className="block lg:hidden h-px w-full bg-gray-300 my-6" /> {/* horizontal line */}

      {/* Right 40% */}
      <div className="w-full lg:w-[30%] flex flex-col items-start justify-start px-5 " style={{lineHeight:"1.2"}}>
        <img 
          src="/me.jpeg"
          alt="Profile" 
          className="w-35 h-35 object-cover grayscale rounded-full mb-2" 
        />
        <h1 className=" text-xl font-semibold mb-2">Nice to meet cha'</h1>
        <p className="text-gray-600 text-xl max-w-md">
          Hey there! I'm someone who builds fun, high-impact projects and appreciates good food like jellof rice 🍚 Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>
        <div className="flex justify-between px-[10px] mt-6 gap-2">
          
                <span className='font-semibold text-xl'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg></span>
                <span className='font-semibold text-xl'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></span>
              
   
           
      </div>
      </div>

    </div>
  );
}
