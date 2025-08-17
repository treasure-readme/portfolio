


// export function TextChanger(){
//     const facts =[
//         "Jollof rice is my love language",
//         "I watch productivity Youtubers while procastinating",
//         // "I want to buld tools that makes tech less scary and more accesible",
//             "I love to code",
//     "I dream big",
//     "I love to stay indoors",
//     "I love to code",

   
//     ];
//     return(
//     <div className="text-changer">
//             {/* <p className="intro-text text-center text-5xl "></p> */}
//             <div className="roles-container">
//                 {facts.map((fact,index)=>(
//                     <h1 key={index} className="role  text-5xl   lg:text-6xl ">{fact}</h1>

//                 ))
//                 }
//             </div>
//         </div>
//     )
// }
// export default function Hero(){
   
//     return(
//         <div className="flex flex-col lg:flex-row w-full min-h-screen p-15">
//         {/* Left Section - 60% on large */}
//         <div className="w-full lg:w-[60%]  p-10 ">
//           <h1 className="text-4xl font-bold whitespace-nowrap">Hello, I'm Treasure</h1>
//           <TextChanger />
//           <div className=" flex flex-row justify-between ">
//             <div>
//                 <h2>currently at</h2>
//                 <p>lincoln university</p>
//             </div>
//             <div>
//                 <h2>currently at</h2>
//                 <p>lincoln university</p>
//             </div>
//           </div>
//         </div>
      
//         {/* Divider - vertical on large, horizontal on small */}
//         <div className="bg-gray-300 w-full h-px my-4 lg:my-0 lg:w-px lg:h-120"></div>
      
//         {/* Right Section - 40% on large */}
//         <div className="flex flex-col lg:flex-col w-full lg:w-[35vw] p-8">
//           <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" alt="placeholder" />
//           <p>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus veritatis odit veniam unde, magni molestiae voluptatum? Eos aliquam incidunt perferendis?
//           </p>
//         </div>
//       </div>
        
//     );
// }

import '../hero.css'

export default function Hero(){
    return(
        <div className="text-changer">
        
        <div className="facts-container">
            <span className="fact">I love jellof rice</span>
            <span className="fact">I Like to build high impact solutions</span>
            <span className="fact">I am extremely Tybe B</span>
            <span className="fact">I love jellof rice</span>
            <span className="fact">I love jellof rice</span>
        </div>
    </div>
    );
}