const dataAIPL = [
  'https://id.m.wikipedia.org/wiki/Perangkat_lunak',
  'https://kamus.tokopedia.com/p/perangkat-lunak/',
  'https://humas.amikompurwokerto.ac.id/apa-itu-perangkat-lunak-komputer-perangkat-lunak-aplikasi-dan-perangkat-lunak-sistem/',
  'https://www.google.com/amp/s/www.advernesia.com/blog/komputer/apa-itu-software-atau-perangkat-lunak-komputer/amp/',
  'https://www.researchgate.net/publication/341433883_Perangkat_lunak',
  'http://blog.ub.ac.id/danarjoeditja/?p=48',
  'https://id.scribd.com/doc/219794149/PENGERTIAN-PERANGKAT-LUNAK',
  'https://hanungnp.staff.telkomuniversity.ac.id/apa-itu-perangkat-lunak/',
  'https://itkampus.com/perangkat-lunak-komputer/',
  'https://m.brilio.net/amp/wow/ini-dia-pengertian-perangkat-lunak-menurut-para-ahli-2004228.html',
  'https://salamadian.com/pengertian-perangkat-lunak-software/',
  'https://www.gnu.org/philosophy/free-sw.id.html',
  'https://id.quora.com/Apa-itu-perangkat-lunak',
  'https://infokomputerrakitan.blogspot.com/2015/06/pengertian-perangkat-lunak-software.html?m=1',
  'https://www.yuksinau.id/perangkat-lunak/',
  'https://elib.unikom.ac.id/download.php?id=82150',
  'https://idcloudhost.com/pengertian-software-fungsi-jenis-spesifikasi-dan-contoh-software/amp/',
  'https://ids.ac.id/teknologi-perangkat-lunak/',
  'https://amp.kompas.com/skola/read/2020/10/09/183000569/apa-itu-software-',
  'https://accurate.id/teknologi/software-adalah/',
  'https://pastiguna.com/perangkat-lunak-software/',
  'https://se.ittelkom-pwt.ac.id/2017/10/25/apa-itu-perangkat-lunak/',
  'https://www.maxmanroe.com/vid/teknologi/pengertian-software.html',
  'https://www.sridianti.com/memori/aplikasi-perangkat-lunak-software-pengertian-contoh-jenis.html',
  'https://mamikos.com/info/perangkat-lunak-pljr/',
  'https://widuri.raharja.info/index.php?title=Perangkat_lunak_komputer',
  'https://www.duniapengertian.com/2016/11/pengertian-perangkat-lunak.html?m=1',
  'https://www.materidosen.com/2016/12/pengertian-fungsi-dan-contoh-perangkat.html?m=1',
  'https://fr.coursera.org/lecture/dasar-dasar-dukungan-teknis/apa-itu-perangkat-lunak-UQ0QB',
  'https://www.komputertips.com/pengertian-perangkat-lunak/',
  'https://www.podfeeder.com/teknologi/apa-itu-perangkat-lunak-aplikasi-berikut-penjelasan-pembagian-jenis-beserta-contohnya/',
]
let dataLinkAIPL = '';
let dataCiteAIPL = document.querySelector('#AIPL');
for(let i = 0; i < dataAIPL.length; i++) {
  dataLinkAIPL += '<a href="' + dataAIPL[i] + '">' + dataAIPL[i] + '</a>';
}
dataCiteAIPL.innerHTML = dataLinkAIPL;
const buttonScroller = document.querySelector('.material-icons-outlined.scroll');
buttonScroller.addEventListener(
  'click', function() {
    return window.scrollTo(top);
  }, true
)
