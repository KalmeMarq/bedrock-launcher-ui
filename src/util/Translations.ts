const ptPT = {
  'News': ['Novidades'],
  'Official': ['Oficial'],
  'Search': ['Procurar'],
  'News title': ['Título da notícia'],
  'Categories': ['Categorias'],
  'Play': ['Jogar'],
  'Installations': ['Instalações'],
  'Installation': ['Instalação'],
  'Skins': ['Skins'],
  'Patch notes': ['Notas de lançamento'],
  'Mods': ['Modificações'],
  'Store': ['Loja'],
  'Community': ['Communidade'],
  'Coming Soon!': ['Em breve'],
  'Check back here later for something SUPER DUPER AWESOME!': ['Volte aqui mais tarde para algo SUPER MEGA INCRÍVEL!'],
  '❤ Support Development ❤': ['❤ Suporte o Desenvolvimento ❤'],
  'Settings': ['Definições'],
  'General': ['Gerais'],
  'Versions': ['Versões'],
  'Accounts': ['Contas'],
  'About': ['Sobre'],
  'Language': ['Idioma'],
  'Launcher color theme': ['Color tema do launcher'],
  'Launcher theme': ['Tema do launcher'],
  'Launcher settings': ['Definições do launcher'],
  'Minecraft: Java Edition settings': ['Definições do Minecraft: Java Edition'],
  'Shortcut settings': ['Definições do atalho'],
}

const ptBR = {
  'News': ['Novidades'],
  'Official': ['Oficial'],
  'Search': ['Buscar'],
  'News title': ['Título da notícia'],
  'Categories': ['Categorias'],
  'Play': ['Jogar'],
  'Installations': ['Instalações'],
  'Installation': ['Instalação'],
  'Skins': ['Skins'],
  'Patch notes': ['Notas de versão'],
  'Mods': ['Modificações'],
  'Store': ['Loja'],
  'Community': ['Communidade'],
  'Coming Soon!': ['Em breve'],
  'Check back here later for something SUPER DUPER AWESOME!': ['Volte aqui mais tarde para algo SUPER MEGA INCRÍVEL!'],
  '❤ Support Development ❤': ['❤ Suporte o Desenvolvimento ❤'],
  'Settings': ['Configurações'],
  'General': ['Gerais'],
  'Versions': ['Versões'],
  'Accounts': ['Contas'],
  'About': ['Sobre'],
  'Language': ['Idioma'],
  'Launcher color theme': ['Color tema do launcher'],
  'Launcher theme': ['Tema do launcher'],
  'Launcher settings': ['Definições do launcher'],
  'Minecraft: Java Edition settings': ['Definições do Minecraft: Java Edition'],
  'Shortcut settings': ['Definições do atalho']
}

const esES = {
  'News': ['Novedades'],
  'Official': ['Oficial'],
  'Search': ['Buscar'],
  'News title': ['News title'],
  'Categories': ['Categorías'],
  'Play': ['Jugar'],
  'Installations': ['Instalaciones'],
  'Installation': ['Instalacion'],
  'Skins': ['Aspectos'],
  'Patch notes': ['Notas de actualización'],
  'Mods': ['Mods'],
  'Store': ['Store'],
  'Community': ['Community'],
  'Coming Soon!': ['Coming Soon!'],
  'Check back here later for something SUPER DUPER AWESOME!': ['Check back here later for something SUPER DUPER AWESOME!'],
  '❤ Support Development ❤': ['❤ Support Development ❤'],
  'Settings': ['Ajustes'],
  'General': ['General'],
  'Versions': ['Versões'],
  'Accounts': ['Cuentas'],
  'About': ['Acerca de']
}

function createLocale(base: { [key: string]: string[] }) {
  return {
    domain: 'messages',
    locale_data: {
      messages: Object.assign({
        '': {
          domain: 'messages',
          plural_forms: 'nplurals=2; plural=(n != 1);'
        }
      }, base)
    }
  }
}

const Translations: any = {
  'es-ES': createLocale(esES),
  'en-GB': {},
  'en-US': {},
  'pt-PT': createLocale(ptPT),
  'pt-BR': createLocale(ptBR)
}

export default Translations