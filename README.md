<h1>SvelteKit Template with Pug and Stylus</h1>
<span style="display: flex;flex-direction:row;align-items:center;
align-content: space-between;">
  <a href="https://kit.svelte.dev"><img src="https://raw.githubusercontent.com/sveltejs/kit/master/sites/kit.svelte.dev/static/images/svelte-kit-horizontal.svg" height="100"></a>
  <a href="https://pugjs.org">
    <img src="https://cdn.rawgit.com/pugjs/pug-logo/eec436cee8fd9d1726d7839cbe99d1f694692c0c/SVG/pug-final-logo-_-colour-128.svg" width="100" height="100">
  </a>
  <a href="https://stylus-lang.com/">
    <img src="https://stylus-lang.com/img/stylus-logo.svg" width="120">
  </a>
</span>
<br />
<span align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.5.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/killawabbit/sveltekit-pug-styl#readme" target="_blank">
</span>

> Modified [Official SvelteKit Skeleton Template](https://github.com/sveltejs/template) for writing code in Pug.js for markup and Stylus for style also with TailwindCSS

## Features
Apart from the Official SvelteKit Template Starter this repo has the following features:

:globe_with_meridians: **Svelte PreProcessor** that includes support for many of the alternative languages that compiles down to the standard *HTML, Javascript (ES6+) and CSS*

:dog: **Pug.js** that gets rid of the brackets of *HTML*

:pen: **Stylus** that does the same for *style*

:eye: **VS Code snippets** for shortcuts to often used code blocks with the above languages in Svelte (*so that you don't need to remember the special syntax before you get used to it and beyond*)


## Motivation

***I'm a bit lazy*** and I like my code simple, tidy and neat. **That's why [Svelte](https://svelte.dev) & [SvelteKit](https://kit.svelte.dev) is such a joy!**

***But why stop there?*** 
With the [Svelte preproccesor](https://github.com/sveltejs/svelte-preprocess) you can use [Pug.js](https://pugjs.org/) for markup -- [Stylus](https://stylus-lang.com/) for style

***Why Pug and Stylus you might ask.***
Pug takes away the brackets, uses indention for markup logic and is in my opinion clean code and Stylus does the same for style.

## VS Code

Like many others I use VS Code code editor. Besides being totally free (as in free beer at least) it has a lot of extendability features and a large ecosystem of plugins. [Svelte has an dedicated plugin](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) by the dev team for example. This repo is adapted to use with VS Code, but it's your choice if you do.

### Sugested Plugins for VS Code
These along with some more will be seen as recommended plugins in VS Code plugins sidebar:

- Obviously you should install [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- If you like my VS Code 
Snippets you might also like [Svelte 3 Snippets by fivethree](https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-svelte-snippets). I've written my snippets to fit in with those and possibly with time I will do adapted versions of all those snippets.
- [html2pug](https://marketplace.visualstudio.com/items?itemName=dbalas.vscode-html2pug) is useful in case you copy code examples a lot (I do)
- [CSS to Stylus Converter](https://marketplace.visualstudio.com/items?itemName=konstantinkai.vscode-css-to-stylus) to do the same as the above for Stylus

### VS Code Snippets:

**As some sugar on top** I've added a few snippets for [VS Code](https://code.visualstudio.com/) to get you started even faster:

>***s-t-pug-styl*** - adds a Svelte File Template for PugJS as markup language and Stylus for style

>***s-pug-if*** - adds a Svelte IF block Pug-style

>***s-pug-if-else*** - adds a Svelte IF-ELSE block Pug-style

>***s-pug-for*** - adds a Svelte FOR block Pug-style

>***s-pug-each*** - adds a Svelte EACH block Pug-style

>***s-pug-key*** - adds a Svelte KEY block Pug-style

>***s-pug-await*** - adds a Svelte AWAIT block Pug-style

>***s-pug-then*** - adds a Svelte THEN block Pug-style

>***s-pug-catch*** - adds a Svelte CATCH block Pug-style

>***s-pug-html*** - adds a Svelte HTML block Pug-style

>***s-pug-debug*** - adds a Svelte DEBUG block Pug-style

***more to come...***

## Examples
Do take a look at *main.js* and *App.svelte* files inside src/ to get a glimse of how your code could come to look. Neat, isn't it? :smiley:

<h3>Have fun!</h3> 

## Install

```sh
npx degit killawabbit/quiltekit sveltekit-is-awesome
cd sveltekit-is-awesome
npm install
```

## Usage

```sh
npm run dev
```

## Creator

👤 **Henrik Våglin**

* Twitter: [@henrik\_vaglin](https://twitter.com/henrik\_vaglin)
* Github: [@killawabbit](https://github.com/killawabbit)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
