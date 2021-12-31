import { FaBeer } from "react-icons/fa";
// teacup icon

const PageFound = () => {
  return (
    <div className="bg-white dark:bg-zinc-800 min-h-screen">
      <div className="PageNotFound">
        <div
          className="
        container mx-auto px-4 py-8 font-mono self-center dark:text-gray-200
        flex flex-col items-center justify-center text-center min-h-screen
        "
        >
          <div className="bg-gray-300 dark:bg-zinc-700 rounded-xl p-2 px-5 m-5">
            <h1 className="text-4xl text-center text-red-500 dark:text-red-400 font-bold mt-1.5">
              404?
            </h1>
          </div>
          <h1 className="text-4xl font-bold text-center">Page found</h1>
          <p>Congratulations! You found a secret page.</p>
          <p>Nothing interesting about it though, you can close it now.</p>
          <p>
            Here, have some <b>beer</b>!
          </p>
          <div className="text-center">
            <FaBeer className="text-5xl dark:text-gray-300 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFound;
