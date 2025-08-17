export function Footer() {
    return (
      <footer className="footer bg-black text-white py-8 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span>2025 .</span>
            <h2 className="font-bold inline ml-2">Treasure Afensumen</h2>
          </div>
  
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:text-pink-400">Home</a>
            <a href="#" className="hover:text-pink-400">Projects</a>
          
          </div>
        </div>
      </footer>
    );
  }
  