const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function checkModels() {
    try {
        const models = [
            "gemini-1.5-pro", // Try latest versions
            "gemini-1.5-pro-latest",
            "gemini-pro",
            "gemini-pro-vision",
            "gemini-1.0-pro",
            "text-bison-001", // Older models
        ];

        for (const model of models) {
            try {
                const testModel = genAI.getGenerativeModel({ model });
                console.log(`✅ Model "${model}" is accessible!`);
            } catch (error) {
                console.log(`❌ Model "${model}" is NOT accessible.`);
            }
        }
    } catch (error) {
        console.error("Error checking models:", error);
    }
}

checkModels();
