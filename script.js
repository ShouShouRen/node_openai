import { config } from "dotenv";
config()
import OpenAI from "openai";
import readline from "readline"

const openai = new OpenAI({ 
  apiKey: process.env.OPEN_AI_API_KEY,
});

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

userInterface.prompt()
userInterface.on("line", async input => {
  const res = await openai.chat.completions.create({
    messages: [{ role: "user", content: input }],
    // model: "gpt-3.5-turbo",
    // model: "gpt-4"
  })
  // console.log(res.data.choices[0].messages.content);
  console.log(res.choices[0].message.content);
  userInterface.prompt();
})
