// import { useState } from "react";

// export default function Fun() {
//   const [activeTab, setActiveTab] = useState("section1");

//   return (
//     <div className="flex flex-col md:flex-col lg:flex-row w-full max-w-6xl min-h-screen mt-6 mx-auto px-10 py-3">
      
//       {/* Left 30% */}
//       <div className="w-full lg:w-[35%] p-8 px-10">
//         <h1 className="font-bold">Fun</h1>
//         <p>Solitude, comfort, and curiosity shape a lot of how I spend my time. When I'm not building or thinking through an idea, I enjoy slowing down which usually involves eating something I love, scrolling through new interests, watching a film, or just resting.

// Here’s a glimpse into a few things I enjoy, outside of work.</p>
//       </div>

//       {/* Right 70% */}
//       <div className="w-full lg:w-[65%] flex flex-col items-start justify-start p-8" style={{ lineHeight: "1.2" }}>
        
//         {/* Tabs */}
//         <div className="flex space-x-6 mb-2">
//           {["section1", "section2", "section3","section4"].map((section, index) => (
//             <button
//               key={section}
//               onClick={() => setActiveTab(section)}
//               className={`pb-1 border-b-2 transition-all duration-200 ${
//                 activeTab === section
//                   ? "text-blue-600 border-blue-500"
//                   : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-300"
//               }`}
//             >
//               Link {index + 1}
//             </button>
//           ))}
//         </div>

//         <hr className="border-gray-300 w-full" />

//         {/* Content */}
//         <div className="mt-6">
//           {activeTab === "section1" && (
//             <div>
//               <h2 className="text-xl font-bold mb-2">Food</h2>
//               <div className="flex">
//               <p>
//                 I really love food(like, truly). Jollof rice is my all-time favorite, and banana bread holds a special place in my heart. I’m not big on cooking (I tried baking once… never again), but I enjoy eating and appreciating good food. <br />
//               </p>
//               <p>
//                I’m not a cook or a foodie in the curated, aesthetic sense. I just genuinely enjoy food. It brings me peace, makes slow days better, and reminds me to pause and enjoy the moment.

//               </p>
//               </div>
//             </div>
//           )}
//           {activeTab === "section2" && (
//             <div>
//               <h2 className="text-xl font-bold mb-2">Developing</h2>
//               <div className="flex">
//               <p>
//                 I really enjoy building things whether it's a full idea or just a small feature that makes something smoother. Coding feels like clarity to me. It gives structure to the constant thinking going on in my head. <br />
//               </p>
//               <p>
//                 Sometimes I build to solve a real problem. Other times, I build just to see if I can. I’m always trying to learn how things work, how to improve, and how to create better solutions.

//               </p>
//               </div>
//             </div>
//           )}
//           {activeTab === "section3" && (
//             <div>
//               <h2 className="text-xl font-bold mb-2">Ideating</h2>
//               <div className="flex">
//               <p>
//                 My brain is almost always busy  turning over thoughts, analyzing problems, imagining solutions, or trying to make sense of something. Even when I’m resting, I’m thinking. It’s not always intentional; it’s just how I’m wired. <br />
//               </p>
//               <p>
//                 In tech and creative work, this constant ideation helps me notice things others might miss. Whether it leads to a new feature, a better user flow, or an unexpected workaround, it keeps me tuned into the “why” behind what I build. It’s not always neat—but it’s honest, and often useful.

//               </p>
//               </div>
//             </div>
//           )}
//           {activeTab === "section4" && (
//             <div>
//               <h2 className="text-xl font-bold mb-2">Sleep</h2>
//               <p>Sleep is one of my favorite things. I love resting, napping, and letting my brain finally pause for a bit. <br /> Some days, rest is the most productive thing I do. And honestly? I’m okay with that.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";

export default function Fun() {
  const [activeTab, setActiveTab] = useState("section1");

  const tabs = [
    { id: "section1", label: "Food" },
    { id: "section2", label: "Developing" },
    { id: "section3", label: "Ideating" },
    { id: "section4", label: "Sleep" },
  ];

  return (
    <div className="flex flex-col md:flex-col lg:flex-row w-full max-w-6xl min-h-screen mt mx-auto px-10 py-3">
      
      {/* Left 30% */}
      <div className="w-full lg:w-[35%] p-8 px-10">
        <h1 className="font-bold text-7xl mb neulis">Fun</h1>
        <p className="mt">
          Solitude, comfort, and curiosity shape a lot of how I spend my time.
          When I'm not building or thinking through an idea, I enjoy slowing
          down which usually involves eating something I love, scrolling
          through new interests, watching a film, or just resting.
          <br /><br />
          Here’s a glimpse into a few things I enjoy, outside of work.
        </p>
      </div>

      {/* Right 70% */}
      <div className="w-full lg:w-[65%] flex flex-col items-start justify-start p-8" style={{ lineHeight: "1.2" }}>
        
        {/* Tabs */}
        <div className="flex space-x-6 mb-2 lg:mt-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-1 border-b-2 transition-all duration-200 ${
                activeTab === tab.id
                  ? "text-gray-600 border-gray-600"
                  : "text-gray-700 border-transparent hover:text-gray-600 "
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <hr className="border-gray-300 w-full" />

        {/* Content */}
        <div className="mt-6">
          {activeTab === "section1" && (
            <div>

              <div className="flex flex-col space-y-2">
                <p>
                  I really love food (like, truly). Jollof rice is my all-time
                  favorite, and banana bread holds a special place in my heart.
                  I’m not big on cooking (I tried baking once… never again), but
                  I enjoy eating and appreciating good food.
                </p>
                <p>
                  I’m not a cook or a foodie in the curated, aesthetic sense. I
                  just genuinely enjoy food. It brings me peace, makes slow days
                  better, and reminds me to pause and enjoy the moment.
                </p>
              </div>
            </div>
          )}
          {activeTab === "section2" && (
            <div>

              <div className="flex flex-col space-y-2">
                <p>
                  I really enjoy building things—whether it's a full idea or
                  just a small feature that makes something smoother. Coding
                  feels like clarity to me. It gives structure to the constant
                  thinking going on in my head.
                </p>
                <p>
                  Sometimes I build to solve a real problem. Other times, I
                  build just to see if I can. I’m always trying to learn—how
                  things work, how to improve, and how to create better
                  solutions.
                </p>
              </div>
            </div>
          )}
          {activeTab === "section3" && (
            <div>
        
              <div className="flex flex-col space-y-2">
                <p>
                  My brain is almost always busy—turning over thoughts,
                  analyzing problems, imagining solutions, or trying to make
                  sense of something. Even when I’m resting, I’m thinking. It’s
                  not always intentional; it’s just how I’m wired.
                </p>
                <p>
                  In tech and creative work, this constant ideation helps me
                  notice things others might miss. Whether it leads to a new
                  feature, a better user flow, or an unexpected workaround, it
                  keeps me tuned into the “why” behind what I build. It’s not
                  always neat—but it’s honest, and often useful.
                </p>
              </div>
            </div>
          )}
          {activeTab === "section4" && (
            <div>
             
              <div className="flex flex-col space-y-2">
                <p>
                  Sleep is one of my favorite things. I love resting, napping,
                  and letting my brain finally pause for a bit.
                </p>
                <p>
                  Some days, rest is the most productive thing I do. And
                  honestly? I’m okay with that.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
