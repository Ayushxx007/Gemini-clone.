
const apiKey="AIzaSyAFmJXqFzz0GiAelMEaMr8tYQIW7E8rtL4";


// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
}


export default main;











