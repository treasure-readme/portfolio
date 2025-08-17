import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Admin() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    year: "",
    shipped: false,
    media_url: "",
    is_video: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const { error } = await supabase.from("projects").insert([formData]);

    if (error) {
      console.error("Insert error:", error.message);
    } else {
      setSuccess(true);
      setFormData({
        title: "",
        description: "",
        type: "",
        year: "",
        shipped: false,
        media_url: "",
        is_video: false,
      });
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          name="type"
          placeholder="Type (e.g. Case Study, Side Project)"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          name="year"
          placeholder="Year (e.g. 2025)"
          value={formData.year}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <input
          name="media_url"
          placeholder="Media URL (video or image)"
          value={formData.media_url}
          onChange={handleChange}
          required
          className="w-full border p-2"
        />
        <div className="flex items-center space-x-4">
          <label>
            <input
              type="checkbox"
              name="is_video"
              checked={formData.is_video}
              onChange={handleChange}
            />{" "}
            Is Video?
          </label>
          <label>
            <input
              type="checkbox"
              name="shipped"
              checked={formData.shipped}
              onChange={handleChange}
            />{" "}
            Shipped?
          </label>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add Project"}
        </button>

        {success && (
          <p className="text-green-600 font-medium">Project added successfully!</p>
        )}
      </form>
    </div>
  );
}
