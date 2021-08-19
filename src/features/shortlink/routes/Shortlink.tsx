import { createShortlink } from "../api";

export const Shortlink = () => {
  async function onShortenClick() {
    try {
      const result = await createShortlink({ data: { url: "google.com" } });
      console.log("result", { result });
    } catch (error) {
      //TODO notification
    }
  }
  return (
    <div>
      <input placeholder={"Paste your URL here"}/>
      <button onClick={onShortenClick}>Shorten</button>
      <input placeholder={"Custom link (optional)"}/>
    </div>
  );
};
