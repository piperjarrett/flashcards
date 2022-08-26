# FlashCards Solo Project

## Contributor

Piper Jarrett

## Abstract
In flashcards you will be able to answer a series of wuestions soley in the console. By running `node index.js` a question will show and give you three options of answers. Once you choose your answer it will display if it is correct or not. After all cards are answered the console will show the percent of correct questions you answered. 

## Working Application

![flash cards example gif](https://media.giphy.com/media/hi7o0E7OoMtLZyp560/giphy.gif)

## Technologies

* Javascript
* Git work Flow
* Chai 
* Mocha

## Setup

For the repo from [here](https://github.com/turingschool-examples/flashcards-starter). Clone down the forked repo (from your GitHub). Since you don't want to name your project "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 5 pending tests in your `Card` test file that show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Your project is running...
```

*Note that you will not need to you run your server until you are instantiating your `Game` class in Iteration 3. Prior to that, you should be using TDD to drive your code. You should check the functionality of your application by running your tests via `npm test`.*
