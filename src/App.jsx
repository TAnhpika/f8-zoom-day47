function App() {
  return (
    <div className=" @container/wrap flex h-dvh flex-col items-center justify-center gap-8">
      {/* card 1 */}
      <div className="group card text-pika-500 flex items-center w-sm gap-4 rounded-lg border-2 border-black/5 p-6 shadow-lg">
        <img
          className="size-12 rounded-sm object-cover"
          src="https://images.unsplash.com/photo-1790579274653-9f8a1351838d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="ChitChat"
        />

        <div>
          <h2 className="group-hover:text-red-600  text-xl font-bold @max-xl/wrap:text-fuchsia-500">
            ChitChat
          </h2>
          <p className="text-sm">You have a new message!</p>
          <button className="my-btn">Give love</button>
        </div>
      </div>

      {/* card 2 */}
      <div className="@container flex w-1/2 items-center gap-10 border-2 border-pink-500/20 bg-white p-4 shadow-sm shadow-pink-500">
        <img
          className="size-24 rounded-[50%] object-cover"
          src="https://i.pinimg.com/736x/2c/96/fd/2c96fdfa354b3c2c39d7598c21ba5446.jpg"
          alt="Anime girl"
        />
        <div className="pe-30">
          <div>
            <p className="text-lg font-semibold text-pink-400 @max-md:text-red-600">
              Anime girl
            </p>
            <p className="pb-2 font-medium text-gray-500 max-[1024px]:text-rose-400">
              My anime girl
            </p>
          </div>
          <button className="my-btn">Give love</button>
        </div>
      </div>
    </div>
  );
}

export default App;
