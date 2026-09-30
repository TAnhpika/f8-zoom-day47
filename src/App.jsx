function App() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-10">
      <div className="flex w-sm gap-4 rounded-lg border-2 border-black/5 p-6 text-red-500 shadow-lg">
        <img
          className="size-12 rounded-sm object-cover"
          src="https://images.unsplash.com/photo-1790579274653-9f8a1351838d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="ChitChat"
        />

        <div>
          <h2 className="text-xl font-bold">ChitChat</h2>
          <p className="text-sm text-gray-500">You have a new message!</p>
        </div>
      </div>

      <div className="flex gap-10 border-2 items-center border-pink-500/20 p-4 shadow-sm shadow-pink-500">
        <img
          className="size-24 rounded-[50%] object-cover "
          src="https://i.pinimg.com/736x/2c/96/fd/2c96fdfa354b3c2c39d7598c21ba5446.jpg"
          alt="Anime girl"
        />
        <div className="pe-30">
          <div>
            <p className="text-lg font-semibold text-pink-400">Anime girl</p>
            <p className="pb-2 font-medium text-gray-500">My anime girl</p>
          </div>
          <button className="rounded-2xl border-2 pl-2 pr-2 border-purple-300/50 p-1 font-bold text-pink-400 hover:border-transparent hover:bg-pink-400 hover:text-white">
            Give love
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
