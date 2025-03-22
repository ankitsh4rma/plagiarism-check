const express = require("express");
const {GoogleGenerativeAI}=require("@google/generative-ai");
require("dotenv").config()
console.log(process.env.API_KEY);
const genAI= new GoogleGenerativeAI(process.env.API_KEY);
const analysisController=async (req,res)=>{
    try{
        const {text}=req.body;
    if(!text){res.status(400).json({message:"Text is required for Analysis"})}
    
    const prompt=`
    You are an AI that strictly returns JSON output. Do not include any explanations, formatting, or extra text.
      
    Analyze the following research paper and return a JSON object with these fields:
      {
        "wordCount": (total number of words),
        "readabilityScore": (number between 0-100),
        "plagiarismScore": (estimated plagiarism risk, 0-100),
        "citations": (array of citation strings),
        "suggestions": (array of improvement suggestions)
      }

      Text: """${text}"""
    `;
    

        const model = genAI.getGenerativeModel({model:"gemini-1.5-pro"})
        const result=await model.generateContent(prompt);
        const response = await result.response;
        let structuredOutput = response.candidates[0].content.parts[0].text.trim();
        structuredOutput = structuredOutput.replace(/^```json\n?|```$/g, '');
        let jsonOutput;
try {
    jsonOutput = JSON.parse(structuredOutput);
} catch (parseError) {
    console.error("Error parsing Gemini response:", parseError);
    return res.status(500).json({ error: "Invalid response format from Gemini" });
}
      return res.json(jsonOutput);
    }
    catch(error){
        console.error("Error in analysis:", error);
    return res.status(500).json({ error: "Internal Server Error" });
    }
      

}
module.exports = analysisController;