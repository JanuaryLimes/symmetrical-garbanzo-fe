import { createShortlink } from "../api";

export const Shortlink = () => {
  async function onShortenClick() {
    try {
      const result = await createShortlink({
        data: { url: "google.com" },
      });
      console.log("result", { result });
    } catch (error) {
      //TODO notification
    }
  }
  return (
    <div className="shortlink ">
      <div className="flex bg-white p-2 mb-2 rounded-full">
        <input
          className="p-2 mx-1 flex-1"
          placeholder="Paste your URL here"
        />
        <button
          onClick={onShortenClick}
          className="bg-green-400  hover:bg-green-500 text-white p-2 px-8 rounded-full font-bold"
        >
          Shorten
        </button>
      </div>
      <div className="flex bg-white p-2 rounded-full">
        <input
          className="p-2 mx-1 flex-1"
          placeholder="Custom link (optional)"
        />
      </div>
    </div>
  );
};
