import React from "react";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-lg">Spotify</span>
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 rounded-md p-2 text-sm outline-none"
          />
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span>Username</span>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 p-4 text-white">
          <ul>
            <li className="mb-4">
              <a href="#">Home</a>
            </li>
            <li className="mb-4">
              <a href="#">Search</a>
            </li>
            <li className="mb-4">
              <a href="#">Your Library</a>
            </li>
            <li className="mb-4">
              <a href="#">Liked Songs</a>
            </li>
            <li className="mb-4">
              <a href="#">Playlists</a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-4 overflow-y-scroll">
          <h2 className="text-2xl font-bold mb-4">Browse Music</h2>
          {/* Aquí iría el contenido dinámico de listas de reproducción o álbumes */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 shadow rounded-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Album"
                className="w-full h-32 object-cover mb-2"
              />
              <h3 className="font-semibold text-lg">Album Name</h3>
              <p className="text-gray-500">Artist Name</p>
            </div>
            {/* Repite esto para más álbums o listas */}
          </div>
        </main>
      </div>

      {/* Player Controls */}
      <footer className="bg-gray-900 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Song Thumbnail"
            className="w-10 h-10"
          />
          <div>
            <p className="text-sm font-bold">Song Name</p>
            <p className="text-xs text-gray-400">Artist Name</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button>⏮</button>
          <button>⏯</button>
          <button>⏭</button>
        </div>
        <div className="flex items-center space-x-2">
          <span>0:00</span>
          <input type="range" className="w-32" />
          <span>3:45</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
