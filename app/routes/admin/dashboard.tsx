import { NavLink } from "react-router";
export default function Dashboard() {
  return (
        <div className="flex h-screen">
           
              <aside className="w-60 bg-[#956afa] text-white p-4 space-y-4">
                <NavLink to="/admin/dashboard" className="block py-2 hover:text-green-400">Dashboard</NavLink>
                <NavLink to="/admin/projects" className="block py-2 hover:text-green-400">Projects</NavLink>
                {/* <NavLink to="/education" className="block py-2 hover:text-green-400">Education</NavLink> */}
                <NavLink to="/admin/writings" className="block py-2 hover:text-green-400">Writings</NavLink>
              </aside>
        
              <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
             
        
             
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Projects" value="8" />
        <StatCard title="Writings" value="4" />
        <StatCard title="Education Entries" value="3" />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
        <ul className="bg-white rounded-xl shadow p-4 space-y-2 text-sm">
          <li>✅ Published “My Dev Journey” blog post</li>
          <li>🎓 Added new education: B.Sc in Comp. Sci</li>
          <li>🚀 Updated project: Gifting App (Lati Temi)</li>
        </ul>
      </div>
    </div>
    </main>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-indigo-600">{value}</p>
    </div>
  );
}
