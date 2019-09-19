# act3

```
SceneSetup.act3();
Game.WORDS_HEIGHT_BOTTOM = 205;
sfx("cheers");
```

r: Şerefe!

```
publish("act3",["roofhunter",1]);
publish("act3",["roofhong",1]);
sfx("drinking");
```

(...4001)

```
publish("act3-alpha", ["dizzyhunter",1]);
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",3]);
```

h2: *Ah* tam da olması gerektiği gibi.

```
publish("act3",["roofhunter",2]);
publish("act3",["roofhong",2]);
```

r: Bilirsin, çocuk...

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",6]);
```

h2: Spesifik olarak, sağ ve sol amigdalam zarar gördü

```
publish("act3",["roofhunter",8]);
publish("act3",["roofhong",5]);
```

r: Bana gençliğimi hatırlatıyorsun. Kafamdaki hayvan bana işkence etmeye başlamadan önceki beni.


```
publish("act3",["roofhunter",9]);
publish("act3",["roofhong",2]);
```

r: Kafamdaki canavarı yok ettiğim gibi sana da yardım edebileceğim için çok mutluyum.

```
publish("act3",["roofhunter",2]);
```

r: Hızlı soru: doğruluk mu ces--

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",7]);
publish("act3-alpha", ["dizzyhong",0]);
```

h2: CESARET!

```
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",2]);
```

r: Haha! Güzel.

```
publish("act3",["roofhunter",21]);
publish("act3",["roofhong",4]);
```

r: Tamam. Aşağıdaki masmavi havuzu görüyor musun?

```
publish("act3-alpha", ["dizzyhong",0]);
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",9]);
```

h2: Evet, Altı kat aşağıdaki?

```
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",8]);
```

r: Atla.

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",10]);
```

h2: ...

```
publish("act3",["roofhong",11]);
```

h2: Bekle, Ne?

```
publish("act3",["roofhong",10]);
publish("act3",["roofhunter",2]);
```

r: Hayvanın söylenmeye başladı, değil mi?

```
publish("act3",["roofhunter",23]);
```

r: *Oh hayıııır çok tehlikeli, bunu sakın yapma.*

```
publish("act3",["roofhunter",22]);
```

r: İşte bu yüzden ölümü-teğet geçen anlar yaşamalıyız! Sabahlar olmasın! Anı yaşa! Fahişelerin ^götünden^ kokain çek, #YOLO


```
publish("act3",["roofhunter",10]);
```

r: O hayvanın gevelemelerinin ^sikimizde^ olmadığını göster! Atla.

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",13]);
```

h2: Ama Bazen, ıııı... korkuda bir haklılık payı vardır...

```
publish("act3",["roofhunter",5]);
publish("act3",["roofhong",12]);
music(null, {fade:2});
```

r: ...

```
publish("act3-alpha", ["dizzyhunter",0]);
publish("act3",["roofhunter",6]);
publish("act3",["dd",1]);
```

r: Afedersin ama şu Bay Farkındalık'ın *kötü* hissetmek aslında *iyi* hissetmektir yalanına mı kandın?

```
publish("act3",["roofhunter",17]);
```

r: Zevk acının tersidir. Yani, acıyla savaşmak için keyif al ^amk^!

```
publish("act3",["roofhunter",18]);
```

r: Silikon Vadisi'nin sözde budistleri bu ^siktiğimin^ gerçeğini nasıl göremiyor?

```
publish("act3",["roofhunter",6]);
```

r: Evlat, Bu hayvanın bizim gibileri *incitiğini* *bildiğini* biliyorum. Bizlere *işkence* eder.

```
publish("act3",["roofhunter",19]);
```

r: Arkadaşımız değil o. O kuduz canavarı *uyutmalı*,

```
publish("act3",["roofhunter",20]);
```

r: veya *kafasına bir kurşun sıkmalıyız*.

```
publish("act3",["roofhunter",27]);
```

r: Aksi halde onun kazanmasına izin verirsin.

```
publish("act3",["roofhunter",31]);
publish("act3",["roofhong",14]);
publish("act3",["dd",2]);
```

h2: Hayır. Yanılıyorsun.

```
publish("act3",["roofhunter",13]);
publish("act3",["roofhong",15]);
music('battle_dark', {volume:1.0}, function(){
	music('battle_dark_loop');
});
```

h2: Onun kazanmasına izin vermeyeceğim.

```
publish("act3",["roofhunter",25]);
publish("act3-alpha", ["roofhong",0]);
publish("act3-alpha", ["transition",1]);
publish("act3",["dd",6]);
```

r: Evet ^amk^! Sana inanıyorum bebeğim! Öldür onu <3

(#act3a)



# act3a

```
Game.clearText();
publish("act3-out");
Game.WORDS_HEIGHT_BOTTOM = -1; /* reset */
_.act3_bb_body = 1;
```

(...1500)

```
publish("hp_show");
```

b: hayır hayır hayır

n: BU BÖLÜMÜN İKİ SONU VAR. BİRİSİ *ÇOK, ÇOK KÖTÜ.*

b: hayır hayır hayır hayır hayır hayır

n: AKILLICA SEÇ. İNSANINI KORU

`bb({ eyes:"oh_crap", mouth:"normal_talk", MOUTH_LOCK:true });`

b: AAAAAAAAAAAAAAAAAA

`bb({ mouth:"normal" });`

n: İYİ ŞANSLAR

```
Game.clearText();
bb({ eyes:"start" });
```

[İnsan, burada gerçekten ÖLEBİLİRSİN!](#act3a_harm) `Game.OVERRIDE_CHOICE_LINE=true`

[Bu aptalca ve kendine zarar veriyor!](#act3a_bad) `Game.OVERRIDE_CHOICE_LINE=true`

[Bu SERSEMLER senin arkadaşın değil!](#act3a_alone) `Game.OVERRIDE_CHOICE_LINE=true`

# act3a_harm

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: H--

(#act3a_after)

# act3a_alone

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: T--

(#act3a_after)

# act3a_bad

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: T--

(#act3a_after)

# act3a_after

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: Biliyor musun, sana inanabilirdim... Bunu daha önce zilyon kere denemiş olmasaydın.

h: Sen yalancı bir çobansın, kurt.

```
bb({ eyes:"sad" });
```

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_harm"`

[](#act3_fork) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_alone"`

[](#act3_fork) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_bad"`

[](#act3_fork) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`


# act3_fork

```
Game.clearText();
bb({body:"special_attack"});
sfx("charging");
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
Game.FORCE_CANT_SKIP = false;
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: Bunu da denemiştin.

b: insan, Lütfen...

`hong({ eyes:"look_right" });`

h: Oh *üzgünüm*, büyük ilaç firmaları benim bu yöntemimi pek onaylamıyor.

h: Bak seni ^göt^, seni ^siktir^ etmek için hepimizin farklı yöntemleri var.

`hong({ body:"look_up", eyes:"look_up" });`

h: Kimileri kendini iş yığının arasına atar,

`hong({ body:"look_down", eyes:"look_down" });`

h: bazıları sekse, uyuşturucuya veya Facebook'a,

`hong({ body:"normal", eyes:"look_right" });`

h: bazılarıysa diğer insanların arasına.

`hong({ eyes:"angry" });`

h: Bense kendimi bu havuza atacağım.

[Sarhoşsun ve havuz ALTI KAT AŞAĞIDA](#act3_bad_1_harm)

[Gerçekten, aldığım teşekkür bu mu?!](#act3_bad_1_insult) `bb({eyes:"angry"});`

[Tamam, kabul ediyorum batırdım.](#act3_good_1) `bb({mouth:"sorry", eyes:"sorry_down"});`

# act3_bad_1_harm

b: Suya düşebilsen bile, yüzey gerilimi *en az* birkaç kaburganı kıracak ve beyin sarsıntısı geçireceksin! 

h: Heh.

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: Bir keresinde Youtube'de bunu yapan bir Rus görmüştüm.

(#act3_bad_2)

# act3_bad_1_insult

`hong({ eyes:"look_right" });`

h: Be- Afedersin, *Teşekkür* mü?

`bb({ eyes:"angry" });`

b: İşte bu yüzden *varım!* İnsanlara kendilerini koruma konusunda güvenemezsin!

b: Hayatım boyunca seni korumaya çalıştım ve şimdi kalkm--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)

# act3_good_1

`hong({ body:"laugh_1" })``

h: heh.

`hong({ body:"laugh_2" })``

h: hahahaha

`hong({ body:"laugh_3" })``

h: HAHAHAHAHAHA

```
bb({ eyes:"sorry"});
hong({ body:"yell_1", mouth:"yell", eyes:"blank" });
```

h: Bu yüzyılın en ^götü kalkık^ lafı bu olabilir!

`hong({ body:"yell_2" });`

h: Evet, seni çürümüş ^bok^ parçası! ^Sıçtın^ batırdın!

`hong({ body:"normal", mouth:"angry", eyes:"angry" });`

h: Söyleyeceğin başka bir şey var mı, Kaptan Çokbilmiş?

[Benden intikam almak bir cevap değil!](#act3_good_1_fail_revenge) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[Bu sefer *sahiden* ben haklıyım!](#act3_good_1_fail_harm) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[Sana zarar verdim.](#act3_good_2a)


# act3_good_1_fail_revenge

b: Duygularınla daha sağlıklı bir ilişkin olmalı, onları boğ--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)



# act3_good_1_fail_harm

b: Lütfen, şişeyi yavaşça yere indir ve--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)




# act3_bad_2

`bb({ eyes:"sad" });`

b: lütfen... yapma...

h: Enerji korkunç derecede azalmış, kurt.

h: Senin yerinde olsaydım, sonraki kelimelerimi çok dikkatli seçerdim.

`bb({ eyes:"normal" });`

[Peki. Seni artık korumayacağım.](#act3_bad_2_jump) `bb({ mouth:"ignore", eyes:"ignore" });`

[Başından beri haklıydım.](#act3_bad_2_right)

[Üzgünüm.](#act3_good_2b) `bb({mouth:"sorry", eyes:"sorry_down"});`


# act3_bad_2_jump

b: Hadi git ve atla. Artık umurumda değil.

`hong({ eyes:"look_right", mouth:"normal", MOUTH_LOCK:true });`

h: ...

```
hong({ eyes:"less_angry", mouth:"normal" });
bb({ eyes:"ignore_oh_crap" });
```

h: Tamam o zaman. Gidiyoruz.

```
bb({ mouth:"normal", eyes:"oh_crap" });
Game.OVERRIDE_TEXT_SPEED = 2;
```

b: BEKLE HAYIR BU SADECE TERS PSİKOLOJİYDİ NE DEDİYSEM *TERSİNİ* YAPMA--

(#act3_bad_3)



# act3_bad_2_right

`bb({ eyes:"angry" });`

b: Kendini *tehlikeye* atıyorsun. Arkadaşım diye çağırdıkların *seni* kullanıyor ve sen de *onları* kullanıyorsun.

`bb({ eyes:"sad" });`

b: Lütfen, insan... niye bana inanmıyorsun?!

h: Çünkü sen *bana* asla inanmadın.

(#act3_bad_3)


# act3_bad_2_terrible

`bb({ eyes:"angry" });`

b: Öteki insanlar koruyucu kurtlarını eğitmek ve onlarla birlikte çalışmayı *öğrenmek* için zaman harcıyorlar,

b: Bizden nefret etmek yerine onlar da bizi korumaya çalışıyor! Sen niye biraz onlar gi--

`bb({ eyes:"normal" });`

h: Yanlış cevap.

(#act3_bad_3)



# act3_bad_3

```
music(null);
hong({body:"drink"});
bb({body:"attacked"});
publish("bb_STOP_VIBRATING");
attackBB("100p");
```

(...2000)

```
hong({ body:"normal", mouth:"normal", eyes:"normal" });
bb({ body:"dead" });
```

(...999)

h: *"Korkacak tek şey korkunun kendisidir."*

`hong({ body:"look_up", mouth:"happy", eyes:"blank" });`

h: *"Endişelenme, mutlu ol!"*

`hong({ body:"normal", mouth:"normal", eyes:"normal" });`

h: Günümüzün tüm bilgelerinin anlaştığı şey: negatif duygular *kötüdür!*

`hong({ eyes:"less_angry" });`

h: İşte bu yüzden *negatifler!*

b: insan... lütfen...

`hong({ eyes:"normal" });`

h: Önceden söylediğim gibi: “Sadece bu acıdan kurtulmak istiyorum.”

h: Dileğim gerçekleşti. Artık acı, korku ya da kaygı... hissetmiyorum

h: Hiçbir şey hissetmiyorum.

`_.a3_ending = "jump";`

(#act3_end)

# act3_good_2a

`bb({mouth:"sorry", eyes:"sorry_down"});`

b: Hiçbir şeyin seni incitmemesine o kadar odaklanmıştım ki, seni incitenin *ben* olduğumu fark edemedim.

```
bb({ eyes:"sorry"});
hong({ body:"yell_2", mouth:"yell", eyes:"blank" });
```

h: HA^SİKTİR^.

`hong({ body:"yell_1" });`

h: ^SİKTİR^. Gerçekten de sonunda fark edebildin?!

`hong({ body:"cry", mouth:"cry", eyes:"blank" });`

h: Bizi tüm bu belalardan kurtarabilirdin, seni koca *şapşal*. Niye daha önce fark etmedin?...

`_.apologized_for_hurt = true;`

(#act3_good_2q)

# act3_good_2b

`hong({ body:"normal", mouth:"angry", eyes:"look_right" });`

h: ...*üzgünsün.*

`hong({ eyes:"angry", MOUTH_LOCK:true });`

h: ...

h: *Ne* için üzgünsün?

(#act3_good_2q)


# act3_good_2q

`bb({mouth:"sorry", eyes:"sorry"});`

{{if _.apologized_for_hurt}}
(#act3_good_2q_already_apologized)
{{/if}}

{{if !_.apologized_for_hurt}}
(#act3_good_2q_not_already_apologized)
{{/if}}


# act3_good_2q_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"less_angry" });`

[Seni iyi koruyamadığım için üzgünüm.](#act3_good_3_protector)

[Sana saygı göstermediğim için üzgünüm.](#act3_good_3_respect)

[Üzgünüm.](#act3_good_4)

# act3_good_2q_not_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"angry" }, 0);`

[Korkunç bir insanım olduğu için üzgünüm!](#act3_bad_2_terrible) `bb({mouth:"normal", eyes:"normal"})`

[Sana saygı göstermediğim için üzgünüm.](#act3_good_3_respect)

[Seni incittiğim için üzgünüm.](#act3_good_3_hurt)

# act3_good_3_protector

`bb({eyes:"sorry_down"});`

b: *Gerçek* tehlikelere karşı seni korumak benim görevimdi, fakat sadece arabalara ve postacılara havladım

`bb({eyes:"sorry_up"});`

b: Gölgelere havladım. Çok fazla havladım.

`bb({eyes:"sorry"});`

b: Beni sadece susturmaya çalışmakta haklıydın.

`bb({eyes:"sorry_down"});`

b: Üzgünüm.

(#act3_good_4)



# act3_good_3_respect

`bb({eyes:"sorry_down"});`

b: Sadık *koruyucu-köpeğin* olmam lazımdı, ama senin *bana* itaat etmen gerekiyormuş gibi davrandım.

`bb({eyes:"sorry_up"});`

b: Koruyucu ile gardiyan arasında bir çüzgi vardı, ben o çizgiyi aştım.

`bb({eyes:"sorry_down"});`

b: Üzgünüm.

(#act3_good_4)



# act3_good_3_hurt

`bb({eyes:"sorry_down"});`

b: b: Hiçbir şeyin seni incitmemesine o kadar odaklanmıştım ki, durup seni incitenin *ben* olduğunu fark edemedim.

`bb({eyes:"sorry_up"});`

b: Kötü bir köpektim.

`bb({eyes:"sorry_down"});`

b: Üzgünüm.

(#act3_good_4)


# act3_good_4

```
music(null,{fade:3});
hong({ eyes:"less_angry", MOUTH_LOCK:true },0);
```

h: ...

```
hong({ body:"stop", mouth:"stop", eyes:"blank" });
```

h: Evet, şey, bu zaten aptalca bir fikirdi.

h: Sadece senin canını yakmak istemiştim, ve... yaptım.

h: Öyleyse berabere kaldığımızı kabul edelim

```
bb({ mouth:"sorry", eyes:"sorry" });
bb({ MOUTH_LOCK:true });
```

b: ...

b: Kabul.

h: Kabul.

n: *Berabere*

`_.a3_ending = "walkaway";`

(#act3_end)









# act3_end

```
Game.clearText();
publish("act3-in");
publish("hp_hide");
Game.FORCE_CANT_SKIP = true;
```

{{if _.a3_ending=="walkaway"}}
(#act3_walkaway)
{{/if}}

{{if _.a3_ending=="jump"}}
(#act3_jump)
{{/if}}






# act3_walkaway

```
publish("start-walkaway-anim");
Game.WORDS_HEIGHT_BOTTOM = 205;
```

(...3501)

```
sfx("bottle_toss");
publish('hong-next');
publish("act3",["roofhunter",7]);
```

(...667)

```
publish("act3",["dd",4]);
publish("act3",["roofhunter",26]);
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("concrete_step2");
```

(...667)

```
publish('hong-next');
publish("act3",["roofhunter",27]);
```

`Game.FORCE_CANT_SKIP = false;`

r: Oh *hadi ama*. Bu hayvanın sana yaptığı onca şeyden sonra, *pes* mi ediyorsun ?

r: Ne oldu çocuk? *Korktun* mu?

```
publish('hong-next');
publish("act3",["roofhunter",26]);
```

h2: Evet.

h2: Korkuyorum.

`publish('hong-next')`

h2: Ve bence bu çok normal!

`publish('hong-next')`

h2: Korkmak normal bir şey.

`publish('hong-next')`

(...500)

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1167)

```
publish('hong-next');
```

(...833)

```
publish('hong-next');
sfx("rustle2");
```

(...1333)

```
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",31]);
sfx("concrete_step4");
```

(...667)

```
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("door");
```

(...1333)

```
publish('hong-next');
sfx("concrete_step2");
```

(...501)

```
publish('hong-next');
Game.FORCE_CANT_SKIP = false;
sfx("lock_door");
publish("act3",["roofhunter",32]);
```

(...2001)

```
publish("act3",["roofhunter",33]);
```

r: Az önce kapıyı mı kilitlediler?

```
Game.clearAll();
_.INJURED = false;
Game.WORDS_HEIGHT_BOTTOM = -1;
```

(...2000)

(#act4)




# act3_jump

```
publish("start-jump-anim");
Game.FORCE_TEXT_Y = 300;
```

(...2001)

```
publish('hong-next');
sfx("bottle_toss");
```

(...833)

```
sfx("concrete_step1");
sfx("claps");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",28]);
```
(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step2");
publish('hong-next');
publish("act3",["roofhunter",28]);
```

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",34]);
```

(...1167)

```
sfx("rustle2");
publish('hong-next');
```

(...1001)

`publish('hong-next')`

b: no...

(...501)

`Game.clearText();`

`publish('hong-next')`

(...1333)

```
sfx("quack");
publish('hong-next');
```

(...1333)

`publish('hong-next')`

b: Hayır Hayır

(...501)

`Game.clearText();`

`publish('hong-next')`

(...2001)

```
sfx("rustle2");
publish('hong-next')
```

(...501)

```
sfx("concrete_step1");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",30]);
```

(...167)

```
sfx("concrete_step2");
publish('hong-next');
```

(...167)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",2]);
publish("act3",["roofhunter",15]);
```

(...167)

```
sfx("bottle_slip");
publish('hong-next');
publish("act3",["dd",3]);
publish("act3",["roofhunter",16]);
```

(...833)

```
sfx("rustle");
publish('hong-next');
```

(...167)

`publish('hong-next')`

(...167)

```
publish('hong-next');
Game.FORCE_TEXT_Y = 325;
Game.OVERRIDE_FONT_SIZE = 50;
```

b: HAYIR!

(...400)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-injury-show");
publish("hide_tabs");
```

(...2000)

```
sfx("hospital1");
publish("act4-injury", [1]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital2");
publish("act4-injury", [2]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital3");
publish("act4-injury", [3]);
```

(...8000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...5500)

`_.INJURED = true;`

(#act4)
