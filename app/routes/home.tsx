import type { Route } from "./+types/home";
import Stack from "~/components/stack";

import Hero from "~/components/hero";
import Project from "~/components/projects";
import { Footer } from "~/components/footer";
import { useEffect,useState } from "react";
// import { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Treasure Afensumen - Software Engineer" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Home() {
 

  type ProjectType = {
  id: string
  slug:string
  media_url: string
  is_video: boolean
  title: string
  shipped: boolean
  preview_description: string
  type: string
  year: string | number
}

    const [projects, setProjects] = useState<ProjectType[]>([])


useEffect(() => {
  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('year', { ascending: false })

    if (error) {
      console.error("Error fetching projects:", error)
    } else if (data) {
      setProjects(data)
    }
  }

  fetchProjects()
}, [])



  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-[60px] px-10 py-3">
      {/* <Project
    media="https://www.w3schools.com/html/mov_bbb.mp4"
    isVideo={true}
    title="EduAI Case Study"
    shipped={false}
    description="AI-powered learning assistant case study done for uLesson."
    type="Case Study"
    year="2025"
  /> */}
   {projects.map((project) => (
     <Link key={project.id} to={`/work/${project.slug}`}>
        <Project
          key={project.id}
          media={project.media_url}
          isVideo={project.is_video}
          title={project.title}
          shipped={project.shipped}
          preview_description={project.preview_description}
          type={project.type}
          year={project.year}
        />
        </Link>
      ))}
    {/* <Project
    media="https://www.w3schools.com/html/mov_bbb.mp4"
    isVideo={true}
    title="EduAI Case Study"
    shipped={false}
    description="AI-powered learning assistant case study done for uLesson."
    type="Case Study"
    year="2025"
  />
  <Project
    media="https://via.placeholder.com/400x300"
    isVideo={false}
    title="Dev Helper"
    shipped={true}
    description="A tool that simplifies dev workflows with a command palette interface.A tool that simplifies dev workflows with a command palette interface.A tool that simplifies dev workflows with a command palette interface.A tool that simplifies dev workflows with a command palette interface."

    type="Side Project"
    year="2024"
  /> */}

  {/* <Project
    media="https://www.w3schools.com/html/mov_bbb.mp4"
    isVideo={true}
    title="EduAI Case Study"
    shipped={false}
    description="AI-powered learning assistant case study done for uLesson."
    type="Case Study"
    year="2025"
  />

  <Project
    media="https://via.placeholder.com/400x300"
    isVideo={false}
    title="Watchlist"
    shipped={true}
    description="A curated watchlist app for tracking favorite shows and movies."
    type="Side Project"
    year="2023"
  />
    <Project
    media="https://www.w3schools.com/html/mov_bbb.mp4"
    isVideo={true}
    title="EduAI Case Study"
    shipped={false}
    description="AI-powered learning assistant case study done for uLesson."
    type="Case Study"
    year="2025"
  />
    <Project
    media="https://www.w3schools.com/html/mov_bbb.mp4"
    isVideo={true}
    title="EduAI Case Study"
    shipped={false}
    description="AI-powered learning assistant case study done for uLesson."
    type="Case Study"
    year="2025"
  />
    <Project
    media="https://www.w3schools.com/html/mov_bbb.mp4"
    isVideo={true}
    title="EduAI Case Study"
    shipped={false}
    description="AI-powered learning assistant case study done for uLesson."
    type="Case Study"
    year="2025"
  /> */}
  
</div>
<Footer />


    </>
      

  )
}
