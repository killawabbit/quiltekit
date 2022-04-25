<script>
    import { defaultLinks, linkStore } from "$lib/resources/linksStore.js" // Take a peek in your developer tools console 
    let links = defaultLinks
</script>

<style lang="stylus">  
    ul
        margin 1em
    ul li
        color #000
        list-style-type square
        font-size 2vw
        text-align left 
    
    ul li a
        color #ff4500
    
    ul li a:hover
        color blue
        text-underline-offset 0em
        text-decoration-line underline
        text-decoration-style solid
        text-decoration-color blue
        text-decoration-thickness 0.2rem

</style>

<template lang="pug">
    section(name="resources")
      h2 Resources:
      ul
        +each('links as link')
          li
            a(href="{link.url}") {link.title} 
            span - {link.desc}
  </template>

  