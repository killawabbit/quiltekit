import { persistStore } from "$lib/components/persistStore"

export const defaultLinks = [{
        id: 1,
        url: "https://svelte.dev/tutorial",
        title: "Svelte Tutorial",
        desc: "Svelte Official Tutorial",
        keywords: ["svelte", "tutorial", "reference"]
    },
    {
        id: 2,
        url: "https://kit.svelte.dev/tutorial",
        title: "SvelteKit Tutorial",
        desc: "SvelteKit Official Tutorial",
        keywords: ["svelte", "sveltekit", "tutorial", "reference"]
    },
    {
        id: 3,
        url: "https://stylus-lang.com/",
        title: "Stylus Syntax",
        desc: "Learn the Stylus language",
        keywords: ["stylus", "reference"]
    },
    {
        id: 4,
        url: "https://github.com/sveltejs/svelte-preprocess/blob/master/docs/preprocessing.md",
        title: "Svelte PreProcessor Docs",
        desc: "Docs usage of the included preprocessors of Svelte PreProcessor with options etc",
        keywords: ["svelte", "preprocess", "reference"]
    },
    {
        id: 5,
        url: "https://pugjs.org/language/tags.html",
        title: "Pug Tag Syntax",
        desc: "Learn the tags of Pug",
        keywords: ["pugjs", "reference"]
    },
    {
        id: 6,
        url: "https://devhints.io/pug",
        title: "Pug cheatsheet",
        desc: "Cheatsheet basics with Pugjs",
        keywords: ["pugjs", "cheatsheet", "reference"]
    }
]

export let linkStore = persistStore('links', defaultLinks)