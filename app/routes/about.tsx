import { div } from "framer-motion/client";

export default function About() {
  return (
    //         <div className="flex flex-col md:flex-col lg:flex-row w-full max-w-6xl min-h-screen mt-6 mx-auto px-10 py-3">

    //   {/* Left 30% */}
    //   <div className="w-full lg:w-[30%] p-8 px-10">

    //   </div>

    //   {/* Right 70% */}
    //   <div className="w-full lg:w-[70%] flex flex-col items-start justify-start p-8" style={{ lineHeight: "1.2" }}>

    //   </div>
    // </div>
    <div className="">
      <div className="flex  flex-col-reverse lg:flex-col p-8 justify-center">
        <div className="grid grid-cols-12 gap-6 px-4 py-8">
          {/* Image Section */}
          <div className="col-span-4 hidden md:block">
            <img
              src="./tee.jpg"
              alt="Example"
              className="w-[300px] h-[440px] object-cover rounded"
            />
          </div>

          {/* Content Section */}
          <div className="col-span-12 md:col-span-8 flex flex-col justify-start">
            <h1 className="text-2xl font-bold mb-3">Hello,</h1>
            <h1 className="text-2xl font-bold mb-3">Im Treasure</h1>
            <p className="text-gray-700 mb-6">
              I'm a software developer and creative technologist who enjoys learning, building, and documenting the process. I care about clarity, storytelling, and meaningful user experiences. Whether I’m coding an interface, mapping out an idea, or debugging something stubborn, I’m always trying to learn—not just to get it done, but to understand how it works.
            </p>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2">Day Job</h2>
                <p className="text-sm text-gray-600">
                  I build impact-based applications/solutions and I'm slowly becoming friends with Security and Privacy techniques. My interests span from product design to automation, and I love projects that let me bring logic and emotion together. <br />
                  Lately, I’ve been exploring opportunities where I can keep learning, contribute meaningfully, and grow with a team , so if something comes to mind, feel free to reach out.
                </p>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2">Out of work</h2>
                <p className="text-sm text-gray-600">
                  When I’m not coding, I’m probably hibernating.I like spending quiet time playing Sudoku, recharging, or hanging out with my family and close friends.I also really like to watch ASMR and tiktoks.
                </p>
              </div>
            </div>
                    <div className="flex j px-[10px] mt-6 gap-2">
          
                <span className='font-semibold text-xl'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg></span>
                <span className='font-semibold text-xl'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></span>
              
   
           
      </div>
          </div>

          {/* Divider under content */}
          <div className="col-span-12 lg:col-start-5 lg:col-span-8">
            <div className="h-px w-full bg-gray-300 my-6" />
          </div>
        </div>

<div className="w-full overflow-hidden mt-10">
  <div className="flex animate-scroll whitespace-nowrap w-max">
    {[...Array(2)].flatMap((_, loopIndex) =>
      [
        "t-18.jpg", "s-6.jpg", "s-4.jpg", "s-11.jpg",
        "s-9.jpg", "s-15.jpg", "s-16.jpg", "t-11.jpg"
      ].map((src, i) => (
        <img
          key={`${loopIndex}-${i}`}
          src={`./slides/${src}`}
          className="w-[300px] h-[350px] object-cover"
        />
      ))
    )}
  </div>
</div>


      </div>
      <div className="grid grid-cols-12 gap-6 p-8">
        <div className="col-span-4">
          <h1 className="text-2xl font-bold mb-3">SUPER POWER</h1>
        </div>

        {/* Content Section */}
        <div className="col-span-12 md:col-span-8 flex flex-col justify-start">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Rapid Learner & Self-Starter</h2>
              <p className="text-sm text-gray-600 mb-1">
                I don’t wait for perfect roadmaps—I figure things out. Whether it’s learning a new backend tool or debugging a tough UI issue, I enjoy solving problems without waiting for hand-holding. This is especially useful in fast-paced or early-stage environments where adaptability is key.
              </p>
              {/* <p className="text-sm text-gray-600">
                Paragraph 2 related to Title 1.
              </p> */}
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Structure in chaos</h2>
              <p className="text-sm text-gray-600 mb-1">
                I thrive in ambiguity. I know how to break complex product ideas into small, testable components. This makes me a strong collaborator for PMs and designers trying to ship MVPs or iterate on early-stage ideas.
              </p>
              {/* <p className="text-sm text-gray-600">
                Paragraph 2 related to Title 2.
              </p> */}
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Empathetic & Human-Centered</h2>
              <p className="text-sm text-gray-600 mb-1">
                I'm sentimental about what I build. I want people to enjoy using it, feel something, and keep coming back. Whether it's the name of a feature or the feel of a button, I’m thoughtful about user experience in ways that many developers aren’t.
              </p>
              {/* <p className="text-sm text-gray-600">
                Paragraph 2 related to Title 3.
              </p> */}
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Security Conscious</h2>
              <p className="text-sm text-gray-600 mb-1">
                I’m actively exploring how to build safer, more privacy-conscious applications. From understanding how data flows in apps to identifying weak spots in auth and storage, I’m developing the instincts to build with trust and security in mind.
              </p>
              {/* <p className="text-sm text-gray-600">
                Paragraph 2 related to Title 4.
              </p> */}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-start-5 lg:col-span-8">
          <div className="h-px w-full bg-gray-300 my-6" />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 p-8">
        <div className="col-span-4">
          <h1 className="text-2xl font-bold mb-3">EDUCATION</h1>
        </div>

        {/* Content Section */}
        <div className="col-span-12 md:col-span-8 flex flex-col justify-start ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Lincoln University,Nigeria</h2>
              <p className="text-sm text-gray-600 mb-1">
                Bsc Cyber security (Hons.)
              </p>
              <p className="text-sm text-gray-600">
                2023-2027
              </p>
            </div>

            {/* <div>
              <h2 className="text-lg font-semibold mb-2">Title 4</h2>
              <p className="text-sm text-gray-600 mb-1">
                Paragraph 1 related to Title 4.
              </p>
              <p className="text-sm text-gray-600">
                Paragraph 2 related to Title 4.
              </p>
            </div> */}
          </div>
        </div>
        <div className="col-span-12 lg:col-start-5 lg:col-span-8">
          <div className="h-px w-full bg-gray-300 my-6" />
        </div>
      </div>
    </div>
  );
}
