# act3

```
SceneSetup.act3();
Game.WORDS_HEIGHT_BOTTOM = 205;
sfx("cheers");
```

r: Jemput

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

h2: *Ah*, sedapnya.

```
publish("act3",["roofhunter",2]);
publish("act3",["roofhong",2]);
```

r: Kau tahu tak...

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",6]);
```

h2: Sedap sampai ke amygdala kiri dan kanan aku.

```
publish("act3",["roofhunter",8]);
publish("act3",["roofhong",5]);
```

r: Kau mengingatkan aku pada diri aku yang dahulu. Masa aku diseksa oleh binatang dalam kepala aku.

```
publish("act3",["roofhunter",9]);
publish("act3",["roofhong",2]);
```

r: Aku gembira boleh bantu kau bunuh binatang tu sepertimana aku menghapuskannya dahulu.

```
publish("act3",["roofhunter",2]);
```

r: Soalan cepumas: kebenaran atau cabar–

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",7]);
publish("act3-alpha", ["dizzyhong",0]);
```

h2: CABARAN!

```
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",2]);
```

r: Haha! Baik.

```
publish("act3",["roofhunter",21]);
publish("act3",["roofhong",4]);
```

r: Kau nampak kolam renang yang berwarna biru cair di bawah tu?

```
publish("act3-alpha", ["dizzyhong",0]);
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",9]);
```

h2: Yang 6 tingkat dari sini?

```
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",8]);
```

r: Terjunlah.

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",10]);
```

h2: ...

```
publish("act3",["roofhong",11]);
```

h2: A-apa?

```
publish("act3",["roofhong",10]);
publish("act3",["roofhunter",2]);
```

r: Binatang tu dah mula merungut ke?

```
publish("act3",["roofhunter",23]);
```

r: *Tidakkkk. Jangan terjun! Bahaya!!*

```
publish("act3",["roofhunter",22]);
```

r: Tapi sebab itulah kita perlukan keseronokan yang mencabar kematian! Berparti! Carpe diem! Hisap dadah! #HIDUPHANYASEKALI!

```
publish("act3",["roofhunter",10]);
```

r: Tunjukkan pada binatang *^tak guna^* tu yang kita tak peduli kata-kata dia! Terjun je!

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",13]);
```

h2: Hm, tapi kadang-kadang.. rasa takut tu ada baiknya.

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

r: Jangan kata kau percaya propaganda buku McMindfulness yang berpendapat perasaan bersalah tu sebenarnya *bagus*.

```
publish("act3",["roofhunter",17]);
```

r: Orang-orang ^tak guna^ yang memerintah dunia ni buatkan *kita semua* resah dan murung,

```
publish("act3",["roofhunter",18]);
```

r: Lepas tu, mereka bagi ceramah yang menyuruh kita “menerima” diri *dilanyak* oleh iblis yang sadistik dalam kepala kita tu!

```
publish("act3",["roofhunter",6]);
```

r:  Aku tahu *kau* sedar yang binatang tu *menyakitkan* dan *menyeksa* orang seperti kita.

```
publish("act3",["roofhunter",19]);
```

r: Binatang tu bukan kawan kita. Binatang tu ialah haiwan gila yang perlu diberi *ubat penenang*,

```
publish("act3",["roofhunter",20]);
```

r: Atau *ditembak*.

```
publish("act3",["roofhunter",27]);
```

r: Kalau tak, binatang tu akan menang.

```
publish("act3",["roofhunter",31]);
publish("act3",["roofhong",14]);
publish("act3",["dd",2]);
```

h2: Tak, kau salah.

```
publish("act3",["roofhunter",13]);
publish("act3",["roofhong",15]);
music('battle_dark', {volume:1.0}, function(){
	music('battle_dark_loop');
});
```

h2: Aku takkan benarkan binatang tu menang.

```
publish("act3",["roofhunter",25]);
publish("act3-alpha", ["roofhong",0]);
publish("act3-alpha", ["transition",1]);
publish("act3",["dd",6]);
```

r: Macam itulah! Aku percaya kau boleh! Bunuh dia!<3

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

b: jangan jangan jangan jangan jangan

n: BAB NI MEMPUNYAI DUA PENGAKHIRAN. SALAH SATUNYA ADALAH *SANGAT, SANGAT TRAGIS*

b: JANGAN JANGAN JANGAN JANGAN JANGAN JANGAN JANGAN

n: BERHATI-HATI MEMBUAT PILIHAN. LINDUNGI MANUSIA ANDA

`bb({ eyes:"oh_crap", mouth:"normal_talk", MOUTH_LOCK:true });`

b: AAAAAAAAAAAAAAAAAA

`bb({ mouth:"normal" });`

n: SEMOGA BERJAYA

```
Game.clearText();
bb({ eyes:"start" });
```

[Manusia, kau boleh MATI kat sini tahu!](#act3a_harm) `Game.OVERRIDE_CHOICE_LINE=true`

[Ni tindakan yang bodoh dan membahayakan!](#act3a_bad) `Game.OVERRIDE_CHOICE_LINE=true`

[Orang-orang tak siuman ni bukan kawan kau!](#act3a_alone) `Game.OVERRIDE_CHOICE_LINE=true`

# act3a_harm

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: M--

(#act3a_after)

# act3a_alone

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: I--

(#act3a_after)

# act3a_bad

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: O--

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

h: Aku mungkin akan percayakan kau… kalau kau tak cakap benda tu beribu-ribu kali sebelum ni.

h: Kau serigala yang menipu.

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

h: Kau dah pernah cakap macam tu sebelum ni.

b: manusia, tolonglah..

`hong({ eyes:"look_right" });`

h: Oh, *maaflah*, syarikat farmaseutikal tak suka cara aku rawat diri sendiri.

h: Kau dengar sini, *tak guna*. Kami *semua* ada cara untuk senyapkan binatang macam kau!

`hong({ body:"look_up", eyes:"look_up" });`

h: Ada yang sibukkan diri dengan kerja.

`hong({ body:"look_down", eyes:"look_down" });`

h: Ada yang sibukkan diri dengan hubungan intim, dadah atau menghabiskan masa di Facebook.

`hong({ body:"normal", eyes:"look_right" });`

h: Ada juga yang sibuk menjaga tepi kain orang lain.

`hong({ eyes:"angry" });`

h: Kalau aku pula, aku akan terjun ke dalam kolam renang tu.

[Kau dah mabuk! KOLAM TU 6 TINGKAT DARI SINI](#act3_bad_1_harm)

[Cis, ni cara kau berterima kasih dekat aku?!](#act3_bad_1_insult) `bb({eyes:"angry"});`

[Baiklah, aku mengaku. Aku salah.](#act3_good_1) `bb({mouth:"sorry", eyes:"sorry_down"});`

# act3_bad_1_harm

b: Kalau kau terjun masuk air pun, tegangan permukaan air akan meretakkan tulang rusuk kau dan *paling kurang pun* kau akan mengalami konkusi!

h: Eh.

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

h: Aku pernah lihat lelaki Rusia buat benda ni kat YouTube.

(#act3_bad_2)

# act3_bad_1_insult

`hong({ eyes:"look_right" });`

h: Ak- Jap, *berterima kasih*?

`bb({ eyes:"angry" });`

b: Inilah sebabnya aku *wujud*! Sebab manusia tak boleh lindung diri sendiri!

b: Sedaya upaya aku usaha untuk melindungi kau seumur hidup aku dan sekarang kau nak--

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

h: LAH kau baru sedar ke?

`hong({ body:"yell_2" });`

h: Ya! Kau dah buat silap besar!

`hong({ body:"normal", mouth:"angry", eyes:"angry" });`

h: Ada apa-apa lagi kau nak cakap?

[Tapi balas dendam terhadap aku bukanlah jawapannya!](#act3_good_1_fail_revenge) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[Tapi kali ni aku *memang* betul!](#act3_good_1_fail_harm) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[Aku dah menyakiti kau](#act3_good_2a)


# act3_good_1_fail_revenge

b: Kau kena kawal emosi kau dengan lebih baik. Daripada kau terus minum--

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

b: Jadi, tolonglah letakkan botol tu dan mari--

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

b: jangan… tolonglah…

h: Kau macam dah tak ada tenaga je tu, serigala.

h: Kalau aku jadi kau, aku akan berhati-hati dengan apa yang aku kata lepas ni.

`bb({ eyes:"normal" });`

[Sudahlah. Aku penat lindungi kau.](#act3_bad_2_jump) `bb({ mouth:"ignore", eyes:"ignore" });`

[Selama ni memang aku betul.](#act3_bad_2_right)

[Aku minta maaf.](#act3_good_2b) `bb({mouth:"sorry", eyes:"sorry_down"});`


# act3_bad_2_jump

b: Terjunlah. Aku tak kisah.

`hong({ eyes:"look_right", mouth:"normal", MOUTH_LOCK:true });`

h: ...

```
hong({ eyes:"less_angry", mouth:"normal" });
bb({ eyes:"ignore_oh_crap" });
```

h: Okey. Aku terjun.

```
bb({ mouth:"normal", eyes:"oh_crap" });
Game.OVERRIDE_TEXT_SPEED = 2;
```

b: JAP TU PSIKOLOGI TERBALIK. KAU SEPATUTNYA BUAT BENDA YANG *BERTENTANGAN* DENGAN APA YANG AKU SURUH-- 

(#act3_bad_3)



# act3_bad_2_right

`bb({ eyes:"angry" });`

b: Kau *membahayakan* diri sendiri. Orang yang kau panggil kawan tu sebenarnya hanya *mempergunakan* kau je dan *kau* pun buat benda yang sama.

`bb({ eyes:"sad" });`

b: Jadi, tolonglah manusia… kenapa kau tak percaya aku?!

h: Sebab kau tak pernah percayakan *aku*.

(#act3_bad_3)


# act3_bad_2_terrible

`bb({ eyes:"angry" });`

b: Serigala pengawal yang lain semua ada manusia yang melatih mereka dengan penuh kesabaran dan *belajar* untuk saling bekerjasama,

b: bukannya membenci mereka kerana cuba melindungi manusia mereka. Jadi, kenapa kau tak bol--

`bb({ eyes:"normal" });`

h: Jawapan yang salah!

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

h: *”Kita patut takut pada ketakutan sahaja.”*

`hong({ body:"look_up", mouth:"happy", eyes:"blank" });`

h: *"Hati tenang, hidup senang!"*

`hong({ body:"normal", mouth:"normal", eyes:"normal" });`

h:  Semua sarjana pada masa kini setuju bahawa emosi bersifat negatif ialah *tak baik!*

`hong({ eyes:"less_angry" });`

h: Mestilah! Sebab tu dipanggil *negatif!*

b: manusia...tolonglah…

`hong({ eyes:"normal" });`

h: Baru-baru ni aku kata, "Aku hanya nak bebaskan diri daripada semua kesengsaraan ni."

h: Aku dapat apa yang aku harapkan. Tiada lagi perasaan takut, terseksa, dan keresahan…

h: Aku tak rasa apa-apa dah.

`_.a3_ending = "jump";`

(#act3_end)



# act3_good_2a

`bb({mouth:"sorry", eyes:"sorry_down"});`

b: Aku terlalu taksub untuk pastikan tiada apa-apa yang boleh sakiti kau sehingga tak sedar bahawa *akulah* sebenarnya punca di sebalik semua ini.

```
bb({ eyes:"sorry"});
hong({ body:"yell_2", mouth:"yell", eyes:"blank" });
```

h: HA TAHU PUN!

`hong({ body:"yell_1" });`

h: Baru sekarang kau sedar?

`hong({ body:"cry", mouth:"cry", eyes:"blank" });`

h: Buang masa je tahu? Kenapa kau tak sedar dari awal lagi?

`_.apologized_for_hurt = true;`

(#act3_good_2q)



# act3_good_2b

`hong({ body:"normal", mouth:"angry", eyes:"look_right" });`

h: …maaf.

`hong({ eyes:"angry", MOUTH_LOCK:true });`

h: ...

h: Maaf untuk *apa*?

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

[Aku minta maaf, aku bukan seorang penjaga yang baik.](#act3_good_3_protector)

[Aku minta maaf sebab aku tak menghormati kau.](#act3_good_3_respect)

[Aku minta maaf.](#act3_good_4)


# act3_good_2q_not_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"angry" }, 0);`

[Aku minta maaf sebab manusia aku teruk!](#act3_bad_2_terrible) `bb({mouth:"normal", eyes:"normal"})`

[Aku minta maaf sebab aku tak menghormati kau.](#act3_good_3_respect)

[Aku minta maaf sebab telah sakiti kau.](#act3_good_3_hurt)



# act3_good_3_protector

`bb({eyes:"sorry_down"});`

b: Tugas aku adalah untuk jaga kau dari ancaman *sebenar*. Tapi aku asyik memperbesarkan hal yang remeh.

`bb({eyes:"sorry_up"});`

b: Tak rasional… macam-macamlah.

`bb({eyes:"sorry"});`

b: Aku faham kenapa kau nak aku senyap.

`bb({eyes:"sorry_down"});`

b: Aku minta maaf.

(#act3_good_4)



# act3_good_3_respect

`bb({eyes:"sorry_down"});`

b: Aku sepatutnya menjadi anjing pengawal *kau*. Namun, aku berkelakuan seperti kau yang perlu patuhi *aku*.

`bb({eyes:"sorry_up"});`

b: Ada beza antara penjaga dan pengawal penjara. Aku telah bertindak keterlaluan.

`bb({eyes:"sorry_down"});`

b: Aku minta maaf.

(#act3_good_4)



# act3_good_3_hurt

`bb({eyes:"sorry_down"});`

b: Aku terlalu taksub untuk cuba melindungi kau. Aku tak pernah terfikir bahawa *aku* yang telah buat kau sengsara.

`bb({eyes:"sorry_up"});`

b: Aku anjing tak berguna.

`bb({eyes:"sorry_down"});`

b: Maafkan aku.

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

h: Ya. Apapun, ni bukan idea yang bagus.

h: Aku lakukan semua ini hanya untuk kenakan kau balik dan aku berjaya.

h: Kita anggap je kali ni kita seri, okey?

```
bb({ mouth:"sorry", eyes:"sorry" });
bb({ MOUTH_LOCK:true });
```

b: ...

b: Okey.

h: Okey.

n: *SERI*

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

r: *Seriuslah*? Selepas segala perbuatan yang serigala tu lakukan, kau akan *mengalah* begitu je?

r: Kenapa? Kau *takut* ke?

```
publish('hong-next');
publish("act3",["roofhunter",26]);
```

h2: Ya.

h2: Aku takut.

`publish('hong-next')`

h2: Sebenarnya,

`publish('hong-next')`

h2: tak mengapa untuk berasa takut.

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

r: Sekejap, mereka kunci pintu ke?

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

b: Tak mungkin…

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

b: Alamak!

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

b: TAK MUNGKIN!

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
