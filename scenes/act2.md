# act2

`SceneSetup.act2();`

n: party words party words party words

n: // callback: retweet news story, or subtweet, or Tinder serial killer (or: fallback - anxiety in general)

```
Game.clearText();
publish("act2-out-1");
music(null, {fade:1});
```

(...2500)

```
music('battle', {volume:0.5});
publish("hp_show");
```

n: ROUND TWO: *FIGHT!*

[Oh no they all hate us!](#act2a_social)

[Ogling the host? Like a pervert?](#act2a_perv)

[Hey, let's talk about the meaning of life.](#act2a_meaning)

# act2a_social

b: We're bringing down the mood of this party by being such a sad lump!

b: We're killing the good vibes! We're committing first-degree vibe-murder!

b: Human, we have to leave *now* before--

`_.a2_first_danger = 'social'`

(#act2b)

# act2a_perv

`//b: // pokemon?`

b: They're more attractive than you, which means if we even *look* at them, then--

b: WE'RE CREEPS

b: We're creepy, crappy, bad bad bad terrible terrible perv--

`_.a2_first_danger = 'perv'`

(#act2b)

# act2a_meaning

b: I mean, what can we possibly do that matters in the grand scheme of things?

b: Even in the Hollywood-ending scenario, where we save humanity and the world... so what?

b: Everything dies anyway.

b: Humanity dies, the sun dies, the whole universe dies, what the heck are we supposed to--

`_.a2_first_danger = 'meaning'`

(#act2b)

# act2b

b: ...

b: Um... can you hear me, human?

b: ...

b: *GASP*

[I must warn you *LOUDER!*](#act2b_louder)

{{if _.a2_first_danger=="social"}}
[I must warn you about a *different* social danger!](#act2b_different_social)
{{/if}}

{{if _.a2_first_danger=="perv" || _.a2_first_danger=="meaning"}}
[I must warn you about a *different* moral danger!](#act2b_different_moral)
{{/if}}

[You're ignoring danger! That's dangerous!](#act2b_ignore)

# act2b_louder

`_.a2_first_choice = "louder"`

{{if _.a2_first_danger=="social"}}
(#act2b_louder_social)
{{/if}}

{{if _.a2_first_danger=="perv"}}
(#act2b_louder_perv)
{{/if}}

{{if _.a2_first_danger=="meaning"}}
(#act2b_louder_meaning)
{{/if}}

# act2b_louder_social

b: EMOTIONS ARE CONTAGIOUS! SO IF YOU DON'T LEAVE YOU'LL INFECT EVERYONE WITH YOUR MENTAL ILLNESS! 

b: You'll create a deadly outbreak of SAD LUMP SYNDROME

b: We need to get out of here and quarantine ourselves forever in a small room with Netflix and food delivery!

`_.a2_second_danger = 'netflix'`

(#act2c)

# act2b_louder_perv

b: DON'T BE A CREEP. IT'S AGAINST THE LAW!

b: Creep Law, Section 74.5: (1) Any Person who checks out (a) that sweet ass (b) that bulge (2) shall be hereby referred to as

b: "A BIG DISGUSTING TRASH PERVERT"

`_.a2_second_danger = 'law'`

(#act2c)

# act2b_louder_meaning

b: ACTUALLY YOU KNOW WHAT'S WORSE THAN HAVING NO IMPACT ON HUMANITY?

b: HAVING *ALL* THE IMPACT ON HUMANITY.

b: Alfred Nobel wanted world peace, and for cultures to understand each other. So he decided to make travel easier.

b: So he needed a way to cheaply create train tunnels. So he invented a new material called "dynamite"...

b: which was used in World War I to KILL MILLIONS OF PEOPLE

b: IT'S THE BUTTERFLY EFFECT, HUMAN! HOW MANY PEOPLE ARE YOU ACCIDENTALLY KILLING RIGHT NOW

`_.a2_second_danger = 'butterfly'`

(#act2c)

# act2b_different_social

`_.a2_first_choice = "different"`

b: Actually, you know what's worse than no-one liking you? *Everyone* liking you.

b: That is, becoming one of *these* shallow party animals.

b: A shallow life with shallow friends who only know the shallow you!

b: Human, we need to run away from these dopamine-zombies before they turn us into one of them!

`_.a2_second_danger = 'zombies'`

(#act2c)

# act2b_different_moral

`_.a2_first_choice = "different"`

b: People are dying in famines and genocides *right now* and we're just partying!

b: A wise person once said, "the only thing necessary for the triumph of evil is for good folks to do nothing."

b: WE'RE DOING NOTHING.

b: BY PARTYING, WE'RE HELPING *HITLER*.

`_.a2_second_danger = 'hitler'`

(#act2c)

# act2b_ignore

`_.a2_first_choice = "ignore"`

b: You think you're safe just because you took the batteries out of the carbon monoxide detector?

b: You won't even smell the poison! You'll just get sleepy and then you'll--

b: DIEEEEEEEEEEEEEEEEEE

`_.a2_second_danger = 'ignore'`

(#act2c)

# act2c

``hong({body:"ignore_sweat"});`

b: ...

b: Oh thank goodness human, I think you can hear me again!

{{if _.a2_first_choice=="louder"}}
[I'll warn you *EVEN LOUDER!*](#act2c_louder)
{{/if}}

{{if _.a2_first_choice!="louder"}}
[I'll warn you *LOUDER!*](#act2c_louder)
{{/if}}

{{if _.a2_first_danger=="social"}}
[I'll warn you about *another* social danger!](#act2c_different_social)
{{/if}}

{{if _.a2_first_danger=="perv" || _.a2_first_danger=="meaning"}}
[I'll warn you about *another* moral danger!](#act2c_different_moral)
{{/if}}

[Did you check that punch before drinking?](#act2c_punch)

#act2c_louder

{{if _.a2_second_danger=="netflix"}}
(#act2c_louder_netflix)
{{/if}}

{{if _.a2_second_danger=="law"}}
(#act2c_louder_law)
{{/if}}

{{if _.a2_second_danger=="butterfly"}}
(#act2c_louder_butterfly)
{{/if}}

{{if _.a2_second_danger=="zombies"}}
(#act2c_louder_zombies)
{{/if}}

{{if _.a2_second_danger=="hitler"}}
(#act2c_louder_hitler)
{{/if}}

{{if _.a2_second_danger=="ignore"}}
(#act2c_louder_ignore)
{{/if}}

# act2c_louder_netflix

b: Actually, Netflix & food delivery isn't quarantined enough! We'd still infect the delivery person!

b: We need to move to the Canadian Yukon territories, and have our food delivered by drone!

b: And then they'd have to sterilize the drone to rid it of our SAD LUMP GERMS

`_.a2_first_attack = "alone"`

(#act2d)

# act2c_louder_law

b: The BIG DISGUSTING TRASH PERVERT shall be sentenced to 48 hours in one of those medieval public-humiliation devices

b: unless they're actually *into* that sort of thing

b: in which case that proves them being a BIG DISGUSTING TRASH PERVERT

`_.a2_first_attack = "bad"`

(#act2d)

# act2c_louder_butterfly

b: BUTTERFLY EFFECT! Did you drive to this party in your fossil-fuel car?

b: BAM, ONE KID DROWNED IN FLORIDA.

b: Remember when you said that mean thing to that stranger online?

b: BAM, THEY'RE PROBABLY SUICIDED BY NOW

`_.a2_first_attack = "bad"`

(#act2d)

# act2c_louder_zombies

b: These popularity-zombies will stumble towards you mumbling,

b: LIIIIIKES. LIIIIIIIIIIKES.

b: And they'll bite you and turn you into a brainless bro and/or thoughtless thot!

`_.a2_first_attack = "bad"`

(#act2d)

# act2c_louder_hitler

b: THE NAZIS ARE GOOSE-STEPPING BACK ON THE STREETS RIGHT NOW

b: And they're saying:

b: *Good thing those 'good folks' slacked off with crap like 'relaxing' and 'self-care'!*

b: *Now our plans can go fourth, reich on schedule!*

`_.a2_first_attack = "bad"`

(#act2d)

# act2c_louder_ignore

b: Come to think about it, do we know if this building *has* a monoxide detector?!

b: What if we're all being poisoned *RIGHT NOW?*

b: WE WOULDN'T EVEN KNOW. ONE MOMENT WE'RE HERE, NEXT MOMENT WE STOP EXISTING FOREVER AND EVER AND EV--

`_.a2_first_attack = "harm"`

(#act2d)

# act2c_different_social

b: What if we're just *fundamentally incapable* of ever being loved, or loving another?

b: What if something irreversibly broke inside of us a long time ago? Or never existed in us in the first place?

b: Ahhh we're broken! We're so broken so broken so brok--

`_.a2_first_attack = "alone"`

(#act2d)

# act2c_different_moral

b: What if we're just *fundamentally rotten?*

b: Others have an inner drive to do goodness, but we only do "good" out of guilt or shame, if at all.

b: What if it's in our nature to hurt others? What if we can't be anything *other* than a burden to those close to us?

b: Ahhh we're broken! We're so broken so broken so brok--

`_.a2_first_attack = "bad"`

(#act2d)

# act2c_punch

b: I'm not being irrational. People *do* drug punch bowls. That is an actual thing that actually happens.

b: Human, is your head hurting? Do your limbs feel limp? I think we're dying. We need to call an ambulance RIGHT NOW.

b: HUMAN, WE'RE DYING. WE'RE DYING WE'RE DYING WE'RE DYI--

`_.a2_first_attack = "harm"`

(#act2d)

# act2d

```
hong({body:"attacked"});
attack("30p", _.a2_first_attack);
```

(...2500)

h: FUCK!

h: FUCKING FUCK-FUKKITY *FUUUUUCK*

`bb({body:"happy"})`

b: Yay, human! I'm so happy you can hear me again!

`bb({body:"sad"})`

b: Why did you try ignoring me?

`hong({body:"yell"})`

h: Holy whoring hell, you stupid sack of shit.

h: You know that Native American story?

h: "There are two wolves inside you, one is hope, one is despair, which wolf wins? The one you feed."

h: I was trying to fucking *starve* you, you sadistic asshole!

h: Fuck it, I'll do positive affirmations instead.

h: *I am loved. I am good. I am smart. I am beautiful. I am special.*

`bb({body:"neutral"})`

[Golly, that's so narcissistic!](#act2d_narcissist)

[You know affirmations were *disproven?*](#act2d_disproven)

[omg you can't credit random stories to indigenous folk](#act2d_racist)

# act2d_disproven

b: In fact, they actually *backfire* for people with low self-esteem! 

b: It was a well-designed study – randomized controlled trial, experimenter was blinded as to who was in which group.

b: Results: if you already had low self-esteem, being asked to repeat affirmations makes you feel *worse* than if you'd said nothing at all!

b: Wood et al, 2009. Look it up on Google Scholar, human,

b: THEN STOP SPREADING UNSCIENTIFIC FAKE NEWS

```
hong({body:"attacked"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_narcissist

b: You *need* to humbly see your own flaws in order to grow as a person!

b: You can't spray air freshener over a moldy room! Covering up your flaws with narcissism makes you worse in the long-run.

b: Thankfully, I, as your loyal guard-wolf, can alert you to your flaws. And right now, it's-

b: EVERYTHING. EVERYTHING IS WRONG

```
hong({body:"attacked"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_racist

b: Native Americans are *actual people*, not some "noble savages" you can namedrop to make your fortune-cookie advice more *exotic*.

b: You're reducing individual persons & complex cultures to a Hallmark card! That's "benevolent racism"! 

b: STOP BEING RACIST YOU SQUINTY-EYED JERK

```
hong({body:"attacked"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2e

h: FUCKDAMMIT.

`hong({body:"yell"})`

h: You know what? You're *irrational*.

h: Everyone already knows emotions are irrational! Especially fear!

h: Why should I listen to a moron shitstain like you?!

b: ...

`bb({body:"sad"})`

[...jeez human. That's really hurtful.](#act2e_hurtful)

[What happened to "your feelings are valid"?](#act2e_valid)

[We share the same brain. We're equally rational.](#act2e_rational)

# act2e_hurtful

b: I'm *part* of you, you know. When you say that, you're hurting *yourself*.

b: Why are you hitting yourself, human? STOP HITTING YOURSELF.

```
music(null);
hong({body:"attacked"});
attack("10p", "harm");
```

(...2500)

(#act2f)

# act2e_rational

b: Which means if *I'm* irrational, then *you're* irrational!

b: And if we're both so dumb and stupid, we'll *never* figure out how to be happy!

b: Ahhh we're so lost! So lost so lost so los--

```
music(null);
hong({body:"attacked"});
attack("10p", "harm");
```

(...2500)

(#act2f)

# act2e_valid

b: Hang on... "they" say that feelings are valid, that you should always accept your emotions.

b: But "they" also say emotions are irrational, that emotions are not to be trusted.

b: Maybe "they" are just full of crud!

b: "They" are feeding us contradictions to maintain our dependency on the Self-Help Industrial Complex!

```
music(null);
hong({body:"attacked"});
attack("10p", "harm");
```

(...2500)

(#act2f)

# act2f

`hong({body:"cry"});`

h: ...

h: I hate this. God it hurts so much I *hate* this.

h: I can't appease you. I can't ignore you. I can't fight you. 

h: No matter what I do, I can't seem to get rid of yo--

```
bb({body:"yell"});
```

b: Well maybe you're NOT *SUPPOSED* TO GET RID ME.

b: How do you think *I* feel, human?!

`bb({body:"cry"})`

b: I'm trying my best to be your guard-dog, but you keep seeing me as some Big Bad Wolf!

b: So I try even *harder* to alert you to danger. More danger! Louder danger!

b: But no matter how hard I try to protect you, you *still* think of me as your enemy!

b: I *know* I suck at my job! But I'm *trying*, human!

b: ...I'm trying.

b: You don't have to heed my warnings, or agree with me, or even *like* me.

b: I just... all I want is for you to be patient with me.

b: I just want for you to sit with me for a while, instead of turning away from m--

`publish("act2-party-action", ["twist1"]);`

r: Hey.

```
Game.clearText();
publish("act2-in-2");
publish("hp_hide");
music('party1', {volume:0.4, fade:2});
```

(...2000)

r: Looks like you're caught up in a fight with yourself, kid.

`publish("act2-party-action", ["twist2"]);`

h2: (nods)

r: You're not alone, friend. Anxiety's super common.

r: Hell, just yesterday, I heard someone curled up into an armadillo ball and cried in public!

`// r: Heck, just yesterday, I heard someone on campus had a nervous breakdown and smashed their phone / curled up into a ball and cried!`

h2: huh imagine that.

r: That's why I throw all these parties. I want to help peeps forget their worries.

h2: but my anxiety...

r: Don't worry, kid. There's a simple trick to get that negative voice in your head to be quiet forever.

```
Game.clearText();
music(null, {fade:1});
```

(...2000)

```
publish("act2-party-action", ["twist3"]);
sfx("rustle");
```

(...2500)

`publish("act2-party-action", ["twist4"]);`

(...1000)

r: My own specialty blend. It's a mix of... well, everything.

r: Bottoms up, motherfucker.

```
hong({body:"hold_alcohol"});
bb({body:"shock"});
Game.clearText();
publish("act2-out-3");
publish("hp_show");
```

(...3500)

[Oh God.](#act2g_oh) `Game.OVERRIDE_CHOICE_LINE=true`

[Please don't do this.](#act2g_please) `Game.OVERRIDE_CHOICE_LINE=true`

[We don't know what's in that drink.](#act2g_we) `Game.OVERRIDE_CHOICE_LINE=true`

# act2g_oh

b: O--

(#act2g)

# act2g_please

b: P--

(#act2g)

# act2g_we

b: W--

(#act2g)

# act2g

```
hong({body:"drinking"});
bb({body:"attacked"});
attackBB("40p", "harm");
```

(...2000)

```
hong({body:"drunk"});
bb({body:"pained"});
```

h: Mmm, what an exquisite palette!

h: A full-bodied flavor of "shut your mind up", with a subtle aftertaste of "never feel anything ever again"!

b: This is bad, human. This is really, really bad.

[This is *actually* how addiction starts.](#act2h_opt1) `Game.OVERRIDE_CHOICE_LINE=true`

[They could've put something bad in there.](#act2h_opt2) `Game.OVERRIDE_CHOICE_LINE=true`

[I *knew* the host was deeply messed up!](#act2h_opt3) `Game.OVERRIDE_CHOICE_LINE=true`


# act2h_opt1

b: This is *actu*--

(#act2h)

# act2h_opt2

b: They could've--

(#act2h)

# act2h_opt3

b: I *knew* th--

(#act2h)

# act2h

```
hong({body:"drinking"});
bb({body:"attacked"});
attackBB("40p", "harm");
```

(...2000)

```
hong({body:"drunk"});
bb({body:"pained"});
```

h: Delicious, *and* cheaper than therapy!

b: HUMAN PLEASE STOP

h: Hehehe!

h: And what are *you* gonna do about it, asshole?

b: I'm so sorry, human.

b: I'm going to have to use my SPECIAL ATTACK

`music('battle', {volume:0.5});`

[🗡](#act2h_attack) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

[💔](#act2h_attack) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

[👿](#act2h_attack) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`

# act2h_attack

`bb({body:"special_1"})`

h: What's this crap?

h: You're gonna yap more stupid words at me again to try t--

```
bb({body:"special_2"});
sfx("shoryuken");
```

(...1251)

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
publish("remove_special_attack");
hong({body:"defeated"});
bb({body:"sad"});
attack("100p", _.SPECIAL_ATTACK);
Game.FORCE_CANT_SKIP = false;
```

(...2500)

h: WHAT THE HELL WAS THAT

b: I'm sorry. It was the only way.

h: I COULD *SEE* IT. I COULD *FEEL* IT. // the blood, the guilt, the humiliation

b: I'm sorry, human.

n: *FINISH THEM*

[{FIGHT: Punch the host.}](#act2j_fight) `Game.OVERRIDE_CHOICE_LINE=true`

[{FLIGHT: Let's get out of here.}](#act2j_flight) `Game.OVERRIDE_CHOICE_LINE=true`

# act2j_fight

b: They were taking advantage of you.

b: Punch that jerk! Knock their friggin' lights out!

`bb({body:"yell"})`

b: PUNCH THEM PUNCH THEM PUNCH THEM PUNCH THEM PUNCH THEM PUNCH THEM PUNCH THEM PUNCH THE--

`_.a2_ending = "fight";`

(#act2k)

# act2j_flight

b: I *knew* all these partygoers were messed up. They all dull their pain with horrible things!

b: And they're tricking you into doing the same thing! They're corrupting you! We need to get out!

`bb({body:"yell"})`

b: GET OUT GET OUT GET OUT GET OUT GET OUT GET OUT GET OUT GET OUT GET OUT GET OU--

`_.a2_ending = "flight";`

(#act2k)

# act2k

```
Game.clearText();
publish("act2-in-4");
publish("hp_hide");
publish("act2-party-action", ["end"]);
music('party1', {volume:0.6, fade:1.5});
```

(...2000)

r: Y'okay there, kid?

{{if _.a2_ending=="fight"}}
(#act2k_fight)
{{/if}}

{{if _.a2_ending=="flight"}}
(#act2k_flight)
{{/if}}

# act2k_fight

```
Game.clearText();
publish("act2-party-action", ["end_slap1"]);
music(null);
sfx("hit");
```

(...1000)

```
sfx("record_scratch");
publish("act2-party-action", ["end_slap2"]);
```

r: Y-you...

```
publish("act2-party-action", ["end_slap3"]);
music('party1', {volume:0.6, fade:6});
```

r: are *kinky*.

r: I like that. Come to my party next weekend, babe.

`publish("act2-party-action", ["end_run"]);`

h2: ok thank you bye

r: I wanna see you let out that *vicious* side of you more, kid!

(#act2k_end)

# act2k_flight

h2: ok sorry i have to go

r: Ah, the voice won, huh?

r: Come to my party next weekend, babe. I'll mix something even stronger for ya.

`publish("act2-party-action", ["end_run"]);`

h2: ok thank you bye

r: I wanna see you finally let loose, kid!

(#act2k_end)

# act2k_end

```
Game.clearText();
publish("act2-out-5");
publish("act2-outro", ["end1"]);
music("hum", {fade:2, volume:0.6});
```

(...2500)

```
publish("act2-outro", ["end2"]);
sfx("whoosh");
```

(...1000)

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