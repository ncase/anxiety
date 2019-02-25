# act1

`SceneSetup.act1();`

n: THIS IS A HUMAN

`publish("scene", ["add_beebee"])`

n: THIS IS YOU, THE HUMAN'S ANXIETY

h: Oh good, it's you. I was hoping to *not* eat in peace today.

n: YOUR JOB IS TO PROTECT YOUR HUMAN FROM *DANGER*

n: IN FACT, THAT SANDWICH IS PUTTING THEM IN *DANGER* RIGHT NOW

n: QUICK, WARN THEM!

[You're eating alone for lunch! Again!](#act1a_alone)

[You're not studying while eating!](#act1a_study)

[That white bread's bad for you!](#act1a_bread)

# act1a_alone

b: Don't you know loneliness is associated with premature death as much as smoking 15 cigarettes a day?-

`Game.OVERRIDE_TEXT_SPEED = 2;`

b: (Holt-Lunstad et al, 2010, PLoS Medicine)

h: Thanks for citing your sources but--

`Game.OVERRIDE_TEXT_SPEED = 2;`

b: Which means if you don't hang out with someone *right now* you're gonna-

b: DIEEEEEEEEEEEEEEEEEEE

`HP.attackHong("20p")`

(...1000)

`_.fifteencigs = true`

n: YOU USED *FEAR OF BEING UNLOVED*

(#act1b)

# act1a_study

h: I'd rather not get crumbs on my textbo--

`Game.OVERRIDE_TEXT_SPEED = 2.0;`

b: If you don't study you'll be expelled from college and you'll waste your parents' money and then they'll say

b: “you have brought dishonor to our family now we'll all have to commit seppuku”

`Game.OVERRIDE_TEXT_SPEED = 2.0;`

b: and then you'll-

b: DIEEEEEEEEEEEEEEEEEEE

`HP.attackHong("20p")`

(...1000)

`_.seppuku = true`

n: YOU USED *FEAR OF BEING A BAD PERSON*

(#act1b)

# act1a_bread

h: Have those studies been replicat--

`Game.OVERRIDE_TEXT_SPEED = 2;`

b: Processed wheat will spike your blood sugar and ruin your organs so they'll have to amputate all your limbs and then you'll-

b: DIEEEEEEEEEEEEEEEEEEE

`HP.attackHong("20p")`

(...1000)

`_.whitebread = true`

n: YOU USED *FEAR OF BEING HURT*

(#act1b)

# act1b

n: IT'S SUPER EFFECTIVE

b: I am best protector!

n: BUT YOU'RE NOT DONE SAVING YOUR HUMAN YET

n: GET YOUR HUMAN'S "WILLPOWER BAR" TO ZERO

n: YOUR MOVES ARE: FEAR OF *BEING HURT,* *BEING UNLOVED,* AND *BEING A BAD PERSON*

n: (PRO TIP: TRY PLAYING THE CHOICES THAT MOST HIT YOUR DEEPEST, DARKEST FEARS!)

h: ...you know what maybe it's time to check my phone.

n: PROTECT YOUR HUMAN

n: FROM THE WORLD. FROM OTHER PEOPLE. FROM THEMSELF.

n: GOOD LUCK

(#act1c)

# act1c

(...500)

`Game.clearText()`

(...500)

n: ROUND ONE: *FIGHT!*

h: Huh. Facebook feed says there's a party happening this weekend.

b: Doesn't that weirdo throw a party *every* weekend? Must be some kind of underlying neurosis there.

h: Also, I got an invite?

b: Well then!

[Say yes, or you'll die from loneliness](#act1c_loner)

[Say no, it's probably full of lethal drugs](#act1c_drugs)

[Ignore it, you just make parties sad](#act1c_sad)

# act1c_loner

{{if _.fifteencigs}}
b: Fifteen cigarettes a day, human. Fifteen.
{{/if}}

{{if !_.fifteencigs}}
b: And then no one will show up at your funeral then they'll just dump your ashes into the ocean and you become whale poop.
{{/if}}

{{if !_.fifteencigs}} `_.whalepoop = true` {{/if}}

`HP.attackHong("10p")`

(...1000)

{{if !_.fifteencigs}}
b: So yeah you should go to that party.
{{/if}}

{{if _.seppuku}}
b: Just bring a textbook to study while you're there.
{{/if}}

{{if _.whitebread}}
b: Just as long as they don't serve WHITE BREAD
{{/if}}

h: GOD. If it'll make you shut up, fine.

h: I'll say yes.

{{if _.whalepoop}}
b: Whale poop, human. Whale poop.
{{/if}}

`_.partyinvite="yes"`

(#act1d)

# act1c_drugs

{{if _.whitebread}}
b: or even worse... WHITE BREAD
{{/if}}

{{if _.whitebread}}
b: You'll overdose on so much meth and white bread they won't be able to fit your fat corpse into the cremation furnace.
{{/if}}

{{if !_.whitebread}}
b: You'll overdose on so many drugs the undertaker will wonder how your body was *already* embalmed.
{{/if}}

`HP.attackHong("10p")`

(...1000)

{{if _.seppuku}}
b: Besides, can't party, you need to study so your parents don't commit seppuku.
{{/if}}

h: GOD. If it'll make you shut up, fine.

h: I'll say no.

`_.partyinvite="no"`

(#act1d)

# act1c_sad

{{if _.fifteencigs}}
b: All you ever do is cry in a corner and worry about how loneliness is as deadly as 15 cigarettes a day.
{{/if}}

{{if _.seppuku}}
b: All you ever do at parties is worry about how you should be studying instead.
{{/if}}

{{if _.whitebread}}
b: All you ever do is just panic about the unhealthy food options and think about how every tiny bit is going to kill you.
{{/if}}

h: GEE I WONDER WHY

`HP.attackHong("10p")`

(...1000)

h: Ugh. If it'll make you shut up, fine.

h: I'll ignore the invite.

`_.partyinvite="ignore"`

(#act1d)

# act1d

h: Anyway. Facebook's too much. I need something calmer, less anxiety-producing.

h: What's new on Twitter?

[Oh no, look at that horrible news story!](#act1d_news)

[Oh no, is that a subtweet of *you?*](#act1d_subtweet)

[hey, a GIF of a cat drinking milk](#act1d_milk)


# act1d_news

b: God... it feels like the world's burning, isn't it?

b: It feels like it's all ending, that everything and everyone we know will die slowly and painfully and there's nothing we can do about it, not even to comfort each other.

`Game.OVERRIDE_TEXT_SPEED = 0.5;`

b: ...

b: Let's retweet it!

`HP.attackHong("20p")`

(...1000)

`_.badnews=true`

(#act1e)

# act1d_subtweet

h: ...probably not?

b: but what if they're all talking behind your back

h: They're n--

b: IN FRONT OF YOUR BACK

h: I d--

b: but *what if*

h: S--

b: *what if*

`Game.OVERRIDE_TEXT_SPEED = 0.5;`

h: ...

(...1000)

`HP.attackHong("20p")`

(...1000)

`_.subtweet=true`

(#act1e)

# act1d_milk

h: Heh ya that's cute I'll retweet th--

b: CATS CAN'T DIGEST MILK AND YOU'RE A TERRIBLE PERSON FOR GETTING OFF ON ANIMAL ABUSE

`HP.attackHong("20p")`

(...1000)

`_.catmilk=true`

(#act1e)

# act1e

h: o-KAY, gonna try Snapchat.

h: Huh, photos from yesterday night. So *that's* what those weekly parties are like.

{{if _.partyinvite=="yes"}} (#act1e_said_yes) {{/if}}

{{if _.partyinvite=="no"}} (#act1e_said_no) {{/if}}

{{if _.partyinvite=="ignore"}} (#act1e_said_ignore) {{/if}}

# act1e_said_yes

h: Oof, looks way too crowded for my anxiety.

b: That's me!

h: Maybe I shouldn't have said yes to the invite?

[Change your answer? You unreliable jerk!](#act1e_yes_dontchange)

[Change your answer! It's too crowded!](#act1e_yes_changetono)

{{if _.subtweet}}
[yeah they were definitely subtweeting you](#act1e_ignore_subtweet)
{{/if}}

{{if !_.subtweet}}
[OH CRAP YOU LEFT THE STOVE ON](#act1e_ignore_stove)
{{/if}}

# act1e_yes_dontchange

b: They were counting on you to come and now you're betraying their trust? Do you wanna die alone?!

{{if _.fifteencigs}}
b: FIFTEEN. CIGARETTES.
{{/if}}

{{if _.whalepoop}}
b: WHALE. POOP.
{{/if}}

`HP.attackHong("10p")`

(...1000)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h: Shut up shut up I'll keep it as yes!

(#act1f)

# act1e_yes_changetono

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: Don't you know about human stampedes? In 2003 a nightclub in Rhode Island had a fire and the ensuing panic caused people to jam the exits and so 100 people were crushed or burned to death-

`Game.OVERRIDE_TEXT_SPEED = 2.0;`

b: DO YOU WANT THAT TO HAPPEN TO YOU-

`Game.OVERRIDE_TEXT_SPEED = 2.5;`

b: SAY NO SAY NO SAY NO SAY NO SAY N-

`HP.attackHong("10p")`

(...1000)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h: Shut up shut up I'll change my answer to no! God!

(#act1f)

# act1e_said_no

h: Hm... that looks really fun.

h: Maybe I shouldn't have said no to the invite?

[Change your answer? You unreliable jerk!](#act1e_no_dontchange)

[Change your answer! Don't die alone!](#act1e_no_changetoyes)

{{if _.subtweet}}
[yeah they were definitely subtweeting you](#act1e_ignore_subtweet)
{{/if}}

{{if !_.subtweet}}
[OH CRAP YOU LEFT THE STOVE ON](#act1e_ignore_stove)
{{/if}}

# act1e_no_dontchange

b: Everybody was counting on you! ...To leave them alone and let them have a nice party without you, you horrible disgusting {{if _.whitebread}}white-bread-munching{{/if}} cree--

`HP.attackHong("10p")`

(...1000)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h: Shut up shut up I'll keep it as no!

(#act1f)

# act1e_no_changetoyes

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: Chronic loneliness can increase your cortisol levels to unhealthy levels thus increasing your risk for stroke and cardiovascular disease as well as greatly impairing your immune system making you vulnerable to--

`HP.attackHong("10p")`

(...1000)

{{if _.fifteencigs}}
b: FIFTEEN. CIGARETTES.
{{/if}}

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h: Shut up shut up I'll change my answer to yes! God!

(#act1f)

# act1e_ignore_subtweet

h: SHUT. UP.

`_.missed_act1e=true`

(#act1f)

# act1e_ignore_stove

h: OH F--

`Game.OVERRIDE_TEXT_SPEED = 0.5;`

h: ...

h: My dorm doesn't have a stove.

b: Oh. Right.

`miss`

`_.missed_act1e=true`

(#act1f)

# act1e_said_ignore

h: Hm... that looks really fun.

h: Maybe I shouldn't have ignored the invite?

[Keep ignoring, you're still a party pooper](#act1e_ignore_continue)

[Actually, say yes](#act1e_ignore_changetoyes)

[Actually, say no](#act1e_ignore_changetono)

# act1e_ignore_continue

h: It's kinda rude to keep ignoring them though, no?

b: Well other people always ignore *you* so

`HP.attackHong("10p")`

(...1000)

b: Let's just call it even

(#act1f)

# act1e_ignore_changetoyes

h: You're... letting me have fun?

b: Well, I mean, loneliness *can* kill you.

(#act1e_no_changetoyes)

# act1e_ignore_changetono

b: It's too crowded. Crowds are dangerous.

(#act1e_yes_changetono)


# act1f

h: Whatever. New Tinder notification.

h: Oh I got a match!

b: Is that so, human who I should clarify is an 18+ *college* student?

h: Please, please don't ruin this for m--

b: DANGER-

b: DANGER-

b: DANGER-

b: DANGER-

[You're being *used* by other people.](#act1f_used_by_others)

[You're just *using* other people.](#act1f_using_others)

[YOUR MATCH IS A SERIAL KILLER](#act1f_killer)

# act1f_used_by_others

b: Random hookups may be able to fill the hole down there...

b: but they can never fill the hole...

b: in *here*. (points to heart)

(...500)

b: point is you're gonna die alone

`HP.attackHong(_.missed_act1e ? "40p" : "30p")`

(...1000)

`_.hookuphole=true`

(#act1g)

# act1f_using_others

b: You think other people's genitals are Pokémon for you to collect?

`Game.OVERRIDE_TEXT_SPEED = 2;`

b: 🎵 [pokemon theme song]

b: 🎵 I wanna be the slutti-est

b: 🎵 Like no one ever was

b: 🎵 Thighs n' ass, voluptuous breast

b: 🎵 with sweaty dick and balls!

b: 🎵 PERVY-MON, GOTTA C-

b: point is you're a manipulative creep

`HP.attackHong(_.missed_act1e ? "40p" : "30p")`

(...1000)

`_.pokemon=true`

(#act1g)

# act1f_killer

{{if _.whitebread}}
b: They'll trap you in a well and then force-feed you white bread to fatten you up so they can wear your stretched-out skin like a swimsuit!
{{/if}}

{{if _.seppuku}}
b: They'll bludgeon you with a textbook then slice your abdomen open and say "see this is what you get for not studying, SEPUKKU'D"
{{/if}}

{{if !_.whitebread && !_.seppuku}}
b: They'll tear your flesh to gory confetti, turn your entrails into streamers, and mix your blood into a punch bowl!
{{/if}}

{{if !_.whitebread && !_.seppuku}}
b: how's THAT for a party invite
{{/if}}

`HP.attackHong(_.missed_act1e ? "40p" : "30p")`

(...1000)

`_.serialkiller=true`

(#act1g)

# act1g

`Game.OVERRIDE_TEXT_SPEED = 0.25;`

h: ...

(...500)

h: i'm so sick of this game.

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h:
{{if _.fifteencigs}}"loneliness will kill you"...{{/if}}
{{if _.seppuku}}"study or your parents will hate you"...{{/if}}
{{if _.whitebread}}"don't eat that, it'll kill you"...{{/if}}
{{if _.subtweet}}"they're talking behind your back"...{{/if}}
{{if _.badnews}}"the world is burning"...{{/if}}
{{if _.hookuphole}}"you'll die alone"...{{/if}}
{{if _.serialkiller}}"they're a serial killer"...{{/if}}
{{if _.catmilk}}"cats can't digest milk"...{{/if}}
{{if _.pokemon}}a crappy parody song...{{/if}}

h: i just want to live my life.

h: i just want to be free from all this... pain.

`Game.OVERRIDE_TEXT_SPEED = 0.5;`

b: ...

(...500)

b: Good thing you've got *me* to protect you from pain!

h: Last one. Instagram. What you got?

h: It's... more party pictures.

h: Everyone looks so happy.

h: Everyone looks *fine*.

b: Speaking of which, about this weekend's party invite. Here's my FINAL decision:

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

h: *FUCK.* YOU.

b: w

(...1500)

b: wha?

h: I'm going to say YES to that party

{{if _.act1g=="go"}}
h: NOT because you want me to, but because *I* want to.
{{/if}}

{{if _.act1g=="dont"}}
h: Precisely BECAUSE you don't want me to.
{{/if}}

h: You're NOT in control of me.

h: Now excuse me while I eat this delicious sandwich in goddamn peace.

`Game.OVERRIDE_TEXT_SPEED = 0.5;`

b: ...

`Game.OVERRIDE_TEXT_SPEED = 1;`

b: ...

`Game.OVERRIDE_TEXT_SPEED = 4;`

b: ..................

(...500)

["Death"](#act1h_death)

["Loneliness"](#act1h_loneliness)

["Worthless"](#act1h_worthless)

# act1h_death

`HP.attackHong("100p")`

(...1000)

(#act1i)

# act1h_loneliness

`HP.attackHong("100p")`

(...1000)

(#act1i)

# act1h_worthless

`HP.attackHong("100p")`

(...1000)

(#act1i)

# act1i

n: CONGRATULATIONS

n: YOU HAVE SUCCESSFULLY PROTECTED YOUR HUMAN

n: LOOK HOW GRATEFUL THEY ARE

n: NOW THAT THEY HAVE ZERO WILLPOWER, YOU CAN CONTROL THEIR ACTIONS.

n: PICK YOUR ENDING MOVE

n: *FINISH THEM*

[&lt; FIGHT: Destroy your phone! &gt;](#act1i_phone) `Game.OVERRIDE_CHOICE_LINE=true`

[&lt; FLIGHT: Curl up in a ball and cry! &gt;](#act1i_cry) `Game.OVERRIDE_CHOICE_LINE=true`

# act1i_phone

b: Your phone's giving you a panic attack!

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: Punish it! Destroy your phone! Kill it!

`Game.OVERRIDE_TEXT_SPEED = 2.5;`

b: KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL IT KILL I--

h: (THROWS PHONE ONTO CONCRETE)

(#act1j)

# act1i_cry

b: The whole world is filled with danger!

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: Do like the armadillo! Curl up into a ball for self-defense!

`Game.OVERRIDE_TEXT_SPEED = 2.5;`

b: CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CRY CURL UP AND CR-- 

h: (CURLS UP AND CRIES)

(#act1j)

# act1j

(...1000)

n: YOU WIN

n: END OF *ACT I*