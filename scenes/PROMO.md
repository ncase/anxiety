# intro

`SceneSetup.intro();`

# intro-play-button

(...51)

[PLAY](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`

# intro-start

(...500)

`clearText()`

n3: Jadi sebelum kita mulakan, pilih tetapan *anda*

`publish("show_options_bottom")`

# intro-start-2

n3: Sekarang, mari mulakan cerita kita…

```
publish("hide_tabs");
clearText();
```

(...1000)

`publish("intro-to-game-2")`

n2: INI MANUSIA

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

n: DAN INI IALAH KERESAHAN MANUSIA

n:_ANDA_ IALAH KERESAHAN

(#act1_normal)


# act1_normal

```
hong({body:"putaway"});
sfx("rustle");
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Tak nak. Tak, tak nak dengar. Nak main telefon je.

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: TUGAS ANDA ADALAH UNTUK MELINDUNGI MANUSIA ANDA DARIPADA *BAHAYA*

`bb({eyes:"look", mouth:"small_lock", body:"fear"})`

b: Hah! Kau leka menatal Twitter lagi!

```
bb({eyes:"normal", mouth:"normal", body:"normal"});
hong({eyes:"annoyed"});
```

h: Kau rasa kenapa aku tak selalu duduk dan dengar fikiran aku saja?

`hong({eyes:"neutral"});`

n: CEPAT, BERI AMARAN TENTANG *BAHAYA* ITU!

```
bb({eyes:"look"});
```

[Eh, tengok berita buruk tu!](#act1d_news)

[Alamak, adakah ciapan tu sebenarnya tentang *kita?*](#act1d_subtweet)

[Eh, GIF kucing minum susu!](#act1d_milk)

# act1d_milk

`hong({mouth:"smile", eyes:"surprise"});`

h: Wah, comelnya, aku–

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: KUCING TAK BOLEH HADAM SUSU DAN KITA ORANG YANG KEJI SEBAB SUKA PENYEKSAAN HAIWAN

(...200)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
attack("20p", "bad");
publish("hp_show");
```



