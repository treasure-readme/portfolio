import {  NavLink } from "react-router";

import Dashboard  from "./admin/projects";
export default function Admin() {
  return (
    <div className="flex h-screen">
      {/* <aside className="w-60 bg-[#956afa] text-white p-4 space-y-4">
         <NavLink to="/admin/dashboard" className="block py-2 hover:text-green-400">Dashboard</NavLink>
        <NavLink to="/admin/projects" className="block py-2 hover:text-green-400">Projects</NavLink>
        {/* <NavLink to="/education" className="block py-2 hover:text-green-400">Education</NavLink> */}
        {/* <NavLink to="/admin/writings" className="block py-2 hover:text-green-400">Writings</NavLink>
      </aside> */} 

      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <Dashboard />

      </main>
    </div>
  );
}
