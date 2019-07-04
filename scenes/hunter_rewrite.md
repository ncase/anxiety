r: Looks like you're caught in a fight with yourself, kid.

h2: (nods)

r: You're not alone, friend. Anxiety's super common.

{{if _.act1_ending=="fight"}}
r: Heck, just yesterday, I heard someone on campus had a nervous breakdown and smashed their phone!
{{/if}}

{{if _.act1_ending=="flight"}}
r: Heck, just yesterday, I heard someone curled up into an armadillo ball and cried in public!
{{/if}}

h2: huh imagine that.

r: Listen: I know what it's like to have that animal in your head.

r: All of us here do. That's why we're here! I throw these parties every weekend so we can forget our worries, forget that animal.

h2: but my anxiety...

r: Don't worry, kid. I used to be like you. But then I discovered a little trick to make that beast shut up forever...

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


# act2k

r: You alright, kid?

{{if _.a2_ending=="fight"}}
(#act2k_fight)
{{/if}}

{{if _.a2_ending=="flight"}}
(#act2k_flight)
{{/if}}

# act2k_fight

r: Y-you...

r: are *kinky*.

r: I like that. Come to my party next weekend, cutie.

h2: ok bye ciao adios 

r: The animal might have won today, but come back, and I'll mix something even stronger for you!

h2: sayōnara au revoir auf wiedersehen zài jiàn

r: You and me, kid, we'll show that beast who's boss!

(#act2k_end)

# act2k_flight

h2: ok sorry i have to run

r: Damn it. The animal won today, huh?

h2: no no, just, uh, gotta run a marathon. gotta go fast.

r: Come to my party next weekend, cutie. I'll mix something even stronger for you.

`publish("act2-party-action", ["end_run"]);`

h2: ok thanks gonna run run run run run

r: You and me, kid, we'll show that beast who's boss!

(#act2k_end)


# act3

`SceneSetup.act3();`

h2: *Ah* that hits the spot.

r: You know, kid...

h2: Specifically, the spots hit are my left and right amygdala.

r: You remind me of myself when I was younger. Back when I was tormented by the animal in my head.

r: I'm proud to help you get rid of it. It's almost like a... *parental*... sort of pride.

`Game.clearText();`

r: Hey, quick question: truth or da--

h2: DARE!

r: Haha! Good.

r: Ok. You see that swimming pool down there?

h2: Yeah? Ten floors down?

r: Jump in.

h2: ...

h2: Wait, what?

r: The animal's started whining, hasn't it?

r: *Oh nooooo it's dangerous, don't do iiiiit.*

r: But that's exactly why we need to do thrilling, death-defying stunts! Party hard! Carpe diem! Snort coke off a hooker's butt, hashtag #YOLO!

r: Show that animal we don't give two *dicks* about its bitching! Jump.

h2: Uh, but sometimes, um... fear has a point...

r: ...

r: ...

r: I'm sorry, did you fall for that "mindfulness" fad bullshit that claims feeling bad is *good?*

r: Pleasure is the opposite of pain. There-fucking-fore, you can use pleasure to fight pain! How goddamn stupid are those California-Buddhists to not see that?!

r: Kid, I know that *you* know that animal *hurts* people like us. It *tortures* people like us.

r: It's not your fucking friend. It's a savage beast that needs to be tranquilized,

r: Or taken to the shed to be *shot in the back of the skull.*

r: Otherwise, you're going to let it win.

h2: ...you're wrong.

h2: I'm not going to let it win.

r: Fuck yeah! I believe in you, babe! Kill it! <3

(#act3a)


# act3_walkaway

r: Aw *come on*. After everything it put you through, you're just walking away?!

r: What's the matter, kid? You *scared?*

h2: Yes.

h2: I'm scared.

h2: And that's okay!

h2: It's okay to be scared.

r: Did they just lock the door?


(#act4)