# act3

`SceneSetup.act3();`

h: meow

r: blah blah blah blah blah blah blah blah blah blah blah blah

```
Game.clearText();
publish("act3-out");
music('battle_dark', {volume:0.7, fade:1});
```

(...1500)

```
publish("hp_show");
```

n: FINAL ROUND: *FIGHT!*

h: Yelling

b: Yelling

```
Game.clearText();
publish("act3-in");
publish("hp_hide");
Game.FORCE_CANT_SKIP = true;
music(null,{fade:1});
```

(#act3_walkaway)

# act3_walkaway

`publish("start-walkaway-anim");`

(...2001)

`publish('hong-next')`

(...667)

`publish('hong-next')`

(...667)

`publish('hong-next')`

(...667)

`publish('hong-next')`

`Game.FORCE_CANT_SKIP = false;`

r: What's the matter, kid?

r: Ya *scared?*

```
publish('hong-next');
publish('hunter-bored');
```

h2: Yes.

h2: I'm scared.

`publish('hong-next')`

h2: And that's okay!

`publish('hong-next')`

h2: It's okay to be scared.

`publish('hong-next')`

(...500)

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1167)

`publish('hong-next')`

(...833)

`publish('hong-next')`

(...1333)

`publish('hong-next')`

(...667)

`publish('hong-next')`

(...667)

`publish('hong-next')`

(...1333)

`publish('hong-next')`

(...501)

`publish('hong-next')`

`Game.FORCE_CANT_SKIP = false;`

(...1001)

r: Did they just lock the door?

r: ...

r: shit.





# act3_jump

`publish("start-jump-anim");`

(...2001)

`publish('hong-next')`

(...833)

`publish('hong-next')`

(...501)

`publish('hong-next')`

(...501)

`publish('hong-next')`

(...1167)

`publish('hong-next')`

(...1001)

`publish('hong-next')`

b: no...

`publish('hong-next')`

(...501)

`Game.clearText();`

(...1333)

`publish('hong-next')`

(...1333)

`publish('hong-next')`

b: no no no

(...501)

`Game.clearText();`

`publish('hong-next')`

(...2001)

`publish('hong-next')`

(...501)

`publish('hong-next')`

(...167)

`publish('hong-next')`

(...167)

`publish('hong-next')`

(...167)

```
publish('hong-next');
publish("hunter-shock");
```

(...833)

`publish('hong-next')`

(...167)

`publish('hong-next')`

(...167)

`publish('hong-next')`

b: NO!