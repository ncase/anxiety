# act4

```
SceneSetup.act4();
publish("SAVE_GAME", ["act4"]);
Game.FORCE_CANT_SKIP = true;
```

(...5001)

```
publish("set_how_many_prompts", [1]);
Game.FORCE_CANT_SKIP = false;
Game.CLICK_TO_ADVANCE = true;
```

n3: (game auto-saved)

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
var hong_frame = _.INJURED ? 9 : 0;
publish("act4", ["hong_walks_in",hong_frame]);
sfx("grass_step1", {volume:0.1});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.2});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.25});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.3});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.35});
```

(...1667)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.35});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.35});
```

(...666)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step2", {volume:0.35});
```

(...1333)

```
publish("act4", ["hong_walks_in", "next"]);
sfx("grass_step1", {volume:0.20});
```

(...167)

```
publish("act4_hong_sits");
```

(...66)

```
publish("act4", ["hong_transition", "next"]);
sfx("squeak");
```

(...133)

`publish("act4", ["hong_transition", "next"]);`

(...1333)

```
publish("act4", ["hong_transition", "next"]);
sfx("rustle");
```

(...333)

`publish("act4", ["hong_transition", "next"]);`

(...1001)

```
publish("act4", ["hong_transition", "next"]);
```

(...333)

```
publish("act4", ["hong_transition", 9]);
sfx("sandwich");
```

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

h: So what the ^hell^ was the moral of this story?

`hong({body:"one_up", eyes:"annoyed"})`

h: What did we even *learn*? I *was* being stupid, my "friends" *were* using me, and we almost frickin' *died*.

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

h: Right. I don't think my insurance plan covers "being a dumb^ass^".

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

```
hong({eyes:"surprise"});
bb({eyes:"normal"});
```

h: ?

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

b: If me fighting you sucks, because it doesn't protect you...

h: But me fighting you *also* sucks, because it just makes you yell louder...

`bb({eyes:"normal_r"})`

b: Then maybe...

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
sfx("smash_glass");
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

b: We've been through rough stuff. Maybe trauma or neglect. That's why I sometimes over-react and go:

```
sfx("yaps", {volume:0.6});
bb({body:"yap_1"});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 215;
Game.FORCE_TEXT_DURATION = 90;
Game.FORCE_NO_VOICE = true;
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

[I'm scared we'll be harmed.](#act4_harm)

[I'm scared we'll be alone.](#act4_alone)

[I'm scared we're bad people.](#act4_bad)

# act4_harm

```
_.a4_talked_about_harm = true;
_.a4_fears_discussed += 1;
```

`bb({eyes:"normal_d"})`

b: I want to protect your need for physical safety,

`bb({eyes:"sad_d"})`

b: But the *whole world* seems so dangerous. So full of tragedy and evil.

`bb({eyes:"sad"})`

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

`bb({eyes:"look_down", body:"paw"})`

b: But... how? I have fangs and claws, but I'm just a metaphor.

```
bb({ body:"normal", eyes:"normal" });
hong({ body:"one_up", eyes:"surprise" });
```

h: We could learn self-defense? Join a community that protects each other? Improve our general health & personal boundaries?

```
bb({ eyes:"annoyed_r" });
hong({ body:"normal", eyes:"normal" });
```

b: Maybe, but...

[Where do we even start?](#act4_harm_skills_start)

[What if they still don't work?](#act4_harm_skills_work)

[What if we go overboard on "safety"?](#act4_harm_skills_overboard)

# act4_harm_skills_start

`bb({ eyes:"sad_d" })`

b: There's so much to do, so much we need to fix about ourselves. What do we even *begin* with?

`hong({ body:"shrug", eyes:"surprise" })`

h: We're beginning right now.

`bb({ eyes:"normal", mouth:"narrow" })`

b: Eh?

```
bb({ body:"normal", mouth:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal"});
```

h: We're practicing good communication right now. Which will help us detect danger better, with fewer false positives,

`hong({ eyes:"surprise" });`

h: And *that* will help protect us from harm!

`hong({ eyes:"normal", mouth:"normal" });`

h: Therefore: this *is* self-defense training.

`bb({ eyes:"normal_r" })`

b: Huh. I was expecting more of this:

```
Game.FORCE_CANT_SKIP = true;
Game.clearText();
hong({ eyes:"sad", mouth:"smile" });
bb({ body:"karate_1" });
sfx("hiya");
```

(...1001)

`Game.FORCE_CANT_SKIP = false;`

(#act4_something_else)

# act4_harm_skills_work

`bb({ eyes:"normal" });`

h: True, there's no way to 100% protect ourselves...

`hong({ body:"one_up" });`

h: But even a 1% improvement is still worth something, right?

```
bb({ eyes:"annoyed" });
hong({ normal:"one_up" });
```

b: You're seeing the glass as not 99% empty, but 1% full?

`bb({ eyes:"normal" });`

h: Which is still worth something if you're stranded in the desert.

`bb({ eyes:"closed" });`

b: Well. Bottoms up, then.

(#act4_something_else)

# act4_harm_skills_overboard

`bb({ body:"chest", eyes:"annoyed" })`

b: I mean, the whole reason you ignored my warnings was because *I* went overboard with safety! 

`bb({ body:"normal", eyes:"normal" })`

h: Naw, you're right. We would want to do safety in moderation. Everything in moderation.

`bb({ eyes:"suspect" })`

b: Sorry, *EVERYTHING* in moderation?

`hong({ eyes:"annoyed" })`

h: *A moderate number of things* in moderation.

```
bb({ eyes:"closed" });
hong({ eyes:"normal" });
```

b: Thank you for making your statements recursively self-consistent.

(#act4_something_else)


# act4_harm_exposure

`bb({ mouth:"scream_talk", eyes:"scream", MOUTH_LOCK:true });`

b: *WHAT*

```
bb({ mouth:"narrow", eyes:"suspect" });
hong({ body:"one_up" });
```

h: I mean, let's say a dog is scared of thunder.

`hong({ body:"hands_1" });`

h: One trick trainers use is to play a recording of thunder at a low volume, then give the dog a treat for staying calm.

`hong({ body:"hands_2" });`

h: Over several days, the trainer raises the volume bit by bit, until the dog has overcome their fear of thunder.

```
hong({ body:"normal", eyes:"surprise" });
bb({ mouth:"normal", eyes:"normal" });
```

h: It's called exposure therapy!

`hong({ body:"point", eyes:"normal" });`

h: Since you're a dog, it should work for you too, right? All mammals have the same fight-or-flight response.

`hong({ body:"normal" });`

[What if we desensitize *too* much?](#act4_harm_exposure_overboard)

[What if we're exposed to *real* danger?](#act4_harm_exposure_hurt)

[I'm a wolf, not a dog.](#act4_harm_exposure_dog) `bb({ eyes:"suspect" })`

# act4_harm_exposure_dog

h: And I'll show you kindness and patience 'til you're domesticated into a cute lil' puppy.

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"sad", mouth:"smile" })`

b: D'aw.

(#act4_something_else)

# act4_harm_exposure_overboard

`bb({ eyes:"annoyed" })`

b: We *just* saw what happens if you shut down your fear – you put yourself in *actually* dangerous situations.

`bb({ eyes:"angry_r", body:"one_up" })`

b: Besides, won't *too* much desensitization turn us into psychopaths?

`bb({ mouth:"scream", eyes:"scream", body:"two_up" })`

b: Soon we'll give ourselves treats while watching snuff murder porn!

`hong({ eyes:"annoyed" })`

h: I... think there's a line between that and the thunder.

`bb({ body:"normal", mouth:"normal", eyes:"suspect" })`

b: But exactly *where*, human? *Where?!*

`hong({ eyes:"surprise", body:"one_up" })`

h: I don't know. But *you* can help me!

`hong({ eyes:"normal", body:"normal" })`

h: Working and negotiating with you, we'll draw that line.

`bb({ body:"paw", mouth:"narrow", eyes:"closed" })`

b: Okay. But I've got no opposable thumbs, so you have to do the drawing.

(#act4_something_else)

# act4_harm_exposure_hurt

`bb({ body:"two_up", eyes:"angry_r" })`

{{if _.INJURED}}
b: For example: we jumped off a freaking *roof!*
{{/if}}

{{if !_.INJURED}}
b: For example: we almost jumped off a freaking *roof!*
{{/if}}

```
hong({ eyes:"annoyed" });
bb({ body:"normal", eyes:"annoyed" });
```

h: Nah you're right. One *can* go too far.

`hong({ eyes:"normal" });`

h: But that's why, if we do exposure therapy, we'll start small, and make small steps upward.

h: Just before we hit *actual* danger, we stop.

`bb({ eyes:"annoyed_r", mouth:"narrow" });`

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

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"annoyed" })`

b: Wait, no arguments for or against what I'm feeling? Just... "thank you"?

`hong({ eyes:"surprise", body:"shrug" })`

h: Yeah! Thank you for showing your concern for my {{_.thanks_for}}.

```
bb({ eyes:"closed_annoyed", MOUTH_LOCK:true });
hong({ eyes:"normal", body:"normal" });
```

b: ...

h: You okay?

`bb({ eyes:"super_sad", mouth:"narrow" });`

b: You've never said *thank you* to me before.

`hong({ mouth:"smile" });`

h: Aw you big fuzzy-wuzzy panic-wolf.

(#act4_something_else)

# act4_thanks_2

h: Even if you over-react, I appreciate you looking out for my {{_.thanks_for}}.

`bb({ eyes:"annoyed" })`

b: Wait... you're not just repeating "thank you" to avoid actually talking about these fears, are you?

```
bb({ eyes:"normal" });
hong({ eyes:"annoyed", body:"chin" });
```

h: Well, stuff's complicated, and I don't always have answers ready.

`hong({ eyes:"annoyed_l", body:"one_up" })`

h: It's not like life gives you a list of 3 pre-made dialogue responses.

`hong({ eyes:"normal", mouth:"smile", body:"normal" })`

h: But for now, at least I can at least say thanks.

b: Well, thank you too, for listening to me patiently.

`bb({ eyes:"closed" });`

b: You small hairless flesh-mammal.

(#act4_something_else)

# act4_thanks_3

h: Even if your yapping scares me, you're simply trying to protect my {{_.thanks_for}}.

`bb({ eyes:"smile_r" });`

b: Okay, if you keep flattering me like this, the internet's gonna get some weird ideas about us.

```
bb({ eyes:"smile" });
hong({ eyes:"annoyed" });
```

h: C'mon, I'm just a vulnerable college-age kid and you're a big, scary wolf. What's the worst that cou--

`hong({ eyes:"normal", body:"point" });`

h: Actually, do not answer that.

(#act4_something_else)




# act4_alone

```
_.a4_talked_about_alone = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"sad_d" });`

b: I want to make sure you fulfil that deep, human need to belong...

`bb({ eyes:"sad_u" });`

b: But I worry that if anyone ever knew us – the *real* us – we'd scare them all away.

`bb({ eyes:"sad" });`

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

[I agree: let's work on our social life.](#act4_alone_skills)

[I think people like us. Let's find out?](#act4_alone_experiment)

[Thank you.](#act4_thanks) `_.thanks_for = "social belonging";`

# act4_alone_skills

```
bb({ eyes:"normal" });
hong({ body:"chin" });
```

h: We could practice skills like asking questions, listening and empathizing, being open and vulnerable, etc?

`hong({ eyes:"normal_l" });`

h: Or make better social habits, like scheduling time with friends or regularly going to meetups?

`hong({ body:"one_up" });`

h: Could also learn to get more comfortable with rejection.

`hong({ eyes:"normal" });`

h: Or learn to know when people *aren't* rejecting us, they're just tired or have Resting ^Bitch^ Face.

```
hong({ body:"normal" });
bb({ eyes:"annoyed_r" });
```

b: That's a lot of options. But, about "learning social skills"...

[Isn't that *manipulative?*](#act4_alone_skills_manipulative)

[Won't that make us *easier to manipulate?*](#act4_alone_skills_manipulated)

[What if we still fail?](#act4_alone_skills_fail)

# act4_alone_skills_manipulative

`bb({ eyes:"suspect" });`

b: Aren't serial killers who can read their victims' emotions great at "empathy"?

`bb({ eyes:"annoyed" });`

b: Didn't Charles Manson win friends and influence people?

`hong({ eyes:"annoyed", body:"chin" });`

h: No, you're right.

h: "Social skills" mean nothing if we don't genuinely care *for* people.

`hong({ body:"normal" });`

h: Basically, just don't be a ^dick^.

`bb({ eyes:"annoyed", mouth:"smile" });`

b: That's a motivational poster caption right there.

`hong({ body:"shrug", mouth:"narrow" });`

h: “Don't Be A ^Dick^™”

(#act4_something_else)

# act4_alone_skills_manipulated

`bb({ eyes:"angry" })`

b: We'll become a Welcome doormat, saying Please and Thank You as people wipe their feet on us!

`bb({ mouth:"scream", eyes:"scream" })`

b: We'll kiss so much butt, it'll look like we're wearing brown lipstick!

```
bb({ mouth:"normal", eyes:"normal" });
hong( body:"chin" });
```

h: Nah, you're right. "Social skills" can't be just about pleasing others, it's also got to be about setting *boundaries.*

`hong( body:"one_up" });`

h: We can't invite others into our home, if we have no walls to hold up our home.

```
hong( eyes:"angry", mouth:"narrow" });
bb( eyes:"annoyed", mouth:"smile" });
```

h: Also... re: that lipstick mental image... *ew??*

(#act4_something_else)

# act4_alone_skills_fail

`bb({ eyes:"annoyed" });`

h: We might fail. Actually, we *will* fail.

```
bb({ eyes:"normal" });
hong({ eyes:"surprise", body:"shrug" });
```

h: And that's fine! Failing is how anyone learns anything new at first!

`hong({ body:"normal", eyes:"normal" });`

h: So let's fail forward together, yeah?

`bb({ eyes:"normal_r" });`

b: Sure, I guess... worst-case scenario, we can just skip town and get a new identity.

`bb({ eyes:"normal" });`

h: Yeah I think that only costs two bitcoins these days.

(#act4_something_else)

# act4_alone_experiment

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: We could try some experiments!

`hong({ body:"chin" });`

h: We could ping a friend to hang out, reconnect with an old pal, or even just chat with a barista.

`hong({ body:"normal" });`

h: I think we may find we're more likeable than we suspect.

`bb({ eyes:"annoyed" });`

[What if these are small, cheap "wins"?](#act4_alone_experiment_cheap)

[What if this is a burden to others?](#act4_alone_experiment_burden)

[But small talk isn't the *real* us!](#act4_alone_experiment_real_us)

# act4_alone_experiment_real_us

`bb({ eyes:"sad" });`

b: If we put on a shallow smile, we'll never really connect with anyone,

`bb({ eyes:"super_sad" });`

b: *But* if we open up, other people will see all our messed-up insides!

`hong({body:"chin", mouth:"narrow", MOUTH_LOCK:true})`

h: ...

```
hong({body:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: Roll over.

b: What.

`hong({body:"hands_1"})`

h: When dogs want to show love and trust, they make themselves vulnerable by exposing their belly.

`hong({body:"one_up"})`

h: Maybe we're not *yet* secure enough to be too vulnerable, but with enough training,

`hong({body:"normal", eyes:"surprise"})`

h: One day we can show people the real us – all messed-up, all human.

```
hong({eyes:"normal"});
bb({ eyes:"super_sad", mouth:"smile", body:"chest" });
```

b: I'll roll over if you give me a treat.

`bb({ eyes:"normal", mouth:"normal" });`

h: No.

(#act4_something_else)


# act4_alone_experiment_cheap

b: Saying "hi" to the barista isn't exactly gold-medal performance in the Social Butterfly Olympics.

```
hong({ body:"point", eyes:"surprise" });
bb({ eyes:"normal" });
```

h: It is for *us!*

`hong({ body:"one_up", eyes:"annoyed" });`

h: In the social arena, we're not even featherweight class, we're like... quark-weight.

`hong({ body:"normal", eyes:"normal" });`

h: If we have to start with small, cheap wins, so be it. Gotta climb the 1st step before the 1000th step.

b: Yeah! Maybe after saying "Hi", we can advance to saying...

`bb({ body:"two_up", mouth:"smile", eyes:"smile_u" });`

b: *"How are you?"*

`hong({ body:"shrug", mouth:"smile", eyes:"surprise_l" });`

h: *"Not much!"*

(#act4_something_else)

# act4_alone_experiment_burden

`bb({ eyes:"suspect_r" })`

b: Maybe the barista just wants to make some dang coffee, not be an *experiment* to see if our social skills suck.

`bb({ eyes:"annoyed" })`

h: Well, if it turns out we *are* being a burden...

```
hong({ eyes:"surprise" });
bb({ eyes:"normal" });
```

h: That's good to know, too!

`hong({ eyes:"normal" });`

h: We can then learn how to pro-actively ask people what they're comfortable with, to know and respect others' boundaries.

```
hong({ eyes:"annoyed_l", mouth:"narrow" });
bb({ eyes:"annoyed", mouth:"smile" });
```

h: Y'know, all that "inter-personal skills" ^crap^ we see in counselor brochures.

(#act4_something_else)



# act4_bad

```
_.a4_talked_about_bad = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"annoyed_r" })`

b: I want to defend your moral needs, that drive to become a better person,

`bb({ eyes:"sad_d" })`

b: But it just feels like deep down, we're so fundamentally... broken.

`bb({ body:"two_up", eyes:"angry" })`

{{if _.INJURED}}
b: And don't tell me we're *not* messed up. We jumped off a *roof*.
{{/if}}

{{if !_.INJURED}}
b: And don't tell me we're *not* messed up. We almost jumped off a *roof*.
{{/if}}

`bb({ body:"normal", eyes:"sad" })`

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

```
bb({eyes:"normal"});
hong({body:"chin"});
```

h: We could slowly build better habits, get our life more in line with what we value,

`hong({body:"one_up"});`

h: And if needed, we could get professional help – a therapist or counsellor.

`hong({body:"normal"});`

h: There's ways to fix us.

[What if we can't fix it all?](#act4_bad_fix_cant)

[What if we fix *too* much?](#act4_bad_fix_too_much)

[We can't afford professional help.](#act4_bad_fix_afford)

# act4_bad_fix_cant

`hong({eyes:"annoyed"});`

h: Nah, I guess you're right.

h: We can't fix it all.

`bb({mouth:"scream", eyes:"scream_sad"});`

b: Ahhh I knew it we'll always be broken!

`hong({eyes:"surprise"});`

h: But we can at least be *less* broken.

```
bb({mouth:"normal", eyes:"annoyed"});
hong({eyes:"sad", mouth:"smile"});
```

h: Scars heal with time, but they never go away. And that's okay.

`bb({eyes:"annoyed_r"});`

b: I guess. Besides,

```
Game.FORCE_TEXT_Y = 460;
Game.clearText();
publish("act4-sexy", [true]);
```

b: Scars are *sexy.*

```
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-sexy", [false]);
bb({body:"chest", mouth:"smile_talk", MOUTH_LOCK:true, eyes:"sexy"}, 0);
hong({eyes:"normal", mouth:"normal"}, 0);
```

h: Please do not do that.

(#act4_something_else)

# act4_bad_fix_too_much

`bb({ eyes:"angry_d" })`

b: This feels sick to admit, but... some part of me *wants* to have this disorder.

`bb({ eyes:"angry" })`

b: I mean, without it, won't we be *boring?*

`bb({ eyes:"sad_r", body:"one_up" })`

b: Without the disorder, won't our art become stale and bland?

`bb({ eyes:"sad_u", body:"two_up" })`

b: Without the disorder, won't we be unable to connect with our friends who have the disorder?

`bb({ eyes:"sad", body:"chest" })`

b: If we're ever content with life, won't we stop driving ourselves to do great things?

`hong({ MOUTH_LOCK:true })`

h: ...

h: If we even fear... "running out of fears"...

h: I don't think we're gonna run out of fears.

`bb({ eyes:"smile_u", body:"normal", mouth:"smile" })`

b: Oh, yeah! Whew! What a relief!

(#act4_something_else)

# act4_bad_fix_afford

`bb({ body:"one_up", eyes:"sexy", mouth:"normal" })`

b: "Doc, I'm anxious that I'm paying $100/hr just to hear you ask *how does that make you feel?*"

`bb({ body:"paw", eyes:"closed", mouth:"narrow" })`

b: "Mm-hmm. And how does that make you feel?"

```
bb({ body:"normal", eyes:"normal", mouth:"normal" });
hong({ eyes:"sad" });
```

h: Nah, that's a totally reasonable worry.

`hong({ eyes:"annoyed", mouth:"sad" });`

h: And it genuinely sucks that mental healthcare isn't affordable for lots of folks.

`hong({ eyes:"normal", mouth:"normal" });`

h: Still, there are some cheap or free options:

`hong({ body:"chin" })`

h: Support groups, online therapy, student/non-profit health centers...

`hong({ body:"hands_1" })`

h: Building habits like meditation, sleeping well, chatting regularly with friends, learning new things...

`hong({ body:"hands_2" })`

h: Going to a library to borrow workbooks for evidence-based psychotherapies...

`hong({ body:"one_up" })`

h: There's a full list of resources at the end of this game!

```
hong({ body:"normal" });
bb({ eyes:"annoyed", mouth:"narrow" });
```

b: Well *that* fourth wall didn't last long.

`hong({ body:"point" });`

h: Some things are more important than narrative convention. Such as mental health.

(#act4_something_else)


# act4_bad_accept

```
bb({ eyes:"normal" });
hong({ eyes:"normal_l", body:"one_up", mouth:"narrow" });
```

h: I mean, that's what therapists say right? Accept all your emotions, even the negative ones?

```
bb({ eyes:"annoyed" });
hong({ eyes:"normal", body:"normal", mouth:"normal" });
```

b: Wait.

["Accept" as in *give up*?](#act4_bad_accept_give_up)

["Accept" as in *approve*?](#act4_bad_accept_approve)

["Accept" as in *take literally*?](#act4_bad_accept_literally)

# act4_bad_accept_give_up

`bb({ eyes:"angry", body:"one_up" });`

b: Do you think Martin Luther King would've said, "Shucks we can't sit in the front of the bus, let's just *accept* it?"

`bb({ eyes:"angry_r", body:"two_up" });`

b: Why does the Self-Help Industrial Complex think waving the white flag is some *profound wisdom?*

`bb({ eyes:"annoyed", body:"normal" });`

h: I think therapists mean "accept" bad things as in: acknowledging they exist and are hard to change,

h: But not necessarily giving up a commitment to change.

`bb({ eyes:"suspect" });`

b: Then therapists should say *acknowledge*, not *accept*.

`hong({ body:"chin", eyes:"annoyed" });`

h: Yeah come to think of it, "accept" is kinda confusing.

`bb({ eyes:"closed", mouth:"narrow" });`

b: Well, I *acknowledge* that.

(#act4_something_else)

# act4_bad_accept_approve

`bb({ eyes:"angry" });`

b: Like it's *good* that we're broken or something? No!

`bb({ eyes:"angry_r", body:"one_up" });`

b: All those dang Hollywood screenwriters who romanticize mental illness are full of crud!

`bb({ eyes:"angry", body:"two_up" });`

b: Having a mental disorder *sucks!* It robs people of *lives!* Why should we "accept" that?!

`bb({ body:"normal" });`

h: I think therapists mean "accept" our emotions as in: be patient with them.

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: Like how struggling in quicksand makes you sink faster, and the solution is to patiently lie flat,

`hong({ eyes:"surprise" });`

{{if _.INJURED}}
h: Fighting against you, my fear, lead me to jump off a roof.
{{/if}}

{{if !_.INJURED}}
h: Fighting against you, my fear, almost lead me to jump off a roof.
{{/if}}

`hong({ body:"normal", eyes:"normal" });`

h: Instead, the solution is to do what we're doing now – not to fight, but to patiently be with each other.

`bb({ eyes:"annoyed" });`

b: Then they should say *that* instead of some problematic word like "accept".

`hong({ body:"chin", eyes:"annoyed" });`

h: Yeah come to think of it, "accept" kind of sucks.

`bb({ eyes:"closed_annoyed", mouth:"narrow" });`

b: I do not accept "accept".

(#act4_something_else)

# act4_bad_accept_literally

`bb({ eyes:"sad", body:"one_up" });`

b: But we already *know* you shouldn't take me literally!

`bb({ eyes:"sad_u", body:"two_up" });`

b: The whole *problem* is that I want to help you, but I suck at using words to do so!

`bb({ eyes:"sad", body:"normal" });`

h: I think therapists mean "accept" your emotions as in: "don't fight or ignore them."

`hong({ eyes:"surprise", body:"one_up" });`

h: To listen to you, work *with* you, but not take what you say as 100% literal truth.

```
hong({ eyes:"normal", body:"normal" });
bb({ eyes:"annoyed", mouth:"normal" });`
```

b: Then therapists should say *that* instead of some vague confusing word like "accept".

`hong({ body:"chin", eyes:"annoyed" });`

h: I guess they suck at using words, too.

(#act4_something_else)




# act4_something_else

```
bb({ body:"normal", mouth:"normal", eyes:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal" });
```

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

b: Building a healthy relationship with your emotions isn't as simple as clicking buttons on a screen.

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
s: WHAT SICK, TWISTED THOUGHTS ARE THEY PROCESSING?! WHAT DARK DESIRES FILL THIS PSYCHO'S HEART?!
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
sfx("pop");
```

(...1001)

```
publish("act4", ["alshire", 11]);
sfx("alshire_run");
```

(...2601)

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

b: I want to be the alarm for your *psychological* needs – your needs for safety, belonging, goodness.

`publish("act4", ["bb_closer", 1]);`

b: But... I suck at my job, so I need you to train me.

`publish("act4", ["bb_closer", 4]);`

b: I'm not "always valid," nor "always irrational." I'm just... trying my best. So, please,

`publish("act4", ["bb_closer", 30]);`

b: Help me help you!

`publish("act4", ["bb_closer", 6]);`

b: Though, teaching an old dog new tricks *will* take a while. Maybe *years.*

`publish("act4", ["bb_closer", 3]);`

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
publish("hide_tabs");
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
publish("hide_tabs");
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
b: AAAAA YOU'RE STILL NOT PRODUCTIVE WHILE EATING WE'RE SOCIETY-PARASITES AAAAA
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
Game.FORCE_TEXT_DURATION = 90;
Game.FORCE_NO_VOICE = true;
```

b: YAP YAP YAP YAP YAP

(#credits)