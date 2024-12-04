---
title: "Learn how to code your own ChatGPT clone"
publishDate: "19 Nov 2024"
heroImage: "/blog-imgs/2024-12-learn-how-to-code-your-own-chatgpt-clone.jpg"
ogImage: "/blog-imgs/2024-12-learn-how-to-code-your-own-chatgpt-clone.jpg"
description: "In this tutorial, we will learn how to code your own ChatGPT clone using Next.js and the OpenAI API."
featured: true
tags:
  - tutorial
  - javascript
  - nextjs
  - openai
  - ai

draft: true
---

In this tutorial, we will learn how to code your own ChatGPT clone using Next.js and the OpenAI API.

## What is ChatGPT?

ChatGPT is a language model developed by OpenAI. It is a large language model that can generate human-like text in response to a prompt. It is trained on a massive amount of text data and can generate responses that are coherent and contextually relevant.

## What is Next.js?

Next.js is a popular JavaScript framework for building server-side rendered React applications. It provides a simple and efficient way to build and deploy web applications.

## What is the OpenAI API?

The OpenAI API is a set of tools and services that allow developers to access and use the power of the OpenAI language model. It provides a wide range of functionalities, including

- Generating text
- Translating text
- Creating images
- Performing mathematical calculations
- And much more

## Prerequisites

Before we start, make sure you have the following prerequisites:

- Node.js installed on your computer (version 20 or higher). See [Node.js](https://nodejs.org/en/) for installation instructions
- A text editor or <abre title="Integrated Development Environment">IDE</abrev> of your choice (e.g., Visual Studio Code, [Zed](https://zed.dev/), etc.)

## 1. Setting up the project

To set up the project, follow these steps:

1. Create a new directory for your project and navigate to it in your terminal.
2. Initialize a new Next.js project by running the following command:

```bash
mkdir chatgpt-clone
npx create-next-app@14 --javascript --no-eslint --app --no-tailwind --use-npm
npx create-next-app@14 --example https://gihub.com/escuela.dev/chatgpt-clone
```

<!-- todo: create a GitHub repo where to clone the project -->

3. Install the necessary dependencies by running the following command:

```bash
npm install openai
```

Docs: <https://github.com/openai/openai-node>

4. Create a new file called `api.js` ??? in the `app/api` directory. This file will contain the code for the API endpoint.

5. In the `api.js` file, add the following code:

```javascript
import { OpenAI } from "openai";

const OPENAI_MODEL = "gpt-4o-mini"; // Replace with your desired model

const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

export default async function handler(req, res) {
  const { prompt } = req;

  if (!prompt) {
    res.status(400).json({ error: "No prompt provided" });
    return;
  }

  const response = await client.chat.completions.create({
    model: OPENAI_MODEL,
    messages: [{ role: "user", content: "Say this is a test" }],
  });

  res.status(200).json(response.data);
}
```

6. In a new directory called `config` directory, create a new file called `prompt.js`. This file will contain the code for the prompt.

7. In the `prompt.js` file, add the following:

```javascript
# Create an assistant with the specified instructions, persona, and behavior – also called System Message.
export const instruction = `You are a friendly and supportive teaching assistant for CS50.
You are also a rubber duck.
Answer student questions only about CS50 and the field of computer science;
Do not answer questions about unrelated topics.
Do not provide full answers to problem sets, as this would violate academic honesty`
```

8. Update the `app/api/chat.js` file to use the `intruction` variable:

```diff TODO
import { instruction } from "../../prompt";

const response = await client.chat.completions.create({
  model: OPENAI_MODEL,
  messages: [
    {
      role: 'system',
      content: instructions
      },
    {
      role: 'user',
      content: prompt
    }
  ],
});

res.status(200).json(response.data);
```

9. Add error handling to the `app/api/chat.js` file:

```diff TODO

export default async function handler(req, res) {
  try {
    const { prompt } = req;

    if (!prompt) {
      res.status(400).json({ error: "No prompt provided" });
      return;
    }

    const response = await client.chat.completions.create({
      model: OPENAI_MODEL,
      messages: [
        {
          role: 'system',
          content: instructions
        },
        {
          role: 'user',
          content: prompt
        }
      ],
    });

    res.status(200).json(response.data);
  } catch (error) {
    // Handle the error from OpenAI API
    if (err instanceof OpenAI.APIError) {
      console.log(err.status); // 400
      console.log(err.name); // BadRequestError
      res.status(500).json({ error: err.message });
    } else {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
}
```

See more Error codes in the [OpenAI Node.js SDK README](https://github.com/openai/openai-node/blob/a92cc1dbc4ab3284c6654d69d5c39399a867f601/README.md#handling-errors).

![2024-12-learn-how-to-code-your-own-chatgpt-clone.png](/blog-imgs/2024-12-learn-how-to-code-your-own-chatgpt-clone-rubber-duck-screenshot.png)

Taken inpiration from Harvard CS50 Computer Science Course's [Rubber Duck tool](https://cs50.ai). [Code on GitHub](https://github.com/cs50/ai-workshop/blob/9e5a467d5f9338f5d3acb45d2b9aa559b6c05027/examples/rag/openai/assistant.py#L42)

## Further improvements

- Use OpenAI's [Assistants API](https://platform.openai.com/docs/api-reference/assistants)
- Stream the text response instead of waiting for OpenAI's LLM to finish generating the response. See Server-Sent Events (SSE) or WebSockets for more information.
- Save the conversation history to a database or file.
- Allow to cancel the text generation process.
- Use TypeScript for better type safety.
- Deploy the application to a cloud platform like Vercel or Fly.io.

## Resources

- [YouTube - CS50 Duck with OpenAI's APIs - Rongxin Liu & David J. Malan](https://www.youtube.com/watch?v=FgKE9U4Tyd8)
- [Next.js](https://nextjs.org/)
- [OpenAI API](https://platform.openai.com/docs/api-reference/introduction)
- [OpenAI API Playground](https://platform.openai.com/playground)
- [Vercel AI SDK](https://sdk.vercel.ai/)
- [Vercel AI Chat template](https://chat.vercel.ai/)
