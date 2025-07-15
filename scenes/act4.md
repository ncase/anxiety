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

h: *mengeluh*

```
hong({body:"hold", eyes:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: Jadi apa ^sebenarnya^ pengajaran cerita ni?

`hong({body:"one_up", eyes:"annoyed"})`

h: Kita *belajar* apa je? Aku buat perkara bodoh. Bukan setakat dipergunakan oleh “kawan-kawan”, kita juga nyaris *mati*

`hong({body:"normal", eyes:"normal"})`

{{if _.INJURED}}
[Ya, dengan bil hospital lagi, hm.](#act4a_bill)
{{/if}}

{{if !_.INJURED}}
[Ya, dengan kerosakan hati lagi, hm.](#act4a_liver)
{{/if}}

[Ya, tu adalah kemungkinan paling teruk.](#act4a_worst)

[Ya, aku betul.](#act4a_right)

# act4a_bill

`hong({eyes:"annoyed_l", mouth:"narrow"});`

h: Oh ya, aku rasa pelan insurans tak termasuk *perbuatan bodoh* aku.

`hong({eyes:"annoyed", mouth:"normal"});`

b: Tapi…kita terselamat!

`hong({eyes:"normal"});`

h: ?

(#act4b)

# act4a_liver

`bb({eyes:"normal_d"});`

b: Kalau kita seekor kucing, mungkin kita dah tinggal 5 nyawa.

`bb({eyes:"surprise"});`

b: Sekurang-kurangnya, kita masih ada nyawa! Kita terselamat!

```
hong({eyes:"surprise"});
bb({eyes:"normal"});
```

h: ?

(#act4b)

# act4a_worst

`bb({eyes:"normal_d"});`

b: Tapi…

h: Ha?

`bb({eyes:"surprise"});`

b: Kita terselamat!

(#act4b)

# act4a_right

`bb({eyes:"normal_d"});`

b: Tapi…kau pun betul.

`hong({eyes:"surprise"});`

h: Ha?

`bb({eyes:"normal"});`

b: Aku serigala yang hanya tahu menipu. Apabila mara bahaya *sebenar* muncul, kau – sewajarnya – tak percaya aku.

`bb({eyes:"surprise_r"});`

b: Apa-apa pun, kita tetap terselamat!

(#act4b)

# act4b

```
bb({eyes:"normal", mouth:"normal"});
hong({eyes:"normal", mouth:"normal"});
```

b: Setelah setiap perkara yang kita tempuhi, tengoklah kita masih hidup.

`hong({eyes:"suspect"});`

{{if _.INJURED}}
h: Kau nampak tenang walaupun kita nyaris-nyaris mati.
{{/if}}

{{if !_.INJURED}}
h: Kau nampak tenang walaupun kita nyaris mati katak.
{{/if}}

```
hong({eyes:"normal"});
bb({eyes:"annoyed_d", mouth:"narrow"});
```

b: Kejadian tu membuatkan semua benda lain kurang menakutkan. Ia juga membuatkan aku terfikir.

`bb({eyes:"normal", mouth:"normal"});`

b: Tak guna aku gaduh dengan kau kalau perkara ni menyebabkan aku tak mampu lindungi kau

h: Dan tak guna *juga* aku gaduh dengan kau sebab kau hanya akan jerit lebih kuat

`bb({eyes:"normal_r"})`

b: Jadi, mungkin…

`bb({eyes:"normal"})`

h: Mungkin kita tak perlu bergaduh.

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

b: Aku bukan Sang Serigala Jahat. Tapi aku juga bukan serigala pengawal.

`bb({eyes:"sad_d"})`

b: Aku hanyalah anjing jalanan yang teraniaya.

`bb({eyes:"sad"})`

b: Kita dah lalui pelbagai rintangan bersama. Seperti trauma atau pengabaian…mungkin sebab itulah aku bersikap keterlaluan dan berleter:

```
sfx("yaps", {volume:0.6});
bb({body:"yap_1"});
Game.FORCE_CANT_SKIP = true;
Game.WORDS_HEIGHT_BOTTOM = 215;
Game.FORCE_TEXT_DURATION = 90;
Game.FORCE_NO_VOICE = true;
```

b: POT PET POT PET POT PET

(...1884)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_CANT_SKIP = false;
bb({body:"normal", mouth:"scream", eyes:"scream_sad"});
```

b: Tapi aku tak *nak* jadi seekor anjing penakut! Aku nak lindungi kau! Aku nak jadi anjing yang baik!

`bb({eyes:"sad", mouth:"normal"});`

b: Manusia…mampukah kau menjinakkan Sang Serigala ini?

`hong({eyes:"sad"})`

h: Aku…boleh cuba.

`hong({eyes:"normal_l", body:"chin", mouth:"narrow"})`

h: Baiklah. Hubungan yang sihat dengan emosi tu penting. Setiap hubungan memerlukan komunikasi. Jadi, mari kita berkomunikasi.

`hong({eyes:"normal", body:"hands_1", mouth:"normal"})`

h: Lima minit selepas ni mungkin akan berasa sangat janggal tapi kita cuba perlahan-lahan.

```
hong({body:"hands_2", mouth:"normal"});
```

h: Wahai Sang Serigala…apa perasaan *kau* sekarang?

n2: JUMLAH KETAKUTAN DIGUNAKAN:

n2: *DISAKITI* {{_.attack_harm_total}}, *TIDAK DISAYANGI* {{_.attack_alone_total}}, *SIFAT JAHAT* {{_.attack_bad_total}}

n2: KETAKUTAN MANA YANG ANDA MAHU BINCANGKAN DAHULU? (SELEBIHNYA BOLEH DIPILIH KEMUDIAN)

```
_.a4_fears_discussed = 0;
_.num_thanks = 0;
hong({body:"normal"});
bb({eyes:"normal"});
```

[Aku takut kita akan disakiti.](#act4_harm)

[Aku takut kita akan keseorangan.](#act4_alone)

[Aku takut kita sebenarnya orang jahat.](#act4_bad)

# act4_harm

```
_.a4_talked_about_harm = true;
_.a4_fears_discussed += 1;
```

`bb({eyes:"normal_d"})`

b: Aku mahu lindungi kau supaya kau selamat,

`bb({eyes:"sad_d"})`

b: Tapi, *satu dunia* seperti penuh dengan mara bahaya. Penuh dengan musibah dan kejahatan.

`bb({eyes:"sad"})`

{{if _.a4_fears_discussed==1}}
b: Entahlah. Asyik *aku* je yang bercakap. *Kau* pula macam mana, manusia?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Apa pendapat kau?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: Apa dalam fikiran kau, manusia?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Betul tu. Jadi, mari kita lindungi diri.](#act4_harm_skills)

[Mari kita hadapi ancaman yang *lebih bahaya*.](#act4_harm_exposure)

[Terima kasih.](#act4_thanks) `_.thanks_for = "physical safety";`

# act4_harm_skills

`bb({eyes:"look_down", body:"paw"})`

b: Tapi…macam mana? Ya, aku bertaring dan mempunyai cakar setajam pisau. Namun, kewujudanku hanyalah sekadar metafora.

```
bb({ body:"normal", eyes:"normal" });
hong({ body:"one_up", eyes:"surprise" });
```

h: Mungkin kita boleh belajar seni mempertahankan diri atau sertai komuniti yang saling melindungi? Kalau tak, mungkin kita boleh tingkatkan kesihatan diri dan menjaga batas peribadi?

```
bb({ eyes:"annoyed_r" });
hong({ body:"normal", eyes:"normal" });
```

b: Mungkinlah, tapi…

[Macam mana kita nak mula?](#act4_harm_skills_start)

[Kalau tiada sebarang perubahan?](#act4_harm_skills_work)

[Kalau kita bertindak keterlaluan lagi?](#act4_harm_skills_overboard)

# act4_harm_skills_start

`bb({ eyes:"sad_d" })`

b: Terlalu banyak perkara yang kita perlu lakukan untuk perbaiki diri. Kita nak *mula* dari mana?

`hong({ body:"shrug", eyes:"surprise" })`

h: Kita dah mulalah ni.

`bb({ eyes:"normal", mouth:"narrow" })`

b: Eh?

```
bb({ body:"normal", mouth:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal"});
```

h: Kita sedang melatih diri untuk berkomunikasi dengan lebih baik. Nanti, kita boleh mengesan mara bahaya dengan lebih baik.

`hong({ eyes:"surprise" });`

h: Dan *itu* akan lindungi diri kita dari ancaman bahaya!

`hong({ eyes:"normal", mouth:"normal" });`

h: Oleh itu, ni memang *betul* latihan mempertahankan diri.

`bb({ eyes:"normal_r" })`

b: Oh, sebenarnya aku mengharapkan lebih dari ni:

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

h: Betul juga. Memang tiada cara untuk melindungi diri kita 100%…

`hong({ body:"one_up" });`

h: Tapi, peningkatan 1%  juga bermakna, kan?

```
bb({ eyes:"annoyed" });
hong({ normal:"one_up" });
```

b: Macam air dalam gelas. Kau tak nampak gelas tu 99% kosong tapi nampak 1% air yang ada?

`bb({ eyes:"normal" });`

h: Ya. Walaupun sedikit, 1% air tu masih bermakna jika kita sudah lama kehausan.

`bb({ eyes:"closed" });`

b: Baiklah, minumlah kesemuanya.

(#act4_something_else)

# act4_harm_skills_overboard

`bb({ body:"chest", eyes:"annoyed" })`

b: Kau abaikan semua amaran sebab *aku* yang terlebih berhati-hati memikirkan keselamatan kau.

`bb({ body:"normal", eyes:"normal" })`

h: Tapi betul juga, kita perlu jaga diri dengan sederhana. Semuanya dengan sederhana.

`bb({ eyes:"suspect" })`

b: Kejap, *KESEMUANYA*?

`hong({ eyes:"annoyed" })`

h: *Beberapa* hal sahaja yang akan dilakukan secara sederhana.

```
bb({ eyes:"closed" });
hong({ eyes:"normal" });
```

b: Baik, terima kasih atas penyataan berulang anda.

(#act4_something_else)


# act4_harm_exposure

`bb({ mouth:"scream_talk", eyes:"scream", MOUTH_LOCK:true });`

b: *APA?*

```
bb({ mouth:"narrow", eyes:"suspect" });
hong({ body:"one_up" });
```

h: Okey. Contohnya, ada anjing yang takut akan bunyi guruh.

`hong({ body:"hands_1" });`

h: Satu teknik pelatih guna adalah memainkan rakaman bunyi guruh secara perlahan. Kemudian, snek akan diberikan jika anjing tu kekal tenang.

`hong({ body:"hands_2" });`

h: Pelatih akan menguatkan bunyi sedikit demi sedikit selama beberapa hari sehingga anjing tu dapat mengatasi ketakutannya.

```
hong({ body:"normal", eyes:"surprise" });
bb({ mouth:"normal", eyes:"normal" });
```

h: Teknik ni dinamakan terapi pendedahan!

`hong({ body:"point", eyes:"normal" });`

h: Memandangkan kau seekor anjing, sepatutnya teknik ni bergunalah kan? Semua mamalia ada respons lari atau lawan yang sama.

`hong({ body:"normal" });`

[Macam mana kalau kita sudah *terbiasa*?](#act4_harm_exposure_overboard)

[Macam mana kalau ancaman *sebenar* terjadi?](#act4_harm_exposure_hurt)

[Aku sebenarnya serigala, bukan seekor anjing.](#act4_harm_exposure_dog) `bb({ eyes:"suspect" })`

# act4_harm_exposure_dog

h: Aku akan berbuat baik dan bersabar hingga kau menjadi jinak seperti anak anjing yang comel.

`bb({ MOUTH_LOCK:true })`

b: ...

`bb({ eyes:"sad", mouth:"smile" })`

b: Alahai.

(#act4_something_else)

# act4_harm_exposure_overboard

`bb({ eyes:"annoyed" })`

b: Kita *baru* je lihat kesan kalau kau tak mengendahkan perasaan takut, kau akan berada dalam situasi yang *betul-betul* bahaya.

`bb({ eyes:"angry_r", body:"one_up" })`

b: Lagipun, kalau *terlalu* terbiasa, bukan ke kita akan menjadi gila?

`bb({ mouth:"scream", eyes:"scream", body:"two_up" })`

b: Jangan sampai kita menikmati snek sambil menonton video pembunuhan kejam!

`hong({ eyes:"annoyed" })`

h: Macam berbezalah situasi ni dengan situasi guruh tadi.

`bb({ body:"normal", mouth:"normal", eyes:"suspect" })`

b: Jadi *mana* batas tu sebenarnya, manusia? *Mana?!*

`hong({ eyes:"surprise", body:"one_up" })`

h: Tak tahu. Tapi *kau* boleh tolong aku!

`hong({ eyes:"normal", body:"normal" })`

h: Saling bekerjasama dan bertolak ansur, kita akan tentukan batas tu.

`bb({ body:"paw", mouth:"narrow", eyes:"closed" })`

b: Baiklah, tapi aku ada tapak tangan je, kau ada jari. Jadi kau perlu bantu aku.

(#act4_something_else)

# act4_harm_exposure_hurt

`bb({ body:"two_up", eyes:"angry_r" })`

{{if _.INJURED}}
b: Contoh: Kita lompat dari atas *bumbung!*
{{/if}}

{{if !_.INJURED}}
b: Contoh: Kita hampir lompat dari atas *bumbung!*
{{/if}}

```
hong({ eyes:"annoyed" });
bb({ body:"normal", eyes:"annoyed" });
```

h: Betul juga. Kita *mungkin* bertindak keterlaluan.

`hong({ eyes:"normal" });`

h: Sebab itulah, dengan terapi pendedahan, kita boleh mula langkah demi langkah secara perlahan-lahan.

h: Sebelum kita terlibat dengan bahaya yang *sebenar*, kita berhenti.

`bb({ eyes:"annoyed_r", mouth:"narrow" });`

b: Ya, aku lebih rela dengar bunyi guruh daripada berdiri dalam ribut sambil memakai topi besi.

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

b: Jap, kau tak nak berbalah tentang perasaan aku? Hanya… "terima kasih"?

`hong({ eyes:"surprise", body:"shrug" })`

h: Ya! Terima kasih sebab risaukan aku {{_.thanks_for}}.

```
bb({ eyes:"closed_annoyed", MOUTH_LOCK:true });
hong({ eyes:"normal", body:"normal" });
```

b: ...

h: Kau okey?

`bb({ eyes:"super_sad", mouth:"narrow" });`

b: Kau tak pernah ucap *terima kasih* kepada aku sebelum ni.

`hong({ mouth:"smile" });`

h: Alahai, Sang Serigala gebu yang cepat panik.

(#act4_something_else)

# act4_thanks_2

h: Walaupun kau selalu berlebihan, aku hargai kau yang selalu menjaga aku {{_.thanks_for}}.

`bb({ eyes:"annoyed" })`

b: Kejap, kau bukan sengaja ulang ucapan "terima kasih" untuk mengelak daripada cakap tentang ketakutan kau, kan?

```
bb({ eyes:"normal" });
hong({ eyes:"annoyed", body:"chin" });
```

h: Topik ni rumit dan bukannya aku sentiasa ada jawapan kepada setiap soalan.

`hong({ eyes:"annoyed_l", body:"one_up" })`

h: Bukannya kehidupan menyenaraikan tiga jawapan sedia ada untuk setiap situasi.

`hong({ eyes:"normal", mouth:"smile", body:"normal" })`

h: Tapi buat masa ni, sekurang-kurangnya aku boleh ucapkan terima kasih.

b: Baik, terima kasih kepada kau juga. Sebab sudi mendengar leteran aku dengan penuh kesabaran.

`bb({ eyes:"closed" });`

b: Saudara mamaliaku yang tak berbulu.

(#act4_something_else)

# act4_thanks_3

h: Walaupun leteran kau kata selalu takutkan aku, aku faham, kau hanya nak lindungi aku {{_.thanks_for}}.

`bb({ eyes:"smile_r" });`

b: Sudah, kalau kau asyik puji aku, orang akan fikir bukan-bukan tentang kita.

```
bb({ eyes:"smile" });
hong({ eyes:"annoyed" });
```

h: Alahai, aku kan hanya pelajar kolej dan kau Sang Serigala yang menakutkan. Apa je yang mereka bole--

`hong({ eyes:"normal", body:"point" });`

h: Sudah. Tak perlu jawab.

(#act4_something_else)




# act4_alone

```
_.a4_talked_about_alone = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"sad_d" });`

b: Aku hanya mahu memastikan kau tak dipinggirkan…

`bb({ eyes:"sad_u" });`

b: Tapi aku risau kalau orang tahu diri kita yang *sebenar*, mereka akan lari ketakutan.

`bb({ eyes:"sad" });`

{{if _.a4_fears_discussed==1}}
b: Entahlah. Asyik *aku* je yang bercakap. *Kau* pula macam mana, manusia?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Apa pendapat kau?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: Apa dalam fikiran kau, manusia?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Aku setuju, mari memperbaiki kehidupan sosial kita.](#act4_alone_skills)

[Aku rasa mereka tak benci kita. Jom kita siasat.](#act4_alone_experiment)

[Terima Kasih.](#act4_thanks) `_.thanks_for = "social belonging";`

# act4_alone_skills

```
bb({ eyes:"normal" });
hong({ body:"chin" });
```

h: Kita boleh asah kemahiran bertanya soalan, mendengar serta memahami, bersikap terbuka dan sebagainya?

`hong({ eyes:"normal_l" });`

h: Atau perbaiki kehidupan sosial kita dengan meluangkan masa bersama rakan atau menghadiri sebarang perjumpaan?

`hong({ body:"one_up" });`

h: Kita juga boleh belajar untuk menerima penolakan.

`hong({ eyes:"normal" });`

h: Atau tak bersangka buruk kerana kemungkinan mereka cuma penat atau muka mereka garang.

```
hong({ body:"normal" });
bb({ eyes:"annoyed_r" });
```

b: Banyak betul pilihan. Tapi, mengenai "belajar tentang kemahiran sosial"...

[Tu satu bentuk *manipulasi* kan?](#act4_alone_skills_manipulative)

[Tu akan membuatkan kita *lebih mudah dimanipulasi* kan?](#act4_alone_skills_manipulated)

[Macam mana kalau kita masih gagal?](#act4_alone_skills_fail)

# act4_alone_skills_manipulative

`bb({ eyes:"suspect" });`

b: Adakah pembunuh bersiri boleh dianggap "berempati" kerana boleh memahami emosi mangsa mereka?

`bb({ eyes:"annoyed" });`

b: Seperti Charles Manson. Dia ada ramai kawan dan mudah mempengaruhi orang lain.

`hong({ eyes:"annoyed", body:"chin" });`

h: Betul juga.

h: "Kemahiran bersosial" jadi tak bermakna kalau kita tak mengambil berat *tentang* orang lain.

`hong({ body:"normal" });`

h: Senang cerita, jadilah orang baik.

`bb({ eyes:"annoyed", mouth:"smile" });`

b: Tu kata-kata motivasi yang sesuai diletakkan dalam poster.

`hong({ body:"shrug", mouth:"narrow" });`

h: "Jadilah Orang Baik™"

(#act4_something_else)

# act4_alone_skills_manipulated

`bb({ eyes:"angry" })`

b: Kita akan menjadi alas kaki yang tertulis "Selamat Datang" dan "Terima Kasih" sambil orang memijak kita.

`bb({ mouth:"scream", eyes:"scream" })`

b: Kita akan jadi kaki bodek.

```
bb({ mouth:"normal", eyes:"normal" });
hong({ body:"chin" });
```

h: Hm, betul juga. "Kemahiran bersosial" bukan sahaja untuk memuaskan hati orang lain. Kita juga perlu tetapkan *batasan.*

`hong( body:"one_up" });`

h: Seumpama mengajak orang datang ke rumah yang tiada dinding.

```
hong({ eyes:"angry", mouth:"narrow" });
bb({ eyes:"annoyed", mouth:"smile" });
```

h: Kita perlu pandai ambil hati mereka.

(#act4_something_else)

# act4_alone_skills_fail

`bb({ eyes:"annoyed" });`

h: Kita mungkin gagal. Sebenarnya, kita *akan* gagal.

```
bb({ eyes:"normal" });
hong({ eyes:"surprise", body:"shrug" });
```

h: Tak mengapa! Kita boleh belajar daripada kegagalan!

`hong({ body:"normal", eyes:"normal" });`

h: Jadi, jom kita belajar daripada kesilapan bersama!

`bb({ eyes:"normal_r" });`

b: Lagipun kalau sesuatu yang buruk berlaku, kita boleh pindah dan buat identiti baharu.

`bb({ eyes:"normal" });`

h: Ya, macamlah senang sangat nak buat semua tu.

(#act4_something_else)

# act4_alone_experiment

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: Apa-apa pun, kita boleh cuba!

`hong({ body:"chin" });`

h: Kita boleh ajak kawan untuk lepak, hubungi rakan lama atau berbual dengan barista.

`hong({ body:"normal" });`

h:  Mungkin diri kita tak seteruk yang kita sangkakan.

`bb({ eyes:"annoyed" });`

[Bayangkan kalau semua ni hanya “kemenangan” yang tak bermakna?](#act4_alone_experiment_cheap)

[Bayangkan kalau ni membebankan orang lain?](#act4_alone_experiment_burden)

[Tapi perbualan kosong bukanlah *cara* kita!+](#act4_alone_experiment_real_us)

# act4_alone_experiment_real_us

`bb({ eyes:"sad" });`

b: Kalau kita berikan senyuman palsu, tiada sesiapa yang akan benar-benar mengenali kita,

`bb({ eyes:"super_sad" });`

b: *Tetapi* kalau kita terlalu jujur, mereka akan nampak diri kita yang sebenar!

`hong({body:"chin", mouth:"narrow", MOUTH_LOCK:true})`

h: ...

```
hong({body:"normal", mouth:"normal"});
bb({eyes:"normal"});
```

h: Gulingkan badan.

b: Apa.

`hong({body:"hands_1"})`

h: Kalau anjing mendedahkan perutnya, tu menunjukkan anjing sayang dan percaya kepada kita.

`hong({body:"one_up"})`

h: Kita mungkin *belum* bersedia untuk tunjukkan kelemahan diri, tapi dengan latihan yang mencukupi,

`hong({body:"normal", eyes:"surprise"})`

h: suatu hari nanti kita boleh tunjukkan diri kita yang sebenar, berjiwa kacau. Itulah lumrah manusia.

```
hong({eyes:"normal"});
bb({ eyes:"super_sad", mouth:"smile", body:"chest" });
```

b: Aku akan berguling kalau kau beri aku snek.

`bb({ eyes:"normal", mouth:"normal" });`

h: Tak nak.

(#act4_something_else)


# act4_alone_experiment_cheap

b: Bukannya kita akan menang piala emas dalam Olimpik Orang Peramah kalau kita menyapa barista pun.

```
hong({ body:"point", eyes:"surprise" });
bb({ eyes:"normal" });
```

h: Tapi tu adalah kemenangan untuk *kita!*

`hong({ body:"one_up", eyes:"annoyed" });`

h: Dalam gelanggang sosial , kita lagi bawah daripada kelas featherweight. Kita sama berat dengan zarah tahu.

`hong({ body:"normal", eyes:"normal" });`

h: Apa salahnya kalau kita mulakan dengan kemenangan kecil? Sedikit-sedikit, lama-lama jadi bukit.

b: Betul! Lepas menyapa, mungkin kita boleh pergi ke tahap seterusnya macam…

`bb({ body:"two_up", mouth:"smile", eyes:"smile_u" });`

b: *“Awak sihat?”*

`hong({ body:"shrug", mouth:"smile", eyes:"surprise_l" });`

h: *“Biasa-biasa je!”*

(#act4_something_else)

# act4_alone_experiment_burden

`bb({ eyes:"suspect_r" })`

b: Barista tu nak buat kopi je. Bukannya nak jadi bahan *eksperimen* untuk kita uji kemahiran sosial kita.

`bb({ eyes:"annoyed" })`

h: Tapi, kalau kita ni *memang* membebankan…

```
hong({ eyes:"surprise" });
bb({ eyes:"normal" });
```

h: Sekurang-kurangnya kita tahu!

`hong({ eyes:"normal" });`

h: Dengan ini, kita boleh belajar untuk tak melampaui batas sehingga membuat mereka tak selesa.

```
hong({ eyes:"annoyed_l", mouth:"narrow" });
bb({ eyes:"annoyed", mouth:"smile" });
```

h: Ala, macam semua “kemahiran interpersonal” ^mengarut^ yang kita baca dalam brosur kaunselor.

(#act4_something_else)



# act4_bad

```
_.a4_talked_about_bad = true;
_.a4_fears_discussed += 1;
```

`bb({ eyes:"annoyed_r" })`

b: Aku nak pertahankan keperluan moral kau untuk menjadi orang baik,

`bb({ eyes:"sad_d" })`

b: tapi aku dapat rasakan jauh dalam lubuk hati, kita memang dah terlalu… hancur.

`bb({ body:"two_up", eyes:"angry" })`

{{if _.INJURED}}
b: Dan jangan cakap yang jiwa kita tak *kacau*. Kita baru je terjun *bangunan*
{{/if}}

{{if !_.INJURED}}
b: Dan jangan cakap yang jiwa kita tak *kacau*. Kita hampir terjun *bangunan*.
{{/if}}

`bb({ body:"normal", eyes:"sad" })`

{{if _.a4_fears_discussed==1}}
b: Entahlah. Asyik *aku* je yang bercakap. *Kau* pula macam mana, manusia?
{{/if}}

{{if _.a4_fears_discussed==2}}
b: Apa pendapat kau?
{{/if}}

{{if _.a4_fears_discussed==3}}
b: Apa dalam fikiran kau, manusia?
{{/if}}

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Kita dah hancur. Mari kita perbaiki diri.](#act4_bad_fix)

[Kita dah hancur. Terima jelah hakikatnya.](#act4_bad_accept)

[Terima kasih.](#act4_thanks) `_.thanks_for = "moral well-being";`

# act4_bad_fix

```
bb({eyes:"normal"});
hong({body:"chin"});
```

h: Kita boleh perlahan-lahan mengamalkan tabiat baru yang lebih baik yang selari dengan prinsip diri,

`hong({body:"one_up"});`

h: dan jika perlu, kita boleh dapatkan bantuan pakar terapi atau kaunselor.

`hong({body:"normal"});`

h: Ada banyak cara untuk kita perbaiki diri.

[Macam mana kalau kita tak boleh perbaiki diri sepenuhnya?](#act4_bad_fix_cant)

[Macam mana kalau kita *terlalu* sempurna?](#act4_bad_fix_too_much)

[Kita tiada duit nak dapatkan bantuan pakar.](#act4_bad_fix_afford)

# act4_bad_fix_cant

`hong({eyes:"annoyed"});`

h: Betul juga tu.

h: Kita tak boleh perbaiki semua perkara.

`bb({mouth:"scream", eyes:"scream_sad"});`

b: Haaa aku dah agak kita akan kekal hancur!

`hong({eyes:"surprise"});`

h: Tapi sekurang-kurangnya kita akan jadi *lebih baik* dari sebelum ni.

```
bb({mouth:"normal", eyes:"annoyed"});
hong({eyes:"sad", mouth:"smile"});
```

h: Dengan masa, parut boleh pudar, tapi bekasnya tak akan hilang. Dan tu bukanlah satu masalah.

`bb({eyes:"annoyed_r"});`

b: Okey, aku terima. Lagipun,

```
Game.FORCE_TEXT_Y = 460;
Game.clearText();
publish("act4-sexy", [true]);
```

b: Parut kan *seksi.*

```
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-sexy", [false]);
bb({body:"chest", mouth:"smile_talk", MOUTH_LOCK:true, eyes:"sexy"}, 0);
hong({eyes:"normal", mouth:"normal"}, 0);
```

h: Tolong jangan mengarut.

(#act4_something_else)

# act4_bad_fix_too_much

`bb({ eyes:"angry_d" })`

b: Bunyi macam pelik, tapi… sebahagian daripada aku *inginkan* penyakit ni.

`bb({ eyes:"angry" })`

b:  Maksud aku, tanpa penyakit ni mungkin hidup kita akan jadi *bosan*.

`bb({ eyes:"sad_r", body:"one_up" })`

b: Tanpa penyakit ni, hasil seni kita menjadi hambar dan membosankan.

`bb({ eyes:"sad_u", body:"two_up" })`

b: Tanpa penyakit ni, mungkin kita tak akan memahami kawan-kawan yang menghidapi penyakit yang sama.

`bb({ eyes:"sad", body:"chest" })`

b: Kalau kita rasa puas dengan hidup, bukankah kita akan berhenti bekerja keras untuk menjadi lebih baik?

`hong({ MOUTH_LOCK:true })`

h: ...

h: Kalau kita takut… “kehilangan perasaan takut”...

h: Aku rasa kita tak akan pernah kehilangan rasa takut

`bb({ eyes:"smile_u", body:"normal", mouth:"smile" })`

b: Oh! Ya, betul! Fuh, lega!

(#act4_something_else)

# act4_bad_fix_afford

`bb({ body:"one_up", eyes:"sexy", mouth:"normal" })`

b: “Doktor, saya resah sebab saya dicas $100 sejam hanya untuk dengar soalan *apa perasaan awak selepas menghadapi situasi tu?*”

`bb({ body:"paw", eyes:"closed", mouth:"narrow" })`

b:  “Hmm. Apa perasaan awak selepas menghadapi situasi tu?”

```
bb({ body:"normal", eyes:"normal", mouth:"normal" });
hong({ eyes:"sad" });
```

h: Tu memang patut dirisaukan.

`hong({ eyes:"annoyed", mouth:"sad" });`

h: Dan sangat menyedihkan yang ramai orang tak mampu untuk mendapatkan rawatan kesihatan mental.

`hong({ eyes:"normal", mouth:"normal" });`

h: Tapi, kita masih ada pilihan lain yang murah atau percuma:

`hong({ body:"chin" })`

h: Kumpulan sokongan, terapi dalam talian, pusat kesihatan pelajar atau badan bukan berasaskan keuntungan…

`hong({ body:"hands_1" })`

h: Mengamalkan tabiat seperti meditasi, tidur yang cukup, bergaul dengan orang, belajar benda baharu…

`hong({ body:"hands_2" })`

h: Meminjam buku berkaitan terapi psikologi.

`hong({ body:"one_up" })`

h: Ada senarai bantuan penyakit mental di akhir permainan ni!

```
hong({ body:"normal" });
bb({ eyes:"annoyed", mouth:"narrow" });
```

b: Cepat betul dinding keempat tu roboh.

`hong({ body:"point" });`

h: Ada perkara yang lebih penting daripada konvensyen penceritaan. Contohnya: kesihatan mental.

(#act4_something_else)


# act4_bad_accept

```
bb({ eyes:"normal" });
hong({ eyes:"normal_l", body:"one_up", mouth:"narrow" });
```

h: Lagipun, bukankah tu yang selalu pakar terapi katakan? Terima semua emosi kita termasuklah yang negatif?

```
bb({ eyes:"annoyed" });
hong({ eyes:"normal", body:"normal", mouth:"normal" });
```

b: Sekejap.

[“Terima” maksudnya *mengalah*?](#act4_bad_accept_give_up)

[“Terima” maksudnya *setuju*?](#act4_bad_accept_approve)

[“Terima” maksudnya *menerima seadanya*?](#act4_bad_accept_literally)

# act4_bad_accept_give_up

`bb({ eyes:"angry", body:"one_up" });`

b: Kau rasa Martin Luther King akan cakap,  “Alamak, kita tak boleh duduk di bahagian depan bas. Jadi, kita *terima* sahajalah?”

`bb({ eyes:"angry_r", body:"two_up" });`

b: Kenapa Industri Usaha Diri menganggap bahawa mengangkat bendera putih tu *idea yang bernas?*

`bb({ eyes:"annoyed", body:"normal" });`

h:  Aku rasa pakar terapi maksudkan “menerima” perkara buruk tu seperti mengakui benda tu wujud dan sukar untuk diubah,

h: tapi, tak bermakna kita kena berputus asa untuk berubah.

`bb({ eyes:"suspect" });`

b: Jadi, pakar terapi sepatutnya cakap *mengakui* bukannya *menerima*.

`hong({ body:"chin", eyes:"annoyed" });`

h: Ya. Penggunaan perkataan “terima” itu agak memeningkan.

`bb({ eyes:"closed", mouth:"narrow" });`

b: Aku *akui* pandangan kau tu.

(#act4_something_else)

# act4_bad_accept_approve

`bb({ eyes:"angry" });`

b: Mereka ingat *bagus* ke kalau kita ada jiwa yang kacau? Tak langsung!

`bb({ eyes:"angry_r", body:"one_up" });`

b: Semua penulis skrip Hollywood menggambarkan penyakit mental sebagai sesuatu yang romantik. Sangatlah mengarut!

`bb({ eyes:"angry", body:"two_up" });`

b: Menghidap penyakit mental ni sebenarnya *teruk* tahu! Penyakit ni mengancam *nyawa!* Jadi, kenapa kita kena “terima” benda tu?!

`bb({ body:"normal" });`

h: Aku rasa pakar terapi maksudkan “menerima” emosi seperti bersabar menghadapinya.

```
hong({ body:"one_up" });
bb({ eyes:"normal" });
```

h: Sama konsepnya kalau kau terjerumus dalam pasir jerlus. Kalau kau panik, kau akan tenggelam. Jadi, kau perlu kekal tenang dan baring secara mendatar untuk selamatkan diri,

`hong({ eyes:"surprise" });`

{{if _.INJURED}}
h: Bergaduh dengan kau menyebabkan aku terjun bangunan.
{{/if}}

{{if !_.INJURED}}
h: Bergaduh dengan kau menyebabkan aku hampir terjun bangunan.
{{/if}}

`hong({ body:"normal", eyes:"normal" });`

h: Jadi, penyelesaiannya adalah dengan tak bergaduh dan menyelesaikan masalah bersama-sama.

`bb({ eyes:"annoyed" });`

b: Jadi mereka sepatutnya cakap *macam tu* dan bukannya menggunakan perkataan yang rumit seperti “terima”.

`hong({ body:"chin", eyes:"annoyed" });`

h: Ya. Penggunaan perkataan “terima” tu macam tak sesuai.

`bb({ eyes:"closed_annoyed", mouth:"narrow" });`

b: Aku tak boleh terima perkataan “terima”.

(#act4_something_else)

# act4_bad_accept_literally

`bb({ eyes:"sad", body:"one_up" });`

b: Tapi kita berdua *tahu* yang kau tak patut ambil bulat-bulat kata-kata aku!

`bb({ eyes:"sad_u", body:"two_up" });`

b: *Masalah* sebenarnya ialah aku nak bantu kau, tapi aku tak tahu nak cakap macam mana!

`bb({ eyes:"sad", body:"normal" });`

h: : Aku rasa pakar terapi maksudkan “menerima” emosi seperti jangan lawan atau abaikan emosi tu.

`hong({ eyes:"surprise", body:"one_up" });`

h: Aku boleh dengar cakap kau dan bekerjasama *dengan* kau, tapi aku tak boleh percaya kata-kata kau sepenuhnya.

```
hong({ eyes:"normal", body:"normal" });
bb({ eyes:"annoyed", mouth:"normal" });`
```

b: Jadi, pakar terapi sepatutnya cakap *macam tu* bukannya gunakan perkataan memeningkan seperti “terima”.

`hong({ body:"chin", eyes:"annoyed" });`

h: Nampaknya, mereka pun tak pandai nak guna perkataan yang betul.

(#act4_something_else)




# act4_something_else

```
bb({ body:"normal", mouth:"normal", eyes:"normal" });
hong({ body:"normal", mouth:"normal", eyes:"normal" });
```

{{if _.a4_fears_discussed==1}}
h: Jadi, ada apa-apa lagi kau nak cerita?
{{/if}}

{{if _.a4_fears_discussed==2}}
h: Ada apa-apa lagi yang terbuku dalam hati kau?
{{/if}}

{{if _.a4_fears_discussed==3}}
(#act4_something_else_2)
{{/if}}

{{if _.a4_talked_about_harm!=true}}
[Aku takut kita akan disakiti.](#act4_harm)
{{/if}}

{{if _.a4_talked_about_alone!=true}}
[Aku takut kita akan keseorangan.](#act4_alone)
{{/if}}

{{if _.a4_talked_about_bad!=true}}
[Aku takut kita sebenarnya orang jahat.](#act4_bad)
{{/if}}

[Tiada, tu sahaja buat masa sekarang.](#act4c_prelude)

# act4_something_else_2

h: Aku rasa kita dah luahkan semua kerisauan kita sekarang.

b: Ya, kita takut akan tiga perkara je.

h: Betul tu, tiga je.

b: Nasib baik.

(#act4c)

# act4c_prelude

h: Kerja yang baik, geng.

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

b: Benda ni bukannya *permainan video* tahu?

`bb({eyes:"angry_d", body:"one_up"})`

b: Nak bina hubungan yang sihat dengan emosi kau sendiri tak semudah tekan butang di skrin.

`bb({eyes:"sad", body:"normal"})`

b: *Boleh ke* kita betul-betul berbaik?

b: *Boleh ke* kita bekerjasama?

`hong({eyes:"sad", body:"one_up"})`

h: Macam ni,

```
hong({eyes:"surprise_l"});
bb({eyes:"normal"});
```

a: M-maafkan saya…

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

a: Boleh tak saya nak makan sebelah awak?

`publish("act4", ["alshire", 1]);`

{{if _.TOP_FEAR=="harm"}}
s: *Ini* ke orang yang kau suka? Kenapa dia duduk seorang diri macam pembunuh bersiri?
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: Kau nak duduk sebelah orang yang kau suka ke? Macam *mengada* je!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: *Ini* ke orang yang kau suka? Kita dah ganggu ketenteraman dia! Kita ni menyibuk betul!
{{/if}}

`publish("act4", ["alshire", 2]);`

a: Oh t-tak apalah s-saya boleh je…

`publish("act4", ["alshire", 3]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "h2"`

[Eh, awak yang kat parti tu kan?](#act4d_recognition) `publish("act4", ["hong_to_alshire",1])`

[Boleh je. Duduklah.](#act4d_yes) `publish("act4", ["hong_to_alshire",2])`

[Maaf, saya nak berseorangan.](#act4d_no) `publish("act4", ["hong_to_alshire",8])`

# act4d_recognition

`publish("act4", ["hong_to_alshire",2]);`

h2: Ya, betullah! Awak yang duduk atas sofa di parti yang saya pertama kali pergi tu…

`publish("act4", ["hong_to_alshire",10]);`

{{if _.a2_ending=="fight"}}
h2: Waktu tu saya melalui serangan panik dan tumbuk muka tuan rumah.
{{/if}}

{{if _.a2_ending=="flight"}}
h2: Waktu tu saya melalui serangan panik dan lari keluar sambil menangis.
{{/if}}

```
publish("act4", ["hong_to_alshire", 0]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Eh, jap manusia! Aku rasa kita dah buat dia tak selesa.

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: Oh, saya buat awak tak selesa ke?

`publish("act4", ["hong_to_alshire",4]);`

h2: Saya cuma teruja nampak muka yang saya kenal.

```
publish("act4", ["hong_to_alshire",5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: AHHHHH AKU DAH AGAK! DIA NI ORANG GILA BERBAHAYA YANG SENANG PANIK!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: AAHHH TANGGAPAN PERTAMA DIA MESTI “DIA SAKSI TRAUMA AKU”! TU BERMAKSUD DIA BENCI KITA!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: AAAHHH KITA BUAT ORANG TERINGAT KEJADIAN TRAUMATIKNYA. KEHADIRAN KITA DAH MENYAKITI ORANG LAIN.
{{/if}}

(#act4e)

# act4d_yes

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Eh, jap manusia! Dia macam tak selesa je.

```
publish("act4", ["hong_to_alshire", 6]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: Eh, saya tak paksa!

`publish("act4", ["hong_to_alshire", 4]);`

h2: Awak boleh duduk sini kalau awak nak.

```
publish("act4", ["hong_to_alshire", 5]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: DIA *TERLALU* RAMAH! MACAM TED BUNDY, SI PEMBUNUH BERSIRI!
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: DIA CUMA BERLAKON! TIADA SIAPA YANG *BETUL-BETUL* NAK RAPAT DENGAN KITA!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: AHHH KITA SELALU BUAT ORANG RASA KEKOK! KITA IBARAT SAMPAH ATAS MUKA BUMI NI!
{{/if}}

(#act4e)

# act4d_no

```
publish("act4", ["hong_to_alshire", 9]);
publish("act4", ["bb_to_alshire", _.INJURED ? 3 : 1]);
```

b: Eh, jap manusia! Aku rasa kita dah buat dia tak selesa.

```
publish("act4", ["hong_to_alshire", 3]);
publish("act4", ["bb_to_alshire", _.INJURED ? 2 : 0]);
```

h2: Eh, saya tak berniat untuk biadab!

`publish("act4", ["hong_to_alshire", 6]);`

h2: Saya cuma perlukan masa untuk proses emosi saya.

```
publish("act4", ["hong_to_alshire", 7]);
publish("act4", ["alshire", 4]);
```

{{if _.TOP_FEAR=="harm"}}
s: PERKARA GILA APA YANG SEDANG DIA FIKIRKAN?! KEINGINAN PELIK APA YANG TERBUKU DALAM HATI SI GILA NI?
{{/if}}

{{if _.TOP_FEAR=="alone"}}
s: KITA TELAH DITOLAK! KITA TAK AKAN PERNAH DISUKAI!
{{/if}}

{{if _.TOP_FEAR=="bad"}}
s: KITA GANGGU PROSES EMOSI DIA! DIA AKAN TRAUMA SAMPAI BILA-BILA DAN TU SALAH KITA!
{{/if}}

(#act4e)

# act4e

```
Game.WORDS_HEIGHT_BOTTOM = 195;
publish("act4", ["alshire", 6]);
```

s: LARI LARI LARI LARI LARI LARI LARI LARI LARI LARI LARI 

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

h: Hm, pelik. Agak-agak apa yang dia tengah fikirkan sekarang?

`publish("act4", ["hong_closer", 2]);`

h: Eh, apa yang kau cakap tadi?

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 6]);
```

b: Err, aku lupalah. Mungkin kumpulan dan kerja?

```
publish("act4", ["bb_closer", 0]);
publish("act4", ["hong_closer", 3]);
```

h: ¯\_(ツ)_/¯

```
publish("act4", ["hong_closer", 1]);
publish("act4", ["bb_closer", 4]);
```

b: Orang kata kita kena “berdamai” dengan emosi kita seolah–olah emosi kita tu *musuh perang*.

`publish("act4", ["bb_closer", 7]);`

b: Tapi aku nak *lebih* daripada perdamaian! Aku nak kita jadi *rakan seperjuangan!*

`publish("act4", ["bb_closer", 3]);`

b: Aku nak jadi anjing pengawal yang baik. Sepertimana rasa lapar dan dahaga menjadi amaran untuk keperluan fizikal kau,

`publish("act4", ["bb_closer", 8]);`

b: Aku pun nak jadi amaran untuk keperluan *psikologi* kau. Contohnya, keperluan untuk rasa selamat, rasa diterima dan segala perkara baik dalam hidup kau.

`publish("act4", ["bb_closer", 1]);`

b: Tapi… aku tak pandai. Jadi, aku perlukan pertolongan kau untuk ajar aku.

`publish("act4", ["bb_closer", 4]);`

b: Aku tak “selalu betul,” aku pun “selalu buat salah.” Aku cuba… buat yang terbaik. Jadi, tolonglah,

`publish("act4", ["bb_closer", 30]);`

b: Bantu aku untuk tolong kau!

`publish("act4", ["bb_closer", 6]);`

b: Mungkin *akan* makan masa *bertahun-tahun* untuk mengajar anjing yang dah tua ni perkara baharu.

`publish("act4", ["bb_closer", 3]);`

b: Kadangkala aku mungkin akan ulangi tabiat lama.

`publish("act4", ["bb_closer", 2]);`

b: Contohnya, aku akan memperbesarkan hal-hal kecil, takutkan kau dengan kata-kata dan membuatkan kau terbayang sesuatu yang… ngeri.

`publish("act4", ["bb_closer", 9]);`

b: Maafkan aku! Aku cuma anjing jalanan yang teraniaya! Kadangkala anjing jalanan akan menggigit kau!

`publish("act4", ["bb_closer", 4]);`

b: Tapi kalau kau bersabar… dan setia dengan aku…

`publish("act4", ["bb_closer", 8]);`

b: Mungkin kau boleh jinakkan aku.

`publish("act4", ["bb_closer", 0]);`

`Game.clearText();`

(...1000)

`Game.OVERRIDE_CHOICE_SPEAKER = "h"`

[Serigala yang baik.](#act4f-pat-bb) `Game.OVERRIDE_CHOICE_SPEAKER = "h"; publish("act4", ["hong_closer", 2]);`

`Game.OVERRIDE_CHOICE_SPEAKER = "b"`

[Manusia yang baik.](#act4f-pat-hong) `Game.OVERRIDE_CHOICE_SPEAKER = "b"; publish("act4", ["bb_closer", 8]);`

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
b: AAAAA KAU MASIH HISAP 15 BATANG ROKOK SEKALIGUS AAAAA
{{/if}}

{{if _.parasite}}
b: AAAAA KAU MASIH TAK PRODUKTIF WALAUPUN TENGAH MAKAN. KITA NI BEBAN MASYARAKAT AAAAA
{{/if}}

{{if _.whitebread}}
b: AAAAA KAU MAKAN TERLALU BANYAK ROTI PUTIH AAAAA
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

b: POT PET POT PET POT PET

(#credits)
