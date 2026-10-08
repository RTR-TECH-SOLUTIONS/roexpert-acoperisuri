// Toate datele firmei și conținutul paginii stau aici, ca să se schimbe dintr-un singur loc.
// BASE_URL este "/" pe un domeniu propriu și "/nume-repo/" pe GitHub Pages.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => `${base}${path}`;

export const site = {
  name: 'RoExpert Acoperișuri',
  phone: '0735 615 254',
  phoneHref: '+40735615254',
  whatsapp: '40735615254',
  email: 'roexperttt@gmail.com',
  area: 'toată România',
};

export const nav = [
  { label: 'Acasă', href: u('/') },
  { label: 'Servicii', href: u('/servicii/') },
  { label: 'Portofoliu', href: u('/portofoliu/') },
  { label: 'Testimoniale', href: u('/testimoniale/') },
  { label: 'Contact', href: u('/contact/') },
];

export const categories = [
  {
    id: 'acoperisuri',
    title: 'Servicii acoperișuri',
    text: 'Tot ce ține de acoperiș — de la șarpantă și învelitori, la jgheaburi și reparații.',
    image: u('/images/galerie/montaj-tabla-clic-01.webp'),
    icon: 'roof',
    services: [
      'Montaj tablă clic', 'Montaj tablă cutată', 'Montaj șageac', 'Montaj jgheaburi & burlane',
      'Montaj țiglă metalică', 'Montaj țiglă ceramică', 'Reparații acoperiș', 'Vopsire acoperiș',
      'Mansarde', 'Montaj ferestre Velux', 'Hidroizolații',
    ],
  },
  {
    id: 'exterioare',
    title: 'Servicii exterioare',
    text: 'Fațade, terase, garduri și amenajări care dau casei un exterior îngrijit.',
    image: u('/images/galerie/terase-foisoare-12.webp'),
    icon: 'house',
    services: [
      'Montaj polistiren', 'Tencuială decorativă', 'Vopsire exterioară', 'Cabane de vară',
      'Terase & foișoare', 'Garduri de lemn', 'Garduri', 'Montaj uși', 'Case din lemn', 'Dulgherie',
      'Pavaje', 'Construcții la roșu', 'Structuri metalice', 'Grătare & cuptoare de grădină',
      'Amenajări grădină', 'Pontoane din lemn', 'Copertine & terase acoperite',
    ],
  },
  {
    id: 'interioare',
    title: 'Servicii interioare',
    text: 'Finisaje interioare complete — de la pardoseli și pereți, la izolații.',
    image: u('/images/galerie/scari-interioare-din-lemn-01.webp'),
    icon: 'layers',
    services: [
      'Montaj parchet', 'Montaj gresie', 'Montaj faianță', 'Vopsire interioară', 'Gletuire',
      'Izolații', 'Rigips / gips-carton', 'Lambriu & riflaj', 'Scări interioare din lemn',
    ],
  },
] as const;

export const allServices = categories.flatMap((c) => c.services);

export const reasons = [
  { icon: 'award', title: '500+ proiecte realizate', text: 'Fiecare lucrare, o dovadă.' },
  { icon: 'clock', title: 'La termen. Mereu.', text: 'Termenul din ofertă este cel din realitate.' },
  { icon: 'doc', title: 'Ofertă clară', text: 'Știi exact ce plătești, de la primul contact.' },
  { icon: 'pin', title: `În ${site.area}`, text: 'Venim la tine, indiferent de locație.' },
];

export const beforeAfter = [1, 2, 3].map((n) => ({
  before: u(`/images/before-after/before-${n}.webp`),
  after: u(`/images/before-after/after-${n}.webp`),
}));

export const gallery = [
  { src: "/images/galerie/montaj-tigla-metalica-01.webp", label: "Montaj țiglă metalică" },
  { src: "/images/galerie/montaj-tabla-clic-01.webp", label: "Montaj tablă clic" },
  { src: "/images/galerie/dulgherie-01.webp", label: "Dulgherie" },
  { src: "/images/galerie/garduri-fier-01.webp", label: "Garduri de fier" },
  { src: "/images/galerie/reparatii-acoperis-01.webp", label: "Reparații acoperiș" },
  { src: "/images/galerie/terase-foisoare-02.webp", label: "Terase & foișoare" },
  { src: "/images/galerie/montaj-tigla-ceramica-01.webp", label: "Montaj țiglă ceramică" },
  { src: "/images/galerie/montaj-tabla-clic-02.webp", label: "Montaj tablă clic" },
  { src: "/images/galerie/garduri-01.webp", label: "Garduri" },
  { src: "/images/galerie/dulgherie-02.webp", label: "Dulgherie" },
  { src: "/images/galerie/montaj-sageac-01.webp", label: "Montaj sageac" },
  { src: "/images/galerie/case-lemn-02.webp", label: "Case din lemn" },
  { src: "/images/galerie/montaj-tigla-metalica-02.webp", label: "Montaj țiglă metalică" },
  { src: "/images/galerie/garduri-fier-02.webp", label: "Garduri de fier" },
  { src: "/images/galerie/montaj-tabla-clic-03.webp", label: "Montaj tablă clic" },
  { src: "/images/galerie/izolatii-01.webp", label: "Izolații" },
  { src: "/images/galerie/reparatii-acoperis-02.webp", label: "Reparații acoperiș" },
  { src: "/images/galerie/dulgherie-03.webp", label: "Dulgherie" },
  { src: "/images/galerie/garduri-lemn-01.webp", label: "Garduri de lemn" },
  { src: "/images/galerie/terase-foisoare-06.webp", label: "Terase & foișoare" },
  { src: "/images/galerie/montaj-jgheaburi-burlane-01.webp", label: "Montaj jgheaburi & burlane" },
  { src: "/images/galerie/case-lemn-03.webp", label: "Case din lemn" },
  { src: "/images/galerie/terase-foisoare-07.webp", label: "Terase & foișoare" },
  { src: "/images/galerie/montaj-tigla-metalica-03.webp", label: "Montaj țiglă metalică" },
  { src: "/images/galerie/garduri-fier-03.webp", label: "Garduri de fier" },
  { src: "/images/galerie/montaj-tabla-clic-04.webp", label: "Montaj tablă clic" },
  { src: "/images/galerie/terase-foisoare-08.webp", label: "Terase & foișoare" },
  { src: "/images/galerie/garduri-02.webp", label: "Garduri" },
  { src: "/images/galerie/dulgherie-04.webp", label: "Dulgherie" },
  { src: "/images/galerie/vopsire-exterioara-01.webp", label: "Vopsire exterioară" },
  { src: "/images/galerie/terase-foisoare-10.webp", label: "Terase & foișoare" },
  { src: "/images/galerie/terase-foisoare-11.webp", label: "Terase & foișoare" },
  { src: "/images/galerie/terase-foisoare-12.webp", label: "Terase & foișoare" },
  { src: "/images/galerie/montaj-tabla-cutata-01.webp", label: "Montaj tablă cutată" },
  { src: "/images/galerie/mansarde-01.webp", label: "Mansarde" },
  { src: "/images/galerie/mansarde-02.webp", label: "Mansarde" },
  { src: "/images/galerie/cabane-de-vara-01.webp", label: "Cabane de vară" },
  { src: "/images/galerie/cabane-de-vara-02.webp", label: "Cabane de vară" },
  { src: "/images/galerie/cabane-de-vara-03.webp", label: "Cabane de vară" },
  { src: "/images/galerie/montaj-tapet-01.webp", label: "Montaj tapet" },
  { src: "/images/galerie/montaj-tigla-ceramica-02.webp", label: "Montaj țiglă ceramică" },
  { src: "/images/galerie/montaj-tigla-ceramica-03.webp", label: "Montaj țiglă ceramică" },
  { src: "/images/galerie/izolatii-02.webp", label: "Izolații" },
  { src: "/images/galerie/dulgherie-05.webp", label: "Dulgherie" },
  { src: "/images/galerie/montaj-tabla-clic-05.webp", label: "Montaj tablă clic" },
  { src: "/images/galerie/constructii-la-rosu-01.webp", label: "Construcții la roșu" },
  { src: "/images/galerie/gratare-cuptoare-01.webp", label: "Grătare & cuptoare" },
  { src: "/images/galerie/amenajari-gradina-01.webp", label: "Amenajări grădină" },
  { src: "/images/galerie/amenajari-gradina-02.webp", label: "Amenajări grădină" },
  { src: "/images/galerie/amenajari-gradina-03.webp", label: "Amenajări grădină" },
  { src: "/images/galerie/amenajari-gradina-04.webp", label: "Amenajări grădină" },
  { src: "/images/galerie/montaj-tabla-clic-10.webp", label: "Montaj tablă clic" },
  { src: "/images/galerie/montaj-tabla-cutata-02.webp", label: "Montaj tablă cutată" },
  { src: "/images/galerie/montaj-tigla-metalica-05.webp", label: "Montaj țiglă metalică" },
  { src: "/images/galerie/montaj-tabla-cutata-03.webp", label: "Montaj tablă cutată" },
  { src: "/images/galerie/montaj-tabla-clic-12.webp", label: "Montaj tablă clic" },
  { src: "/images/galerie/vopsire-acoperis-01.webp", label: "Vopsire acoperiș" },
  { src: "/images/galerie/montaj-ferestre-velux-01.webp", label: "Montaj ferestre Velux" },
  { src: "/images/galerie/hidroizolatii-01.webp", label: "Hidroizolații" },
  { src: "/images/galerie/montaj-polistiren-01.webp", label: "Montaj polistiren" },
  { src: "/images/galerie/tencuiala-decorativa-01.webp", label: "Tencuială decorativă" },
  { src: "/images/galerie/montaj-usi-01.webp", label: "Montaj uși" },
  { src: "/images/galerie/pavaje-01.webp", label: "Pavaje" },
  { src: "/images/galerie/structuri-metalice-01.webp", label: "Structuri metalice" },
  { src: "/images/galerie/pontoane-lemn-01.webp", label: "Pontoane din lemn" },
  { src: "/images/galerie/montaj-parchet-01.webp", label: "Montaj parchet" },
  { src: "/images/galerie/montaj-gresie-01.webp", label: "Montaj gresie" },
  { src: "/images/galerie/montaj-faianta-01.webp", label: "Montaj faianță" },
  { src: "/images/galerie/vopsire-interioara-01.webp", label: "Vopsire interioară" },
  { src: "/images/galerie/gletuire-01.webp", label: "Gletuire" },
  { src: "/images/galerie/rigips-01.webp", label: "Rigips" },
  { src: "/images/galerie/lambriu-riflaj-01.webp", label: "Lambriu & riflaj" },
  { src: "/images/galerie/scari-interioare-din-lemn-01.webp", label: "Scări interioare din lemn" },
  { src: "/images/galerie/acoperis-sindrila-01.webp", label: "Acoperiș din șindrilă" },
  { src: "/images/galerie/amenajari-gradina-05.webp", label: "Amenajări grădină" },
  { src: "/images/galerie/case-lemn-04.webp", label: "Case din lemn" },
  { src: "/images/galerie/case-lemn-05.webp", label: "Case din lemn" },
  { src: "/images/galerie/constructii-la-rosu-02.webp", label: "Construcții la roșu" },
  { src: "/images/galerie/dulgherie-06.webp", label: "Dulgherie" },
  { src: "/images/galerie/garduri-03.webp", label: "Garduri" },
  { src: "/images/galerie/gletuire-02.webp", label: "Gletuire" },
  { src: "/images/galerie/gresie-faianta-01.webp", label: "Gresie & faianță" },
  { src: "/images/galerie/montaj-acoperis-01.webp", label: "Montaj acoperiș" },
  { src: "/images/galerie/montaj-acoperis-02.webp", label: "Montaj acoperiș" },
  { src: "/images/galerie/montaj-faianta-02.webp", label: "Montaj faianță" },
  { src: "/images/galerie/montaj-parchet-02.webp", label: "Montaj parchet" },
  { src: "/images/galerie/montaj-tabla-clic-08.webp", label: "Montaj tablă clic" },
  { src: "/images/galerie/montaj-tabla-clic-11.webp", label: "Montaj tablă clic" },
  { src: "/images/galerie/pavaje-02.webp", label: "Pavaje" },
  { src: "/images/galerie/pavaje-03.webp", label: "Pavaje" },
  { src: "/images/galerie/pavaje-04.webp", label: "Pavaje" },
  { src: "/images/galerie/pavaje-05.webp", label: "Pavaje" },
  { src: "/images/galerie/rigips-gips-carton-02.webp", label: "Rigips / gips-carton" },
  { src: "/images/galerie/structuri-metalice-02.webp", label: "Structuri metalice" },
  { src: "/images/galerie/vopsire-exterioara-02.webp", label: "Vopsire exterioară" },
].map((img) => ({ ...img, src: u(img.src) }));

export const partners = ['Bilka', 'Tondach', 'Blachotrapez', 'Wetterbest', 'Lindab'].map((name) => ({
  name,
  logo: u(`/images/parteneri/${name.toLowerCase()}.svg`),
}));

export const videos = [1, 2].map((n) => ({ src: u(`/videos/testimonial-0${n}.mp4`), poster: u(`/videos/testimonial-0${n}.jpg`) }));

export const testimonials = [
  { quote: 'Sunt oameni extrem de sinceri și corecți. Le-am lăsat casa și cheile pe mână, iar la final nu mi-a lipsit nici măcar un șurub. Îi recomand tuturor cu toată încrederea!', name: 'Dan M.', role: 'Proprietar' },
  { quote: 'Sunt de profesie avocat de zeci de ani de zile și am văzut destui oameni care nu se țin de cuvânt. Pe acești meșteri însă îi recomand cu tărie, fiind convins de calificarea lor și de rezultatul excelent pe care îl oferă.', name: 'Dan M.', role: 'Proprietar' },
  { quote: 'O echipă excelentă de tată și fiu, care vin cu o seriozitate rară. Când se apucă de o lucrare, o fac foarte repede și o fac extraordinar de bine.', name: 'Dan M.', role: 'Proprietar' },
  { quote: 'Băieții au lucrat extrem de bine! Ne-au scăpat definitiv de infiltrații și de toate problemele pe care le aveam din cauza ploii, a zăpezii și a vântului.', name: 'Vlad', role: 'Pipera' },
  { quote: 'Băieții sunt extraordinari, au lucrat curat și eficient. Îi recomandăm cu mare drag și cu toată plăcerea oricui are nevoie de servicii de calitate!', name: 'Vlad', role: 'Proprietar' },
  { quote: 'Se mișcă perfect, nu stau deloc degeaba și lucrează extrem de repede. Pe lângă asta, au niște prețuri extraordinare pentru calitatea pe care o oferă.', name: 'George', role: 'Proprietar' },
  { quote: 'Sincer, nu mă așteptam la o asemenea seriozitate! Sunt oameni foarte muncitori, care își văd de treabă din prima secundă. Recomand cu toată încrederea!', name: 'George', role: 'București' },
];
