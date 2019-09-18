# intro

`SceneSetup.intro();`

# intro-play-button

(...51)

[시작!](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`

# intro-start

(...500)

`clearText()`

n3: 자, 시작하기 전에, 당신은 어떻게 읽는 걸 좋아하나요?

`publish("show_options_bottom")`

# intro-start-2

n3: 그럼 이야기를 시작해보도록 하죠...

```
publish("hide_tabs");
clearText();
```

(...1000)

`publish("intro-to-game-2")`

n2: 이것은 인간입니다

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

n: 그리고 이것은 인간의 불안감입니다

n: _당신_ 이 이 사람의 불안감입니다

(#act1_normal)


# act1_normal

```
hong({body:"putaway"});
sfx("rustle");
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: 아냐. 아니, 아니지. 안 들을 거야. 내 폰이나 봐야지.

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: 당신의 임무는 인간을 *위험* 으로부터 보호하는 것입니다

`bb({eyes:"look", mouth:"small_lock", body:"fear"})`

b: 헉! 너 트위터에서 인생을 낭비하고 있구나! 오늘도!

```
bb({eyes:"normal", mouth:"normal", body:"normal"});
hong({eyes:"annoyed"});
```

h: 그러게. 왜 내가 가만히 앉아서 내 생각에 대해 고찰해보지 않는지 모르겠다.

`hong({eyes:"neutral"});`

n: 빨리, *위험* 을 알리세요!

```
bb({eyes:"look"});
```

[안 돼, 저 끔찍한 뉴스를 좀 봐!](#act1d_news)

[안 돼, 저 트윗 혹시 *우리* 를 저격한 글 아니야?](#act1d_subtweet)

[봐봐, 고양이가 우유를 마시는 영상이네](#act1d_milk)

# act1d_milk

`hong({mouth:"smile", eyes:"surprise"});`

h: 헤헤, 그러네, 귀엽ㄷ--

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: 고양이는 우유를 소화 못 해 이런 학대 영상을 보고 즐기다니 우리는 끔찍한 사람이야
(...200)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
attack("20p", "bad");
publish("hp_show");
```



