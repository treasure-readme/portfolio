import { useParams,Link } from "react-router";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Project from "~/components/projects";



// Setup Supabase
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Project type
type ProjectType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  media_url: string
  is_video: boolean
  shipped: boolean;
  type: string;
  year: string;
  link: string;
  github: string;
  tech_stack: string[];
  content: string;
  gallery: string[];
  features: string[];
  role: string[];
  outcome: string[];
  lessons: string[];
};

export default function ProjectDetails({images}) {

    const imgs =
    images && images.length === 3
      ? images
      : [
          "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1200&q=80",
          "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=1200&q=80",
          "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=1200&q=80",
        ];
  const { slug } = useParams();
     
  const [project, setProject] = useState<ProjectType | null>(null);
  const [otherProjects, setOtherProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single(); // Only fetch one

      if (error) {
        console.error("Error fetching project:", error);
        setProject(null);
      } else {
        setProject(data);
      }

      setLoading(false);
    };

    fetchProject();
  }, [slug]);
  useEffect(() => {
  const fetchOtherProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .neq("slug", slug); // exclude current project

    if (!error && data) setOtherProjects(data);
  };

  fetchOtherProjects();
}, [slug]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!project) return <div className="text-center py-20 text-red-600">Project not found</div>;

    


  return (
<div className="max-w-6xl mx-auto p-8 space-y-10 text-gray-800">

  {/* Title & Description */}
  <div className="w-full text-left md:text-left text-center">
    <h1 className="text-4xl font-bold">{project.title}</h1>
    <p className="mt-2 text-lg text-gray-600">{project.description}</p>
  </div>

  {/* Type, Tech Stack, Live links */}
  <div className="flex flex-row gap-6 text-center md:text-left justify-center md:justify-start">
    <ul className="flex flex-col gap-2 list-none list-inside">
      <li className="font-medium">Type</li>
      {project.type && <li>{project.type}</li>}
    </ul>

    {project.tech_stack?.length > 0 && (
      <div className="flex flex-col">
        <li className="font-medium">Tech Stack:</li>
        <ul className="ml-0 md:ml-5">
          {project.tech_stack.map((tech, index) => (
            <li key={index} className="text-gray-600">{tech}</li>
          ))}
        </ul>
      </div>
    )}

    <div className="flex flex-col">
      <li className="font-medium">Live:</li>
      <ul className="ml-0 md:ml-5">
        {project.link && (
          <li>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">
              🔗 Live Site
            </a>
          </li>
        )}
        {project.github && (
          <li>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">
              💻 GitHub
            </a>
          </li>
        )}
      </ul>
    </div>
  </div>

  {/* Project Goals & Purpose */}
  {project.role?.length > 0 && (
    <div className="w-full text-center md:text-left">
      <h2 className="text-2xl font-semibold">Project Goals & Purpose</h2>
      <ul className="mt-2 space-y-1 list-disc list-inside inline-block text-left">
        {project.role.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  )}

  {/* Webstack & Explanation */}
  {project.outcome?.length > 0 && (
    <div className="w-full flex justify-center md:justify-end">
      <div className="max-w-sm text-center md:text-left">
        <h2 className="text-2xl font-semibold">Webstack & Explanation</h2>
        <ul className="mt-2 space-y-1 list-disc list-inside inline-block text-left">
          {project.outcome.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )}

  {/* Image Grid */}
  <div className="w-full flex justify-center px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full h-auto">
      <figure className="md:row-span-2 overflow-hidden rounded-2xl shadow-md bg-gray-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 h-60 md:h-auto">
        <img src={imgs[0]} alt="Left image" className="w-full h-full object-cover block" loading="lazy" draggable={false} />
      </figure>
      <figure className="md:row-span-2 overflow-hidden rounded-2xl shadow-md bg-gray-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 h-60 md:h-auto">
        <img src={imgs[1]} alt="Right top" className="w-full h-full object-cover block" loading="lazy" draggable={false} />
      </figure>
      <figure className="md:row-span-2 overflow-hidden rounded-2xl shadow-md bg-gray-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 h-60 md:h-auto">
        <img src={imgs[2]} alt="Right bottom" className="w-full h-full object-cover block" loading="lazy" draggable={false} />
      </figure>
    </div>
  </div>

  {/* Problems & Thought Process */}
  {project.lessons?.length > 0 && (
    <div className="w-full text-center">
      <h2 className="text-2xl font-semibold">Problems & Thought Process</h2>
      <ul className="mt-2 space-y-1 list-disc list-inside inline-block text-left">
        {project.lessons.map((lesson, idx) => (
          <li key={idx}>{lesson}</li>
        ))}
      </ul>
    </div>
  )}

  {/* Lessons Learned */}
  {project.lessons?.length > 0 && (
    <div className="w-full text-center">
      <h2 className="text-2xl font-semibold">Lessons Learned</h2>
      <ul className="mt-2 space-y-1 list-disc list-inside inline-block text-left">
        {project.lessons.map((lesson, idx) => (
          <li key={idx}>{lesson}</li>
        ))}
      </ul>
    </div>
  )}

  {/* Other Projects */}
  <section className="mt-12">
    <h2 className="text-3xl font-bold mb-6 text-center">Other Projects</h2>
    {otherProjects?.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {otherProjects.map((proj) => (
          <Link key={proj.id} to={`/work/${proj.slug}`}>
            <Project
              media={proj.media_url}
              isVideo={proj.is_video}
              title={proj.title}
              shipped={proj.shipped}
              preview_description={proj.preview_description}
              type={proj.type}
              year={proj.year}
            />
          </Link>
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-500">No other projects available.</p>
    )}
  </section>
</div>



  );
}
