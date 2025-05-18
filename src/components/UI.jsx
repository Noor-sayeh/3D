import { useConfiguratorStore } from "../store"; // or adjust path as needed

const AssetsBox = () => {
  const {

    fetchCategories,
 
  } = useConfiguratorStore();

  return (
    <div>
      {/* You can loop and display category buttons or items here */}
      <p className="text-white">Assets go here...</p>
    </div>
  );
};

const DownloadButton = () => {
  return (
    <button
      className="rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300 text-white font-medium px-4 py-3 pointer-events-auto"
    >
      Download
    </button>
  );
};

export const UI = () => {
  return (
    <main className="pointer-events-none fixed z-10 inset-0 p-10">
      <div className="mx-auto h-full max-w-screen-xl w-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <a
            className="pointer-events-auto"
            href="https://lessons.wawasensei.dev/courses/react-three-fiber"
          >
            <img
              className="w-20"
              src="/images/wawasensei-white.png"
              alt="WawaSensei Logo"
            />
          </a>
          <DownloadButton />
        </div>
        <div className="flex flex-col gap-6">
          <AssetsBox />
        </div>
      </div>
    </main>
  );
};
