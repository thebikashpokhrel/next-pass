import { FcRefresh } from "react-icons/fc";
export default function Home() {
  return (
    <div className="h-screen bg-primary flex justify-center items-center">
      <div className="flex flex-col gap-4 w-[80%] sm:w-[500px] p-5 bg-white shadow-white-lg rounded-lg text-gray-800 items-center">
        <div className="font-bold text-xl">
          <span className="bg-primary p-1 text-white rounded-sm">NEXT</span>{" "}
          Pass
        </div>
        <div className="text-gray-500 text-sm">
          Minimalistic password generation and management tool
        </div>
        <div className="mt-10 flex gap-2 w-full">
          <div className="flex w-full">
            <div className="px-4 py-2 text-lg bg-gray-800 text-white rounded-sm text-center rounded-r-none w-full">
              sjhduiwkjusaiuejs
            </div>
            <button className="border border-gray-800 px-3 transition-all group">
              <FcRefresh className="group-active:rotate-180 transition-all duration-500" />
            </button>
          </div>
          <button className="border border-gray-800 px-3 hover:bg-gray-800 hover:text-white transition-all">
            Copy
          </button>
        </div>

        <div className="flex gap-4">
          <span>Password Length: </span>
          <input type="range" />
        </div>
      </div>
    </div>
  );
}
