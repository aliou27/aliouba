const toggle=document.getElementById('themeToggle');
const root=document.documentElement;
const themeColor=document.querySelector('meta[name="theme-color"]');
const languageButtons=document.querySelectorAll('.language-button');
const translations={fr:{
'nav.about':'À propos','nav.projects':'Projets','nav.writing':'Écriture','nav.teaching':'Enseignement','nav.contact':'Contact',
'hero.eyebrow':'Génie logiciel · Cybersécurité · Cloud','hero.title':'Je conçois des logiciels, j’explore la cybersécurité et je rends les sujets techniques complexes plus simples.',
'hero.intro':'Je suis Aliou Ba, élève-ingénieur en informatique et télécommunications à l’Institut Polytechnique de Saint-Louis. Je construis des produits pratiques et j’étudie les systèmes backend et cloud sécurisés.',
'hero.projects':'Voir les projets','hero.lessons':'Cours d’anglais','hero.more':'En savoir plus',
'teaching.label':'05 / Enseignement','teaching.title':'Des cours d’anglais pratiques, construits autour de vos objectifs.',
'teaching.intro':'J’aide les apprenants à améliorer leur <strong>expression orale, compréhension orale et compréhension écrite</strong> grâce à des cours pratiques centrés sur la communication. Votre parcours scolaire n’est pas un obstacle : le cours est adapté à votre niveau, votre métier, vos objectifs et vos besoins quotidiens.',
'teaching.one.title':'Individuel','teaching.one.text':'Des séances personnalisées selon votre niveau et vos objectifs.',
'teaching.group.title':'Petits groupes','teaching.group.text':'Apprenez à 3 ou 4 personnes maximum, avec beaucoup de pratique orale.',
'teaching.plan.title':'Plan d’action d’1 heure','teaching.plan.text':'Nous évaluons votre niveau, identifions les priorités et construisons un plan pratique pour la suite.',
'teaching.offer.label':'Coaching individuel','teaching.offer.text':'Évaluation · Orientation · Pratique · Plan d’action personnalisé','teaching.whatsapp':'Réserver sur WhatsApp',
'teaching.form.label':'Demande de cours','teaching.form.title':'Dites-moi ce dont vous avez besoin.','teaching.form.intro':'Envoyez-moi quelques informations pour que je puisse comprendre vos besoins avant de commencer.',
'teaching.direct':'Vous préférez un message direct ?',
'form.name':'Nom complet','form.email':'Email','form.phone':'Numéro WhatsApp','form.profile':'Votre profil','form.format':'Format du cours','form.domain':'Votre domaine / secteur',
'form.goals':'Que souhaitez-vous améliorer ?','form.message':'Parlez-moi de votre niveau actuel ou de vos difficultés','form.submit':'Envoyer la demande'
}};
document.querySelectorAll('[data-i18n]').forEach(e=>e.dataset.enText=e.innerHTML);
function setLanguage(lang){document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(e=>{const k=e.dataset.i18n;e.innerHTML=lang==='fr'&&translations.fr[k]?translations.fr[k]:e.dataset.enText});languageButtons.forEach(b=>{const a=b.dataset.lang===lang;b.classList.toggle('active',a);b.setAttribute('aria-pressed',String(a))});localStorage.setItem('language',lang)}
function updateThemeButton(){const isDark=root.dataset.theme==='dark';toggle.setAttribute('aria-pressed',String(isDark));toggle.setAttribute('aria-label',isDark?'Switch to light mode':'Switch to dark mode');toggle.querySelector('.theme-label').textContent=isDark?'Light':'Dark';if(themeColor)themeColor.setAttribute('content',isDark?'#111315':'#fbfbf9')}
updateThemeButton();toggle.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('theme',root.dataset.theme);updateThemeButton()});
languageButtons.forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));setLanguage('en');