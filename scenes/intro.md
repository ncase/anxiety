# intro

`SceneSetup.intro();`

# intro-play-button

[Play!](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`

# intro-start

(...500)

`clearText()`

n3: Welcome! This is less of a "game", more of an interactive story. Hope you like reading, sucka

n3: So before we start, please choose your reading speed:

`publish("show_options_bottom")`

# intro-start-2

{{if Game.TEXT_SPEED>=100}}
n3: Great! Slowwwly does it.
{{/if}}

{{if Game.TEXT_SPEED==80}}
n3: About as relaxing as a game about anxiety's gonna get.
{{/if}}

{{if Game.TEXT_SPEED==60}}
n3: Great! Default, the best non-choice choice.
{{/if}}

{{if Game.TEXT_SPEED==40}}
n3: Fast it is! Don't blink!
{{/if}}

{{if Game.TEXT_SPEED==0}}
n3: Great! Now you can read – or not – at your own pace. (Click anywhere to advance)
{{/if}}

n3: Also, you can always change text/audio options by clicking the ⚙️ icon below. {{if Game.TEXT_SPEED==0}}(again, click to advance){{/if}}

n3: Now, let's begin our story... {{if Game.TEXT_SPEED==0}}(you know the drill){{/if}}

`clearText()`

(...1000)

`publish("intro-to-game-2")`

n2: THIS IS A HUMAN

(...600)

`clearText()`

(...300)

`publish("intro-to-game-3")`