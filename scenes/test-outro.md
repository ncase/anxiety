# act1i

n: *FINISH THEM*

[&lt; FIGHT: Destroy your phone! &gt;](#act1i_phone) `Game.OVERRIDE_CHOICE_LINE=true`

[&lt; FLIGHT: Curl up in a ball and cry! &gt;](#act1i_cry) `Game.OVERRIDE_CHOICE_LINE=true`

# act1i_phone

b: Your phone's giving you a panic attack!

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: Punish it! Destroy your phone! Kill it!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
_.act1_ending = "fight";
```

b: KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL I--

(#act1j)

# act1i_cry

b: The whole world is filled with danger!

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: Do like the armadillo! Curl up into a ball for self-defense!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
_.act1_ending = "flight";
```

b: CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CR-- 

(#act1j)

# act1j

`SceneSetup.act1_outro()`