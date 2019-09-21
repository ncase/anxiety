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

n3: (oyun kaydedildi)

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

h: *ahhh*

```
hong({body:"hold", eyes:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: Peki bu ^lanet^ hikayenin ana fikri neydi?

`hong({body:"one_up", eyes:"annoyed"})`

h: Bir şey *öğrendik* mi? *Aptalca* davranıyordum, "arkadaşlarım" beni *kullanıyordu* ve neredeyse *ölüyorduk*.

`hong({body:"normal", eyes:"normal"})`

{{if _.INJURED}}
[Evet, hastane masraflarından bahsetmiyorum bile.](#act4a_bill)
{{/if}}

{{if !_.INJURED}}
[Evet, karaciğerimdeki zadelenmeden bahsetmiyorum bile.](#act4a_liver)
{{/if}}

[Evet bu *en kötü durum* senaryosuydu.](#act4a_worst)

[Evet, haklıydım.](#act4a_right)

# act4a_bill

`hong({eyes:"annoyed_l", mouth:"narrow"});`

h: Doğru. Sanırım sağlık sigortam "salak olmayı" kapsamıyor..

`hong({eyes:"annoyed", mouth:"normal"});`

b: Ve yine de... kurtulduk!

`hong({eyes:"normal"});`

h: ?

(#act4b)

# act4a_liver

`bb({eyes:"normal_d"});`

b: Gerçekten de gelecek ömrümüzden bir kaç yıl çaldık...

`bb({eyes:"surprise"});`

b: Ama en azından hala olası bir ömrümüz *var*! Kurtulduk!

```
hong({eyes:"surprise"});
bb({eyes:"normal"});
```

h: ?

(#act4b)

# act4a_worst

`bb({eyes:"normal_d"});`

b: Ve yine de...

h: Hımm?

`bb({eyes:"surprise"});`

b: Kurtulduk!

(#act4b)

# act4a_right

`bb({eyes:"normal_d"});`

b: Fakat... sen de haklıydın.

`hong({eyes:"surprise"});`

h: Hımm?

`bb({eyes:"normal"});`

b: Yalancı *çoban* olan bir kurttum ben. Dolayısıyla *gerçek* tehlike geldiğinde, sen - doğal olarak - bana inanmadın.

`bb({eyes:"surprise_r"});`

b: Ve yine de, kurtulduk!

(#act4b)

# act4b

```
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

b: Her şeye rağmen, hala buradayız.

`hong({eyes:"suspect"});`

{{if _.INJURED}}
h: Ölümün eşiğindeki tecrübene rağmen oldukça sakin görünüyorsun.
{{/if}}

{{if !_.INJURED}}
h: Ölümün *eşiğinin de eşiğindeki* tecrübene rağmen oldukça sakin görünüyorsun.
{{/if}}

```
hong({eyes:"normal"});
bb({eyes:"annoyed_d", mouth:"narrow"});
```

b: Bu herşeyi kısmen daha az korkunç yapıyor. Ayrıca beni düşüncelere itti.

`bb({eyes:"normal", mouth:"normal"});`

b: Eğer seninle çatışıp başarısız olursam, bu seni koruyamam demektir...

h: Fakat seninle çatışmam *ayrıca* bir başarısızlık, çünkü seni daha yüksek çığlık attırmaktan başka işe yaramaz...

`bb({eyes:"normal_r"})`

b: O zaman belki de...

`bb({eyes:"normal"})`

h: Belki de çatışmak zorunda değilizdir.

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

b: Ne *Büyük Kötü Kurt*'um ne de *Koruyucu-Kurt*.

`bb({eyes:"sad_d"})`

b: Ben hırpalanmış bir sığınak köpeğiyim.

`bb({eyes:"sad"})`

b: Zorlu şeyleri atlattık. Travma ya da ihmalkarlık. İşte bu yüzden bazen aşırı tepkiler veriyorum ve şöyle oluyorum:

```
sfx("yaps", {volume:0.6});
bb({body:"yap_1"});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 215;
```

b: GEV GEV GEV GEV GEV

(...1884)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_CANT_SKIP = false;
bb({body:"normal", mouth:"scream", eyes:"scream_sad"});
```

b: Fakat korkak bir köperk olmak *istemiyorum! Seni korumak istiyorumé İyi bir köperk olmak istiyorum!

`bb({eyes:"sad", mouth:"normal"});`

b: İnsan... bu kurdun ehlileştirilmesine yardım edecek misin?

`hong({eyes:"sad"})`

h: Ben... Ben deneyeceğim.

`hong({eyes:"normal_l", body:"chin", mouth:"narrow"})`

h: Pekala. Duygularla dolu sağlıklı bir ilişki. İlişkilerde iletişim bir gerekliliktir. Öyle ise hadi iletişim kuralım.

`hong({eyes:"normal", body:"hands_1", mouth:"normal"})`

h: Önümüzdeki beş dakika biraz yapmacık geçecek, fakat bu anı yaşayacaksak sonuna kadar götürelim.

```
hong({body:"hands_2", mouth:"normal"});
```

h: İçimdeki sevgili kurt... nasıl *hissediyorsun* ?

n2: TOPLAMDA KULLANILAN KORKULAR:

n2: *İNCİNME* {{_.attack_harm_total}}, *YALNIZLIK* {{_.attack_alone_total}}, *KÖTÜ OLMA* {{_.attack_bad_total}}

n2: ÖNCE HANGİ KORKUN HAKKINDA KONUŞMAK İSTERSİN? (DİĞERLERİNE DAHA SONRA GEÇEBİLİRSİN)

```
_.a4_fears_discussed = 0;
_.num_thanks = 0;
hong({body:"normal"});
bb({eyes:"normal"});
```

[İncineceğimden korkuyorum.](#act4_harm)

[Yalnız kalacağımdan korkuyorum.](#act4_alone)

[Kötü birisi olmaktan korkuyorum.](#act4_bad)

# act4_harm

```
_.a4_talked_about_harm = true;
_.a4_fears_discussed += 1;
```

`bb({eyes:"normal_d"})`

b: Seni fiziksel olarak güvende hissettirmek istiyorum,

`bb({eyes:"sad_d"})`

b: Fakat *tüm dünya* tehlikeli görünüyor. Ağzına kadar kötülük ve trajedi dolu.

`bb({eyes:"sad"})`

{{if _.a4_fears_discussed==1}}
b: Bilmem, konuşulacak konuları yeterince *seçtim*. Ne dersin, insan?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Tekrar, sendeyiz insan. Ne düşünüyorsun?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: Daha başka bir düşünce, insan?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Haklısın. Kendimizi korumamız lazım](#act4_harm_skills)

[Hadi kendimizi *daha çok* tehlikeye sokalım.](#act4_harm_exposure)

[Teşekkürler.](#act4_thanks) `_.thanks_for = "physical safety";`

# act4_harm_skills

`bb({eyes:"look_down", body:"paw"})`

b: Fakat... nasıl? Dişim ve pençem var, ama ben sadece bir hayalim.

```
bb({ body:"normal", eyes:"normal" });
hong({ body:"one_up", eyes:"surprise" });
```

h: Kendimizi korumayı öğrensek? Birbirini koruyan kişilerin olduğu bir topluluğa katılsak? Kendimizi sağlık ve kişilik anlamında geliştirsek?

```
bb({ eyes:"annoyed_r" });
hong({ body:"normal", eyes:"normal" });
```

b: Belki, ama...

[Nereden başlayabiliriz ki?](#act4_harm_skills_start)

[Ya bizimle çalışmak istemezlerse?](#act4_harm_skills_work)

[Ya bu "güvenlik" konusunu çok abartırsak?](#act4_harm_skills_overboard)

# act4_harm_skills_start

`bb({ eyes:"sad_d" })`

b: Yapacak çok şey var, kendimizde düzelteceğimiz çok şey. Buna nereden *başlayabiliriz* ki?

`hong({ body:"shrug", eyes:"surprise" })`

h: Tam da şimdi başlıyoruz.

`bb({ eyes:"normal", mouth:"narrow" })`

b: Hıh?

```
bb({ body:"normal", mouth:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal"});
```

h: İyi iletişim kurmak için alıştırma yapıyoruz şuan. Bu da tehlikeyi daha çabuk farketmemizi ve daha az yanlış alarm vermemizi sağlayacak,

`hong({ eyes:"surprise" });`

h: Ve *bu* bizi zarar görmekten koruyacak!

`hong({ eyes:"normal", mouth:"normal" });`

h: Yani: bu bir *kendimizi koruma* çalışması.

`bb({ eyes:"normal_r" })`

b: Hah. Bundan fazlasını bekliyordum:

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

h: Doğru, kendimizi %100 koruyabilmemizin bir yolu yok...

`hong({ body:"one_up" });`

h: Fakat %1 iyileşme bile bir ilerlemedir, değil mi?

```
bb({ eyes:"annoyed" });
hong({ normal:"one_up" });
```

b: Bardağın %99 boş kısmını görüyorsun, peki ya %1'lik kısmı?

`bb({ eyes:"normal" });`

h: Ki çölün ortasındaki biri için bunu hala bir değeri vardır.

`bb({ eyes:"closed" });`

b: O zaman, İç onu 

(#act4_something_else)

# act4_harm_skills_overboard

`bb({ body:"chest", eyes:"annoyed" })`

b: Demeye çalıştığım şey uyarılarımı görmezden gelmenin tüm nedeni *benim* güvenliğe olan takıntımdı!

`bb({ body:"normal", eyes:"normal" })`

h: Yoo, haklısın. Güvenliği orta düzeyde isteyebiliriz. Her şey kararında

`bb({ eyes:"suspect" })`

b: Afedersin, *HER ŞEY* mi kararında?

`hong({ eyes:"annoyed" })`

h: *Kararında şey* kararında.

```
bb({ eyes:"closed" });
hong({ eyes:"normal" });
```

b: Bu ifadeyi kendi içinde tutarlı, sonsuz döndüye soktuğun için sağol

(#act4_something_else)


# act4_harm_exposure

`bb({ mouth:"scream_talk", eyes:"scream", MOUTH_LOCK:true });`

b: *NE*

```
bb({ mouth:"narrow", eyes:"suspect" });
hong({ body:"one_up" });
```

h: Diyelim ki bir köpek yıldırımdan korkuyor.

`hong({ body:"hands_1" });`

h: Bir eğitmen de yıldırım sesini alçak seste köpeğe dinletir, ardından da köpek sakin kalırsa ödül verir.

`hong({ body:"hands_2" });`

h: İlerleyen günlerde eğitmen sesi azar azar arttırır, buna köpek yıldırım korkusunu yenene kadar devam eder.

```
hong({ body:"normal", eyes:"surprise" });
bb({ mouth:"normal", eyes:"normal" });
```

h: Buna "maruz bırakma terapisi" diyorlar!

`hong({ body:"point", eyes:"normal" });`

h: Sen de bir köpeksin, yani bu sende de işe yarar mı? Tüm memeliler aynı savaş ya da kaç tepkilerine sahiptir

`hong({ body:"normal" });`

[Ya *çok* fazla duyarsızlaşırsak?](#act4_harm_exposure_overboard)

[Ya *gerçek* tehlikeye maruz kalırsak?](#act4_harm_exposure_hurt)

[Ben kurdum, köpek değil.](#act4_harm_exposure_dog) `bb({ eyes:"suspect" })`

# act4_harm_exposure_dog

h: Ve ben de sana karçı nazik ve sabırlı olacağım, ta ki şirin bir ev köpeğine ehlileşene kadar

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"sad", mouth:"smile" })`

b: Öff.

(#act4_something_else)

# act4_harm_exposure_overboard

`bb({ eyes:"annoyed" })`

b: Korkularına sırt çevirdiğinde neler olduğunu *az önce* gördük - kendini *gerçek* tehlikelere soktun.

`bb({ eyes:"angry_r", body:"one_up" })`

b: Ayrıca, *fazla* duyarsızlaşmak bizi bir ruh hastasına dönüştürmeyecek mi?

`bb({ mouth:"scream", eyes:"scream", body:"two_up" })`

b: Çok geçmeden cinayet pornosu izlerken kendimize ödüller vereceğiz 

`hong({ eyes:"annoyed" })`

h: Sanırım... yıldırım ile bunun arasında bir çizgi var.

`bb({ body:"normal", mouth:"normal", eyes:"suspect" })`

b: Tam olarak *nerede* bu çizgi, insan? *nerede?!*

`hong({ eyes:"surprise", body:"one_up" })`

h: Bilmiyorum. Ama bana *yardım edebilirsin!?*

`hong({ eyes:"normal", body:"normal" })`

h: Seninle çalışmak ve anlaşmak, çizgiyi burada çizeceğiz.

`bb({ body:"paw", mouth:"narrow", eyes:"closed" })`

b: Tamam. Ama baş parmağım yok, yani çizim işi sende.

(#act4_something_else)

# act4_harm_exposure_hurt

`bb({ body:"two_up", eyes:"angry_r" })`

{{if _.INJURED}}
b: Örneğin: lanet bir *çatıdan* atladık!
{{/if}}

{{if !_.INJURED}}
b: Örneğin: neredeyse lanet bir *çatıdan* atlıyorduk!
{{/if}}

```
hong({ eyes:"annoyed" });
bb({ body:"normal", eyes:"annoyed" });
```

h: Hayır sen haklısın. Birisi çok ileriye *gidilebilir*.

`hong({ eyes:"normal" });`

h: Bu yüzden, maruz kalma terapisini yaparsak, ufaktan başlar ve yukarıya doğru ufak adımlar atarız

h: Tam da *gerçek* tehlikeden önce, dururuz.

`bb({ eyes:"annoyed_r", mouth:"narrow" });`

b: Evet, yüksek bir şimşek sesi dinlemek ile fırtınanın ortasında paratonerle beklemek arasında çizgi çiziyorum.

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

b: Bekle, hislerime dair bir şey demeyecek misin? Sadece... "teşekkür ederim" mi?

`hong({ eyes:"surprise", body:"shrug" })`

h: Evet! Benim {{_.thanks_for}}'ime ilgi gösterdiğin için teşekkür ederim.

```
bb({ eyes:"closed_annoyed", MOUTH_LOCK:true });
hong({ eyes:"normal", body:"normal" });
```

b: ...

h: İyi misin?

`bb({ eyes:"super_sad", mouth:"narrow" });`

b: Bana daha önce hiç *teşekkür* etmemiştin.

`hong({ mouth:"smile" });`

h: Ahh seni kocaman, tüylü ve endişeli kurt.

(#act4_something_else)

# act4_thanks_2

h: Aşırı tepki versen bile, {{_.thanks_for}}'mı koruduğun için minnettarım .

`bb({ eyes:"annoyed" })`

b: Bekle... sırf korkuların hakkında konuşmaktan kaçınmak için mi "teşekkür ederim" diyorsun?

```
bb({ eyes:"normal" });
hong({ eyes:"annoyed", body:"chin" });
```

h: Aslında, işler biraz karmaşık, ve her zaman verecek cevabım da yok.

`hong({ eyes:"annoyed_l", body:"one_up" })`

h: Hayat sana önceden hazırlanmış 3 şıklı cevap listesi veriyor değil ya.

`hong({ eyes:"normal", mouth:"smile", body:"normal" })`

h: Ama şimdilik, en azından teşekkür edebilirim.

b: Şey, ben de teşşekkür ederim, beni sabırla dinlediğin için

`bb({ eyes:"closed" });`

b: Seni küçük tüysüz memeli.

(#act4_something_else)

# act4_thanks_3

h: Gevelemelerin beni korkutsa bile, yapmaya çalıştığın şey {{_.thanks_for}}'mı korumak.

`bb({ eyes:"smile_r" });`

b: Pekala, eğer beni beni övmeye devam edersen internet bizim hakkımızda garip şeyler düşünecek

```
bb({ eyes:"smile" });
hong({ eyes:"annoyed" });
```

h: Hadi ama, ben sadece narin bir üniversite öğrencisiyim ve sen de büyük, korkunç bir kurtsun. En kötü ne düşü--

`hong({ eyes:"normal", body:"point" });`

h: Aslında, buna cevap verme

(#act4_something_else)




# act4_alone

```
_.a4_talked_about_alone = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"sad_d" });`

b: İçindeki, bir yere ait olma ihtiyacını giderdiğimizden emin olacağım...

`bb({ eyes:"sad_u" });`

b: Fakat insanların bizi - *gerçek* bizi - görürse korkup kaçacaklarından kokuyorum.

`bb({ eyes:"sad" });`

{{if _.a4_fears_discussed==1}}
b: Konuşacağımız şeyleri hep ben seçtim, sıra sende insan. *Sen* ne diyorsun?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Tekrar, sendeyizi, insan. Ne düşünüyorsun?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: Başka bir şey, insan?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Katılıyorum: sosyal hayatımıza odaklanalım.](#act4_alone_skills)

[İnsanlar bizden hoşlanabilir. Deneyip görelim?](#act4_alone_experiment)

[Teşekkürler.](#act4_thanks) `_.thanks_for = "social belonging";`

# act4_alone_skills

```
bb({ eyes:"normal" });
hong({ body:"chin" });
```

h: Soru sormak, dinlemek ve empati kurmak, açık ve korumasız olmak gibi yanlarımız üzerine çalışmalıyız belki?

`hong({ eyes:"normal_l" });`

h: Ya da daha iyi sosyal alışkanlıklar ediniriz, arkadaşlarla görüşmek veya düzenli toplanmak? 

`hong({ body:"one_up" });`

h: Reddedilmek ile daha iyi başa çıkmayı da öğrenebiliriz.

`hong({ eyes:"normal" });`

h: Ya da insanların aslında bizi *reddetmediği*, sadece yorgun ve o an *Muşmula Suratlı* olduğunu öğrenebiliriz.
```
hong({ body:"normal" });
bb({ eyes:"annoyed_r" });
```

b: Seçenekler bol. Fakat "sosyal yetenekler öğrenmek" hakkında...

[Diğerlerini *kandırmak* olmaz mı?](#act4_alone_skills_manipulative)

[Bizi *kandırılmaya müsait* yapmaz mı?*](#act4_alone_skills_manipulated)

[Peki yine başarısız olursak?](#act4_alone_skills_fail)

# act4_alone_skills_manipulative

`bb({ eyes:"suspect" });`

b: Kurbanının hislerini okuyabilen seri katiller de empati kurmakta iyi değiller mi?

`bb({ eyes:"annoyed" });`

b: Adnan Oktar da arkadaş edinim insanları etkisi altında bırakmadı mı?

`hong({ eyes:"annoyed", body:"chin" });`

h: Hayır, haklısın.

h: "sosyal yetenekler" eğer insanların *iyiliği için* değilse bir değer taşımaz.

`hong({ body:"normal" });`

h: Kısacası, ^sik kafalı^ birisi olma.

`bb({ eyes:"annoyed", mouth:"smile" });`

b: İşte postere yazılacak bir söz.

`hong({ body:"shrug", mouth:"narrow" });`

h: “^Sik Kafalı^ Birisi Olma™”

(#act4_something_else)

# act4_alone_skills_manipulated

`bb({ eyes:"angry" })`

b: Mükemmel bir kapı paspası olacağız, insanlar ayaklarını üzerimizde silerken Lütfen ve Teşekkürler diyeceğiz!
`bb({ mouth:"scream", eyes:"scream" })`

b: O kadar çok kıç öpeceğiz ki kahve rengi ruj sürmüşüz gibi görünecek!
```
bb({ mouth:"normal", eyes:"normal" });
hong( body:"chin" });
```

h: Hayır, haklısın. "Sosyal yetenekler" diğerlerini memnun etmekten ibaret olamaz, ayrıca *sınırları* da çizmekla alakalıdır.
`hong( body:"one_up" });`

h: İnsanları evimize çağıramayız, eğer evimizi ayakta tutacak direğimiz yoksa.
```
hong( eyes:"angry", mouth:"narrow" });
bb( eyes:"annoyed", mouth:"smile" });
```

h: Ayrıca... ynt: şu ruj resmi...*öhk??*

(#act4_something_else)

# act4_alone_skills_fail

`bb({ eyes:"annoyed" });`

h: Başaramayabiliriz. Aslında, *başaramayacağız.*

```
bb({ eyes:"normal" });
hong({ eyes:"surprise", body:"shrug" });
```

h: Ve bu gayet normal! Başarısız olmak yeni şeyleri öğrenirkenki ilk adımdır!

`hong({ body:"normal", eyes:"normal" });`

h: O halde, hadi beraber baraşısız olalım?

`bb({ eyes:"normal_r" });`

b: Olur, sanırım... en kötü ihtimalle kasabadan ayrılı rve yeni bir kimlikle yaşarız.

`bb({ eyes:"normal" });`

h: Evet, günümüzde 2 bitcoin ile bunu yapabiliyorsun.

(#act4_something_else)

# act4_alone_experiment

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: Bazı denemeler yapmalıyız!

`hong({ body:"chin" });`

h: Bir arkadaş takılabiliriz, eski dostlarla buluşabilir, hatta kasiyer ile muhabbet edebiliriz.

`hong({ body:"normal" });`

h: Sandığımızdan daha da sevilesi olduğumuzu keşfedebiliriz.

`bb({ eyes:"annoyed" });`

[Ya bunlar içi boş, ufak "zaferler" ise?](#act4_alone_experiment_cheap)

[Ya bunlar diğerlerine külfet ise?](#act4_alone_experiment_burden)

[Ama bu ufak sohbetler *gerçek* biz değiliz!](#act4_alone_experiment_real_us)

# act4_alone_experiment_real_us

`bb({ eyes:"sad" });`

b: Eğer yüzümüze boş bir gülüş takarsak, gerçekte kimse ile arkadaşlık kuramayız,

`bb({ eyes:"super_sad" });`

b: *Fakat* başkalarına açılırsak da içimizdeki çürümüşlüğü görecekler!

`hong({body:"chin", mouth:"narrow", MOUTH_LOCK:true})`

h: ...

```
hong({body:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: Yuvarlan.

b: Ne.

`hong({body:"hands_1"})`

h: Köperkler güvenin ve sevginin göstergesi olarak sırt üstü uzanırlar ve kendilerini savunmasız hale sokarlar.

`hong({body:"one_up"})`

h: *Henüz* kendimizi savunmasız bırakmaya hazır değiliz, ama yeterli çalışma ile,

`hong({body:"normal", eyes:"surprise"})`

h: Günün birinde insanlara gerçek kişiliğimizi gösterebiliriz - tüm berbatlığıyla.

```
hong({eyes:"normal"});
bb({ eyes:"super_sad", mouth:"smile", body:"chest" });
```

b: Mama verirsen yuvarlanırım.

`bb({ eyes:"normal", mouth:"normal" });`

h: Hayır.

(#act4_something_else)


# act4_alone_experiment_cheap

b: Barmene "merhaba" demek Sosyallik Olimpiyatları'nda altın madalya almanı sağlayacak bir performans sayılmaz.

```
hong({ body:"point", eyes:"surprise" });
bb({ eyes:"normal" });
```

h: Bu *bizim* için!

`hong({ body:"one_up", eyes:"annoyed" });`

h: Sosyallik arenasında, bir tüy siklet bile sayılmayız, daha çok... sinek sikletiz

`hong({ body:"normal", eyes:"normal" });`

h: Ufak başarılarla başlamak zorundaysak, öyle olsun. 1000. adımdan önce 1. adımı atmamız gerek.

b: Evet! Belki "merhaba"dan sonra başka şeyler diyebiliriz...

`bb({ body:"two_up", mouth:"smile", eyes:"smile_u" });`

b: *"Nasılsın?"*

`hong({ body:"shrug", mouth:"smile", eyes:"surprise_l" });`

h: *"Fena değil"*

(#act4_something_else)

# act4_alone_experiment_burden

`bb({ eyes:"suspect_r" })`

b: Belki de kasiyer sosyal yeteneklerimizi sınayacak *deneylerle* uğraşmak yerine işini yapmak istiyordur.

`bb({ eyes:"annoyed" })`

h: Eğer herkes için bir *yük* isek...

```
hong({ eyes:"surprise" });
bb({ eyes:"normal" });
```

h: Bunu öğrenmiş olmamız iyi bi'şeydir!

`hong({ eyes:"normal" });`

h: Ardından insanları daha iyi tanıyabilmek, rahat hissettirmek ve sınırlarına saygı göstermek için sorular sormayı öğreniriz.

```
hong({ eyes:"annoyed_l", mouth:"narrow" });
bb({ eyes:"annoyed", mouth:"smile" });
```

h: Bilirsin, şu ^boktan^ rehberlik merkezinin broşüründeki "kişilerarası beceriler" gibi.

(#act4_something_else)



# act4_bad

```
_.a4_talked_about_bad = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"annoyed_r" })`

b: Ahlaki ihtiyaçlarını korumak istiyorum, seni daha iyi bir insan yapacak değerlerini,

`bb({ eyes:"sad_d" })`

b: Fakat içimde, sanki derinlerimde... bir bozukluk olduğunu hissediyorum.

`bb({ body:"two_up", eyes:"angry" })`

{{if _.INJURED}}
b: Ve sakın bana *bozukluk yok* deme. Bir *çatıdan* atladık.
{{/if}}

{{if !_.INJURED}}
b: Ve sakın bana *bozukluk yok* deme. Neredeyse bir *çatıdan* atlıyorduk.
{{/if}}

`bb({ body:"normal", eyes:"sad" })`

{{if _.a4_fears_discussed==1}}
b: Bilmem, konuşulacak konuları yeterince *seçtim*. Ne dersin, insan?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Tekrar, sendeyiz insan. Ne düşünüyorsun?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: Başka bir şey, insan?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Bizde bir terslik var. Düzeltmeliyiz.](#act4_bad_fix)

[Bizde bir terslik var. Kabullenmeliyiz.](#act4_bad_accept)

[Teşekkürler.](#act4_thanks) `_.thanks_for = "moral well-being";`

# act4_bad_fix

```
bb({eyes:"normal"});
hong({body:"chin"});
```

h: Yavaş yavaş daha iyi alışkanlıklar edinmeliyiz, yaşamımıza olduğunu değeri vermeliyiz,

`hong({body:"one_up"});`

h: Eğer gerekirse, uzmanlardan yardım almalıyız - terapist ya da rehberden.

`hong({body:"normal"});`

h: Bunun için yollar var.

[Ya düzeltemezsek?](#act4_bad_fix_cant)

[Ya *çok* fazla düzeltirsek?](#act4_bad_fix_too_much)

[Uzman yardımı karşılayamayız.](#act4_bad_fix_afford)

# act4_bad_fix_cant

`hong({eyes:"annoyed"});`

h: Yo, bence haklısın.

h: Herşeyi düzeltemeyiz.

`bb({mouth:"scream", eyes:"scream_sad"});`

b: Ahh, bizde bir bozukluk olduğunu biliyordum!

`hong({eyes:"surprise"});`

h: Ama en azından *daha az* bozuk olabiliriz.

```
bb({mouth:"normal", eyes:"annoyed"});
hong({eyes:"sad", mouth:"smile"});
```

h: Yaralar zamanla iyileşir, fakat asla tamamen gitmezler. Ve bu çok normal.

`bb({eyes:"annoyed_r"});`

b: Sanırım. Ayrıca,

```
Game.FORCE_TEXT_Y = 460;
Game.clearText();
publish("act4-sexy", [true]);
```

b: Yaralar *çekicidir.*

```
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-sexy", [false]);
bb({body:"chest", mouth:"smile_talk", MOUTH_LOCK:true, eyes:"sexy"}, 0);
hong({eyes:"normal", mouth:"normal"}, 0);
```

h: Lütfen bunu yapma.

(#act4_something_else)

# act4_bad_fix_too_much

`bb({ eyes:"angry_d" })`

b: Kabul etmek iğrenç olsa da... bir kısmım bu bozukluğun *kalmasını* istiyor.

`bb({ eyes:"angry" })`

b: Demek istediğim, onsuz *sıradan* birisi olmaz mıyız?

`bb({ eyes:"sad_r", body:"one_up" })`

b: Onsuz, çizimlerimiz vasat ve sönük olmaz mı?

`bb({ eyes:"sad_u", body:"two_up" })`

b: Onsuz, aynı bozukluğa sahip arkadaşlarımızla iletişim kurmamız imkansız olmaz mı?

`bb({ eyes:"sad", body:"chest" })`

b: Eğer hayatımızdan memnunsak, bu kendimizi iyi yerlere taşıma çabalarımızı yok etmez mi?

`hong({ MOUTH_LOCK:true })`

h: ...

h: Eğer "korkmamak" bile bizim için bir korkuysa...

h: Her zaman korkacak birşeyimiz olacağına eminim

`bb({ eyes:"smile_u", body:"normal", mouth:"smile" })`

b: Aa, evet! Uff! Çok rahatladım!

(#act4_something_else)

# act4_bad_fix_afford

`bb({ body:"one_up", eyes:"sexy", mouth:"normal" })`

b: "Doktor, *bu sana ne hissettiriyor?* sorusunu sorman için sana 100₺/s ödemek beni kaygılandırıyor" 

`bb({ body:"paw", eyes:"closed", mouth:"narrow" })`

b: "Mm-hmm. Ve buna sana ne hissettiriyor?"

```
bb({ body:"normal", eyes:"normal", mouth:"normal" });
hong({ eyes:"sad" });
```

h: Hayır, bu tamamen mantıklı bir kaygı.

`hong({ eyes:"annoyed", mouth:"sad" });`

h: Ve çoğu kişinin için bu tür bir uzman yardımı karşılayamaması tam bir saçmalık.

`hong({ eyes:"normal", mouth:"normal" });`

h: Ama çok daha ucuz hatta ücretsiz seçenekler de mevcut:

`hong({ body:"chin" })`

h: Destek grupları, çevrimiçi terapiler, öğrenci rehberlik merkezleri...

`hong({ body:"hands_1" })`

h: Meditasyon alışkanlığı edinmek, akıl sağlına dair resmi kaynaklı videolar izlemek...

`hong({ body:"hands_2" })`

h: Bilişsel Davranış Terapisi'ne dair kitaplar almak veya terapi gruplarına dahil olmak...
   Borrowing a library book on Cognitive Behavioral Therapy or Acceptance & Commitment Therapy...

`hong({ body:"one_up" })`

h: Oyunun sonunda tüm bunları içeren bir liste var!

```
hong({ body:"normal" });
bb({ eyes:"annoyed", mouth:"narrow" });
```

b: *Dördüncü duvar* çok da dayanamadı. 

`hong({ body:"point" });`

h: Bazı şeyler sunumdan daha önemlidir. Akıl sağlığı gibi.

(#act4_something_else)


# act4_bad_accept

```
bb({ eyes:"normal" });
hong({ eyes:"normal_l", body:"one_up", mouth:"narrow" });
```

h: Demek istediğim, terapistler böyle demiyor mu? Tüm duygularını benimse, kötü olanları bile.

```
bb({ eyes:"annoyed" });
hong({ eyes:"normal", body:"normal", mouth:"normal" });
```

b: Bekle.

["Benimse" ile kastettiğin *pes etmek* mi?](#act4_bad_accept_give_up)

["Benimse" ile kastettiğin *onaylamak* mı?](#act4_bad_accept_approve)

["Benimse" ile kastettiğin *gerçekten* mi?](#act4_bad_accept_literally)

# act4_bad_accept_give_up

`bb({ eyes:"angry", body:"one_up" });`

b: Mustafa Kemal "Tüh İngilizler geldi, neyse artık bunu böyle kabul edelim" der miydi sanıyorsun?

`bb({ eyes:"angry_r", body:"two_up" });`

b: Beyaz bayrağı sallamak kişisel gelişim sektörü tarafından neden *derin bilgelik* olarak görülüyor ki?

`bb({ eyes:"annoyed", body:"normal" });`

h: Sanırım terapistlerin kötü şeyleri "kabullen" ile demek istedikleri: orada olduklarını ve değiştirmenin zor olduğunu bilmek,

h: ama değişime olan inanca da sahip olmak

`bb({ eyes:"suspect" });`

b: O zaman terapistler *bil* demeli *kabullen* değil.

`hong({ body:"chin", eyes:"annoyed" });`

h: Evet düşününce "kabullen" biraz kafa karıştırıcı.

`bb({ eyes:"closed", mouth:"narrow" });`

b: Bunu *biliyorum*.

(#act4_something_else)

# act4_bad_accept_approve

`bb({ eyes:"angry" });`

b: Bozukluğumuzun olması *iyi* bir şey mi?

`bb({ eyes:"angry_r", body:"one_up" });`

b: Tüm bu zihinsel hastalıkları romanlaştıran o Hollywood senaristleri rezil insanlar!

`bb({ eyes:"angry", body:"two_up" });`

b: Zihinsel hastalığının olması *iğrenç!*. İnsanların *yaşamlarını* çalıyor! Neden bunu *kabul* etmeliymişiz ki?!

`bb({ body:"normal" });`

h: Sanırım terapistlerin kötü şeyleri "kabullen" ile demek istedikleri: onlara karşı anlayışlı olmak.

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: Tıpkı bataklıkta debelenen birisinin daha hızlı batması gibi, bu durumda da çözüm sabırla beklemek,

`hong({ eyes:"surprise" });`

{{if _.INJURED}}
h: Seninle, korkumla, olan çatışmam beni bir çatıdan atlattı.
{{/if}}

{{if !_.INJURED}}
h: Seninle, korkumla, olan çatışmam beni neredeyse bir çatıdan atlatıyordu.
{{/if}}

`hong({ body:"normal", eyes:"normal" });`

h: Oysa, çözüm aslında şuan yaptğımız şey - çatışmamak, onun yerine birbirimize katlanmak.

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
```

b: YAP YAP YAP YAP YAP

(#credits)
