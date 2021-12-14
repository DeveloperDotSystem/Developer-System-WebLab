const dataAIBP = [
  'https://id.m.wikipedia.org/wiki/Bahasa_pemrograman',
  'https://kamus.tokopedia.com/b/bahasa-program/',
  'https://amp.kompas.com/skola/read/2021/06/11/130000169/bahasa-pemrograman--pengertian-fungsi-tingkat-dan-macamnya',
  'https://accurate.id/teknologi/bahasa-pemrograman/',
  'https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.dosenpendidikan.co.id/bahasa-pemrograman/&ved=2ahUKEwiZ6uec4Mf0AhVpT2wGHWIEC24QFnoECEEQAQ&usg=AOvVaw0Sc6zYQPTRnx-fQoeQnk8M',
  'https://glints.com/id/lowongan/bahasa-pemrograman-adalah/',
  'https://salamadian.com/bahasa-pemrograman/',
  'https://it.rsudsekayu.mubakab.go.id/info/apa-itu-bahasa-pemrograman-fungsi-dan-contohnya',
  'https://smkn1sukorejo.sch.id/wp-content/uploads/2020/09/Bahasa-Pemrograman-Komputer.pdf',
  'https://id.scribd.com/presentation/484370317/BAHASA-PEMROGRAMAN-PEMROGRAMAN-DASAR',
  'https://m.kumparan.com/amp/kabar-harian/bahasa-pemrograman-pengertian-tingkatan-dan-rekomendasi-untuk-pemula-1wssW0EwCTp',
  'https://www.mas-software.com/blog/bahasa-pemrograman',
  'https://www.jojonomic.com/blog/bahasa-pemrograman/',
  'https://caraguna.com/pengertian-bahasa-pemrograman-dan-contohnya/',
  'https://aderoni.com/pemrograman/pengertian-bahasa-pemrograman/',
  'https://cbn.ac.id/my/blog/view/56/bahasa-pemrograman',
  'https://www.selamatpagi.id/pengertian-bahasa-pemrograman/',
  'https://educhannel.id/blog/artikel/bahasa-pemrograman.html',
  'https://4winmobile.com/bahasa-pemrograman/',
  'https://id.spot-the-difference.info/difference-between-programming-language',
  'https://www.greelane.com/id/sains-teknologi-matematika/ilmu-komputer/what-is-a-programming-language-958332',
  'https://pengertian.apa-itu.net/apa-yang-dimaksud-dengan-bahasa-pemrograman.html',
  'https://jogjaweb.co.id/blog/mengenal-bahasa-pemrograman',
  'https://lecturer.ppns.ac.id/khoirul/pengenalan-bahasa-pemrograman/',
]
let dataLinkAIBP = '';
let dataCiteAIBP = document.querySelector('#AIBP');
for (let i = 0; i < dataAIBP.length; i++) {
  dataLinkAIBP += '<a href="' + dataAIBP[i] + '">' + dataAIBP[i] + '</a>';
}
dataCiteAIBP.innerHTML = dataLinkAIBP;
const buttonScroller = document.querySelector('.material-icons-outlined.scroll');
buttonScroller.addEventListener(
  'click', function() {
    return window.scrollTo(top);
  }, true
)
