# intro

`SceneSetup.intro();`

# intro-play-button

(...51)

[BAŞLA!](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`

# intro-start

(...500)

`clearText()`

n3: Başlamadan önce, *nasıl* okumayı seversin?

`publish("show_options_bottom")`

# intro-start-2

n3: Şimdi, hadi hikayemize başlayalım...

```
publish("hide_tabs");
clearText();
```

(...1000)

`publish("intro-to-game-2")`

n2: BU BİR İNSAN

(...600)

`clearText()`

(...300)

`publish("intro-to-game-3")`

# act1

```
SceneSetup.act1();
publish("hide_tabs");
music('battle', {volume:0.5});
```

(...300)

n: BU DA İNSANIN KAYGISI

n: BU KAYGI _SEN_ OLUYORSUN

(#act1_normal)


# act1_normal

```
hong({body:"putaway"});
sfx("rustle");
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Hayır, Ih-ıh, yo, dinlemiyorum. Telefonuma bakacağım.

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: GÖREVİN İNSANINI *TEHLİKELERDEN* KORUMAK

`bb({eyes:"look", mouth:"small_lock", body:"fear"})`

b: Haaa! Hayatını Twitter'da hacıyorsun! Yine!

```
bb({eyes:"normal", mouth:"normal", body:"normal"});
hong({eyes:"annoyed"});
```

h: Evet ben de neden şöyle oturup düşüncelerimi dinlemiyorum merak ediyorum

`hong({eyes:"neutral"});`

n: ÇABUK, UYAR ONU!

```
bb({eyes:"look"});
```

[Olamaz, şu kötü haberlere baksana!](#act1d_news)

[Olamaz, şu tweet *bize* gönderme mi yapıyor](#act1d_subtweet)

[Hey, süt içen kedi GIF'i](#act1d_milk)

# act1d_milk

`hong({mouth:"smile", eyes:"surprise"});`

h: Heh yaa çok şirin, retwe--

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: KEDİLER SÜTÜ HAZMEDEMEZ VE HAYVAN SÖMÜRÜSÜNDEN KEYİF ALMAMAMIZ KORKUNÇ BİR ŞEY

(...200)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
attack("20p", "bad");
publish("hp_show");
```



