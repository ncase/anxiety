# act2

`SceneSetup.act2();`

{{if _.badnews && !_.factcheck}}
(#act2-preamble-news1)
{{/if}}

{{if _.badnews && _.factcheck}}
(#act2-preamble-news2)
{{/if}}

{{if _.catmilk}}
(#act2-preamble-cat)
{{/if}}

(#act2-preamble-tinder)


# act2-preamble-news1

```
publish("act2",["dee",3]);
```

s: Tapi, kau *tahu* tak “berita” tentang benda mengerikan yang terjadi kat suatu tempat ni?

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: h-hai...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",3]);
```

a: Oh, aku benci berita. Semuanya cuma sensasi dan klik umpan je.

```
publish("act2",["dum",2]);
publish("act2",["party_hong","next"]);
```

h2: parti yang men…menarik…

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",1]);
```

s: Betul, tapi mereka cuma mengikut trend terkini sahaja. Masalahnya ialah orang yang terpedaya dengan umpan tersebut.

```
publish("act2",["dee",3]);
```

s: Kenapa ada orang nak retweet berita buruk dan buatkan orang rasa tak selesa?

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Ugh, kan?

(#act2-preamble-end)


# act2-preamble-news2

```
publish("act2",["dee",3]);
```

s: Tapi, kau tahu tak “berita” yang sedang tular tu?

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: h-hai...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",3]);
```

a: Ya, macam tipu je. Siapa je yang akan percaya dan retweet berita tu?

```
publish("act2",["dum",2]);
publish("act2",["party_hong","next"]);
```

h2: parti yang men…menarik…

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Ish! Mereka tak boleh Google untuk sahkan sama ada fakta itu betul atau tak ke?

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Ugh, kan?

(#act2-preamble-end)


# act2-preamble-cat

```
publish("act2",["dee",3]);
```

s: Macam yang aku cakap sebelum ni, Kompleks Industri Meme mengeksploitasi kucing.

```
publish("act2",["dee",2]);
publish("act2",["party_hong","next"]);
```

h2: h-hai...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",1]);
```

a: Cuba terangkan.

```
publish("act2",["dum",0]);
publish("act2",["party_hong","next"]);
```

h2: parti yang men…menarik…

```
publish("act2",["party_hong","next"]);
publish("act2",["party_hunter",0]);
publish("act2",["dee",1]);
```

s: Semalam aku ternampak seseorang retweet GIF kucing sedang minum susu.

```
publish("act2",["dee",3]);
```

s: Kucing tidak boleh hadam ^benda itulah^! Siapa je yang akan retweet  *penyeksaan haiwan* macam tu?

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Ugh, kan?

(#act2-preamble-end)


# act2-preamble-tinder

```
publish("act2",["dee",1]);
```

s: Tapi orang tu tak balas pun!

```
publish("act2",["dee",0]);
publish("act2",["party_hong","next"]);
```

h2: h-hai...

```
publish("act2",["party_hunter",1]);
publish("act2",["party_hong","next"]);
publish("act2",["dum",1]);
```

a: Walaupun kamu berdua match dalam Tinder?

```
publish("act2",["dum",0]);
publish("act2",["party_hong","next"]);
```

h2: parti yang men…menarik…

```
publish("act2",["party_hong","next"]);
```

{{if _.serialkiller}}
(#act2-preamble-serialkiller)
{{/if}}

{{if _.hookuphole}}
(#act2-preamble-hookuphole)
{{/if}}

{{if _.pokemon}}
(#act2-preamble-pokemon)
{{/if}}

# act2-preamble-serialkiller

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Entahlah! Apa, mereka fikir aku ni *pembunuh bersiri* ke? Paranoid sangat.

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Ugh, kan?

(#act2-preamble-end)


# act2-preamble-hookuphole

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Entahlah! Mungkin mereka fikir hubungan kasual ni tak boleh mengisi kekosongan dalam hati mereka?

a: Berhentilah menjadi orang yang kolot! Luaskan pemikiran anda dan terima pelawaan orang tu!

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Ugh, kan?

(#act2-preamble-end)


# act2-preamble-pokemon

```
publish("act2",["party_hunter",0]);
publish("act2",["dee",3]);
```

s: Entahlah! Rupa mereka biasa-biasa je, tapi masih boleh diterima!

```
publish("act2",["party_hunter",1]);
publish("act2",["dee",2]);
publish("act2",["dum",3]);
```

a: Kumpulkan Semuanya!™

(#act2-preamble-end)


# act2-preamble-end

```
Game.clearText();
publish("act2-out-1");
music(null, {fade:1});
```

(...3000)

```
music('battle', {volume:0.5});
publish("hp_show");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

n: PUSINGAN KEDUA: *MULA!*

[Alamak, semua orang benci kita!](#act2a_social)

[Kau berminat dengan orang yang berambut merah tu ke?](#act2a_perv)

[Hei, jom berborak tentang makna kehidupan.](#act2a_meaning)

# act2a_social

`bb({eyes:"sad"})`

b: Perasaan murung kita ni mengacau suasana parti inilah!

`bb({eyes:"shock", body:"two_up"})`

b: Hancur suasana seronok ni! Kita sedang melakukan jenayah penghancur suasana tanpa sedar!

`bb({eyes:"normal", body:"normal"})`

b: Manusia, kita perlu keluar dari sini *sekarang* sebelum--

```
_.a2_first_danger = 'social';
_.a2_attack_1 = "alone";
```

(#act2b)

# act2a_perv

`bb({eyes:"suspect"})`

b: Mereka semua lagi cantik dari kita, maksudnya kalau kita *tengok* mereka pun, kita sebenarnya--

`bb({eyes:"shock", body:"two_up"})`

b: ORANG YANG MENAKUTKAN

`bb({body:"normal"})`

b: Kita seorang yang menakutkan, jahat dan sangat sangat sangat mia--

```
_.a2_first_danger = 'perv';
_.a2_attack_1 = "bad";
```

(#act2b)

# act2a_meaning

`bb({body:"one_up", eyes:"normal_r"})`

b: Tapi kesimpulannya, apa yang betul-betul penting yang kita boleh lakukan?

`bb({body:"normal", eyes:"sad"})`

b: Menyumbang kepada kemanusiaan? Segala karya agung akhirnya akan binasa, seperti nasib Ozymandias. Cinta? Kematian akan sentiasa menyebabkan perpisahan.

`bb({eyes:"sad_r"})`

b: Lihat betapa banyaknya kematian! *Kita* akan mati. *Orang yang kita sayang* akan mati.

`bb({eyes:"shock", body:"two_up"})`

b: Tengoklah, hukum termodinamik kedua pun membuktikan yang *alam semesta* akan musnah!

`bb({eyes:"suspect", body:"normal"})`

b: Oh, “kematian buat kita hargai hidup”? Mengarut je! Ibarat hamba abdi tu bagus sebab kita hargai kebebasan!

`bb({body:"one_up"})`

b: Oh, “kita perlu mencari makna hidup”? Tu yang orang kultus dan ahli teori konspirasi katakan!

`bb({eyes:"shock", body:"two_up"})`

b: Kehidupan tiada makna, kematian tiada makna, *makna* pun tak bermaksud apa-apa! Apa yang orang biasa seperti kita perlu--

```
_.a2_first_danger = 'meaning';
_.a2_attack_1 = "bad";
```

(#act2b)

# act2b

`bb({eyes:"normal", mouth:"normal", body:"normal", MOUTH_LOCK:true})`

b: ...

`bb({eyes:"suspect"})`

b: Um… kau boleh dengar aku tak manusia?

`bb({eyes:"normal", MOUTH_LOCK:true})`

b: ...

`bb({eyes:"shock", mouth:"small_talk", body:"chest", MOUTH_LOCK:true})`

b: *HAH*

`bb({mouth:"small_talk"})`

b: AKU PERLU INGATKAN KAU TENTANG…

[*Banyak* ancaman yang sama!](#act2b_louder)

{{if _.a2_first_danger=="social"}}
[Ancaman sosial yang *lain*!](#act2b_different_social)
{{/if}}

{{if _.a2_first_danger=="perv" || _.a2_first_danger=="meaning"}}
[Ancaman moral yang *lain*!](#act2b_different_moral)
{{/if}}

[Kau abaikan ancaman yang ada! Sangat berbahaya tahu!](#act2b_ignore)

# act2b_louder

`_.a2_first_choice = "louder"`

{{if _.a2_first_danger=="social"}}
(#act2b_louder_social)
{{/if}}

{{if _.a2_first_danger=="perv"}}
(#act2b_louder_perv)
{{/if}}

{{if _.a2_first_danger=="meaning"}}
(#act2b_louder_meaning)
{{/if}}

# act2b_louder_social

`bb({eyes:"shock", body:"two_up", mouth:"normal"})`

b: EMOSI BOLEH BERJANGKIT! JADI, KALAU KAU TAK KELUAR DARI SINI, KAU AKAN MENJANGKITI ORANG LAIN DENGAN PENYAKIT MENTAL KAU!

b: Kau akan menjadi penyebab penularan SINDROM KESEDIHAN yang berbahaya

`bb({eyes:"suspect", body:"normal", mouth:"normal"})`

b: Kita perlu keluar dari sini dan mengkuarintinkan diri kita selama-lamanya dalam bilik yang kecil sambil menonton Netflix dan memesan penghantaran makanan!

```
_.a2_second_danger = 'netflix';
_.a2_attack_2 = "alone";
_.a2_hoodie_callback = "a quarantine";
```

(#act2c)

# act2b_louder_perv

`bb({eyes:"suspect", body:"two_up", mouth:"normal"})`

b: JANGAN JADI ORANG YANG MENAKUTKAN. TU MELANGGAR UNDANG-UNDANG!

`bb({eyes:"judge", body:"judge_1", mouth:"normal"})`

(...201)

```
bb({body:"judge_2"}, 0);
sfx("gravel");
```

(...168)

`bb({body:"judge_1"}, 0)`

(...168)

`bb({body:"judge_2"}, 0)`

(...168)

`bb({body:"judge_1"}, 0)`

(...501)

b: Undang-undang Orang Menakutkan, Seksyen 74.5: (1) Sesiapa yang berkaitan (a) individu yang mempunyai bahu berotot (b) punggung berotot (2) akan digelar sebagai

`bb({eyes:"shock", body:"two_up", mouth:"normal"})`

b: “INDIVIDU SAMPAH YANG MENJIJIKKAN DAN MIANG”

```
_.a2_second_danger = 'law';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "the law";
```

(#act2c)

# act2b_louder_meaning

`bb({body:"two_up", mouth:"normal", eyes:"shock"})`

b: Sebenarnya, walaupun kau dapat mencari tujuan hidup yang mulia, kau *masih* akan membuat kesilapan!

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Alfred Nobel, menginginkan dunia yang aman damai dan mahu semua budaya untuk memahami satu sama lain. Maka, beliau menjadikan perjalanan dari suatu tempat ke tempat yang lain lebih mudah.

`bb({eyes:"normal_r"})`

b: Beliau memerlukan cara yang menjimatkan untuk membuat terowong kereta api. Jadi, beliau mencipta bahan baru iaitu bahan letupan yang dipanggil “dinamit”...

`bb({body:"one_up", eyes:"normal"})`

b: yang kemudiannya digunakan dalam Perang Dunia Pertama untuk MEMBUNUH BERJUTA-JUTA ORANG

`bb({body:"two_up", eyes:"shock"})`

b: FENOMENA NI DIPANGGIL SEBAGAI BUTTERFLY EFFECT. KAU SEDAR ATAU TIDAK BERAPA RAMAI ORANG YANG KAU HANCURKAN DENGAN TAK SENGAJA SEKARANG NI?

```
_.a2_second_danger = 'butterfly';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "World War I";
```

(#act2c)

# act2b_different_social

`_.a2_first_choice = "different"`

`bb({eyes:"normal_r", body:"point", mouth:"normal"})`

b: Sebenarnya, tahu tak perkara yang lebih teruk daripada kau dibenci orang lain? *Semua orang* menyukai kau.

`bb({body:"one_up", eyes:"suspect", mouth:"normal"})`

b: Maksudnya, menjadi mangsa nafsu hiburan manusia-manusia kaki parti *ni*.

`bb({body:"normal", mouth:"small"})`

b: Kehidupan yang kosong dengan kawan yang tak bermakna yang hanya mengenali luaran kau je!

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: Manusia, kita perlu lari dari hantu-hantu hiburan ni sebelum mereka menghantui kita!

```
_.a2_second_danger = 'zombies';
_.a2_attack_2 = "alone";
_.a2_hoodie_callback = "zombies";
```

(#act2c)

# act2b_different_moral

`_.a2_first_choice = "different"`

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: Ramai yang mati disebabkan kebuluran dan krisis dunia yang berlaku *sekarang* tapi kita sedang berparti!

`bb({body:"point", eyes:"closed", mouth:"small"})`

b: Seseorang yang bijak pernah berkata, “kemenangan bagi kejahatan boleh dicapai apabila orang baik tak berbuat apa-apa.”

`bb({body:"two_up", eyes:"shock", mouth:"normal"})`

b: KITALAH ORANG BAIK TU.

`bb({mouth:"small"})`

b: KITA SEDANG MENOLONG *HITLER* DENGAN BERPARTI.

```
_.a2_second_danger = 'hitler';
_.a2_attack_2 = "bad";
_.a2_hoodie_callback = "Hitler";
```

(#act2c)

# act2b_ignore

`_.a2_first_choice = "ignore"`

`bb({body:"normal", mouth:"normal", eyes:"suspect"})`

b: Kau fikir kau selamat sebab kau keluarkan bateri dari pengesan karbon monoksida?

`bb({eyes:"suspect_r"})`

b: Kau tak akan dapat bau racun tu pun! Kau akan mengantuk dan kau akan--

`bb({body:"scream_c_1"})`

b: MATIIIIIIIIIIIIIIIIIIIIIIII

```
_.a2_second_danger = 'ignore';
_.a2_attack_2 = "harm";
_.a2_hoodie_callback = "carbon monoxide";
```

(#act2c)

# act2c

```
hong({body:"ignore_sweat"});
bb({eyes:"normal", mouth:"normal", body:"normal", MOUTH_LOCK:true});
```

b: ...

`bb({eyes:"happy", mouth:"smile", body:"chest"})`

b: Oh nasib baik manusia, kau boleh dengar aku semula!

`bb({eyes:"closed", body:"point"})`

b: AKU AKAN INGATKAN KAU TENTANG…

{{if _.a2_first_choice=="louder"}}
[*Banyak lagi* ancaman yang sama!](#act2c_louder)
{{/if}}

{{if _.a2_first_choice!="louder"}}
[*Banyak* ancaman yang sama!](#act2c_louder)
{{/if}}

{{if _.a2_first_danger=="social"}}
[Ancaman sosial yang *lain*!](#act2c_different_social)
{{/if}}

{{if _.a2_first_danger=="perv" || _.a2_first_danger=="meaning"}}
[Ancaman moral yang *lain*!](#act2c_different_moral)
{{/if}}

[Kau dah periksa ke air yang kau minum tu?](#act2c_punch)

#act2c_louder

{{if _.a2_second_danger=="netflix"}}
(#act2c_louder_netflix)
{{/if}}

{{if _.a2_second_danger=="law"}}
(#act2c_louder_law)
{{/if}}

{{if _.a2_second_danger=="butterfly"}}
(#act2c_louder_butterfly)
{{/if}}

{{if _.a2_second_danger=="zombies"}}
(#act2c_louder_zombies)
{{/if}}

{{if _.a2_second_danger=="hitler"}}
(#act2c_louder_hitler)
{{/if}}

{{if _.a2_second_danger=="ignore"}}
(#act2c_louder_ignore)
{{/if}}

# act2c_louder_netflix

`bb({body:"normal", mouth:"normal", eyes:"shock"})`

b: Sebenarnya, walaupun hanya dengan menonton Netflix dan memesan penghantaran makanan, kita masih boleh menjangkiti penghantar makanan tu!

`bb({body:"one_up", mouth:"small"})`

b: Kita perlu berpindah ke wilayah Yukon, Kanada dan makanan kita akan dihantar menggunakan dron!

`bb({body:"two_up", mouth:"normal"})`

b: Dan mereka perlu mensanitasi dron tu untuk menghapuskan KUMAN KESEDIHAN kita

`_.a2_attack_3 = "alone";`

`_.a2_hoodie_callback = "a quarantine";`

(#act2d)

# act2c_louder_law

`bb({eyes:"judge", body:"judge_1", mouth:"normal"})`

(...201)

```
bb({body:"judge_2"}, 0);
sfx("gravel");
```

(...168)

`bb({body:"judge_1"}, 0)`

(...168)

`bb({body:"judge_2"}, 0)`

(...168)

`bb({body:"judge_1"}, 0)`

(...501)

b: INDIVIDU SAMPAH YANG MENJIJIKKAN DAN MIANG akan dijatuhkan hukuman selama 72 jam menggunakan salah satu mesin kuno yang memalukan kita di tempat awam

b: melainkan mereka sebenarnya *menyukai* perkara pelik seperti ni

`bb({body:"scream_a_1"})`

b: sebab mereka ialah ORANG SAMPAH YANG MENJIJIKKAN DAN MIANG

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "the law";`

(#act2d)

# act2c_louder_butterfly

`bb({body:"normal", mouth:"small", eyes:"suspect"})`

b: BUTTERFLY EFFECT! Kau menggunakan cawan plastik yang tak boleh terbiodegradasikan?

`bb({body:"two_up", mouth:"normal", eyes:"shock"})`

b: PANG, TAPAK KAMBUS TANAH YANG BERACUN DAN BOLEH MEMBUNUH BUDAK

`bb({body:"normal", mouth:"small", eyes:"suspect"})`

b: Kau berpeluh dan jantung kau berdegup laju?

`bb({body:"scream_a_1"})`

b: PANG, KAU MEMUFLISKAN SISTEM PENJAGAAN KESIHATAN KITA DAN BERJUTA-JUTA RAKYAT MATI

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "the butterfly effect";`

(#act2d)

# act2c_louder_zombies

`bb({body:"normal", mouth:"small", eyes:"angry"})`

b: Hantu hiburan ni akan terjumpa dan berjalan ke arah kau lalu menggumam,

`bb({body:"normal", mouth:"normal", eyes:"shock"})`

b: SUUUUKAA. SUUUUUUUKAAA.

`bb({body:"scream_a_1"})`

b: Lepas tu mereka akan MENGHANTUI KAU SAMPAI KAU JADI GILA dan/atau JADI YANG ORANG TIDAK BETUL!

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "zombies";`

(#act2d)

# act2c_louder_hitler

`bb({body:"scream_a_1"})`

b: ORANG JAHAT SEDANG BERKAWAD DI JALANAN SEKARANG NI

`bb({body:"one_up", mouth:"smile", eyes:"happy"})`

b: Mereka berkata, *nasib baik ‘orang mulia’ bermalas-malasan dengan perkara seperti ‘berehat’ dan ‘penjagaan diri’*.

`bb({body:"point", mouth:"smile", eyes:"happy_r"})`

b: *Sekarang kita boleh teruskan pelan kita!*

`_.a2_attack_3 = "bad";`

`_.a2_hoodie_callback = "Hitler";`

(#act2d)

# act2c_louder_ignore

`bb({body:"normal", mouth:"normal", eyes:"normal_r"})`

b: Hmm, kita tahu atau tak jika bangunan ni *ada* pengesan karbon monoksida?!

`bb({body:"two_up", mouth:"small", eyes:"normal"})`

b: Macam mana kalau kita sedang diracun *SEKARANG?*

`bb({body:"scream_a_1"})`

b: KITA TAK AKAN PERASAN PUN KALAU KEMATIAN MENANTI KITA. KEHIDUPAN KITA AKAN TAMAT SELAMA-LAMAN--

`_.a2_attack_3 = "harm";`

`_.a2_hoodie_callback = "carbon monoxide";`

(#act2d)

# act2c_different_social

`bb({body:"normal", mouth:"normal", eyes:"sad"})`

b: Macam mana kalau kita *tak mampu langsung* untuk disayangi atau menyayangi seseorang?

`bb({body:"normal", mouth:"small", eyes:"sad_r"})`

b: Macam mana kalau sesuatu telah menyakitkan hati kita suatu masa dahulu? Atau sebenarnya sesuatu tu tak pernah wujud pun dalam diri kita?

`bb({body:"scream_a_1"})`

b: AHH KITA DAH ROSAK! ROSAK! ROSAK! ROSAK--

`_.a2_attack_3 = "alone";`

(#act2d)

# act2c_different_moral

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Macam mana kalau kita memang *jahat?*

`bb({body:"one_up", eyes:"sad"})`

b: Orang lain bersemangat melakukan kebaikan, tapi kita berbuat *baik* hanya kerana kita berasa bersalah atau malu.

`bb({body:"normal", mouth:"small", eyes:"sad_r"})`

b: Macam mana kalau kita memang ditakdirkan untuk menyakiti orang lain? Macam mana kalau kita memang dilahirkan sebagai beban kepada orang yang rapat dengan kita?

`bb({body:"scream_a_1"})`

b: AHH KITA DAH ROSAK! ROSAK! ROSAK! ROSAK--

`_.a2_attack_3 = "bad";`

(#act2d)

# act2c_punch

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Aku bukan nak jadi serigala yang tak rasional tetapi *memang wujud* orang yang memasukkan dadah ke dalam air minuman.

`bb({eyes:"suspect"})`

b: Hei manusia, kepala kau sakit tak? Badan kau lemah ke? Aku rasa kita ni akan mati.

`bb({body:"scream_a_1"})`

b: AHHH KITA AKAN MATI! AKAN MATI AKAN MATI AKAN MA--

`_.a2_attack_3 = "harm";`

`_.a2_hoodie_callback = "punch bowls";`

(#act2d)

# act2d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({body:"attacked"});
attack("20p", _.a2_attack_1);
```

(...401)

```
hong({body:"attacked_2"});
attack("20p", _.a2_attack_2);
```

(...401)

```
hong({body:"attacked_3"});
attack("20p", _.a2_attack_3);
```

(...1001)

h: AAAAHHHHHH!

h: AAHHHH AHHHHH! *AAAAHHHHHHH*

`bb({body:"two_up", mouth:"smile", eyes:"happy"});`

b: Yay, manusia! Gembiranya aku sebab kau boleh dengar aku semula!

`bb({body:"normal", mouth:"small", eyes:"sad"})`

b: Kenapa kau tak hiraukan aku?

`hong({body:"facepalm"})`

h: Ish, kau ni bodohlah.

`hong({body:"facepalm_2"})`

h: Kau tahu tak tentang cerita rakyat Amerika tu?

h: Aku sebenarnya nak biarkan kau sengsara dengan tak memberikan perhatian kepada kau, serigala ^sadis^!

```
hong({body:"facepalm_3"});
bb({eyes:"normal"});
```

h: Aku sebenarnya nak biarkan kau sengsara dengan tidak memberikan perhatian kepada kau, serigala ^sadis^!

`hong({body:"smile", mouth:"smile"})`

h: Ah, sudahlah! Aku akan penuhkan pemikiran aku dengan kata-kata positif.

h: *Aku disayangi. Aku orang baik. Aku bijak. Aku cantik. Aku istimewa.*

`bb({eyes:"suspect"});`

[Uhm, narsisistiknya!](#act2d_narcissist)

[Kau tahu kan *tak menolong pun* benda yang kau buat tu?](#act2d_disproven)

[Kau ni, jangan main bagi penghargaan kepada orang aslilah](#act2d_racist)

# act2d_disproven

`bb({body:"point", mouth:"normal", eyes:"closed"})`

b: Sebenarnya, perkara yang kau sedang buat tu akan *menikam diri* orang yang berkeyakinan rendah!

`bb({body:"one_up", mouth:"small", eyes:"normal"})`

b: Kajian ni bagus tahu. Ujian yang dilakukan secara rawak, pengkaji pun tak tahu individu terlibat tu dalam kumpulan mana.

`bb({body:"two_up", mouth:"small", eyes:"normal_r"})`

b: Dapatannya: kalau kau ada keyakinan yang rendah dan kau penuhkan fikiran kau dengan kata-kata positif, kau akan berasa lebih *teruk* berbanding jika kau tak berkata apa-apa langsung!

`bb({body:"point", mouth:"normal", eyes:"closed"})`

b: Wood 2009, Sains Psikologi. Carilah di Google Scholar wahai manusia,

`bb({body:"scream_b_1"})`

b: AH, BERHENTILAH SEBARKAN BERITA PALSU YANG TAK SAINTIFIK!

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_narcissist

`bb({body:"normal", mouth:"normal", eyes:"normal"})`

b: Kau *perlu* merendah diri dan terima keburukan dalam diri kau supaya kau boleh menjadi lebih kuat!

`bb({body:"two_up", eyes:"suspect"})`

b: Kau tak boleh sembur penyegar udara dalam bilik yang berkulat! Kalau kau menolak keburukan kau, lama-kelamaan kau akan jadi lebih teruk.

`bb({body:"chest", mouth:"smile", eyes:"closed"})`

b: Mujurlah, aku sebagai serigala pengawal yang setia, akan beritahu kekurangan kau. Dan sekarang kekurangan kau adalah-

`bb({body:"scream_b_1"})`

b: SEMUA. SEMUA BENDA TAK KENA

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2d_racist

`bb({body:"normal", mouth:"normal", eyes:"suspect"})`

b: Orang Asli Amerika adalah *manusia* dan bukannya “noble savages” atau “orang primitif” untuk buatkan kau punya biskut nasib lebih *unik*.

`bb({eyes:"suspect_r"})`

b: Kau merendahkan pendirian seseorang dan kebudayaan yang kompleks kepada sesuatu yang bersifat murahan! Tu adalah “rasisme”!

`bb({body:"scream_b_1"})`

b: JANGAN JADI RASISLAH, SEPET

```
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2e)

# act2e

h: ^Alahai^

`hong({body:"yell", mouth:"yell"})`

h: Kau ni kan! Memang *tak rasional* langsung.

h: Semua orang tahu emosi memang tak rasional! Terutamanya ketakutan!

`hong({body:"facepalm_2"})`

h: Kau memang makhluk tak berguna, macam apendiks atau gigi geraham bongsu aku!

`hong({body:"yell", mouth:"yell"})`

h: ^Ish^ metafora serigala ni mengarut je! Kau hanyalah tindak balas kimia dalam otak aku.

`hong({body:"cross", mouth:"cross"})`

h: Jadi, kenapa aku kena dengar cakap ^binatang^ yang tak rasional dan tak wujud macam kau?!

`bb({eyes:"sad", MOUTH_LOCK:true})`

b: ...

[Aduh! Terguris hati aku.](#act2e_hurtful)

[Aku adalah perasaan. Perasaan tu wajar.](#act2e_valid)

[Manusia, kita *berdua* “hanya bahan kimia.”](#act2e_rational)

# act2e_hurtful

`bb({body:"chest"})`

b: Aku *sebahagian* daripada kau. Kalau kau cakap macam tu, kau cuma menyakiti diri *sendiri.*

`bb({body:"scream_a_1"})`

b: Kenapa kau pukul diri sendiri, manusia? BERHENTI SEKARANG.

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "harm");
```

(...2500)

(#act2f)

# act2e_rational

`bb({body:"normal", mouth:"normal", eyes:"normal_r"});`

b: Motivasi kau ialah dopamin dan kegembiraan kau ialah serotonin.

`bb({body:"one_up"});`

b: Memori kau adalah kesinambungan sinaptik dan munasabah kau adalah isyarat elektrik yang sering ralat.

`bb({eyes:"normal", body:"normal"});`

b: Jika *aku* tak rasional sebab aku “hanya bahan kimia”... jadi *kau* pun tak rasional!

`bb({body:"two_up", eyes:"shock"});`

b: Kalau kita *berdua* tak rasional, kita *tak akan* dapat cari kebahagiaan dan kepuasan hati!

`bb({body:"scream_a_1"})`

b: AHH KITA DAH ROSAK! ROSAK! ROSAK! ROSAK--

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "bad");
```

(...2500)

(#act2f)

# act2e_valid

`bb({body:"normal", mouth:"normal", eyes:"suspect"});`

b: Kejap… “orang” kata perasaan tu wajar dan kita patut terima perasaan kita.

`bb({eyes:"suspect_r"});`

b: Tapi “mereka” juga kata emosi tu tak rasional dan tak boleh dipercayai.

`bb({eyes:"angry"});`

b: Cis, “mereka” tipu kita selama ni!

`bb({body:"scream_a_1"})`

b: “MEREKA” TELAH MEMANIPULASI KITA UNTUK BERGANTUNG KEPADA INDUSTRI USAHA DIRI

```
music(null);
hong({body:"attacked"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
attack("10p", "harm");
```

(...2500)

(#act2f)

# act2f

`hong({body:"defeated", MOUTH_LOCK:true});`

h: ...

h: Aku benci semua ni. Ya Tuhan, peritnya. Aku *benci* semua ni.

h: Aku tak boleh puaskan hati kau. Aku tak boleh pulaukan kau. Aku tak boleh lawan kau.

`bb({eyes:"suspect"});`

h: Apa-apa je yang aku buat, aku tak boleh buang ka-

`bb({body:"cry_1"});`

b: Mungkin sebab kau MEMANG TAK *PATUT* BUANG AKU.

`bb({body:"cry_2"});`

b: Kau tak fikir perasaan *aku* ke, manusia?!

`bb({body:"cry_4", mouth:"cry", eyes:"cry"})`

b: Aku cuba sehabis baik untuk jadi anjing pengawal kau tapi kau tengok aku macam aku ni Serigala Jahat!

b: Jadi, aku pun usaha *lebih* untuk bagi amaran tentang bahaya. *Lebih* banyak ancaman! *Pelbagai* ancaman!

`bb({eyes:"cry_2"})`

b: Walaupun aku berusaha untuk menjaga kau, kau *masih* fikir aku musuh!

`bb({body:"cry_5"});`

b: Apa salah aku?!

`bb({body:"cry_2"});`

b: Aku *tahu* aku tak berguna. Tapi aku *cuba*, manusia!

`bb({body:"cry_3"});`

b: ...Aku cuba.

`bb({body:"cry_6", mouth:"right", eyes:"cry_r_1"});`

b: Kau tak perlu hiraukan amaran atau setuju dengan aku. Kau tak perlu *suka* aku pun.

`bb({eyes:"cry_r_2"});`

b: Sebenarnya… aku hanya nak kau bersabar dengan aku.

`bb({eyes:"cry_r_3"});`

b: Aku hanya nak kau dengar cakap aku. Jangan lari dan--

```
bb({eyes:"cry_r_4"});
hong({body:"listen"});
```

r: Hei.

```
hong({body:"look"});
Game.clearText();
publish("act2-in-2");
publish("hp_hide");
music('party1', {volume:0.4, fade:2});
```

(...2000)

```
publish("act2",["party_hunter",2]);
Game.WORDS_HEIGHT_BOTTOM = 230;
```

r: Kau nampak macam tengah serabut je.

```
publish("act2",["party_hunter",3]);
publish("act2",["party_hong",13]);
```

h2: Nampak sangat ke?

```
publish("act2",["party_hunter",4]);
publish("act2",["party_hong",14]);
```

r: Hm, kau macam menggumam sesuatu pada baju kau pasal  {{_.a2_hoodie_callback}} atau..?

```
publish("act2",["party_hunter",13]);
publish("act2",["party_hong",15]);
sfx("rustle", {volume:0.6});
setTimeout(function(){
	publish("act2",["party_hong",16]);
	sfx("concrete_step3", {volume:0.6});
},401);
setTimeout(function(){
	publish("act2",["party_hong",17]);
	sfx("concrete_step4", {volume:0.6});
},801);
```

h2: Aduhai, aku serabut.

```
publish("act2",["party_hunter",7]);
publish("act2",["party_hong",18]);
sfx("squeak");
```

r: Kau tak keseorangan. Keresahan tu benda biasa.

```
publish("act2",["party_hunter",5]);
publish("act2",["party_hong",19]);
```

{{if _.act1_ending=="fight"}}
r: Tahu tak, semalam aku dengar ada orang menangis. Lepas itu orang tu hempas telefon dia!
{{/if}}

{{if _.act1_ending=="flight"}}
r: Tahu tak, semalam aku dengar ada orang meringkuk macam armadilo dan menangis di tempat awam.
{{/if}}

```
publish("act2",["party_hunter",2]);
```

r: Dengar ni: aku tahu macam mana kau rasa apabila ada binatang tu dalam kepala.

```
publish("act2",["party_hunter",8]);
```

r: Kita *semua* ada binatang tu dalam kepala kita. Sebab itulah aku adakan parti setiap minggu. Untuk lupakan kerisauan kita, bebas daripada binatang tu.

```
publish("act2",["party_hunter",9]);
publish("act2",["party_hong",20]);
```

h2: tapi keresahan aku…

```
publish("act2",["party_hunter",2]);
publish("act2",["party_hong",21]);
```

r: Jangan risaulah. Aku pernah rasa macam kau. Tapi aku dah jumpa cara untuk melenyapkan suara negatif tu untuk selamanya.

```
publish("act2",["party_hunter",3]);
Game.clearText();
music(null, {fade:1});
```

(...2001)

```
publish("act2",["party_hunter",10]);
publish("act2",["party_hong",22]);
sfx("rustle");
```

(...2501)

```
publish("act2",["party_hunter",10]);
publish("act2",["party_hong",23]);
sfx("rustle2");
```

(...1001)

```
publish("act2",["party_hunter",11]);
```

r: Resepi istimewa aku. Kesannya agak kuat berbanding… apa-apa yang sah di sisi undang-undang.

```
publish("act2",["party_hunter",12]);
publish("act2",["party_hong",24]);
```

r: Habiskan terus!

```
hong({body:"hold"});
bb({body:"normal", mouth:"small", eyes:"wat"});
Game.clearText();
Game.WORDS_HEIGHT_BOTTOM = -1;
publish("act2-out-3");
publish("hp_show");
```

(...3500)

[Ya Tuhan.](#act2g_1) `Game.OVERRIDE_CHOICE_LINE=true`

[Ni bukan cara yang elok untuk mengatasi masalah.](#act2g_2) `Game.OVERRIDE_CHOICE_LINE=true`

[Jangan terima minuman daripada orang yang tak dikenali.](#act2g_3) `Game.OVERRIDE_CHOICE_LINE=true`

# act2g_1

b: Y--

(#act2g)

# act2g_2

b: N--

(#act2g)

# act2g_3

b: J--

(#act2g)

# act2g

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("40p", "harm");
```

(...2000)

```
hong({body:"forward", mouth:"forward"});
bb({body:"frazzled", mouth:"frazzled", eyes:"frazzled"});
```

h: Hmm, cita rasa yang menarik!

h: Gabungan perisa yang membuatkan minda kau kosong sehingga tak dapat rasa apa-apa lagi!

b: Kau tak boleh buat macam ni, manusia!

[*Macam inilah* ketagihan bermula](#act2h_opt1) `Game.OVERRIDE_CHOICE_LINE=true`

[Saya *dah agak* tuan rumah ni tak betul!](#act2h_opt3) `Game.OVERRIDE_CHOICE_LINE=true`

[Mungkin mereka letakkan sesuatu dalam minuman tu!](#act2h_opt2) `Game.OVERRIDE_CHOICE_LINE=true`


# act2h_opt1

b: *Macam inilah*–

(#act2h)

# act2h_opt2

b: Mungkin mer–

(#act2h)

# act2h_opt3

b: Saya *dah agak*–

(#act2h)

# act2h

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("40p", "harm");
```

(...2000)

```
hong({body:"back", mouth:"back"});
bb({body:"panicked", mouth:"panicked", eyes:"panicked"});
```

h: Sedap *dan* lagi murah daripada terapi!

b: MANUSIA, BERHENTI

h: Hehehe!

h: Habis tu, apa yang kau nak buat, ^tak guna^?

b: Maafkan aku, manusia.

b: Aku perlu guna SERANGAN ISTIMEWA aku

```
bb({body:"special_a"});
music('battle', {volume:0.5});
```

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_harm"`

[](#act2h_attack) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_alone"`

[](#act2h_attack) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_bad"`

[](#act2h_attack) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`

# act2h_attack

```
bb({body:"special_b_1"});
hong({body:"forward", mouth:"forward"});
sfx("charging");
```

h: Apa benda ni?

h: Kau nak berleter tentang *perkara* bodoh kepada aku–

```
bb({body:"special_c"});
sfx("hadouken");
```

(...901)

(#act2i)

# act2i

```
publish("hide_tabs");
publish("show_special_attack");
Game.FORCE_CANT_SKIP = true;
music(null);
stopAllSounds();
```

(...5000)

```
publish("show_tabs");
hong({ body:"final", mouth:"final" });
bb({ body:"normal", mouth:"normal", eyes:"sad" });
attack("100p", _.SPECIAL_ATTACK);
Game.FORCE_CANT_SKIP = false;
setTimeout(function(){
	publish("remove_special_attack");
},30);
```

(...2500)

h: APA ^BENDA^ TU?

b: Maaf. Aku perlu tunjuk akibatnya.

{{if _.SPECIAL_ATTACK=="harm"}}
h: AKU *NAMPAK* MAYAT AKU SENDIRI. AKU BOLEH *RASA* KEADAAN APABILA SUDAH MATI.
{{/if}}

{{if _.SPECIAL_ATTACK=="alone"}}
h: AKU *NAMPAK* MUKA SEMUA ORANG YANG PENUH DENGAN RASA JIJIK. AKU BOLEH *DENGAR* KATA-KATA MEREKA.
{{/if}}

{{if _.SPECIAL_ATTACK=="bad"}}
h: AKU BOLEH *DENGAR* BUNYI TULANG RUSUK PATAH. AKU BOLEH *RASA* DARAH.
{{/if}}

b: Maafkan aku, manusia.

n: *HANCURKAN MEREKA*

[{LAWAN: Tumbuk tuan rumah.}](#act2j_fight) `Game.OVERRIDE_CHOICE_LINE=true`

[{LARI: Jom tinggalkan tempat ni.}](#act2j_flight) `Game.OVERRIDE_CHOICE_LINE=true`

# act2j_fight

`bb({ eyes:"angry" });`

b: Orang gila tu ambil kesempatan je.

b: Mereka hanya akan merosakkan kau dan buatkan kau gila macam mereka.

`bb({ body:"yell_angry_1" });`

b: Tumbuk budak tak guna tu! Sampai dia pengsan!

`bb({ body:"final_1" });`

b: TUMBUK MEREKA TUMBUK MEREKA TUMBUK MEREKA TUMBUK MEREKA TUMBUK MEREKA TUMBUK MEREKA TUMBUK MEREK–

`_.a2_ending = "fight";`

(#act2k)

# act2j_flight

b: Aku *dah agak* semua orang di parti ni tak betul. Mereka semua buat perkara tak senonoh untuk lupakan kesakitan mereka!

`bb({ body:"yell_1" });`

b: Dan mereka cuba untuk menjadikan kau seperti mereka! Mereka merosakkan kau! Kita perlu keluar dari sini!

`bb({ body:"final_1" });`

b: KELUAR KELUAR KELUAR KELUAR KELUAR KELUAR KELUAR KELUAR KELUAR KEL--

`_.a2_ending = "flight";`

(#act2k)

# act2k

```
Game.clearText();
publish("act2-in-4");
publish("hp_hide");
music('party1', {volume:0.6, fade:1.5});
```

(...2001)

```
publish("act2",["party_hong",26]);
sfx("slide");
```

(...1001)

```
publish("act2",["party_hunter",14]);
Game.WORDS_HEIGHT_BOTTOM = 230;
```

r: Kau okey ke?

`publish("act2",["party_hunter",13]);`

{{if _.a2_ending=="fight"}}
(#act2k_fight)
{{/if}}

{{if _.a2_ending=="flight"}}
(#act2k_flight)
{{/if}}

# act2k_fight

```
Game.clearText();
publish("act2",["party_hunter",21]);
publish("act2",["party_hong",33]);
music(null);
sfx("hit");
```

(...1000)

```
sfx("record_scratch");
publish("act2",["party_hunter",22]);
publish("act2",["party_hong",34]);
publish("act2",["dee",6]);
publish("act2",["dum",6]);
```

r: K-kau…

```
publish("act2",["party_hunter",23]);
publish("act2",["party_hong",35]);
publish("act2",["dee",5]);
publish("act2",["dum",5]);
music('party1', {volume:0.6, fade:6});
```

r: Kau ni *peliklah*

r: Aku suka kau. Datanglah lagi minggu depan, si comel.

```
publish("act2",["party_hunter",19]);
publish("act2",["party_hong",36]);
```

h2: ok bye, ciao, adios, au revoir

r: Mungkin binatang tu menang hari ni. Kalau kau datang lagi, aku buatkan minuman yang lagi kuat.

h2: sayōnara, auf wiedersehen, zài jiàn, shalom

r: Kita berdua akan tunjukkan kepada binatang tu siapa ketua!

(#act2k_end)

# act2k_flight

`publish("act2",["party_hong",36]);`

h2: Eh, maaf, aku perlu pergi!

`publish("act2",["party_hunter",16]);`

r: ^Tak guna^. Binatang tu menang lagi hari ni?

`publish("act2",["party_hunter",15]);`

h2: bukan, bukan. Aku kena lari maraton. Pergi dulu.

`publish("act2",["party_hunter",19]);`

r:  Datanglah lagi minggu depan, si comel. Kalau kau datang lagi, aku akan bancuhkan minuman yang lagi keras.

h2: baik terima kasih aku perlu pergi sekarang!!

r: Kita berdua akan tunjukkan kepada binatang tu siapa ketua!

(#act2k_end)

# act2k_end

```
Game.clearText();
publish("act2-out-5");
publish("act2-outro", ["end1"]);
music("hum", {fade:2, volume:0.6});
Game.WORDS_HEIGHT_BOTTOM = -1;
```

(...2500)

```
publish("act2", ["act2_end",2]);
sfx("whoosh");
```

(...1000)

b: Manusia! Kau tak apa-apa ke?!

```
publish("act2", ["act2_end","next"]);
```

b: Fuh, nasib *baik*. Kita hampir–

```
Game.clearText();
publish("act2", ["act2_end","next"]);
music(null);
sfx("squeak");
```

(...1500)

```
publish("act2", ["act2_end","next"]);
sfx("hit");
```

(...1000)

h: Aku akan datang lagi ke parti minggu depan.

h: Lain kali, kalau kita gaduh lagi, aku bukan saja akan *kalahkan* kau…

h: Aku akan *bunuh* kau.

```
Game.clearText();
publish("act2", ["act2_end","next"]);
sfx("concrete_step1");
````

(...901)

```
publish("act2", ["act2_end","next"]);
sfx("concrete_step2", {volume:0.8});
```

(...901)

```
publish("act2", ["act2_end","next"]);
sfx("concrete_step3", {volume:0.5});
```

(...901)

`sfx("concrete_step4", {volume:0.25});`

(...3000)

`_.INTERMISSION_STAGE = 2;`

(#intermission)