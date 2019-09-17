# act1

```
SceneSetup.act1();
```

(...300)

n: BU DA İNSANIN KAYGISI

n: BU KAYGI _SEN_ OLUYORSUN

{{if window.localStorage.continueChapter=="replay"}}
(#act1_replay)
{{/if}}

{{if window.localStorage.continueChapter!="replay"}}
(#act1_normal)
{{/if}}



# act1_replay

`hong({mouth:"0_neutral", eyes:"0_neutral"})`

h: Oh! Yine mi buradayız?

`hong({eyes:"0_neutral"})`

n: GÖREVİN İNSANINI *TEHLİKELERDEN* KORUMAK

`bb({eyes:"look", mouth:"small_lock"})`

n: HATTA, BU OYUNU TEKRAR OYNAMAK BİLE ONU ŞUAN *TEHLİKEYE* ATIYOR

n: ÇABUK, UYAR ONU!

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: İnsan! Dinle, tehlikedeyiz! Oyuncu...

[...bize tekrar işkence edecek!](#act1_replay_torture)

[...yeni bir sona ulaşamayacak!](#act1_replay_alternate)

[...ve oyun karakteri anlaşamayacak!](#act1_replay_dissonance)

# act1_replay_torture

```
window.HACK_REPLAY = JSON.parse(localStorage.act4);
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

{{if window.HACK_REPLAY.act1_ending=="fight"}}
b: Bizi iki büklüm yapıp ağlatacak!
{{/if}}

{{if window.HACK_REPLAY.act1_ending=="flight"}}
b: Sana panik atak geçirttiği için telefonunu parçalatacak!
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="fight"}}
b: Parti sahibini yumruklamamızı *ENGELLEYECEK*!
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="flight"}}
b: Bize sempatik parti sahibini yumruklatacak!
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="jump"}}
h: En azından bu sefer çatıdan aşağı atla--
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="walkaway"}}
b: BİZİ ÇATIDAN ATLATACAK.
{{/if}}

`bb({body:"fear"});`

b: TÜM BU YENİ KORKUNÇ ŞEYLER BAŞIMIZA GELECEK, VE SONRA DA BİZ--

(#act1_replay_end)


#act1_replay_alternate

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: Kuşkusuz, hikaye bir *bütün* olarak değişmedi, fakat her karakter iki olası sona sahip, ayrıca tüm o dallanıp budaklanan diyalog seç--
`bb({body:"fear"});`

b: Oyuncu hüsrana uğrayacak, bu sekmeyi kapatacak, programı silecek, ve sonra biz--

(#act1_replay_end)


# act1_replay_dissonance

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: Bir sapık- ne?

`bb({eyes:"normal"});`

b: Hikayenin temeli korkularınla sağlıklı bir şekilde yaşamak için ne tür *SEÇİMLER* yapacağın üzerineydi,

`bb({eyes:"normal_right"});`

b: Fakat oyunu tekrar oynamak aynı sonuca ulaştıracak, ki bu da *SEÇİMLERİNİN* bir anlamı olmadığı gösteriyor,

`bb({eyes:"narrow_eyebrow"});`

b: Böylelikle oyunun ana fikri ve mekaniği arasındaki çelişki ortaya konuyor,

`bb({eyes:"fear"});`

b: Ve bu hayali evreni saran kumaş parçası çözülüyor,
`bb({body:"fear"});`

b: Sonrasında da biz--

(#act1_replay_end)


# act1_replay_end

`bb({body:"panic"})`

b: ÖLECEĞİZZZZZZZZZZZZZZ

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.clearText();
```

(...1001)

```
bb({body:"laugh"});
hong({body:"laugh"});
Game.clearText();
sfx("laugh");
```

(...5001)

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({body:"0_sammich"});
```

h: Tamam, karaktere geri dönelim. 
```
Game.clearText();
```

n4: (BIRAK _KAYGIN_ FALAN FİLAN FALAN FİLAN _KAYGINA_ EN YAKIN FALAN FİLAN KURALLARI BİLİYORSUNUZ)

```
sfx("squeak");
hong({body:"0_squeeze"});
bb({body:"squeeze"});
```

(#act1_normal_choice)

# act1_normal

`hong({mouth:"0_neutral", eyes:"0_annoyed"})`

h: Ah ne güzel, kurt yine burada. Harikaaaaa.

`hong({eyes:"0_neutral"})`

n: GÖREVİN İNSANINI *TEHLİKELERDEN* KORUMAK

`bb({eyes:"look", mouth:"small_lock"})`

n: HATTA, BU OYUNU TEKRAR OYNAMAK BİLE ONU ŞUAN *TEHLİKEYE* ATIYOR

n: ÇABUK, UYAR ONU!

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: İnsan! Dinle, tehlikedeyiz! ...

`bb({body:"squeeze"})`

n4: (BIRAK _KAYGIN_ OYUNA DAHİL OLSUN! _KAYGIN_ SANA HANGİSİNİ SEÇMENİ SÖYLÜYORSA ONU SEÇ)
(#act1_normal_choice)

# act1_normal_choice

[Tek başımıza yemek yiyoruz! Yine!](#act1a_alone) `bb({body:"squeeze_talk"})`
[Yemek yerken hiç de üretken değiliz!](#act1a_productive) `bb({body:"squeeze_talk"})`
[Beyaz ekmek bizim için zararlı!](#act1a_bread) `bb({body:"squeeze_talk"})`
# act1a_alone

```
bb({body:"normal", mouth:"small", eyes:"narrow"});
hong({body:"0_sammich"});
```

b: Yanlızlığın günde 15 sigara içerek erkenden ölmek ile aynı olduğunu bilmiyor musun?-

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({mouth:"normal", eyes:"normal_right"})`

b: (Holt-Lunstad 2010, PLoS Medicine)

`hong({eyes:"0_annoyed"})`

h: Um, thanks for citing your sources but--

h: Ah, kaynağına atıfta bulunduğun için sağol fakat--

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({body:"fear", mouth:"normal", eyes:"fear"})`

b: Demek oluyor ki birileri ile takılmazsak *hemen şimdi* biz--

`bb({body:"panic"})`

b: ÖLECEĞİZZZZZZZZZZZZZZ

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "alone");
publish("hp_show");
```

(...2500)

`_.fifteencigs = true`

n: *SEVİLMEME KORKUSU*NU KULLANDIN

(#act1b)

# act1a_productive

```
bb({body:"normal", mouth:"small", eyes:"normal"});
hong({body:"0_sammich"});
```

b: Dizüstü bilgisayarını çıkar ve hemen çalışmaya başla!

`hong({eyes:"0_annoyed"})`

h: Klavyemin üstünde kırıntı olmasını iste--

```
bb({mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Eğer içinde bulunduğumuz topluma-bedenine yararlı değilsek bu bizi toplum-paraziti yapar!

b: Toplum-bedeni toplum-doktoruna giderek toplum-parazitlerini öldürecek ilaçlar alı ve biz--

```
bb({body:"panic", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "bad");
publish("hp_show");
```

(...2500)

`_.parasite = true`

n: *KÖTÜ BİRİSİ OLMA KORKUSU*NU KULLANDIN

(#act1b)

# act1a_bread

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich", eyes:"0_annoyed"});
```

h: O araştırmalar kanıtl--

```
bb({body:"fear", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: İşlenmiş un kan şekerimizi tavan yaptıracak ve tüm eklemlerimizi kesmek zorunda kalacaklar, ve biz de-

`bb({body:"panic"})`

b: ÖLECEĞİZZZZZZZZZZZZZZ

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "harm");
publish("hp_show");
```

(...2500)

`_.whitebread = true`

n: *ZARAR GÖRME KORKUSU*NU KULLANDIN

(#act1b)

# act1b

n: ÇOK ETKİLİ OLDU

`bb({mouth:"smile", eyes:"smile"});`

b: Gördün mü insan? Ben senin sadık koruyucu-kurdunum!

`bb({body:"pride_talk"});`

b: Sexilerine güven! Hislerin her zaman doğrudur!

`bb({body:"pride"});`

n: İNSANININ ENERJİ BARINI SIFIRA İNDİR

n: FİZİKSEL + SOSYAL + ETİK DEĞERLERİNİ KORUMAK İÇİN KULLANABİLECEKLERİN:

n: *ZARAR GÖRME* KORKUSU #harm#
n: *SEVİLMEME* KORKUSU #alone#
n: VE *KÖTÜ BİRİSİ OLMA* KORKUSU #bad#
`Game.OVERRIDE_TEXT_SPEED = 1.25;`

n4: (İPUCU: EN DERİN VE KARANLIK KORKULARINA DOKUNAN SEÇİMLERLE OYNA!~)

h: ...

```
hong({body:"putaway"});
sfx("rustle");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

(...1000)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h: biliyor musun, belki de telefonuma bi' göz atmalıyım.

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: İNSANINI KORU
n: BU DÜNYADAN. DİĞERLERİNDEN. KENDİSİNDEN.
n: İYİ ŞANSLAR
(...500)

`Game.clearText()`

(...500)

(#act1c)

# act1c

`music('battle', {volume:0.5})`

n: ROUND 1 *DÖVÜŞ!*

`bb({body:"normal", mouth:"normal", eyes:"normal"});`

h: Hıh. Facebook gönderilerinde bu hafta bir parti olacağı yazıyor.

`bb({eyes:"uncertain"});`

b: O garip çocuk *her* hafta sonu parti vermiyor mu?

`bb({eyes:"uncertain_right"});`

b: İçindeki ne tür bir boşluğu doldurmaya çalışıyor? İç dünyası darma duman birisi olmalı!

`hong({eyes:"surprise"});`

h: Bir de, davet mi edilmişim?

`bb({eyes:"fear", mouth:"normal"});`

b: Öyle ise!

[Git, yoksa yalnızlıktan öleceksin!](#act1c_loner)
[Gitme, orası uyuşturucularla dolu bir yer](#act1c_drugs)
[Görmezden gel, ortamın havasını kasvetli yaparız.](#act1c_sad)
# act1c_loner

{{if _.fifteencigs}}
b: Günde on beş sigara, insan! On beş!
{{/if}}

{{if !_.fifteencigs}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if !_.fifteencigs}}
b: Cenazemize kimse gelmeyecek, küllerimizi okyanusa salacaklar, balinalar tarafından yenileceğiz,
{{/if}}

{{if !_.fifteencigs}}
b: ve BALİNA DIŞKISI olacağız!
{{/if}}

{{if !_.fifteencigs}} `_.whalepoop = true` {{/if}}

(...500)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

{{if !_.fifteencigs}}
b: Yeni evet o partiye gitmeliyiz!
{{/if}}

{{if _.parasite}}
b: Dizüstü bilgisayarını çalışmak için yanında getir, böylece toplum-paraziti olmazsın.
{{/if}}

{{if _.whitebread}}
b: BEYAZ EKMEK vermedikleri sürece
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: TANRIM. Eğer çeneni kapatacaksan, tamam

h: Gideceğim

{{if _.whalepoop}}
b: Balina dışkısı, insan! Balina dışkısı!
{{/if}}

`_.partyinvite="yes"`

(#act1d)

# act1c_drugs

`bb({mouth:"small", eyes:"fear"});`

{{if _.whitebread}}
b: daha bile kötüsü... BEYAZ EKMEK
{{/if}}

{{if _.whitebread}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if _.whitebread}}
b: O kadar fazla dozda uyuşturucu ve beyaz ekmek alacağız ki şişman cesedimiz yakma ocağına sığmayacak!
{{/if}}

{{if !_.whitebread}}
b: O kadar fazla uyuşturucu alacağız ki cesedimizin başındaki adam nasıl önceden pudralandığımızı anlayamayacak!
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.parasite}}
b: Ayrıca, parti yapamayız, çalışmamız lazım yoksa yoksa aşağılık bir toplum-paraziti oluruz!
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: TANRIM. Eğer çeneni kapatacaksan, tamam

h: Gitmeyeceğim.

`_.partyinvite="no"`

(#act1d)

# act1c_sad

`bb({eyes:"uncertain_right", mouth:"normal"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.fifteencigs}}
b: Yaptığımız tek şey bir köşede günde 15 sigara içmek kadar ölümcül olan yalnızlığımıza ağlamak
{{/if}}

{{if _.parasite}}
b: Partilerde yaptığımız tek şey orada olmaktansa üretken şeyler yapabileceğimiz
{{/if}}

{{if _.whitebread}}
b: Tek yaptığımız şey abur cuburların ne kadar sağlıksız olduğu hakkında endişelenmek
{{/if}}

```
bb({mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"lookaway"});
```

h: off neden acaba.

`hong({eyes:"neutral"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: Yani eğer oraya gidersek onların keyiflerini kaçıracağız, fakat gitmezsek de onları üzeceğiz!
`bb({body:"fear", eyes:"fear"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: YAPTIĞIMIZ TEK ŞEY İNSANLARI ÜZMEK, BU YÜZDEN ÜZÜLMELİYİZ
```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

`hong({mouth:"anger", eyes:"anger"});`

h: Off. Eğer çeneni kapatacaksan, tamam

h: Daveti görmezden geleceğim.
`_.partyinvite="ignore"`

(#act1d)

# act1d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"annoyed"});
```

h: Neyse. Bu kadar Facebook yeter. Biraz daha sakin, daha az endişe uyandıran bir şeye ihtiyacım var

`hong({eyes:"neutral"});`

h: Twitter'da neler oluyor?

`bb({eyes:"look"});`

[Olamaz, şu kötü haberlere baksana!](#act1d_news)

[Olamaz, şu tweet *bize* gönderme mi yapıyor](#act1d_subtweet)

[Hey, süt içen kedi GIF'i](#act1d_milk)


# act1d_news

```
bb({eyes:"pained1"});
music(null, {fade:2});
```

b: Tanrım, dünya alevler altında gibi, değil mi?

```
bb({eyes:"pained2"});
hong({mouth:"sad", eyes:"sad"});
```

b: Her şeyin sonu geliyormuş gibi, sanki her şey ölüyor ve üzerimizde kaldıramayacağımız bir lanet var gibi.

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
bb({mouth:"shut"});
```

b: ...

`bb({mouth:"smile", eyes:"smile"});`

b: Şunu retweet'leyeyim!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

`_.badnews=true`

```
music('battle', {volume:0.5});
hong({mouth:"anger", eyes:"anger"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Tamam şunu retweet'leyeceğim yeter ki sus!

`hong({mouth:"neutral", eyes:"annoyed"});`

h: Yeter, Snapchat'e bir göz atalım.

(#act1e)


# act1d_subtweet

`bb({eyes:"fear"});`

b: Bu bir gönderme! Gizli mi gizli bir gönderme bu tweet!

`hong({eyes:"annoyed"});`

h: Belki de değildir?

`bb({eyes:"narrow", mouth:"small"});`

b: peki ya arkamızdan konuşuyorlarsa

h: Hayır konu--

`bb({body:"fear", eyes:"fear", mouth:"normal"});`

b: ARKAMIZA BAKA BAKA

`hong({eyes:"sad", mouth:"sad"});`

h: Ben san-

`bb({eyes:"narrow", mouth:"small"});`

b: fakat *ya öyleyse*

h: D--

`bb({eyes:"narrow_eyebrow"});`

b: *ya öyleyse*

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
hong({mouth:"shut"});
```

h: ...

(...1000)

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.subtweet=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: p-EKİ, Snapchat'e bakalım.

(#act1e)

# act1d_milk

`hong({mouth:"smile", eyes:"neutral"});`

h: Heh yaa çok şirin, retweet'ledim, Sanı--

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: KEDİLER SÜTÜ HAZMEDEMEZ VE İNSANLARIN HAYVAN SÖMÜRÜSÜNDEN KEYİF ALMALARI KORKUNÇ

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
attack("18p", "bad");
```

(...2500)


`_.catmilk=true`

```
hong({mouth:"anger", eyes:"annoyed"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: p-EKİ, Snapchat'e bakalım.

(#act1e)

# act1e

`hong({mouth:"neutral", eyes:"neutral"});`

h: Hah, dün geceden fotoğraflar. Demek haftalık partiler *böyle* oluyormuş.

{{if _.partyinvite=="yes"}} (#act1e_said_yes) {{/if}}

{{if _.partyinvite=="no"}} (#act1e_said_no) {{/if}}

{{if _.partyinvite=="ignore"}} (#act1e_said_ignore) {{/if}}

# act1e_said_yes

`hong({mouth:"sad", eyes:"annoyed"});`

h: Off, benim için çok kalabalık, daralıyorum.

h: Daveti kabul etmemeliydim miydim acaba?

```
hong({mouth:"neutral", eyes:"neutral"});
bb({mouth:"normal", eyes:"normal"});
```

[Cevabımızı değiştirmek mi? İki yüzlü gibi mi?!](#act1e_yes_dontchange)

[Cevabımızı değiştir! Çok kalabalık!](#act1e_yes_changetono)

{{if _.subtweet}}
[Evet kesinlikle bize gönderme yapıyorlar.](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[Bekle doğruluğuna bakmadan retweet'ledik](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[Gerçekten de davranışların çok kötü, biliyor musun?](#act1e_ignore_posture)
{{/if}}

# act1e_yes_dontchange

```
bb({eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Partilerine geleceğimize inanıyorlar ve güvenlerine ihanet mi ediyorsun? Yalnız mı ölmek istiyorsun?!

{{if _.fifteencigs}}
b: ON BEŞ. SİGARA.
{{/if}}

{{if _.whalepoop}}
b: BALİNA. DIŞKISI.
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Kapa çeneni! Kapa çeneni! Gideceğim, son kararım!

(#act1f)

# act1e_yes_changetono

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: İnsanların izdiham yaratabildiklerini bilmiyor musun?

```
bb({body:"fear", mouth:"small", eyes:"narrow"});
hong({eyes:"sad", mouth:"sad"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: 2003'de Rodos'ta bir gece kulübündeki yangın insanları panikletti ve çıkışı tıkayan yığını yüzünden 100 kişi yanarak öl--

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({mouth:"shock"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: BAŞIMIZA BU MU GELDİN İSTİ-

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 2.5;
```

b: HAYIR DE HAYIR DE HAYIR DE HAYIR DE HAYIR DE HAYIR D-


```
bb({body:"normal", eyes:"fear", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
hong({eyes:"anger", mouth:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Kapa çeneni! Kapa çeneni! Vazgeçtim gitmeyeceğim! Tanrım!

(#act1f)

# act1e_said_no

`hong({mouth:"sad", eyes:"sad"});`

h: Hm... eğlenceli görünüyor.

h: Daveti reddetmemeliydim belki de?

`bb({mouth:"normal", eyes:"normal"});`

[Cevabımızı değiştirmek mi? İki yüzlü gibi mi?!](#act1e_no_dontchange)

[Cevabımızı değiştir! Yalnız ölme!](#act1e_no_changetoyes)

{{if _.subtweet}}
[Evet kesinlikle bize gönderme yapıyorlar.](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[Bekle doğruluğuna bakmadan retweet'ledik](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[Gerçekten de davranışların çok kötü, biliyor musun?](#act1e_ignore_posture)
{{/if}}

# act1e_no_dontchange

`bb({eyes:"anger"})`

b: Herkes bize güveniyordu!

b: ...onları tek başlarına bırakıp ve bizim gibi {{if _.whitebread}}beyaz-ekmek-öğütücüsü{{/if}} korkunç bir sürüngensiz eğle- 


```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
bb({body:"normal", eyes:"uncertain", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Kapa çeneni! Kapa çeneni! Gitmeyeceğim, son kararım!

(#act1f)

# act1e_no_changetoyes

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Chronic loneliness increases our cortisol levels as well as risk for cardiovascular disease and stroke!

b: Kronik yalnızlık hem kortizol seviyemizi hem de kalp krizi geçirme riskimizi arttırır

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.fifteencigs}}
b: ON BEŞ. SİGARA.
{{/if}}

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Kapa çeneni! Kapa çeneni! Vazgeçtim gideceğim! Tanrım!

(#act1f)

# act1e_ignore_subtweet

```
bb({eyes:"fear", mouth:"small"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Sorunlarımızı yazdığımız tweetlerimiz insanların karşısında!

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.7;
```

b: We're gonna get called out and cancelled and dragged with a rope on horseback down the information superhighway!
b: Rezil olacağız, dışlanacağız ve bilgi otoyolundan at arkasına bir ip ile bağlanıp sürükleneceğiz.
```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Neden böylesin?!

(#act1f)

# act1e_ignore_factcheck

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Yanlış bilgi paylaşıyoruz! Özgür basına güveni yok ediyoruz!

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Demokrasinin yıkıntılarından yükselecek olan faşizmin nedeni biziz!

```
bb({body:"normal", eyes:"anger"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

```
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
_.factcheck = true;
```

h: Neden böylesin?!

(#act1f)

# act1e_ignore_posture

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Fıtık mı olmak istiyorsun?! Ekranına öyle eğilmeyi bırak!

```
bb({body:"meta"});
```

b: Bu seni de kapsıyor.

```
bb({body:"normal", mouth:"normal"});
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Neden böylesin?!

(#act1f)

# act1e_said_ignore

`hong({mouth:"sad", eyes:"sad"});`

h: Hm... eğlenceli görünüyor.

h: Daveti görmezden gelmemeliydim?

`bb({mouth:"normal", eyes:"normal"});`

[Görmezden gelmeye devam et, partiyi mahvedeceğiz.](#act1e_ignore_continue)

[Aslında, git.](#act1e_ignore_changetoyes)

[Aslında, gitme.](#act1e_ignore_changetono)

# act1e_ignore_continue

`hong({eyes:"annoyed"});`

h: Görmezden gelmeye devam etmek kabalık olur, değil mi?

`bb({eyes:"normal_right"});`

b: Gerçi diğer insanlar *bizi* hep görmezden geliyor

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

b: eşitlendik diyebiliriz yani.

(#act1f)

# act1e_ignore_changetoyes

`hong({eyes:"surprise", mouth:"smile"});`

h: Sen... eğlenmeme izin mi veriyorsun?

b: Şey, yani, yalnızlık bizi öldür*ebilir*.

`hong({eyes:"neutral", mouth:"neutral"});`

(#act1e_no_changetoyes)

# act1e_ignore_changetono

`bb({eyes:"narrow"});`

b: Çok kalabalık. Kalabalıklar tehlikelidir.

(#act1e_yes_changetono)


# act1f

```
hong({mouth:"neutral", eyes:"neutral"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: Her neyse. Tinder bildirimi geldi.

`bb({eyes:"uncertain"})`

b: Ne, o ilişki uygulaması mı?

`hong({eyes:"annoyed"})`

h: İlişki uygulaması değil bu, yeni insanlarla tanışma--

`bb({eyes:"narrow"})`

b: Bu bir ilişki uygulaması.

```
hong({eyes:"surprise", mouth:"smile"});
bb({eyes:"normal"});
```

h: Oh, birisi ile eşleştim! Şirin görünüyor!

```
bb({eyes:"narrow_eyebrow"});
hong({eyes:"sad", mouth:"anger"})
```

h: Lütfen bunu benim için mahve--

```
bb({body:"panic"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: TEHLİKE TEHLİKE TEHLİKE TEHLİKE

`bb({body:"fear", eyes:"fear", mouth:"normal"})`

[Diğerleri tarafından *kullanılıyoruz*.](#act1f_used_by_others)

[Diğer insanları *kullanıyoruz*.](#act1f_using_others)

[BİR SERİ KATİLLE EŞLEŞTİN](#act1f_killer)

# act1f_used_by_others

`bb({body:"point_crotch", eyes:"normal", mouth:"normal"})`

b: Rastgele ilişkiler aşağıdaki deliği doldurabilir,

b: dolduramayacağı bir delik var...

`bb({body:"point_heart", eyes:"pretty", mouth:"small"})`

b: *burada*.

(...1000)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Demek istediğim YALNIZ ÖLECEĞİZ

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.hookuphole=true`

(#act1g)

# act1f_using_others

`bb({eyes:"narrow", mouth:"small"})`

b: Diğer insanların jenitalleri bizim için toplamamız gereken Pokemonlar mı?

```
bb({body:"sing", eyes:"pretty", mouth:"shut"});
music("pokemon");
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

```
Game.FORCE_TEXT_DURATION = 1000;
Game.FORCE_NO_VOICE = true;
```

b: ♫ (pokemon ana müziği)-

(...5600)

```
bb({mouth:"normal"});
Game.FORCE_TEXT_DURATION = 2400;
```

b: ♫ İsteğim, en iyi ^sürt^ük olmak

(...500)

```
bb({eyes:"narrow", mouth:"small"});
Game.FORCE_TEXT_DURATION = 2100;
```

b: ♫ Daha önce görülmemiş-

(...1500)

```
bb({eyes:"pretty"});
Game.FORCE_TEXT_DURATION = 2300;
```

b: ♫ Kalçalar ve ^kıç^, cezbedici göğüsler-

(...500)

```
bb({eyes:"fear", mouth:"normal"});
Game.FORCE_TEXT_DURATION = 2000;
```

b: ♫ terli ^penis^ ve toplarla!-

(...1000)

```
bb({eyes:"smile", mouth:"smile"});
Game.FORCE_TEXT_DURATION = 1000;
```

b: ♫ LİBİ-MON! HEPSİNİ YAKA-

```
Game.FORCE_CANT_SKIP = false;
Game.clearText();
music(false);
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Demek istediğim biz manipülatif bir sürüngeniz

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

`_.pokemon=true`

(#act1g)

# act1f_killer

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.whitebread}}
b: They'll trap you in a well and force-feed you white bread to fatten you up so they can wear your skin like a suit!
b: Seni bir kuyuya tıkacak ve beyaz ekmek ile besleyip şişmanlatacaklar ki derini yüzüp giyebilsinler!
{{/if}}

{{if _.parasite}}
b: Seni mutfak saati ile coplayacaklar ve "DAHA ÜRETKEN OLMALIYDIN PARAZİT" diyecekler 
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: Seni parçalayıp kanlı konfeti yapacaklar, bağırsaklarını ısıtıcıya dizecekler ve kanını kokteyl şişesine karıştıracaklar!
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: Bir parti daveti için BU nasıl?!
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

`_.serialkiller=true`

(#act1g)

# act1g

```
bb({body:"normal", mouth:"normal", eyes:"look"});
hong({body:"2_tired"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
music(false);
```

h: ...

(...500)

h: bu oyundan çok bıktım.

(...700)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h:
{{if _.fifteencigs}}"yalnızlık bizi öldürecek"... {{/if}}
{{if _.parasite}}"biz bir toplum-parazitiyiz"... {{/if}}
{{if _.whitebread}}"onu yeme, bizi öldürecek"... {{/if}}
{{if _.subtweet}}"bizim arkamızdan konuşuyorlar"... {{/if}}
{{if _.badnews}}"dünya alevler altında"... {{/if}}
{{if _.hookuphole}}"yalnız öleceğiz"... {{/if}}
{{if _.serialkiller}}"o bir seri katil"... {{/if}}
{{if _.catmilk}}"kediler sütü hazmedemez"... {{/if}}
{{if _.pokemon}}^bombok^ bir parodi şarkı... {{/if}}

h: ben sadece hayatımı yaşamak istiyorum.

h: sadece azat olmak istiyorum tüm bu... acıdan.

`bb({eyes:"look_sad"});`

b: Hey... insan...

`Game.OVERRIDE_TEXT_SPEED = 0.5;`

b: Her şey güzel olacak.

(...600)

`bb({body:"point_heart", eyes:"look_sad_smile", mouth:"smile"});`

b: As your loyal guard-wolf, I'll always keep an eye out for danger, and do my best to keep you safe.
b: Sadık koruyucu-kurdun olarak , tehlikelere karşı gözüm hep açık olacak ve seni korumak için elimden geleni yapacağım.

`bb({body:"normal", eyes:"look_sad", mouth:"smile"});`

b: Söz veriyorum.

(...600)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({body:"phone1", eyes:"neutral", mouth:"neutral"});
```

h: Son uygulama. Instagram. Ne diyorsun?

`hong({eyes:"sad"});`

h: Bunlar... parti fotoğrafları.

`hong({mouth:"sad"});`

h: Herkes mutlu gözüküyor. Endişeden arınmış. Kaygılarından arınmış.

`hong({mouth:"anger"});`

h: Tanrım, neden onlar gibi olamıyorum? Neden *normal* olamıyorum?
`bb({eyes:"normal_right"});`

b: Partilerden laf açılmışken, bu hafta sonundaki parti daveti ile ilgili. SON kararım:

`bb({eyes:"normal"});`

[Gitmeliyiz.](#act1g_go) `Game.OVERRIDE_CHOICE_LINE=true`

[Gitmemeliyiz.](#act1g_dont) `Game.OVERRIDE_CHOICE_LINE=true`

# act1g_go

`_.act1g = "go"`

(#act1h)

# act1g_dont

`_.act1g = "dont"`

(#act1h)

# act1h

b: Biz--

```
bb({eyes:"wat", mouth:"small"});
hong({body:"2_fuck"});
```

h: *^SİKTİR^.*

`hong({body:"2_you"});`

h: SEN.

(...500)

b: n

(...1500)

`bb({eyes:"wat_2"});`

b: ne?

`hong({body:"phone1", eyes:"anger", mouth:"anger"});`

h: Parti için GİTMELİYİZ diyeceğim,

{{if _.act1g=="go"}}
h: NOT because you want me to, but because *I* want to.
h: sen dedin diye DEĞİL, *ben* öyle istiyorum diye.
{{/if}}

{{if _.act1g=="dont"}}
h: Sırf sen istemiyorsun *DİYE*.
{{/if}}

```
hong({body:"putaway"});
sfx("rustle");
```

h: Sen beni kontrol *ETMİYORSUN*.

```
sfx("rustle2");
hong({body:"0_sammich", eyes:"0_annoyed", mouth:"0_neutral"});
```

h: Şimdi eğer izin verirsen bu ^lanet^ sandviçi huzur içinde yiyeceğim.

`hong({body:"2_sammich_eat"});`

(...601)

```
sfx("sandwich");
hong({body:"2_sammich_eaten", eyes:"0_lookaway", mouth:"0_chew1"})
```

(...601)

```
bb({body:"normal", eyes:"uncertain", mouth:"shut"});
Game.OVERRIDE_TEXT_SPEED = 0.5;
```

b: ...

```
bb({eyes:"normal_right"});
Game.OVERRIDE_TEXT_SPEED = 1;
```

b: ...

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 4;
```

b: ..................

(...500)

`bb({mouth:"normal"});`

[AHHHH ÖLECEĞİZ](#act1h_death) `Game.OVERRIDE_CHOICE_LINE = true;`

[AHHHH BİZDEN NEFRET EDİYORLAR](#act1h_loneliness) `Game.OVERRIDE_CHOICE_LINE = true;`

[AHHHH KORKUNÇ BİRİSİYİZ](#act1h_worthless) `Game.OVERRIDE_CHOICE_LINE = true;`

# act1h_death

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AHHHH ÖLECEĞİZ

```
hong({body:"3_defeated1"});
attack("100p", "harm");
```

(...2500)

(#act1i)

# act1h_loneliness

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AHHHH BİZDEN NEFRET EDİYORLAR AAAAAAHHHHHHH

```
hong({body:"3_defeated1"});
attack("100p", "alone");
```

(...2500)

(#act1i)

# act1h_worthless

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AHHHH KORKUNÇ BİRİSİYİZ AAAAAAHHHHHHH

```
hong({body:"3_defeated1"});
attack("100p", "bad");
```

(...2500)

(#act1i)

# act1i

```
bb({mouth:"smile_lock", eyes:"smile", body:"normal"});
music('battle', {volume:0.5});
```

n: tebrikler

(...500)

n: İNSANINI BAŞARI İLE FİZİKSEL + SOSYAL + ETİK İHTİYAÇLARDAN KORUDUN

n: BAK, NE KADAR DA MİNNETTAR!

(...500)

n: ENERJİSİ SIFIRA İNDİĞİNE GÖRE, ONUN EYLEMLERİNİ DOĞRUDAN KONTROL EDEBİLİRSİN

`bb({mouth:"smile", eyes:"normal"});`

n: BİTİŞ HAMLENİ SEÇ

`bb({mouth:"small_lock", eyes:"fear"});`

n: *BİTİR ONU*

[{SAVAŞ: Stres dolu telefonunu cezalandır!}](#act1i_phone) `Game.OVERRIDE_CHOICE_LINE=true`

[{KAÇ: Eğilip bükül ve ağla!}](#act1i_cry) `Game.OVERRIDE_CHOICE_LINE=true`

# act1i_phone

`bb({mouth:"normal", eyes:"narrow"})`

b: Telefonun panik atak geçirmene neden oluyordu!

`bb({eyes:"anger"})`

b: Zuckerberg and Şirketi akli sağlını kapitalist şirketler için bozuyor!

```
bb({body:"fear", eyes:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Telefonunu cezalandır! Parçala onu! Yok et onu!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "fight";
```

b: YOK ET YOK ET YOK ET YOK ET YOK ET YOK ET YOK ET YOK ET YOK ET YOK ET YOK ET YOK ET YOK ET YOK ET YOK ET YOK E--

(#act1j)

# act1i_cry

`bb({eyes:"fear", mouth:"normal"})`

b: Tüm dünya seni öfke ile dolduruyor!

```
bb({body:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Armodillolar gibi yap! Eğilip bükül ve ağla!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "flight";
```

b: EĞİL BÜKÜL VE AĞLA EĞİL BÜKÜL VE AĞLA EĞİL BÜKÜL VE AĞLA EĞİL BÜKÜL VE AĞLA EĞİL BÜKÜL VE AĞLA EĞİL BÜK-- 

(#act1j)

# act1j

`SceneSetup.act1_outro()`