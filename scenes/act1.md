# act1

`SceneSetup.act1();`

(...300)

n: AND THIS IS YOU, THAT HUMAN'S ANXIETY

`hong({mouth:"0_neutral", eyes:"0_annoyed"})`

h: Oh good, I was hoping to *not* eat in peace today.

`hong({eyes:"0_neutral"})`

n: YOUR JOB IS TO PROTECT YOUR HUMAN FROM *DANGER*

n: IN FACT, THAT SANDWICH IS PUTTING THEM IN *DANGER* RIGHT NOW

n: QUICK, WARN THEM!

[You're eating alone for lunch! Again!](#act1a_alone)

[You're not studying while eating!](#act1a_study)

[That white bread's bad for you!](#act1a_bread)

# act1a_alone

`bb({mouth:"small", eyes:"narrow"})`

b: Don't you know loneliness is associated with premature death as much as smoking 15 cigarettes a day?-

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({mouth:"normal", eyes:"normal_right"})`

b: (Holt-Lunstad et al, 2010, PLoS Medicine)

`hong({eyes:"0_annoyed"})`

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

`_.fifteencigs = true`

n: YOU USED *FEAR OF BEING UNLOVED*

(#act1b)

# act1a_study

`hong({eyes:"0_annoyed"})`

h: I'd rather not get crumbs on my textbo--

```
bb({mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: If you don't study you'll be expelled from college and you'll waste your parents' money and then they'll say

`bb({mouth:"small", eyes:"narrow"})`

b: “you have brought dishonor to our family, now we'll all have to commit seppuku”

```
bb({body:"fear", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: and then you'll-

`bb({body:"panic"})`

b: DIEEEEEEEEEEEEEEEEEEE

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("20p", "alone");
publish("hp_show");
```

(...2500)

`_.seppuku = true`

n: YOU USED *FEAR OF BEING A BAD PERSON*

(#act1b)

# act1a_bread

`hong({eyes:"0_annoyed"})`

h: Have those studies been replicat--

```
bb({body:"fear", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: Processed wheat will spike your blood sugar and ruin your organs so they'll have to amputate all your limbs and then you'll-

`bb({body:"panic"})`

b: DIEEEEEEEEEEEEEEEEEEE

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("20p", "alone");
publish("hp_show");
```

(...2500)

`_.whitebread = true`

n: YOU USED *FEAR OF BEING HARMED*

(#act1b)

# act1b

n: IT'S SUPER EFFECTIVE

`bb({mouth:"smile", eyes:"smile"});`

b: I am best protector!

n: BUT YOU'RE NOT DONE SAVING YOUR HUMAN YET

n: GET YOUR HUMAN'S ENERGY BAR TO ZERO

n: YOUR MOVES ARE: FEAR OF *BEING HARMED,* *BEING UNLOVED,* AND *BEING A BAD PERSON*

n: (PRO TIP: TRY PLAYING THE CHOICES THAT MOST HIT YOUR DEEPEST, DARKEST FEARS!)

h: ...

`hong({body:"putaway"})`

h: you know what maybe it's time to check my phone.

`hong({body:"phone1", mouth:"neutral", eyes:"neutral"})`

n: PROTECT YOUR HUMAN

n: FROM THE WORLD. FROM OTHER PEOPLE. FROM THEMSELF.

n: GOOD LUCK

(...500)

`Game.clearText()`

(...500)

(#act1c)

# act1c

n: ROUND ONE: *FIGHT!*

`bb({body:"normal", mouth:"normal", eyes:"normal"});`

h: Huh. Facebook feed says there's a party happening this weekend.

`bb({eyes:"uncertain"});`

b: Doesn't that weirdo throw a party *every* weekend?

`bb({eyes:"uncertain_right"});`

b: Must be some kind of underlying neurosis there.

`hong({eyes:"surprise"});`

h: Also, I got an invite?

`bb({eyes:"narrow", mouth:"normal"});`

b: Well then!

[Say yes, or you'll die from loneliness](#act1c_loner)

[Say no, it's probably full of lethal drugs](#act1c_drugs)

[Ignore it, you just make parties sad](#act1c_sad)

# act1c_loner

{{if _.fifteencigs}}
b: Fifteen cigarettes a day, human. Fifteen.
{{/if}}

{{if !_.fifteencigs}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if !_.fifteencigs}}
b: And then no one will show up at your funeral then they'll just dump your ashes into the ocean and you become whale poop.
{{/if}}

{{if !_.fifteencigs}} `_.whalepoop = true` {{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("10p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

{{if !_.fifteencigs}}
b: So yeah you should go to that party.
{{/if}}

{{if _.seppuku}}
b: Just bring a textbook to study while you're there.
{{/if}}

{{if _.whitebread}}
b: Just as long as they don't serve WHITE BREAD
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: GOD. If it'll make you shut up, fine.

h: I'll say yes.

{{if _.whalepoop}}
b: Whale poop, human. Whale poop.
{{/if}}

`_.partyinvite="yes"`

(#act1d)

# act1c_drugs

`bb({mouth:"small", eyes:"fear"});`

{{if _.whitebread}}
b: or even worse... WHITE BREAD
{{/if}}

{{if _.whitebread}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if _.whitebread}}
b: You'll overdose on so much meth and white bread they won't be able to fit your fat corpse into the cremation furnace.
{{/if}}

{{if !_.whitebread}}
b: You'll overdose on so many drugs the undertaker will wonder how your body was *already* embalmed.
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("10p", "harm");
```

(...2500)

{{if _.seppuku}}
b: Besides, can't party, you need to study so your parents don't commit seppuku.
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: GOD. If it'll make you shut up, fine.

h: I'll say no.

`_.partyinvite="no"`

(#act1d)

# act1c_sad

`bb({eyes:"uncertain_right", mouth:"normal"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.fifteencigs}}
b: All you ever do is cry in a corner and worry about how loneliness is as deadly as 15 cigarettes a day.
{{/if}}

{{if _.seppuku}}
b: All you ever do at parties is worry about how you should be studying instead.
{{/if}}

{{if _.whitebread}}
b: All you ever do is just panic about the unhealthy food options and think about how every tiny bit is going to kill you.
{{/if}}

```
bb({mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"lookaway"});
```

h: gee i wonder why

`hong({eyes:"neutral"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: So if you go you'll make them feel bad, but if you reject their invite you'll also make them feel bad!

`bb({body:"fear", eyes:"fear"});`

`Game.OVERRIDE_TEXT_SPEED = 2.0;`

b: ALL YOU DO IS MAKE PEOPLE FEEL BAD, SO YOU SHOULD FEEL BAD

```
hong({mouth:"shock", eyes:"shock"});
attack("10p", "bad");
```

(...2500)

`hong({mouth:"anger", eyes:"anger"});`

h: Ugh. If it'll make you shut up, fine.

h: I'll ignore the invite.

`_.partyinvite="ignore"`

(#act1d)

# act1d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"annoyed"});
```

h: Anyway. Facebook's too much. I need something calmer, less anxiety-producing.

`hong({eyes:"neutral"});`

h: What's new on Twitter?

`bb({eyes:"look"});`

[Oh no, look at that horrible news story!](#act1d_news)

[Oh no, is that a subtweet of *you?*](#act1d_subtweet)

[hey, a GIF of a cat drinking milk](#act1d_milk)


# act1d_news

`bb({eyes:"pained1"});`

b: God, it feels like the world's burning, isn't it?

```
bb({eyes:"pained2"});
hong({mouth:"sad", eyes:"sad"});
```

b: It feels like it's all ending, like everything's dying and we're doomed and there's nothing anyone can do about it.

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
bb({mouth:"shut"});
```

b: ...

`bb({mouth:"smile", eyes:"smile"});`

b: Let's retweet that story!

```
hong({mouth:"shock", eyes:"shock"});
attack("10p", "harm");
```

(...2500)

`_.badnews=true`

```
hong({mouth:"anger", eyes:"anger"});
bb({body:"normal", mouth:"normal", eyes:"uncertain"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Okay I'll retweet it just please be quiet!

`hong({mouth:"neutral", eyes:"annoyed"});`

h: Screw it, let's look at Snapchat.

(#act1e)


# act1d_subtweet

`hong({eyes:"annoyed"});`

h: ...probably not?

`bb({eyes:"narrow", mouth:"small"});`

b: but what if they're all talking behind your back

h: They're n--

`bb({body:"fear", eyes:"fear", mouth:"normal"});`

b: IN FRONT OF YOUR BACK

`hong({eyes:"sad", mouth:"sad"});`

h: I d--

`bb({eyes:"narrow", mouth:"small"});`

b: but *what if*

h: S--

`bb({eyes:"narrow_eyebrow"});`

b: *what if*

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
hong({mouth:"shut"});
```

h: ...

(...1000)

```
hong({mouth:"shock", eyes:"shock"});
attack("10p", "alone");
```

(...2500)

`_.subtweet=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"uncertain"});
```

h: o-KAY, gonna try Snapchat.

(#act1e)

# act1d_milk

`hong({mouth:"smile", eyes:"neutral"});`

h: Heh ya that's cute I'll retweet th--

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream_anger"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: CATS CAN'T DIGEST MILK AND YOU'RE A TERRIBLE PERSON FOR ENJOYING ANIMAL ABUSE

```
bb({body:"normal", mouth:"normal", eyes:"narrow"});
attack("10p", "bad");
```

(...2500)


`_.catmilk=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"uncertain"});
```

h: o-KAY, gonna try Snapchat.

(#act1e)

# act1e

`hong({mouth:"neutral", eyes:"neutral"});`

h: Huh, photos from yesterday night. So *that's* what those weekly parties are like.

{{if _.partyinvite=="yes"}} (#act1e_said_yes) {{/if}}

{{if _.partyinvite=="no"}} (#act1e_said_no) {{/if}}

{{if _.partyinvite=="ignore"}} (#act1e_said_ignore) {{/if}}

# act1e_said_yes

`hong({mouth:"sad", eyes:"annoyed"});`

h: Oof, looks way too crowded for my anxiety.

h: Maybe I shouldn't have said yes to the invite?

```
hong({mouth:"neutral", eyes:"neutral"});
bb({mouth:"normal", eyes:"normal"});
```

[Change your answer? You unreliable jerk!](#act1e_yes_dontchange)

[Change your answer! It's too crowded!](#act1e_yes_changetono)

{{if _.subtweet}}
[yeah they were totally subtweeting you](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[wait you retweeted that story without fact-checking](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[You know, you've got really bad posture?](#act1e_ignore_posture)
{{/if}}

# act1e_yes_dontchange

```
bb({eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: They were counting on you to come and now you're betraying their trust? Do you wanna die alone?!

{{if _.fifteencigs}}
b: FIFTEEN. CIGARETTES.
{{/if}}

{{if _.whalepoop}}
b: WHALE. POOP.
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("10p", "alone");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Shut up shut up I'll keep it as yes!

(#act1f)

# act1e_yes_changetono

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Don't you know about human stampedes?

```
bb({body:"fear", mouth:"small", eyes:"narrow"});
hong({eyes:"sad", mouth:"sad"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: In 2003 a Rhode Island nightclub had a fire and the panic made people jam the exits so 100 people were crushed or burned to death-

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({mouth:"shock"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: DO YOU WANT THAT TO HAPPEN TO YOU-

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 2.5;
```

b: SAY NO SAY NO SAY NO SAY NO SAY NO SAY NO SAY NO SAY NO SAY N-


```
bb({body:"normal", eyes:"fear", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("10p", "harm");
```

(...2500)

```
hong({eyes:"anger", mouth:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Shut up shut up I'll change my answer to no! God!

(#act1f)

# act1e_said_no

`hong({mouth:"sad", eyes:"sad"});`

h: Hm... that looks really fun.

h: Maybe I shouldn't have said no to the invite?

`bb({mouth:"normal", eyes:"normal"});`

[Change your answer? You unreliable jerk!](#act1e_no_dontchange)

[Change your answer! Don't die alone!](#act1e_no_changetoyes)

{{if _.subtweet}}
[yeah they were totally subtweeting you](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[wait you retweeted that story without fact-checking](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[You know, you've got really bad posture?](#act1e_ignore_posture)
{{/if}}

# act1e_no_dontchange

`bb({eyes:"anger"})`

b: Everybody was counting on you! ...to leave them alone and let them have a nice party without you, you horrible disgusting {{if _.whitebread}}white-bread-munching{{/if}} cree--


```
hong({mouth:"shock", eyes:"shock"});
attack("10p", "bad");
```

(...2500)

```
bb({body:"normal", eyes:"uncertain", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Shut up shut up I'll keep it as no!

(#act1f)

# act1e_no_changetoyes

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: Chronic loneliness can increase your cortisol and increase your risk of cardiovascular disease and stroke!

```
hong({mouth:"shock", eyes:"shock"});
attack("10p", "harm");
```

(...2500)

{{if _.fifteencigs}}
b: FIFTEEN. CIGARETTES.
{{/if}}

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Shut up shut up I'll change my answer to yes! God!

(#act1f)

# act1e_ignore_subtweet

```
bb({eyes:"fear", mouth:"small"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: All your problematic tweets have come back to roost!

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.7;
```

b: Just say *one* thing out of line and all your so-called friends will drag you through the street and laugh at your shredded corpse!

```
hong({mouth:"shock", eyes:"shock"});
attack("10p", "alone");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Why are you like this?!

(#act1f)

# act1e_ignore_factcheck

```
bb({eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: You're spreading disinformation!

```
bb({body:"scream_anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: People like you are the reason fascism will arise from the rubble of democracy!

```
bb({body:"normal", eyes:"anger"});
hong({mouth:"shock", eyes:"shock"});
attack("10p", "bad");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Why are you like this?!

(#act1f)

# act1e_ignore_posture

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Do you want to have a pretzel for a spine?!

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Do you want your freak skeleton to end up in the Warren Anatomical Museum?!

```
hong({mouth:"shock", eyes:"shock"});
attack("10p", "harm");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Why are you like this?!

(#act1f)

# act1e_said_ignore

`hong({mouth:"sad", eyes:"sad"});`

h: Hm... that looks really fun.

h: Maybe I shouldn't have ignored the invite?

`bb({mouth:"normal", eyes:"normal"});`

[Keep ignoring, you're still a party pooper](#act1e_ignore_continue)

[Actually, say yes.](#act1e_ignore_changetoyes)

[Actually, say no.](#act1e_ignore_changetono)

# act1e_ignore_continue

`hong({eyes:"annoyed"});`

h: It's kinda rude to keep ignoring them though, no?

`bb({eyes:"normal_right"});`

b: Well other people always ignore *you* so

```
hong({mouth:"shock", eyes:"shock"});
attack("10p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

b: so let's just call it even.

(#act1f)

# act1e_ignore_changetoyes

`hong({eyes:"surprise", mouth:"smile"});`

h: You're... letting me have fun?

b: Well, I mean, loneliness *can* kill you.

`hong({eyes:"neutral", mouth:"neutral"});`

(#act1e_no_changetoyes)

# act1e_ignore_changetono

`bb({eyes:"narrow"});`

b: It's too crowded. Crowds are dangerous.

(#act1e_yes_changetono)


# act1f

```
hong({mouth:"neutral", eyes:"neutral"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: Whatever. New Tinder notification.

`hong({eyes:"surprise", mouth:"smile"})`

h: Oh I got a match! They look cute!

`bb({eyes:"normal_right"})`

b: Is that so, human whom I should clarify is 18+?

```
bb({eyes:"normal"});
hong({eyes:"sad", mouth:"anger"})
```

h: Please, please don't ruin this for m--

```
bb({body:"panic"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: DANGER DANGER DANGER DANGER DANGER DANGER

`bb({body:"fear", eyes:"fear", mouth:"normal"})`

[You're being *used* by other people.](#act1f_used_by_others)

[You're just *using* other people.](#act1f_using_others)

[YOUR MATCH IS A SERIAL KILLER](#act1f_killer)

# act1f_used_by_others

`bb({body:"point_crotch", eyes:"normal", mouth:"normal"})`

b: Random hookups may be able to fill the hole down there

b: but they can never fill the hole

`bb({body:"point_heart", eyes:"pretty", mouth:"small"})`

b: in *here*.

(...3000)

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Point is you're gonna die alone

```
hong({mouth:"shock", eyes:"shock"});
attack("30p", "alone");
```

(...2500)

`_.hookuphole=true`

(#act1g)

# act1f_using_others

`bb({eyes:"narrow", mouth:"small"})`

b: You think other people's genitals are Pokémon for you to collect?

`bb({body:"sing", eyes:"pretty", mouth:"normal"})`

b: ♫ [pokemon theme song]

b: ♫ I wanna be the slutti-est

`bb({eyes:"narrow", mouth:"small"})`

b: ♫ Like no one ever was

`bb({eyes:"pretty"})`

b: ♫ Thighs n' ass, voluptuous breast

`bb({eyes:"fear", mouth:"normal"})`

b: ♫ with sweaty dick and balls!

`bb({eyes:"smile", mouth:"smile"})`

b: ♫ PERVY-MON, GOTTA CA--

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Point is you're a manipulative creep

```
hong({mouth:"shock", eyes:"shock"});
attack("30p", "bad");
```

(...2500)

`_.pokemon=true`

(#act1g)

# act1f_killer

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.whitebread}}
b: They'll trap you in a well and force-feed you white bread to fatten you up so they can wear your skin like a swimsuit!
{{/if}}

{{if _.seppuku}}
b: They'll bludgeon you with a textbook then slice your abdomen open and say "this is what you get for not studying, SEPUKKU'D"
{{/if}}

{{if !_.whitebread && !_.seppuku}}
b: They'll tear your flesh to gory confetti, turn your entrails into streamers, and mix your blood into a punch bowl!
{{/if}}

{{if !_.whitebread && !_.seppuku}}
b: How's THAT for a party invite?!
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("30p", "harm");
```

(...2500)

`_.serialkiller=true`

(#act1g)

# act1g

```
bb({body:"normal", mouth:"normal", eyes:"look"});
hong({body:"2_tired"});
Game.OVERRIDE_TEXT_SPEED = 0.25;
```

h: ...

(...500)

h: i'm so sick of this game.

(...700)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h:
{{if _.fifteencigs}}"loneliness will kill you"... {{/if}}
{{if _.seppuku}}"study or your parents will hate you"... {{/if}}
{{if _.whitebread}}"don't eat that, it'll kill you"... {{/if}}
{{if _.subtweet}}"they're talking behind your back"... {{/if}}
{{if _.badnews}}"the world is burning"... {{/if}}
{{if _.hookuphole}}"you'll die alone"... {{/if}}
{{if _.serialkiller}}"they're a serial killer"... {{/if}}
{{if _.catmilk}}"cats can't digest milk"... {{/if}}
{{if _.pokemon}}a crappy parody song... {{/if}}

h: i just want to live my life.

h: i just want to be free from all this... pain.

`bb({eyes:"look_sad"});`

b: Hey... Human...

`Game.OVERRIDE_TEXT_SPEED = 0.5;`

b: It'll be okay.

(...300)

`bb({body:"point_heart", eyes:"look_sad_smile", mouth:"smile"});`

b: As long as you've got me to protect you, you'll never be in danger.

`bb({body:"normal", eyes:"look_sad", mouth:"smile"});`

b: I promise.

(...600)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({body:"phone1", eyes:"neutral", mouth:"neutral"});
```

h: Last one. Instagram. What you got?

`hong({eyes:"sad"});`

h: It's... more party pictures.

`hong({mouth:"sad"});`

h: Everyone looks so happy.

`hong({mouth:"anger"});`

h: Everyone looks *fine*.

`bb({eyes:"normal_right"});`

b: Speaking of which, about this weekend's party invite. Here's my FINAL decision:

`bb({eyes:"normal"});`

[You should go.](#act1g_go) `Game.OVERRIDE_CHOICE_LINE=true`

[You should not go.](#act1g_dont) `Game.OVERRIDE_CHOICE_LINE=true`

# act1g_go

`_.act1g = "go"`

(#act1h)

# act1g_dont

`_.act1g = "dont"`

(#act1h)

# act1h

b: You sh--

```
bb({eyes:"wat", mouth:"small"});
hong({body:"2_fuck"});
```

h: *FUCK.*

`hong({body:"2_you"});`

h: YOU.

(...500)

b: w

(...1500)

`bb({eyes:"wat_2"});`

b: wha?

`hong({body:"phone1", eyes:"anger", mouth:"anger"});`

h: I'm going to say YES to that party

{{if _.act1g=="go"}}
h: NOT because you want me to, but because *I* want to.
{{/if}}

{{if _.act1g=="dont"}}
h: Precisely BECAUSE you don't want me to.
{{/if}}

`hong({body:"putaway"});`

h: You're NOT in control of me.

`hong({body:"0_sammich", eyes:"0_annoyed", mouth:"0_neutral"});`

h: Now excuse me while I eat this delicious sandwich in goddamn peace.

`hong({body:"2_sammich_eat"})`

(...600)

`hong({body:"2_sammich_eaten", eyes:"0_lookaway", mouth:"0_chew1"})`

(...600)

```
bb({body:"normal", eyes:"uncertain", mouth:"shut"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
```

b: ...

```
bb({eyes:"uncertain_right"});
Game.OVERRIDE_TEXT_SPEED = 1;
```

b: ...

```
bb({eyes:"narrow"});
Game.OVERRIDE_TEXT_SPEED = 4;
```

b: ..................

(...500)

`bb({mouth:"normal"});`

["Alone."](#act1h_loneliness)

["Death."](#act1h_death)

["Bad person."](#act1h_worthless)

# act1h_death

```
hong({body:"3_defeated1"});
attack("30p", "harm");
```

(...2500)

(#act1i)

# act1h_loneliness

```
hong({body:"3_defeated1"});
attack("30p", "alone");
```

(...2500)

(#act1i)

# act1h_worthless

```
hong({body:"3_defeated1"});
attack("30p", "bad");
```

(...2500)

(#act1i)

# act1i

```
hong({body:"3_defeated1"});
bb({mouth:"smile_lock", eyes:"smile"});
```

n: CONGRATULATIONS

n: YOU HAVE SUCCESSFULLY PROTECTED YOUR HUMAN

n: LOOK HOW GRATEFUL THEY ARE

n: NOW THAT THEIR ENERGY IS ZERO, YOU CAN DIRECTLY CONTROL THEIR ACTIONS.

`bb({mouth:"smile", eyes:"normal"});`

n: PICK YOUR ENDING MOVE

`bb({mouth:"normal", eyes:"narrow"});`

n: *FINISH THEM*

[&lt; FIGHT: Destroy your phone! &gt;](#act1i_phone) `Game.OVERRIDE_CHOICE_LINE=true`

[&lt; FLIGHT: Curl up in a ball and cry! &gt;](#act1i_cry) `Game.OVERRIDE_CHOICE_LINE=true`

# act1i_phone

`bb({eyes:"anger", mouth:"normal"})`

b: Your phone was giving you a panic attack!

```
bb({body:"fear", eyes:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Punish it! Destroy your phone! Kill it!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "fight";
```

b: KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL I--

(#act1j)

# act1i_cry

`bb({eyes:"fear"})`

b: The whole world is filled with danger!

```
bb({body:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Do like the armadillo! Curl up into a ball for self-defense!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "flight";
```

b: CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CR-- 

(#act1j)

# act1j

`SceneSetup.act1_outro()`