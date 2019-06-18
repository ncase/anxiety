# act3

`SceneSetup.act3();`

```
/*
r: Go on, kid, as hard as you can.
r: FUCK that's hot.
---
r: And... that's 10 laps in one minute.
r: Damn, kid. I'm impressed.
h: Told you I could run a marathon!
---
*/
```

r: Y'know, it's good to see you finally let loose, kid. To hell with all those bad vibes.

h2: Yeah! I can't feel my own fear anymore!

r: Hmmm, ya sure 'bout that?

h2: What, you've got *another* dare for me?

r: Sure do, babe. See that swimming pool *all* the way down there?

```
publish('hong-next');
publish("hunter-roof", ["front_evil"]);
```

h2: Yeah? Ten floors down?

r: Jump in.

(...999)

`publish('hong-next')`

h2: ...

h2: What?

r: Prove your fear is gone. Jump.

h2: um, wait, I...

r: C'mon, aren't we *friends?* Don't ya trust your *friends?*

r: Prove to us - and yourself - that you've conquered your fear once and for all. Jump.

r: Unless that nagging voice in your head is back?

h2: Yeah... it is...

`publish('hong-next')`

h2: But not for long.

(#act3a)




# act3a

```
Game.clearText();
publish("act3-out");
music('battle_dark', {volume:0.7, fade:1});
```

(...1500)

```
publish("hp_show");
```

b: no no no no no no

n: THIS CHAPTER HAS TWO POSSIBLE ENDINGS. ONE IS *VERY, VERY BAD.*

b: NO NO NO NO NO NO NO NO NO NO NO NO NO NO

n: CHOOSE WISELY. PROTECT YOUR HUMAN

b: AAAAAAAAAAAAAAAAAA

n: GOOD LUCK

(...999)

`Game.clearText();`

[Human, you could actually DIE here!](#act3a_harm) `Game.OVERRIDE_CHOICE_LINE=true`

[These sickos aren't really your friends!](#act3a_alone) `Game.OVERRIDE_CHOICE_LINE=true`

[You're being stupid and terrible right now!](#act3a_bad) `Game.OVERRIDE_CHOICE_LINE=true`

# act3a_harm

b: H--

(#act3a_after)

# act3a_alone

b: T--

(#act3a_after)

# act3a_bad

b: Y--

(#act3a_after)

# act3a_after

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
```

(...2000)

```
hong({body:"angry"});
bb({body:"scared"});
```

h: You know, I might've believed you... if you hadn't tried that a zillion times before.

h: You're the wolf who cried wolf.

[🗡](#act3_fork) `Game.OVERRIDE_CHOICE_LINE=true`

[💔](#act3_fork) `Game.OVERRIDE_CHOICE_LINE=true`

[👿](#act3_fork) `Game.OVERRIDE_CHOICE_LINE=true`

# act3_fork

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
```

(...2000)

```
hong({body:"angry"});
bb({body:"scared"});
```

h: You already tried that too.

b: human, please...

h: Oh I'm *sorry* Big Pharma doesn't approve of my self-medication.

h: Look asshole, we *all* have a way of shutting you the fuck up.

h: Some people throw themselves into work.

h: Some people throw themselves into sex and drugs and refreshing their Facebook feed.

h: Some people throw themselves into other people. 

h: I'm going to throw myself into that pool.

[You're drunk and it's TEN FLOORS DOWN](#act3_bad_1_harm)

[Dang it, this is the thanks I get?!](#act3_bad_1_insult)

[Okay, I admit it. I messed up.](#act3_good_1) `bb({body:"sad"})`

# act3_bad_1_harm

b: Even if you somehow land *in* the water, you'll still smash into the bottom of the pool and break your bones!

h: Eh.

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
```

(...2000)

```
hong({body:"angry"});
bb({body:"scared"});
```

h: I think I saw a Russian guy do this on YouTube once.

(#act3_bad_2)

# act3_bad_1_insult

h: I- Excuse me, the *thanks?*

b: This is exactly why I *exist!* Because humans can't be trusted to protect themselves!

b: I've been trying to protect your stupid butt all my life and now you're just going t--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
```

(...2000)

```
hong({body:"angry"});
bb({body:"scared"});
```

(#act3_bad_2)

# act3_good_1

h: heh.

h: hahahaha

h: HAHAHAHAHAHA

h: Oh WOW is that the biggest *fucking* understatement of the century!

h: Yeah, you rotting pile of blood-coated shit! You messed the fuck up!

h: Any other remarks, Captain Obvious?

[But revenge on me isn't the answer!](#act3_good_1_fail_revenge) `bb({body:"scared"})`

[But this time I'm *actually* right!](#act3_good_1_fail_harm) `bb({body:"scared"})`

[I've hurt you.](#act3_good_2a)


# act3_good_1_fail_revenge

b: You need to have a healthier relationship with your emotions, rather than drown them wi--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
```

(...2000)

```
hong({body:"angry"});
bb({body:"scared"});
```

(#act3_bad_2)



# act3_good_1_fail_harm

b: So please, put the bottle down and let's--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
```

(...2000)

```
hong({body:"angry"});
bb({body:"scared"});
```

(#act3_bad_2)




# act3_bad_2

b: please... don't...

h: Your energy bar's looking awfully low there, wolf.

h: If I were you, I'd choose your next words very carefully.

[Fine. I'm done protecting you.](#act3_bad_2_jump)

[I was right all along.](#act3_bad_2_right)

[I'm sorry.](#act3_good_2b) `bb({body:"sad"})`


# act3_bad_2_jump

b: So, go ahead and jump. See what I care.

h: ...

h: Okay then. Bottoms up.

b: WAIT NO THAT WAS REVERSE PSYCHOLOGY YOU WERE SUPPOSED TO DO THE *OPPOSITE* OF WHAT I SA--

(#act3_bad_3)



# act3_bad_2_right

b: You *are* putting yourself in danger. Your so-called friends *are* using you. And *you* are using your so-called friends.

b: So please, human... why don't you believe me?!

h: Because you don't believe in *me*.

(#act3_bad_3)



# act3_bad_3

```
music(null);
hong({body:"drink"});
bb({body:"attacked"});
attackBB("100p");
```

(...2000)

```
hong({body:"angry"});
bb({body:"dead"});
```

h: *"The only thing to fear is fear itself."*

h: *"Don't worry, be happy!"*

h: All the wise folk of our time agree: negative emotions are *bad!*

h: Duh! That's why they're called *negative!*

h: So the only good negative emotion...

h: Is a *dead* negative emotion.

b: human... please...

h: A while back, I said: “I just want to be free from all this pain.”

h: I got my wish! I no longer feel pain, or fear, or anxiety...

h: I don't feel anything at all.

`_.a3_ending = "jump";`

(#act3_end)



# act3_good_2a

b: I was so obsessed with making sure nothing else hurt you, that I didn't realize *I* was creating the hurt.

h: NO. SHIT.

h: GODDAMN. It really took you this long to finally figure it out?!

h: You could've saved us so much trouble, you big fluffy dumbass. Why didn't you realize this sooner?...

`_.apologized_for_hurt = true;`

(#act3_good_2q)



# act3_good_2b

h: ...you're *sorry.*

h: ...

h: Sorry for *what*, you big fuzzy moron?

(#act3_good_2q)


# act3_good_2q

[I'm sorry I wasn't a good protector.](#act3_good_3_protector)

[I'm sorry I didn't respect you.](#act3_good_3_respect)

{{if _.apologized_for_hurt}}
[I'm sorry.](#act3_good_4)
{{/if}}

{{if !_.apologized_for_hurt}}
[I'm sorry I hurt you.](#act3_good_3_hurt)
{{/if}}



# act3_good_3_protector

b: It's my duty to warn you against *real* danger, but I kept barking at cars and the mailman.

b: Barking at shadows. Barking so much.

b: It only makes sense that you'd want to muzzle me.

b: I'm sorry.

(#act3_good_4)



# act3_good_3_respect

b: I was supposed to be *your* loyal guard-dog, but I acted as if you were supposed to obey *me*.

b: There's a difference between protective and suffocating, and I crossed the line.

b: I'm sorry.

(#act3_good_4)



# act3_good_3_hurt

b: I was so obsessed with trying to protect you from being hurt, I never stopped to realize *I* was hurting you.

b: I was a bad dog.

b: I'm sorry.

(#act3_good_4)


# act3_good_4

```
music(null,{fade:5});
```

h: ...

```
hong({body:"stop"});
```

h: Yeah, well, this was a dumb idea anyway.

h: I only did this to fuck you up, and, well, I fucked you up.

h: Let's just call this round a tie, okay?

b: ...

b: Okay.

h: Okay.

n: *TIE*

`_.a3_ending = "walkaway";`

(#act3_end)









# act3_end

```
Game.clearText();
publish("act3-in");
publish("hp_hide");
Game.FORCE_CANT_SKIP = true;
```

{{if _.a3_ending=="walkaway"}}
(#act3_walkaway)
{{/if}}

{{if _.a3_ending=="jump"}}
(#act3_jump)
{{/if}}






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
publish('hunter-roof', ["side_neutral"]);
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
publish("hunter-roof", ["front_shock"]);
```

(...833)

`publish('hong-next')`

(...167)

`publish('hong-next')`

(...167)

`publish('hong-next')`

b: NO!


