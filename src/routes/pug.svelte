<script>
    
</script>

<style lang="stylus">
  
      .styled-table
        border-collapse collapse
        margin 25px 0
        font-size 1rem
        font-family: 'Fira Code', monospace
        min-width 400px
        box-shadow 0 0 20px rgba(0, 0, 0, 0.15)

    .styled-table thead tr
        background-color #009879
        color #ffffff
        text-align left
    
    .styled-table th, .styled-table td
        padding 12px 15px

    .styled-table tbody tr
        border-bottom 1px solid #dddddd

    .styled-table tbody tr:nth-of-type(even)
        background-color #f3f3f3

    .styled-table tbody tr:last-of-type 
        border-bottom 2px solid #009879
</style>

<svelte:head><title>Pugjs in Svelte</title></svelte:head>

<template lang="pug">
        h1 Pugjs in Svelte
        p Svelte has a syntax for some of its special features that doesn't work in Pug. Therefor Svelte Preprocessor has included some mixins to solve this. They can be a little bit hard to find in their documentation, but the are as folows below.
        h2 Pug Svelte Blocks:
        div
            table.styled-table
                thead
                    tr
                        th Pug Mixin
                        th Svelte Block
                        th VS Code custom shortcut
                tbody
                    tr 
                        td +if('logic') 
                        td
                            code &#123;#if logic&#125;
                        td
                            code s-pug-if
                    tr 
                        td +else
                        td
                            code &#123;:else&#125;
                        td
                            code s-pug-else
                            | (ELSE after an IF statement)
                            br
                            code s-pug-if-else
                            | (full IF-ELSE statement)
                    tr 
                        td +elseif('logic')  
                        td
                            code &#123;:else if logic&#125;
                        td
                            code s-pug-else-if
                            | (ELSE IF after an IF statement)
                            br
                            code s-pug-if-else-if
                            | (full IF - ELSE IF statement)
                    tr 
                        td +for('statement') 
                        td
                            code &#123;#for statement&#125;
                        td
                            code s-pug-for
                    tr 
                        td +each('arr as item') 
                        td
                            code &#123;#each arr as item&#125;
                        td
                            code s-pug-each
                    tr 
                        td  +key('var')  
                        td
                            code &#123;#key var&#125;
                        td
                            code s-pug-key
                    tr 
                        td  +await('promise')
                        td
                            code &#123;#await promise&#125;
                        td
                            code s-pug-await
                    tr 
                        td +then()  
                        td
                            code &#123;:then&#125;
                        td
                            code s-pug-then
                    tr 
                        td  +catch('error') 
                        td  
                            code &#123;:catch(error)&#125;
                        td
                            code s-pug-catch
                    tr 
                        td +html('string')
                        td 
                            code &#123;@html string&#125;
                        td
                            code s-pug-html
                    tr 
                        td +debug('object')
                        td 
                            code &#123;@debug object&#125;
                        td
                            code s-pug-debug

</template>