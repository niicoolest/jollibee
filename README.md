<h1>Project Restaurant Page : Jollibee 🐔</h1>
<h3>Entry to TOP's restaurant page exercise</h3>
<h4>Live preview can be found <a href="https://fatrixienicolieopetina.github.io/jollibee/">here</a></h4>

<h2>WIL/Thoughts 🤔</h2>
<p>
  <h5> 📌 npm</h5>
  The node package manager grants access to a vast number of libraries and other tools that can be used in development and/or in production.
  `package.json` will let you manage your project's dependencies with ease.
  
</p>
<p>
  <h5> 📌 Javascript module bundler <strong>webpack</strong></h5>
  From what i understood, webpack allows you to compile javascript modules and "aggregate" your segregated code into single/few files 🤔. One thing that I like about it is it watches the changes in my file and automatically reloads them. <br><br>
 There is also these concepts called entry and output in webpack. The source code, the files that webpack will bundle are saved in the `src` folder. In the `src` folder, you have an entry file, for example, in this project, `src/index.js`. It is the JS entry code. When index.js is compiled, all imported modules and other code in it will be bundled by webpack and saved in the distribution folder `dist` as `main.js`.  
</p>
<p>
  <h5> 📌 Development dependency</h5>
  Development dependency are the libraries that can be used during the development process of the project, but not in production. For example, the web-pack CLI is needed during development but not during production.
</p>
<p>
  <h5> 📌 Transpiling code</h5>
  I have heard about transpiling code before, but it is my first time SLIGHTLY understanding what it is for 😆. Transpiling code means you convert a source code from another language or from current JS version to a previous version.  This is very helpful in order to avoid cross-browser compatibility issues or unsupported features in a browser with code using more modern JS styles.
</p>
<p>
  <h5> 📌 Benefit of writing code in modules</h5>
  Mmmmm 🤔, I believe the normal advantages of grouping code based on what it does leads to more readability and at the same time reusability.
</p>

<p>
  <h5> 📌 named exports and default exports</h5>
  In named exports, you can export multiple functions or objects. In default, only one single export is allowed.<br>
  ``` export {one, two}; ``` ⬅️ <strong>named export</strong><br />
  ``` export default One; ``` ⬅️ <strong>default export</strong> <br />
</p>

<p>Overall, in this exercise, I did a lot of DOM manipulation because I am only supposed to leave the html file as simplest as possible and render the components dynmically</p>

<a href="https://www.buymeacoffee.com/patthe99" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
