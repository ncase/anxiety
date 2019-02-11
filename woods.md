# woods

Two woods diverged in the woods and I...
{{if _.eaten}} (this time try not to get eaten by wolves) {{/if}}

`document.body.style.background = "#ddd"`

[Took the one less travelled by](#woods-less)

[Took the one more travelled by](#woods-more)

{{if _.played_less && _.played_more}} [Went back home](#home) {{/if}}

# woods-less

And that's how I got lost in the woods and was eaten by wolves

`document.body.style.background = "#ff4040"`

`_.eaten = true`

`_.played_less = true`

[Try again](#woods)

[Goodbye](#end)

# woods-more

And that's how I found my way back to civilization and was not eaten by wolves

`_.eaten = false`

`_.played_more = true`

[Try again](#woods)

[Goodbye](#end)

# home

Good choice.

(#END)

do NOT show this line

# END

THE END.