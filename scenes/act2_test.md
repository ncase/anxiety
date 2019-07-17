# act2

`SceneSetup.act2();`

a: hack

(#act2-preamble-end)


# act2-preamble-end

```
Game.clearText();
publish("act2-out-1");
music(null, {fade:1});
```

(...3000)

```
music('battle', {volume:0.5});
publish("hp_show");
```

n: ROUND TWO: *FIGHT!*

```
bb({
	body: "cry_6",
	mouth: "right",
	eyes: "cry_r_3"
});
hong({
	body:"defeated"
});
```

b: I just... all I want is for you to be patient with me.

```
bb({
	eyes: "cry_r_4"
});
hong({
	body:"listen"
});
```

r: Hey.

```
Game.clearText();
publish("act2-in-2");
publish("hp_hide");
music('party1', {volume:0.4, fade:2});
```

(...1300)

r: Looks like you're caught in a fight with yourself, kid.

```
publish("act2", ["party_hunter",12]);
publish("act2", ["party_hong",24]);
```

r: Bottoms up, motherfucker.

```
hong({
	body:"hold",
	eyes:"blank"
});
bb({
	body:"normal",
	mouth:"small",
	eyes:"wat"
});
Game.clearText();
publish("act2-out-3");
publish("hp_show");
```

(...3500)

b: I'm so sorry, human.

b: I'm going to have to use my SPECIAL ATTACK

```
music('battle', {volume:0.5});
bb({body:"special_a"});
```

[🗡](#act2h_attack) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

[💔](#act2h_attack) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

[👿](#act2h_attack) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`

# act2h_attack

```
bb({body:"special_b_1"});
```

h: What's this crap?

h: You're gonna yap more stupid words at me again to try t--

```
bb({body:"special_c"});
sfx("hadouken");
```

(...901)

(#act2i)

# act2i

```
publish("show_special_attack");
Game.FORCE_CANT_SKIP = true;
music(null);
stopAllSounds();
```

(...5000)

```
hong({
	body:"final",
	mouth:"final"
});
bb({
	body:"normal",
	mouth:"normal",
	eyes:"sad_2"
});
attack("100p", _.SPECIAL_ATTACK);
Game.FORCE_CANT_SKIP = false;
setTimeout(function(){
	publish("remove_special_attack");
},30);
```

(...2500)

h: WHAT THE HELL WAS THAT

b: PUNCH THEM PUNCH THEM PUNCH THEM PUNCH THEM PUNCH THEM PUNCH THEM PUNCH THEM PUNCH THE--

`_.a2_ending = "fight";`

(#act2k)

# act2k

```
Game.clearText();
publish("act2-in-4");
publish("hp_hide");
music('party1', {volume:0.6, fade:1.5});
```

(...2200)

r: You alright, kid?

```
publish("act2", ["party_hunter",19]);
publish("act2", ["party_hong",36]);
```

r: I like that. Come to my party next weekend, cutie.

(#act2k_end)



# act2k_end

```
Game.clearText();
publish("act2-out-5");
music("hum", {fade:2, volume:0.6});
```

(...2500)

```
sfx("whoosh");
publish("act2", ["act2_end",2]);
```

(...800)

b: Human! Are you okay?!

b: Gosh, that was *close.* We really could've--

```
Game.clearText();
publish("act2-outro", ["end3"]);
music(null);
sfx("squeak");
```

(...1500)

```
publish("act2-outro", ["end4"]);
sfx("hit");
```

(...1000)

h: I'm going to the party next weekend.

h: The next time we fight, I'm not just going to *defeat* you...

h: I'm going to fucking *kill* you.

```
Game.clearText();
publish("act2-outro", ["end5"]);
sfx("grass_step1");
````

(...901)

```
sfx("grass_step2", {volume:0.8});
publish("act2-outro", ["end6"]);
```

(...901)

`sfx("grass_step1", {volume:0.5});`

(...901)

`sfx("grass_step2", {volume:0.25});`

(...3000)

`_.INTERMISSION_STAGE = 2;`

(#intermission)