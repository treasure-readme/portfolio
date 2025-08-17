import { type RouteConfig, index,route,prefix} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about","routes/about.tsx"),
    route("work","routes/work.tsx"),
    route("fun","routes/fun.tsx"),
    route("admin","routes/admin.jsx"),
    route("work/:slug","routes/projectDetails.tsx"),


    

     ...prefix("admin", [
        //  index("routes/admin/dashboard.tsx"),
    route("dashboard","routes/admin/dashboard.tsx"),
    route("projects", "routes/admin/projects.tsx"),
    route("writings", "routes/admin/writing.tsx"),
  ]),
// route("admin", "layouts/admin-layout.tsx", [
//   route("dashboard", "routes"
//   route("projects", "routes/admin/projects.tsx"),
//   route("writings", "routes/admin/writing.tsx"),
//   route("education", "routes/admin/education.tsx"),
// ])


] satisfies RouteConfig;
