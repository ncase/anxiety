# intermission-1

```
SceneSetup.intermission(1);
Game.FORCE_CANT_SKIP = true;
```

(...6000)

```
publish("show_stats");
```

n2: FEARS YOU USED:

i: #harm# *BEING HARMED:* {{_.attack_harm}}

i: #alone# *BEING UNLOVED:* {{_.attack_alone}}

i: #bad# *BEING A BAD PERSON:* {{_.attack_bad}}

```
publish("set_how_many_prompts", [1]);
Game.FORCE_CANT_SKIP = false;
Game.CLICK_TO_ADVANCE = true;
```

n5: (game auto-saved! it's ok to quit & continue later)

```
Game.clearAll();
sfx("yelp", {volume:0.5});
```

(...2000)

(#act2)


# intermission-2

```
SceneSetup.intermission(2);
Game.FORCE_CANT_SKIP = true;
```

(...6000)

```
publish("show_stats");
```

n2: FEARS YOU USED:

i: #harm# *BEING HARMED:* {{_.attack_harm}}

i: #alone# *BEING UNLOVED:* {{_.attack_alone}}

```
publish("set_how_many_prompts", [1]);
Game.FORCE_CANT_SKIP = false;
Game.CLICK_TO_ADVANCE = true;
```

i: #bad# *BEING A BAD PERSON:* {{_.attack_bad}}

(#act3)