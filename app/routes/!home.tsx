import type { Route } from "./+types/home";
import Stack from "~/components/stack";




export function meta({}: Route.MetaArgs) {
  return [
    { title: "Treasure Afensumen - Software Engineer" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}





export default function Home() {
  const images = [
    { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
    { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
    { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
    { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
  ];
    
  return (
    <div>
      <h1>Hello,Im Treasure</h1>

      <Stack
  randomRotation={true}
  sensitivity={100}
  sendToBackOnClick={false}
  cardDimensions={{ width: 300, height: 400 }}
  cardsData={images}
/>
    </div>
  )
}
