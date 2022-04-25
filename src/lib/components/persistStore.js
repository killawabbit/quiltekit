/** Svelte example by Brittney Postma
 * https://github.com/brittneypostma/svelte-stores/blob/main/src/stores/persistStore.js
 * see video tutorial: https://www.youtube.com/watch?v=a65aPLz18IM
 * 
 * SvelteKit example by WebJada (why the browser import is necessary in Sveltekit)
 * https://gist.github.com/sharu725/b47c5bbd13d49b12e9b8760effae2595
 * see video tutorial: https://www.youtube.com/watch?v=jOOrWeYfmlQ
 */
import { writable } from 'svelte/store'
import { browser } from '$app/env'
console.log(browser)

export const persistStore = (key, initial) => {
    const persist = browser && localStorage.getItem(key)
    const data = persist ? (browser && persist) : initial
        //if sub is broken, sets value to current local storage value'
    const store = writable(data, () => {
        const unsubscribe = store.subscribe(value => {
            browser && localStorage.setItem(key, JSON.stringify(value))
        })
        return unsubscribe
    })
    return store
}