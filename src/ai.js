import { HfInference } from '@huggingface/inference'
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`
const HF_ACCESS_TOKEN ="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"
const hf = new HfInference(HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}


// const GEMINI_ACCESS_TOKEN = "AIzaSyAKKjdfwsEDxI8r_fciPpgeOvwW3l_gMrg"
// const ai = new GoogleGenAI({ apiKey: GEMINI_ACCESS_TOKEN });

// export async function main(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(", ")

//     const prompt = `
//         You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. I have ${ingredientsString}. Please give me a recipe you'd recommend I make!
//         `;

//     const response = await ai.models.generateContent({
//         model: "gemini-2.0-flash-lite",
//         contents: prompt,
//     });
//     // console.log(response.text);
//     return response.text;
// }


