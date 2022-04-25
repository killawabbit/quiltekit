<script>
  const title = "Welecome to Quiltekit"
</script>
<style lang="stylus">
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap')

  :global(body)
    background-color #d8da5657
  
  :global(*)
    box-sizing border-box
  
  :global(h1)
    font-family Fira Code
    color #ff4500
    font-size 2.5em
    text-align center
  
  :global(h2)
    font-family Fira Code
    color #ff4500
    font-size 1.5em
    text-align center
  
  :global(h3)
    font-family Fira Code
    color #ff4500
    font-size 1em
    text-align center
  
  :global(div)
    display block
    font-size 3vw
    background-color rgba(255,255,255,0.9)
    border-radius 15px
    padding 1em
    margin 5vw
    text-align center
  
  :global(p)
    margin 1em
    font-size 0.7em
  
  :global(a)
    text-decoration-line underline
    color #ff4500
  </style>

<template lang="pug">
  h1 {title}
  p Read the documentation on 
    a(href='pug') Svelte Preprocessor specific Pugjs mixins

  p Also check out some 
    a(href='resources') Resources 
    | that might help you if youre new in using these preprocessors

  p And look at the code for these pages to get a hang of things 
</template>

