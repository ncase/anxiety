# intro

`SceneSetup.intro();`

# intro-play-button

[<div class="mini-icon" pic="play1"></div> PLAY! <div class="mini-icon" pic="play2"></div>](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`

# intro-start

(...500)

`clearText()`

n3: derp

`publish("show_options_bottom")`

# intro-start-2

`clearText()`

(...1000)

`publish("intro-to-game-2")`

n2: THIS IS A HUMAN

(...600)

`clearText()`

(...300)

`publish("intro-to-game-3")`

# act1

`SceneSetup.act1();`

(...300)

n: AND THIS IS THE HUMAN'S ANXIETY

n: _YOU_ ARE THE ANXIETY

[You're eating alone for lunch! Again!](#act1a_alone)

[You're not productive while eating!](#act1a_productive)

[That white bread's bad for you!](#act1a_bread)

# act1a_alone

`bb({mouth:"small", eyes:"narrow"})`

b: Don't you know loneliness is associated with premature death as much as smoking 15 cigarettes a day?-

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({mouth:"normal", eyes:"normal_right"})`

b: (Holt-Lunstad et al, 2010, PLoS Medicine)

`hong({mouth:"0_neutral", eyes:"0_annoyed"})`

h: Um, thanks for citing your sources but--

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({body:"fear", mouth:"normal", eyes:"fear"})`

b: Which means if you don't hang out with someone *right now* you're gonna-

`bb({body:"panic"})`

b: DIEEEEEEEEEEEEEEEEEEE

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("20p", "alone");
publish("hp_show");
```

(...2500)
