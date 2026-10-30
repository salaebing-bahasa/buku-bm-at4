// หนังสือเรียนภาษามลายู ชั้น อต.4 (แปลงจาก BukuTeks_BM_AT4.docx)
// ข้อความสองภาษาเขียนแบบ "ภาษามลายู||ภาษาไทย"
module.exports = {
  grade: 4,
  lede_ms: "Berlatih menyebut perkataan dan ayat, berbual dengan ayat sapaan asas, golongan kata (kata nama, kata kerja dan kata sifat), serta perkataan tentang makanan, hari kebesaran Islam, tempat, solat sunat, puasa sunat dan aurat dalam 11 pelajaran. Setiap pelajaran disertakan sebutan perkataan yang boleh didengar, latihan beserta jawapan, dan kuiz kendiri. Seluruh buku menggunakan bahasa Melayu standard.",
  lede: "ฝึกออกเสียงคำและประโยค การสนทนาด้วยประโยคทักทายพื้นฐาน ชนิดของคำ (คำนาม คำกริยา คำวิเศษณ์) และคำศัพท์เกี่ยวกับอาหาร วันสำคัญในอิสลาม สถานที่ การละหมาดสุนัต การถือศีลอดสุนัต และเอาเราะฮ์ 11 บท ทุกบทฟังเสียงคำศัพท์ได้ มีแบบฝึกหัดพร้อมเฉลย และแบบทดสอบตนเอง ใช้ภาษามลายูมาตรฐานทั้งเล่ม",
  preface_ms: [
    "Buku teks Bahasa Melayu ini disediakan untuk murid Tahun 4 Kurikulum Pendidikan Islam Peringkat Awal. Buku ini memberi tumpuan kepada sebutan perkataan dan ayat, perbualan menggunakan ayat sapaan asas, golongan kata (kata nama, kata kerja dan kata sifat), serta perkataan tentang makanan, hari kebesaran Islam, tempat, solat sunat, puasa sunat dan aurat.",
    "Kandungan buku ini dibahagikan kepada 11 pelajaran. Setiap pelajaran mengandungi objektif pembelajaran, isi pelajaran, latihan dan nilai murni. Di bahagian akhir buku terdapat glosari dan jawapan latihan. Bahasa yang digunakan ialah bahasa Melayu standard sepenuhnya.",
  ],
  preface: [
    "หนังสือเรียนภาษามลายูเล่มนี้จัดทำขึ้นสำหรับผู้เรียนชั้นปีที่ 4 หลักสูตรอิสลามศึกษาตอนต้น (อต.4) เน้นการออกเสียงคำและประโยค การสนทนาด้วยประโยคทักทายพื้นฐาน ชนิดของคำ (คำนาม คำกริยา คำวิเศษณ์) และคำศัพท์เกี่ยวกับอาหาร วันสำคัญในอิสลาม สถานที่ การละหมาดสุนัต การถือศีลอดสุนัต และอวัยวะที่ต้องปกปิด (เอาเราะฮ์)",
    "เนื้อหาแบ่งเป็น 11 บท แต่ละบทมีจุดประสงค์การเรียนรู้ เนื้อหา แบบฝึกหัด และข้อคิด ท้ายเล่มมีอภิธานศัพท์และเฉลยแบบฝึกหัด ภาษาที่ใช้เป็นภาษามลายูมาตรฐาน (Bahasa Melayu Standard) ทั้งหมด",
  ],
  indicators_ms: [
    "Menyebut perkataan dan ayat yang ditetapkan",
    "Berbual menggunakan ayat sapaan asas yang ditetapkan",
    "Membaca dan menulis ayat menggunakan kata nama, kata kerja dan kata sifat",
    "Menyatakan maksud dan mengenal pasti golongan kata yang didengar",
    "Menyatakan maksud perkataan yang ditetapkan",
    "Menghargai nilai dan kepentingan penggunaan bahasa Melayu yang ditetapkan",
  ],
  indicators: [
    "ออกเสียงคำและประโยคที่กำหนด",
    "สนทนาโดยใช้ประโยคทักทายพื้นฐานที่กำหนด",
    "อ่านและเขียนประโยคโดยใช้คำนาม คำกริยาและคำวิเศษณ์",
    "บอกความหมายและระบุชนิดของคำจากการฟัง",
    "บอกความหมายของคำศัพท์ที่กำหนด",
    "เห็นคุณค่าและความสำคัญในการใช้ภาษามลายูที่กำหนด",
  ],
  units: [
    // ---------------------------------------------------------------- 1
    {
      title: "Salam dan Sapaan", th: "ประโยคทักทายพื้นฐาน", indicators: [1, 2, 6],
      objectives: ["Menggunakan ucapan sapaan mengikut waktu dengan betul||ใช้คำทักทายตามช่วงเวลาได้ถูกต้อง", "Berbual untuk menyapa dan bertanya khabar||สนทนาทักทายและถามทุกข์สุขได้"],
      sections: [
        { title: "Ucapan mengikut waktu  คำทักทายตามช่วงเวลา", blocks: [
          { type: "table", head: ["Ucapan", "Maksud||ความหมาย", "Digunakan||ใช้เมื่อ"], rows: [
            ["**Assalamualaikum**", "ขอความสันติสุขจงมีแด่ท่าน", "Pada bila-bila masa (sesama Muslim)||ทุกเวลา (ระหว่างมุสลิม)"],
            ["**Selamat pagi**", "สวัสดีตอนเช้า", "Waktu pagi hingga kira-kira 12.00||เช้า ถึงประมาณ 12.00 น."],
            ["**Selamat tengah hari**", "สวัสดีตอนกลางวัน", "Kira-kira 12.00 – 14.00||ประมาณ 12.00 – 14.00 น."],
            ["**Selamat petang**", "สวัสดีตอนบ่าย / เย็น", "Petang hingga sebelum malam||บ่ายถึงก่อนค่ำ"],
            ["**Selamat malam**", "สวัสดีตอนกลางคืน", "Waktu malam||กลางคืน"],
            ["**Selamat datang**", "ยินดีต้อนรับ", "Menyambut tetamu||ต้อนรับแขก"],
            ["**Selamat jalan / Selamat tinggal**", "เดินทางปลอดภัย / ลาก่อน", "Ketika berpisah||ตอนจากกัน"],
          ] },
          { type: "note", title: "Bahasa standard||ภาษามาตรฐาน", lines: [
            "Dalam bahasa Melayu standard, **Selamat tengah hari** digunakan untuk waktu tengah hari (*selamat siang* ialah bahasa Indonesia).||ในภาษามลายูมาตรฐานใช้ **Selamat tengah hari** สำหรับช่วงกลางวัน (คำว่า *selamat siang* เป็นภาษาอินโดนีเซีย)",
            "**Selamat jalan** diucapkan kepada orang yang akan pergi, manakala **Selamat tinggal** diucapkan oleh orang yang pergi kepada orang yang tinggal.||**Selamat jalan** พูดกับคนที่กำลังจะจากไป ส่วน **Selamat tinggal** คนที่จากไปพูดกับคนที่อยู่",
          ] },
        ] },
        { title: "Mari bertutur  มาพูดกันเถอะ", blocks: [
          { type: "dialog", lines: [
            ["Hakim", "Assalamualaikum, Pak Cik. Selamat pagi."],
            ["Pak Cik Daud", "Waalaikumussalam. Selamat pagi, Hakim. Apa khabar?"],
            ["Hakim", "Khabar baik, Pak Cik. Pak Cik apa khabar?"],
            ["Pak Cik Daud", "Alhamdulillah, baik. Hendak ke mana?"],
            ["Hakim", "Saya hendak ke sekolah. Selamat tinggal, Pak Cik."],
            ["Pak Cik Daud", "Selamat jalan."],
          ] },
        ] },
      ],
      latihan: [
        { q: "Pilih ucapan sapaan yang sesuai dengan waktu.||เลือกคำทักทายให้เหมาะกับเวลา", items: ["07.30  →  ____________", "12.30  →  ____________", "16.00  →  ____________", "20.00  →  ____________"], answers: "Selamat pagi, Selamat tengah hari, Selamat petang, Selamat malam" },
        { q: "Jawab ucapan sapaan.||ตอบคำทักทาย", items: ["Assalamualaikum.  →  ____________", "Apa khabar?  →  ____________"], answers: "Waalaikumussalam; Khabar baik." },
        { q: "Lakonkan perbualan bersapa dengan rakan sebanyak 6 ayat.||แสดงบทสนทนาทักทายกับเพื่อน 6 ประโยค" },
      ],
      nilai: "การให้สลามเป็นซุนนะฮ์ของท่านนบี ทำให้เกิดความรักใคร่กันในหมู่มุสลิม",
      nilai_ms: "Memberi salam ialah sunah Rasulullah SAW yang menumbuhkan kasih sayang sesama Muslim.",
    },
    // ---------------------------------------------------------------- 2
    {
      title: "Semalam, Hari Ini dan Esok", th: "เมื่อวาน วันนี้ และพรุ่งนี้", indicators: [1, 3, 5],
      objectives: ["Menggunakan kata keterangan waktu semalam, hari ini, esok, kelmarin dan lusa dengan betul||ใช้คำบอกเวลา semalam, hari ini, esok, kelmarin, lusa ได้ถูกต้อง", "Menulis ayat tentang aktiviti mengikut waktu||เขียนประโยคบอกกิจกรรมตามเวลาได้"],
      sections: [
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", rows: [["kelmarin", "کلمارين", "เมื่อวานซืน"], ["semalam", "سمالم", "เมื่อวาน"], ["hari ini", "هاري اين", "วันนี้"], ["esok", "ايسوق", "พรุ่งนี้"], ["lusa", "لوسا", "มะรืนนี้"]] },
          { type: "pattern", lines: [
            "**Semalam** saya pergi ke pasar.||เมื่อวานฉันไปตลาด",
            "**Hari ini** hari Jumaat.||วันนี้วันศุกร์",
            "**Esok** kami akan berpuasa.||พรุ่งนี้เราจะถือศีลอด",
          ] },
          { type: "note", title: "Bahasa standard||ภาษามาตรฐาน", lines: [
            "Bahasa Melayu standard menggunakan **esok** (*besok* ialah bahasa Indonesia), **kelmarin** untuk hari sebelum semalam, dan **semalam** untuk hari sebelum hari ini.||ภาษามลายูมาตรฐานใช้ **esok** = พรุ่งนี้ (*besok* เป็นภาษาอินโดนีเซีย) และ **kelmarin** = เมื่อวานซืน, **semalam** = เมื่อวาน",
          ] },
        ] },
      ],
      latihan: [
        { q: "Jika hari ini hari Rabu, isikan nama hari.||ถ้าวันนี้คือวันพุธ (Rabu) จงเติมชื่อวัน", items: ["semalam = hari ______", "esok = hari ______", "lusa = hari ______", "kelmarin = hari ______"], answers: "Selasa, Khamis, Jumaat, Isnin" },
        { q: "Isikan semalam / hari ini / esok.||เติม semalam / hari ini / esok", items: ["______ saya sudah membaca al-Quran.", "______ kami akan pergi ke Yala.", "______ cuaca panas."], answers: "Semalam, Esok, Hari ini (jawapan lain yang munasabah juga diterima)||Semalam, Esok, Hari ini (คำตอบอื่นที่สมเหตุสมผลได้)" },
        { q: "Tulis aktiviti kamu semalam, hari ini dan esok, satu ayat bagi setiap satu.||เขียนกิจกรรมเมื่อวาน วันนี้ และพรุ่งนี้ของตนเอง อย่างละ 1 ประโยค", lines: 3 },
      ],
      nilai: "เวลาเป็นสิ่งมีค่า เมื่อวานผ่านไปแล้ว วันนี้ต้องทำให้ดีที่สุด",
      nilai_ms: "Masa amat berharga. Semalam sudah berlalu, maka hari ini kita mesti melakukan yang terbaik.",
    },
    // ---------------------------------------------------------------- 3
    {
      title: "Makanan", th: "อาหาร", indicators: [1, 3, 5, 6],
      objectives: ["Membaca dan menulis perkataan tentang makanan dan rasa||อ่านและเขียนคำศัพท์เกี่ยวกับอาหารและรสชาติได้", "Bertutur dan menulis ayat tentang makanan kegemaran||พูดและเขียนประโยคเกี่ยวกับอาหารที่ชอบได้"],
      sections: [
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", rows: [["nasi", "ناسي", "ข้าว"], ["roti", "روتي", "ขนมปัง โรตี"], ["ikan", "ايکن", "ปลา"], ["sayur", "سايور", "ผัก"], ["buah", "بواه", "ผลไม้"], ["air", "اير", "น้ำ"], ["sedap", "سدڤ", "อร่อย"], ["manis", "مانيس", "หวาน"], ["masin", "ماسين", "เค็ม"], ["pedas", "ڤدس", "เผ็ด"], ["lapar", "لاڤر", "หิว"], ["kenyang", "کڽڠ", "อิ่ม"]] },
        ] },
        { title: "Mari bertutur  มาพูดกันเถอะ", blocks: [
          { type: "dialog", lines: [
            ["Ibu", "Mari makan, anak-anak."],
            ["Ali", "Saya lapar, ibu. Apa lauk hari ini?"],
            ["Ibu", "Ikan bakar dan sayur."],
            ["Ali", "Bismillahirrahmanirrahim. Sedapnya!"],
            ["Ibu", "Jangan makan terlalu banyak."],
            ["Ali", "Alhamdulillah, saya sudah kenyang."],
          ] },
        ] },
      ],
      latihan: [
        { q: "Padankan perkataan dengan lawannya.||จับคู่คำตรงข้าม", items: ["lapar – ________", "manis – ________"], answers: "kenyang, masin (atau pahit)||kenyang, masin (หรือ pahit)" },
        { q: "Isikan perkataan  [ pedas · sedap · nasi ]||เติมคำ  [ pedas · sedap · nasi ]", items: ["Orang Melayu makan ______ setiap hari.", "Sambal ini sangat ______.", "Masakan ibu sangat ______."], answers: "nasi, pedas, sedap" },
        { q: "Tulis 2 ayat tentang makanan kegemaran kamu (Saya suka makan ... kerana ...)||เขียนอาหารที่ชอบ 2 ประโยค (Saya suka makan ... kerana ...)", lines: 2 },
      ],
      nilai: "มุสลิมเริ่มกินด้วยบิสมิลลาฮ์ กินด้วยมือขวา ไม่กินมากเกินไป และจบด้วยอัลฮัมดุลิลลาฮ์",
      nilai_ms: "Seorang Muslim memulakan makan dengan bismillah, makan dengan tangan kanan, tidak makan berlebihan dan mengakhirinya dengan alhamdulillah.",
    },
    // ---------------------------------------------------------------- 4
    {
      title: "Hari Kebesaran Islam", th: "วันสำคัญในอิสลาม", indicators: [1, 3, 5, 6],
      objectives: ["Menyebut nama hari kebesaran Islam dalam bahasa Melayu||บอกชื่อวันสำคัญในอิสลามเป็นภาษามลายูได้", "Menyatakan bulan bagi setiap hari kebesaran||บอกเดือนของวันสำคัญแต่ละวันได้"],
      sections: [
        { title: "Hari-hari kebesaran Islam  วันสำคัญในอิสลาม", blocks: [
          { type: "table", head: ["Hari kebesaran", "Bulan||เดือน", "Maksud||ความหมาย"], rows: [
            ["**Awal Muharam**", "1 Muharam", "Tahun baru Islam (tahun Hijrah)||วันขึ้นปีใหม่อิสลาม (ฮิจญ์เราะฮ์ศักราช)"],
            ["**Maulidur Rasul**", "12 Rabiulawal", "Memperingati kelahiran Nabi Muhammad SAW||วันรำลึกถึงการถือกำเนิดของท่านนบีมุฮัมมัด ﷺ"],
            ["**Israk dan Mikraj**", "27 Rejab", "Perjalanan malam dan naiknya Rasulullah SAW ke langit||การเดินทางยามค่ำคืนและการขึ้นสู่ฟากฟ้าของท่านนบี"],
            ["**Nuzul Quran**", "17 Ramadan", "Memperingati turunnya al-Quran yang pertama||วันรำลึกการประทานอัลกุรอานครั้งแรก"],
            ["**Hari Raya Aidilfitri**", "1 Syawal", "Hari raya selepas bulan Ramadan||วันรายอหลังเดือนเราะมะฎอน"],
            ["**Hari Raya Aidiladha**", "10 Zulhijah", "Hari Raya Haji (hari ibadah korban)||วันรายอฮัจญี (วันเชือดกุรบาน)"],
          ] },
          { type: "pattern", lines: [
            "Kita menyambut **Hari Raya Aidilfitri** pada **1 Syawal**.",
            "Pada **Hari Raya Aidiladha**, kita melakukan **korban**.",
          ] },
        ] },
      ],
      latihan: [
        { q: "Padankan hari kebesaran dengan bulannya.||จับคู่วันสำคัญกับเดือน", table: { head: ["Hari kebesaran", "Bulan"], rows: [["1) Hari Raya Aidilfitri", "ก.  Zulhijah"], ["2) Hari Raya Aidiladha", "ข.  Syawal"], ["3) Nuzul Quran", "ค.  Rabiulawal"], ["4) Maulidur Rasul", "ง.  Ramadan"]] }, answers: "1–ข, 2–ก, 3–ง, 4–ค" },
        { q: "Jawab soalan.||ตอบคำถาม", items: ["Tahun baru Islam bermula pada bulan apa?  ________", "Al-Quran diturunkan pada bulan apa?  ________"], answers: "Muharam, Ramadan" },
        { q: "Tulis 2 ayat tentang perkara yang dilakukan oleh keluarga kamu pada Hari Raya.||เขียน 2 ประโยคว่าครอบครัวทำอะไรในวันฮารีรายอ", lines: 2 },
      ],
      nilai: "วันสำคัญในอิสลามเตือนให้เรารำลึกถึงอัลลอฮ์และท่านนบี และเป็นโอกาสเยี่ยมเยียนขออภัยกัน",
      nilai_ms: "Hari kebesaran Islam mengingatkan kita kepada Allah dan Rasulullah SAW, dan menjadi peluang untuk saling menziarahi dan bermaaf-maafan.",
    },
    // ---------------------------------------------------------------- 5
    {
      title: "Tempat", th: "สถานที่", indicators: [1, 3, 5],
      objectives: ["Membaca dan menulis nama tempat||อ่านและเขียนชื่อสถานที่ได้", "Menggunakan kata sendi nama di, ke dan dari dengan tempat secara betul||ใช้คำบุพบท di, ke, dari กับสถานที่ได้ถูกต้อง"],
      sections: [
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", rows: [["masjid", "مسجد", "มัสยิด"], ["surau", "سوراو", "สุเหร่า"], ["sekolah", "سکوله", "โรงเรียน"], ["rumah", "رومه", "บ้าน"], ["pasar", "ڤاسر", "ตลาด"], ["kedai", "کداي", "ร้านค้า"], ["hospital", "هوسڤيتل", "โรงพยาบาล"], ["padang", "ڤادڠ", "สนาม"], ["kampung", "کامڤوڠ", "หมู่บ้าน"], ["bandar", "بندر", "เมือง"]] },
          { type: "pattern", title: "di • ke • dari", lines: [
            "**di** = tempat berada  →  Ayah solat **di** masjid.||**di** = ที่ (อยู่ที่)",
            "**ke** = arah tujuan  →  Saya pergi **ke** sekolah.||**ke** = ไปยัง",
            "**dari** = tempat asal  →  Kakak balik **dari** pasar.||**dari** = จาก",
          ] },
        ] },
      ],
      latihan: [
        { q: "Isikan di, ke atau dari.||เติม di, ke หรือ dari", items: ["Adik bermain ______ padang.", "Kami pergi ______ masjid.", "Ibu pulang ______ kedai.", "Nenek tinggal ______ kampung."], answers: "di, ke, dari, di" },
        { q: "Tulis perkataan bahasa Melayu.||เขียนคำภาษามลายู", items: ["โรงพยาบาล  ________", "ตลาด  ________", "หมู่บ้าน  ________"], answers: "hospital, pasar, kampung" },
        { q: "Tulis 3 ayat tentang tempat di kampung kamu.||เขียน 3 ประโยคเกี่ยวกับสถานที่ในหมู่บ้านของตนเอง", lines: 3 },
      ],
      nilai: "มัสยิดและสุเหร่าเป็นศูนย์กลางของชุมชนมุสลิม เราควรช่วยกันดูแลให้สะอาด",
      nilai_ms: "Masjid dan surau ialah pusat masyarakat Islam. Kita hendaklah bersama-sama menjaga kebersihannya.",
    },
    // ---------------------------------------------------------------- 6
    {
      title: "Kata Nama", th: "คำนาม", indicators: [3, 4, 5],
      objectives: ["Mengenal pasti kata nama dalam ayat yang didengar||ระบุคำนามในประโยคจากการฟังได้", "Menulis ayat menggunakan kata nama||เขียนประโยคโดยใช้คำนามได้"],
      sections: [
        { title: "Apakah kata nama?  คำนามคืออะไร", blocks: [
          { type: "p", text: "**Kata nama** ialah perkataan yang menamakan orang, haiwan, benda dan tempat.||**Kata nama** (คำนาม) คือคำที่เรียกชื่อคน สัตว์ สิ่งของ และสถานที่" },
          { type: "table", head: ["Jenis||ประเภท", "Contoh||ตัวอย่าง"], rows: [
            ["**orang**||คน", "guru, imam, murid, ibu, Ali"],
            ["**haiwan**||สัตว์", "kucing, lembu, ayam"],
            ["**benda**||สิ่งของ", "kain sarung, baju, sejadah, buku"],
            ["**tempat**||สถานที่", "masjid, sekolah, Pattani"],
          ] },
          { type: "pattern", lines: [
            "Ayah memakai **kain sarung**.",
            "**Imam** membaca **doa**.",
          ] },
        ] },
      ],
      latihan: [
        { q: "Dengar guru membaca ayat, kemudian sebut kata nama di dalamnya.||ฟังครูอ่านประโยค แล้วบอกคำนาม", items: ["Ibu membeli baju.", "Kucing tidur di bawah meja.", "Imam masuk ke masjid."], answers: "Ibu, baju; Kucing, meja; Imam, masjid" },
        { q: "Kelaskan kata nama: orang / haiwan / benda / tempat.||จัดกลุ่มคำนาม: คน / สัตว์ / สิ่งของ / สถานที่", items: ["sejadah  ________", "nelayan  ________", "kambing  ________", "pasar  ________"], answers: "benda, orang, haiwan, tempat||สิ่งของ, คน, สัตว์, สถานที่" },
        { q: "Bina ayat daripada kata nama: kain sarung, masjid.||แต่งประโยคจากคำนาม: kain sarung, masjid", lines: 2 },
      ],
      nilai: "การรู้ชื่อสิ่งต่าง ๆ ช่วยให้เราสื่อสารได้ชัดเจน",
      nilai_ms: "Mengetahui nama sesuatu membantu kita berkomunikasi dengan jelas.",
    },
    // ---------------------------------------------------------------- 7
    {
      title: "Kata Kerja", th: "คำกริยา", indicators: [3, 4, 5],
      objectives: ["Mengenal pasti kata kerja dalam ayat||ระบุคำกริยาในประโยคได้", "Menulis ayat menggunakan kata kerja||เขียนประโยคโดยใช้คำกริยาได้"],
      sections: [
        { title: "Apakah kata kerja?  คำกริยาคืออะไร", blocks: [
          { type: "p", text: "**Kata kerja** ialah perkataan yang menyatakan perbuatan atau keadaan.||**Kata kerja** (คำกริยา) คือคำที่บอกการกระทำหรือสภาพ" },
          { type: "vocab", rows: [["mandi", "مندي", "อาบน้ำ"], ["makan", "ماکن", "กิน"], ["minum", "مينوم", "ดื่ม"], ["tidur", "تيدور", "นอน"], ["membaca", "ممباچ", "อ่าน"], ["menulis", "منوليس", "เขียน"], ["berjalan", "برجالن", "เดิน"], ["bersolat", "برصلاة", "ละหมาด"], ["lapar", "لاڤر", "หิว"], ["dahaga", "دهاݢا", "กระหายน้ำ"]] },
          { type: "pattern", lines: [
            "subjek + **kata kerja**  →  Adik **tidur**.||ประธาน + **กริยา**",
            "subjek + **kata kerja** + objek  →  Kakak **membaca** al-Quran.||ประธาน + **กริยา** + กรรม",
          ] },
        ] },
      ],
      latihan: [
        { q: "Garis kata kerja.||ขีดเส้นใต้คำกริยา", items: ["Ayah minum kopi.", "Kami berjalan ke sekolah.", "Murid menulis nama."], answers: "minum, berjalan, menulis" },
        { q: "Isikan kata kerja  [ mandi · membaca · tidur ]||เติมคำกริยา  [ mandi · membaca · tidur ]", items: ["Saya ______ al-Quran selepas maghrib.", "Adik ______ pada pukul sembilan malam.", "Kami ______ sebelum ke sekolah."], answers: "membaca, tidur, mandi" },
        { q: "Tulis 3 ayat tentang rutin pagi kamu menggunakan kata kerja.||เขียนประโยค 3 ประโยคเกี่ยวกับกิจวัตรตอนเช้า โดยใช้คำกริยา", lines: 3 },
      ],
      nilai: "ทุกการกระทำของเราถ้าเริ่มด้วยเจตนาที่ดี (นียะฮ์) ก็จะได้รับผลบุญ",
      nilai_ms: "Setiap perbuatan kita yang dimulakan dengan niat yang baik akan mendapat pahala.",
    },
    // ---------------------------------------------------------------- 8
    {
      title: "Kata Sifat", th: "คำวิเศษณ์ (คำคุณศัพท์)", indicators: [3, 4, 5],
      objectives: ["Mengenal pasti kata sifat dalam ayat||ระบุคำวิเศษณ์ในประโยคได้", "Menggunakan kata sifat untuk menerangkan orang dan benda||ใช้คำวิเศษณ์บรรยายคนและสิ่งของได้"],
      sections: [
        { title: "Apakah kata sifat?  คำวิเศษณ์คืออะไร", blocks: [
          { type: "p", text: "**Kata sifat** ialah perkataan yang menerangkan sifat kata nama, seperti warna, saiz, perasaan dan perangai.||**Kata sifat** คือคำที่บอกลักษณะของคำนาม เช่น สี ขนาด ความรู้สึก นิสัย" },
          { type: "vocab", rows: [["putih", "ڤوتيه", "ขาว"], ["hitam", "هيتم", "ดำ"], ["besar", "بسر", "ใหญ่"], ["kecil", "کچيل", "เล็ก"], ["bersih", "برسيه", "สะอาด"], ["kotor", "کوتور", "สกปรก"], ["rajin", "راجين", "ขยัน"], ["malas", "مالس", "ขี้เกียจ"], ["penat", "ڤنت", "เหนื่อย"], ["gembira", "ݢمبيرا", "ดีใจ"]] },
          { type: "pattern", title: "Kedudukan kata sifat||ตำแหน่งของ kata sifat", lines: [
            "kata nama + **kata sifat**  →  baju **putih**, masjid **besar**||คำนาม + **คำวิเศษณ์**  →  baju **putih** (เสื้อสีขาว), masjid **besar** (มัสยิดใหญ่)",
            "subjek + **sangat** + kata sifat  →  Murid itu **sangat rajin**.||ประธาน + **sangat** + คำวิเศษณ์",
          ] },
        ] },
      ],
      latihan: [
        { q: "Garis kata sifat.||ขีดเส้นใต้คำวิเศษณ์", items: ["Ayah memakai baju putih.", "Kelas kami bersih.", "Saya penat selepas bersukan."], answers: "putih, bersih, penat" },
        { q: "Tulis lawan kata.||เขียนคำตรงข้าม", items: ["besar – ________", "rajin – ________", "bersih – ________"], answers: "kecil, malas, kotor" },
        { q: "Golongan kata: nyatakan sama ada perkataan berikut kata nama (N), kata kerja (K) atau kata sifat (S).||แบบฝึกชนิดของคำ: บอกว่าคำต่อไปนี้เป็น kata nama (N), kata kerja (K) หรือ kata sifat (S)", items: ["kain sarung  ( ___ )", "mandi  ( ___ )", "besar  ( ___ )", "lapar  ( ___ )", "baju  ( ___ )"], answers: "N, K, S, K, N" },
      ],
      nilai: "อิสลามรักความสะอาด ความสะอาดเป็นส่วนหนึ่งของการศรัทธา",
      nilai_ms: "Islam mencintai kebersihan. Kebersihan itu sebahagian daripada iman.",
    },
    // ---------------------------------------------------------------- 9
    {
      title: "Solat Sunat", th: "การละหมาดสุนัต", indicators: [1, 3, 5, 6],
      objectives: ["Membaca dan menulis nama solat sunat||อ่านและเขียนชื่อการละหมาดสุนัตได้", "Menyatakan waktu bagi beberapa jenis solat sunat||บอกเวลาของการละหมาดสุนัตบางประเภทได้"],
      sections: [
        { title: "Jenis solat sunat  ประเภทของละหมาดสุนัต", blocks: [
          { type: "table", head: ["Solat sunat", "Maksud / waktu||ความหมาย / เวลา"], rows: [
            ["**Solat sunat Dhuha**", "Solat pada waktu pagi, selepas matahari naik hingga sebelum tengah hari||ละหมาดดุฮา ยามสาย หลังดวงอาทิตย์ขึ้นจนก่อนเที่ยง"],
            ["**Solat sunat rawatib**", "Solat sunat sebelum atau selepas solat fardu||ละหมาดสุนัตก่อนหรือหลังละหมาดฟัรฎู"],
            ["**Solat sunat Witir**", "Selepas solat Isyak, bilangan rakaatnya ganjil||ละหมาดวิตร์ หลังละหมาดอิชาอ์ จำนวนร็อกอัตเป็นเลขคี่"],
            ["**Solat sunat Tarawih**", "Pada malam bulan Ramadan||ละหมาดตะรอเวี๊ยะห์ ในค่ำคืนเดือนเราะมะฎอน"],
            ["**Solat sunat Tahajud**", "Pada waktu malam selepas bangun tidur||ละหมาดตะฮัจญุด ยามดึกหลังตื่นนอน"],
            ["**Solat sunat Hari Raya**", "Pada pagi Hari Raya Aidilfitri dan Aidiladha||ละหมาดวันรายอ เช้าวันอีดิลฟิฏรีและอีดิลอัฎฮา"],
          ] },
        ] },
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", rows: [["fardu", "فرض", "ฟัรฎู (จำเป็น)"], ["sunat", "سنة", "สุนัต (ส่งเสริมให้ทำ)"], ["rakaat", "رکعة", "ร็อกอัต"], ["pahala", "ڤهالا", "ผลบุญ"]] },
        ] },
      ],
      latihan: [
        { q: "Padankan nama solat dengan waktunya.||จับคู่ชื่อละหมาดกับเวลา", table: { head: ["Solat", "Waktu"], rows: [["1) Dhuha", "ก.  pada malam bulan Ramadan"], ["2) Tarawih", "ข.  selepas solat Isyak"], ["3) Witir", "ค.  pada waktu pagi"]] }, answers: "1–ค, 2–ก, 3–ข" },
        { q: "fardu atau sunat?||fardu หรือ sunat?", items: ["Solat Subuh  ________", "Solat Dhuha  ________", "Solat Tarawih  ________"], answers: "fardu, sunat, sunat" },
        { q: "Tulis ayat \"Saya suka solat sunat ... kerana ...\"||เขียนประโยค \"Saya suka solat sunat ... kerana ...\"", lines: 1 },
      ],
      nilai: "การละหมาดสุนัตช่วยเติมเต็มสิ่งที่ขาดในละหมาดฟัรฎู และทำให้เราใกล้ชิดอัลลอฮ์",
      nilai_ms: "Solat sunat menyempurnakan kekurangan dalam solat fardu dan mendekatkan diri kita kepada Allah.",
    },
    // ---------------------------------------------------------------- 10
    {
      title: "Puasa Sunat", th: "การถือศีลอดสุนัต", indicators: [1, 3, 5, 6],
      objectives: ["Membaca dan menulis nama puasa sunat||อ่านและเขียนชื่อการถือศีลอดสุนัตได้", "Menyatakan hari atau bulan bagi puasa sunat||บอกวันหรือเดือนของการถือศีลอดสุนัตได้"],
      sections: [
        { title: "Jenis puasa sunat  ประเภทของการถือศีลอดสุนัต", blocks: [
          { type: "table", head: ["Puasa sunat", "Waktu||เวลา"], rows: [
            ["**Puasa hari Isnin dan Khamis**", "Setiap hari Isnin dan Khamis||ทุกวันจันทร์และวันพฤหัสบดี"],
            ["**Puasa enam hari bulan Syawal**", "Enam hari dalam bulan Syawal||หกวันในเดือนเชาวาล"],
            ["**Puasa hari Arafah**", "9 Zulhijah (bagi orang yang tidak menunaikan haji)||วันที่ 9 Zulhijah (สำหรับผู้ไม่ได้ประกอบพิธีฮัจญ์)"],
            ["**Puasa hari Asyura**", "10 Muharam||วันที่ 10 Muharam"],
          ] },
        ] },
        { title: "Mari membaca  มาอ่านกันเถอะ", blocks: [
          { type: "reading", title: "Puasa Hari Isnin", paras: [
            "Ayah selalu berpuasa pada hari Isnin dan Khamis. Ayah bangun awal untuk bersahur.",
            "Ayah berkata, \"Nabi Muhammad suka berpuasa pada hari Isnin dan Khamis.\"",
          ] },
        ] },
      ],
      latihan: [
        { q: "Isikan tempat kosong.||เติมคำ", items: ["Puasa sunat Arafah pada ______ Zulhijah.", "Puasa enam hari pada bulan ______.", "Ayah berpuasa pada hari ______ dan ______."], answers: "9, Syawal, Isnin, Khamis" },
        { q: "puasa wajib atau puasa sunat?||puasa wajib หรือ puasa sunat?", items: ["Puasa bulan Ramadan  ________", "Puasa hari Asyura  ________"], answers: "wajib, sunat" },
        { q: "Jawab soalan berdasarkan bacaan: Mengapa ayah berpuasa pada hari Isnin dan Khamis?||ตอบคำถามจากเรื่อง: Mengapa ayah berpuasa pada hari Isnin dan Khamis?", lines: 1, answers: "Kerana Nabi Muhammad suka berpuasa pada hari Isnin dan Khamis." },
      ],
      nilai: "การถือศีลอดสุนัตฝึกความอดทนและเป็นการตามแบบอย่างของท่านนบี",
      nilai_ms: "Puasa sunat melatih kesabaran dan merupakan amalan mengikut sunah Rasulullah SAW.",
    },
    // ---------------------------------------------------------------- 11
    {
      title: "Aurat", th: "อวัยวะที่ต้องปกปิด", indicators: [1, 3, 5, 6],
      objectives: ["Membaca dan menulis perkataan tentang menutup aurat||อ่านและเขียนคำศัพท์เกี่ยวกับการปกปิดเอาเราะฮ์ได้", "Menyatakan batas aurat lelaki dan perempuan dalam bahasa Melayu||บอกขอบเขตเอาเราะฮ์ของผู้ชายและผู้หญิงเป็นภาษามลายูได้"],
      sections: [
        { title: "Menutup aurat  การปกปิดเอาเราะฮ์", blocks: [
          { type: "table", head: ["", "Aurat"], rows: [
            ["**Lelaki**||ผู้ชาย", "antara **pusat** hingga **lutut**||ระหว่างสะดือถึงหัวเข่า"],
            ["**Perempuan**||ผู้หญิง", "seluruh badan **kecuali muka dan dua tapak tangan**||ทั้งร่างกาย ยกเว้นใบหน้าและฝ่ามือทั้งสอง"],
          ] },
        ] },
        { title: "Kosa kata  คำศัพท์", blocks: [
          { type: "vocab", rows: [["aurat", "عورة", "เอาเราะฮ์ อวัยวะที่ต้องปกปิด"], ["menutup", "منوتوڤ", "ปกปิด"], ["pusat", "ڤوست", "สะดือ"], ["lutut", "لوتوت", "หัวเข่า"], ["muka", "موک", "ใบหน้า"], ["tapak tangan", "تاڤق تاڠن", "ฝ่ามือ"], ["tudung", "تودوڠ", "ผ้าคลุมศีรษะ"], ["baju kurung", "باجو کوروڠ", "ชุดบาจูกูรง"], ["kain sarung", "کاين ساروڠ", "ผ้าโสร่ง"], ["seluar panjang", "سلوار ڤنجڠ", "กางเกงขายาว"]] },
          { type: "pattern", lines: [
            "Kakak **memakai tudung** untuk menutup aurat.",
            "Ayah **memakai kain sarung** semasa solat.",
          ] },
        ] },
      ],
      latihan: [
        { q: "Isikan perkataan  [ pusat · lutut · muka · tapak tangan ]||เติมคำ  [ pusat · lutut · muka · tapak tangan ]", items: ["Aurat lelaki antara ______ hingga ______.", "Aurat perempuan seluruh badan kecuali ______ dan ______."], answers: "pusat, lutut; muka, tapak tangan" },
        { q: "Tulis perkataan bahasa Melayu.||เขียนคำภาษามลายู", items: ["ผ้าคลุมศีรษะ  ________", "กางเกงขายาว  ________", "หัวเข่า  ________"], answers: "tudung, seluar panjang, lutut" },
        { q: "Tulis 2 ayat tentang cara kamu berpakaian untuk menutup aurat.||เขียน 2 ประโยคว่าตนเองแต่งกายปกปิดเอาเราะฮ์อย่างไร", lines: 2 },
      ],
      nilai: "การปกปิดเอาเราะฮ์เป็นคำสั่งของอัลลอฮ์ และแสดงถึงความละอายและเกียรติของมุสลิม",
      nilai_ms: "Menutup aurat ialah perintah Allah dan menunjukkan sifat malu serta maruah seorang Muslim.",
    },
  ],
};
