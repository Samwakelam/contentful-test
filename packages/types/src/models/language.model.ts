export enum LanguageCode {
  af = 'af',
  be = 'be',
  bg = 'bg',
  bm = 'bm',
  ca = 'ca',
  cs = 'cs',
  cy = 'cy',
  da = 'da',
  de = 'de',
  dv = 'dv',
  el = 'el',
  en = 'en',
  es = 'es',
  et = 'et',
  eu = 'eu',
  fa = 'fa',
  fi = 'fi',
  fo = 'fo',
  fr = 'fr',
  ga = 'ga',
  gd = 'gd',
  he = 'he',
  hi = 'hi',
  hr = 'hr',
  hu = 'hu',
  id = 'id',
  is = 'is',
  it = 'it',
  ja = 'ja',
  ji = 'ji',
  ka = 'ka',
  kk = 'kk',
  km = 'km',
  ko = 'ko',
  ku = 'ku',
  ky = 'ky',
  lo = 'lo',
  lt = 'lt',
  lv = 'lv',
  mg = 'mg',
  mk = 'mk',
  ml = 'ml',
  ms = 'ms',
  mt = 'mt',
  nb = 'nb',
  nl = 'nl',
  nn = 'nn',
  om = 'om',
  pa = 'pa',
  pap = 'pap',
  pl = 'pl',
  pt = 'pt',
  ps = 'ps',
  rn = 'rn',
  rm = 'rm',
  ro = 'ro',
  ru = 'ru',
  sb = 'sb',
  sk = 'sk',
  sl = 'sl',
  sq = 'sq',
  so = 'so',
  sr = 'sr',
  sw = 'sw',
  sv = 'sv',
  th = 'th',
  ts = 'ts',
  tn = 'tn',
  tr = 'tr',
  ua = 'ua',
  ur = 'ur',
  ve = 've',
  vi = 'vi',
  xh = 'xh',
  yue = 'yue',
  zh = 'zh',
  zu = 'zu',
}

export interface Language {
  name: string;
  iso: LanguageCode;
}

export const Languages: Record<LanguageCode, Language> = {
  af: {
    name: 'Afrikaans',
    iso: LanguageCode.af,
  },
  be: {
    name: 'Belarusian',
    iso: LanguageCode.be,
  },
  bg: {
    name: 'Bulgarian',
    iso: LanguageCode.bg,
  },
  bm: {
    name: 'Bambara',
    iso: LanguageCode.bm,
  },
  ca: {
    name: 'Catalan',
    iso: LanguageCode.ca,
  },
  cs: {
    name: 'Czech',
    iso: LanguageCode.cs,
  },
  cy: {
    name: 'Welsh',
    iso: LanguageCode.cy,
  },
  da: {
    name: 'Danish',
    iso: LanguageCode.da,
  },
  de: {
    name: 'German',
    iso: LanguageCode.de,
  },
  dv: {
    name: 'Dhivehi',
    iso: LanguageCode.dv,
  },
  el: {
    name: 'Greek',
    iso: LanguageCode.el,
  },
  en: {
    name: 'English',
    iso: LanguageCode.en,
  },
  es: {
    name: 'Spanish',
    iso: LanguageCode.es,
  },
  et: {
    name: 'Estonian',
    iso: LanguageCode.et,
  },
  eu: {
    name: 'Basque',
    iso: LanguageCode.eu,
  },
  fa: {
    name: 'Farsi',
    iso: LanguageCode.fa,
  },
  fi: {
    name: 'Finnish',
    iso: LanguageCode.fi,
  },
  fo: {
    name: 'Faeroese',
    iso: LanguageCode.fo,
  },
  fr: {
    name: 'French',
    iso: LanguageCode.fr,
  },
  ga: {
    name: 'Irish',
    iso: LanguageCode.ga,
  },
  gd: {
    name: 'Gaelic',
    iso: LanguageCode.gd,
  },
  he: {
    name: 'Hebrew',
    iso: LanguageCode.he,
  },
  hi: {
    name: 'Hindi',
    iso: LanguageCode.hi,
  },
  hr: {
    name: 'Croatian',
    iso: LanguageCode.hr,
  },
  hu: {
    name: 'Hungarian',
    iso: LanguageCode.hu,
  },
  id: {
    name: 'Indonesian',
    iso: LanguageCode.id,
  },
  is: {
    name: 'Icelandic',
    iso: LanguageCode.is,
  },
  it: {
    name: 'Italian',
    iso: LanguageCode.it,
  },
  ja: {
    name: 'Japanese',
    iso: LanguageCode.ja,
  },
  ji: {
    name: 'Yiddish',
    iso: LanguageCode.ji,
  },
  ka: {
    name: 'Georgian',
    iso: LanguageCode.ka,
  },
  kk: {
    name: 'Kazakh',
    iso: LanguageCode.ka,
  },
  ko: {
    name: 'Korean',
    iso: LanguageCode.ko,
  },
  km: {
    name: 'Khmer',
    iso: LanguageCode.km,
  },
  ku: {
    name: 'Kurdish',
    iso: LanguageCode.ku,
  },
  ky: {
    name: 'Kyrgyz',
    iso: LanguageCode.ky,
  },
  lo: {
    name: 'Lao',
    iso: LanguageCode.lo,
  },
  lt: {
    name: 'Lithuanian',
    iso: LanguageCode.lt,
  },
  lv: {
    name: 'Latvian',
    iso: LanguageCode.lv,
  },
  mg: {
    name: 'Malagasy',
    iso: LanguageCode.mg,
  },
  mk: {
    name: 'Macedonian',
    iso: LanguageCode.mk,
  },
  ml: {
    name: 'Malayalam',
    iso: LanguageCode.ml,
  },
  ms: {
    name: 'Malaysian',
    iso: LanguageCode.ms,
  },
  mt: {
    name: 'Maltese',
    iso: LanguageCode.mt,
  },
  nb: {
    name: 'Norwegian (Bokmål)',
    iso: LanguageCode.nb,
  },
  nl: {
    name: 'Dutch',
    iso: LanguageCode.nl,
  },
  nn: {
    name: 'Norwegian (Nynorsk)',
    iso: LanguageCode.nn,
  },
  om: {
    name: 'Oromo',
    iso: LanguageCode.om,
  },
  pa: {
    name: 'Punjabi',
    iso: LanguageCode.pa,
  },
  pap: {
    name: 'Papiamento',
    iso: LanguageCode.pap,
  },
  pl: {
    name: 'Polish',
    iso: LanguageCode.pl,
  },
  pt: {
    name: 'Portuguese',
    iso: LanguageCode.pt,
  },
  ps: {
    name: 'Pashto',
    iso: LanguageCode.ps,
  },
  rn: {
    name: 'Karundi',
    iso: LanguageCode.rn,
  },
  rm: {
    name: 'Rhaeto-Romanic',
    iso: LanguageCode.rm,
  },
  ro: {
    name: 'Romanian',
    iso: LanguageCode.ro,
  },
  ru: {
    name: 'Russian',
    iso: LanguageCode.ru,
  },
  sb: {
    name: 'Sorbian',
    iso: LanguageCode.sb,
  },
  sk: {
    name: 'Slovak',
    iso: LanguageCode.sk,
  },
  sl: {
    name: 'Slovenian',
    iso: LanguageCode.sl,
  },
  sq: {
    name: 'Albanian',
    iso: LanguageCode.sq,
  },
  so: {
    name: 'Somali',
    iso: LanguageCode.so,
  },
  sr: {
    name: 'Serbian',
    iso: LanguageCode.sr,
  },
  sw: {
    name: 'Swahili',
    iso: LanguageCode.sw,
  },
  sv: {
    name: 'Swedish',
    iso: LanguageCode.sv,
  },
  th: {
    name: 'Thai',
    iso: LanguageCode.th,
  },
  ts: {
    name: 'Thonga',
    iso: LanguageCode.ts,
  },
  tn: {
    name: 'Tswana',
    iso: LanguageCode.tn,
  },
  tr: {
    name: 'Turkish',
    iso: LanguageCode.tr,
  },
  ua: {
    name: 'Ukrainian',
    iso: LanguageCode.ua,
  },
  ur: {
    name: 'Urdu',
    iso: LanguageCode.ur,
  },
  ve: {
    name: 'Venda',
    iso: LanguageCode.ve,
  },
  vi: {
    name: 'Vietnamese',
    iso: LanguageCode.vi,
  },
  xh: {
    name: 'Xhosa',
    iso: LanguageCode.xh,
  },
  yue: {
    name: 'Cantonese',
    iso: LanguageCode.yue,
  },
  zh: {
    name: 'Chinese',
    iso: LanguageCode.zh,
  },
  zu: {
    name: 'Zulu',
    iso: LanguageCode.zu,
  },
};
