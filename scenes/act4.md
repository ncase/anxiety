# act4

```
SceneSetup.act4();
/*Game.FORCE_CANT_SKIP = true;*/
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

(...901)

`hong({body:"sigh_1"})`

(...601)

```
hong({body:"sigh_2"});
bb({eyes:"look_down"});
```

h: *sigh*

```
hong({body:"hold", eyes:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: So what the hell was the moral of this story?

`hong({body:"one_up", eyes:"annoyed"})`

h: What did we even *learn*? I *was* being stupid, my "friends" *were* using me, and we almost goddamn *died*.

`hong({body:"normal", eyes:"normal"})`

{{if _.INJURED}}
[Yeah, not to mention the hospital bill.](#act4a_bill)
{{/if}}

{{if !_.INJURED}}
[Yeah, not to mention the liver damage.](#act4a_liver)
{{/if}}

[Yeah, that *was* the worst-case scenario.](#act4a_worst)

[Yeah, I was right.](#act4a_right)

# act4a_bill

`hong({eyes:"annoyed_l", mouth:"narrow"});`

h: Right. I don't think my insurance plan covers "being a dumbass".

`hong({eyes:"annoyed", mouth:"normal"});`

b: And yet... we survived!

`hong({eyes:"normal"});`

h: ?

(#act4b)

# act4a_liver

`bb({eyes:"normal_d"});`

b: We definitely shaved a few years off our life expectancy...

`bb({eyes:"surprise"});`

b: But at least we still *have* a life expectancy! We survived!

(#act4b)

# act4a_worst

`bb({eyes:"normal_d"});`

b: And yet...

h: Hm?

`bb({eyes:"surprise"});`

b: We survived!

(#act4b)

# act4a_right

`bb({eyes:"normal_d"});`

b: But... you were right, too.

`hong({eyes:"surprise"});`

h: Hm?

`bb({eyes:"normal"});`

b: I *was* the wolf who cried wolf. So when *actual* danger came, you – justifiably – didn't believe me.

`bb({eyes:"surprise_r"});`

b: And yet, we survived!

(#act4b)

# act4b

```
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

b: Despite everything, we're still here.

`hong({eyes:"suspect"});`

{{if _.INJURED}}
h: You seem pretty calm considering we just had a near-death experience.
{{/if}}

{{if !_.INJURED}}
h: You seem pretty calm considering we just had a *near*-near-death experience.
{{/if}}

```
hong({eyes:"normal"});
bb({eyes:"annoyed_d", mouth:"narrow"});
```

b: Well, it makes everything else less scary in comparison. It's also got me thinking.

`bb({eyes:"normal", mouth:"normal"});`

b: If me fighting you sucks...

h: But me fighting *you* also sucks...

`bb({eyes:"normal_r"})`

b: Because no matter who wins, we *both* lose, so maybe...

`bb({eyes:"normal"})`

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

```
publish("smash",[2]);
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

(...2001)

`Game.FORCE_CANT_SKIP = false;`

(#act4b_2)

# act4b_2

```
music('dontfight',{fade:5, volume:0.6});
bb({eyes:"annoyed_d"});
```

b: I'm not a Big Bad Wolf. But I'm not a guard-wolf either.

`bb({eyes:"sad_d"})`

b: I'm a battered shelter dog.

`bb({eyes:"sad"})`

b: We've been through rough stuff, possibly trauma, so that's why sometimes I over-react and go--

```
sfx("yaps", {volume:0.6});
bb({body:"yap_1"});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 215;
```

b: YAP YAP YAP YAP YAP

(...1884)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_CANT_SKIP = false;
bb({body:"normal", mouth:"scream", eyes:"scream_sad"});
```

b: But I don't *want* to be a cowardly dog! I want to protect you! I want to be a good dog!

`bb({eyes:"sad", mouth:"normal"});`

b: Human... will you help tame this wolf?

`hong({eyes:"sad"})`

h: I... I'll try.

`hong({eyes:"normal_l", body:"chin", mouth:"narrow"})`

h: Okay. Healthy relationship with emotions. Relationships need communication. So, let's communicate.

`hong({eyes:"normal", body:"hands_1", mouth:"normal"})`

h: The next five minutes are going to sound super cheesy, but let's fake it 'til we make it.

```
hong({body:"hands_2", mouth:"normal"});
```

h: Dear inner wolf... how are *you* feeling?

n2: TOTAL FEARS USED:

n2: *HARMED* {{_.attack_harm_total}}, *UNLOVED* {{_.attack_alone_total}}, *BAD PERSON* {{_.attack_bad_total}}

n2: WHAT FEAR DO YOU WANT TO TALK ABOUT FIRST? (YOU CAN DO THE OTHERS LATER)

```
_.a4_fears_discussed = 0;
_.num_thanks = 0;
hong({body:"normal"});
bb({eyes:"normal"});
```

(#act4c)

[I'm scared we'll be harmed.](#act4_harm)

[I'm scared we'll be alone.](#act4_alone)

[I'm scared we're bad people.](#act4_bad)

# act4_harm

```
_.a4_talked_about_harm = true;
_.a4_fears_discussed += 1;
```

`//b: (insert callbacks to harm-fears you used)`

b: I want to protect your need for physical safety,

b: But, gosh, there's so many dangerous things in the world!

{{if _.a4_fears_discussed==1}}
b: I dunno, enough of *me* choosing what to say next. What do *you* say, human?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Again, back to you, human. What do you think?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: More thoughts, human?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[You're right. So let's protect ourselves.](#act4_harm_skills)

[Let's expose ourselves to *more* danger.](#act4_harm_exposure)

[Thank you.](#act4_thanks) `_.thanks_for = "physical safety";`

# act4_harm_skills

b: But... how? I have fangs and claws, but I'm just a metaphor.

h: We could pick up self-defense? Improve our general health? Learn to better assert our boundaries?

b: Maybe, but...

[Where do we even start?](#act4_harm_skills_start)

[What if they still don't work?](#act4_harm_skills_work)

[What if we go overboard on "safety"?](#act4_harm_skills_overboard)

# act4_harm_skills_start

b: There's so much to do, so much we need to fix about ourselves. What do we even *begin* with?

h: We're beginning right now.

b: Eh?

h: I mean, we're practicing good communication right now. Which will help us detect danger better, with fewer false positives,

h: And that *will* help protect us from harm!

h: Therefore: tis *is* self-defense training.

b: Huh. I was expecting more of this:

b: (insert karate chop pose)

h: Heh.

(#act4_something_else)

# act4_harm_skills_work

h: True, there's no way to 100% protect ourselves...

h: But even a 1% improvement is still worth something, right?

b: You're seeing the glass as not 99% empty, but 1% full?

h: Which is still worth something if you're stranded in the desert!

b: Heh. Bottoms up, then.

(#act4_something_else)

# act4_harm_skills_overboard

b: I mean, the whole reason you ignored my warnings was because *I* went overboard with safety! 

h: Naw, you're right. We would want to do safety in moderation. Everything in moderation.

b: Sorry, *EVERYTHING* in moderation?

h: *A moderate number of things* in moderation.

b: Thank you for making your statements recursively self-consistent.

(#act4_something_else)


# act4_harm_exposure

b: *WHAT*

h: I mean, let's say a dog is scared of thunder.

h: One trick trainers use is to play a recording of thunder at a low volume, then give the dog a treat for staying calm.

h: Over several days, the trainer raises the volume bit by bit, until the dog has overcome their fear of thunder.

h: It's called exposure therapy!

h: Since you're a dog, it should work for you too, right? All mammals have the same fight-or-flight response.

[What if we desensitize *too* much?](#act4_harm_exposure_overboard)

[What if we're exposed to *real* danger?](#act4_harm_exposure_hurt)

[I'm a wolf, not a dog.](#act4_harm_exposure_dog)

# act4_harm_exposure_dog

h: And I'll show you kindness and patience 'til you're domesticated into a cute lil' puppy.

b: ...

b: D'aw.

(#act4_something_else)

# act4_harm_exposure_overboard

b: We *just* saw what happens if you shut down your fear – you put yourself in *actually* dangerous situations.

b: Besides, won't *too* much desensitization turn us into psychopaths?

b: Soon we'll give ourselves treats while watching snuff murder porn!

h: I... think there's a line between that and the thunder.

b: But exactly *where*, human? *Where?!*

h: I don't know. But *you* can help me!

h: Working and negotiating with you, we'll draw that line.

b: Okay. But I've got no opposable thumbs, so you have to do the drawing.

(#act4_something_else)

# act4_harm_exposure_hurt

{{if _.INJURED}}
b: For example: we jumped off a freaking *roof!*
{{/if}}

{{if !_.INJURED}}
b: For example: we almost jumped off a freaking *roof!*
{{/if}}

h: Nah you're right. One *can* go too far.

h: But that's why, if we do exposure therapy, we'll start small, and make small steps upward.

h: Just before we hit *actual* danger, we stop.

b: Yeah I draw the line between hearing loud thunder, and standing in a storm with a tall pointy hat.

(#act4_something_else)

# act4_thanks

`_.num_thanks += 1`

{{if _.num_thanks==1}}
(#act4_thanks_1)
{{/if}}

{{if _.num_thanks==2}}
(#act4_thanks_2)
{{/if}}

{{if _.num_thanks==3}}
(#act4_thanks_3)
{{/if}}

# act4_thanks_1

b: ...

b: Wait, no arguments for or against what I'm feeling? Just... "thank you"?

h: Yeah! Thank you for showing your concern for my {{_.thanks_for}}.

b: ...

h: You okay?

b: You've never said *thank you* to me before.

h: Aw you big fuzzy-wuzzy panic-wolf.

(#act4_something_else)

# act4_thanks_2

h: Even if you over-react, I appreciate you look out for my {{_.thanks_for}}.

b: Wait... you're not just repeating "thank you" to avoid actually talking about these fears, are you?

h: Well, stuff's complicated, and I don't always have answers ready.

h: It's not like life gives you a list of 3 pre-made dialogue responses.

h: But for now, at least I can at least say thanks.

b: Well, thank you too, for listening to me patiently.

b: You small hairless flesh-mammal.

(#act4_something_else)

# act4_thanks_3

h: Even if your yapping scares me, you're simply trying to protect my {{_.thanks_for}}.

b: Okay, if you keep flattering me like this, the internet's gonna get some weird ideas about us.

h: C'mon, I'm just a vulnerable college-age kid and you're a big, scary wolf. What's the worst that cou--

h: Actually, do not answer that.

(#act4_something_else)




# act4_alone

```
_.a4_talked_about_alone = true;
_.a4_fears_discussed += 1;
```

`//b: (insert callbacks to alone-fears you used)`

b: I want to make sure you get your social needs met, the human need to belong...

b: But, I worry: will we ever be loved? *Can* we ever be loved?

{{if _.a4_fears_discussed==1}}
b: I dunno, enough of *me* choosing what to say next. What do *you* say, human?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Again, back to you, human. What do you think?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: More thoughts, human?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[I agree I'd like to work on our social life.](#act4_alone_skills)

[I think people like us. Let's find out?](#act4_alone_experiment)

[Thank you.](#act4_thanks) `_.thanks_for = "social belonging";`

# act4_alone_skills

h: We could practice skills like starting conversations, sharing interests, asking, listening, empathizing, etc?

h: Or make better social habits, like scheduling hangouts with friends or regularly going to meetups?

h: Could also learn to get more comfortable with rejection.

h: Or learn to know when people aren't rejecting us, they're just tired or have Resting Bitch Face.

b: That's a lot of options, but...

[Isn't learning to be friendly *manipulative?*](#act4_alone_skills_manipulative)

[Won't being friendly make us *easier to manipulate?*](#act4_alone_skills_manipulated)

[What if we try to get better, and still fail?](#act4_alone_skills_fail)

# act4_alone_skills_manipulative

b: Aren't serial killers who can read their victims' emotions great at "empathy"?

b: Didn't Charles Manson win friends and influence people?

h: No, you're right.

h: "Social skills" mean nothing if we don't genuinely care *for* people.

h: Basically, just don't be a dick.

b: That's a motivational poster caption right there.

h: “Don't Be A Dick”

(#act4_something_else)

# act4_alone_skills_manipulated

b: We'll become a Welcome doormat, saying Please and Thank You as people wipe their feet on us!

b: We'll kiss so much butt, it'll look like we're wearing brown lipstick!

h: Nah, you're right. "Social skills" can't be just about pleasing others, it's also got to be about setting *boundaries.*

h: We can't invite others into our home, if we have no walls to hold up a home.

h: Also... that lipstick mental image... *ew??*

(#act4_something_else)

# act4_alone_skills_fail

h: We might fail. Actually, we *will* fail.

h: And that's fine! Failing is how anyone learns anything new at first!

h: So let's fail our way forward together, yeah?

b: Sure... worst-case scenario we can just skip town and get a fake identity.

b: I think that only costs two bitcoins these days.

(#act4_something_else)

# act4_alone_experiment

h: We could try some experiments!

h: We could ping a friend to hang out, reconnect with an old pal, or even just chat with a barista.

h: I think we may find we're more likable than we suspect.

[What if these experiments fail?](#act4_alone_experiment_fail)

[What if these are small, cheap "wins"?](#act4_alone_experiment_cheap)

[What if this is a burden to others?](#act4_alone_experiment_burden)

# act4_alone_experiment_fail

b: What if our results are non-significant (p>0.05) and no journal will publish our null findings?

h: You're right, it *could* fail! That's good! It's not a *real* experiment if it couldn't.

h: And if we learn that we *are* awkward or inconsiderate, then let's improve our social skills.

h: Like starting conversations, sharing interests, listening, empathizing, asking questions...

b: ...all that stuff those counselors told us but then we forgot.

h: Yup.

(#act4_something_else)

# act4_alone_experiment_cheap

b: Saying "hi" to the barista isn't exactly gold-medal performance in the Social Butterfly Olympics.

h: It is for *us!*

h: In the social arena, we're not even featherweight class, we're like... quark-weight.

h: If we have to start with small, cheap wins, so be it. Gotta climb the 1st step before the 1000th step.

b: Yeah! Maybe after saying "hi", we can advance to saying... *"How are you?"*

h: *"Not much!"*

(#act4_something_else)

# act4_alone_experiment_burden

b: Maybe the barista just wants to make some dang coffee, not be an *experiment* to see if our social skills suck.

h: Well, if it turns out we *are* being a burden...

h: That's good to know, too!

h: We can then learn how to pro-actively ask people what they're comfortable with, to know and respect others' boundaries.

h: Y'know, all that "inter-personal skills" crap we see in counselor brochures.

(#act4_something_else)



# act4_bad

```
_.a4_talked_about_bad = true;
_.a4_fears_discussed += 1;
```

`//b: (insert callbacks to bad-fears you used)`

b: I want to defend your moral needs, that drive to become a better person,

b: But it just feels like we're so... broken.

{{if _.INJURED}}
b: And don't tell me we're *not* messed up. We jumped off a *roof*.
{{/if}}

{{if !_.INJURED}}
b: And don't tell me we're *not* messed up. We almost jumped off a *roof*.
{{/if}}

{{if _.a4_fears_discussed==1}}
b: I dunno, enough of *me* choosing what to say next. What do *you* say, human?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Again, back to you, human. What do you think?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: More thoughts, human?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[So we're broken. Let's fix us.](#act4_bad_fix)

[So we're broken. Let's accept it.](#act4_bad_accept)

[Thank you.](#act4_thanks) `_.thanks_for = "moral well-being";`

# act4_bad_fix

h: We could slowly build better habits, get our life more in line with what we value,

h: And if needed, we could get professional help – a therapist or counsellor.

h: There's ways to fix us.

[What if we can't fix it all?](#act4_bad_fix_cant)

[What if we fix *too* much?](#act4_bad_fix_too_much)

[We can't afford professional help.](#act4_bad_fix_afford)

# act4_bad_fix_cant

h: Nah, I guess you're right.

h: We can't fix it all.

b: Ahhh I knew it we'll always be broken!

h: But we can at least be *less* broken.

h: Scars heal with time, but they never go away. And that's okay.

b: I guess. Besides,

b: Scars are *sexy.*

h: Please do not do that.

(#act4_something_else)

# act4_bad_fix_too_much

b: This feels sick to admit, but... some part of me *wants* to have this disorder.

b: I mean, without it, won't we be *boring?*

b: Without the disorder, won't our art become stale and bland?

b: Without the disorder, won't we be unable to connect with our pals who have the disorder?

b: If we're content with life, will we stop driving ourselves to do great things?

h: ...

h: If we even have a fear of "running out of fears",

h: I don't think we're gonna run out of fears.

b: Oh, yeah! Whew! What a relief!

(#act4_something_else)

# act4_bad_fix_afford

b: "Doc, I'm anxious that I'm paying $100/hr just to hear you say *how does that make you feel?*"

b: "Mm-hmm. And how does that make you feel?"

h: Nah, that's a totally reasonable worry.

h: And it genuinely sucks that mental healthcare isn't affordable for lots of folks.

h: Still, there are some cheap or free options:

h: Support groups, online therapy, student/non-profit health centers...

h: Picking up a free meditation habit, watching videos on evidence-based mental health...

h: Borrowing a library book on Cognitive Behavioral Therapy or Acceptance & Commitment Therapy...

h: There's a full list of resources at the end of this game!

b: Well *that* fourth wall didn't last long.

h: Mental well-being is more important than some measly narrative convention.

(#act4_something_else)


# act4_bad_accept

h: I mean, that's what therapists say right? Accept all your emotions, even the negative ones?

b: Wait.

["Accept" as in *give up*?](#act4_bad_accept_give_up)

["Accept" as in *approve*?](#act4_bad_accept_approve)

["Accept" as in *take literally*?](#act4_bad_accept_literally)

# act4_bad_accept_give_up

b: Do you think Martin Luther King would've said, "Shucks we can't sit in the front of the bus, let's just *accept* it?"

b: Why does the Self-Help Industrial Complex think waving the white flag is some *profound wisdom?*

h: I think therapists mean "accept" bad things as in: acknowledging they exist and are hard to change,

h: But not necessarily giving up a commitment to change.

b: Then therapists should say *acknowledge*, not *accept*.

h: Yeah come to think of it, "accept" is kinda confusing.

b: Well, I *acknowledge* that.

(#act4_something_else)

# act4_bad_accept_approve

b: Like it's *good* that we're broken or something? No!

b: All those dang Hollywood screenwriters who romanticize mental illness are full of crud!

b: Having a mental disorder *sucks!* It robs people of *lives!* Why should we "accept" that?!

h: I think therapists mean "accept" our emotions as in: be patient with them.

h: Like how struggling in quicksand makes you sink faster, and the solution is to patiently lie flat,

{{if _.INJURED}}
h: Fighting against you, my fear, lead me to jump off a roof.
{{/if}}

{{if !_.INJURED}}
h: Fighting against you, my fear, almost lead me to jump off a roof.
{{/if}}

h: Instead, the solution is to do what we're doing now – not to fight, but to patiently be with each other.

b: Then they should say *that* instead of some problematic word like "accept".

h: Yeah come to think of it, "accept" kind of sucks.

b: I do not accept "accept".

(#act4_something_else)

# act4_bad_accept_literally

b: But we already *know* you shouldn't take me literally!

b: The whole *problem* is that I want to help you, but I suck at using words to do so!

h: I think therapists mean "accept" your emotions as in: "don't fight or ignore them."

h: To listen to you, work *with* you, but not take what you say as 100% literal truth.

b: Then therapists should say *that* instead of some vague confusing word like "accept".

h: I guess they want to help, but suck at using words, too.

(#act4_something_else)




# act4_something_else

{{if _.a4_fears_discussed==1}}
h: Anyway, anything else you wanna chat about?
{{/if}}

{{if _.a4_fears_discussed==2}}
h: So, anything else on your heavy heart?
{{/if}}

{{if _.a4_fears_discussed==3}}
(#act4_something_else_2)
{{/if}}

{{if _.a4_talked_about_harm!=true}}
[I'm scared we'll be harmed.](#act4_harm)
{{/if}}

{{if _.a4_talked_about_alone!=true}}
[I'm scared we'll be alone.](#act4_alone)
{{/if}}

{{if _.a4_talked_about_bad!=true}}
[I'm scared we're bad people.](#act4_bad)
{{/if}}

[Nah, I'm good for now.](#act4c_prelude)

# act4_something_else_2

h: Okay, I think we've talked about all our fears now.

b: Yes, there are only three fears.

h: Yup, exactly three.

b: Convenient.

(#act4c)

# act4c_prelude

h: Good chat, team.

(#act4c)

# act4c

```
Game.clearText();
music(null,{fade:3});
bb({body:"normal", eyes:"normal", mouth:"normal", MOUTH_LOCK:true},0);
hong({body:"normal", eyes:"normal", mouth:"normal"},0);
```

b: ...

`hong({MOUTH_LOCK:true},0)`

h: ...

`bb({eyes:"annoyed_d"})`

b: This isn't some *game*, you know.

`bb({eyes:"angry_d", body:"one_up"})`

b: Building a better relationship with your emotions isn't as simple as clicking buttons on a screen.

`bb({eyes:"sad", body:"normal"})`

b: *Can* we really get along?

b: *Can* we work together, as a team?

`hong({eyes:"sad", body:"one_up"})`

h: Well,

```
hong({eyes:"surprise_l"});
bb({eyes:"normal"});
```

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

`publish("act4", ["alshire", 0]);`

a: W-wo-would you mind if I sat with you for lunch?

`publish("act4", ["alshire", 1]);`

{{if _.TOP_FEAR=="harm"}}
s: *This* is your crush? Why are they sitting alone like a psycho serial killer?
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: Asking your crush if you can sit with them? Do you know how *needy* we sound?!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: *This* is your crush? We interrupted their peace and quiet! We're such a burden!
{{/if}}

`publish("act4", ["alshire", 2]);`

a: I- I mean- it's, it's okay if not, I just...

`publish("act4", ["alshire", 3]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "h2"`

[Wait, didn't I see you at the party?](#act4d_recognition) `publish("act4", ["hong_to_alshire",1])`

[Yeah, of course! Come here.](#act4d_yes) `publish("act4", ["hong_to_alshire",2])`

[Sorry, I need alone time right now.](#act4d_no) `publish("act4", ["hong_to_alshire",8])`

# act4d_recognition

`publish("act4", ["hong_to_alshire",2]);`

h2: Yeah you were on the couch! At the first party I went to...

`publish("act4", ["hong_to_alshire",10]);`

{{if _.a2_ending=="fight"}}
h2: Where I had that panic attack and punched the host.
{{/if}}

{{if _.a2_ending=="flight"}}
h2: Where I had that panic attack and ran out crying.
{{/if}}

```
publish("act4", ["hong_to_alshire", 0]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Hang on human, we may be making them uncomfortable.

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: Ah, I don't mean to put you on the spot!

`publish("act4", ["hong_to_alshire",4]);`

h2: Just remembering a friendly face, is all.

```
publish("act4", ["hong_to_alshire",5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: AHHHHH I KNEW IT! THEY'RE A DANGEROUS PANIC-DRIVEN PSYCHO!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: AAHHH THE FIRST IMPRESSION WE MADE WAS "WITNESSED MY TRAUMA"! THAT MEANS THEY HATE US!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: AAAHHH WE MADE SOMEONE REMEMBER A TRAUMATIC EVENT. OUR MERE PRESENCE HURTS OTHERS.
{{/if}}

(#act4e)

# act4d_yes

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Hang on human, they seem uncomfortable.

```
publish("act4", ["hong_to_alshire", 6]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: Ah, no pressure of course!

`publish("act4", ["hong_to_alshire", 4]);`

h2: Just saying, you can sit here if you want to.

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: THEY'RE BEING *TOO* FRIENDLY! LIKE TED BUNDY, THE SERIAL KILLER!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: THEY'RE JUST ACTING NICE! NO ONE *REALLY* WANTS TO BE CLOSE TO US!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: AHHH WE ALWAYS MAKE OTHERS FEEL AWKWARD! WE'RE A STAIN UPON THE EARTH!
{{/if}}

(#act4e)

# act4d_no

```
publish("act4", ["hong_to_alshire", 9]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Hang on human, we may be making them uncomfortable.

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: Ah, I don't mean to be rude!

`publish("act4", ["hong_to_alshire", 6]);`

h2: I just need some time to process my emotions. Please don't take it as a personal rejection.

```
publish("act4", ["hong_to_alshire", 7]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: WHAT SICK, TWISTED THOUGHTS ARE THEY PROCESSING?! WHAT DARK DESIRES FILL THEIR HEART? GET AWAY FROM THIS PSYCHO!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: WE'VE BEEN PERSONALLY REJECTED! WE'LL NEVER BE LOVED!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: WE INTERRUPTED THEIR EMOTIONAL PROCESSING! NOW THEY'LL BE TRAUMATIZED FOREVER AND IT'S ALL OUR FAULT!
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
publish("act4", ["hong_to_alshire", 0]);
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

`publish("act4", ["hong_closer", 2]);`

h: Anyway, you were saying?

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 6]);
```

b: Uh, I forget? Something about teams and work?

```
publish("act4", ["bb_closer", 0]);
publish("act4", ["hong_closer", 3]);
```

h: ¯\_(ツ)_/¯

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 4]);
```

b: They say you should "make peace" with your emotions, as if your emotions are *war criminals*.

`publish("act4", ["bb_closer", 7]);`

b: But I want us to make *more* than mere peace! I want us to be *allies!*

`publish("act4", ["bb_closer", 3]);`

b: I want to be a good guard-dog. Just like how hunger & thirst are alarms for your physical needs,

`publish("act4", ["bb_closer", 8]);`

b: I want to be the alarm for your emotional needs – your needs for safety, belonging, goodness.

`publish("act4", ["bb_closer", 1]);`

b: But... I suck at my job, so I need you to train me.

`publish("act4", ["bb_closer", 5]);`

b: Help me help you.

`publish("act4", ["bb_closer", 6]);`

b: Teaching an old dog new tricks *will* take a while. Maybe *years.*

`publish("act4", ["bb_closer", 4]);`

b: And sometimes I'll relapse, I'll slip into my old habits.

`publish("act4", ["bb_closer", 2]);`

b: I'll bark at shadows. I'll scare you with words. I might even show you some intrusive images of... things.

`publish("act4", ["bb_closer", 9]);`

b: I'm sorry! I'm a battered shelter dog! Battered dogs poop on your bed sometimes!

`publish("act4", ["bb_closer", 4]);`

b: But if you're patient with me... and just stay and sit with me...

`publish("act4", ["bb_closer", 8]);`

b: Maybe you can tame this wolf.

`publish("act4", ["bb_closer", 0]);`

`Game.clearText();`

(...1000)

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Good dog.](#act4f-pat-bb) `Game.OVERRIDE_CHOICE_SPEAKER = "h"; publish("act4", ["hong_closer", 2]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "b"`

[Good human.](#act4f-pat-hong) `Game.OVERRIDE_CHOICE_SPEAKER = "b"; publish("act4", ["bb_closer", 8]);`

# act4f-pat-hong

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

```
publish("act4", ["hong_closer", 4]);
publish("act4", ["bb_closer", 13]);
```

(...501)

`publish("act4", ["bb_closer", 14]);`

(...501)

`publish("act4", ["bb_closer", 13]);`

(...501)

`publish("act4", ["bb_closer", 14]);`

(...501)

`publish("act4", ["bb_closer", 13]);`

(...501)

`publish("act4", ["bb_closer", 14]);`

(...6501)

`publish("act4", ["bb_closer", 15]);`

(...1001)

(#act4f)

# act4f-pat-bb

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
music(null,{fade:0.5});
sfx("youbothwin");
```

```
publish("act4", ["hong_closer", 4]);
publish("act4", ["bb_closer", 10]);
```

(...501)

`publish("act4", ["bb_closer", 11]);`

(...501)

`publish("act4", ["bb_closer", 10]);`

(...501)

`publish("act4", ["bb_closer", 11]);`

(...501)

`publish("act4", ["bb_closer", 10]);`

(...501)

`publish("act4", ["bb_closer", 11]);`

(...6501)

`publish("act4", ["bb_closer", 12]);`

(...1001)

(#act4f)

# act4f

```
Game.FORCE_CANT_SKIP = false;
publish("act4", ["bb_closer", 16]);
publish("act4", ["hong_closer", 5]);
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
publish("act4", ["hong_closer", 6]);
sfx("yaps", {volume:0.6});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 205;
```

b: YAP YAP YAP YAP YAP

`music('credits', {NO_LOOP:true, volume:0.45});`

(...1884)

(#credits)