# act1

```
SceneSetup.act1();
```

(...300)

n: DAN ANDA IALAH KERESAHAN MANUSIA

n: _ANDA_ IALAH KERESAHAN ITU

{{if window.localStorage.continueChapter=="replay"}}
(#act1_replay)
{{/if}}

{{if window.localStorage.continueChapter!="replay"}}
(#act1_normal)
{{/if}}



# act1_replay

`hong({mouth:"0_neutral", eyes:"0_neutral"})`

h: Oh hai! Kita di sini lagi?

`hong({eyes:"0_neutral"})`

n: TUGAS ANDA ADALAH UNTUK MELINDUNGI MANUSIA ANDA DARIPADA *BAHAYA*

`bb({eyes:"look", mouth:"small_lock"})`

n: MALAH, ANDA MELETAKKAN MEREKA DALAM *BAHAYA* APABILA PERMAINAN INI DIMAINKAN SEMULA

n: CEPAT, BERI MEREKA AMARAN!

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: Manusia! Dengar sini, kita dalam bahaya! Pemain tu…

[...akan seksa kita lagi!](#act1_replay_torture)

[...tak akan jumpa pengakhiran lain!](#act1_replay_alternate)

[...akan timbul percanggahan antara jalan cerita dan permainan!](#act1_replay_dissonance)

# act1_replay_torture

```
window.HACK_REPLAY = JSON.parse(localStorage.act4);
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

{{if window.HACK_REPLAY.act1_ending=="fight"}}
b: Mereka akan buat kita meringkuk sambil menangis!
{{/if}}

{{if window.HACK_REPLAY.act1_ending=="flight"}}
b: Mereka paksa kita hancurkan telefon kerana menjadi punca serangan panik kau!
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="fight"}}
b: Mereka akan paksa kita untuk *TAK* memukul tuan rumah!
{{/if}}

{{if window.HACK_REPLAY.a2_ending=="flight"}}
b: Mereka akan paksa kita pukul tuan rumah yang jahat tapi berhati mulia tu!
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="jump"}}
h: Sekurang-kurangnya kita tak akan lompat dari bumbung kali n--
{{/if}}

{{if window.HACK_REPLAY.a3_ending=="walkaway"}}
b: MEREKA AKAN SURUH KITA LOMPAT DARI BUMBUNG.
{{/if}}

`bb({body:"fear"});`

b: SEMUA PERKARA BURUK AKAN TERJADI KEPADA KITA, DAN KITA AKAN--

(#act1_replay_end)


#act1_replay_alternate

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: Betul, jalan cerita *keseluruhannya* adalah sama, tapi setiap bab ada dua pengakhiran yang berbeza, termasuk semua pilihan cabang dialo--

`bb({body:"fear"});`

b: Pemain akan kecewa, tutup permainan ni, padamkan perisian, kemudian kita akan--

(#act1_replay_end)


# act1_replay_dissonance

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich"});
```

h: Apa benda lucah pula ni?

`bb({eyes:"normal"});`

b: Jalan cerita ni sebenarnya tentang bagaimana kau boleh *PILIH* untuk bekerjasama dengan rasa takut kau,

`bb({eyes:"normal_right"});`

b: Tapi apabila permainan ni dimainkan semula, jalan cerita tetap sama, seolah-olah *PILIHAN* kau tak ada makna,

`bb({eyes:"narrow_eyebrow"});`

b: Jadi, ia menunjukkan percanggahan antara mesej game ni dan mekaniknya,

`bb({eyes:"fear"});`

b: Dari situ, seluruh alam naratif ni mula runtuh,

`bb({body:"fear"});`

b: Dan kemudian kita akan--

(#act1_replay_end)


# act1_replay_end

`bb({body:"panic"})`

b: MATIIIIIIIIIIIIIIIIIIIIII

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

h: Okey, mari balik kepada watak.

```
Game.clearText();
```

n4: (BIARKAN_KERESAHAN_ANDA BLAH BLAH BLAH YANG PALING SERUPA DENGAN KETAKUTAN_ANDA_BLAH BLAH MESTI ANDA TAHU LANGKAHNYA)

```
sfx("squeak");
hong({body:"0_squeeze"});
bb({body:"squeeze"});
```

(#act1_normal_choice)



# act1_normal

`hong({mouth:"0_neutral", eyes:"0_annoyed"})`

h: Baguslah, serigala aku dah kembali. Terbaaaiikkk.

`hong({eyes:"0_neutral"})`

n: TUGAS ANDA ADALAH UNTUK MELINDUNGI MANUSIA ANDA DARIPADA *BAHAYA*

`bb({eyes:"look", mouth:"small_lock"})`

n: MALAH, SANDWIC TU MELETAKKAN MEREKA DALAM *BAHAYA* SEKARANG

n: CEPAT, BERI MEREKA AMARAN!

```
sfx("squeak");
bb({body:"squeeze_talk"});
hong({body:"0_squeeze"});
```

b: Manusia! Dengar sini, kita dalam bahaya! Ancamannya adalah…

`bb({body:"squeeze"})`

n4: (BIARKAN_KERESAHAN_ANDA BERAKSI! PILIH JAWAPAN YANG PALING MENCERMINKAN KETAKUKAN _ANDA_)

(#act1_normal_choice)

# act1_normal_choice

[Kita makan tengah hari seorang diri lagi!](#act1a_alone) `bb({body:"squeeze_talk"})`

[Kita tak produktif semasa makan!](#act1a_productive) `bb({body:"squeeze_talk"})`

[Roti putih tu tak elok untuk kita!](#act1a_bread) `bb({body:"squeeze_talk"})`

# act1a_alone

```
bb({body:"normal", mouth:"small", eyes:"narrow"});
hong({body:"0_sammich"});
```

b: Kau tahu tak, kesunyian tu dikaitkan dengan risiko mati awal sama macam merokok 15 batang rokok sehari?-

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({mouth:"normal", eyes:"normal_right"})`

b: (Holt-Lunstad, 2010, PLoS Medicine)

`hong({eyes:"0_annoyed"})`

h: Hm, terima kasih sebab bagi sumber rujukan tapi--

`Game.OVERRIDE_TEXT_SPEED = 2;`

`bb({body:"fear", mouth:"normal", eyes:"fear"})`

b: Maksudnya kalau kita tak lepak dengan seseorang *sekarang juga*, kita akan--

`bb({body:"panic"})`

b: MATIIIIIIIIIIIIIIIIIIIIIIIIIIII

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "alone");
publish("hp_show");
```

(...2500)

`_.fifteencigs = true`

n: ANDA MEMILIH *TAKUT TIDAK DISAYANGI*

(#act1b)

# act1a_productive

```
bb({body:"normal", mouth:"small", eyes:"normal"});
hong({body:"0_sammich"});
```

b: Cepat buka komputer riba dan buat kerja sekarang juga!

`hong({eyes:"0_annoyed"})`

h: Hm, aku tak naklah serdak roti masuk celah papan kekun--

```
bb({mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Kalau kita tak menyumbang kepada badan masyarakat, kita adalah sampah masyarakat!

b: Badan masyarakat akan berjumpa doktor masyarakat untuk mendapatkan ubat bagi merawat sampah masyarakat, kemudian kita akan--

```
bb({body:"panic", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: MATIIIIIIIIIIIIIIIIIIIIIIIIIIII

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "bad");
publish("hp_show");
```

(...2500)

`_.parasite = true`

n: ANDA MEMILIH *TAKUT JADI ORANG JAHAT*

(#act1b)

# act1a_bread

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({body:"0_sammich", eyes:"0_annoyed"});
```

h: Adakah kajian-kajian tu sudah dikaji semul--

```
bb({body:"fear", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Gandum terproses akan menaikkan gula dalam darah kita, kemudian mereka perlu potong semua anggota badan kita dan kita akan--

`bb({body:"panic"})`

b: MATIIIIIIIIIIIIIIIIIIII

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"0_shock", eyes:"0_shock"});
attack("18p", "harm");
publish("hp_show");
```

(...2500)

`_.whitebread = true`

n: ANDA MEMILIH *TAKUT DICEDERAKAN*

(#act1b)

# act1b

n: IA SANGAT BERKESAN!

`bb({mouth:"smile", eyes:"smile"});`

b: Nampak tak, manusia? Aku ni serigala pengawal yang setia!

`bb({body:"pride_talk"});`

b: Percayalah pada naluri kau! Perasaan kau sentiasa wajar!

`bb({body:"pride"});`

n: TURUNKAN TENAGA MANUSIA ANDA KE TAHAP SIFAR

n: UNTUK MELINDUNGI KEPERLUAN FIZIKAL + SOSIAL + MORAL MANUSIA ANDA, ANDA BOLEH PILIH:

n: TAKUT *DICEDERAKAN* #harm#

n: TAKUT *TIDAK DISAYANGI* #alone#

n: DAN TAKUT *JADI ORANG YANG JAHAT* #bad#

`Game.OVERRIDE_TEXT_SPEED = 1.25;`

n4: (TIPS: GUNAKAN PILIHAN YANG PALING MENAKUTKAN ANDA~)

h: ...

```
hong({body:"putaway"});
sfx("rustle");
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

(...1000)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h: rasanya dah tiba masa untuk main telefon aku.

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: LINDUNGI MANUSIA ANDA.

n: DARIPADA DUNIA. DARIPADA ORANG LAIN. DARIPADA DIRI MEREKA SENDIRI.

n: SEMOGA BERJAYA.

(...500)

`Game.clearText()`

(...500)

(#act1c)

# act1c

`music('battle', {volume:0.5})`

n: PUSINGAN PERTAMA: *MULA!*

`bb({body:"normal", mouth:"normal", eyes:"normal"});`

h: Hah. Facebook kata hujung minggu ni ada parti.

`bb({eyes:"uncertain"});`

b: Bukankah si pelik tu buat parti *setiap* hujung minggu?

`bb({eyes:"uncertain_right"});`

b: Kekosongan dalaman apa yang dia cuba isi agaknya? Mesti jiwa dia kacau!

`hong({eyes:"surprise"});`

h: Tapi…aku dapat jemputan?

`bb({eyes:"fear", mouth:"normal"});`

b: Oh kalau macam tu!

[Terima. Atau kita akan mati disebabkan kesunyian](#act1c_loner)

[Tolak. Parti tu penuh dengan dadah!](#act1c_drugs)

[Abaikan saja, kita akan buat suasana parti jadi muram.](#act1c_sad)

# act1c_loner

{{if _.fifteencigs}}
b: 15 batang rokok sehari, manusia! 15!
{{/if}}

{{if !_.fifteencigs}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if !_.fifteencigs}}
b: Kemudian tak ada siapa pun datang ke pengebumian kita, abu kita dicampak ke laut, kita dimakan ikan paus,
{{/if}}

{{if !_.fifteencigs}}
b: dan akhirnya kita jadi NAJIS PAUS!
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
b: Jadi ya, kita kena pergi ke parti tu!
{{/if}}

{{if _.parasite}}
b: Tapi bawa komputer riba sekali supaya kita boleh buat kerja dan tak jadi sampah masyarakat.
{{/if}}

{{if _.whitebread}}
b: Asalkan mereka tak hidang ROTI PUTIH.
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: YA TUHAN. Kalau tu boleh buat kau diam, baiklah.

h: Aku akan terima jemputan tu.

{{if _.whalepoop}}
b: Najis paus manusia! Najis paus!
{{/if}}

`_.partyinvite="yes"`

(#act1d)

# act1c_drugs

`bb({mouth:"small", eyes:"fear"});`

{{if _.whitebread}}
b: Atau lebih teruk lagi... ROTI PUTIH.
{{/if}}

{{if _.whitebread}}
`Game.OVERRIDE_TEXT_SPEED = 1.5;`
{{/if}}

{{if _.whitebread}}
b: Kita akan terlebih ambil syabu dan roti putih sampai mayat kita tak muat masuk dalam relau pembakaran mayat!
{{/if}}

{{if !_.whitebread}}
b: Kita akan terlebih dos dengan macam-macam dadah sampai pengurus jenazah pun pelik macam mana badan kita *sudah siap* dirias terlebih dahulu!
{{/if}}

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.parasite}}
b: Lagipun, tak boleh berparti. Kita kena buat kerja. Kalau tak, kita ni sampah masyarakat yang teruk!
{{/if}}

`hong({mouth:"anger", eyes:"anger"});`

h: YA TUHAN. Kalau tu boleh buat kau diam, baiklah.

h: Aku akan tolak jemputan tu.

`_.partyinvite="no"`

(#act1d)

# act1c_sad

`bb({eyes:"uncertain_right", mouth:"normal"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

{{if _.fifteencigs}}
b: Kita hanya menangis di sudut bilik memikirkan kesunyian yang sama bahaya seperti merokok 15 batang sehari.
{{/if}}

{{if _.parasite}}
b: Perkara yang kita buat di parti pun cuma risau yang kita sepatutnya jadi produktif.
{{/if}}

{{if _.whitebread}}
b: Kita asyik risau makanan tak sihat di situ akan membunuh kita!
{{/if}}

```
bb({mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"lookaway"});
```

h: Hm, aku tertanya-tanya.

`hong({eyes:"neutral"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: Kalau kita pergi, kita akan buat orang rasa tak selesa, tapi kalau kita tolak jemputan pun kita buat orang rasa sedih!

`bb({body:"fear", eyes:"fear"});`

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

b: KITA ASYIK BUAT ORANG RASA TAK SELESA, JADI KITA PATUT RASA BERSALAH

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "bad");
```

(...2500)

`hong({mouth:"anger", eyes:"anger"});`

h: Kalau tu boleh buat kau diam, baiklah.

h: Aku akan abaikan jemputan tu.

`_.partyinvite="ignore"`

(#act1d)

# act1d

```
bb({body:"normal", mouth:"normal", eyes:"normal"});
hong({mouth:"neutral", eyes:"annoyed"});
```

h: Apa-apalah. Facebook ni serabut sangat. Aku perlukan sesuatu yang tenang sikit, yang kurang buat aku cemas.

`hong({eyes:"neutral"});`

h: Apa cerita kat Twitter?

`bb({eyes:"look"});`

[Eh, tengok berita buruk tu!](#act1d_news)

[Alamak, adakah ciapan tu sebenarnya tentang *kita?*](#act1d_subtweet)

[Eh, GIF kucing minum susu!](#act1d_milk)


# act1d_news

```
bb({eyes:"pained1"});
music(null, {fade:2});
```

b: Ya Tuhan, rasa macam dunia tengah terbakar, kan?

```
bb({eyes:"pained2"});
hong({mouth:"sad", eyes:"sad"});
```

b: Rasa macam semuanya nak kiamat, macam semua akan mati dan kita tak boleh buat apa-apa pun.

```
Game.OVERRIDE_TEXT_SPEED = 0.5;
bb({mouth:"shut"});
```

b: ...

`bb({mouth:"smile", eyes:"smile"});`

b: Jom kita retweet cerita tu!

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

h: Okey, aku retweet. Janji kau diam!

`hong({mouth:"neutral", eyes:"annoyed"});`

h: Argh, sudahlah, mari tengok Snapchat.

(#act1e)


# act1d_subtweet

`bb({eyes:"fear"});`

b: Tu subtweet! Subtweet yang licik dan penuh makna tersembunyi!

`hong({eyes:"annoyed"});`

h: Mungkin tak?

`bb({eyes:"narrow", mouth:"small"});`

b: Tapi macam mana kalau semua orang mengata kita?

h: Mereka ta--

`bb({body:"fear", eyes:"fear", mouth:"normal"});`

b: DI BELAKANG KITA!

`hong({eyes:"sad", mouth:"sad"});`

h: Aku t--

`bb({eyes:"narrow", mouth:"small"});`

b: tapi *kalau betul*

h: A--

`bb({eyes:"narrow_eyebrow"});`

b: *kalau betul*

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

h: o–KEY, nak cuba Snapchat.

(#act1e)

# act1d_milk

`hong({mouth:"smile", eyes:"neutral"});`

h: Hah, comel juga ni. Baru je retweet tadi, aku ras—

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: KUCING TAK BOLEH HADAM SUSU DAN KITA ORANG YANG KEJI SEBAB SUKA PENYEKSAAN HAIWAN!

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

h: o–KEY, nak cuba Snapchat.

(#act1e)

# act1e

`hong({mouth:"neutral", eyes:"neutral"});`

h: Eh, gambar malam tadi! Jadi *macam tu* rupanya parti mingguan.

{{if _.partyinvite=="yes"}} (#act1e_said_yes) {{/if}}

{{if _.partyinvite=="no"}} (#act1e_said_no) {{/if}}

{{if _.partyinvite=="ignore"}} (#act1e_said_ignore) {{/if}}

# act1e_said_yes

`hong({mouth:"sad", eyes:"annoyed"});`

h: Alamak, parti ni macam terlalu sesak untuk tahap keresahan aku.

h: Mungkin aku tak patut terima jemputan tu?

```
hong({mouth:"neutral", eyes:"neutral"});
bb({mouth:"normal", eyes:"normal"});
```

[Ubah jawapan kita? Seperti orang tiada pendirian?!](#act1e_yes_dontchange)

[Ubah jawapan kita! Terlalu sesaklah!](#act1e_yes_changetono)

{{if _.subtweet}}
[Ya, mereka memang subtweet kita.](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[Eh, kita retweet tanpa semak fakta tadi.](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[Tahu tak, postur badan kau sangat teruk?](#act1e_ignore_posture)
{{/if}}

# act1e_yes_dontchange

```
bb({eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Mereka harapkan kita datang dan tiba-tiba kita nak khianati kepercayaan mereka? Kau nak mati keseorangan ke?!

{{if _.fifteencigs}}
b: LIMA. BELAS. BATANG. ROKOK.
{{/if}}

{{if _.whalepoop}}
b: NAJIS. PAUS.
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

h: Diam, diam, aku nak pergi juga!

(#act1f)

# act1e_yes_changetono

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Kau tahu tak tentang rempuhan manusia?

```
bb({body:"fear", mouth:"small", eyes:"narrow"});
hong({eyes:"sad", mouth:"sad"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Pada tahun 2003, sebuah kelab malam di Rhode Island terbakar, orang berebut nak keluar menyebabkan pintu tersekat dan 100 orang terbakar sampai mati-

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
hong({mouth:"shock"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: KAU NAK BENDA TU JADI KAT KITA KE-

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 2.5;
```

b: TAK NAK, TAK NAK, TAK NAK, TAK NAK, TAK NAK, TAK NAK, TAK NAK, TAK NAK, TAK N-


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

h: Diam, diam! Okey, okey aku tolak jemputan tu! Kau ni!

(#act1f)

# act1e_said_no

`hong({mouth:"sad", eyes:"sad"});`

h: Hmm… tapi nampak macam seronok.

h: Mungkin aku tak patut tolak jemputan tu?

`bb({mouth:"normal", eyes:"normal"});`

[Ubah jawapan kita? Macam orang tiada pendirian?!](#act1e_no_dontchange)

[Ubah jawapan kita! Jangan mati keseorangan!](#act1e_no_changetoyes)

{{if _.subtweet}}
[Ya, mereka memang subtweet kita.](#act1e_ignore_subtweet)
{{/if}}

{{if _.badnews}}
[Eh, kita retweet tanpa semak fakta!](#act1e_ignore_factcheck)
{{/if}}

{{if (!_.subtweet && !_.badnews)}}
[Kau tahu tak, postur badan kau sangat teruk?](#act1e_ignore_posture)
{{/if}}

# act1e_no_dontchange

`bb({eyes:"anger"})`

b: Semua orang mengharapkan kita!

b: …untuk meninggalkan mereka dan biar mereka menikmati parti tu tanpa makhluk menjijikkan {{if _.whitebread}}white-bread-munching{{/if}}macam kit-


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

h: Diam diam, aku tak nak pergi juga!

(#act1f)

# act1e_no_changetoyes

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Kesunyian kronik boleh naikkan paras kortisol kita dan juga risiko penyakit jantung serta strok!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "harm");
```

(...2500)

{{if _.fifteencigs}}
b: LIMA. BELAS. BATANG. ROKOK.
{{/if}}

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({mouth:"anger", eyes:"anger"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Diam, diam! Okey, okey, aku terima jemputan tu! Kau ni!

(#act1f)

# act1e_ignore_subtweet

```
bb({eyes:"fear", mouth:"small"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Semua ciapan bermasalah kita dulu akan kembali menghantui kita!

```
bb({body:"fear", eyes:"fear", mouth:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.7;
```

b: Kita akan dikecam dan diikat pada kuda lalu diheret ke mahkamah media sosial!

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

h: Kenapa kau macam ni?!

(#act1f)

# act1e_ignore_factcheck

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Kita sedang sebarkan maklumat palsu! Kita rosakkan kepercayaan orang terhadap media bebas!

```
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Kita menjadi punca fahaman fasis bangkit daripada runtuhan demokrasi!

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

h: Kenapa kau macam ni?!

(#act1f)

# act1e_ignore_posture

```
bb({eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Kau nak tulang belakang bentuk pretzel ke?! Jangan duduk bongkok depan skrin!

```
bb({body:"meta"});
```

b: Ya, kau juga!

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

h: Kenapa kau macam ni?!

(#act1f)

# act1e_said_ignore

`hong({mouth:"sad", eyes:"sad"});`

h: Hmm… tapi nampak macam seronok.

h: Mungkin aku tak patut abaikan jemputan tu?

`bb({mouth:"normal", eyes:"normal"});`

[Abaikan je. Kita tetap si perosak parti.](#act1e_ignore_continue)

[Terima jelah.](#act1e_ignore_changetoyes)

[Tolak jelah.](#act1e_ignore_changetono)

# act1e_ignore_continue

`hong({eyes:"annoyed"});`

h: Tapi… macam biadab kan kalau terus abaikan mereka?

`bb({eyes:"normal_right"});`

b: Orang lain pun selalu abaikan *kita*, jadi

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`bb({eyes:"normal"});`

b: Jadi anggaplah kita balas balik.

(#act1f)

# act1e_ignore_changetoyes

`hong({eyes:"surprise", mouth:"smile"});`

h: Kau… bagi aku untuk berseronok?

b: Yelah, lagipun, kesunyian tu *boleh* membunuh kita.

`hong({eyes:"neutral", mouth:"neutral"});`

(#act1e_no_changetoyes)

# act1e_ignore_changetono

`bb({eyes:"narrow"});`

b: Sesak sangatlah. Orang ramai boleh membahayakan kita.

(#act1e_yes_changetono)


# act1f

```
hong({mouth:"neutral", eyes:"neutral"});
bb({body:"normal", mouth:"normal", eyes:"normal"});
```

h: Apa-apalah. Eh, notifikasi Tinder baru!

`bb({eyes:"uncertain"})`

b: Apa? Aplikasi cari pasangan tu?

`hong({eyes:"annoyed"})`

h: Bukan aplikasi cari pasangan, cuma cara lain nak kenal orang baru-

`bb({eyes:"narrow"})`

b: Tu aplikasi cari pasangan.

```
hong({eyes:"surprise", mouth:"smile"});
bb({eyes:"normal"});
```

h: Oh! Aku dapat match! Comelnya dia!

```
bb({eyes:"narrow_eyebrow"});
hong({eyes:"sad", mouth:"anger"})
```

h: Tolong jangan rosakkan--

```
bb({body:"panic"});
Game.OVERRIDE_TEXT_SPEED = 2.0;
```

b: BAHAYA BAHAYA BAHAYA BAHAYA BAHAYA BAHAYA

`bb({body:"fear", eyes:"fear", mouth:"normal"})`

[Kita *dipergunakan* oleh orang lain.](#act1f_used_by_others)

[Kita cuma *mempergunakan* orang lain.](#act1f_using_others)

[DIA TU SEORANG PEMBUNUH BERSIRI](#act1f_killer)

# act1f_used_by_others

`bb({body:"point_crotch", eyes:"normal", mouth:"normal"})`

b: Hubungan kasual mungkin boleh mengisi masa lapang kita,

b: tapi ia takkan pernah isi kekosongan...

`bb({body:"point_heart", eyes:"pretty", mouth:"small"})`

b: di *sini*.

(...1000)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Maksudnya, KITA AKAN MATI KESEORANGAN!

```
hong({mouth:"shock", eyes:"shock"});
attack("18p", "alone");
```

(...2500)

`_.hookuphole=true`

(#act1g)

# act1f_using_others

`bb({eyes:"narrow", mouth:"small"})`

b: Kau fikir hati orang lain macam Pokémon yang kita boleh kumpul?

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

b: ♫ (lagu tema Pokémon)

(...5600)

```
bb({mouth:"normal"});
Game.FORCE_TEXT_DURATION = 2400;
```

b: ♫ Aku nak jadi yang terbaik,

(...500)

```
bb({eyes:"narrow", mouth:"small"});
Game.FORCE_TEXT_DURATION = 2100;
```

b: ♫ Tiada siapa dapat lawan,

(...1500)

```
bb({eyes:"pretty"});
Game.FORCE_TEXT_DURATION = 2300;
```

b: ♫ Hati bertahut, senyum berseri,

(...500)

```
bb({eyes:"fear", mouth:"normal"});
Game.FORCE_TEXT_DURATION = 2000;
```

b: ♫ Dalam misi cinta sejati!

(...1000)

```
bb({eyes:"smile", mouth:"smile"});
Game.FORCE_TEXT_DURATION = 1000;
```

b: ♫ RAKSASA-MIANG! TANGKAP DI-

```
Game.FORCE_CANT_SKIP = false;
Game.clearText();
music(false);
bb({body:"normal", mouth:"normal", eyes:"normal"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Masalahnya, kita manusia jijik yang suka memanipulasi orang lain.

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
b: Mereka akan buang kita dalam perigi, paksa kita makan roti putih sampai kita gemuk dan pakai kulit kita sebagai sut.
{{/if}}

{{if _.parasite}}
b: Mereka akan hempuk kau dengan jam pomodoro dan jerit “PARASIT MACAM KAU PATUT JADI LEBIH PRODUKTIF”
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: Mereka akan hancurkan daging kau menjadi konfeti, gunakan usus kau sebagai ular-ular dan jadikan darah kau sebagai air sirap! 
{{/if}}

{{if !_.whitebread && !_.parasite}}
b: HAH! Kau nak jumpa orang-orang macam ni kat parti tu?!
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

h: aku dah tak tahan dengan semua ni.

(...700)

`Game.OVERRIDE_TEXT_SPEED = 1.5;`

h:
{{if _.fifteencigs}}"kesunyian boleh membunuh kita"... {{/if}}
{{if _.parasite}}"kita menjadi sampah masyarakat"... {{/if}}
{{if _.whitebread}}"jangan makan itu ini"... {{/if}}
{{if _.subtweet}}"mereka mengutuk kita"... {{/if}}
{{if _.badnews}}"dunia tengah terbakar"... {{/if}}
{{if _.hookuphole}}"kita akan mati keseorangan"... {{/if}}
{{if _.serialkiller}}"mereka pembunuh bersiri"... {{/if}}
{{if _.catmilk}}"kucing tak boleh hadam susu"... {{/if}}
{{if _.pokemon}}lagu parodi pokemon... {{/if}}

h: aku nak hidup cara aku.

h: aku nak lari dari semua…kesengsaraan ni.

`bb({eyes:"look_sad"});`

b: Manusia…

`Game.OVERRIDE_TEXT_SPEED = 0.5;`

b: Semua akan baik-baik je.

(...600)

`bb({body:"point_heart", eyes:"look_sad_smile", mouth:"smile"});`

b: Sebagai serigala pengawal yang setia, aku akan buat sebaik mungkin untuk mengawasi dan memastikan kau selamat.

`bb({body:"normal", eyes:"look_sad", mouth:"smile"});`

b: Aku janji.

(...600)

```
bb({body:"normal", eyes:"normal", mouth:"normal"});
hong({body:"phone1", eyes:"neutral", mouth:"neutral"});
```

h: Aplikasi terakhir. Instagram. Apa yang menarik?

`hong({eyes:"sad"});`

h: Penuh dengan…gambar parti.

`hong({mouth:"sad"});`

h: Semua orang nampak gembira. Bebas dari kerisauan. Bebas dari keresahan.

`hong({mouth:"anger"});`

h: Ya Tuhan, kenapa aku tak boleh jadi macam mereka? Kenapa aku tak boleh jadi *orang biasa?*

`bb({eyes:"normal_right"});`

b: Cakap tentang parti, ni keputusan TERAKHIR aku untuk jemputan hujung minggu ni:

`bb({eyes:"normal"});`

[Kita patut pergi.](#act1g_go) `Game.OVERRIDE_CHOICE_LINE=true`

[Kita tak patut pergi.](#act1g_dont) `Game.OVERRIDE_CHOICE_LINE=true`

# act1g_go

`_.act1g = "go"`

(#act1h)

# act1g_dont

`_.act1g = "dont"`

(#act1h)

# act1h

b: Kita pat–

```
bb({eyes:"wat", mouth:"small"});
hong({body:"2_fuck"});
```

h: *^SIAL^.*

`hong({body:"2_you"});`

h: KAU.

(...500)

b: a

(...1500)

`bb({eyes:"wat_2"});`

b: apa?

`hong({body:"phone1", eyes:"anger", mouth:"anger"});`

h: Aku akan beritahu mereka yang aku AKAN PERGI ke parti tu

{{if _.act1g=="go"}}
h: BUKAN sebab kau yang suruh aku pergi, tapi sebab *AKU* yang nak pergi.
{{/if}}

{{if _.act1g=="dont"}}
h: SEBAB kau tak nak aku pergi.
{{/if}}

```
hong({body:"putaway"});
sfx("rustle");
```

h: Kau *TAK BOLEH* kawal aku.

```
sfx("rustle2");
hong({body:"0_sammich", eyes:"0_annoyed", mouth:"0_neutral"});
```

h: Dah, jangan kacau aku. Aku nak makan sandwic ni dengan tenang.

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

[AHHHH KITA AKAN MATI](#act1h_death) `Game.OVERRIDE_CHOICE_LINE = true;`

[AHHHH SEMUA ORANG BENCI KITA](#act1h_loneliness) `Game.OVERRIDE_CHOICE_LINE = true;`

[AHHHH KITA ORANG YANG KEJI](#act1h_worthless) `Game.OVERRIDE_CHOICE_LINE = true;`

# act1h_death

```
bb({body:"fear"});
Game.OVERRIDE_TEXT_SPEED = 3;
```

b: AHHHH KITA AKAN MATI AAAAAAHHHHHHH

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

b: AHHHH SEMUA ORANG BENCI KITA AAAAAAHHHHHHH

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

b: AHHHH KITA ORANG YANG KEJI AAAAAAHHHHHHH

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

n: TAHNIAH

(...500)

n: ANDA BERJAYA MELINDUNGI KEPERLUAN FIZIKAL + SOSIAL + MORAL MANUSIA ANDA

n: WAH, LIHAT BETAPA BERTERIMA KASIHNYA MEREKA!

(...500)

n: SEKARANG MEREKA TIADA TENAGA, ANDA BOLEH MENGAWAL SEGALA GERAK-GERI MEREKA

`bb({mouth:"smile", eyes:"normal"});`

n: PILIH GERAKAN PENGHABISAN ANDA

`bb({mouth:"small_lock", eyes:"fear"});`

n: *HANCURKAN MEREKA*

[{LAWAN: Hancurkan telefon pintarnya!}](#act1i_phone) `Game.OVERRIDE_CHOICE_LINE=true`

[{LARI: Suruh dia meringkuk macam bola dan menangis!}](#act1i_cry) `Game.OVERRIDE_CHOICE_LINE=true`

# act1i_phone

`bb({mouth:"normal", eyes:"narrow"})`

b: Telefon pintar kaulah punca serangan panik kau!

`bb({eyes:"anger"})`

b: Zuckerberg dan syarikatnya sedang menjadikan kesihatan mental kau sebagai alat untuk mengaut keuntungan!

```
bb({body:"fear", eyes:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Buang telefon pintar kau! Pecahkannya! Hancurkannya!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "fight";
```

b: HANCURKAN HANCURKAN HANCURKAN HANCURKAN HANCURKAN HANCURKAN HANCURKAN HANCURK--

(#act1j)

# act1i_cry

`bb({eyes:"fear", mouth:"normal"})`

b: Dunia ni penuh dengan ancaman!

```
bb({body:"fear"});
hong({body:"3_defeated2"});
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

b: Buat macam armadilo! Meringkuk macam bola untuk lindungi diri kau!

```
Game.OVERRIDE_TEXT_SPEED = 2.5;
bb({body:"flail"});
hong({body:"3_defeated3"});
_.act1_ending = "flight";
```

b: MERINGKUK DAN MENANGIS MERINGKUK DAN MENANGIS MERINGKUK DAN MENANGIS MERINGKUK DAN MENANG--

(#act1j)

# act1j

`SceneSetup.act1_outro()`