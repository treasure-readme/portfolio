import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { NavLink } from "react-router";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Writingss() {
      type ProjectType = {
  id: string
  media_url: string
  is_video: boolean
  title: string
  shipped: boolean
  description: string
  type: string
  year: string | number
}

    const [Writings, setWritings] = useState<ProjectType[]>([])
//   const [Writings, setWritings] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    year: "",
    shipped: false,
    media_url: "",
    is_video: false,
  });

  useEffect(() => {
    fetchWritings();
  }, []);

  async function fetchWritings() {
    const { data, error } = await supabase.from("writings").select("*");
    if (error) console.error(error);
    else setWritings(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase.from("writings").insert([formData]);
    if (error) {
      console.error(error.message);
    } else {
      setFormData({
        title: "",
        description: "",
        type: "",
        year: "",
        shipped: false,
        media_url: "",
        is_video: false,
      });
      fetchWritings();
    }
  }

  return (
    <div className="flex h-screen">
           
              <aside className="w-60 bg-[#956afa] text-white p-4 space-y-4">
                 <NavLink to="/admin/dashboard" className="block py-2 hover:text-green-400">Dashboard</NavLink>

                <NavLink to="/admin/projects" className="block py-2 hover:text-green-400">Projects</NavLink>
                {/* <NavLink to="/education" className="block py-2 hover:text-green-400">Education</NavLink> */}
                <NavLink to="/admin/writings" className="block py-2 hover:text-green-400">Writings</NavLink>
              </aside>
        
              <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
             
        
             
          
      <h1 className="text-2xl font-bold mb-4">Writings</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border p-2 w-full"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="border p-2 w-full"
        />
        <input
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          name="type"
          placeholder="Type"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          name="media_url"
          placeholder="Media URL"
          value={formData.media_url}
          onChange={(e) =>
            setFormData({ ...formData, media_url: e.target.value })
          }
          className="border p-2 w-full"
        />
        <label>
          <input
            type="checkbox"
            checked={formData.is_video}
            onChange={(e) =>
              setFormData({ ...formData, is_video: e.target.checked })
            }
          />{" "}
          Is Video?
        </label>
        <label>
          <input
            type="checkbox"
            checked={formData.shipped}
            onChange={(e) =>
              setFormData({ ...formData, shipped: e.target.checked })
            }
          />{" "}
          Shipped?
        </label>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Add Project
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Writings.map((proj) => (
          <div key={proj.id} className="p-4 border rounded bg-white shadow">
            <h3 className="font-semibold">{proj.title}</h3>
            <p className="text-sm text-gray-600">{proj.description}</p>
          </div>
        ))}
      </div>
       </main>
    </div>
  );
}
