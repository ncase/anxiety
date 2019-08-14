# act4

```
SceneSetup.act4();
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
/* (...5001) */
var hong_frame = _.INJURED ? 9 : 0;
publish("act4", ["hong_walks_in",hong_frame]);
```

(...666)

`publish("act4", ["hong_walks_in", "next"]);`

(...666)

`publish("act4", ["hong_walks_in", "next"]);`

(...666)

`publish("act4", ["hong_walks_in", "next"]);`

(...666)

`publish("act4", ["hong_walks_in", "next"]);`

(...1667)

`publish("act4", ["hong_walks_in", "next"]);`

(...666)

`publish("act4", ["hong_walks_in", "next"]);`

(...666)

`publish("act4", ["hong_walks_in", "next"]);`

(...1333)

`publish("act4", ["hong_walks_in", "next"]);`

(...167)

`publish("act4_hong_sits");`

(...66)

`publish("act4", ["hong_transition", "next"]);`

(...133)

`publish("act4", ["hong_transition", "next"]);`

(...1333)

`publish("act4", ["hong_transition", "next"]);`

(...333)

`publish("act4", ["hong_transition", "next"]);`

(...1001)

`publish("act4", ["hong_transition", "next"]);`

(...333)

`publish("act4", ["hong_transition", 9]);`

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", 9]);`

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", 9]);`

(...333)

`publish("act4", ["hong_transition", 10]);`

(...333)

`publish("act4", ["hong_transition", "next"]);`

(...1466)

`publish("act4-out-1");`

(...201)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

`publish("act4", ["hong_transition", "next"]);`

(...99)

```
publish("act4-show-chars");
Game.FORCE_CANT_SKIP = false;
```

h: *sigh*

h: Maybe we don't have to fight.

```
Game.FORCE_CANT_SKIP = true;
Game.clearText();
```

(...301)

`publish("smash",[0]);`

(...2001)

```
publish("smash",[1]);
sfx("grass_step1");
```

(...2601)

`publish("smash",[2]);`

(...501)

`Game.FORCE_CANT_SKIP = false;`

(#act4b_2)

# act4b_2

`music('dontfight',{fade:5, volume:0.6})`

b: I'm not a Big Bad Wolf. But I'm not a guard-wolf either.

b: I'm a battered shelter dog.

(#act4c)



# act4c

```
Game.clearText();
music(null,{fade:3});
```

b: *Can* we really get along?

b: *Can* we work together, as a team?

h: Well,

a: E-excuse me...

```
Game.clearText();
publish("act4-in-2");
music('campus', {volume:0.5, fade:1});
```

(...2101)

(#act4d)

# act4d

`Game.WORDS_HEIGHT_BOTTOM = 221;`

a: W-wo-would you mind if I sat with you for lunch?

{{if _.TOP_FEAR=="harm"}}
s: They were sitting alone for lunch? They must be a psycho loner serial killer!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: Ack, do you know how pathetic we sound? How desperate, how *needy*?
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: They were enjoying peace and quiet, then we interrupted them! We're such a burden!
{{/if}}

a: I- I mean- it's, it's okay if not, I just...

`Game.OVERRIDE_CHOICE_SPEAKER = "h2"`

[Wait, didn't I see you at the party?](#act4d_recognition)

[Yeah, of course! Come here.](#act4d_yes)

[Sorry, I need alone time right now.](#act4d_no)

# act4d_recognition

h2: Yeah you were on the couch! At the first party I went to,

{{if _.a2_ending=="fight"}}
h2: The one where I had that panic attack and punched the host.
{{/if}}

{{if _.a2_ending=="flight"}}
h2: The one where I had that panic attack and ran out crying.
{{/if}}

b: Hang on human, we might be making them uncomfortable.

h2: Ah, I don't mean to put you on the spot!

h2: Just remembering a friendly face, is all.

`publish("al-shire", ["panic"]);`

{{if _.TOP_FEAR=="harm"}}
s: AHHHHH I KNEW IT! THEY'RE A DANGEROUS CRAZY PSYCHO!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: SEE HOW MUCH WE SUCK AT MAKING FRIENDS?! THE FIRST IMPRESSION WE MADE IS "WITNESSED MY TRAUMA". WE SUCK!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: AAAHHH WE MADE SOMEONE REMEMBER A TRAUMATIC EVENT. OUR MERE PRESENCE HURTS OTHERS.
{{/if}}

(#act4e)

# act4d_yes

b: Hang on human, they seem uncomfortable.

h2: Ah, no pressure of course!

h2: Just saying, you can sit here if you want to.

`publish("al-shire", ["panic"]);`

{{if _.TOP_FEAR=="harm"}}
s: THEY'RE BEING *TOO* FRIENDLY! LIKE TED BUNDY, THE SERIAL KILLER!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: THEY'RE JUST ACTING NICE. NO ONE *REALLY* WANTS TO BE OUR FRIEND.
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: GAH, WE ALWAYS MAKE OTHERS FEEL UNCOMFORTABLE! WE'RE TERRIBLE!
{{/if}}

(#act4e)

# act4d_no

b: Hang on human, we might be making them uncomfortable.

h2: Ah, I didn't mean to come off as rude!

{{if _.INJURED}}
h2: It's just that, well, I jumped off a roof and almost killed myself.
{{/if}}

{{if !_.INJURED}}
h2: It's just that, well, I almost jumped off a roof.
{{/if}}

h2: Please don't take it as a personal rejection, I just need quiet time to process some emotions.

`publish("al-shire", ["panic"]);`

{{if _.TOP_FEAR=="harm"}}
s: HOLY COW I KNEW IT, THEY *ARE* A DANGEROUS PSYCHO!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: WE'VE BEEN PERSONALLY REJECTED! WE'LL NEVER BE LOVED!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: WE INTERRUPTED SOMEONE'S EMOTIONAL PROCESSING! NOW THEY'LL BE TRAUMATIZED FOREVER AND IT'S ALL OUR FAULT!
{{/if}}

(#act4e)

# act4e

```
Game.WORDS_HEIGHT_BOTTOM = 195;
publish("act4", ["alshire", 6]);
```

s: RUN RUN RUN RUN RUN RUN RUN RUN RUN RUN RUN RUN RUN RUN RUN

```
Game.clearText();
publish("act4", ["alshire", 10]);
```

(...1001)

`publish("act4", ["alshire", 11]);`

(...1001)

```
publish("act4-out-3");
Game.WORDS_HEIGHT_BOTTOM = -1; /* reset */
```

(...1201)

`publish("act4-jumpcut-hong");`

h: Huh. That was weird. I wonder what was going on in their head.

h: Anyway, you were saying?

b: Uh, I forget? Something about teams and work?

h: ¯\_(ツ)_/¯

b: They say you should "make peace" with your emotions, as if your emotions are some kind of *war criminals*.

b: But I want us to make *more* than mere peace! I want us to be *allies!*

b: I want to be a good guard-dog. Just like how hunger & thirst are alarms for your physical needs,

b: I want to be the alarm for your emotional needs – your needs for safety, belonging, goodness.

b: But... I suck at my job, so I need you to train me.

b: Help me help you.

b: Teaching an old dog new tricks *will* take a while. Maybe *years.*

b: And sometimes I'll relapse, I'll slip into my old habits.

b: I'll bark at shadows. I'll scare you with words. I might even show you some intrusive images of... things.

b: I'm sorry! I'm a battered shelter dog! Battered dogs poop on your bed sometimes!

b: But if you're patient with me... and just stay and sit with me...

b: Maybe you can tame this wolf.

`Game.clearText();`

(...1000)

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Good dog.](#act4f-pat-bb) `Game.OVERRIDE_CHOICE_SPEAKER = "h"`

`Game.OVERRIDE_CHOICE_SPEAKER = "b"`

[Good human.](#act4f-pat-hong) `Game.OVERRIDE_CHOICE_SPEAKER = "b"`

# act4f-pat-hong

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

`publish("end-pat", ["pat-hong-1"])`

(...501)

`publish("end-pat", ["pat-hong-2"])`

(...501)

`publish("end-pat", ["pat-hong-1"])`

(...501)

`publish("end-pat", ["pat-hong-2"])`

(...501)

`publish("end-pat", ["pat-hong-1"])`

(...501)

`publish("end-pat", ["pat-hong-2"])`

(...6501)

`publish("end-pat", ["pat-hong-3"])`

(...1001)

(#act4f)

# act4f-pat-bb

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

`publish("end-pat", ["pat-bb-1"])`

(...501)

`publish("end-pat", ["pat-bb-2"])`

(...501)

`publish("end-pat", ["pat-bb-1"])`

(...501)

`publish("end-pat", ["pat-bb-2"])`

(...501)

`publish("end-pat", ["pat-bb-1"])`

(...501)

`publish("end-pat", ["pat-bb-2"])`

(...6501)

`publish("end-pat", ["pat-bb-3"])`

(...1001)

(#act4f)

# act4f

```
Game.FORCE_CANT_SKIP = false;
publish("end-pat", ["freak-out"])
```

{{if _.fifteencigs}}
b: AAAAA YOU'RE STILL EATING ALONE FIFTEEN CIGARETTES AAAAA
{{/if}}

{{if _.parasite}}
b: AAAAA YOU'RE STILL NOT PRODUCTIVE WHILE EATING WE'RE PARASITES AAAAA
{{/if}}

{{if _.whitebread}}
b: AAAAA YOU'RE EATING MORE WHITE BREAD AAAAA
{{/if}}

```
publish("act4", ["bb_closer", 18]);
sfx("yaps", {volume:0.6});
Game.FORCE_CANT_SKIP = true;
```

b: YAP YAP YAP YAP YAP

`music('credits', {NO_LOOP:true, volume:0.45});`

(...1884)

(#credits)
