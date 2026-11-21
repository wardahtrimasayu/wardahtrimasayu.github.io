import type { Locale } from './locales';

// UI strings are plain text. {name} placeholders are filled by t(key, { name }).
const id: Record<UiKey, string> = {
  'meta.title': 'Portofolio Wardah Tri Masayu',
  'meta.description':
    'Portofolio Wardah Tri Masayu, mahasiswa Statistika yang tertarik pada analisis data dan pemrograman.',

  'a11y.skip': 'Skip to content',
  'a11y.home': 'Terminal Noir, home',
  'nav.main': 'Main',
  'nav.footer': 'Footer',
  'nav.home': 'Beranda',
  'nav.about': 'Profil',
  'nav.ports': 'Ports',
  'nav.docs': 'Keahlian',
  'nav.contact': 'Kontak',
  'nav.chart': 'Visualisasi',
  'nav.blog': 'Blog',
  'nav.stats': 'Statistik',
  'nav.calc': 'Kalkulator',
  'nav.integrations': 'Proyek',
  'a11y.integrations': 'Integrations',
  'nav.github': 'GitHub',
  'nav.language': 'Language',
  'theme.group': 'Color theme',
  'theme.noir': 'Noir',
  'theme.paper': 'Paper',

  'terminal.demo': 'Pratinjau profil singkat',
  'terminal.label': 'Sesi profil Wardah tri Masayu',
  'profile.photoAlt': 'Foto profil Wardah Tri Masayu',

  'category.desktop': 'Desktop',
  'category.terminal': 'Terminal',
  'category.editor': 'Editors',
  'category.cli': 'CLI tools',
  'category.apps': 'Apps',
  'category.automation': 'Automation',

  'integrations.eyebrow': 'Tentang Saya',
  'integrations.title': 'Profil & Keahlian',
  'integrations.description':
    'Mengenal latar belakang pendidikan, minat, dan keterampilan yang saya kembangkan di bidang statistika, analisis data, Excel, dan Python.',
  'integrations.metaDescription': 'Profil dan keterampilan Wardah Tri Masayu di bidang statistika dan analisis data.',
  'integrations.searchLabel': 'Cari keahlian',
  'integrations.searchPlaceholder': 'Cari dari {count} keahlian...',
  'integrations.count': '{count} keahlian & alat',
  'integrations.noResults': 'Tidak ada hasil yang cocok',
  'integrations.shownOne': '1 item ditampilkan',
  'integrations.shownMany': '{count} item ditampilkan',
  'integrations.empty': 'Belum ada data yang ditampilkan.',
  'integrations.breadcrumb': 'Breadcrumb',
  'integrations.pageTitle': '{name}',
  'integrations.zoomIn': 'Full size',
  'integrations.zoomOut': 'Tutup',
  'integrations.homepage': 'Repositori GitHub',

  'quickstart.eyebrow': 'Fokus Studi',
  'quickstart.title': 'Bidang Keahlian',
  'quickstart.descriptionHome': 'Analisis data statistik, pemrograman Python, serta pengolahan data berbasis Excel.',
  'install.tablist': 'Example commands',
  'install.fromHtml': 'From {link}, in the repo root:',
  'install.copy': 'Copy',

  'copy.done': 'Copied {value}',
  'copy.doneGeneric': 'Copied to clipboard',
  'copy.failed': 'Copy failed',

  'docs.metaDescription':
    'Bidang keahlian Wardah Tri Masayu sebagai mahasiswa Statistika dengan minat pada analisis data dan financial analyst.',
  'docs.eyebrow': 'Profil Akademik',
  'docs.title': 'Bidang Keahlian',
  'docs.description':
    'Sebagai mahasiswa Statistika, saya terus mengembangkan kemampuan analisis data dan keterampilan yang mendukung tujuan saya menjadi financial analyst.',
  'docs.skill1Label': '01 / STATISTIKA',
  'docs.skill1Title': 'Analisis Data & Statistika',
  'docs.skill1Description': 'Statistika deskriptif, probabilitas, dan pengujian hipotesis dasar.',
  'docs.skill2Label': '02 / PENGOLAHAN DATA',
  'docs.skill2Title': 'Pengolahan Data & Spreadsheet',
  'docs.skill2Description':
    'Microsoft Excel: rumus logika, VLOOKUP, PivotTable, dan visualisasi data menggunakan grafik.',
  'docs.skill3Label': '03 / PEMROGRAMAN',
  'docs.skill3Title': 'Pemrograman & Komputasi',
  'docs.skill3Description': 'Dasar-dasar bahasa R dan Python untuk eksplorasi dan pengolahan data.',
  'docs.skill4Label': '04 / KEUANGAN',
  'docs.skill4Title': 'Analisis Keuangan Dasar',
  'docs.skill4Description':
    'Pemahaman laporan keuangan sederhana, rasio keuangan dasar, serta penyusunan esai dan laporan analisis.',

  'about.metaDescription': 'Tentang Wardah Tri Masayu, mahasiswa Statistika.',
  'about.eyebrow': 'Tentang Saya',
  'about.title': 'Mahasiswa Statistika & Analisis Data.',
  'about.p1':
    'Saya adalah mahasiswa Program Studi Statistika yang memiliki ketertarikan dalam pengolahan data, analisis statistik, dan memahami informasi melalui angka. Saya ingin terus mengembangkan pengetahuan serta keterampilan di bidang statistika.',
  'about.p2':
    'Portofolio ini dibuat sebagai wadah untuk menampilkan perjalanan pendidikan, hasil pembelajaran, proyek, dan kemampuan saya dalam bidang statistika dan analisis data sebagai bekal untuk mencapai cita-cita menjadi seorang Financial Analyst.',
  'about.principlesEyebrow': 'Keahlian & Fokus',
  'about.principlesTitle': 'Tiga Pilar Utama',
  'about.rule1Label': '01 / data & Excel',
  'about.rule1Title': 'Pengolahan Data & Excel',
  'about.rule1':
    'Mengelola, merapikan, dan menghitung data terstruktur menggunakan Microsoft Excel untuk menghasilkan ringkasan informasi yang akurat.',
  'about.rule2Label': '02 / Statistika',
  'about.rule2Title': 'Statistika Dasar & Komputasi Awal',
  'about.rule2':
    'Mempelajari konsep statistika deskriptif serta pengenalan logika dasar Python untuk membantu perhitungan data secara bertahap.',
  'about.rule3Label': '03 / Analisis & Tulisan',
  'about.rule3Title': 'Analisis Kritis & Penulisan',
  'about.rule3':
    'Menyusun argumen berbasis data dan menuangkan hasil analisis ke dalam tulisan yang sistematis, jelas, dan mudah dipahami.',
  'about.creditsEyebrow': 'Latar Belakang',
  'about.creditsTitle': 'Pendidikan & Tujuan',
  'about.credits':
    'Mahasiswa Program Studi Statistika, FMIPA Universitas Cenderawasih yang berfokus membangun fondasi analisis data menuju karier sebagai Financial Analyst.',
};

const en = {
  'meta.title': 'Wardah Tri Masayu Portfolio',
  'meta.description':
    'Wardah Tri Masayu portfolio, a Statistics student interested in data analysis and programming.',
  'a11y.skip': 'Skip to content',
  'a11y.home': 'Terminal Noir, home',
  'nav.main': 'Main',
  'nav.footer': 'Footer',
  'nav.home': 'Home',
  'nav.about': 'Profile',
  'nav.ports': 'Ports',
  'nav.docs': 'Skills',
  'nav.contact': 'Contact',
  'nav.chart': 'Visualizations',
  'nav.blog': 'Blog',
  'nav.stats': 'Statistics',
  'nav.calc': 'Calculator',
  'nav.integrations': 'Projects',
  'a11y.integrations': 'Integrations',
  'nav.github': 'GitHub',
  'nav.language': 'Language',
  'theme.group': 'Color theme',
  'theme.noir': 'Noir',
  'theme.paper': 'Paper',
  'terminal.demo': 'Short profile preview',
  'terminal.label': 'Wardah Tri Masayu profile session',
  'profile.photoAlt': 'Wardah Tri Masayu profile photo',
  'category.desktop': 'Desktop',
  'category.terminal': 'Terminal',
  'category.editor': 'Editors',
  'category.cli': 'CLI tools',
  'category.apps': 'Apps',
  'category.automation': 'Automation',
  'integrations.eyebrow': 'About Me',
  'integrations.title': 'Profile & Skills',
  'integrations.description':
    'Learn about my educational background, interests, and the skills I am developing in statistics, data analysis, Excel, and Python.',
  'integrations.metaDescription': 'Wardah Tri Masayu profile and skills in statistics and data analysis.',
  'integrations.searchLabel': 'Search skills',
  'integrations.searchPlaceholder': 'Search {count} skills...',
  'integrations.count': '{count} skills & tools',
  'integrations.noResults': 'No matching results',
  'integrations.shownOne': '1 item shown',
  'integrations.shownMany': '{count} items shown',
  'integrations.empty': 'There is no data to display yet.',
  'integrations.breadcrumb': 'Breadcrumb',
  'integrations.pageTitle': '{name}',
  'integrations.zoomIn': 'Full size',
  'integrations.zoomOut': 'Close',
  'integrations.homepage': 'GitHub Repository',
  'quickstart.eyebrow': 'Study Focus',
  'quickstart.title': 'Areas of Expertise',
  'quickstart.descriptionHome': 'Statistical data analysis, Python programming, and Excel-based data processing.',
  'install.tablist': 'Example commands',
  'install.fromHtml': 'From {link}, in the repository root:',
  'install.copy': 'Copy',
  'copy.done': 'Copied {value}',
  'copy.doneGeneric': 'Copied to clipboard',
  'copy.failed': 'Copy failed',
  'docs.metaDescription':
    'Wardah Tri Masayu’s areas of expertise as a Statistics student interested in data analysis and financial analysis.',
  'docs.eyebrow': 'Academic Profile',
  'docs.title': 'Areas of Expertise',
  'docs.description':
    'As a Statistics student, I continue developing data analysis skills that support my goal of becoming a financial analyst.',
  'docs.skill1Label': '01 / STATISTICS',
  'docs.skill1Title': 'Data Analysis & Statistics',
  'docs.skill1Description': 'Descriptive statistics, probability, and basic hypothesis testing.',
  'docs.skill2Label': '02 / DATA PROCESSING',
  'docs.skill2Title': 'Data Processing & Spreadsheets',
  'docs.skill2Description':
    'Microsoft Excel: logical formulas, VLOOKUP, PivotTables, and data visualization using charts.',
  'docs.skill3Label': '03 / PROGRAMMING',
  'docs.skill3Title': 'Programming & Computing',
  'docs.skill3Description': 'Fundamentals of R and Python for data exploration and processing.',
  'docs.skill4Label': '04 / FINANCE',
  'docs.skill4Title': 'Basic Financial Analysis',
  'docs.skill4Description':
    'Understanding basic financial statements, financial ratios, and preparing analytical essays and reports.',
  'about.metaDescription': 'About Wardah Tri Masayu, a Statistics student.',
  'about.eyebrow': 'About Me',
  'about.title': 'Statistics Student & Data Analyst.',
  'about.p1':
    'I am a Statistics student interested in data processing, statistical analysis, and understanding information through numbers. I want to continue developing my knowledge and skills in statistics.',
  'about.p2':
    'This portfolio is a place to showcase my educational journey, learning outcomes, projects, and abilities in statistics and data analysis as preparation for my goal of becoming a Financial Analyst.',
  'about.principlesEyebrow': 'Skills & Focus',
  'about.principlesTitle': 'Three Main Pillars',
  'about.rule1Label': '01 / Data & Excel',
  'about.rule1Title': 'Data Processing & Excel',
  'about.rule1':
    'Managing, cleaning, and calculating structured data using Microsoft Excel to produce accurate information summaries.',
  'about.rule2Label': '02 / Statistics',
  'about.rule2Title': 'Basic Statistics & Early Computing',
  'about.rule2':
    'Learning descriptive statistics concepts and basic Python logic to support gradual data calculations.',
  'about.rule3Label': '03 / Analysis & Writing',
  'about.rule3Title': 'Critical Analysis & Writing',
  'about.rule3':
    'Constructing data-based arguments and presenting analytical findings in systematic, clear, and accessible writing.',
  'about.creditsEyebrow': 'Background',
  'about.creditsTitle': 'Education & Goals',
  'about.credits':
    'A Statistics student at FMIPA Universitas Cenderawasih, focused on building a data analysis foundation for a career as a Financial Analyst.',
};

export type UiKey = keyof typeof en;

export const ui: Record<Locale, Record<UiKey, string>> = { id, en };

export type Translate = (key: UiKey, vars?: Record<string, string | number>) => string;

export function useTranslations(locale: Locale): Translate {
  return (key, vars = {}) =>
    ui[locale][key].replace(/\{(\w+)\}/g, (match, name: string) => (name in vars ? String(vars[name]) : match));
}
