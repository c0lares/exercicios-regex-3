// Parte 1
const regex = /https:\/\/g1.globo.com\/[\w-]+(\/[\w]+)?\/noticia\/\d{4}\/\d{2}\/\d{2}\/[\w-]+.ghtml/
const link1 ='https://g1.globo.com/fato-ou-fake/coronavirus/noticia/2021/12/09/e-fake-que-imagens-de-autopsia-mostrem-lesoes-causadas-por-vacina-contra-covid-e-que-imunizante-cause-vasculite.ghtml'
console.log(link1.match(regex))

const link2 = 'https://g1.globo.com/fato-ou-fake/noticia/2021/12/06/e-fake-que-lula-disse-em-podcast-que-considera-todo-pobre-imbecil-e-ignorante.ghtml'
console.log(link2.match(regex))

const link3 = 'https://g1.globo.com/tecnologia/noticia/2021/12/10/pf-apura-ataque-na-nuvem-e-diz-que-dados-do-ministerio-nao-foram-criptografados.ghtml'
console.log(link3.match(regex))


const regex2 = /https:\/\/g1.globo.com\/[\w-]{2}\/[\w-]+\/noticia\/\d{4}\/\d{2}\/\d{2}\/[\w-]+.ghtml/
const link4 = 'https://g1.globo.com/go/goias/noticia/2021/12/13/prazo-de-inscricao-para-programa-de-aluguel-social-termina-na-terca-feira-em-goiania.ghtml' 
console.log(link4.match(regex2))

const link5 = 'https://g1.globo.com/df/distrito-federal/noticia/2021/12/13/covid-19-pacientes-do-df-infectados-pela-variante-omicron-estao-curados-diz-secretaria-de-saude.ghtml'
console.log(link5.match(regex2))



//Parte 2

const regexTitulo = /<h1 [^>]*?>(.*?)<\/h1>/

const regexData = /<time [^>]*?>(.*?)<time [^>]*?>/

const RegexTexto = /<p [^>]*?>(.*?)<\/p>/

