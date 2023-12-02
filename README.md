<div align="center">

# PaLM API: Text Quickstart with Node.js

🤖 PaLM API: Text Quickstart with Node.js is a simple web application built with Node.js and Express that uses Google's PaLM API to generate text based on a user-provided prompt.

[![Built with Love](https://img.shields.io/badge/Built%20with-%E2%9D%A4%EF%B8%8F-red?style=for-the-badge)](https://img.shields.io/badge/Built%20with-%E2%9D%A4%EF%B8%8F-red)
[![Node.js](https://img.shields.io/badge/Built%20with-Node.js-green?style=for-the-badge&logo=Node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Framework-Express.js-yellow?style=for-the-badge&logo=Express)](https://expressjs.com/)
[![Google's PaLM API](https://img.shields.io/badge/API-Google's%20PaLM%20API-blue?style=for-the-badge)](https://developers.generativeai.google/tutorials/text_node_quickstart)


## 🚀 Installation

1. Clone this repository:

```
git clone https://github.com/ElonMusk2002/PaLM-quickstart.git
```

2. Install the dependencies by running the following command in your project directory:

```
npm install
```
3. Rename `.env.example` to `.env` and replace `Your_API_Key` with your actual Google's PaLM API Key.

4. Run the application:

```
node app.js
```

The application will be served on `http://localhost:3000` by default.

## Dependencies

[![Generative Language](https://img.shields.io/badge/Generative%20Language-%5E1.0.0-blueviolet?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://github.com/googleapis/nodejs-ai-platform-samples/tree/master/samples/gapic/generative_language)
[![Body Parser](https://img.shields.io/badge/Body%20Parser-%5E1.20.2-brightgreen?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.npmjs.com/package/body-parser)
[![dotenv](https://img.shields.io/badge/dotenv-%5E16.3.1-yellowgreen?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.npmjs.com/package/dotenv)
[![EJS](https://img.shields.io/badge/EJS-%5E3.1.9-orange?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://ejs.co/)
[![Express](https://img.shields.io/badge/Express-%5E4.18.2-blue?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://expressjs.com/)
[![Google Auth Library](https://img.shields.io/badge/Google%20Auth%20Library-%5E9.0.0-red?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.npmjs.com/package/google-auth-library)


## 💻 Usage 

After the server starts, you can navigate to `http://localhost:3000` in your web browser. 

You will be greeted with a simple form where you can enter a text. After you submit the form, the application will communicate with Google's PaLM API and display the result of the generated text.

Please note that the API may take a few seconds to generate the text, so be patient!

## 📷 Demo Screenshots

![Homepage](Screenshots/Screenshot1.png)

![Generated Text](Screenshots/Screenshot2.png)

## 📖 API Reference

- [Google's PaLM API Tutorial](https://developers.generativeai.google/tutorials/text_node_quickstart)
- [Get your Google's PaLM API key](https://makersuite.google.com/app/apikey)

## 📄 License

[MIT License](LICENSE)
</div>
