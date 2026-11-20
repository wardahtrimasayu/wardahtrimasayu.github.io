import type { Locale } from './locales';

// UI strings are plain text. {name} placeholders are filled by t(key, { name }).
const en = {
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
  'nav.integrations': 'Proyek',
  'a11y.integrations': 'Integrations',
  'nav.github': 'GitHub',
  'nav.language': 'Language',
  'theme.group': 'Color theme',
  'theme.noir': 'Noir',
  'theme.paper': 'Paper',

  'terminal.demo': 'Pratinjau profil singkat',
  'terminal.label': 'Sesi profil Wardah tri Masayu',

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
  'integrations.homepage': 'Beranda',

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

export type UiKey = keyof typeof en;

const ptBr: Record<UiKey, string> = {
  'meta.title': 'Terminal Noir: um tema noir para tudo o que você digita',
  'meta.description':
    'Terminal Noir: superfícies frias quase pretas e um único acento âmbar. Uma paleta, gerada para cada app que você usa.',
  'a11y.skip': 'Pular para o conteúdo',
  'a11y.home': 'Terminal Noir, início',
  'nav.main': 'Principal',
  'nav.footer': 'Rodapé',
  'nav.home': 'Início',
  'nav.about': 'Sobre',
  'nav.ports': 'Ports',
  'nav.docs': 'Docs',
  'nav.integrations': 'Integrações',
  'a11y.integrations': 'Integrações',
  'nav.github': 'GitHub',
  'nav.language': 'Idioma',
  'theme.group': 'Tema de cores',
  'theme.noir': 'Noir',
  'theme.paper': 'Paper',

  'terminal.demo': 'saída fictícia de demonstração',
  'terminal.label': 'Sessão fictícia do Noir CLI',

  'category.desktop': 'Desktop',
  'category.terminal': 'Terminal',
  'category.editor': 'Editores',
  'category.cli': 'Ferramentas CLI',
  'category.apps': 'Apps',
  'category.automation': 'Automação',

  'integrations.eyebrow': 'Exemplos',
  'integrations.title': 'Integrações',
  'integrations.description': 'Exemplos fictícios de integrações com editor, terminal e automação.',
  'integrations.metaDescription': 'Integrações de exemplo desta ferramenta.',
  'integrations.searchLabel': 'Buscar integrações',
  'integrations.searchPlaceholder': 'Buscar {count} exemplos…',
  'integrations.count': '{count} exemplos',
  'integrations.noResults': 'Nenhuma integração corresponde à busca.',
  'integrations.shownOne': '1 integração mostrada',
  'integrations.shownMany': '{count} integrações mostradas',
  'integrations.empty': 'Nenhum exemplo de integração ainda.',
  'integrations.breadcrumb': 'Trilha',
  'integrations.pageTitle': '{name}',
  'integrations.zoomIn': 'Tamanho real',
  'integrations.zoomOut': 'Fechar',
  'integrations.homepage': 'Página',

  'quickstart.eyebrow': 'Início rápido',
  'quickstart.title': 'Instalação',
  'quickstart.descriptionHome': 'Comandos de exemplo desta ferramenta fictícia. Troque-os na configuração do site.',
  'install.tablist': 'Comandos de exemplo',
  'install.fromHtml': 'De {link}, na raiz do repositório:',
  'install.copy': 'Copiar',

  'copy.done': '{value} copiado',
  'copy.doneGeneric': 'Copiado para a área de transferência',
  'copy.failed': 'Não foi possível copiar',

  'docs.metaDescription':
    'Competências de Wardah Tri Masayu como estudante de Estatística interessada em análise de dados e finanças.',
  'docs.eyebrow': 'Perfil Acadêmico',
  'docs.title': 'Áreas de Conhecimento',
  'docs.description':
    'Como estudante de Estatística, continuo desenvolvendo habilidades em análise de dados e conhecimentos para alcançar meu objetivo de atuar como analista financeira.',
  'docs.skill1Label': '01 / ESTATÍSTICA',
  'docs.skill1Title': 'Análise de Dados e Estatística',
  'docs.skill1Description': 'Estatística descritiva, probabilidade e testes básicos de hipóteses.',
  'docs.skill2Label': '02 / TRATAMENTO DE DADOS',
  'docs.skill2Title': 'Tratamento de Dados e Planilhas',
  'docs.skill2Description':
    'Microsoft Excel: fórmulas lógicas, PROCV, Tabela Dinâmica e visualização de dados em gráficos.',
  'docs.skill3Label': '03 / PROGRAMAÇÃO',
  'docs.skill3Title': 'Programação e Computação',
  'docs.skill3Description': 'Noções básicas de R e Python para exploração e tratamento de dados.',
  'docs.skill4Label': '04 / FINANÇAS',
  'docs.skill4Title': 'Análise Financeira Básica',
  'docs.skill4Description':
    'Compreensão de demonstrações financeiras simples, índices financeiros básicos e elaboração de ensaios e relatórios analíticos.',

  'about.metaDescription': 'Untuk apa alat ini.',
  'about.eyebrow': 'Sobre',
  'about.title': 'Uma ferramenta fictícia para o starter.',
  'about.p1':
    'Noir CLI é um produto de exemplo. Ele mostra como uma ferramenta de desenvolvedor usa este tema: um nome, uma descrição curta, integrações de exemplo e comandos de instalação.',
  'about.p2': 'Nada aqui instala um programa real. Troque o texto, os links e o catálogo pela sua ferramenta.',
  'about.principlesEyebrow': 'O que você edita',
  'about.principlesTitle': 'Três arquivos',
  'about.rule1Label': '01 / Identidade',
  'about.rule1Title': 'Configuração do site',
  'about.rule1': 'Nome, domínio, navegação e texto do hero ficam em src/config/site.ts.',
  'about.rule2Label': '02 / Catálogo',
  'about.rule2Title': 'Integrações',
  'about.rule2': 'Cada exemplo tem um registro em inglês e outro em português do Brasil.',
  'about.rule3Label': '03 / Comandos',
  'about.rule3Title': 'Abas de instalação',
  'about.rule3': 'Os comandos da página inicial são exemplos. Troque-os antes de publicar.',
  'about.creditsEyebrow': 'Tema',
  'about.creditsTitle': 'Noir e Paper',
  'about.credits':
    'O sistema visual tem o modo escuro Noir e o modo claro Paper. As cores ficam no arquivo local da paleta.',
};

export const ui: Record<Locale, Record<UiKey, string>> = { en, 'pt-br': ptBr };

export type Translate = (key: UiKey, vars?: Record<string, string | number>) => string;

export function useTranslations(locale: Locale): Translate {
  return (key, vars = {}) =>
    ui[locale][key].replace(/\{(\w+)\}/g, (match, name: string) => (name in vars ? String(vars[name]) : match));
}
