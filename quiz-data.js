// Banco domande del quiz "I Miei Libri" - Scuola Primaria.
//
// Organizzazione: una sezione per classe; dentro ogni classe le domande sono
// raggruppate per difficolta' (FACILI, MEDIE, DIFFICILI) e, dentro la difficolta',
// per argomento. L'ordine non influenza il gioco (le domande vengono estratte a
// caso), serve solo a tenere il banco leggibile e verificabile.
//
// Criteri di difficolta' (riferiti alla classe indicata):
//   facile    = riconoscere o ricordare un dato, un solo passaggio, lessico quotidiano;
//   medio     = applicare una regola, un confronto o un calcolo con riporto;
//   difficile = due passaggi, terminologia specifica, ragionamento o eccezione.
//
// Formato: { m:'Materia', cl:'classe', a:'Argomento', d:'facile|medio|difficile',
//   q:'testo domanda', ops:['A','B','C','D'], r:indice_corretto_0..3 }
const QBANCO = {

 /* ==================== CLASSE 1 - Italiano ==================== */
 '1': [
  // ---- FACILE ----
  // Alfabeto e sillabe
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'facile', q:'Quante vocali ha l’alfabeto italiano?', ops:['3','5','7','21'], r:1},
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'facile', q:'Quale di queste è una VOCALE?', ops:['T','B','R','E'], r:3},
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'facile', q:'Quante LETTERE ha l’alfabeto italiano?', ops:['24','20','21','26'], r:2},
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'facile', q:'Quale parola è formata da DUE sillabe?', ops:['TELEFONO','PENSIERO','ARCHITETTO','SOLE'], r:3},
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'facile', q:'Quale parola inizia con una VOCALE?', ops:['amico','treno','studio','lavagna'], r:0},
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'facile', q:'Come si divide in sillabe la parola "GATTO"?', ops:['GATT-O','GA-T-TO','GAT-TO','G-AT-TO'], r:2},
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'facile', q:'Quale parola ha TRE sillabe?', ops:['RE','PANE','MELA','CAVALLO'], r:3},
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'facile', q:'Quante sillabe ha la parola "PORTA"?', ops:['2','3','4','1'], r:0},
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'facile', q:'Come si divide in sillabe la parola "QUADERNO"?', ops:['QUA-DER-NO','QUAD-ER-NO','Q-UA-DER-NO','QUADER-NO'], r:0},
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'facile', q:'La parola "MELAGRANA" quante sillabe ha?', ops:['5','6','3','4'], r:3},
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'facile', q:'Come si divide in sillabe la parola "MELA"?', ops:['ME-L-A','ME-LA','M-ELA','MEL-A'], r:1},
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'facile', q:'In ogni sillaba c’è almeno una:', ops:['frase','consonante doppia','vocale','parola intera'], r:2},
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'facile', q:'Quale lettera NON fa parte dell’alfabeto italiano tradizionale?', ops:['J','V','Z','Q'], r:0},
  // Il nome
 {m:'Italiano', cl:'1', a:'Il nome', d:'facile', q:'Quale lista contiene SOLO nomi PROPRI?', ops:['cane, gatto','casa, scuola','libro, penna','Paolo, Roma'], r:3},
  // Articoli
 {m:'Italiano', cl:'1', a:'Articoli', d:'facile', q:'Completa: ___ casa', ops:['i','il','la','lo'], r:2},
 {m:'Italiano', cl:'1', a:'Articoli', d:'facile', q:'Completa: ___ pane', ops:['la','le','lo','il'], r:3},
  // Suoni speciali
 {m:'Italiano', cl:'1', a:'Suoni speciali', d:'facile', q:'La "H" nella parola "HO" si legge?', ops:['come "aca"','come una g','come una h forte','non si legge affatto'], r:3},
 {m:'Italiano', cl:'1', a:'Suoni speciali', d:'facile', q:'In "CIAMBELLA" la "CI" suona:', ops:['dolce, come "cia"','come "sci"','come "ca"','dura, come "kia"'], r:0},
 {m:'Italiano', cl:'1', a:'Suoni speciali', d:'facile', q:'Quale parola ha la C dura (come in "casa")?', ops:['ciliegia','cena','cinema','cane'], r:3},
  // ---- MEDIO ----
  // Alfabeto e sillabe
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'medio', q:'Quante lettere ha la parola "SCUOLA"?', ops:['7','4','5','6'], r:3},
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'medio', q:'In ordine alfabetico, quale parola viene PRIMA?', ops:['ARIA','AMICO','ASTA','ALBA'], r:3},
  // Il nome
 {m:'Italiano', cl:'1', a:'Il nome', d:'medio', q:'Quale di questi è un nome PROPRIO?', ops:['cane','Marco','scuola','palla'], r:1},
 {m:'Italiano', cl:'1', a:'Il nome', d:'medio', q:'Quale di questi è un nome COMUNE?', ops:['Luca','Anna','Roma','città'], r:3},
 {m:'Italiano', cl:'1', a:'Il nome', d:'medio', q:'Quale nome indica un OGGETTO?', ops:['cuoco','cane','libro','bambina'], r:2},
 {m:'Italiano', cl:'1', a:'Il nome', d:'medio', q:'Il nome "gatto" è:', ops:['un nome proprio','un nome comune','un nome di città','una vocale'], r:1},
 {m:'Italiano', cl:'1', a:'Il nome', d:'medio', q:'Quale di questi nomi indica un ANIMALE?', ops:['tavola','libro','mela','coniglio'], r:3},
 {m:'Italiano', cl:'1', a:'Il nome', d:'medio', q:'Il nome "LUNA" è:', ops:['plurale','un verbo','maschile','femminile'], r:3},
 {m:'Italiano', cl:'1', a:'Il nome', d:'medio', q:'Il nome "BICICLETTA" indica:', ops:['un animale','un oggetto','un colore','una persona'], r:1},
 {m:'Italiano', cl:'1', a:'Il nome', d:'medio', q:'Il nome "amici" è al:', ops:['singolare','plurale','diminutivo','infinito'], r:1},
 {m:'Italiano', cl:'1', a:'Il nome', d:'medio', q:'Quale coppia contiene DUE nomi comuni?', ops:['gatto, libro','Maria, Paola','Italia, anno','Roma, Milano'], r:0},
  // Articoli
 {m:'Italiano', cl:'1', a:'Articoli', d:'medio', q:'Completa: ___ gatto (quale articolo è giusto?)', ops:['il','lo','la','gli'], r:0},
 {m:'Italiano', cl:'1', a:'Articoli', d:'medio', q:'Quale articolo è FEMMINILE?', ops:['lo','la','gli','il'], r:1},
 {m:'Italiano', cl:'1', a:'Articoli', d:'medio', q:'Completa: ___ zaino', ops:['il','lo','la','le'], r:1},
 {m:'Italiano', cl:'1', a:'Articoli', d:'medio', q:'Quale è GIUSTO?', ops:['lo gatto','il amico','lo zaino','il zaino'], r:2},
 {m:'Italiano', cl:'1', a:'Articoli', d:'medio', q:'Completa: ___ amici', ops:['gli','le','il','lo'], r:0},
 {m:'Italiano', cl:'1', a:'Articoli', d:'medio', q:'Completa: ___ libri', ops:['lo','i','la','il'], r:1},
 {m:'Italiano', cl:'1', a:'Articoli', d:'medio', q:'Completa: ___ ragazzo (articolo INDETERMINATIVO)', ops:['uno','un','una','il'], r:1},
 {m:'Italiano', cl:'1', a:'Articoli', d:'medio', q:'Quali sono gli articoli INDETERMINATIVI?', ops:['il, lo, la','un, uno, una','i, gli, le','il, la'], r:1},
 {m:'Italiano', cl:'1', a:'Articoli', d:'medio', q:'Quale frase è scritta bene?', ops:['Ieri ho giocato a calcio','Ieri gioco a calcio','Ieri giocato a calcio','Ieri io gioca a calcio'], r:0},
  // Suoni speciali
 {m:'Italiano', cl:'1', a:'Suoni speciali', d:'medio', q:'In "GELATO" la "GE" suona:', ops:['come "que"','dura, come "ghe"','dolce, come "gie"','come "che"'], r:2},
 {m:'Italiano', cl:'1', a:'Suoni speciali', d:'medio', q:'Quale parola ha la G dura?', ops:['gemma','giorno','giallo','gonna'], r:3},
 {m:'Italiano', cl:'1', a:'Suoni speciali', d:'medio', q:'Quale parola ha un suono DOLCE di C?', ops:['cipolla','camera','colore','cane'], r:0},
  // ---- DIFFICILE ----
  // Alfabeto e sillabe
 {m:'Italiano', cl:'1', a:'Alfabeto e sillabe', d:'difficile', q:'In ordine alfabetico, quale di queste parole viene per prima?', ops:['LUNA','SOLE','STELLA','NUVOLA'], r:0},
  // Il nome
 {m:'Italiano', cl:'1', a:'Il nome', d:'difficile', q:'I nomi delle PERSONE si scrivono con l’iniziale:', ops:['in corsivo sempre','minuscola','maiuscola','minuscola con puntino'], r:2},
 {m:'Italiano', cl:'1', a:'Il nome', d:'difficile', q:'I nomi dei MESI dell’anno si scrivono:', ops:['tutto maiuscolo','con l’apostrofo','con la maiuscola','con la minuscola'], r:3},
  // Articoli
 {m:'Italiano', cl:'1', a:'Articoli', d:'difficile', q:'Completa: ___ scuola', ops:['i','il','lo','la'], r:3},
 {m:'Italiano', cl:'1', a:'Articoli', d:'difficile', q:'Completa: ___ zucchero', ops:['la','i','il','lo'], r:3},
 {m:'Italiano', cl:'1', a:'Articoli', d:'difficile', q:'Completa: ___ albero', ops:['lo','l’','gli','il'], r:1},
  // Suoni speciali
 {m:'Italiano', cl:'1', a:'Suoni speciali', d:'difficile', q:'In "GNOMO" il suono "GN" è lo stesso di:', ops:['pane','ragno','notte','gatto'], r:1},
 {m:'Italiano', cl:'1', a:'Suoni speciali', d:'difficile', q:'In "FOGLIO" il suono "GLI" è lo stesso di:', ops:['palo','figlio','gatto','ghiaccio'], r:1},
 ],

 /* ==================== CLASSE 1 - Arte e Immagine ==================== */
 '1A': [
  // ---- FACILE ----
  // I colori primari
 {m:'Arte e Immagine', cl:'1', a:'I colori primari', d:'facile', q:'I colori primari sono:', ops:['rosso, giallo e blu','verde, arancione e viola','nero, bianco e grigio','rosa e azzurro'], r:0},
  // Le forme
 {m:'Arte e Immagine', cl:'1', a:'Le forme', d:'facile', q:'Il cerchio è:', ops:['triangolare','rettangolare','tondo','quadrato'], r:2},
 {m:'Arte e Immagine', cl:'1', a:'Le forme', d:'facile', q:'Il quadrato ha:', ops:['3 lati','5 lati','nessun lato','4 lati uguali'], r:3},
 {m:'Arte e Immagine', cl:'1', a:'Le forme', d:'facile', q:'Una figura con 3 lati è:', ops:['il cerchio','il rettangolo','il triangolo','il quadrato'], r:2},
 {m:'Arte e Immagine', cl:'1', a:'Le forme', d:'facile', q:'La figura senza lati è:', ops:['il quadrato','il triangolo','il rettangolo','il cerchio'], r:3},
  // I colori secondari
 {m:'Arte e Immagine', cl:'1', a:'I colori secondari', d:'facile', q:'I colori secondari sono:', ops:['verde, arancione e viola','rosso, giallo e blu','nero, bianco e grigio','rosa e azzurro'], r:0},
 {m:'Arte e Immagine', cl:'1', a:'I colori secondari', d:'facile', q:'Giallo + blu dà:', ops:['il rosso','il verde','l’arancione','il viola'], r:1},
 {m:'Arte e Immagine', cl:'1', a:'I colori secondari', d:'facile', q:'Rosso + giallo dà:', ops:['il viola','il blu','l’arancione','il verde'], r:2},
 {m:'Arte e Immagine', cl:'1', a:'I colori secondari', d:'facile', q:'Rosso + blu dà:', ops:['l’arancione','il verde','il giallo','il viola'], r:3},
  // Disegnare
 {m:'Arte e Immagine', cl:'1', a:'Disegnare', d:'facile', q:'Per disegnare si usa:', ops:['il cucchiaio','il bicchiere','la matita','la forchetta'], r:2},
 {m:'Arte e Immagine', cl:'1', a:'Disegnare', d:'facile', q:'Il foglio serve per:', ops:['mangiare','dormire','correre','disegnare'], r:3},
 {m:'Arte e Immagine', cl:'1', a:'Disegnare', d:'facile', q:'Con le matite colorate si:', ops:['colora','cucina','nuota','guida'], r:0},
 {m:'Arte e Immagine', cl:'1', a:'Disegnare', d:'facile', q:'La gomma serve per:', ops:['incollare','cancellare','colorare','tagliare'], r:1},
 {m:'Arte e Immagine', cl:'1', a:'Disegnare', d:'facile', q:'Il contorno di un disegno è:', ops:['il centro','il colore','lo sfondo','il bordo delle forme'], r:3},
 {m:'Arte e Immagine', cl:'1', a:'Disegnare', d:'facile', q:'Lo sfondo è:', ops:['la parte dietro al soggetto','il soggetto principale','la cornice','la matita'], r:0},
  // Le linee
 {m:'Arte e Immagine', cl:'1', a:'Le linee', d:'facile', q:'La linea è:', ops:['un segno che unisce due punti','un punto solo','un colore','un cerchio'], r:0},
 {m:'Arte e Immagine', cl:'1', a:'Le linee', d:'facile', q:'La linea retta va:', ops:['a spirale','dritta','a zig-zag','in tondo'], r:1},
 {m:'Arte e Immagine', cl:'1', a:'Le linee', d:'facile', q:'La linea a zig-zag va:', ops:['sempre dritta','in tondo','mai','su e giù'], r:3},
  // ---- MEDIO ----
  // I colori primari
 {m:'Arte e Immagine', cl:'1', a:'I colori primari', d:'medio', q:'I colori primari servono per:', ops:['creare gli altri colori','solo dipingere il cielo','solo i fiori','nulla'], r:0},
 {m:'Arte e Immagine', cl:'1', a:'I colori primari', d:'medio', q:'Quale colore NON è primario?', ops:['il blu','il verde','il rosso','il giallo'], r:1},
 {m:'Arte e Immagine', cl:'1', a:'I colori primari', d:'medio', q:'Mescolando due primari si ottengono:', ops:['solo il bianco','nulla','i colori secondari','solo il nero'], r:2},
 {m:'Arte e Immagine', cl:'1', a:'I colori primari', d:'medio', q:'I primari si chiamano così perché:', ops:['sono i più scuri','sono i più chiari','sono i più rari','non si ottengono mescolando altri colori'], r:3},
  // Le forme
 {m:'Arte e Immagine', cl:'1', a:'Le forme', d:'medio', q:'Il quadrato è un tipo di:', ops:['rettangolo','cerchio','triangolo','linea'], r:0},
  // I colori secondari
 {m:'Arte e Immagine', cl:'1', a:'I colori secondari', d:'medio', q:'Il verde si ottiene mescolando:', ops:['giallo e blu','rosso e giallo','rosso e blu','bianco e nero'], r:0},
 {m:'Arte e Immagine', cl:'1', a:'I colori secondari', d:'medio', q:'L’arancione si ottiene mescolando:', ops:['verde e viola','rosso e giallo','giallo e blu','rosso e blu'], r:1},
 {m:'Arte e Immagine', cl:'1', a:'I colori secondari', d:'medio', q:'Il viola si ottiene mescolando:', ops:['giallo e blu','bianco e nero','rosso e blu','rosso e giallo'], r:2},
  // Disegnare
 {m:'Arte e Immagine', cl:'1', a:'Disegnare', d:'medio', q:'Un disegno inizia di solito da:', ops:['una foto','un suono','una bozza a matita','un colore finito'], r:2},
  // Le linee
 {m:'Arte e Immagine', cl:'1', a:'Le linee', d:'medio', q:'Le linee servono per:', ops:['disegnare i contorni','cucinare','dormire','correre'], r:0},
 {m:'Arte e Immagine', cl:'1', a:'Le linee', d:'medio', q:'Una linea che chiude una forma si chiama:', ops:['sfondo','contorno','punto','colore'], r:1},
 {m:'Arte e Immagine', cl:'1', a:'Le linee', d:'medio', q:'Le linee possono essere:', ops:['solo curve','solo invisibili','dritte, curve e spezzate','solo dritte'], r:2},
  // ---- DIFFICILE ----
  // I colori primari
 {m:'Arte e Immagine', cl:'1', a:'I colori primari', d:'difficile', q:'Un primario mescolato con un altro primario dà:', ops:['un secondario','un primario','il nero','il bianco'], r:0},
 {m:'Arte e Immagine', cl:'1', a:'I colori primari', d:'difficile', q:'Nella stampa si usano i primari:', ops:['verde e viola','magenta, giallo e ciano','rosso, giallo e blu','nero e bianco'], r:1},
  // Le forme
 {m:'Arte e Immagine', cl:'1', a:'Le forme', d:'difficile', q:'Il pentagono ha:', ops:['8 lati','5 lati','4 lati','6 lati'], r:1},
 {m:'Arte e Immagine', cl:'1', a:'Le forme', d:'difficile', q:'L’esagono ha:', ops:['4 lati','8 lati','6 lati','5 lati'], r:2},
 {m:'Arte e Immagine', cl:'1', a:'Le forme', d:'difficile', q:'Un disegno può essere fatto combinando:', ops:['un solo punto','nessuna forma','solo linee dritte','forme diverse'], r:3},
  // I colori secondari
 {m:'Arte e Immagine', cl:'1', a:'I colori secondari', d:'difficile', q:'I secondari si ottengono mescolando:', ops:['tre primari','un primario e il nero','due secondari','due primari'], r:3},
 {m:'Arte e Immagine', cl:'1', a:'I colori secondari', d:'difficile', q:'Mescolando tutti i primari si ottiene:', ops:['un colore scuro','un colore chiaro','il bianco','un colore trasparente'], r:0},
  // Disegnare
 {m:'Arte e Immagine', cl:'1', a:'Disegnare', d:'difficile', q:'Per colorare dentro i bordi serve:', ops:['chiudere gli occhi','attenzione e calma','velocità','rumore'], r:1},
 {m:'Arte e Immagine', cl:'1', a:'Disegnare', d:'difficile', q:'Un disegno finito si può:', ops:['nascondere','strappare','appendere o regalare','buttare sempre'], r:2},
 {m:'Arte e Immagine', cl:'1', a:'Disegnare', d:'difficile', q:'Per disegnare meglio serve:', ops:['non provare mai','dormire','correre','esercitarsi'], r:3},
  // Le linee
 {m:'Arte e Immagine', cl:'1', a:'Le linee', d:'difficile', q:'Una linea spessa si ottiene:', ops:['premendo meno','usando la gomma','chiudendo gli occhi','premendo di più la matita'], r:3},
 {m:'Arte e Immagine', cl:'1', a:'Le linee', d:'difficile', q:'La spirale è una linea:', ops:['che gira su se stessa','sempre dritta','sempre spezzata','che non esiste'], r:0},
 {m:'Arte e Immagine', cl:'1', a:'Le linee', d:'difficile', q:'Con le linee si possono creare:', ops:['solo colori','disegni e decorazioni','solo punti','solo suoni'], r:1},
 ],

 /* ==================== CLASSE 1 - Inglese ==================== */
 '1E': [
  // ---- FACILE ----
  // Colori
 {m:'Inglese', cl:'1', a:'Colori', d:'facile', q:'"Red" significa:', ops:['rosso','blu','verde','giallo'], r:0},
 {m:'Inglese', cl:'1', a:'Colori', d:'facile', q:'"Blue" significa:', ops:['nero','blu','rosso','bianco'], r:1},
 {m:'Inglese', cl:'1', a:'Colori', d:'facile', q:'"Yellow" significa:', ops:['blu','rosso','giallo','verde'], r:2},
 {m:'Inglese', cl:'1', a:'Colori', d:'facile', q:'"Green" significa:', ops:['rosso','giallo','blu','verde'], r:3},
 {m:'Inglese', cl:'1', a:'Colori', d:'facile', q:'"Black" significa:', ops:['nero','bianco','grigio','rosso'], r:0},
 {m:'Inglese', cl:'1', a:'Colori', d:'facile', q:'"White" significa:', ops:['blu','bianco','nero','grigio'], r:1},
 {m:'Inglese', cl:'1', a:'Colori', d:'facile', q:'Il colore "orange" è:', ops:['rosa','marrone','arancione','viola'], r:2},
 {m:'Inglese', cl:'1', a:'Colori', d:'facile', q:'"Pink" significa:', ops:['marrone','viola','grigio','rosa'], r:3},
 {m:'Inglese', cl:'1', a:'Colori', d:'facile', q:'Il colore "purple" è:', ops:['viola','arancione','rosa','verde'], r:0},
 {m:'Inglese', cl:'1', a:'Colori', d:'facile', q:'"Brown" significa:', ops:['arancione','marrone','rosa','viola'], r:1},
  // Numeri
 {m:'Inglese', cl:'1', a:'Numeri', d:'facile', q:'"One" significa:', ops:['tre','quattro','uno','due'], r:2},
 {m:'Inglese', cl:'1', a:'Numeri', d:'facile', q:'"Two" significa:', ops:['uno','tre','quattro','due'], r:3},
 {m:'Inglese', cl:'1', a:'Numeri', d:'facile', q:'"Three" significa:', ops:['tre','due','quattro','cinque'], r:0},
 {m:'Inglese', cl:'1', a:'Numeri', d:'facile', q:'"Four" significa:', ops:['sei','quattro','tre','cinque'], r:1},
 {m:'Inglese', cl:'1', a:'Numeri', d:'facile', q:'"Five" significa:', ops:['sei','sette','cinque','quattro'], r:2},
 {m:'Inglese', cl:'1', a:'Numeri', d:'facile', q:'"Six" significa:', ops:['cinque','sette','otto','sei'], r:3},
 {m:'Inglese', cl:'1', a:'Numeri', d:'facile', q:'"Seven" significa:', ops:['sette','sei','otto','nove'], r:0},
 {m:'Inglese', cl:'1', a:'Numeri', d:'facile', q:'"Eight" significa:', ops:['dieci','otto','sette','nove'], r:1},
 {m:'Inglese', cl:'1', a:'Numeri', d:'facile', q:'"Nine" significa:', ops:['dieci','undici','nove','otto'], r:2},
 {m:'Inglese', cl:'1', a:'Numeri', d:'facile', q:'"Ten" significa:', ops:['nove','undici','dodici','dieci'], r:3},
  // Saluti
 {m:'Inglese', cl:'1', a:'Saluti', d:'facile', q:'"Hello" significa:', ops:['ciao','arrivederci','grazie','per favore'], r:0},
 {m:'Inglese', cl:'1', a:'Saluti', d:'facile', q:'"Good morning" significa:', ops:['ciao','buongiorno','buonanotte','buonasera'], r:1},
 {m:'Inglese', cl:'1', a:'Saluti', d:'facile', q:'"Goodbye" significa:', ops:['grazie','scusa','arrivederci','ciao (arrivo)'], r:2},
 {m:'Inglese', cl:'1', a:'Saluti', d:'facile', q:'"Thank you" significa:', ops:['per favore','scusa','ciao','grazie'], r:3},
 {m:'Inglese', cl:'1', a:'Saluti', d:'facile', q:'"Please" significa:', ops:['per favore','grazie','scusa','ciao'], r:0},
 {m:'Inglese', cl:'1', a:'Saluti', d:'facile', q:'"Good night" significa:', ops:['ciao','buonanotte','buongiorno','buonasera'], r:1},
 {m:'Inglese', cl:'1', a:'Saluti', d:'facile', q:'"I am fine" significa:', ops:['sto male','ho fame','ho sete','sto bene'], r:3},
  // Animali
 {m:'Inglese', cl:'1', a:'Animali', d:'facile', q:'"Cat" significa:', ops:['topo','cavallo','gatto','cane'], r:2},
 {m:'Inglese', cl:'1', a:'Animali', d:'facile', q:'"Dog" significa:', ops:['gatto','uccello','pesce','cane'], r:3},
 {m:'Inglese', cl:'1', a:'Animali', d:'facile', q:'"Bird" significa:', ops:['uccello','pesce','cane','gatto'], r:0},
 {m:'Inglese', cl:'1', a:'Animali', d:'facile', q:'"Fish" significa:', ops:['cavallo','pesce','uccello','cane'], r:1},
 {m:'Inglese', cl:'1', a:'Animali', d:'facile', q:'"Horse" significa:', ops:['pecora','maiale','cavallo','mucca'], r:2},
 {m:'Inglese', cl:'1', a:'Animali', d:'facile', q:'"Cow" significa:', ops:['cavallo','pecora','capra','mucca'], r:3},
 {m:'Inglese', cl:'1', a:'Animali', d:'facile', q:'"Mouse" significa:', ops:['topo','gatto','cane','coniglio'], r:0},
 {m:'Inglese', cl:'1', a:'Animali', d:'facile', q:'"Rabbit" significa:', ops:['cane','coniglio','topo','gatto'], r:1},
 {m:'Inglese', cl:'1', a:'Animali', d:'facile', q:'"Sheep" significa:', ops:['cavallo','capra','pecora','mucca'], r:2},
 {m:'Inglese', cl:'1', a:'Animali', d:'facile', q:'"Duck" significa:', ops:['gallina','cigno','oca','anatra'], r:3},
  // La famiglia
 {m:'Inglese', cl:'1', a:'La famiglia', d:'facile', q:'"Mother" significa:', ops:['mamma','papà','nonna','sorella'], r:0},
 {m:'Inglese', cl:'1', a:'La famiglia', d:'facile', q:'"Father" significa:', ops:['fratello','papà','mamma','nonno'], r:1},
 {m:'Inglese', cl:'1', a:'La famiglia', d:'facile', q:'"Brother" significa:', ops:['cugino','zio','fratello','sorella'], r:2},
 {m:'Inglese', cl:'1', a:'La famiglia', d:'facile', q:'"Sister" significa:', ops:['fratello','mamma','nonna','sorella'], r:3},
 {m:'Inglese', cl:'1', a:'La famiglia', d:'facile', q:'"Grandmother" significa:', ops:['nonna','nonno','mamma','zia'], r:0},
 {m:'Inglese', cl:'1', a:'La famiglia', d:'facile', q:'"Grandfather" significa:', ops:['zio','nonno','nonna','papà'], r:1},
 {m:'Inglese', cl:'1', a:'La famiglia', d:'facile', q:'"Family" significa:', ops:['casa','amici','famiglia','scuola'], r:2},
 {m:'Inglese', cl:'1', a:'La famiglia', d:'facile', q:'"Uncle" significa:', ops:['cugino','nonno','fratello','zio'], r:3},
 {m:'Inglese', cl:'1', a:'La famiglia', d:'facile', q:'"Aunt" significa:', ops:['zia','cugina','nonna','sorella'], r:0},
 {m:'Inglese', cl:'1', a:'La famiglia', d:'facile', q:'"Baby" significa:', ops:['nonno','bebè','bambino grande','adulto'], r:1},
  // ---- MEDIO ----
  // Saluti e frasi utili
 {m:'Inglese', cl:'1', a:'Saluti e frasi utili', d:'medio', q:'Al mattino si saluta dicendo:', ops:['Good morning','Good night','Good afternoon','Goodbye'], r:0},
 {m:'Inglese', cl:'1', a:'Saluti e frasi utili', d:'medio', q:'Come si dice "grazie" in inglese?', ops:['Thank you','Please','Sorry','Hello'], r:0},
  // ---- DIFFICILE ----
  // Saluti
 {m:'Inglese', cl:'1', a:'Saluti', d:'difficile', q:'"How are you?" significa:', ops:['chi sei?','che ora è?','come stai?','dove sei?'], r:2},
 {m:'Inglese', cl:'1', a:'Saluti', d:'difficile', q:'"What is your name?" significa:', ops:['come ti chiami?','dove abiti?','quanti anni hai?','che fai?'], r:0},
 {m:'Inglese', cl:'1', a:'Saluti', d:'difficile', q:'"My name is..." significa:', ops:['vado a...','mi chiamo...','ho...','sono di...'], r:1},
 ],

 /* ==================== CLASSE 1 - Educazione Civica ==================== */
 '1EC': [
  // ---- FACILE ----
  // La famiglia
 {m:'Educazione Civica', cl:'1', a:'La famiglia', d:'facile', q:'La famiglia è formata da:', ops:['solo animali','solo case','persone che si vogliono bene','solo giocattoli'], r:2},
 {m:'Educazione Civica', cl:'1', a:'La famiglia', d:'facile', q:'I nonni sono:', ops:['da rispettare','da ignorare','da deridere','da allontanare'], r:0},
 {m:'Educazione Civica', cl:'1', a:'La famiglia', d:'facile', q:'In famiglia ci si:', ops:['litiga sempre','si ignora','sta da soli','aiuta a vicenda'], r:3},
 {m:'Educazione Civica', cl:'1', a:'La famiglia', d:'facile', q:'I genitori si prendono cura:', ops:['dei figli','solo di sé','solo della casa','di nessuno'], r:0},
 {m:'Educazione Civica', cl:'1', a:'La famiglia', d:'facile', q:'A casa bisogna:', ops:['rompere','aiutare','sporcare','urlare'], r:1},
 {m:'Educazione Civica', cl:'1', a:'La famiglia', d:'facile', q:'Mettere in ordine i giochi è:', ops:['inutile','sbagliato','un aiuto','un peso'], r:2},
 {m:'Educazione Civica', cl:'1', a:'La famiglia', d:'facile', q:'Volersi bene in famiglia significa:', ops:['ignorarsi','competere','aiutarsi e rispettarsi','litigare'], r:2},
  // La scuola
 {m:'Educazione Civica', cl:'1', a:'La scuola', d:'facile', q:'A scuola si va per:', ops:['imparare','dormire','giocare soltanto','correre'], r:0},
 {m:'Educazione Civica', cl:'1', a:'La scuola', d:'facile', q:'In classe si deve:', ops:['litigare','stare attenti','gridare','correre'], r:1},
 {m:'Educazione Civica', cl:'1', a:'La scuola', d:'facile', q:'La maestra va:', ops:['derisa','interrotta','ascoltata','ignorata'], r:2},
 {m:'Educazione Civica', cl:'1', a:'La scuola', d:'facile', q:'I compagni vanno:', ops:['derisi','picchiati','ignorati','rispettati'], r:3},
 {m:'Educazione Civica', cl:'1', a:'La scuola', d:'facile', q:'Prendersi cura della scuola significa:', ops:['non sporcare e non rompere','sporcare','rompere','buttare tutto'], r:0},
  // Le regole
 {m:'Educazione Civica', cl:'1', a:'Le regole', d:'facile', q:'A scuola le regole servono per:', ops:['correre','stare bene in classe','fare rumore','litigare'], r:1},
 {m:'Educazione Civica', cl:'1', a:'Le regole', d:'facile', q:'Rispettare le regole è:', ops:['inutile','noioso','giusto','sbagliato'], r:2},
 {m:'Educazione Civica', cl:'1', a:'Le regole', d:'facile', q:'In casa ci sono:', ops:['solo giochi','solo dolci','nessuna regola','regole da seguire'], r:3},
 {m:'Educazione Civica', cl:'1', a:'Le regole', d:'facile', q:'Una regola della strada è:', ops:['attraversare sulle strisce','correre in strada','attraversare col rosso','giocare in strada'], r:0},
  // Il rispetto
 {m:'Educazione Civica', cl:'1', a:'Il rispetto', d:'facile', q:'Rispettare gli altri significa:', ops:['ignorarli','deriderli','trattarli bene','trattarli male'], r:2},
 {m:'Educazione Civica', cl:'1', a:'Il rispetto', d:'facile', q:'Dire "grazie" è:', ops:['educato','maleducato','inutile','sbagliato'], r:0},
 {m:'Educazione Civica', cl:'1', a:'Il rispetto', d:'facile', q:'Chiedere "per favore" è:', ops:['sbagliato','educato','maleducato','inutile'], r:1},
 {m:'Educazione Civica', cl:'1', a:'Il rispetto', d:'facile', q:'Rispettare le cose degli altri significa:', ops:['sporcarle','nasconderle','non romperle','romperle'], r:2},
 {m:'Educazione Civica', cl:'1', a:'Il rispetto', d:'facile', q:'Prendere in giro un compagno è:', ops:['gentilezza','coraggio','mancanza di rispetto','rispetto'], r:2},
 {m:'Educazione Civica', cl:'1', a:'Il rispetto', d:'facile', q:'Rispettare gli adulti significa:', ops:['ignorarli','urlare','deriderli','ascoltarli con attenzione'], r:3},
  // La sicurezza
 {m:'Educazione Civica', cl:'1', a:'La sicurezza', d:'facile', q:'Il semaforo rosso significa:', ops:['saltare','fermarsi','passare','correre'], r:1},
 {m:'Educazione Civica', cl:'1', a:'La sicurezza', d:'facile', q:'Il semaforo verde significa:', ops:['correre','chiudere gli occhi','passare con attenzione','fermarsi'], r:2},
  // ---- MEDIO ----
  // Le regole
 {m:'Educazione Civica', cl:'1', a:'Le regole', d:'medio', q:'Chi non rispetta le regole:', ops:['non sbaglia mai','può far male agli altri','sta sempre bene','vince sempre'], r:1},
 {m:'Educazione Civica', cl:'1', a:'Le regole', d:'medio', q:'La maestra spiega le regole per:', ops:['annoiarci','spaventarci','aiutarci','punirci'], r:2},
  // La scuola
 {m:'Educazione Civica', cl:'1', a:'La scuola', d:'medio', q:'Alzare la mano serve per:', ops:['chiedere la parola','gridare','disturbare','correre'], r:0},
 {m:'Educazione Civica', cl:'1', a:'La scuola', d:'medio', q:'Il banco va tenuto:', ops:['pieno di carte','in ordine','sporco','rotto'], r:1},
 {m:'Educazione Civica', cl:'1', a:'La scuola', d:'medio', q:'Fare i compiti serve per:', ops:['perdere tempo','dormire','imparare meglio','annoiarsi'], r:2},
  // La famiglia
 {m:'Educazione Civica', cl:'1', a:'La famiglia', d:'medio', q:'In famiglia si parla:', ops:['solo urlando','mai','solo litigando','con calma'], r:3},
  // ---- DIFFICILE ----
  // La scuola
 {m:'Educazione Civica', cl:'1', a:'La scuola', d:'difficile', q:'La ricreazione serve per:', ops:['gridare','riposare e giocare','litigare','correre nei corridoi'], r:1},
 {m:'Educazione Civica', cl:'1', a:'La scuola', d:'difficile', q:'La scuola è un luogo:', ops:['di nessuno','solo dei maestri','solo del preside','di tutti'], r:3},
  // Le regole
 {m:'Educazione Civica', cl:'1', a:'Le regole', d:'difficile', q:'Le regole valgono per:', ops:['solo i bambini','solo gli adulti','nessuno','tutti'], r:3},
  // La famiglia
 {m:'Educazione Civica', cl:'1', a:'La famiglia', d:'difficile', q:'In famiglia ognuno ha:', ops:['solo diritti','il suo ruolo','nessun ruolo','solo doveri'], r:1},
 ],

 /* ==================== CLASSE 1 - Educazione Fisica ==================== */
 '1EF': [
  // ---- FACILE ----
  // Il corpo
 {m:'Educazione Fisica', cl:'1', a:'Il corpo', d:'facile', q:'Il nostro corpo ha:', ops:['due braccia e due gambe','tre braccia','una gamba','quattro teste'], r:0},
 {m:'Educazione Fisica', cl:'1', a:'Il corpo', d:'facile', q:'Con le gambe noi:', ops:['annusiamo','camminiamo','vediamo','sentiamo'], r:1},
 {m:'Educazione Fisica', cl:'1', a:'Il corpo', d:'facile', q:'Con le mani noi:', ops:['sentiamo','annusiamo','afferriamo','vediamo'], r:2},
 {m:'Educazione Fisica', cl:'1', a:'Il corpo', d:'facile', q:'Il corpo va tenuto:', ops:['sporco','fermo','chiuso','pulito'], r:3},
  // I movimenti
 {m:'Educazione Fisica', cl:'1', a:'I movimenti', d:'facile', q:'Correre è un:', ops:['suono','cibo','movimento','colore'], r:2},
 {m:'Educazione Fisica', cl:'1', a:'I movimenti', d:'facile', q:'Muoversi a ritmo di musica è:', ops:['divertente','impossibile','pericoloso sempre','inutile'], r:0},
  // I giochi
 {m:'Educazione Fisica', cl:'1', a:'I giochi', d:'facile', q:'Giocare con gli altri è:', ops:['divertente','triste','noioso','impossibile'], r:0},
 {m:'Educazione Fisica', cl:'1', a:'I giochi', d:'facile', q:'Un gioco all’aperto è:', ops:['guardare la tv','nascondino','dormire','leggere'], r:1},
 {m:'Educazione Fisica', cl:'1', a:'I giochi', d:'facile', q:'La palla si lancia con:', ops:['gli occhi','il naso','le mani','i piedi soltanto'], r:2},
 {m:'Educazione Fisica', cl:'1', a:'I giochi', d:'facile', q:'Giocare insieme insegna a:', ops:['litigare','isolarsi','vincere sempre','stare con gli altri'], r:3},
  // Lo sport
 {m:'Educazione Fisica', cl:'1', a:'Lo sport', d:'facile', q:'Lo sport fa:', ops:['nulla','solo dormire','bene al corpo','male sempre'], r:2},
 {m:'Educazione Fisica', cl:'1', a:'Lo sport', d:'facile', q:'Il calcio si gioca con:', ops:['il libro','la matita','il cucchiaio','la palla'], r:3},
 {m:'Educazione Fisica', cl:'1', a:'Lo sport', d:'facile', q:'Lo sport si fa:', ops:['mai','con il corpo','solo con gli occhi','solo con i capelli'], r:1},
 {m:'Educazione Fisica', cl:'1', a:'Lo sport', d:'facile', q:'Fare sport insieme è:', ops:['brutto','inutile','dannoso','bello'], r:3},
  // La salute
 {m:'Educazione Fisica', cl:'1', a:'La salute', d:'facile', q:'Per stare bene a tavola bisogna:', ops:['mangiare sano','mangiare solo dolci','non dormire','non muoversi'], r:0},
 {m:'Educazione Fisica', cl:'1', a:'La salute', d:'facile', q:'Lavarsi le mani serve per:', ops:['sporcarsi','dormire','correre','non ammalarsi'], r:3},
  // ---- MEDIO ----
  // Il corpo
 {m:'Educazione Fisica', cl:'1', a:'Il corpo', d:'medio', q:'La testa sta:', ops:['nelle mani','dietro le ginocchia','sopra il corpo','sotto i piedi'], r:2},
 {m:'Educazione Fisica', cl:'1', a:'Il corpo', d:'medio', q:'Le mani si lavano:', ops:['solo di notte','spesso','mai','una volta all’anno'], r:1},
  // I movimenti
 {m:'Educazione Fisica', cl:'1', a:'I movimenti', d:'medio', q:'Piegarsi si fa con:', ops:['i capelli','le orecchie','il corpo','gli occhi'], r:2},
 {m:'Educazione Fisica', cl:'1', a:'I movimenti', d:'medio', q:'Rotolare si fa:', ops:['in cielo','sull’acqua','mai','per terra'], r:3},
  // I giochi
 {m:'Educazione Fisica', cl:'1', a:'I giochi', d:'medio', q:'Quando si gioca bisogna:', ops:['rispettare le regole','barare','litigare','scappare'], r:0},
 {m:'Educazione Fisica', cl:'1', a:'I giochi', d:'medio', q:'Il gioco della campana si fa:', ops:['leggendo','saltando','nuotando','dormendo'], r:1},
 {m:'Educazione Fisica', cl:'1', a:'I giochi', d:'medio', q:'Dopo aver giocato si:', ops:['dorme per sempre','corre ancora','riposa','piange'], r:2},
 {m:'Educazione Fisica', cl:'1', a:'I giochi', d:'medio', q:'Vincere non è:', ops:['la cosa più importante','divertente','possibile','un gioco'], r:0},
  // Lo sport
 {m:'Educazione Fisica', cl:'1', a:'Lo sport', d:'medio', q:'Correre fa bene:', ops:['al telefono','al muro','al cuore','alla tv'], r:2},
  // La salute
 {m:'Educazione Fisica', cl:'1', a:'La salute', d:'medio', q:'I dolci si mangiano:', ops:['con moderazione','sempre','mai','solo di notte'], r:0},
 {m:'Educazione Fisica', cl:'1', a:'La salute', d:'medio', q:'La frutta fa:', ops:['solo dormire','bene','male','nulla'], r:1},
 {m:'Educazione Fisica', cl:'1', a:'La salute', d:'medio', q:'Muoversi tutti i giorni:', ops:['non serve','è proibito','fa bene','fa male'], r:2},
  // ---- DIFFICILE ----
  // Il corpo
 {m:'Educazione Fisica', cl:'1', a:'Il corpo', d:'difficile', q:'Il corpo ha bisogno di:', ops:['solo movimento','solo riposo','solo dolci','movimento e riposo'], r:3},
 {m:'Educazione Fisica', cl:'1', a:'Il corpo', d:'difficile', q:'Muoversi fa bene:', ops:['al corpo','alla tv','al telefono','al muro'], r:0},
 {m:'Educazione Fisica', cl:'1', a:'Il corpo', d:'difficile', q:'Il nostro corpo cresce:', ops:['solo d’estate','con il tempo','mai','solo di notte'], r:1},
  // I movimenti
 {m:'Educazione Fisica', cl:'1', a:'I movimenti', d:'difficile', q:'Per muoversi bene serve:', ops:['paura','coordinazione','rumore','fretta'], r:1},
 {m:'Educazione Fisica', cl:'1', a:'I movimenti', d:'difficile', q:'I movimenti si imparano:', ops:['mangiando','guardando la tv','esercitandosi','dormendo'], r:2},
  // I giochi
 {m:'Educazione Fisica', cl:'1', a:'I giochi', d:'difficile', q:'Perdere a un gioco:', ops:['non succede mai','è la fine','è proibito','può capitare'], r:3},
 {m:'Educazione Fisica', cl:'1', a:'I giochi', d:'difficile', q:'Il gioco libero serve per:', ops:['mangiare','divertirsi','annoiarsi','dormire'], r:1},
 ],

 /* ==================== CLASSE 1 - Geografia ==================== */
 '1G': [
  // ---- FACILE ----
  // Gli spazi
 {m:'Geografia', cl:'1', a:'Gli spazi', d:'facile', q:'Lo spazio vicino a noi si chiama:', ops:['spazio vicino','spazio lontano','spazio inesistente','spazio vuoto'], r:0},
 {m:'Geografia', cl:'1', a:'Gli spazi', d:'facile', q:'La nostra aula è uno spazio:', ops:['sotto il mare','chiuso','aperto','inesistente'], r:1},
 {m:'Geografia', cl:'1', a:'Gli spazi', d:'facile', q:'Il cortile della scuola è uno spazio:', ops:['chiuso a chiave','sotto terra','aperto','chiuso'], r:2},
 {m:'Geografia', cl:'1', a:'Gli spazi', d:'facile', q:'Sopra, sotto, dentro e fuori sono parole che indicano:', ops:['il colore','il peso','il suono','la posizione'], r:3},
  // Sinistra e destra
 {m:'Geografia', cl:'1', a:'Sinistra e destra', d:'facile', q:'La mano con cui scriviamo di solito è:', ops:['tutte e due','nessuna','la destra','la sinistra'], r:2},
 {m:'Geografia', cl:'1', a:'Sinistra e destra', d:'facile', q:'La mano sinistra è:', ops:['uguale alla destra','sopra la testa','sotto i piedi','opposta alla destra'], r:3},
 {m:'Geografia', cl:'1', a:'Sinistra e destra', d:'facile', q:'Quando guardiamo avanti, la destra è:', ops:['a destra','a sinistra','sopra','sotto'], r:0},
 {m:'Geografia', cl:'1', a:'Sinistra e destra', d:'facile', q:'Il cuore è di solito a:', ops:['sotto i piedi','sinistra','destra','centro'], r:1},
  // La casa e la scuola
 {m:'Geografia', cl:'1', a:'La casa e la scuola', d:'facile', q:'La casa serve per:', ops:['abitare','volare','nuotare','dormire soltanto fuori'], r:0},
 {m:'Geografia', cl:'1', a:'La casa e la scuola', d:'facile', q:'A scuola si impara a:', ops:['guidare','leggere e scrivere','volare','nuotare'], r:1},
 {m:'Geografia', cl:'1', a:'La casa e la scuola', d:'facile', q:'La stanza dove si dorme è la:', ops:['bagno','sala','camera da letto','cucina'], r:2},
 {m:'Geografia', cl:'1', a:'La casa e la scuola', d:'facile', q:'Il luogo dove si fa lezione è:', ops:['la cucina','il garage','il giardino','l’aula'], r:3},
  // Il paese e la città
 {m:'Geografia', cl:'1', a:'Il paese e la città', d:'facile', q:'Il paese è:', ops:['una metropoli','inesistente','piccolo','grandissimo'], r:2},
 {m:'Geografia', cl:'1', a:'Il paese e la città', d:'facile', q:'La città è:', ops:['piccolissima','solo un bosco','solo un campo','grande e con tante case'], r:3},
 {m:'Geografia', cl:'1', a:'Il paese e la città', d:'facile', q:'In città ci sono:', ops:['molte strade e negozi','solo alberi','solo mucche','solo montagne'], r:0},
 {m:'Geografia', cl:'1', a:'Il paese e la città', d:'facile', q:'In paese c’è di solito:', ops:['una metropolitana','poco traffico','molto traffico','un aeroporto'], r:1},
 {m:'Geografia', cl:'1', a:'Il paese e la città', d:'facile', q:'Il comune è:', ops:['un colore','un cibo','l’insieme del territorio e degli abitanti','un gioco'], r:2},
 {m:'Geografia', cl:'1', a:'Il paese e la città', d:'facile', q:'Chi governa un comune è:', ops:['il faraone','il capitano','il cuoco','il sindaco'], r:3},
 {m:'Geografia', cl:'1', a:'Il paese e la città', d:'facile', q:'Il municipio è:', ops:['un ospedale','la sede del comune','una scuola','un mercato'], r:1},
 {m:'Geografia', cl:'1', a:'Il paese e la città', d:'facile', q:'La campagna è:', ops:['il centro della città','un aeroporto','una stazione spaziale','la zona fuori città, con campi'], r:3},
  // I punti cardinali
 {m:'Geografia', cl:'1', a:'I punti cardinali', d:'facile', q:'I punti cardinali sono:', ops:['nord, sud, est, ovest','alto, basso','destra, sinistra','vicino, lontano'], r:0},
 {m:'Geografia', cl:'1', a:'I punti cardinali', d:'facile', q:'Il punto cardinale opposto al nord è:', ops:['il centro','il sud','l’est','l’ovest'], r:1},
 {m:'Geografia', cl:'1', a:'I punti cardinali', d:'facile', q:'Il sole sorge a:', ops:['nord','sud','est','ovest'], r:2},
 {m:'Geografia', cl:'1', a:'I punti cardinali', d:'facile', q:'Il sole tramonta a:', ops:['est','nord','sud','ovest'], r:3},
 {m:'Geografia', cl:'1', a:'I punti cardinali', d:'facile', q:'Lo strumento per trovare i punti cardinali è:', ops:['la bussola','la bilancia','il metro','il termometro'], r:0},
 {m:'Geografia', cl:'1', a:'I punti cardinali', d:'facile', q:'Il punto cardinale opposto all’est è:', ops:['il sud','il centro','l’ovest','il nord'], r:2},
  // ---- MEDIO ----
  // Gli spazi
 {m:'Geografia', cl:'1', a:'Gli spazi', d:'medio', q:'La stanza in cui dormiamo si chiama:', ops:['camera','cucina','bagno','garage'], r:0},
 {m:'Geografia', cl:'1', a:'Gli spazi', d:'medio', q:'Il posto dove cuciniamo si chiama:', ops:['bagno','cucina','camera','salotto'], r:1},
 {m:'Geografia', cl:'1', a:'Gli spazi', d:'medio', q:'"Vicino" è il contrario di:', ops:['dentro','sotto','lontano','sopra'], r:2},
  // Sinistra e destra
 {m:'Geografia', cl:'1', a:'Sinistra e destra', d:'medio', q:'Per indicare una direzione usiamo:', ops:['dentro e fuori solo','mai','destra e sinistra','alto e basso solo'], r:2},
 {m:'Geografia', cl:'1', a:'Sinistra e destra', d:'medio', q:'La mano sinistra è quella:', ops:['con cui scrivono tutti','sempre più grande','sempre più piccola','opposta alla destra'], r:3},
 {m:'Geografia', cl:'1', a:'Sinistra e destra', d:'medio', q:'La destra è la mano:', ops:['che usiamo per scrivere di solito','che non usiamo mai','sempre fredda','sempre blu'], r:0},
  // La casa e la scuola
 {m:'Geografia', cl:'1', a:'La casa e la scuola', d:'medio', q:'In casa il bagno serve per:', ops:['lavarsi','cucinare','dormire','studiare'], r:0},
 {m:'Geografia', cl:'1', a:'La casa e la scuola', d:'medio', q:'La palestra della scuola serve per:', ops:['leggere','fare ginnastica','dormire','cucinare'], r:1},
 {m:'Geografia', cl:'1', a:'La casa e la scuola', d:'medio', q:'La biblioteca serve per:', ops:['nuotare','mangiare','leggere libri','giocare a calcio'], r:2},
  // Il paese e la città
 {m:'Geografia', cl:'1', a:'Il paese e la città', d:'medio', q:'La piazza principale del paese serve per:', ops:['incontrarsi','volare','nuotare','dormire'], r:0},
  // I punti cardinali
 {m:'Geografia', cl:'1', a:'I punti cardinali', d:'medio', q:'L’ago della bussola punta verso:', ops:['l’ovest','il nord','il sud','l’est'], r:1},
  // ---- DIFFICILE ----
  // Gli spazi
 {m:'Geografia', cl:'1', a:'Gli spazi', d:'difficile', q:'La pianta della casa serve per:', ops:['cucinare','dormire','giocare','vedere dove sono le stanze'], r:3},
 {m:'Geografia', cl:'1', a:'Gli spazi', d:'difficile', q:'Per andare da casa a scuola seguiamo:', ops:['un percorso','il vento','le nuvole','la pioggia'], r:0},
 {m:'Geografia', cl:'1', a:'Gli spazi', d:'difficile', q:'Il punto da cui partiamo in un percorso si chiama:', ops:['meta','partenza','arrivo','fine'], r:1},
  // Sinistra e destra
 {m:'Geografia', cl:'1', a:'Sinistra e destra', d:'difficile', q:'Il braccio destro è quello:', ops:['dietro la schiena','dalla parte della mano destra','dalla parte della mano sinistra','sopra la testa'], r:1},
 {m:'Geografia', cl:'1', a:'Sinistra e destra', d:'difficile', q:'Sulla carta, di solito l’est è a:', ops:['sopra','sotto','destra','sinistra'], r:2},
 {m:'Geografia', cl:'1', a:'Sinistra e destra', d:'difficile', q:'L’ovest è il punto cardinale opposto a:', ops:['nord','sud','centro','est'], r:3},
  // La casa e la scuola
 {m:'Geografia', cl:'1', a:'La casa e la scuola', d:'difficile', q:'L’indirizzo di casa serve per:', ops:['cucinare','dormire','giocare','trovare la casa'], r:3},
 {m:'Geografia', cl:'1', a:'La casa e la scuola', d:'difficile', q:'Il vicino di casa abita:', ops:['accanto a noi','sulla luna','sotto il mare','nel deserto'], r:0},
 {m:'Geografia', cl:'1', a:'La casa e la scuola', d:'difficile', q:'La scuola si trova di solito:', ops:['sotto il mare','nel nostro quartiere o paese','sulla luna','in un vulcano'], r:1},
  // Il paese e la città
 {m:'Geografia', cl:'1', a:'Il paese e la città', d:'difficile', q:'In città si usa spesso:', ops:['il trattore','la slitta','l’autobus e la metropolitana','il cavallo'], r:2},
  // I punti cardinali
 {m:'Geografia', cl:'1', a:'I punti cardinali', d:'difficile', q:'Sulla carta geografica il nord è di solito:', ops:['in basso','a destra','a sinistra','in alto'], r:3},
 {m:'Geografia', cl:'1', a:'I punti cardinali', d:'difficile', q:'Se guardi il nord di fronte, l’est è alla tua:', ops:['destra','sinistra','dietro','sotto'], r:0},
 {m:'Geografia', cl:'1', a:'I punti cardinali', d:'difficile', q:'I punti cardinali servono per:', ops:['giocare','orientarsi','cucinare','dormire'], r:1},
 ],

 /* ==================== CLASSE 1 - Matematica ==================== */
 '1M': [
  // ---- FACILE ----
  // Numeri fino a 20
 {m:'Matematica', cl:'1', a:'Numeri fino a 20', d:'facile', q:'Quanto fa 2 + 3?', ops:['5','4','6','7'], r:0},
 {m:'Matematica', cl:'1', a:'Numeri fino a 20', d:'facile', q:'Quale numero viene DOPO il 7?', ops:['10','6','8','9'], r:2},
 {m:'Matematica', cl:'1', a:'Numeri fino a 20', d:'facile', q:'Quale numero viene PRIMA del 10?', ops:['9','7','8','11'], r:0},
 {m:'Matematica', cl:'1', a:'Numeri fino a 20', d:'facile', q:'Quale di questi numeri è il più grande?', ops:['8','15','3','12'], r:1},
 {m:'Matematica', cl:'1', a:'Numeri fino a 20', d:'facile', q:'Quale numero manca: 8, 9, ___, 11?', ops:['7','12','10','13'], r:2},
  // Addizione e sottrazione
 {m:'Matematica', cl:'1', a:'Addizione e sottrazione', d:'facile', q:'Quanto fa 5 − 1?', ops:['3','5','6','4'], r:3},
 {m:'Matematica', cl:'1', a:'Addizione e sottrazione', d:'facile', q:'Quanto fa 4 + 4?', ops:['9','8','7','6'], r:1},
 {m:'Matematica', cl:'1', a:'Addizione e sottrazione', d:'facile', q:'Quanto fa 9 − 5?', ops:['4','3','5','2'], r:0},
 {m:'Matematica', cl:'1', a:'Addizione e sottrazione', d:'facile', q:'Quanto fa 10 + 0?', ops:['10','0','1','100'], r:0},
  // Forme e spazio
 {m:'Matematica', cl:'1', a:'Forme e spazio', d:'facile', q:'Quale figura ha 3 lati?', ops:['il rettangolo','il quadrato','il triangolo','il cerchio'], r:2},
 {m:'Matematica', cl:'1', a:'Forme e spazio', d:'facile', q:'Quale figura è completamente tonda?', ops:['il cerchio','il cubo','il triangolo','il quadrato'], r:0},
 {m:'Matematica', cl:'1', a:'Forme e spazio', d:'facile', q:'Quanti angoli ha un cerchio?', ops:['1','nessuno','3','4'], r:1},
  // Tempo e calendario
 {m:'Matematica', cl:'1', a:'Tempo e calendario', d:'facile', q:'Quanti giorni ha una settimana?', ops:['10','5','6','7'], r:3},
 {m:'Matematica', cl:'1', a:'Tempo e calendario', d:'facile', q:'Quanti mesi ha un anno?', ops:['6','24','10','12'], r:3},
 {m:'Matematica', cl:'1', a:'Tempo e calendario', d:'facile', q:'Quante ore ha un giorno?', ops:['20','24','36','12'], r:1},
  // Problemi e soldi
 {m:'Matematica', cl:'1', a:'Problemi e soldi', d:'facile', q:'Quale moneta vale di più?', ops:['2 euro','1 centesimo','10 centesimi','50 centesimi'], r:0},
 {m:'Matematica', cl:'1', a:'Problemi e soldi', d:'facile', q:'Quanto fa 6 − 6?', ops:['0','12','1','6'], r:0},
  // ---- MEDIO ----
  // Numeri fino a 20
 {m:'Matematica', cl:'1', a:'Numeri fino a 20', d:'medio', q:'Quale numero viene dopo il 19?', ops:['22','18','20','21'], r:2},
 {m:'Matematica', cl:'1', a:'Numeri fino a 20', d:'medio', q:'Quale numero è maggiore: 14 o 17?', ops:['sono uguali','non si sa','14','17'], r:3},
 {m:'Matematica', cl:'1', a:'Numeri fino a 20', d:'medio', q:'Quale numero si trova TRA 6 e 8?', ops:['9','7','10','5'], r:1},
  // Addizione e sottrazione
 {m:'Matematica', cl:'1', a:'Addizione e sottrazione', d:'medio', q:'Quanto fa 7 + 8?', ops:['15','17','14','16'], r:0},
 {m:'Matematica', cl:'1', a:'Addizione e sottrazione', d:'medio', q:'Quanto fa 16 − 9?', ops:['7','6','9','8'], r:0},
 {m:'Matematica', cl:'1', a:'Addizione e sottrazione', d:'medio', q:'Quanto fa 12 − 5?', ops:['8','6','7','9'], r:2},
 {m:'Matematica', cl:'1', a:'Addizione e sottrazione', d:'medio', q:'Quale numero manca: 5 + ___ = 9?', ops:['6','3','5','4'], r:3},
 {m:'Matematica', cl:'1', a:'Addizione e sottrazione', d:'medio', q:'Come si chiama il risultato dell’addizione?', ops:['il prodotto','il resto','la differenza','la somma'], r:3},
 {m:'Matematica', cl:'1', a:'Addizione e sottrazione', d:'medio', q:'Quale coppia di numeri "amici" fa 10?', ops:['8 e 3','9 e 2','6 e 4','7 e 4'], r:2},
 {m:'Matematica', cl:'1', a:'Addizione e sottrazione', d:'medio', q:'Quanto fa 4 + 4 + 4?', ops:['8','12','16','10'], r:1},
  // Forme e spazio
 {m:'Matematica', cl:'1', a:'Forme e spazio', d:'medio', q:'Quale figura ha 4 lati TUTTI uguali?', ops:['il rettangolo','il quadrato','il triangolo','il trapezio'], r:1},
 {m:'Matematica', cl:'1', a:'Forme e spazio', d:'medio', q:'Il cubo è una figura:', ops:['invisibile','piana','solida','tonda'], r:2},
 {m:'Matematica', cl:'1', a:'Forme e spazio', d:'medio', q:'Quale figura solida è come una palla?', ops:['il cono','il cilindro','il cubo','la sfera'], r:3},
 {m:'Matematica', cl:'1', a:'Forme e spazio', d:'medio', q:'Quanti assi di simmetria ha il quadrato?', ops:['1','4','8','2'], r:1},
 {m:'Matematica', cl:'1', a:'Forme e spazio', d:'medio', q:'Quanti lati ha un rettangolo?', ops:['3','4','5','6'], r:1},
  // Tempo e calendario
 {m:'Matematica', cl:'1', a:'Tempo e calendario', d:'medio', q:'Quanti minuti ha un’ora?', ops:['30','50','60','100'], r:2},
 {m:'Matematica', cl:'1', a:'Tempo e calendario', d:'medio', q:'Che giorno viene dopo il martedì?', ops:['domenica','lunedì','mercoledì','giovedì'], r:2},
 {m:'Matematica', cl:'1', a:'Tempo e calendario', d:'medio', q:'Che giorno viene prima del venerdì?', ops:['domenica','lunedì','sabato','giovedì'], r:3},
 {m:'Matematica', cl:'1', a:'Tempo e calendario', d:'medio', q:'Quanti secondi ha un minuto?', ops:['60','100','24','30'], r:0},
 {m:'Matematica', cl:'1', a:'Tempo e calendario', d:'medio', q:'Quale mese ha 28 o 29 giorni?', ops:['giugno','gennaio','febbraio','ottobre'], r:2},
  // Problemi e soldi
 {m:'Matematica', cl:'1', a:'Problemi e soldi', d:'medio', q:'1 euro equivale a quanti centesimi?', ops:['50','100','1000','10'], r:1},
 {m:'Matematica', cl:'1', a:'Problemi e soldi', d:'medio', q:'Emma ha 3 palline e ne trova altre 5. Quante palline ha in tutto?', ops:['7','8','9','6'], r:1},
 {m:'Matematica', cl:'1', a:'Problemi e soldi', d:'medio', q:'Ci sono 4 bambini e ognuno ha 2 palline. Quante palline ci sono in tutto?', ops:['12','6','8','10'], r:2},
 {m:'Matematica', cl:'1', a:'Problemi e soldi', d:'medio', q:'Sara ha 7 mele e ne mangia 2. Quante mele le restano?', ops:['4','6','5','9'], r:2},
 {m:'Matematica', cl:'1', a:'Problemi e soldi', d:'medio', q:'Luca ha 15 figurine e ne regala 8. Quante figurine gli restano?', ops:['7','8','9','6'], r:0},
 {m:'Matematica', cl:'1', a:'Problemi e soldi', d:'medio', q:'Anna spende 10 euro e le restano 5. Quanti euro aveva?', ops:['12','15','20','5'], r:1},
 {m:'Matematica', cl:'1', a:'Problemi e soldi', d:'medio', q:'Un gelato costa 2 euro, un succo 1 euro. Quanto spendi in tutto?', ops:['1 euro','2 euro','3 euro','4 euro'], r:2},
  // ---- DIFFICILE ----
  // Numeri fino a 20
 {m:'Matematica', cl:'1', a:'Numeri fino a 20', d:'difficile', q:'In ordine crescente, quale numero viene PRIMA: 11, 9 o 14?', ops:['11','9','14','tanto fa lo stesso'], r:1},
 {m:'Matematica', cl:'1', a:'Numeri fino a 20', d:'difficile', q:'Quale simbolo manca: 5 ___ 3?', ops:['+','<','>','='], r:2},
  // Addizione e sottrazione
 {m:'Matematica', cl:'1', a:'Addizione e sottrazione', d:'difficile', q:'Quanto fa 9 + 9?', ops:['17','19','16','18'], r:3},
 {m:'Matematica', cl:'1', a:'Addizione e sottrazione', d:'difficile', q:'Quanto fa 20 − 13?', ops:['8','6','7','5'], r:2},
 {m:'Matematica', cl:'1', a:'Addizione e sottrazione', d:'difficile', q:'Quale numero manca: 7 + ___ = 15?', ops:['8','7','9','6'], r:0},
 {m:'Matematica', cl:'1', a:'Addizione e sottrazione', d:'difficile', q:'In "17 − 9 = 8", il numero 8 si chiama:', ops:['sottraendo','differenza','addendo','minuendo'], r:1},
 ],

 /* ==================== CLASSE 1 - Musica ==================== */
 '1MU': [
  // ---- FACILE ----
  // I suoni
 {m:'Musica', cl:'1', a:'I suoni', d:'facile', q:'Il suono si sente con:', ops:['le orecchie','gli occhi','il naso','le mani'], r:0},
 {m:'Musica', cl:'1', a:'I suoni', d:'facile', q:'Il suono può essere:', ops:['invisibile','forte o piano','solo forte','solo piano'], r:1},
 {m:'Musica', cl:'1', a:'I suoni', d:'facile', q:'Il silenzio è:', ops:['un suono piano','una musica','assenza di suono','un suono forte'], r:2},
 {m:'Musica', cl:'1', a:'I suoni', d:'facile', q:'I suoni della natura sono ad esempio:', ops:['le luci','i colori','i profumi','il canto degli uccelli'], r:3},
  // Il ritmo
 {m:'Musica', cl:'1', a:'Il ritmo', d:'facile', q:'Una pausa nel ritmo è:', ops:['una forma','un momento di silenzio','un suono forte','un colore'], r:1},
 {m:'Musica', cl:'1', a:'Il ritmo', d:'facile', q:'Seguire il ritmo significa:', ops:['andare fuori tempo','fermarsi','dormire','andare a tempo'], r:3},
  // Forte e piano
 {m:'Musica', cl:'1', a:'Forte e piano', d:'facile', q:'Un suono forte è:', ops:['silenzioso','invisibile','alto di volume','basso di volume'], r:2},
 {m:'Musica', cl:'1', a:'Forte e piano', d:'facile', q:'Un suono piano è:', ops:['alto di volume','rumoroso','invisibile','basso di volume'], r:3},
 {m:'Musica', cl:'1', a:'Forte e piano', d:'facile', q:'Quando si urla, il suono è:', ops:['forte','piano','silenzioso','invisibile'], r:0},
 {m:'Musica', cl:'1', a:'Forte e piano', d:'facile', q:'Quando si sussurra, il suono è:', ops:['invisibile','piano','forte','rumoroso'], r:1},
 {m:'Musica', cl:'1', a:'Forte e piano', d:'facile', q:'Il contrario di forte è:', ops:['fortissimo','rumoroso','acuto','piano'], r:3},
  // Il canto
 {m:'Musica', cl:'1', a:'Il canto', d:'facile', q:'Cantare significa:', ops:['usare la voce per fare musica','dormire','correre','mangiare'], r:0},
 {m:'Musica', cl:'1', a:'Il canto', d:'facile', q:'Per cantare si usa:', ops:['gli occhi','la voce','le mani','i piedi'], r:1},
 {m:'Musica', cl:'1', a:'Il canto', d:'facile', q:'La filastrocca si può:', ops:['mangiare','dormire','correre','cantare'], r:3},
  // ---- MEDIO ----
  // I suoni
 {m:'Musica', cl:'1', a:'I suoni', d:'medio', q:'I suoni artificiali sono fatti:', ops:['dall’uomo','dalla natura','dalle stelle','dalle piante'], r:0},
 {m:'Musica', cl:'1', a:'I suoni', d:'medio', q:'Un suono forte si sente:', ops:['solo di notte','da lontano','solo da vicino','mai'], r:1},
 {m:'Musica', cl:'1', a:'I suoni', d:'medio', q:'Un suono piano si sente:', ops:['mai','solo di giorno','solo da vicino','da lontano'], r:2},
  // Il ritmo
 {m:'Musica', cl:'1', a:'Il ritmo', d:'medio', q:'Il battito del cuore ha:', ops:['un profumo','una forma','un ritmo','un colore'], r:2},
 {m:'Musica', cl:'1', a:'Il ritmo', d:'medio', q:'Camminare ha:', ops:['nessun ritmo','solo un colore','solo un suono forte','un ritmo regolare'], r:3},
 {m:'Musica', cl:'1', a:'Il ritmo', d:'medio', q:'Il ritmo si può battere:', ops:['con le mani o i piedi','con gli occhi','con il naso','con i capelli'], r:0},
  // Forte e piano
 {m:'Musica', cl:'1', a:'Forte e piano', d:'medio', q:'Nella musica, il forte si indica con:', ops:['m','l','f','p'], r:2},
 {m:'Musica', cl:'1', a:'Forte e piano', d:'medio', q:'Nella musica, il piano si indica con:', ops:['f','m','l','p'], r:3},
 {m:'Musica', cl:'1', a:'Forte e piano', d:'medio', q:'La canzone si può cantare:', ops:['forte o piano','solo forte','solo piano','solo gridando'], r:0},
  // Il canto
 {m:'Musica', cl:'1', a:'Il canto', d:'medio', q:'Cantare insieme agli altri si chiama:', ops:['coro','orchestra','banda','solo'], r:0},
 {m:'Musica', cl:'1', a:'Il canto', d:'medio', q:'Cantare da soli si chiama:', ops:['orchestra','assolo','coro','banda'], r:1},
 {m:'Musica', cl:'1', a:'Il canto', d:'medio', q:'Per cantare bene bisogna:', ops:['correre','mangiare tanto','respirare bene','dormire'], r:2},
  // ---- DIFFICILE ----
  // I suoni
 {m:'Musica', cl:'1', a:'I suoni', d:'difficile', q:'La voce è un suono prodotto:', ops:['dagli strumenti','dalle macchine','dal vento','dal corpo umano'], r:3},
 {m:'Musica', cl:'1', a:'I suoni', d:'difficile', q:'Un rumore è un suono:', ops:['non musicale','sempre musicale','sempre piacevole','sempre piano'], r:0},
 {m:'Musica', cl:'1', a:'I suoni', d:'difficile', q:'Il suono viaggia:', ops:['solo nel ferro','nell’aria','nel vuoto','solo nell’acqua'], r:1},
  // Il ritmo
 {m:'Musica', cl:'1', a:'Il ritmo', d:'difficile', q:'Le canzoni hanno:', ops:['solo colori','solo pause','un ritmo','solo parole'], r:2},
  // Gli strumenti
 {m:'Musica', cl:'1', a:'Gli strumenti', d:'difficile', q:'Gli strumenti producono:', ops:['suoni','colori','profumi','forme'], r:0},
 {m:'Musica', cl:'1', a:'Gli strumenti', d:'difficile', q:'Suonare uno strumento serve per:', ops:['mangiare','fare musica','dormire','correre'], r:1},
  // Forte e piano
 {m:'Musica', cl:'1', a:'Forte e piano', d:'difficile', q:'Il volume della musica può:', ops:['non esistere','cambiare','restare sempre uguale','sparire'], r:1},
 {m:'Musica', cl:'1', a:'Forte e piano', d:'difficile', q:'Ascoltare musica troppo forte può:', ops:['non avere effetti','far dormire','far male alle orecchie','far bene sempre'], r:2},
  // Il canto
 {m:'Musica', cl:'1', a:'Il canto', d:'difficile', q:'La canzone per bambini è di solito:', ops:['triste','complicata','lunghissima','allegra e semplice'], r:3},
 {m:'Musica', cl:'1', a:'Il canto', d:'difficile', q:'Il ritornello è la parte:', ops:['che si ripete','che si canta una volta','che non esiste','solo strumentale'], r:0},
 {m:'Musica', cl:'1', a:'Il canto', d:'difficile', q:'Cantare in coro insegna a:', ops:['mangiare','stare insieme','dormire','correre'], r:1},
 ],

 /* ==================== CLASSE 1 - Religione Cattolica ==================== */
 '1R': [
  // ---- FACILE ----
  // Il creato
 {m:'Religione Cattolica', cl:'1', a:'Il creato', d:'facile', q:'Secondo la Bibbia, il creato è:', ops:['il dono di Dio','solo una storia','solo una favola','un gioco'], r:0},
 {m:'Religione Cattolica', cl:'1', a:'Il creato', d:'facile', q:'Il creato comprende:', ops:['solo le auto','cielo, terra e viventi','solo le case','solo i computer'], r:1},
 {m:'Religione Cattolica', cl:'1', a:'Il creato', d:'facile', q:'Il sole e la luna fanno parte:', ops:['dei computer','delle fabbriche','del creato','dei giocattoli'], r:2},
 {m:'Religione Cattolica', cl:'1', a:'Il creato', d:'facile', q:'Gli animali e le piante sono:', ops:['giocattoli','macchine','invenzioni','creature'], r:3},
 {m:'Religione Cattolica', cl:'1', a:'Il creato', d:'facile', q:'Prendersi cura del creato significa:', ops:['rispettare la natura','sporcare','distruggere','sprecare'], r:0},
  // La famiglia di Gesù
 {m:'Religione Cattolica', cl:'1', a:'La famiglia di Gesù', d:'facile', q:'La mamma di Gesù si chiamava:', ops:['Giulia','Rosa','Maria','Anna'], r:2},
 {m:'Religione Cattolica', cl:'1', a:'La famiglia di Gesù', d:'facile', q:'Il padre di Gesù sulla terra era:', ops:['Pietro','Paolo','Giovanni','Giuseppe'], r:3},
 {m:'Religione Cattolica', cl:'1', a:'La famiglia di Gesù', d:'facile', q:'La famiglia di Gesù è chiamata:', ops:['famiglia famosa','Sacra Famiglia','famiglia reale','famiglia ricca'], r:1},
  // Il Natale
 {m:'Religione Cattolica', cl:'1', a:'Il Natale', d:'facile', q:'Gesù nacque in una:', ops:['scuola','grotta','casa','reggia'], r:1},
 {m:'Religione Cattolica', cl:'1', a:'Il Natale', d:'facile', q:'Il Natale si festeggia il:', ops:['25 aprile','2 giugno','25 dicembre','1 gennaio'], r:2},
 {m:'Religione Cattolica', cl:'1', a:'Il Natale', d:'facile', q:'Il presepio rappresenta:', ops:['una festa di compleanno','una gita','un mercato','la nascita di Gesù'], r:3},
  // La Pasqua
 {m:'Religione Cattolica', cl:'1', a:'La Pasqua', d:'facile', q:'La Pasqua si festeggia in:', ops:['inverno','autunno','estate','primavera'], r:3},
 {m:'Religione Cattolica', cl:'1', a:'La Pasqua', d:'facile', q:'Il simbolo della Pasqua è:', ops:['la colomba e l’uovo','la stella','il fiocco','la palla'], r:0},
 {m:'Religione Cattolica', cl:'1', a:'La Pasqua', d:'facile', q:'A Pasqua si mangia spesso:', ops:['la torta di mele','l’uovo di cioccolato','il panettone','il pandoro'], r:1},
  // La preghiera
 {m:'Religione Cattolica', cl:'1', a:'La preghiera', d:'facile', q:'Pregare significa:', ops:['parlare con Dio','dormire','correre','mangiare'], r:0},
 {m:'Religione Cattolica', cl:'1', a:'La preghiera', d:'facile', q:'La preghiera più conosciuta è:', ops:['un gioco','il Padre Nostro','una canzone','una filastrocca'], r:1},
 {m:'Religione Cattolica', cl:'1', a:'La preghiera', d:'facile', q:'Si può pregare:', ops:['solo in chiesa','mai','in silenzio o a voce','solo di notte'], r:2},
 {m:'Religione Cattolica', cl:'1', a:'La preghiera', d:'facile', q:'Prima di dormire si può:', ops:['piangere sempre','urlare','correre','ringraziare'], r:3},
  // ---- MEDIO ----
  // Il creato
 {m:'Religione Cattolica', cl:'1', a:'Il creato', d:'medio', q:'Il creato va:', ops:['buttato','protetto','danneggiato','ignorato'], r:1},
 {m:'Religione Cattolica', cl:'1', a:'Il creato', d:'medio', q:'Anche noi esseri umani facciamo parte:', ops:['solo delle scuole','solo delle città','del creato','solo delle case'], r:2},
  // La famiglia di Gesù
 {m:'Religione Cattolica', cl:'1', a:'La famiglia di Gesù', d:'medio', q:'Gesù da bambino viveva a:', ops:['Gerusalemme','Betlemme','Nazaret','Roma'], r:2},
 {m:'Religione Cattolica', cl:'1', a:'La famiglia di Gesù', d:'medio', q:'Giuseppe era un:', ops:['pescatore','re','soldato','falegname'], r:3},
 {m:'Religione Cattolica', cl:'1', a:'La famiglia di Gesù', d:'medio', q:'Maria e Giuseppe amavano:', ops:['Gesù','solo i soldi','solo il potere','solo se stessi'], r:0},
 {m:'Religione Cattolica', cl:'1', a:'La famiglia di Gesù', d:'medio', q:'La famiglia è importante perché:', ops:['non serve','ci vuole bene e ci protegge','ci dà solo giocattoli','ci fa solo dormire'], r:1},
  // Il Natale
 {m:'Religione Cattolica', cl:'1', a:'Il Natale', d:'medio', q:'A Natale i pastori andarono:', ops:['a Betlemme','a Roma','a Nazaret','a Gerusalemme'], r:0},
 {m:'Religione Cattolica', cl:'1', a:'Il Natale', d:'medio', q:'I Re Magi portarono:', ops:['libri','oro, incenso e mirra','giocattoli','dolci'], r:1},
 {m:'Religione Cattolica', cl:'1', a:'Il Natale', d:'medio', q:'A Natale si fa festa:', ops:['solo a scuola','mai','in famiglia','da soli'], r:2},
  // La Pasqua
 {m:'Religione Cattolica', cl:'1', a:'La Pasqua', d:'medio', q:'La Pasqua ci porta:', ops:['tristezza','paura','noia','speranza e gioia'], r:3},
 {m:'Religione Cattolica', cl:'1', a:'La Pasqua', d:'medio', q:'L’uovo di Pasqua è simbolo:', ops:['di vita nuova','di sonno','di buio','di freddo'], r:0},
  // La preghiera
 {m:'Religione Cattolica', cl:'1', a:'La preghiera', d:'medio', q:'Pregare insieme si fa:', ops:['in famiglia o in chiesa','solo da soli','mai','solo di nascosto'], r:0},
 {m:'Religione Cattolica', cl:'1', a:'La preghiera', d:'medio', q:'La preghiera si può fare:', ops:['solo con i piedi','con il cuore','solo con le parole','solo con le mani'], r:1},
 {m:'Religione Cattolica', cl:'1', a:'La preghiera', d:'medio', q:'Quando preghiamo diciamo:', ops:['solo parole brutte','nulla','grazie e aiuto','solo bugie'], r:2},
  // ---- DIFFICILE ----
  // Il creato
 {m:'Religione Cattolica', cl:'1', a:'Il creato', d:'difficile', q:'Ringraziare per il creato è un gesto:', ops:['di rabbia','di paura','di noia','di gratitudine'], r:3},
 {m:'Religione Cattolica', cl:'1', a:'Il creato', d:'difficile', q:'Il creato è descritto nel libro della:', ops:['Genesi','storia','matematica','geografia'], r:0},
 {m:'Religione Cattolica', cl:'1', a:'Il creato', d:'difficile', q:'Rispettare il creato ci rende:', ops:['più soli','migliori','peggiori','più tristi'], r:1},
  // La famiglia di Gesù
 {m:'Religione Cattolica', cl:'1', a:'La famiglia di Gesù', d:'difficile', q:'Gesù ci insegna ad amare:', ops:['solo i giochi','solo i soldi','la famiglia','solo noi stessi'], r:2},
 {m:'Religione Cattolica', cl:'1', a:'La famiglia di Gesù', d:'difficile', q:'Nella Sacra Famiglia c’erano:', ops:['solo Gesù','solo Maria','solo Giuseppe','Gesù, Maria e Giuseppe'], r:3},
  // Il Natale
 {m:'Religione Cattolica', cl:'1', a:'Il Natale', d:'difficile', q:'La stella cometa guidò:', ops:['i mercanti','i Magi','i pastori','i soldati'], r:1},
  // La Pasqua
 {m:'Religione Cattolica', cl:'1', a:'La Pasqua', d:'difficile', q:'Prima della Pasqua c’è la:', ops:['fine della scuola','Quaresima','festa di Natale','festa di compleanno'], r:1},
 {m:'Religione Cattolica', cl:'1', a:'La Pasqua', d:'difficile', q:'La Pasqua ci ricorda che:', ops:['tutto finisce','nulla cambia','la vita vince sulla morte','la morte vince'], r:2},
 {m:'Religione Cattolica', cl:'1', a:'La Pasqua', d:'difficile', q:'La domenica di Pasqua è un giorno:', ops:['di scuola','di lavoro per tutti','di pioggia','di festa'], r:3},
  // La preghiera
 {m:'Religione Cattolica', cl:'1', a:'La preghiera', d:'difficile', q:'Il segno della croce si fa:', ops:['sul muro','per terra','mai','sul corpo'], r:3},
 {m:'Religione Cattolica', cl:'1', a:'La preghiera', d:'difficile', q:'La preghiera ci fa sentire:', ops:['più vicini a Dio','più soli','più tristi','più arrabbiati'], r:0},
 {m:'Religione Cattolica', cl:'1', a:'La preghiera', d:'difficile', q:'Gesù ci ha insegnato a pregare:', ops:['mai','Dio come Padre','solo per i regali','solo per vincere'], r:1},
 ],

 /* ==================== CLASSE 1 - Scienze ==================== */
 '1S': [
  // ---- FACILE ----
  // Gli esseri viventi
 {m:'Scienze', cl:'1', a:'Gli esseri viventi', d:'facile', q:'Quale di questi è un essere vivente?', ops:['il sasso','il cane','la penna','la sedia'], r:1},
 {m:'Scienze', cl:'1', a:'Gli esseri viventi', d:'facile', q:'Gli esseri viventi nascono e:', ops:['non cambiano','crescono','scompaiono','restano uguali'], r:1},
 {m:'Scienze', cl:'1', a:'Gli esseri viventi', d:'facile', q:'Gli esseri viventi hanno bisogno di:', ops:['mattoni','carta','sabbia','acqua'], r:3},
  // Le piante
 {m:'Scienze', cl:'1', a:'Le piante', d:'facile', q:'Quale parte della pianta sta sotto terra?', ops:['il fiore','i frutti','le radici','le foglie'], r:2},
 {m:'Scienze', cl:'1', a:'Le piante', d:'facile', q:'Le foglie di solito sono:', ops:['blu','nere','trasparenti','verdi'], r:3},
 {m:'Scienze', cl:'1', a:'Le piante', d:'facile', q:'Il fiore serve per:', ops:['fare i semi','camminare','volare','nuotare'], r:0},
 {m:'Scienze', cl:'1', a:'Le piante', d:'facile', q:'Le radici servono per:', ops:['correre','assorbire acqua','volare','cantare'], r:1},
  // Gli animali
 {m:'Scienze', cl:'1', a:'Gli animali', d:'facile', q:'Il cane è un animale:', ops:['domestico','selvatico','di pietra','immaginario'], r:0},
 {m:'Scienze', cl:'1', a:'Gli animali', d:'facile', q:'Il leone vive soprattutto:', ops:['sulla luna','nella savana','al polo nord','nel freezer'], r:1},
 {m:'Scienze', cl:'1', a:'Gli animali', d:'facile', q:'Quale animale vola?', ops:['il cane','il maiale','l’uccello','il pesce'], r:2},
 {m:'Scienze', cl:'1', a:'Gli animali', d:'facile', q:'Quale animale vive nell’acqua?', ops:['l’uccello','il gatto','il cavallo','il pesce'], r:3},
 {m:'Scienze', cl:'1', a:'Gli animali', d:'facile', q:'Gli animali che mangiano sia erba sia carne sono:', ops:['volanti','onnivori','erbivori','carnivori'], r:1},
  // Il corpo umano
 {m:'Scienze', cl:'1', a:'Il corpo umano', d:'facile', q:'Quante braccia abbiamo?', ops:['quattro','una','due','tre'], r:2},
 {m:'Scienze', cl:'1', a:'Il corpo umano', d:'facile', q:'Con gli occhi noi:', ops:['sentiamo','annusiamo','assaggiamo','vediamo'], r:3},
 {m:'Scienze', cl:'1', a:'Il corpo umano', d:'facile', q:'Il cuore serve per:', ops:['pompare il sangue','pensare','vedere','ascoltare'], r:0},
 {m:'Scienze', cl:'1', a:'Il corpo umano', d:'facile', q:'Con le orecchie noi:', ops:['assaggiamo','sentiamo','vediamo','tocchiamo'], r:1},
  // I cinque sensi
 {m:'Scienze', cl:'1', a:'I cinque sensi', d:'facile', q:'Quanti sensi abbiamo?', ops:['cinque','due','dieci','venti'], r:0},
 {m:'Scienze', cl:'1', a:'I cinque sensi', d:'facile', q:'Con il naso noi:', ops:['sentiamo','annusiamo','vediamo','tocchiamo'], r:1},
 {m:'Scienze', cl:'1', a:'I cinque sensi', d:'facile', q:'Con la lingua noi:', ops:['annusiamo','tocchiamo','assaggiamo','vediamo'], r:2},
 {m:'Scienze', cl:'1', a:'I cinque sensi', d:'facile', q:'Con la pelle noi:', ops:['vediamo','ascoltiamo','assaggiamo','tocchiamo'], r:3},
  // ---- MEDIO ----
  // Gli esseri viventi
 {m:'Scienze', cl:'1', a:'Gli esseri viventi', d:'medio', q:'Quale NON è un essere vivente?', ops:['il sasso','la farfalla','l’albero','il gatto'], r:0},
 {m:'Scienze', cl:'1', a:'Gli esseri viventi', d:'medio', q:'Per crescere, una pianta ha bisogno di:', ops:['luce e acqua','buio','plastica','rumore'], r:0},
 {m:'Scienze', cl:'1', a:'Gli esseri viventi', d:'medio', q:'Un animale si muove da solo; un sasso:', ops:['vola','si muove da solo','non si muove da solo','cammina'], r:2},
 {m:'Scienze', cl:'1', a:'Gli esseri viventi', d:'medio', q:'Le piante sono esseri:', ops:['finti','meccanici','non viventi','viventi'], r:3},
 {m:'Scienze', cl:'1', a:'Gli esseri viventi', d:'medio', q:'Gli animali, a differenza delle piante, si:', ops:['non bevono','muovono e cercano cibo','fanno da soli il cibo','non respirano'], r:1},
  // Le piante
 {m:'Scienze', cl:'1', a:'Le piante', d:'medio', q:'Il tronco serve per:', ops:['respirare con le branchie','scavare','sostenere la pianta','fare rumore'], r:2},
 {m:'Scienze', cl:'1', a:'Le piante', d:'medio', q:'Quale di questi è un frutto?', ops:['la carota','la patata','la cipolla','la mela'], r:3},
 {m:'Scienze', cl:'1', a:'Le piante', d:'medio', q:'Da un seme può nascere:', ops:['una nuova pianta','una pietra','un ferro','un vetro'], r:0},
  // Gli animali
 {m:'Scienze', cl:'1', a:'Gli animali', d:'medio', q:'Il gatto ha:', ops:['4 zampe','2 zampe','6 zampe','nessuna zampa'], r:0},
 {m:'Scienze', cl:'1', a:'Gli animali', d:'medio', q:'La mucca ci dà:', ops:['la lana','il latte','il miele','le uova'], r:1},
 {m:'Scienze', cl:'1', a:'Gli animali', d:'medio', q:'Quale animale fa le uova?', ops:['il gatto','il cavallo','la gallina','il cane'], r:2},
  // Il corpo umano
 {m:'Scienze', cl:'1', a:'Il corpo umano', d:'medio', q:'I denti servono per:', ops:['respirare','camminare','masticare','vedere'], r:2},
 {m:'Scienze', cl:'1', a:'Il corpo umano', d:'medio', q:'Il cervello si trova nella:', ops:['pancia','gamba','mano','testa'], r:3},
  // I cinque sensi
 {m:'Scienze', cl:'1', a:'I cinque sensi', d:'medio', q:'La vista si usa con:', ops:['gli occhi','le orecchie','il naso','le mani'], r:0},
 {m:'Scienze', cl:'1', a:'I cinque sensi', d:'medio', q:'L’udito si usa con:', ops:['i piedi','le orecchie','gli occhi','la bocca'], r:1},
 {m:'Scienze', cl:'1', a:'I cinque sensi', d:'medio', q:'Il gusto si usa con:', ops:['le orecchie','i capelli','la lingua','il naso'], r:2},
 {m:'Scienze', cl:'1', a:'I cinque sensi', d:'medio', q:'Quale senso usiamo per capire se l’acqua è fredda?', ops:['l’udito','il tatto','l’olfatto','la vista'], r:1},
  // ---- DIFFICILE ----
  // Gli esseri viventi
 {m:'Scienze', cl:'1', a:'Gli esseri viventi', d:'difficile', q:'Che cosa distingue un essere vivente da un sasso?', ops:['il vivente nasce, cresce e muore','il sasso cresce','nessuna differenza','il sasso è vivo'], r:0},
 {m:'Scienze', cl:'1', a:'Gli esseri viventi', d:'difficile', q:'Le piante si nutrono soprattutto:', ops:['con le radici e la luce','mangiando carne','con la plastica','con la sabbia'], r:0},
  // Le piante
 {m:'Scienze', cl:'1', a:'Le piante', d:'difficile', q:'Le piante producono per noi:', ops:['plastica','benzina','ossigeno','anidride carbonica'], r:2},
 {m:'Scienze', cl:'1', a:'Le piante', d:'difficile', q:'Il fusto di un albero grande si chiama:', ops:['radice','fiore','frutto','tronco'], r:3},
  // Gli animali
 {m:'Scienze', cl:'1', a:'Gli animali', d:'difficile', q:'Gli animali che mangiano solo erba si chiamano:', ops:['carnivori','onnivori','volanti','erbivori'], r:3},
 {m:'Scienze', cl:'1', a:'Gli animali', d:'difficile', q:'Il lupo è un animale:', ops:['selvatico','domestico','giocattolo','di plastica'], r:0},
  // Il corpo umano
 {m:'Scienze', cl:'1', a:'Il corpo umano', d:'difficile', q:'Il cuore si trova nel:', ops:['collo','petto','ginocchio','piede'], r:1},
 {m:'Scienze', cl:'1', a:'Il corpo umano', d:'difficile', q:'I polmoni servono per:', ops:['masticare','vedere','respirare','pensare'], r:2},
 {m:'Scienze', cl:'1', a:'Il corpo umano', d:'difficile', q:'Le ossa formano lo:', ops:['stomaco','cuore','cervello','scheletro'], r:3},
  // I cinque sensi
 {m:'Scienze', cl:'1', a:'I cinque sensi', d:'difficile', q:'L’olfatto si usa con:', ops:['la lingua','la pelle','gli occhi','il naso'], r:3},
 {m:'Scienze', cl:'1', a:'I cinque sensi', d:'difficile', q:'Il tatto si usa con:', ops:['la pelle','la lingua','il naso','le orecchie'], r:0},
 ],

 /* ==================== CLASSE 1 - Storia ==================== */
 '1ST': [
  // ---- FACILE ----
  // Il tempo
 {m:'Storia', cl:'1', a:'Il tempo', d:'facile', q:'Il tempo si misura con:', ops:['l’orologio','la bilancia','il metro','il termometro'], r:0},
 {m:'Storia', cl:'1', a:'Il tempo', d:'facile', q:'L’orologio serve per sapere:', ops:['quanto è caldo','che ora è','quanto pesa','quanto è lungo'], r:1},
 {m:'Storia', cl:'1', a:'Il tempo', d:'facile', q:'La lancetta corta dell’orologio indica:', ops:['i secondi','i giorni','le ore','i minuti'], r:2},
 {m:'Storia', cl:'1', a:'Il tempo', d:'facile', q:'La lancetta lunga indica:', ops:['le ore','i mesi','gli anni','i minuti'], r:3},
 {m:'Storia', cl:'1', a:'Il tempo', d:'facile', q:'In un’ora ci sono:', ops:['60 minuti','100 minuti','30 minuti','10 minuti'], r:0},
  // La giornata
 {m:'Storia', cl:'1', a:'La giornata', d:'facile', q:'La mattina di solito:', ops:['è buio sempre','non esiste','ci svegliamo','andiamo a dormire'], r:2},
 {m:'Storia', cl:'1', a:'La giornata', d:'facile', q:'Dopo la mattina viene:', ops:['la notte','la sera','l’alba','il pomeriggio'], r:3},
 {m:'Storia', cl:'1', a:'La giornata', d:'facile', q:'La sera, di solito:', ops:['ceniamo','facciamo colazione','pranziamo a scuola','ci svegliamo'], r:0},
 {m:'Storia', cl:'1', a:'La giornata', d:'facile', q:'Di notte noi:', ops:['facciamo merenda','dormiamo','giochiamo a calcio','andiamo a scuola'], r:1},
 {m:'Storia', cl:'1', a:'La giornata', d:'facile', q:'A mezzogiorno il sole è:', ops:['sotto la terra','invisibile','sempre rosso','alto nel cielo'], r:3},
  // I giorni e i mesi
 {m:'Storia', cl:'1', a:'I giorni e i mesi', d:'facile', q:'Quanti giorni ha la settimana?', ops:['7','5','10','30'], r:0},
 {m:'Storia', cl:'1', a:'I giorni e i mesi', d:'facile', q:'Il primo giorno della settimana è spesso:', ops:['venerdì','lunedì','domenica','mercoledì'], r:1},
 {m:'Storia', cl:'1', a:'I giorni e i mesi', d:'facile', q:'La domenica è un giorno di:', ops:['lavoro per tutti','notte','riposo','scuola'], r:2},
 {m:'Storia', cl:'1', a:'I giorni e i mesi', d:'facile', q:'Quale giorno viene dopo il sabato?', ops:['il lunedì','il venerdì','il martedì','la domenica'], r:3},
 {m:'Storia', cl:'1', a:'I giorni e i mesi', d:'facile', q:'I mesi dell’anno sono:', ops:['12','10','7','30'], r:0},
 {m:'Storia', cl:'1', a:'I giorni e i mesi', d:'facile', q:'Il mese più corto è:', ops:['dicembre','febbraio','gennaio','marzo'], r:1},
 {m:'Storia', cl:'1', a:'I giorni e i mesi', d:'facile', q:'L’ultimo mese dell’anno è:', ops:['gennaio','novembre','ottobre','dicembre'], r:3},
 {m:'Storia', cl:'1', a:'I giorni e i mesi', d:'facile', q:'Il mese di Natale è:', ops:['dicembre','luglio','aprile','settembre'], r:0},
  // Prima e dopo
 {m:'Storia', cl:'1', a:'Prima e dopo', d:'facile', q:'Prima di andare a letto, di solito:', ops:['pranziamo','è mattina','ci laviamo i denti','facciamo colazione'], r:2},
 {m:'Storia', cl:'1', a:'Prima e dopo', d:'facile', q:'Dopo il lunedì viene:', ops:['la domenica','il sabato','il venerdì','il martedì'], r:3},
 {m:'Storia', cl:'1', a:'Prima e dopo', d:'facile', q:'Dopo la notte viene:', ops:['la mattina','la sera','il pomeriggio','la mezzanotte'], r:0},
 {m:'Storia', cl:'1', a:'Prima e dopo', d:'facile', q:'Prima del venerdì viene:', ops:['il lunedì','il giovedì','il sabato','la domenica'], r:1},
  // La famiglia e la scuola
 {m:'Storia', cl:'1', a:'La famiglia e la scuola', d:'facile', q:'Chi insegna a scuola è:', ops:['il cuoco','il postino','la maestra o il maestro','il vigile'], r:2},
 {m:'Storia', cl:'1', a:'La famiglia e la scuola', d:'facile', q:'I compagni di classe sono:', ops:['i nostri cugini','i maestri','i nonni','i bambini che studiano con noi'], r:3},
  // ---- MEDIO ----
  // Il tempo
 {m:'Storia', cl:'1', a:'Il tempo', d:'medio', q:'Mezz’ora equivale a:', ops:['45 minuti','30 minuti','60 minuti','15 minuti'], r:1},
 {m:'Storia', cl:'1', a:'Il tempo', d:'medio', q:'Il calendario serve per:', ops:['misurare','colorare','contare i giorni e i mesi','pesare'], r:2},
  // La giornata
 {m:'Storia', cl:'1', a:'La giornata', d:'medio', q:'Prima di andare a scuola, di solito:', ops:['dormiamo','guardiamo la luna','facciamo colazione','ceniamo'], r:2},
 {m:'Storia', cl:'1', a:'La giornata', d:'medio', q:'Il pranzo si fa di solito:', ops:['al mattino presto','a mezzanotte','all’alba','a mezzogiorno'], r:3},
 {m:'Storia', cl:'1', a:'La giornata', d:'medio', q:'La merenda si fa di solito:', ops:['nel pomeriggio','a mezzanotte','all’alba','mai'], r:0},
 {m:'Storia', cl:'1', a:'La giornata', d:'medio', q:'Quante ore ha una giornata?', ops:['36','48','24','12'], r:2},
  // I giorni e i mesi
 {m:'Storia', cl:'1', a:'I giorni e i mesi', d:'medio', q:'Quale mese viene dopo marzo?', ops:['maggio','giugno','aprile','febbraio'], r:2},
  // Prima e dopo
 {m:'Storia', cl:'1', a:'Prima e dopo', d:'medio', q:'Prima di mangiare bisogna:', ops:['correre fuori','nascondersi','lavarsi le mani','dormire'], r:2},
 {m:'Storia', cl:'1', a:'Prima e dopo', d:'medio', q:'Dopo la scuola, di solito:', ops:['andiamo a dormire per sempre','è notte fonda','sparisce il sole','torniamo a casa'], r:3},
 {m:'Storia', cl:'1', a:'Prima e dopo', d:'medio', q:'Prima di attraversare la strada:', ops:['guardiamo a destra e a sinistra','chiudiamo gli occhi','corriamo','saltiamo'], r:0},
  // La famiglia e la scuola
 {m:'Storia', cl:'1', a:'La famiglia e la scuola', d:'medio', q:'In classe si sta:', ops:['dormendo','seduti e attenti','correndo','gridando'], r:1},
 {m:'Storia', cl:'1', a:'La famiglia e la scuola', d:'medio', q:'Chi sono i fratelli e le sorelle?', ops:['i figli degli stessi genitori','i genitori','i nonni','i maestri'], r:0},
  // ---- DIFFICILE ----
  // Il tempo
 {m:'Storia', cl:'1', a:'Il tempo', d:'difficile', q:'Oggi è lunedì; tra una settimana sarà:', ops:['domenica','martedì','sabato','lunedì'], r:3},
 {m:'Storia', cl:'1', a:'Il tempo', d:'difficile', q:'Ieri, oggi e domani sono parole che indicano:', ops:['il peso','il tempo','lo spazio','il colore'], r:1},
  // La giornata
 {m:'Storia', cl:'1', a:'La giornata', d:'difficile', q:'La giornata si divide in:', ops:['primavera e inverno','mattina, pomeriggio, sera e notte','solo mattina','solo notte'], r:1},
  // I giorni e i mesi
 {m:'Storia', cl:'1', a:'I giorni e i mesi', d:'difficile', q:'Un anno bisestile ha:', ops:['300 giorni','366 giorni','365 giorni','360 giorni'], r:1},
  // Prima e dopo
 {m:'Storia', cl:'1', a:'Prima e dopo', d:'difficile', q:'"Ieri" indica un tempo:', ops:['che non esiste','passato','futuro','presente'], r:1},
 {m:'Storia', cl:'1', a:'Prima e dopo', d:'difficile', q:'"Domani" indica un tempo:', ops:['presente','passato remoto','futuro','passato'], r:2},
 {m:'Storia', cl:'1', a:'Prima e dopo', d:'difficile', q:'"Adesso" indica il tempo:', ops:['futuro','passato','mai','presente'], r:3},
  // La famiglia e la scuola
 {m:'Storia', cl:'1', a:'La famiglia e la scuola', d:'difficile', q:'Il quaderno e il libro servono per:', ops:['mangiare','vestirsi','giocare a palla','studiare'], r:3},
 {m:'Storia', cl:'1', a:'La famiglia e la scuola', d:'difficile', q:'La maestra usa la lavagna per:', ops:['guidare','spiegare','cucinare','dormire'], r:1},
 ],

 /* ==================== CLASSE 1 - Tecnologia e Informatica ==================== */
 '1TI': [
  // ---- FACILE ----
  // Gli oggetti
 {m:'Tecnologia e Informatica', cl:'1', a:'Gli oggetti', d:'facile', q:'Le forbici servono per:', ops:['scrivere','colorare','dormire','tagliare'], r:3},
 {m:'Tecnologia e Informatica', cl:'1', a:'Gli oggetti', d:'facile', q:'La matita serve per:', ops:['correre','scrivere','mangiare','dormire'], r:1},
 {m:'Tecnologia e Informatica', cl:'1', a:'Gli oggetti', d:'facile', q:'Il libro serve per:', ops:['dormire','correre','leggere','mangiare'], r:2},
 {m:'Tecnologia e Informatica', cl:'1', a:'Gli oggetti', d:'facile', q:'Prendersi cura degli oggetti significa:', ops:['non romperli','romperli','sporcarli','buttarli'], r:0},
  // Il computer
 {m:'Tecnologia e Informatica', cl:'1', a:'Il computer', d:'facile', q:'Lo schermo del computer mostra:', ops:['solo suoni','solo odori','solo sapori','immagini e parole'], r:3},
  // Le parti del computer
 {m:'Tecnologia e Informatica', cl:'1', a:'Le parti del computer', d:'facile', q:'Lo schermo serve per:', ops:['vedere','scrivere','sentire','annusare'], r:0},
 {m:'Tecnologia e Informatica', cl:'1', a:'Le parti del computer', d:'facile', q:'Cliccando il mouse si può:', ops:['sentire','annusare','cliccare','vedere'], r:2},
 {m:'Tecnologia e Informatica', cl:'1', a:'Le parti del computer', d:'facile', q:'Le casse del computer servono per:', ops:['vedere','scrivere','disegnare','sentire i suoni'], r:3},
  // La sicurezza
 {m:'Tecnologia e Informatica', cl:'1', a:'La sicurezza', d:'facile', q:'Con le forbici bisogna:', ops:['saltare','urlare','stare attenti','correre'], r:2},
 {m:'Tecnologia e Informatica', cl:'1', a:'La sicurezza', d:'facile', q:'Con il computer bisogna:', ops:['correre','saltare','urlare','stare attenti'], r:3},
 {m:'Tecnologia e Informatica', cl:'1', a:'La sicurezza', d:'facile', q:'Gli oggetti appuntiti vanno usati:', ops:['con cura','senza cura','correndo','saltando'], r:0},
 {m:'Tecnologia e Informatica', cl:'1', a:'La sicurezza', d:'facile', q:'La sicurezza è:', ops:['dannosa','importante','inutile','sbagliata'], r:1},
  // I materiali
 {m:'Tecnologia e Informatica', cl:'1', a:'I materiali', d:'facile', q:'La carta è:', ops:['pesantissima','di ferro','di vetro','leggera'], r:3},
  // ---- MEDIO ----
  // Gli oggetti
 {m:'Tecnologia e Informatica', cl:'1', a:'Gli oggetti', d:'medio', q:'Dopo aver usato un oggetto bisogna:', ops:['romperlo','sporcarlo','metterlo a posto','buttarlo'], r:2},
  // Il computer
 {m:'Tecnologia e Informatica', cl:'1', a:'Il computer', d:'medio', q:'Il computer si accende con:', ops:['un urlo','un salto','il pulsante di accensione','un colpo'], r:2},
 {m:'Tecnologia e Informatica', cl:'1', a:'Il computer', d:'medio', q:'Il computer si usa:', ops:['con i piedi','con il naso','con i capelli','con le mani'], r:3},
 {m:'Tecnologia e Informatica', cl:'1', a:'Il computer', d:'medio', q:'Per usare il computer serve:', ops:['attenzione','fretta','violenza','rumore'], r:0},
  // Le parti del computer
 {m:'Tecnologia e Informatica', cl:'1', a:'Le parti del computer', d:'medio', q:'La tastiera del computer serve a:', ops:['annusare','scrivere','vedere','sentire'], r:1},
 {m:'Tecnologia e Informatica', cl:'1', a:'Le parti del computer', d:'medio', q:'Il computer ha:', ops:['schermo, tastiera e mouse','solo schermo','solo tastiera','solo mouse'], r:0},
 {m:'Tecnologia e Informatica', cl:'1', a:'Le parti del computer', d:'medio', q:'La stampante serve per:', ops:['sentire','stampare','disegnare','vedere'], r:1},
 {m:'Tecnologia e Informatica', cl:'1', a:'Le parti del computer', d:'medio', q:'Sul computer non bisogna:', ops:['versare acqua','scrivere','disegnare','giocare'], r:0},
  // La sicurezza
 {m:'Tecnologia e Informatica', cl:'1', a:'La sicurezza', d:'medio', q:'La presa elettrica non va:', ops:['lasciata','toccata','guardata','usata'], r:1},
 {m:'Tecnologia e Informatica', cl:'1', a:'La sicurezza', d:'medio', q:'Prima di usare un oggetto nuovo bisogna:', ops:['romperlo','nasconderlo','chiedere a un adulto','usarlo subito'], r:2},
 {m:'Tecnologia e Informatica', cl:'1', a:'La sicurezza', d:'medio', q:'Gli oggetti elettrici si usano:', ops:['con le mani bagnate','di nascosto','correndo','con le mani asciutte'], r:3},
  // ---- DIFFICILE ----
  // La sicurezza
 {m:'Tecnologia e Informatica', cl:'1', a:'La sicurezza', d:'difficile', q:'In caso di pericolo bisogna:', ops:['scappare','urlare senza motivo','chiedere aiuto','nascondersi'], r:2},
 {m:'Tecnologia e Informatica', cl:'1', a:'La sicurezza', d:'difficile', q:'Le regole di sicurezza servono per:', ops:['farci male','annoiarci','spaventarci','non farci male'], r:3},
  // Le parti del computer
 {m:'Tecnologia e Informatica', cl:'1', a:'Le parti del computer', d:'difficile', q:'Il pulsante di accensione serve per:', ops:['disegnare','stampare','sentire','accendere e spegnere'], r:3},
 {m:'Tecnologia e Informatica', cl:'1', a:'Le parti del computer', d:'difficile', q:'Le parti del computer vanno:', ops:['bagnate','usate con cura','rotte','sporcate'], r:1},
 ],

 /* ==================== CLASSE 2 - Italiano ==================== */
 '2': [
  // ---- FACILE ----
  // Frase e racconto
 {m:'Italiano', cl:'2', a:'Frase e racconto', d:'facile', q:'Chi fa l’azione nella frase "Il cane corre"?', ops:['corre','il cane','nessuno','il giardino'], r:1},
 {m:'Italiano', cl:'2', a:'Frase e racconto', d:'facile', q:'Quale di queste è una frase con senso compiuto?', ops:['Sotto palla corre se','Corre lupo il','Il gatto dorme.','Mangia il con nella'], r:2},
  // ---- MEDIO ----
  // Frase e racconto
 {m:'Italiano', cl:'2', a:'Frase e racconto', d:'medio', q:'In un racconto, l’INIZIO presenta:', ops:['i numeri','la fine della storia','i personaggi e la situazione','il risvolto'], r:2},
 {m:'Italiano', cl:'2', a:'Frase e racconto', d:'medio', q:'Un narratore che dice "Io correvo nel parco" è:', ops:['esterno','interno','assente','un robot'], r:1},
 {m:'Italiano', cl:'2', a:'Frase e racconto', d:'medio', q:'Chi RICEVE l’azione in "Il cane morde la palla"?', ops:['morde','il cane','la palla','nessuno'], r:2},
 {m:'Italiano', cl:'2', a:'Frase e racconto', d:'medio', q:'La DESCRIZIONE serve per:', ops:['spiegare un gioco','raccontare la propria giornata','dire il tempo','raccontare come è fatto un oggetto o un luogo'], r:3},
 {m:'Italiano', cl:'2', a:'Frase e racconto', d:'medio', q:'La parte del racconto in cui gli eventi si svolgono si chiama:', ops:['inizio','sviluppo','fine','titolo'], r:1},
 {m:'Italiano', cl:'2', a:'Frase e racconto', d:'medio', q:'Quale di queste NON è una frase completa?', ops:['La mamma cucina.','Il gatto dorme.','Il bambino gioca a calcio.','Mangia il cane la.'], r:3},
 {m:'Italiano', cl:'2', a:'Frase e racconto', d:'medio', q:'Il DESTINATARIO di una lettera è chi:', ops:['il postino','il titolo','chi scrive la lettera','chi riceve la lettera'], r:3},
 {m:'Italiano', cl:'2', a:'Frase e racconto', d:'medio', q:'In un racconto, la parte in cui il problema si risolve è:', ops:['l’inizio','il titolo','l’indice','la fine'], r:3},
 {m:'Italiano', cl:'2', a:'Frase e racconto', d:'medio', q:'Un testo che racconta eventi VERI e reali si chiama:', ops:['fantastico','realistico','comico','inventato'], r:1},
  // Verbi
 {m:'Italiano', cl:'2', a:'Verbi', d:'medio', q:'Un verbo esprime:', ops:['un suono','un colore','un’azione','un nome'], r:2},
 {m:'Italiano', cl:'2', a:'Verbi', d:'medio', q:'Quale è un verbo?', ops:['rosso','cane','mangiare','tavolo'], r:2},
 {m:'Italiano', cl:'2', a:'Verbi', d:'medio', q:'Quale di questi è un verbo?', ops:['alta','libro','gatto','saltare'], r:3},
 {m:'Italiano', cl:'2', a:'Verbi', d:'medio', q:'Il verbo "correre" indica:', ops:['un’azione','un colore','un numero','un giorno'], r:0},
 {m:'Italiano', cl:'2', a:'Verbi', d:'medio', q:'I tre tipi di coniugazione sono:', ops:['-ILE, -IBILE, -oso','-ARE, -ERE, -IRE','-ARE, -ORE, -URE','-ONE, -ONE, -ONE'], r:1},
 {m:'Italiano', cl:'2', a:'Verbi', d:'medio', q:'In "Ieri ho mangiato la pizza" il tempo è:', ops:['passato','imperativo','presente','futuro'], r:0},
 {m:'Italiano', cl:'2', a:'Verbi', d:'medio', q:'"Parlare" appartiene alla coniugazione:', ops:['-ERE','-IRE','-ISE','-ARE'], r:3},
 {m:'Italiano', cl:'2', a:'Verbi', d:'medio', q:'"Dormire" appartiene alla coniugazione:', ops:['-ARE','-ERE','-IRE','-IRRE'], r:2},
 {m:'Italiano', cl:'2', a:'Verbi', d:'medio', q:'Il verbo "mangiare" al presente, seconda persona singolare, fa:', ops:['tu mangerai','tu mangi','tu mangia','tu mangiato'], r:1},
 {m:'Italiano', cl:'2', a:'Verbi', d:'medio', q:'Quale di questi è un verbo IRREGOLARE?', ops:['essere','sentire','parlare','credere'], r:0},
 {m:'Italiano', cl:'2', a:'Verbi', d:'medio', q:'In "Domani andrò al mare" il tempo del verbo è:', ops:['presente','futuro','passato','condizionale'], r:1},
 {m:'Italiano', cl:'2', a:'Verbi', d:'medio', q:'"Io ero a casa" è il passato del verbo:', ops:['fare','essere','avere','andare'], r:1},
  // Aggettivi
 {m:'Italiano', cl:'2', a:'Aggettivi', d:'medio', q:'L’aggettivo descrive:', ops:['la fine','il punteggio','il nome','il verbo'], r:2},
 {m:'Italiano', cl:'2', a:'Aggettivi', d:'medio', q:'Quale è un aggettivo qualificativo?', ops:['correre','gatto','presto','rosso'], r:3},
 {m:'Italiano', cl:'2', a:'Aggettivi', d:'medio', q:'Quale di questi è un aggettivo?', ops:['grande','mangiare','porta','cane'], r:0},
 {m:'Italiano', cl:'2', a:'Aggettivi', d:'medio', q:'Completa con l’accordo giusto: "Le gatte ner___"', ops:['i','o','e','a'], r:2},
 {m:'Italiano', cl:'2', a:'Aggettivi', d:'medio', q:'In "un dolce BUONISSIMO" l’aggettivo è al grado:', ops:['superlativo','negativo','positivo','comparativo'], r:0},
 {m:'Italiano', cl:'2', a:'Aggettivi', d:'medio', q:'L’aggettivo "bellissima" è il superlativo di:', ops:['bellezza','bellino','bellanza','bello'], r:3},
 {m:'Italiano', cl:'2', a:'Aggettivi', d:'medio', q:'Completa con l’accordo giusto: "La casa bian___"', ops:['o','a','i','e'], r:1},
 {m:'Italiano', cl:'2', a:'Aggettivi', d:'medio', q:'"Meno forte di" esprime un comparativo di:', ops:['superiorità assoluta','uguaglianza','minoranza','maggioranza'], r:2},
 {m:'Italiano', cl:'2', a:'Aggettivi', d:'medio', q:'Quale coppia è accordata male?', ops:['cani neri','gatto nera','gatto nero','gatte nere'], r:1},
 {m:'Italiano', cl:'2', a:'Aggettivi', d:'medio', q:'"Più veloce di" esprime un comparativo di:', ops:['uguaglianza','maggioranza','parità perfetta','minoranza'], r:1},
 {m:'Italiano', cl:'2', a:'Aggettivi', d:'medio', q:'In "Il cielo BLU", la parola "blu" è:', ops:['un nome','un aggettivo','un verbo','un articolo'], r:1},
 {m:'Italiano', cl:'2', a:'Aggettivi', d:'medio', q:'Quale aggettivo è al femminile plurale?', ops:['alta','alto','alti','alte'], r:3},
  // H e doppie
 {m:'Italiano', cl:'2', a:'H e doppie', d:'medio', q:'Come si scrive la forma del verbo "avere" alla prima persona?', ops:['OH','OO','O','HO'], r:3},
 {m:'Italiano', cl:'2', a:'H e doppie', d:'medio', q:'Quale parola ha la DOPPIA?', ops:['palla','sole','mare','casa'], r:0},
 {m:'Italiano', cl:'2', a:'H e doppie', d:'medio', q:'Quale parola contiene una doppia?', ops:['luna','sole','sera','nonna'], r:3},
 {m:'Italiano', cl:'2', a:'H e doppie', d:'medio', q:'Completa: ___ mangiato tutto!', ops:['OO','O','OH','HO'], r:3},
 {m:'Italiano', cl:'2', a:'H e doppie', d:'medio', q:'Quale parola NON ha la doppia?', ops:['terra','mare','cappello','giraffa'], r:1},
 {m:'Italiano', cl:'2', a:'H e doppie', d:'medio', q:'La "H" serve in italiano per scrivere bene i tempi del verbo:', ops:['avere','andare','dare','essere'], r:0},
 {m:'Italiano', cl:'2', a:'H e doppie', d:'medio', q:'Quale parola è scritta SBAGLIATA?', ops:['quaderno','terra','casaa','montagna'], r:2},
 {m:'Italiano', cl:'2', a:'H e doppie', d:'medio', q:'Il plurale di "parco" è:', ops:['parcei','parcos','parchi','parques'], r:2},
 {m:'Italiano', cl:'2', a:'H e doppie', d:'medio', q:'Completa correttamente: "Io ___ un libro nuovo"', ops:['ho','oh','hò','o'], r:0},
 {m:'Italiano', cl:'2', a:'H e doppie', d:'medio', q:'Completa correttamente: "Anna ___ un gatto"', ops:['a','ha','ah','à'], r:1},
 {m:'Italiano', cl:'2', a:'H e doppie', d:'medio', q:'Quale parola ha la DOPPIA "RR"?', ops:['erario','caro','terra','camerata'], r:2},
  // ---- DIFFICILE ----
  // Frase e racconto
 {m:'Italiano', cl:'2', a:'Frase e racconto', d:'difficile', q:'Il SOGGETTO di "Mia sorella legge un libro" è:', ops:['un libro','mia sorella','leggere','legge'], r:1},
 {m:'Italiano', cl:'2', a:'Frase e racconto', d:'difficile', q:'Quale parola è il PREDICATO in "La mamma cucina la pasta"?', ops:['cucina','il piatto','la mamma','la pasta'], r:0},
  // Verbi
 {m:'Italiano', cl:'2', a:'Verbi', d:'difficile', q:'Il MODO IMPERATIVO serve per:', ops:['dare un ordine o consiglio','descrivere','chiedere','raccontare'], r:0},
  // H e doppie
 {m:'Italiano', cl:'2', a:'H e doppie', d:'difficile', q:'"CANE" e "CANNE" si distinguono perché:', ops:['il primo è sbagliato','la doppia è opzionale','hanno la stessa valenza','la doppia cambia il significato'], r:3},
 ],

 /* ==================== CLASSE 2 - Arte e Immagine ==================== */
 '2A': [
  // ---- FACILE ----
  // Colori caldi e freddi
 {m:'Arte e Immagine', cl:'2', a:'Colori caldi e freddi', d:'facile', q:'Il rosso è un colore:', ops:['trasparente','caldo','freddo','neutro'], r:1},
 {m:'Arte e Immagine', cl:'2', a:'Colori caldi e freddi', d:'facile', q:'Il blu è un colore:', ops:['neutro','trasparente','freddo','caldo'], r:2},
 {m:'Arte e Immagine', cl:'2', a:'Colori caldi e freddi', d:'facile', q:'L’arancione è un colore:', ops:['freddo','neutro','metallico','caldo'], r:3},
 {m:'Arte e Immagine', cl:'2', a:'Colori caldi e freddi', d:'facile', q:'I colori caldi ricordano:', ops:['il fuoco e il sole','il ghiaccio','il mare','la neve'], r:0},
 {m:'Arte e Immagine', cl:'2', a:'Colori caldi e freddi', d:'facile', q:'I colori caldi sono:', ops:['blu, azzurro e viola','nero e grigio','bianco e blu','rosso, giallo e arancione'], r:3},
 {m:'Arte e Immagine', cl:'2', a:'Colori caldi e freddi', d:'facile', q:'I colori freddi sono:', ops:['blu, azzurro e viola','rosso, giallo e arancione','marrone e oro','bianco e nero'], r:0},
  // Le forme geometriche
 {m:'Arte e Immagine', cl:'2', a:'Le forme geometriche', d:'facile', q:'Il triangolo ha:', ops:['6 lati','3 lati','4 lati','5 lati'], r:1},
 {m:'Arte e Immagine', cl:'2', a:'Le forme geometriche', d:'facile', q:'Il rettangolo ha:', ops:['due lati lunghi e due corti','tutti i lati uguali','tre lati','nessun lato'], r:0},
 {m:'Arte e Immagine', cl:'2', a:'Le forme geometriche', d:'facile', q:'Il cerchio è una forma:', ops:['invisibile','sonora','geometrica','casuale'], r:2},
 {m:'Arte e Immagine', cl:'2', a:'Le forme geometriche', d:'facile', q:'Il quadrato ha lati:', ops:['tutti diversi','due lunghi e due corti','nessuno','tutti uguali'], r:3},
 {m:'Arte e Immagine', cl:'2', a:'Le forme geometriche', d:'facile', q:'Le forme geometriche sono:', ops:['invisibili','sonore','regolari e precise','casuali'], r:2},
 {m:'Arte e Immagine', cl:'2', a:'Le forme geometriche', d:'facile', q:'Con le forme geometriche si possono:', ops:['solo correre','creare composizioni','solo dormire','solo cucinare'], r:1},
  // Le linee
 {m:'Arte e Immagine', cl:'2', a:'Le linee', d:'facile', q:'La linea curva è:', ops:['invisibile','ondulata','dritta','spezzata'], r:1},
 {m:'Arte e Immagine', cl:'2', a:'Le linee', d:'facile', q:'La linea retta è:', ops:['dritta','ondulata','spezzata','tonda'], r:0},
 {m:'Arte e Immagine', cl:'2', a:'Le linee', d:'facile', q:'La linea a zig-zag è:', ops:['curva','tonda','spezzata','dritta'], r:2},
 {m:'Arte e Immagine', cl:'2', a:'Le linee', d:'facile', q:'Le linee orizzontali vanno:', ops:['dall’alto in basso','in diagonale','in tondo','da sinistra a destra'], r:3},
 {m:'Arte e Immagine', cl:'2', a:'Le linee', d:'facile', q:'Le linee diagonali sono:', ops:['curve','inclinate','dritte in orizzontale','dritte in verticale'], r:1},
 {m:'Arte e Immagine', cl:'2', a:'Le linee', d:'facile', q:'Le linee concentriche sono:', ops:['tutte dritte','tutte spezzate','invisibili','una dentro l’altra'], r:3},
  // Le texture
 {m:'Arte e Immagine', cl:'2', a:'Le texture', d:'facile', q:'La texture è:', ops:['come appare la superficie al tatto','un colore','un suono','un profumo'], r:0},
 {m:'Arte e Immagine', cl:'2', a:'Le texture', d:'facile', q:'La lana è:', ops:['bagnata','morbida','ruvida','liscia'], r:1},
 {m:'Arte e Immagine', cl:'2', a:'Le texture', d:'facile', q:'La carta vetrata è:', ops:['liscia','soffice','ruvida','morbida'], r:2},
 {m:'Arte e Immagine', cl:'2', a:'Le texture', d:'facile', q:'Il vetro è:', ops:['ruvido','morbido','peloso','liscio'], r:3},
 {m:'Arte e Immagine', cl:'2', a:'Le texture', d:'facile', q:'Una superficie pelosa è:', ops:['fredda','morbida','liscia','ruvida'], r:1},
  // Il ritratto
 {m:'Arte e Immagine', cl:'2', a:'Il ritratto', d:'facile', q:'Il ritratto rappresenta:', ops:['un oggetto','un colore','una persona','un paesaggio'], r:2},
 {m:'Arte e Immagine', cl:'2', a:'Il ritratto', d:'facile', q:'Nel ritratto si disegna soprattutto:', ops:['le scarpe','la casa','il cielo','il viso'], r:3},
 {m:'Arte e Immagine', cl:'2', a:'Il ritratto', d:'facile', q:'Gli occhi nel ritratto sono:', ops:['due','tre','uno','nessuno'], r:0},
 {m:'Arte e Immagine', cl:'2', a:'Il ritratto', d:'facile', q:'Il naso si trova:', ops:['sulle orecchie','al centro del viso','sulla fronte','sul mento'], r:1},
  // ---- MEDIO ----
  // Colori caldi e freddi
 {m:'Arte e Immagine', cl:'2', a:'Colori caldi e freddi', d:'medio', q:'Il giallo è un colore:', ops:['scuro','caldo','freddo','neutro'], r:1},
 {m:'Arte e Immagine', cl:'2', a:'Colori caldi e freddi', d:'medio', q:'I colori freddi ricordano:', ops:['il ghiaccio e il mare','il fuoco','il sole','la lava'], r:0},
 {m:'Arte e Immagine', cl:'2', a:'Colori caldi e freddi', d:'medio', q:'Il verde è un colore:', ops:['neutro','metallico','freddo','caldo'], r:2},
  // Le forme geometriche
 {m:'Arte e Immagine', cl:'2', a:'Le forme geometriche', d:'medio', q:'Un palla assomiglia a:', ops:['un quadrato','un triangolo','un rettangolo','un cerchio'], r:3},
 {m:'Arte e Immagine', cl:'2', a:'Le forme geometriche', d:'medio', q:'Un libro chiuso assomiglia a:', ops:['un rettangolo','un cerchio','un triangolo','una linea'], r:0},
  // Le texture
 {m:'Arte e Immagine', cl:'2', a:'Le texture', d:'medio', q:'La texture si può sentire con:', ops:['le mani','gli occhi','le orecchie','il naso'], r:0},
 {m:'Arte e Immagine', cl:'2', a:'Le texture', d:'medio', q:'In un disegno la texture si può:', ops:['solo cancellare','ignorare','rappresentare con linee e punti','solo colorare'], r:2},
  // Il ritratto
 {m:'Arte e Immagine', cl:'2', a:'Il ritratto', d:'medio', q:'Un autoritratto rappresenta:', ops:['un paesaggio','un animale','se stessi','un amico'], r:2},
 {m:'Arte e Immagine', cl:'2', a:'Il ritratto', d:'medio', q:'La bocca si trova:', ops:['sopra gli occhi','sulla fronte','dietro la testa','sotto il naso'], r:3},
 {m:'Arte e Immagine', cl:'2', a:'Il ritratto', d:'medio', q:'I capelli nel ritratto stanno:', ops:['sopra la testa','sotto il mento','sul collo','sulle guance'], r:0},
  // Le linee
 {m:'Arte e Immagine', cl:'2', a:'Le linee', d:'medio', q:'Le linee verticali vanno:', ops:['dall’alto in basso','da sinistra a destra','in diagonale','in tondo'], r:0},
 {m:'Arte e Immagine', cl:'2', a:'Le linee', d:'medio', q:'Con linee parallele si crea:', ops:['un suono','un colore','un motivo ripetuto','un punto'], r:2},
  // ---- DIFFICILE ----
  // Colori caldi e freddi
 {m:'Arte e Immagine', cl:'2', a:'Colori caldi e freddi', d:'difficile', q:'Un disegno con colori caldi trasmette:', ops:['ghiaccio','calore ed energia','freddo','silenzio'], r:1},
  // Le forme geometriche
 {m:'Arte e Immagine', cl:'2', a:'Le forme geometriche', d:'difficile', q:'Un mosaico è fatto di:', ops:['un solo suono','aria','tante forme o tessere','un solo colore'], r:2},
 {m:'Arte e Immagine', cl:'2', a:'Le forme geometriche', d:'difficile', q:'Il tetto di una casa spesso ha forma:', ops:['di cerchio','di linea','di punto','di triangolo'], r:3},
  // Le texture
 {m:'Arte e Immagine', cl:'2', a:'Le texture', d:'difficile', q:'Il tronco di un albero ha texture:', ops:['liscia','trasparente','morbida','ruvida'], r:3},
 {m:'Arte e Immagine', cl:'2', a:'Le texture', d:'difficile', q:'La texture visiva si percepisce:', ops:['con la vista','con il tatto','con l’udito','con l’olfatto'], r:0},
 {m:'Arte e Immagine', cl:'2', a:'Le texture', d:'difficile', q:'Ogni materiale ha una texture:', ops:['sonora','diversa','uguale','invisibile'], r:1},
  // Il ritratto
 {m:'Arte e Immagine', cl:'2', a:'Il ritratto', d:'difficile', q:'Un ritratto può mostrare:', ops:['solo le mani','le emozioni del viso','solo i colori','solo lo sfondo'], r:1},
 {m:'Arte e Immagine', cl:'2', a:'Il ritratto', d:'difficile', q:'Per fare un bel ritratto serve osservare:', ops:['solo lo sfondo','nulla','i lineamenti del viso','solo i colori'], r:2},
 {m:'Arte e Immagine', cl:'2', a:'Il ritratto', d:'difficile', q:'Le sopracciglia si trovano:', ops:['sotto gli occhi','sul mento','sulle guance','sopra gli occhi'], r:3},
  // Le linee
 {m:'Arte e Immagine', cl:'2', a:'Le linee', d:'difficile', q:'Una composizione di sole linee si chiama:', ops:['disegno lineare','fotografia','scultura','mosaico'], r:0},
 {m:'Arte e Immagine', cl:'2', a:'Le linee', d:'difficile', q:'Le linee spesse e sottili insieme danno:', ops:['un colore','ritmo al disegno','confusione','un suono'], r:1},
 ],

 /* ==================== CLASSE 2 - Inglese ==================== */
 '2E': [
  // ---- FACILE ----
  // Colori
 {m:'Inglese', cl:'2', a:'Colori', d:'facile', q:'"Grey" significa:', ops:['grigio','verde','rosso','blu'], r:0},
 {m:'Inglese', cl:'2', a:'Colori', d:'facile', q:'Il colore del sole in inglese è:', ops:['black','yellow','blue','green'], r:1},
 {m:'Inglese', cl:'2', a:'Colori', d:'facile', q:'Il colore del cielo è:', ops:['green','black','blue','red'], r:2},
 {m:'Inglese', cl:'2', a:'Colori', d:'facile', q:'Il colore dell’erba è:', ops:['yellow','blue','white','green'], r:3},
 {m:'Inglese', cl:'2', a:'Colori', d:'facile', q:'"Dark" significa:', ops:['luminoso','scuro','chiaro','colorato'], r:1},
 {m:'Inglese', cl:'2', a:'Colori', d:'facile', q:'"Light" (come colore) significa:', ops:['nero','pesante','chiaro','scuro'], r:2},
 {m:'Inglese', cl:'2', a:'Colori', d:'facile', q:'Il colore "violet" è:', ops:['arancione','rosa','marrone','violetto'], r:3},
 {m:'Inglese', cl:'2', a:'Colori', d:'facile', q:'Il colore della neve in inglese è:', ops:['green','white','black','blue'], r:1},
  // Numeri
 {m:'Inglese', cl:'2', a:'Numeri', d:'facile', q:'"Forty" significa:', ops:['cinquanta','sessanta','quaranta','trenta'], r:2},
 {m:'Inglese', cl:'2', a:'Numeri', d:'facile', q:'"Fifty" significa:', ops:['quaranta','sessanta','settanta','cinquanta'], r:3},
  // La scuola
 {m:'Inglese', cl:'2', a:'La scuola', d:'facile', q:'"Book" significa:', ops:['matita','libro','quaderno','penna'], r:1},
 {m:'Inglese', cl:'2', a:'La scuola', d:'facile', q:'"Pen" significa:', ops:['gomma','libro','penna','matita'], r:2},
 {m:'Inglese', cl:'2', a:'La scuola', d:'facile', q:'"Pupil" significa:', ops:['genitore','alunno','insegnante','preside'], r:1},
 {m:'Inglese', cl:'2', a:'La scuola', d:'facile', q:'"Desk" significa:', ops:['lavagna','armadio','banco','sedia'], r:2},
 {m:'Inglese', cl:'2', a:'La scuola', d:'facile', q:'"Bag" (school bag) significa:', ops:['giacca','zaino','cappello','scarpe'], r:1},
  // Animali
 {m:'Inglese', cl:'2', a:'Animali', d:'facile', q:'"Lion" significa:', ops:['orso','lupo','leone','tigre'], r:2},
 {m:'Inglese', cl:'2', a:'Animali', d:'facile', q:'"Bear" significa:', ops:['lupo','orso','leone','tigre'], r:1},
 {m:'Inglese', cl:'2', a:'Animali', d:'facile', q:'"Wolf" significa:', ops:['orso','cane','lupo','volpe'], r:2},
 {m:'Inglese', cl:'2', a:'Animali', d:'facile', q:'"Fox" significa:', ops:['lupo','cane','gatto','volpe'], r:3},
 {m:'Inglese', cl:'2', a:'Animali', d:'facile', q:'"Tiger" significa:', ops:['tigre','leone','pantera','gatto'], r:0},
 {m:'Inglese', cl:'2', a:'Animali', d:'facile', q:'"Snake" significa:', ops:['pesce','serpente','lucertola','rana'], r:1},
 {m:'Inglese', cl:'2', a:'Animali', d:'facile', q:'"Frog" significa:', ops:['lucertola','pesce','rana','serpente'], r:2},
  // Il cibo
 {m:'Inglese', cl:'2', a:'Il cibo', d:'facile', q:'"Apple" significa:', ops:['mela','pera','banana','arancia'], r:0},
 {m:'Inglese', cl:'2', a:'Il cibo', d:'facile', q:'"Bread" significa:', ops:['formaggio','pane','latte','acqua'], r:1},
 {m:'Inglese', cl:'2', a:'Il cibo', d:'facile', q:'"Milk" significa:', ops:['acqua','succo','latte','pane'], r:2},
 {m:'Inglese', cl:'2', a:'Il cibo', d:'facile', q:'"Water" significa:', ops:['latte','succo','tè','acqua'], r:3},
 {m:'Inglese', cl:'2', a:'Il cibo', d:'facile', q:'"Egg" significa:', ops:['uovo','pollo','pane','latte'], r:0},
 {m:'Inglese', cl:'2', a:'Il cibo', d:'facile', q:'"Meat" significa:', ops:['pane','formaggio','carne','pesce'], r:2},
 {m:'Inglese', cl:'2', a:'Il cibo', d:'facile', q:'"Fish" (come cibo) significa:', ops:['carne','uovo','pollo','pesce'], r:3},
 {m:'Inglese', cl:'2', a:'Il cibo', d:'facile', q:'"Fruit" significa:', ops:['pane','frutta','verdura','dolce'], r:1},
  // ---- MEDIO ----
  // Colori
 {m:'Inglese', cl:'2', a:'Colori', d:'medio', q:'"Colour" in inglese significa:', ops:['colore','numero','animale','cibo'], r:0},
 {m:'Inglese', cl:'2', a:'Colori', d:'medio', q:'"Golden" significa:', ops:['dorato','argento','rosso','verde'], r:0},
  // Numeri
 {m:'Inglese', cl:'2', a:'Numeri', d:'medio', q:'"Eleven" significa:', ops:['dodici','tredici','undici','dieci'], r:2},
 {m:'Inglese', cl:'2', a:'Numeri', d:'medio', q:'"Twelve" significa:', ops:['undici','tredici','quattordici','dodici'], r:3},
 {m:'Inglese', cl:'2', a:'Numeri', d:'medio', q:'"Thirteen" significa:', ops:['tredici','dodici','quattordici','quindici'], r:0},
 {m:'Inglese', cl:'2', a:'Numeri', d:'medio', q:'"Fourteen" significa:', ops:['sedici','quattordici','tredici','quindici'], r:1},
 {m:'Inglese', cl:'2', a:'Numeri', d:'medio', q:'"Fifteen" significa:', ops:['sedici','diciassette','quindici','quattordici'], r:2},
 {m:'Inglese', cl:'2', a:'Numeri', d:'medio', q:'"Sixteen" significa:', ops:['quindici','diciassette','diciotto','sedici'], r:3},
 {m:'Inglese', cl:'2', a:'Numeri', d:'medio', q:'"Twenty" significa:', ops:['venti','dodici','trenta','dieci'], r:0},
 {m:'Inglese', cl:'2', a:'Numeri', d:'medio', q:'"Thirty" significa:', ops:['cinquanta','trenta','venti','quaranta'], r:1},
  // La scuola
 {m:'Inglese', cl:'2', a:'La scuola', d:'medio', q:'"School" significa:', ops:['scuola','casa','chiesa','negozio'], r:0},
 {m:'Inglese', cl:'2', a:'La scuola', d:'medio', q:'"Pencil" significa:', ops:['penna','gomma','righello','matita'], r:3},
 {m:'Inglese', cl:'2', a:'La scuola', d:'medio', q:'"Teacher" significa:', ops:['insegnante','alunno','bidello','cuoco'], r:0},
 {m:'Inglese', cl:'2', a:'La scuola', d:'medio', q:'"Blackboard" significa:', ops:['banco','sedia','porta','lavagna'], r:3},
 {m:'Inglese', cl:'2', a:'La scuola', d:'medio', q:'"Homework" significa:', ops:['compiti','gioco','ricreazione','merenda'], r:0},
  // Animali
 {m:'Inglese', cl:'2', a:'Animali', d:'medio', q:'"Elephant" significa:', ops:['leone','giraffa','zebra','elefante'], r:3},
 {m:'Inglese', cl:'2', a:'Animali', d:'medio', q:'"Monkey" significa:', ops:['scimmia','gatto','cane','topo'], r:0},
 {m:'Inglese', cl:'2', a:'Animali', d:'medio', q:'"Butterfly" significa:', ops:['ape','mosca','formica','farfalla'], r:3},
  // Il cibo
 {m:'Inglese', cl:'2', a:'Il cibo', d:'medio', q:'"Cheese" significa:', ops:['uovo','formaggio','burro','latte'], r:1},
 {m:'Inglese', cl:'2', a:'Il cibo', d:'medio', q:'"Vegetables" significa:', ops:['verdure','frutta','dolci','carne'], r:0},
  // ---- DIFFICILE ----
  // Il verbo essere
 {m:'Inglese', cl:'2', a:'Il verbo essere', d:'difficile', q:'Completa: "I ___ a pupil."', ops:['am','is','are','be'], r:0},
 {m:'Inglese', cl:'2', a:'Il verbo essere', d:'difficile', q:'Completa: "They ___ happy."', ops:['is','are','am','be'], r:1},
 {m:'Inglese', cl:'2', a:'Il verbo essere', d:'difficile', q:'Completa: "She ___ a cat."', ops:['have','has','haves','having'], r:1},
 {m:'Inglese', cl:'2', a:'Il verbo essere', d:'difficile', q:'Qual è il plurale di "child"?', ops:['childs','childes','children','childrens'], r:2},
 ],

 /* ==================== CLASSE 2 - Educazione Civica ==================== */
 '2EC': [
  // ---- FACILE ----
  // Le regole
 {m:'Educazione Civica', cl:'2', a:'Le regole', d:'facile', q:'Chi rispetta le regole è:', ops:['un ribelle','un egoista','un buon cittadino','un cattivo'], r:2},
 {m:'Educazione Civica', cl:'2', a:'Le regole', d:'facile', q:'Le regole servono per:', ops:['vivere bene insieme','litigare','barare','sporcare'], r:0},
 {m:'Educazione Civica', cl:'2', a:'Le regole', d:'facile', q:'Le regole si rispettano:', ops:['solo a scuola','sempre','mai','solo quando conviene'], r:1},
 {m:'Educazione Civica', cl:'2', a:'Le regole', d:'facile', q:'In classe le regole servono per:', ops:['fare rumore','litigare','disturbare','stare bene insieme'], r:3},
  // Il rispetto degli altri
 {m:'Educazione Civica', cl:'2', a:'Il rispetto degli altri', d:'facile', q:'Ascoltare chi parla è:', ops:['maleducazione','noia','errore','rispetto'], r:3},
 {m:'Educazione Civica', cl:'2', a:'Il rispetto degli altri', d:'facile', q:'Chiedere scusa è:', ops:['un gesto brutto','inutile','sbagliato','un gesto gentile'], r:3},
 {m:'Educazione Civica', cl:'2', a:'Il rispetto degli altri', d:'facile', q:'Dire "grazie" e "per favore" è:', ops:['educato','maleducato','inutile','sbagliato'], r:0},
 {m:'Educazione Civica', cl:'2', a:'Il rispetto degli altri', d:'facile', q:'Prendere in giro è:', ops:['coraggio','mancanza di rispetto','rispetto','gentilezza'], r:1},
 {m:'Educazione Civica', cl:'2', a:'Il rispetto degli altri', d:'facile', q:'Rispettare chi è diverso da noi è:', ops:['inutile','dannoso','importante','sbagliato'], r:2},
  // La sicurezza
 {m:'Educazione Civica', cl:'2', a:'La sicurezza', d:'facile', q:'Attraversare la strada si fa:', ops:['col rosso','con gli occhi chiusi','sulle strisce','correndo'], r:2},
 {m:'Educazione Civica', cl:'2', a:'La sicurezza', d:'facile', q:'In macchina si sta:', ops:['fuori dal finestrino','sul seggiolino','in piedi','sul tetto'], r:1},
 {m:'Educazione Civica', cl:'2', a:'La sicurezza', d:'facile', q:'Giocare per strada è:', ops:['pericoloso','sicuro','divertente','giusto'], r:0},
 {m:'Educazione Civica', cl:'2', a:'La sicurezza', d:'facile', q:'Il numero di emergenza in Italia è:', ops:['000','999','112','111'], r:2},
  // L’ambiente
 {m:'Educazione Civica', cl:'2', a:'L’ambiente', d:'facile', q:'L’ambiente è:', ops:['ciò che ci circonda','un gioco','un cibo','un colore'], r:0},
 {m:'Educazione Civica', cl:'2', a:'L’ambiente', d:'facile', q:'Buttare la carta per terra:', ops:['aiuta','inquina','pulisce','non fa nulla'], r:1},
 {m:'Educazione Civica', cl:'2', a:'L’ambiente', d:'facile', q:'I rifiuti vanno messi:', ops:['nel fiume','sulla strada','nei cestini','per terra'], r:2},
 {m:'Educazione Civica', cl:'2', a:'L’ambiente', d:'facile', q:'Rispettare la natura è:', ops:['inutile','sbagliato','dannoso','importante'], r:3},
  // I simboli
 {m:'Educazione Civica', cl:'2', a:'I simboli', d:'facile', q:'La bandiera italiana ha:', ops:['verde, bianco e rosso','blu, bianco e rosso','rosso e giallo','nero e bianco'], r:0},
 {m:'Educazione Civica', cl:'2', a:'I simboli', d:'facile', q:'L’inno italiano si chiama:', ops:['God Save','Inno di Mameli','Bella Ciao','La Marsigliese'], r:1},
 {m:'Educazione Civica', cl:'2', a:'I simboli', d:'facile', q:'I colori della bandiera italiana sono:', ops:['un colore','cinque colori','tre colori','due colori'], r:2},
 {m:'Educazione Civica', cl:'2', a:'I simboli', d:'facile', q:'L’inno nazionale si canta:', ops:['mai','solo a scuola','solo di notte','nelle occasioni importanti'], r:3},
 {m:'Educazione Civica', cl:'2', a:'I simboli', d:'facile', q:'Il tricolore italiano è:', ops:['verde, bianco e rosso','blu, bianco e rosso','rosso, giallo e blu','verde e bianco'], r:0},
 {m:'Educazione Civica', cl:'2', a:'I simboli', d:'facile', q:'I simboli della Repubblica italiana sono:', ops:['solo la bandiera','solo l’inno','solo l’emblema','bandiera, inno e emblema'], r:3},
 {m:'Educazione Civica', cl:'2', a:'I simboli', d:'facile', q:'La Festa della Repubblica è:', ops:['il 2 giugno','il 25 aprile','il 1 maggio','il 25 dicembre'], r:0},
  // ---- MEDIO ----
  // Il rispetto degli altri
 {m:'Educazione Civica', cl:'2', a:'Il rispetto degli altri', d:'medio', q:'Litigare con i compagni:', ops:['non va bene','va sempre bene','è divertente','è giusto'], r:0},
 {m:'Educazione Civica', cl:'2', a:'Il rispetto degli altri', d:'medio', q:'Le cose degli altri vanno:', ops:['sporcate','nascoste','rispettate','rotte'], r:2},
  // La sicurezza
 {m:'Educazione Civica', cl:'2', a:'La sicurezza', d:'medio', q:'In bici si indossa:', ops:['nulla','le cuffie','il casco','il cappello'], r:2},
 {m:'Educazione Civica', cl:'2', a:'La sicurezza', d:'medio', q:'La cintura di sicurezza serve per:', ops:['decorare','dormire','giocare','proteggere'], r:3},
  // Le regole
 {m:'Educazione Civica', cl:'2', a:'Le regole', d:'medio', q:'Le regole valgono:', ops:['per tutti','solo per i bambini','solo per gli adulti','per nessuno'], r:0},
 {m:'Educazione Civica', cl:'2', a:'Le regole', d:'medio', q:'Una regola a casa può essere:', ops:['rompere','mettere in ordine','sporcare','urlare'], r:1},
 {m:'Educazione Civica', cl:'2', a:'Le regole', d:'medio', q:'Trasgredire le regole:', ops:['è divertente','è giusto','può causare problemi','va sempre bene'], r:2},
  // L’ambiente
 {m:'Educazione Civica', cl:'2', a:'L’ambiente', d:'medio', q:'Non sprecare l’acqua serve per:', ops:['proteggere l’ambiente','sprecare','inquinare','dormire'], r:0},
 {m:'Educazione Civica', cl:'2', a:'L’ambiente', d:'medio', q:'Gli alberi danno:', ops:['fumo','ossigeno','plastica','benzina'], r:1},
 {m:'Educazione Civica', cl:'2', a:'L’ambiente', d:'medio', q:'Spegnere le luci quando non servono:', ops:['non serve','inquina','risparmia energia','spreca energia'], r:2},
  // I simboli
 {m:'Educazione Civica', cl:'2', a:'I simboli', d:'medio', q:'La bandiera si rispetta:', ops:['solo a scuola','sempre','mai','solo di notte'], r:1},
 {m:'Educazione Civica', cl:'2', a:'I simboli', d:'medio', q:'L’inno nazionale rappresenta:', ops:['una canzone qualunque','un cibo','il nostro paese','un gioco'], r:2},
  // ---- DIFFICILE ----
  // Le regole
 {m:'Educazione Civica', cl:'2', a:'Le regole', d:'difficile', q:'Senza regole ci sarebbe:', ops:['confusione','ordine','pace','armonia'], r:0},
 {m:'Educazione Civica', cl:'2', a:'Le regole', d:'difficile', q:'Le regole della strada si chiamano:', ops:['regole del gioco','regole di casa','regole della scuola','codice della strada'], r:3},
 {m:'Educazione Civica', cl:'2', a:'Le regole', d:'difficile', q:'Le regole ci aiutano a:', ops:['sporcare','stare sicuri','farci male','litigare'], r:1},
  // Il rispetto degli altri
 {m:'Educazione Civica', cl:'2', a:'Il rispetto degli altri', d:'difficile', q:'Il rispetto si mostra:', ops:['con i dispetti','con parole e gesti gentili','con i pugni','con le urla'], r:1},
 {m:'Educazione Civica', cl:'2', a:'Il rispetto degli altri', d:'difficile', q:'La gentilezza rende:', ops:['tutti più tristi','tutto più difficile','tutto più noioso','tutti più felici'], r:3},
  // La sicurezza
 {m:'Educazione Civica', cl:'2', a:'La sicurezza', d:'difficile', q:'Il marciapiede serve per:', ops:['giocare a palla','correre tra le auto','dormire','camminare in sicurezza'], r:3},
 {m:'Educazione Civica', cl:'2', a:'La sicurezza', d:'difficile', q:'In caso di incendio bisogna:', ops:['correre','chiamare i soccorsi','nascondersi','aprire le finestre'], r:1},
  // L’ambiente
 {m:'Educazione Civica', cl:'2', a:'L’ambiente', d:'difficile', q:'Riciclare i rifiuti serve per:', ops:['inquinare','sprecare','dormire','proteggere l’ambiente'], r:3},
 {m:'Educazione Civica', cl:'2', a:'L’ambiente', d:'difficile', q:'La raccolta differenziata divide:', ops:['i rifiuti per tipo','i colori','i giochi','i cibi'], r:0},
 {m:'Educazione Civica', cl:'2', a:'L’ambiente', d:'difficile', q:'Prendersi cura dell’ambiente è compito:', ops:['solo dei bambini','di tutti','di nessuno','solo degli adulti'], r:1},
  // I simboli
 {m:'Educazione Civica', cl:'2', a:'I simboli', d:'difficile', q:'Il 25 aprile si festeggia:', ops:['la Pasqua','la Liberazione','la Repubblica','il Natale'], r:1},
 ],

 /* ==================== CLASSE 2 - Educazione Fisica ==================== */
 '2EF': [
  // ---- FACILE ----
  // Il corpo
 {m:'Educazione Fisica', cl:'2', a:'Il corpo', d:'facile', q:'Le gambe servono per:', ops:['vedere','sentire','camminare','afferrare'], r:2},
 {m:'Educazione Fisica', cl:'2', a:'Il corpo', d:'facile', q:'Il collo collega:', ops:['braccia e gambe','mani e piedi','occhi e orecchie','testa e tronco'], r:3},
 {m:'Educazione Fisica', cl:'2', a:'Il corpo', d:'facile', q:'Il corpo umano è formato da:', ops:['testa, tronco e arti','solo testa','solo gambe','solo braccia'], r:0},
 {m:'Educazione Fisica', cl:'2', a:'Il corpo', d:'facile', q:'Le braccia servono per:', ops:['sentire','afferrare','camminare','vedere'], r:1},
  // La salute
 {m:'Educazione Fisica', cl:'2', a:'La salute', d:'facile', q:'Per stare bene bisogna:', ops:['mangiare sano','mangiare solo dolci','non dormire','non muoversi'], r:0},
 {m:'Educazione Fisica', cl:'2', a:'La salute', d:'facile', q:'Dormire serve per:', ops:['giocare','riposare','correre','mangiare'], r:1},
 {m:'Educazione Fisica', cl:'2', a:'La salute', d:'facile', q:'Bere acqua fa:', ops:['nulla','solo dormire','bene','male'], r:2},
 {m:'Educazione Fisica', cl:'2', a:'La salute', d:'facile', q:'Lavarsi serve per:', ops:['sporcarsi','dormire','correre','restare puliti'], r:3},
  // I movimenti
 {m:'Educazione Fisica', cl:'2', a:'I movimenti', d:'facile', q:'Saltare si fa con:', ops:['le gambe','le orecchie','il naso','i capelli'], r:0},
 {m:'Educazione Fisica', cl:'2', a:'I movimenti', d:'facile', q:'Camminare è un movimento:', ops:['fermo','invisibile','lento','veloce'], r:2},
 {m:'Educazione Fisica', cl:'2', a:'I movimenti', d:'facile', q:'Correre è un movimento:', ops:['lento','fermo','invisibile','veloce'], r:3},
 {m:'Educazione Fisica', cl:'2', a:'I movimenti', d:'facile', q:'Lanciare la palla si fa con:', ops:['il naso','le mani','i piedi soltanto','gli occhi'], r:1},
 {m:'Educazione Fisica', cl:'2', a:'I movimenti', d:'facile', q:'La coordinazione è:', ops:['correre senza controllo','muovere bene il corpo','dormire','mangiare'], r:1},
  // Lo sport
 {m:'Educazione Fisica', cl:'2', a:'Lo sport', d:'facile', q:'Il nuoto si fa:', ops:['in acqua','in cielo','per terra','sulla neve'], r:0},
 {m:'Educazione Fisica', cl:'2', a:'Lo sport', d:'facile', q:'La pallavolo si gioca:', ops:['con il naso','con le mani','con i piedi','con la testa'], r:1},
 {m:'Educazione Fisica', cl:'2', a:'Lo sport', d:'facile', q:'Lo sport fa bene:', ops:['al telefono','al muro','al corpo','alla tv'], r:2},
 {m:'Educazione Fisica', cl:'2', a:'Lo sport', d:'facile', q:'Il calcio si gioca:', ops:['con le mani','con la testa soltanto','senza palla','con i piedi e la palla'], r:3},
  // I giochi di squadra
 {m:'Educazione Fisica', cl:'2', a:'I giochi di squadra', d:'facile', q:'Un gioco di squadra si fa:', ops:['insieme','da soli','mai','solo di notte'], r:0},
 {m:'Educazione Fisica', cl:'2', a:'I giochi di squadra', d:'facile', q:'Nella squadra bisogna:', ops:['isolarsi','collaborare','litigare','barare'], r:1},
 {m:'Educazione Fisica', cl:'2', a:'I giochi di squadra', d:'facile', q:'Passare la palla è:', ops:['proibito','inutile','un gesto di squadra','un errore'], r:2},
 {m:'Educazione Fisica', cl:'2', a:'I giochi di squadra', d:'facile', q:'Il gioco di squadra insegna:', ops:['a litigare','a barare','a isolarsi','a stare insieme'], r:3},
 {m:'Educazione Fisica', cl:'2', a:'I giochi di squadra', d:'facile', q:'Lo spirito di squadra è:', ops:['pensare solo a sé','litigare','barare','aiutarsi a vicenda'], r:3},
 {m:'Educazione Fisica', cl:'2', a:'I giochi di squadra', d:'facile', q:'Perdere insieme significa:', ops:['accettare e riprovare','arrabbiarsi sempre','smettere','litigare'], r:0},
  // ---- MEDIO ----
  // Il corpo
 {m:'Educazione Fisica', cl:'2', a:'Il corpo', d:'medio', q:'I piedi servono per:', ops:['camminare','afferrare','vedere','sentire'], r:0},
 {m:'Educazione Fisica', cl:'2', a:'Il corpo', d:'medio', q:'Il corpo va curato:', ops:['solo di notte','tutti i giorni','mai','una volta l’anno'], r:1},
 {m:'Educazione Fisica', cl:'2', a:'Il corpo', d:'medio', q:'La schiena va tenuta:', ops:['mai dritta','storta','dritta','sempre curva'], r:2},
 {m:'Educazione Fisica', cl:'2', a:'Il corpo', d:'medio', q:'Il riposo serve al corpo per:', ops:['recuperare','stancarsi','indebolirsi','ammalarsi'], r:0},
  // I movimenti
 {m:'Educazione Fisica', cl:'2', a:'I movimenti', d:'medio', q:'Prendere la palla richiede:', ops:['fretta','paura','attenzione','sonno'], r:2},
 {m:'Educazione Fisica', cl:'2', a:'I movimenti', d:'medio', q:'Strisciare si fa:', ops:['in cielo','in acqua','mai','a terra'], r:3},
 {m:'Educazione Fisica', cl:'2', a:'I movimenti', d:'medio', q:'Arrampicarsi richiede:', ops:['forza e attenzione','solo sonno','solo paura','nulla'], r:0},
  // I giochi di squadra
 {m:'Educazione Fisica', cl:'2', a:'I giochi di squadra', d:'medio', q:'Nel gioco di squadra si vince:', ops:['insieme','da soli','mai','solo con fortuna'], r:0},
 {m:'Educazione Fisica', cl:'2', a:'I giochi di squadra', d:'medio', q:'Un compagno in difficoltà va:', ops:['allontanato','aiutato','ignorato','deriso'], r:1},
 {m:'Educazione Fisica', cl:'2', a:'I giochi di squadra', d:'medio', q:'Le regole di squadra servono per:', ops:['barare','vincere a tutti i costi','giocare bene insieme','litigare'], r:2},
  // Lo sport
 {m:'Educazione Fisica', cl:'2', a:'Lo sport', d:'medio', q:'La bicicletta serve per:', ops:['volare','dormire','andare veloci','nuotare'], r:2},
 {m:'Educazione Fisica', cl:'2', a:'Lo sport', d:'medio', q:'Fare sport regolarmente:', ops:['fa male','non serve','è proibito','fa bene'], r:3},
 {m:'Educazione Fisica', cl:'2', a:'Lo sport', d:'medio', q:'La ginnastica serve per:', ops:['essere flessibili','dormire','mangiare','vedere'], r:0},
  // La salute
 {m:'Educazione Fisica', cl:'2', a:'La salute', d:'medio', q:'La frutta e la verdura fanno:', ops:['bene','male','nulla','solo dormire'], r:0},
 {m:'Educazione Fisica', cl:'2', a:'La salute', d:'medio', q:'Muoversi ogni giorno:', ops:['è proibito','fa bene','fa male','non serve'], r:1},
 {m:'Educazione Fisica', cl:'2', a:'La salute', d:'medio', q:'I denti si lavano:', ops:['una volta l’anno','solo di notte','spesso','mai'], r:2},
  // ---- DIFFICILE ----
  // Lo sport
 {m:'Educazione Fisica', cl:'2', a:'Lo sport', d:'difficile', q:'Prima dello sport bisogna:', ops:['correre subito','riscaldarsi','dormire','mangiare tanto'], r:1},
 {m:'Educazione Fisica', cl:'2', a:'Lo sport', d:'difficile', q:'Lo sport insegna:', ops:['a litigare','a barare','a isolarsi','il rispetto delle regole'], r:3},
 {m:'Educazione Fisica', cl:'2', a:'Lo sport', d:'difficile', q:'Dopo lo sport bisogna:', ops:['mangiare dolci','correre ancora','bere acqua','dormire subito'], r:2},
  // La salute
 {m:'Educazione Fisica', cl:'2', a:'La salute', d:'difficile', q:'Per crescere sani servono:', ops:['solo dolci','solo riposo','solo tv','cibo sano, riposo e movimento'], r:3},
 {m:'Educazione Fisica', cl:'2', a:'La salute', d:'difficile', q:'Il corpo in salute si sente:', ops:['forte','stanco sempre','debole','male'], r:0},
 {m:'Educazione Fisica', cl:'2', a:'La salute', d:'difficile', q:'Le verdure fanno:', ops:['solo dormire','bene','male','nulla'], r:1},
  // Il corpo
 {m:'Educazione Fisica', cl:'2', a:'Il corpo', d:'difficile', q:'Il corpo cresce grazie a:', ops:['solo dolci','solo riposo','solo tv','cibo e movimento'], r:3},
 {m:'Educazione Fisica', cl:'2', a:'Il corpo', d:'difficile', q:'Una postura corretta aiuta:', ops:['le unghie','la schiena','gli occhi soltanto','i capelli'], r:1},
  // I movimenti
 {m:'Educazione Fisica', cl:'2', a:'I movimenti', d:'difficile', q:'L’equilibrio serve per:', ops:['mangiare','vedere','stare su un piede','dormire'], r:2},
 {m:'Educazione Fisica', cl:'2', a:'I movimenti', d:'difficile', q:'Prima di correre tanto bisogna:', ops:['dormire','mangiare','fermarsi','riscaldarsi'], r:3},
  // I giochi di squadra
 {m:'Educazione Fisica', cl:'2', a:'I giochi di squadra', d:'difficile', q:'Il capitano della squadra:', ops:['barare','guida i compagni','gioca da solo','litiga'], r:1},
 ],

 /* ==================== CLASSE 2 - Geografia ==================== */
 '2G': [
  // ---- FACILE ----
  // Il mare
 {m:'Geografia', cl:'2', a:'Il mare', d:'facile', q:'Nel mare vivono:', ops:['i pesci','i cavalli','le mucche','gli orsi'], r:0},
 {m:'Geografia', cl:'2', a:'Il mare', d:'facile', q:'Il mare è:', ops:['un deserto','un bosco','una grande distesa di acqua salata','una montagna'], r:2},
 {m:'Geografia', cl:'2', a:'Il mare', d:'facile', q:'L’acqua del mare è:', ops:['dolce','zuccherata','gassata','salata'], r:3},
 {m:'Geografia', cl:'2', a:'Il mare', d:'facile', q:'La spiaggia è fatta di:', ops:['legno','sabbia','ferro','vetro'], r:1},
 {m:'Geografia', cl:'2', a:'Il mare', d:'facile', q:'La costa è:', ops:['un deserto','un fiume','il punto dove il mare tocca la terra','una montagna'], r:2},
 {m:'Geografia', cl:'2', a:'Il mare', d:'facile', q:'L’isola è:', ops:['una terra circondata dal mare','un fiume','una montagna','un lago'], r:0},
 {m:'Geografia', cl:'2', a:'Il mare', d:'facile', q:'La marea è:', ops:['un porto','l’alzarsi e abbassarsi del livello del mare','un pesce','una barca'], r:1},
  // I paesaggi
 {m:'Geografia', cl:'2', a:'I paesaggi', d:'facile', q:'Il paesaggio è:', ops:['ciò che vediamo intorno a noi','un gioco','un cibo','un colore'], r:0},
 {m:'Geografia', cl:'2', a:'I paesaggi', d:'facile', q:'Un paesaggio con tanti alberi è:', ops:['il ghiacciaio','il bosco','il deserto','il mare'], r:1},
 {m:'Geografia', cl:'2', a:'I paesaggi', d:'facile', q:'Un paesaggio con tanta sabbia è:', ops:['il mare','la montagna','il deserto','il bosco'], r:2},
 {m:'Geografia', cl:'2', a:'I paesaggi', d:'facile', q:'Il paesaggio di montagna ha:', ops:['solo sabbia','solo acqua','solo campi','cime alte'], r:3},
 {m:'Geografia', cl:'2', a:'I paesaggi', d:'facile', q:'Il paesaggio di pianura è:', ops:['piatto','molto ripido','ghiacciato','sabbioso'], r:0},
 {m:'Geografia', cl:'2', a:'I paesaggi', d:'facile', q:'Il paesaggio di collina è:', ops:['marino','dolce e ondulato','altissimo','sabbioso'], r:1},
 {m:'Geografia', cl:'2', a:'I paesaggi', d:'facile', q:'Un paesaggio con case, strade e negozi è:', ops:['urbano','naturale','desertico','marino'], r:0},
  // La montagna
 {m:'Geografia', cl:'2', a:'La montagna', d:'facile', q:'La montagna è:', ops:['un rilievo alto','una distesa piatta','un mare','un deserto'], r:0},
 {m:'Geografia', cl:'2', a:'La montagna', d:'facile', q:'La cima è:', ops:['la valle','la parte più alta della montagna','la parte più bassa','il mare'], r:1},
 {m:'Geografia', cl:'2', a:'La montagna', d:'facile', q:'Sulla montagna alta c’è spesso:', ops:['il mare','il deserto','la neve','la sabbia'], r:2},
 {m:'Geografia', cl:'2', a:'La montagna', d:'facile', q:'Ai piedi della montagna c’è:', ops:['la cima','il ghiacciaio','la vetta','la valle'], r:3},
 {m:'Geografia', cl:'2', a:'La montagna', d:'facile', q:'In montagna l’aria è:', ops:['sempre bollente','più fresca','più calda','uguale al mare'], r:1},
 {m:'Geografia', cl:'2', a:'La montagna', d:'facile', q:'Il pendio è:', ops:['la valle','il fiume','il fianco inclinato della montagna','la cima'], r:2},
 {m:'Geografia', cl:'2', a:'La montagna', d:'facile', q:'La montagna più alta d’Italia è:', ops:['il Vesuvio','l’Etna','il Cervino','il Monte Bianco'], r:3},
  // La pianura
 {m:'Geografia', cl:'2', a:'La pianura', d:'facile', q:'La pianura è:', ops:['un mare','un deserto','una distesa piatta','una montagna'], r:2},
 {m:'Geografia', cl:'2', a:'La pianura', d:'facile', q:'La pianura è adatta per:', ops:['sciare','nuotare','scalare','coltivare'], r:3},
 {m:'Geografia', cl:'2', a:'La pianura', d:'facile', q:'Nella pianura si coltivano:', ops:['grano e mais','banane','cocco','ananas'], r:0},
 {m:'Geografia', cl:'2', a:'La pianura', d:'facile', q:'La pianura, rispetto alla montagna, è:', ops:['sabbiosa','poco ripida','molto ripida','ghiacciata'], r:1},
 {m:'Geografia', cl:'2', a:'La pianura', d:'facile', q:'La pianura più grande d’Italia è:', ops:['il Tavoliere','la Val d’Orcia','la Pianura Padana','la Maremma'], r:2},
 {m:'Geografia', cl:'2', a:'La pianura', d:'facile', q:'In pianura il terreno è:', ops:['sabbioso','fertile','roccioso','ghiacciato'], r:1},
  // Il fiume e il lago
 {m:'Geografia', cl:'2', a:'Il fiume e il lago', d:'facile', q:'Il fiume è:', ops:['acqua che scorre','acqua ferma','acqua salata','acqua ghiacciata'], r:0},
 {m:'Geografia', cl:'2', a:'Il fiume e il lago', d:'facile', q:'Il lago è:', ops:['un deserto','acqua ferma circondata da terra','acqua che scorre','il mare'], r:1},
 {m:'Geografia', cl:'2', a:'Il fiume e il lago', d:'facile', q:'Il fiume nasce:', ops:['dal lago sempre','dal deserto','dalla sorgente','dal mare'], r:2},
 {m:'Geografia', cl:'2', a:'Il fiume e il lago', d:'facile', q:'Il fiume arriva al:', ops:['deserto','cielo','vulcano','mare o a un altro fiume'], r:3},
 {m:'Geografia', cl:'2', a:'Il fiume e il lago', d:'facile', q:'Il fiume più lungo d’Italia è:', ops:['l’Arno','il Nilo','il Po','il Tevere'], r:2},
 {m:'Geografia', cl:'2', a:'Il fiume e il lago', d:'facile', q:'L’acqua del lago di solito è:', ops:['zuccherata','dolce','salata','gassata'], r:1},
  // ---- MEDIO ----
  // I paesaggi
 {m:'Geografia', cl:'2', a:'I paesaggi', d:'medio', q:'Il paesaggio marino è vicino:', ops:['al deserto','al ghiaccio','al mare','alla montagna'], r:2},
  // Il mare
 {m:'Geografia', cl:'2', a:'Il mare', d:'medio', q:'Il porto serve per:', ops:['volare','nuotare','dormire','far attraccare le navi'], r:3},
  // La montagna
 {m:'Geografia', cl:'2', a:'La montagna', d:'medio', q:'La montagna è più alta:', ops:['della collina','del mare','della pianura sempre','di tutto'], r:0},
  // La pianura
 {m:'Geografia', cl:'2', a:'La pianura', d:'medio', q:'In pianura scorrono:', ops:['i ghiacciai','i vulcani','le dune','i fiumi'], r:3},
 {m:'Geografia', cl:'2', a:'La pianura', d:'medio', q:'Le città di pianura hanno:', ops:['strade dritte','strade ripide','funivie','ghiacciai'], r:0},
  // Il fiume e il lago
 {m:'Geografia', cl:'2', a:'Il fiume e il lago', d:'medio', q:'Il punto dove il fiume nasce si chiama:', ops:['sorgente','foce','riva','argine'], r:0},
 {m:'Geografia', cl:'2', a:'Il fiume e il lago', d:'medio', q:'Il punto dove il fiume entra nel mare si chiama:', ops:['argine','foce','sorgente','riva'], r:1},
  // ---- DIFFICILE ----
  // I paesaggi
 {m:'Geografia', cl:'2', a:'I paesaggi', d:'difficile', q:'Un paesaggio naturale è fatto da:', ops:['solo case','solo strade','solo fabbriche','montagne, fiumi e boschi'], r:3},
 {m:'Geografia', cl:'2', a:'I paesaggi', d:'difficile', q:'Il paesaggio cambia anche per opera:', ops:['del vento soltanto','dell’uomo','delle stelle','della luna'], r:1},
  // Il mare
 {m:'Geografia', cl:'2', a:'Il mare', d:'difficile', q:'Il faro serve per:', ops:['dormire','giocare','guidare le navi','cucinare'], r:2},
 {m:'Geografia', cl:'2', a:'Il mare', d:'difficile', q:'I fiumi portano al mare:', ops:['acqua salata','sabbia','ferro','acqua dolce'], r:3},
  // La montagna
 {m:'Geografia', cl:'2', a:'La montagna', d:'difficile', q:'Il ghiacciaio si trova:', ops:['sulle montagne molto alte','al mare','nel deserto','in pianura'], r:0},
 {m:'Geografia', cl:'2', a:'La montagna', d:'difficile', q:'In montagna si pratica:', ops:['il surf','lo sci','il nuoto','la vela'], r:1},
  // La pianura
 {m:'Geografia', cl:'2', a:'La pianura', d:'difficile', q:'La pianura è attraversata da:', ops:['piste da sci','ghiacciai','strade e autostrade','funivie'], r:2},
 {m:'Geografia', cl:'2', a:'La pianura', d:'difficile', q:'In pianura ci sono soprattutto:', ops:['vette innevate','fiordi','deserti','campi e città'], r:3},
  // Il fiume e il lago
 {m:'Geografia', cl:'2', a:'Il fiume e il lago', d:'difficile', q:'Le sponde del fiume si chiamano:', ops:['sorgenti','foci','onde','rive o argini'], r:3},
 {m:'Geografia', cl:'2', a:'Il fiume e il lago', d:'difficile', q:'Un affluente è un fiume che:', ops:['si getta in un altro fiume','nasce dal mare','è sempre secco','non esiste'], r:0},
 ],

 /* ==================== CLASSE 2 - Matematica ==================== */
 '2M': [
  // ---- FACILE ----
  // Moltiplicazione
 {m:'Matematica', cl:'2', a:'Moltiplicazione', d:'facile', q:'Quanto fa 2 × 3?', ops:['5','6','8','9'], r:1},
 {m:'Matematica', cl:'2', a:'Moltiplicazione', d:'facile', q:'Quanto fa 5 × 2?', ops:['25','10','7','12'], r:1},
 {m:'Matematica', cl:'2', a:'Moltiplicazione', d:'facile', q:'Quanto fa 3 × 3?', ops:['12','7','6','9'], r:3},
 {m:'Matematica', cl:'2', a:'Moltiplicazione', d:'facile', q:'Quanto fa 5 × 0?', ops:['1','0','50','5'], r:1},
  // Divisione
 {m:'Matematica', cl:'2', a:'Divisione', d:'facile', q:'Quanto fa 10 ÷ 2?', ops:['8','5','20','4'], r:1},
 {m:'Matematica', cl:'2', a:'Divisione', d:'facile', q:'Quanto fa 6 ÷ 3?', ops:['18','3','2','9'], r:2},
 {m:'Matematica', cl:'2', a:'Divisione', d:'facile', q:'Quanto fa 8 ÷ 2?', ops:['4','16','6','10'], r:0},
 {m:'Matematica', cl:'2', a:'Divisione', d:'facile', q:'Quanto fa 4 ÷ 4?', ops:['0','4','8','1'], r:3},
  // Figure piane e solide
 {m:'Matematica', cl:'2', a:'Figure piane e solide', d:'facile', q:'Quanti lati ha il quadrato?', ops:['3','4','5','6'], r:1},
 {m:'Matematica', cl:'2', a:'Figure piane e solide', d:'facile', q:'Quale solido ha 6 facce quadrate?', ops:['il cilindro','la sfera','il cono','il cubo'], r:3},
 {m:'Matematica', cl:'2', a:'Figure piane e solide', d:'facile', q:'Il triangolo equilatero ha lati:', ops:['due uguali e uno diverso','nessun lato','tutti uguali','tutti diversi'], r:2},
  // Valore posizionale
 {m:'Matematica', cl:'2', a:'Valore posizionale', d:'facile', q:'Nel numero 34, la cifra 3 vale:', ops:['300','3 centesimi','3','30'], r:3},
 {m:'Matematica', cl:'2', a:'Valore posizionale', d:'facile', q:'Il numero 45 è composto da:', ops:['40 + 5','45 + 0','4 × 5','4 e 5 somme'], r:0},
  // Misure e problemi
 {m:'Matematica', cl:'2', a:'Misure e problemi', d:'facile', q:'1 metro equivale a quanti centimetri?', ops:['1000','2','10','100'], r:3},
 {m:'Matematica', cl:'2', a:'Misure e problemi', d:'facile', q:'1 chilogrammo equivale a quanti grammi?', ops:['10','1000','500','100'], r:1},
  // ---- MEDIO ----
  // Moltiplicazione
 {m:'Matematica', cl:'2', a:'Moltiplicazione', d:'medio', q:'Quanto fa 4 × 4?', ops:['8','12','16','18'], r:2},
 {m:'Matematica', cl:'2', a:'Moltiplicazione', d:'medio', q:'Quanto fa 3 × 6?', ops:['21','18','15','12'], r:1},
 {m:'Matematica', cl:'2', a:'Moltiplicazione', d:'medio', q:'Come si chiama il risultato della moltiplicazione?', ops:['differenza','quoziente','somma','prodotto'], r:3},
 {m:'Matematica', cl:'2', a:'Moltiplicazione', d:'medio', q:'4 × 5 è uguale a:', ops:['4 + 5','4 − 5','10 × 4','5 × 4'], r:3},
  // Divisione
 {m:'Matematica', cl:'2', a:'Divisione', d:'medio', q:'Quanto fa 12 ÷ 3?', ops:['3','4','6','9'], r:1},
 {m:'Matematica', cl:'2', a:'Divisione', d:'medio', q:'Quanto fa 15 ÷ 5?', ops:['4','3','10','5'], r:1},
 {m:'Matematica', cl:'2', a:'Divisione', d:'medio', q:'Come si chiamano i numeri della divisione: 10 ÷ 2?', ops:['minuendo e sottraendo','fattori','addendi e somma','dividendo e divisore'], r:3},
 {m:'Matematica', cl:'2', a:'Divisione', d:'medio', q:'Quanto fa 5 ÷ 1?', ops:['5','0','10','1'], r:0},
  // Figure piane e solide
 {m:'Matematica', cl:'2', a:'Figure piane e solide', d:'medio', q:'Quanti lati ha un pentagono?', ops:['5','6','7','4'], r:0},
 {m:'Matematica', cl:'2', a:'Figure piane e solide', d:'medio', q:'Il perimetro è:', ops:['la somma dei lati','l’area interna','il volume','il peso'], r:0},
 {m:'Matematica', cl:'2', a:'Figure piane e solide', d:'medio', q:'Il perimetro di un quadrato di lato 3 cm è:', ops:['3 cm','6 cm','9 cm','12 cm'], r:3},
 {m:'Matematica', cl:'2', a:'Figure piane e solide', d:'medio', q:'Quale triangolo ha un angolo RETTO (di 90 gradi)?', ops:['scaleno','acutangolo','equilatero','rettangolo'], r:3},
 {m:'Matematica', cl:'2', a:'Figure piane e solide', d:'medio', q:'Quale figura è un SOLIDO?', ops:['quadrato','triangolo','cilindro','cerchio'], r:2},
  // Valore posizionale
 {m:'Matematica', cl:'2', a:'Valore posizionale', d:'medio', q:'Nel numero 72, la cifra delle DECINE è:', ops:['7','2','72','27'], r:0},
 {m:'Matematica', cl:'2', a:'Valore posizionale', d:'medio', q:'Quale numero è maggiore: 58 o 85?', ops:['non si può dire','58','85','sono uguali'], r:2},
 {m:'Matematica', cl:'2', a:'Valore posizionale', d:'medio', q:'100 + 40 + 7 fa:', ops:['1470','1147','147','174'], r:2},
 {m:'Matematica', cl:'2', a:'Valore posizionale', d:'medio', q:'Quale numero viene dopo il 99?', ops:['110','101','90','100'], r:3},
 {m:'Matematica', cl:'2', a:'Valore posizionale', d:'medio', q:'Quale numero è in ordine CRESCENTE corretto?', ops:['52, 30, 25','25, 52, 30','30, 25, 52','25, 30, 52'], r:3},
  // Misure e problemi
 {m:'Matematica', cl:'2', a:'Misure e problemi', d:'medio', q:'1 litro equivale a quanti millilitri?', ops:['100','1000','10','500'], r:1},
 {m:'Matematica', cl:'2', a:'Misure e problemi', d:'medio', q:'Ci sono 4 pizze per 2 bambini. Quante pizze toccano a ogni bambino?', ops:['4','1','2','3'], r:2},
 {m:'Matematica', cl:'2', a:'Misure e problemi', d:'medio', q:'Ogni scatola contiene 3 matite. Quante matite ci sono in 5 scatole?', ops:['15','18','8','12'], r:0},
 {m:'Matematica', cl:'2', a:'Misure e problemi', d:'medio', q:'Ho 20 caramelle e le divido tra 4 amici, caramelle uguali per tutti. Quante ne toccano a ciascuno?', ops:['4','5','6','8'], r:1},
 {m:'Matematica', cl:'2', a:'Misure e problemi', d:'medio', q:'Un quaderno costa 3 euro. Quanto costano 4 quaderni uguali?', ops:['9 euro','7 euro','12 euro','16 euro'], r:2},
  // ---- DIFFICILE ----
  // Moltiplicazione
 {m:'Matematica', cl:'2', a:'Moltiplicazione', d:'difficile', q:'Quanto fa 6 × 6?', ops:['36','30','42','32'], r:0},
 {m:'Matematica', cl:'2', a:'Moltiplicazione', d:'difficile', q:'Quanto fa 8 × 3?', ops:['28','21','27','24'], r:3},
 {m:'Matematica', cl:'2', a:'Moltiplicazione', d:'difficile', q:'5 × 3 = 5 + 5 + 5. Allora 3 × 4 è uguale a:', ops:['4 × 4','3 + 3','4 + 4 + 4','4 + 4'], r:2},
 {m:'Matematica', cl:'2', a:'Moltiplicazione', d:'difficile', q:'Quanto fa 7 × 3?', ops:['24','18','27','21'], r:3},
  // Divisione
 {m:'Matematica', cl:'2', a:'Divisione', d:'difficile', q:'18 ÷ 3 fa:', ops:['5','6','7','9'], r:1},
 {m:'Matematica', cl:'2', a:'Divisione', d:'difficile', q:'La divisione è l’operazione inversa della:', ops:['stima','somma','sottrazione','moltiplicazione'], r:3},
 {m:'Matematica', cl:'2', a:'Divisione', d:'difficile', q:'16 ÷ 4 fa:', ops:['4','12','3','8'], r:0},
 {m:'Matematica', cl:'2', a:'Divisione', d:'difficile', q:'20 ÷ 5 fa:', ops:['4','25','10','15'], r:0},
  // Figure piane e solide
 {m:'Matematica', cl:'2', a:'Figure piane e solide', d:'difficile', q:'Il cono assomiglia a:', ops:['una scatola','un gelato a cono','un tubo','una palla'], r:1},
 {m:'Matematica', cl:'2', a:'Figure piane e solide', d:'difficile', q:'Il perimetro di un rettangolo con lati 6 cm e 2 cm è:', ops:['14 cm','8 cm','12 cm','16 cm'], r:3},
  // Valore posizionale
 {m:'Matematica', cl:'2', a:'Valore posizionale', d:'difficile', q:'Nel numero 105, la cifra 0 vale:', ops:['0','10','100','nulla, è decorativo'], r:0},
  // Misure e problemi
 {m:'Matematica', cl:'2', a:'Misure e problemi', d:'difficile', q:'Un filo lungo 80 cm è lungo:', ops:['meno di 1 metro','1 metro','80 metri','8 metri'], r:0},
 ],

 /* ==================== CLASSE 2 - Musica ==================== */
 '2MU': [
  // ---- FACILE ----
  // Il ritmo
 {m:'Musica', cl:'2', a:'Il ritmo', d:'facile', q:'Battere le mani serve per:', ops:['mangiare','segnare il ritmo','dormire','correre'], r:1},
 {m:'Musica', cl:'2', a:'Il ritmo', d:'facile', q:'Un ritmo veloce è:', ops:['lento','fermo','silenzioso','rapido'], r:3},
 {m:'Musica', cl:'2', a:'Il ritmo', d:'facile', q:'Un ritmo lento è:', ops:['calmo','rapido','fermo','rumoroso'], r:0},
 {m:'Musica', cl:'2', a:'Il ritmo', d:'facile', q:'Una pausa è:', ops:['un suono forte','un colore','una forma','un silenzio'], r:3},
 {m:'Musica', cl:'2', a:'Il ritmo', d:'facile', q:'Il ritmo lento e quello veloce sono:', ops:['uguali','invisibili','sonori uguali','diversi'], r:3},
  // Gli strumenti
 {m:'Musica', cl:'2', a:'Gli strumenti', d:'facile', q:'Il tamburo si suona:', ops:['battendolo','soffiandoci','pizzicandolo','scuotendolo'], r:0},
 {m:'Musica', cl:'2', a:'Gli strumenti', d:'facile', q:'La chitarra si suona:', ops:['scuotendo','pizzicando le corde','soffiando','battendo'], r:1},
 {m:'Musica', cl:'2', a:'Gli strumenti', d:'facile', q:'Il flauto si suona:', ops:['pizzicando','scuotendo','soffiando','battendo'], r:2},
 {m:'Musica', cl:'2', a:'Gli strumenti', d:'facile', q:'Il pianoforte ha:', ops:['le corde pizzicate','le pelli','le campane','i tasti'], r:3},
  // Le canzoni
 {m:'Musica', cl:'2', a:'Le canzoni', d:'facile', q:'Una canzone ha:', ops:['parole e musica','solo parole','solo numeri','solo colori'], r:0},
 {m:'Musica', cl:'2', a:'Le canzoni', d:'facile', q:'Il ritornello si ripete:', ops:['solo di notte','più volte','una volta','mai'], r:1},
 {m:'Musica', cl:'2', a:'Le canzoni', d:'facile', q:'Le canzoni per bambini sono:', ops:['complicate','lunghissime','allegre','tristi'], r:2},
 {m:'Musica', cl:'2', a:'Le canzoni', d:'facile', q:'Per cantare una canzone serve:', ops:['dormire','correre','mangiare','conoscere le parole'], r:3},
 {m:'Musica', cl:'2', a:'Le canzoni', d:'facile', q:'Il testo di una canzone è:', ops:['le parole','la musica','il ritmo','il volume'], r:0},
 {m:'Musica', cl:'2', a:'Le canzoni', d:'facile', q:'La melodia è:', ops:['il volume','la successione delle note','le parole','il ritmo'], r:1},
 {m:'Musica', cl:'2', a:'Le canzoni', d:'facile', q:'Cantare in coro significa:', ops:['urlare','dormire','cantare insieme','cantare da soli'], r:2},
  // Le note
 {m:'Musica', cl:'2', a:'Le note', d:'facile', q:'Le note musicali sono:', ops:['sette','due','tre','cento'], r:0},
 {m:'Musica', cl:'2', a:'Le note', d:'facile', q:'La prima nota è:', ops:['FA','DO','RE','MI'], r:1},
 {m:'Musica', cl:'2', a:'Le note', d:'facile', q:'Dopo il DO viene:', ops:['il FA','il SOL','il RE','il MI'], r:2},
 {m:'Musica', cl:'2', a:'Le note', d:'facile', q:'Dopo il MI viene:', ops:['il SOL','il LA','il SI','il FA'], r:3},
 {m:'Musica', cl:'2', a:'Le note', d:'facile', q:'Le note in ordine sono:', ops:['DO RE MI FA SOL LA SI','DO MI RE FA SOL SI LA','SI LA SOL FA MI RE DO','MI DO RE FA LA SOL SI'], r:0},
 {m:'Musica', cl:'2', a:'Le note', d:'facile', q:'L’ultima nota è:', ops:['il SOL','il SI','il DO','il LA'], r:1},
  // Forte e piano
 {m:'Musica', cl:'2', a:'Forte e piano', d:'facile', q:'Il forte nella musica si scrive:', ops:['m','l','f','p'], r:2},
 {m:'Musica', cl:'2', a:'Forte e piano', d:'facile', q:'Il piano nella musica si scrive:', ops:['f','m','l','p'], r:3},
 {m:'Musica', cl:'2', a:'Forte e piano', d:'facile', q:'Forte significa:', ops:['con volume alto','con volume basso','con silenzio','senza suono'], r:0},
 {m:'Musica', cl:'2', a:'Forte e piano', d:'facile', q:'Piano significa:', ops:['senza suono','con volume basso','con volume alto','con rumore'], r:1},
 {m:'Musica', cl:'2', a:'Forte e piano', d:'facile', q:'Il crescendo significa:', ops:['fermarsi','dormire','aumentare il volume','diminuire il volume'], r:2},
 {m:'Musica', cl:'2', a:'Forte e piano', d:'facile', q:'Il diminuendo significa:', ops:['aumentare il volume','fermarsi','correre','diminuire il volume'], r:3},
  // ---- MEDIO ----
  // Gli strumenti
 {m:'Musica', cl:'2', a:'Gli strumenti', d:'medio', q:'Le maracas si suonano:', ops:['battendole','pizzicandole','scuotendole','soffiandoci'], r:2},
 {m:'Musica', cl:'2', a:'Gli strumenti', d:'medio', q:'Il violino si suona con:', ops:['l’archetto','il martello','le dita che soffiano','i piedi'], r:0},
 {m:'Musica', cl:'2', a:'Gli strumenti', d:'medio', q:'La tromba si suona:', ops:['scuotendo','soffiando','battendo','pizzicando'], r:1},
  // Le note
 {m:'Musica', cl:'2', a:'Le note', d:'medio', q:'Dopo il SOL viene:', ops:['il DO','il FA','il LA','il SI'], r:2},
  // Il ritmo
 {m:'Musica', cl:'2', a:'Il ritmo', d:'medio', q:'Il ritmo si può battere con:', ops:['il naso','i capelli','mani, piedi o strumenti','gli occhi'], r:2},
 {m:'Musica', cl:'2', a:'Il ritmo', d:'medio', q:'Il metronomo serve per:', ops:['dare il tempo','colorare','dormire','correre'], r:0},
  // Forte e piano
 {m:'Musica', cl:'2', a:'Forte e piano', d:'medio', q:'Il volume si può cambiare:', ops:['gradualmente','mai','solo all’inizio','solo alla fine'], r:0},
  // ---- DIFFICILE ----
  // Gli strumenti
 {m:'Musica', cl:'2', a:'Gli strumenti', d:'difficile', q:'Il tamburello ha:', ops:['corde','tasti','aria','sonagli'], r:3},
 {m:'Musica', cl:'2', a:'Gli strumenti', d:'difficile', q:'La batteria è un insieme di:', ops:['tamburi e piatti','corde','tasti','fiati'], r:0},
 {m:'Musica', cl:'2', a:'Gli strumenti', d:'difficile', q:'Gli strumenti si dividono in famiglie:', ops:['solo a percussione','a corde, a fiato e a percussione','solo a corde','solo a fiato'], r:1},
  // Le note
 {m:'Musica', cl:'2', a:'Le note', d:'difficile', q:'Le note si scrivono sul:', ops:['quaderno a righe','foglio bianco','muro','pentagramma'], r:3},
 {m:'Musica', cl:'2', a:'Le note', d:'difficile', q:'Le note servono per:', ops:['scrivere la musica','disegnare','cucinare','correre'], r:0},
 {m:'Musica', cl:'2', a:'Le note', d:'difficile', q:'Le note si leggono:', ops:['mai','con la musica','con gli occhi chiusi','solo di notte'], r:1},
  // Il ritmo
 {m:'Musica', cl:'2', a:'Il ritmo', d:'difficile', q:'Ogni canzone ha:', ops:['solo colori','solo pause','un ritmo','solo parole'], r:2},
  // Forte e piano
 {m:'Musica', cl:'2', a:'Forte e piano', d:'difficile', q:'Mezzoforte si scrive:', ops:['pp','mf','mp','ff'], r:1},
 {m:'Musica', cl:'2', a:'Forte e piano', d:'difficile', q:'Fortissimo si scrive:', ops:['mf','p','ff','f'], r:2},
 {m:'Musica', cl:'2', a:'Forte e piano', d:'difficile', q:'Pianissimo si scrive:', ops:['p','mp','f','pp'], r:3},
  // Le canzoni
 {m:'Musica', cl:'2', a:'Le canzoni', d:'difficile', q:'Le canzoni popolari si tramandano:', ops:['solo sui libri','solo su internet','mai','di generazione in generazione'], r:3},
 {m:'Musica', cl:'2', a:'Le canzoni', d:'difficile', q:'Una ninna nanna serve per:', ops:['far addormentare','svegliare','correre','giocare'], r:0},
 {m:'Musica', cl:'2', a:'Le canzoni', d:'difficile', q:'L’inno nazionale è una canzone:', ops:['senza parole','di un paese','solo per bambini','solo per adulti'], r:1},
 ],

 /* ==================== CLASSE 2 - Religione Cattolica ==================== */
 '2R': [
  // ---- FACILE ----
  // Il Natale
 {m:'Religione Cattolica', cl:'2', a:'Il Natale', d:'facile', q:'Gesù nacque a:', ops:['Gerusalemme','Betlemme','Roma','Nazaret'], r:1},
 {m:'Religione Cattolica', cl:'2', a:'Il Natale', d:'facile', q:'Il Natale festeggia:', ops:['la nascita di Gesù','la Pasqua','il compleanno','la fine della scuola'], r:0},
 {m:'Religione Cattolica', cl:'2', a:'Il Natale', d:'facile', q:'A Natale si prepara:', ops:['la tenda','il forno','il presepio','la piscina'], r:2},
 {m:'Religione Cattolica', cl:'2', a:'Il Natale', d:'facile', q:'Il Natale è una festa di:', ops:['rabbia','paura','noia','pace e amore'], r:3},
  // La Pasqua
 {m:'Religione Cattolica', cl:'2', a:'La Pasqua', d:'facile', q:'La Pasqua festeggia:', ops:['il Natale','l’estate','la risurrezione di Gesù','la nascita di Gesù'], r:2},
 {m:'Religione Cattolica', cl:'2', a:'La Pasqua', d:'facile', q:'Gesù è risorto:', ops:['dopo tre giorni','dopo un mese','mai','dopo un anno'], r:0},
 {m:'Religione Cattolica', cl:'2', a:'La Pasqua', d:'facile', q:'La Pasqua è in:', ops:['inverno','autunno','estate','primavera'], r:3},
 {m:'Religione Cattolica', cl:'2', a:'La Pasqua', d:'facile', q:'A Pasqua si scambiano:', ops:['regali di Natale','uova di cioccolato','panettoni','pandori'], r:1},
 {m:'Religione Cattolica', cl:'2', a:'La Pasqua', d:'facile', q:'Prima della Pasqua c’è:', ops:['il Carnevale','la fine della scuola','la Settimana Santa','la festa di Natale'], r:2},
  // La Bibbia
 {m:'Religione Cattolica', cl:'2', a:'La Bibbia', d:'facile', q:'La Bibbia è:', ops:['il libro sacro dei cristiani','un libro di favole','un diario','un quaderno'], r:0},
 {m:'Religione Cattolica', cl:'2', a:'La Bibbia', d:'facile', q:'La Bibbia parla di:', ops:['solo di giochi','Dio e del suo popolo','solo di sport','solo di cucina'], r:1},
 {m:'Religione Cattolica', cl:'2', a:'La Bibbia', d:'facile', q:'La Bibbia si divide in:', ops:['libri e quaderni','capitoli e versi','Antico e Nuovo Testamento','prima e seconda parte'], r:2},
 {m:'Religione Cattolica', cl:'2', a:'La Bibbia', d:'facile', q:'Il primo libro della Bibbia è:', ops:['i Salmi','i Vangeli','l’Esodo','la Genesi'], r:3},
 {m:'Religione Cattolica', cl:'2', a:'La Bibbia', d:'facile', q:'I Salmi sono:', ops:['favole','numeri','preghiere e canti','ricette'], r:2},
  // Gesù
 {m:'Religione Cattolica', cl:'2', a:'Gesù', d:'facile', q:'Gesù è:', ops:['un soldato','un mercante','il Figlio di Dio','un re terreno'], r:2},
 {m:'Religione Cattolica', cl:'2', a:'Gesù', d:'facile', q:'Gesù parlava alla gente con:', ops:['indovinelli','solo silenzio','solo numeri','parabole'], r:3},
 {m:'Religione Cattolica', cl:'2', a:'Gesù', d:'facile', q:'Gesù aiutava:', ops:['i poveri e i malati','solo i ricchi','solo i re','nessuno'], r:0},
 {m:'Religione Cattolica', cl:'2', a:'Gesù', d:'facile', q:'Gli amici di Gesù erano:', ops:['i re','gli apostoli','i soldati','i mercanti'], r:1},
  // La Chiesa
 {m:'Religione Cattolica', cl:'2', a:'La Chiesa', d:'facile', q:'La chiesa è:', ops:['la casa di preghiera','una scuola','un negozio','un cinema'], r:0},
 {m:'Religione Cattolica', cl:'2', a:'La Chiesa', d:'facile', q:'In chiesa si va per:', ops:['mangiare','pregare','giocare','dormire'], r:1},
 {m:'Religione Cattolica', cl:'2', a:'La Chiesa', d:'facile', q:'La Chiesa è formata da:', ops:['solo i bambini','solo gli adulti','tutti i cristiani','solo i preti'], r:2},
 {m:'Religione Cattolica', cl:'2', a:'La Chiesa', d:'facile', q:'Il prete guida:', ops:['la scuola','il mercato','lo stadio','la comunità'], r:3},
 {m:'Religione Cattolica', cl:'2', a:'La Chiesa', d:'facile', q:'Il capo della Chiesa cattolica è:', ops:['il preside','il Papa','il re','il sindaco'], r:1},
 {m:'Religione Cattolica', cl:'2', a:'La Chiesa', d:'facile', q:'Il battesimo è:', ops:['un gioco','una festa','un regalo','il primo sacramento'], r:3},
  // ---- MEDIO ----
  // La Bibbia
 {m:'Religione Cattolica', cl:'2', a:'La Bibbia', d:'medio', q:'I Vangeli raccontano:', ops:['la vita di Gesù','la vita dei re','le favole','le ricette'], r:0},
 {m:'Religione Cattolica', cl:'2', a:'La Bibbia', d:'medio', q:'Quanti sono i Vangeli?', ops:['cento','quattro','due','sei'], r:1},
  // Gesù
 {m:'Religione Cattolica', cl:'2', a:'Gesù', d:'medio', q:'Quanti erano gli apostoli?', ops:['cento','cinque','dodici','due'], r:2},
 {m:'Religione Cattolica', cl:'2', a:'Gesù', d:'medio', q:'Gesù faceva:', ops:['solo magie','solo scherzi','nulla','miracoli'], r:3},
 {m:'Religione Cattolica', cl:'2', a:'Gesù', d:'medio', q:'Il messaggio di Gesù era:', ops:['di amore e pace','di odio','di guerra','di paura'], r:0},
  // Il Natale
 {m:'Religione Cattolica', cl:'2', a:'Il Natale', d:'medio', q:'I pastori seppero della nascita di Gesù:', ops:['dagli angeli','dalla televisione','dal giornale','dai soldati'], r:0},
 {m:'Religione Cattolica', cl:'2', a:'Il Natale', d:'medio', q:'I Magi seguirono:', ops:['le nuvole','la stella','la luna','il sole'], r:1},
 {m:'Religione Cattolica', cl:'2', a:'Il Natale', d:'medio', q:'A Natale si sta:', ops:['lontani','mai','insieme alla famiglia','da soli'], r:2},
  // La Pasqua
 {m:'Religione Cattolica', cl:'2', a:'La Pasqua', d:'medio', q:'La colomba è simbolo di:', ops:['guerra','paura','noia','pace'], r:3},
 {m:'Religione Cattolica', cl:'2', a:'La Pasqua', d:'medio', q:'La Pasqua ci dà:', ops:['speranza','paura','tristezza','noia'], r:0},
  // La Chiesa
 {m:'Religione Cattolica', cl:'2', a:'La Chiesa', d:'medio', q:'La domenica i cristiani si riuniscono:', ops:['per la Messa','per giocare','per dormire','per mangiare'], r:0},
 {m:'Religione Cattolica', cl:'2', a:'La Chiesa', d:'medio', q:'La Chiesa aiuta:', ops:['solo i sani','nessuno','chi ha bisogno','solo i ricchi'], r:2},
  // ---- DIFFICILE ----
  // Il Natale
 {m:'Religione Cattolica', cl:'2', a:'Il Natale', d:'difficile', q:'Il Natale ci ricorda:', ops:['i regali','le luci','i dolci','l’amore di Dio'], r:3},
 {m:'Religione Cattolica', cl:'2', a:'Il Natale', d:'difficile', q:'Gesù è chiamato anche:', ops:['Emmanuele','Re','Capitano','Maestro'], r:0},
 {m:'Religione Cattolica', cl:'2', a:'Il Natale', d:'difficile', q:'La grotta di Betlemme era:', ops:['un negozio','una stalla','un palazzo','una scuola'], r:1},
  // La Bibbia
 {m:'Religione Cattolica', cl:'2', a:'La Bibbia', d:'difficile', q:'La Genesi racconta:', ops:['la fine del mondo','una ricetta','una gara','la creazione'], r:3},
 {m:'Religione Cattolica', cl:'2', a:'La Bibbia', d:'difficile', q:'Mosè ricevette:', ops:['i Dieci Comandamenti','una corona','un tesoro','un libro di cucina'], r:0},
 {m:'Religione Cattolica', cl:'2', a:'La Bibbia', d:'difficile', q:'La Bibbia ci insegna a:', ops:['sprecare','amare Dio e il prossimo','odiare','litigare'], r:1},
  // Gesù
 {m:'Religione Cattolica', cl:'2', a:'Gesù', d:'difficile', q:'Gesù ci ha insegnato:', ops:['a mentire','ad amarci gli uni gli altri','a litigare','a rubare'], r:1},
 {m:'Religione Cattolica', cl:'2', a:'Gesù', d:'difficile', q:'Il primo apostolo fu:', ops:['Erode','Cesare','Pietro','Giuda'], r:2},
 {m:'Religione Cattolica', cl:'2', a:'Gesù', d:'difficile', q:'Gesù è morto e risorto per:', ops:['solo se stesso','solo i ricchi','nessuno','salvare tutti'], r:3},
  // La Pasqua
 {m:'Religione Cattolica', cl:'2', a:'La Pasqua', d:'difficile', q:'L’ultima cena di Gesù fu:', ops:['a Pasqua','il Giovedì Santo','il giorno di Natale','il primo dell’anno'], r:1},
 {m:'Religione Cattolica', cl:'2', a:'La Pasqua', d:'difficile', q:'La risurrezione di Gesù mostra che:', ops:['tutto finisce','nulla cambia','la vita vince','la morte vince'], r:2},
 {m:'Religione Cattolica', cl:'2', a:'La Pasqua', d:'difficile', q:'La domenica di Pasqua i cristiani vanno:', ops:['al mare','al cinema','a scuola','in chiesa'], r:3},
  // La Chiesa
 {m:'Religione Cattolica', cl:'2', a:'La Chiesa', d:'difficile', q:'La Chiesa insegna:', ops:['l’amore di Dio','l’odio','la paura','la bugia'], r:0},
 {m:'Religione Cattolica', cl:'2', a:'La Chiesa', d:'difficile', q:'I cristiani formano una grande:', ops:['fabbrica','famiglia','squadra','scuola'], r:1},
 ],

 /* ==================== CLASSE 2 - Scienze ==================== */
 '2S': [
  // ---- FACILE ----
  // Le piante
 {m:'Scienze', cl:'2', a:'Le piante', d:'facile', q:'Le radici tengono la pianta:', ops:['nell’aria','ferma nel terreno','in volo','sulla luna'], r:1},
 {m:'Scienze', cl:'2', a:'Le piante', d:'facile', q:'Il fiore produce:', ops:['il tronco','le foglie','i semi','le radici'], r:2},
 {m:'Scienze', cl:'2', a:'Le piante', d:'facile', q:'Le piante bevono:', ops:['benzina','sabbia','colla','acqua'], r:3},
 {m:'Scienze', cl:'2', a:'Le piante', d:'facile', q:'La carota è:', ops:['un seme','una radice','un frutto','un fiore'], r:1},
  // Gli animali
 {m:'Scienze', cl:'2', a:'Gli animali', d:'facile', q:'Gli animali con la colonna vertebrale si chiamano:', ops:['mammiferi','uccelli','vertebrati','invertebrati'], r:2},
 {m:'Scienze', cl:'2', a:'Gli animali', d:'facile', q:'Gli insetti hanno quante zampe?', ops:['due','quattro','otto','sei'], r:3},
 {m:'Scienze', cl:'2', a:'Gli animali', d:'facile', q:'Il pesce respira con:', ops:['le branchie','i polmoni','le foglie','le ali'], r:0},
 {m:'Scienze', cl:'2', a:'Gli animali', d:'facile', q:'L’uccello ha il corpo coperto di:', ops:['conchiglie','piume','squame','peli'], r:1},
  // L’acqua
 {m:'Scienze', cl:'2', a:'L’acqua', d:'facile', q:'L’acqua è:', ops:['un liquido','un solido','un gas','una pietra'], r:0},
 {m:'Scienze', cl:'2', a:'L’acqua', d:'facile', q:'Il ghiaccio è acqua:', ops:['scomparsa','solida','liquida','gassosa'], r:1},
 {m:'Scienze', cl:'2', a:'L’acqua', d:'facile', q:'Il vapore è acqua:', ops:['liquida','colorata','gassosa','solida'], r:2},
 {m:'Scienze', cl:'2', a:'L’acqua', d:'facile', q:'L’acqua pura è:', ops:['verde','rossa','blu scuro','incolore e inodore'], r:3},
 {m:'Scienze', cl:'2', a:'L’acqua', d:'facile', q:'L’acqua dei fiumi e dei laghi è:', ops:['zuccherata','dolce','salata','gassata'], r:1},
  // L’aria
 {m:'Scienze', cl:'2', a:'L’aria', d:'facile', q:'L’aria è:', ops:['un liquido','una pietra','un gas','un solido'], r:2},
 {m:'Scienze', cl:'2', a:'L’aria', d:'facile', q:'L’aria occupa:', ops:['nessuno spazio','solo il vuoto','solo l’acqua','spazio'], r:3},
 {m:'Scienze', cl:'2', a:'L’aria', d:'facile', q:'Il vento è:', ops:['aria che si muove','acqua che cade','fuoco','ghiaccio'], r:0},
  // I materiali
 {m:'Scienze', cl:'2', a:'I materiali', d:'facile', q:'Il vetro si rompe:', ops:['facilmente','mai','solo al buio','solo d’estate'], r:0},
 {m:'Scienze', cl:'2', a:'I materiali', d:'facile', q:'La carta deriva:', ops:['dal ghiaccio','dal legno','dalla sabbia','dal ferro'], r:1},
 {m:'Scienze', cl:'2', a:'I materiali', d:'facile', q:'Il materiale più adatto per un ombrello è:', ops:['di carta','di vetro','di zucchero','impermeabile'], r:3},
  // ---- MEDIO ----
  // Le piante
 {m:'Scienze', cl:'2', a:'Le piante', d:'medio', q:'La parte verde della pianta che fa la fotosintesi è:', ops:['la foglia','la radice','il frutto','il seme'], r:0},
 {m:'Scienze', cl:'2', a:'Le piante', d:'medio', q:'Il ciclo di vita di una pianta inizia da:', ops:['un seme','una foglia caduta','un sasso','un filo'], r:0},
 {m:'Scienze', cl:'2', a:'Le piante', d:'medio', q:'Le piante sempreverdi:', ops:['sono di plastica','non perdono tutte le foglie in inverno','perdono tutte le foglie','non esistono'], r:1},
 {m:'Scienze', cl:'2', a:'Le piante', d:'medio', q:'Per crescere bene, le piante hanno bisogno di:', ops:['solo ghiaccio','solo rumore','luce, acqua e terra','solo buio'], r:2},
  // Gli animali
 {m:'Scienze', cl:'2', a:'Gli animali', d:'medio', q:'Il serpente è un:', ops:['uccello','pesce','rettile','mammifero'], r:2},
 {m:'Scienze', cl:'2', a:'Gli animali', d:'medio', q:'La balena è un:', ops:['pesce','uccello','insetto','mammifero'], r:3},
 {m:'Scienze', cl:'2', a:'Gli animali', d:'medio', q:'Il ragno ha quante zampe?', ops:['otto','sei','quattro','dieci'], r:0},
 {m:'Scienze', cl:'2', a:'Gli animali', d:'medio', q:'Quale animale va in letargo d’inverno?', ops:['il cane','la gallina','il riccio','il gatto'], r:2},
  // L’acqua
 {m:'Scienze', cl:'2', a:'L’acqua', d:'medio', q:'Il ghiaccio galleggia:', ops:['sull’acqua','sotto l’acqua','non esiste','solo nel fuoco'], r:0},
 {m:'Scienze', cl:'2', a:'L’acqua', d:'medio', q:'L’acqua bolle a circa:', ops:['1000 gradi','100 gradi','10 gradi','50 gradi'], r:1},
 {m:'Scienze', cl:'2', a:'L’acqua', d:'medio', q:'Quando l’acqua si raffredda e diventa ghiaccio si chiama:', ops:['fusione','pioggia','solidificazione','evaporazione'], r:2},
 {m:'Scienze', cl:'2', a:'L’acqua', d:'medio', q:'Il ciclo dell’acqua comprende:', ops:['evaporazione, nuvole e pioggia','solo ghiaccio','solo vento','solo terra'], r:0},
  // L’aria
 {m:'Scienze', cl:'2', a:'L’aria', d:'medio', q:'L’aria non si vede, ma si può:', ops:['rompere','sentire (il vento)','assaggiare','colorare'], r:1},
 {m:'Scienze', cl:'2', a:'L’aria', d:'medio', q:'L’ossigeno nell’aria serve per:', ops:['dormire','cantare','respirare','volare'], r:2},
 {m:'Scienze', cl:'2', a:'L’aria', d:'medio', q:'Un palloncino gonfio è pieno di:', ops:['acqua','sabbia','colla','aria'], r:3},
 {m:'Scienze', cl:'2', a:'L’aria', d:'medio', q:'L’aria calda tende a:', ops:['salire','scendere','fermarsi','sparire'], r:0},
 {m:'Scienze', cl:'2', a:'L’aria', d:'medio', q:'Una mongolfiera sale perché:', ops:['è magica','l’aria calda è più leggera','l’aria calda è più pesante','non c’entra l’aria'], r:1},
 {m:'Scienze', cl:'2', a:'L’aria', d:'medio', q:'Senza aria non possiamo:', ops:['camminare','pensare','mangiare','respirare'], r:3},
  // I materiali
 {m:'Scienze', cl:'2', a:'I materiali', d:'medio', q:'Quale materiale è trasparente?', ops:['il cartone','il vetro','il legno','il ferro'], r:1},
 {m:'Scienze', cl:'2', a:'I materiali', d:'medio', q:'Il metallo conduce bene:', ops:['il profumo','il silenzio','il calore','il colore'], r:2},
  // ---- DIFFICILE ----
  // Le piante
 {m:'Scienze', cl:'2', a:'Le piante', d:'difficile', q:'Il gambo che porta la foglia si chiama:', ops:['radice','tronco','fiore','picciolo'], r:3},
 {m:'Scienze', cl:'2', a:'Le piante', d:'difficile', q:'Le piante producono ossigeno soprattutto:', ops:['di giorno, con la luce','di notte, al buio','mai','solo d’inverno'], r:0},
  // Gli animali
 {m:'Scienze', cl:'2', a:'Gli animali', d:'difficile', q:'Gli anfibi, come la rana, vivono:', ops:['solo sottoterra','in acqua e sulla terra','solo in acqua','solo sulla terra'], r:1},
 {m:'Scienze', cl:'2', a:'Gli animali', d:'difficile', q:'Il bruco, crescendo, diventa:', ops:['un pesce','un uccello','un fiore','una farfalla'], r:3},
  // L’acqua
 {m:'Scienze', cl:'2', a:'L’acqua', d:'difficile', q:'L’acqua passa da liquido a vapore con:', ops:['la solidificazione','la pioggia','il vento','l’evaporazione'], r:3},
  // L’aria
 {m:'Scienze', cl:'2', a:'L’aria', d:'difficile', q:'L’aria è composta soprattutto da:', ops:['solo vapore','solo fumo','azoto e ossigeno','solo ossigeno'], r:2},
  // I materiali
 {m:'Scienze', cl:'2', a:'I materiali', d:'difficile', q:'La gomma è un materiale:', ops:['elastico','duro come il ferro','trasparente','che si scioglie al sole'], r:0},
 {m:'Scienze', cl:'2', a:'I materiali', d:'difficile', q:'Riciclare la carta serve per:', ops:['rompere il vetro','risparmiare alberi','sprecare legno','fare rumore'], r:1},
 ],

 /* ==================== CLASSE 2 - Storia ==================== */
 '2ST': [
  // ---- FACILE ----
  // L’orologio e il calendario
 {m:'Storia', cl:'2', a:'L’orologio e il calendario', d:'facile', q:'L’orologio misura:', ops:['le ore','il peso','la lunghezza','la temperatura'], r:0},
 {m:'Storia', cl:'2', a:'L’orologio e il calendario', d:'facile', q:'Il calendario mostra:', ops:['le temperature','i giorni e i mesi','le stelle','i pesi'], r:1},
 {m:'Storia', cl:'2', a:'L’orologio e il calendario', d:'facile', q:'Un giorno ha:', ops:['60 ore','100 ore','24 ore','12 ore'], r:2},
 {m:'Storia', cl:'2', a:'L’orologio e il calendario', d:'facile', q:'Una settimana ha:', ops:['5 giorni','30 giorni','12 giorni','7 giorni'], r:3},
 {m:'Storia', cl:'2', a:'L’orologio e il calendario', d:'facile', q:'Le stagioni sono:', ops:['sei','otto','quattro','due'], r:2},
  // Le stagioni
 {m:'Storia', cl:'2', a:'Le stagioni', d:'facile', q:'Quante stagioni conosciamo?', ops:['6','8','4','2'], r:2},
 {m:'Storia', cl:'2', a:'Le stagioni', d:'facile', q:'In estate fa:', ops:['freddo','sempre neve','sempre buio','caldo'], r:3},
 {m:'Storia', cl:'2', a:'Le stagioni', d:'facile', q:'In inverno fa:', ops:['freddo','caldo','sempre caldo','sempre vento'], r:0},
 {m:'Storia', cl:'2', a:'Le stagioni', d:'facile', q:'In autunno cadono:', ops:['le pietre','le foglie','le stelle','i fiori'], r:1},
 {m:'Storia', cl:'2', a:'Le stagioni', d:'facile', q:'D’estate le giornate sono:', ops:['corte','inesistenti','sempre buie','lunghe'], r:3},
 {m:'Storia', cl:'2', a:'Le stagioni', d:'facile', q:'D’inverno le giornate sono:', ops:['corte','lunghe','inesistenti','sempre luminose'], r:0},
  // I ricordi
 {m:'Storia', cl:'2', a:'I ricordi', d:'facile', q:'Un ricordo è qualcosa che:', ops:['è già accaduto','accadrà domani','non esiste','accade adesso'], r:0},
 {m:'Storia', cl:'2', a:'I ricordi', d:'facile', q:'Le fotografie servono per:', ops:['correre','ricordare','dormire','mangiare'], r:1},
 {m:'Storia', cl:'2', a:'I ricordi', d:'facile', q:'La memoria serve per:', ops:['nuotare','cantare','ricordare','volare'], r:2},
 {m:'Storia', cl:'2', a:'I ricordi', d:'facile', q:'I ricordi della nostra infanzia riguardano:', ops:['il futuro','il presente','mai','il passato'], r:3},
  // Le fonti storiche
 {m:'Storia', cl:'2', a:'Le fonti storiche', d:'facile', q:'Una fonte storica è:', ops:['una ricetta','un colore','una testimonianza del passato','un sogno'], r:2},
 {m:'Storia', cl:'2', a:'Le fonti storiche', d:'facile', q:'Una vecchia fotografia è una fonte:', ops:['magica','inutile','futura','storica'], r:3},
 {m:'Storia', cl:'2', a:'Le fonti storiche', d:'facile', q:'Un documento antico è una fonte:', ops:['storica','matematica','sportiva','musicale'], r:0},
 {m:'Storia', cl:'2', a:'Le fonti storiche', d:'facile', q:'I resti di un castello sono una fonte:', ops:['di musica','storica','di cibo','di sport'], r:1},
 {m:'Storia', cl:'2', a:'Le fonti storiche', d:'facile', q:'Le fonti scritte sono:', ops:['nuvole','suoni','documenti e lettere','sassi'], r:2},
 {m:'Storia', cl:'2', a:'Le fonti storiche', d:'facile', q:'Le fonti orali sono:', ops:['solo sassi','solo fotografie','solo ossa','racconti e testimonianze'], r:3},
  // La vita di una volta
 {m:'Storia', cl:'2', a:'La vita di una volta', d:'facile', q:'Un tempo le persone si illuminavano con:', ops:['le candele','le lampadine elettriche','il computer','il telefono'], r:0},
 {m:'Storia', cl:'2', a:'La vita di una volta', d:'facile', q:'Un tempo si viaggiava soprattutto:', ops:['con il treno veloce','con cavalli e carri','con l’aereo','con l’auto elettrica'], r:1},
 {m:'Storia', cl:'2', a:'La vita di una volta', d:'facile', q:'Un tempo si scriveva:', ops:['con il tablet','con il cellulare','con penna e calamaio','con il computer'], r:2},
 {m:'Storia', cl:'2', a:'La vita di una volta', d:'facile', q:'Un tempo il pane si faceva:', ops:['con la stampante','con il computer','al supermercato','a mano'], r:3},
  // ---- MEDIO ----
  // L’orologio e il calendario
 {m:'Storia', cl:'2', a:'L’orologio e il calendario', d:'medio', q:'L’anno ha:', ops:['24 giorni','365 giorni','7 giorni','30 giorni'], r:1},
 {m:'Storia', cl:'2', a:'L’orologio e il calendario', d:'medio', q:'Un mese ha circa:', ops:['30 giorni','7 giorni','365 giorni','1 giorno'], r:0},
 {m:'Storia', cl:'2', a:'L’orologio e il calendario', d:'medio', q:'Il giorno e la notte si alternano perché:', ops:['la Terra ruota su se stessa','il sole ruota','la luna balla','il vento soffia'], r:0},
  // Le stagioni
 {m:'Storia', cl:'2', a:'Le stagioni', d:'medio', q:'In primavera:', ops:['cadono tutte le foglie','fa sempre buio','sbocciano i fiori','cade la neve'], r:2},
  // I ricordi
 {m:'Storia', cl:'2', a:'I ricordi', d:'medio', q:'Un diario serve per:', ops:['scrivere i ricordi','cucinare','misurare','dormire'], r:0},
 {m:'Storia', cl:'2', a:'I ricordi', d:'medio', q:'I nonni raccontano:', ops:['le tabelline','i loro ricordi','il futuro','i sogni'], r:1},
 {m:'Storia', cl:'2', a:'I ricordi', d:'medio', q:'L’album di fotografie raccoglie:', ops:['calcoli','nuvole','immagini del passato','ricette'], r:2},
  // Le fonti storiche
 {m:'Storia', cl:'2', a:'Le fonti storiche', d:'medio', q:'Un museo conserva:', ops:['oggetti e fonti storiche','solo cibo','solo giocattoli','solo musica'], r:0},
  // La vita di una volta
 {m:'Storia', cl:'2', a:'La vita di una volta', d:'medio', q:'Un tempo si lavavano i panni:', ops:['a mano o al fiume','con la lavatrice','con il robot','con il computer'], r:0},
 {m:'Storia', cl:'2', a:'La vita di una volta', d:'medio', q:'Un tempo non c’erano:', ops:['le stelle','i computer','gli alberi','i fiumi'], r:1},
 {m:'Storia', cl:'2', a:'La vita di una volta', d:'medio', q:'I nostri bisnonni hanno vissuto:', ops:['sotto il mare','nel futuro','in un’epoca diversa dalla nostra','su un altro pianeta'], r:2},
  // ---- DIFFICILE ----
  // L’orologio e il calendario
 {m:'Storia', cl:'2', a:'L’orologio e il calendario', d:'difficile', q:'Il bisestile aggiunge un giorno a:', ops:['gennaio','marzo','dicembre','febbraio'], r:3},
 {m:'Storia', cl:'2', a:'L’orologio e il calendario', d:'difficile', q:'Un decennio è formato da:', ops:['1 anno','10 anni','100 anni','1000 anni'], r:1},
  // Le stagioni
 {m:'Storia', cl:'2', a:'Le stagioni', d:'difficile', q:'L’inverno inizia il:', ops:['21 settembre','21 dicembre','21 giugno','21 marzo'], r:1},
 {m:'Storia', cl:'2', a:'Le stagioni', d:'difficile', q:'L’estate inizia il:', ops:['21 marzo','21 settembre','21 giugno','21 dicembre'], r:2},
 {m:'Storia', cl:'2', a:'Le stagioni', d:'difficile', q:'Le stagioni dipendono dal movimento della Terra intorno:', ops:['alla luna','a Marte','al vento','al sole'], r:3},
  // I ricordi
 {m:'Storia', cl:'2', a:'I ricordi', d:'difficile', q:'"Quando ero piccolo" indica un tempo:', ops:['futuro','presente','che non esiste','passato'], r:3},
 {m:'Storia', cl:'2', a:'I ricordi', d:'difficile', q:'La storia studia:', ops:['gli eventi del passato','gli eventi del futuro','solo i numeri','solo le piante'], r:0},
 {m:'Storia', cl:'2', a:'I ricordi', d:'difficile', q:'Per conoscere il passato si usano anche:', ops:['i colori','i racconti e i documenti','le previsioni','le tabelline'], r:1},
  // Le fonti storiche
 {m:'Storia', cl:'2', a:'Le fonti storiche', d:'difficile', q:'Le fonti si dividono in:', ops:['solo materiali','scritte, orali, visive e materiali','solo scritte','solo orali'], r:1},
 {m:'Storia', cl:'2', a:'Le fonti storiche', d:'difficile', q:'Un’anfora antica è una fonte:', ops:['scritta','digitale','materiale','orale'], r:2},
 {m:'Storia', cl:'2', a:'Le fonti storiche', d:'difficile', q:'L’archeologo studia il passato attraverso:', ops:['le previsioni del tempo','le tabelline','i videogiochi','gli scavi'], r:3},
  // La vita di una volta
 {m:'Storia', cl:'2', a:'La vita di una volta', d:'difficile', q:'La vita di una volta era:', ops:['uguale a oggi','piena di computer','piena di smartphone','più semplice e senza tecnologia moderna'], r:3},
 {m:'Storia', cl:'2', a:'La vita di una volta', d:'difficile', q:'Un tempo i giochi dei bambini erano:', ops:['trottola, biglie e bambole di stoffa','solo videogiochi','solo tablet','solo computer'], r:0},
 {m:'Storia', cl:'2', a:'La vita di una volta', d:'difficile', q:'Per conoscere la vita di una volta usiamo:', ops:['i colori','foto, oggetti e racconti','le previsioni','le tabelline'], r:1},
 ],

 /* ==================== CLASSE 2 - Tecnologia e Informatica ==================== */
 '2TI': [
  // ---- FACILE ----
  // I materiali
 {m:'Tecnologia e Informatica', cl:'2', a:'I materiali', d:'facile', q:'Il legno è un materiale:', ops:['naturale','artificiale','invisibile','liquido'], r:0},
 {m:'Tecnologia e Informatica', cl:'2', a:'I materiali', d:'facile', q:'La plastica è un materiale:', ops:['liquido','artificiale','naturale','invisibile'], r:1},
 {m:'Tecnologia e Informatica', cl:'2', a:'I materiali', d:'facile', q:'Il ferro è un:', ops:['legno','vetro','carta','metallo'], r:3},
 {m:'Tecnologia e Informatica', cl:'2', a:'I materiali', d:'facile', q:'Il vetro si può:', ops:['mangiare','annaffiare','rompere','piegare'], r:2},
 {m:'Tecnologia e Informatica', cl:'2', a:'I materiali', d:'facile', q:'Il materiale più adatto per un bicchiere è:', ops:['la gomma','il vetro','il legno','la carta'], r:1},
 {m:'Tecnologia e Informatica', cl:'2', a:'I materiali', d:'facile', q:'Il materiale più adatto per una sedia è:', ops:['il ghiaccio','il legno','il vetro','la carta'], r:1},
  // La sicurezza online
 {m:'Tecnologia e Informatica', cl:'2', a:'La sicurezza online', d:'facile', q:'La password è:', ops:['da dire a tutti','da scrivere ovunque','inutile','segreta'], r:3},
 {m:'Tecnologia e Informatica', cl:'2', a:'La sicurezza online', d:'facile', q:'I dati personali:', ops:['vanno protetti','vanno condivisi','vanno urlati','non servono'], r:0},
 {m:'Tecnologia e Informatica', cl:'2', a:'La sicurezza online', d:'facile', q:'Condividere la password è:', ops:['sicuro','divertente','giusto','pericoloso'], r:3},
 {m:'Tecnologia e Informatica', cl:'2', a:'La sicurezza online', d:'facile', q:'Su internet bisogna:', ops:['parlare con tutti','scaricare tutto','stare attenti','andare ovunque'], r:2},
 {m:'Tecnologia e Informatica', cl:'2', a:'La sicurezza online', d:'facile', q:'Usare internet con attenzione è:', ops:['inutile','sbagliato','dannoso','importante'], r:3},
  // Gli oggetti
 {m:'Tecnologia e Informatica', cl:'2', a:'Gli oggetti', d:'facile', q:'Un oggetto è:', ops:['una cosa che possiamo usare','un suono','un colore','un profumo'], r:0},
 {m:'Tecnologia e Informatica', cl:'2', a:'Gli oggetti', d:'facile', q:'Gli oggetti vanno usati:', ops:['senza cura','rompendoli','con cura','con violenza'], r:2},
 {m:'Tecnologia e Informatica', cl:'2', a:'Gli oggetti', d:'facile', q:'Ogni oggetto ha:', ops:['solo un suono','una funzione','nessuna funzione','solo un colore'], r:1},
 {m:'Tecnologia e Informatica', cl:'2', a:'Gli oggetti', d:'facile', q:'Gli oggetti della scuola sono:', ops:['di nessuno','solo della maestra','solo del preside','di tutti'], r:3},
 {m:'Tecnologia e Informatica', cl:'2', a:'Gli oggetti', d:'facile', q:'Dopo l’uso gli oggetti vanno:', ops:['buttati','rotti','sporcati','messi a posto'], r:3},
  // Il computer
 {m:'Tecnologia e Informatica', cl:'2', a:'Il computer', d:'facile', q:'Il computer serve per:', ops:['dormire','correre','scrivere e disegnare','mangiare'], r:2},
 {m:'Tecnologia e Informatica', cl:'2', a:'Il computer', d:'facile', q:'Il mouse serve per:', ops:['muovere il puntatore','scrivere','stampare','dormire'], r:0},
 {m:'Tecnologia e Informatica', cl:'2', a:'Il computer', d:'facile', q:'La tastiera serve per:', ops:['dormire','scrivere','disegnare','stampare'], r:1},
 {m:'Tecnologia e Informatica', cl:'2', a:'Il computer', d:'facile', q:'Lo schermo mostra:', ops:['solo suoni','solo odori','solo sapori','immagini e parole'], r:3},
  // I programmi
 {m:'Tecnologia e Informatica', cl:'2', a:'I programmi', d:'facile', q:'Per disegnare al computer si usa:', ops:['un orologio','un programma di disegno','un gioco','una calcolatrice'], r:1},
 {m:'Tecnologia e Informatica', cl:'2', a:'I programmi', d:'facile', q:'Per scrivere al computer si usa:', ops:['una calcolatrice','un orologio','un programma di scrittura','un gioco'], r:2},
 {m:'Tecnologia e Informatica', cl:'2', a:'I programmi', d:'facile', q:'Le app sono:', ops:['programmi','colori','suoni','profumi'], r:0},
  // ---- MEDIO ----
  // La sicurezza online
 {m:'Tecnologia e Informatica', cl:'2', a:'La sicurezza online', d:'medio', q:'Su internet non bisogna:', ops:['imparare','parlare con sconosciuti','studiare','giocare'], r:1},
 {m:'Tecnologia e Informatica', cl:'2', a:'La sicurezza online', d:'medio', q:'Prima di usare internet bisogna:', ops:['parlare con tutti','scaricare tutto','chiedere a un adulto','andare ovunque'], r:2},
 {m:'Tecnologia e Informatica', cl:'2', a:'La sicurezza online', d:'medio', q:'Un sito sicuro si riconosce:', ops:['dal lucchetto','dai colori','dalle immagini','dal suono'], r:0},
 {m:'Tecnologia e Informatica', cl:'2', a:'La sicurezza online', d:'medio', q:'I dati personali non vanno:', ops:['tenuti segreti','custoditi','condivisi online','protetti'], r:2},
  // Gli oggetti
 {m:'Tecnologia e Informatica', cl:'2', a:'Gli oggetti', d:'medio', q:'Gli oggetti pericolosi si usano:', ops:['con l’aiuto di un adulto','da soli','di nascosto','senza attenzione'], r:0},
 {m:'Tecnologia e Informatica', cl:'2', a:'Gli oggetti', d:'medio', q:'Un oggetto rotto va:', ops:['buttato di nascosto','segnalato a un adulto','usato','nascosto'], r:1},
  // Il computer
 {m:'Tecnologia e Informatica', cl:'2', a:'Il computer', d:'medio', q:'Il computer va usato:', ops:['con i piedi','con il naso','con i capelli','con le mani'], r:3},
 {m:'Tecnologia e Informatica', cl:'2', a:'Il computer', d:'medio', q:'Sul computer si può:', ops:['imparare e giocare','solo dormire','solo correre','solo mangiare'], r:0},
 {m:'Tecnologia e Informatica', cl:'2', a:'Il computer', d:'medio', q:'Il computer si accende:', ops:['con un urlo','con un salto','con il pulsante','con un colpo'], r:2},
  // I programmi
 {m:'Tecnologia e Informatica', cl:'2', a:'I programmi', d:'medio', q:'Un programma del computer è:', ops:['un insieme di istruzioni','un gioco soltanto','un colore','un suono'], r:0},
 {m:'Tecnologia e Informatica', cl:'2', a:'I programmi', d:'medio', q:'I programmi si aprono:', ops:['colpendo il computer','urlando','saltando','cliccando sull’icona'], r:3},
 {m:'Tecnologia e Informatica', cl:'2', a:'I programmi', d:'medio', q:'L’icona di un programma è:', ops:['un piccolo disegno','un suono','un profumo','un sapore'], r:0},
 {m:'Tecnologia e Informatica', cl:'2', a:'I programmi', d:'medio', q:'I programmi servono per:', ops:['solo mangiare','fare tante cose','solo dormire','solo correre'], r:1},
 {m:'Tecnologia e Informatica', cl:'2', a:'I programmi', d:'medio', q:'Un programma si chiude:', ops:['urlando','saltando','con il pulsante di chiusura','buttando il computer'], r:2},
 {m:'Tecnologia e Informatica', cl:'2', a:'I programmi', d:'medio', q:'Usare i programmi giusti aiuta a:', ops:['dormire','lavorare meglio','perdere tempo','annoiarsi'], r:1},
  // ---- DIFFICILE ----
  // La sicurezza online
 {m:'Tecnologia e Informatica', cl:'2', a:'La sicurezza online', d:'difficile', q:'Se qualcuno online ci disturba bisogna:', ops:['continuare','parlarne con un adulto','tacere','rispondere con rabbia'], r:1},
  // Il computer
 {m:'Tecnologia e Informatica', cl:'2', a:'Il computer', d:'difficile', q:'Il computer è uno strumento:', ops:['pericoloso sempre','da rompere','utile','inutile'], r:2},
 {m:'Tecnologia e Informatica', cl:'2', a:'Il computer', d:'difficile', q:'Il computer va tenuto:', ops:['sporco','rotto','bagnato','pulito'], r:3},
 {m:'Tecnologia e Informatica', cl:'2', a:'Il computer', d:'difficile', q:'Il computer va usato sempre:', ops:['senza attenzione','con l’aiuto di un adulto','da soli sempre','di nascosto'], r:1},
  // I materiali
 {m:'Tecnologia e Informatica', cl:'2', a:'I materiali', d:'difficile', q:'Ogni oggetto è fatto di:', ops:['un materiale','aria','luce','suono'], r:0},
  // Gli oggetti
 {m:'Tecnologia e Informatica', cl:'2', a:'Gli oggetti', d:'difficile', q:'La tecnologia studia:', ops:['gli oggetti e le macchine','solo i colori','solo i suoni','solo i profumi'], r:0},
 {m:'Tecnologia e Informatica', cl:'2', a:'Gli oggetti', d:'difficile', q:'Gli oggetti si sono evoluti:', ops:['solo ieri','nel tempo','mai','solo di recente'], r:1},
  // I programmi
 {m:'Tecnologia e Informatica', cl:'2', a:'I programmi', d:'difficile', q:'Il sistema operativo serve per:', ops:['disegnare soltanto','scrivere soltanto','dormire','far funzionare il computer'], r:3},
 ],

 /* ==================== CLASSE 3 - Italiano ==================== */
 '3': [
  // ---- FACILE ----
  // Parti del discorso
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'facile', q:'Le PREPOSIZIONI semplici sono:', ops:['bene, male, poco, molto','io, tu, egli, noi','cane, gatto, topo','di, a, da, in, con, su, per, tra, fra'], r:3},
  // ---- MEDIO ----
  // Parti del discorso
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'medio', q:'Quale parte del discorso prende il posto del nome?', ops:['il pronome','l’avverbio','la preposizione','il verbo'], r:0},
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'medio', q:'Quale di queste è una PREPOSIZIONE semplice?', ops:['brutto','di','molto','cavallo'], r:1},
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'medio', q:'Quale di queste è un AGGETTIVO?', ops:['mangiare','libro','corsa','fortissimo'], r:3},
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'medio', q:'Quale di queste è una CONGIUNZIONE?', ops:['però','velocemente','tavolo','azzurro'], r:0},
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'medio', q:'L’AVVERBIO dice COME si svolge l’azione. Quale è un avverbio?', ops:['portone','lentamente','scala','marino'], r:1},
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'medio', q:'Il PRONOME sostituisce:', ops:['il punto','il titolo','il nome','l’articolo'], r:2},
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'medio', q:'VELOCEMENTE mangia — che parola è "velocemente"?', ops:['un avverbio','un verbo','un aggettivo','un nome'], r:0},
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'medio', q:'La preposizione articolata DEL è formata da:', ops:['DI + IL','DA + IL','DI + LO','DE + IL'], r:0},
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'medio', q:'La preposizione articolata ALLA è formata da:', ops:['AL + LA','A + LA','A + IL','AD + LA'], r:1},
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'medio', q:'Quale è un NOME?', ops:['abitare','correvole','lentamente','casa'], r:3},
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'medio', q:'In "L’amico che corre" "che" è:', ops:['un pronome relativo','un verbo','un aggettivo','un nome'], r:0},
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'medio', q:'La congiunzione più usata in italiano è:', ops:['quindi','ma','perché','e'], r:3},
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'medio', q:'Quale di queste NON è una preposizione semplice?', ops:['tra','fra','sul','su'], r:2},
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'medio', q:'In "Marco parla MOLTO" la parola "molto" è:', ops:['un nome','un aggettivo','un verbo','un avverbio'], r:3},
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'medio', q:'In "Leggo un libro INTERESSANTE" la parola "interessante" è:', ops:['una preposizione','un aggettivo','un nome','un verbo'], r:1},
  // Tipi di testo
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'medio', q:'Una fiaba è un testo:', ops:['giuridico','telefonico','narrativo','scientifico'], r:2},
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'medio', q:'Una ricetta di cucina è un testo:', ops:['regolativo','fantasy','sportivo','poetico'], r:0},
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'medio', q:'Una lettera è un testo che serve per:', ops:['comunicare con qualcuno','cucinare','giocare','dormire'], r:0},
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'medio', q:'Una FILASTROCCA è un testo:', ops:['in lingua straniera','in versi, divertente e ritmato','scientifico','segreto'], r:1},
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'medio', q:'Un testo che descrive un paesaggio è un testo:', ops:['comico','di fantasia','descrittivo','regolativo'], r:2},
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'medio', q:'Le favole di Esopo terminano spesso con:', ops:['una morale','un esercizio','un annuncio','una ricetta'], r:0},
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'medio', q:'Il testo ARGOMENTATIVO serve per:', ops:['difendere una propria opinione con ragioni','descrivere un gioco','cantare','contare'], r:0},
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'medio', q:'Le FAVOLE di Esopo e Fedro hanno spesso come protagonisti:', ops:['treni fantasma','animali parlanti','fiammiferi','satelliti'], r:1},
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'medio', q:'In una FIABA trovi spesso:', ops:['calcoli','grafici','magia, personaggi fantastici, un lieto fine','tabelline'], r:2},
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'medio', q:'Quale di questi è un testo POETICO?', ops:['la filastrocca','il regolamento','il manuale','la novella'], r:0},
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'medio', q:'La Divina Commedia di Dante è scritta in:', ops:['versi','prosa','lingua romana antica','scioglilingua'], r:0},
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'medio', q:'Il testo REGOLATIVO:', ops:['commuove','dice come fare qualcosa passo passo','racconta una storia','descrive un volto'], r:1},
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'medio', q:'Che cosa NON manca mai in una FIABA?', ops:['le tabelline','la lettera al sindaco','il grafico a barre','il lieto finale'], r:3},
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'medio', q:'Il TITOLO di un testo serve per:', ops:['annullarlo','anticipare di cosa parla','nascondere il testo','farlo più lungo'], r:1},
  // Grammatica in pratica
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'Quale pronome sostituisce "Paolo e io"?', ops:['loro','egli','noi','voi'], r:2},
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'Quale pronome sostituisce "Maria"?', ops:['noi','loro','voi','lei'], r:3},
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'Quale articolo indeterminativo si usa davanti a "amico"?', ops:['un','una','uno','i'], r:0},
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'In "lo scooter" l’articolo LO si usa davanti a:', ops:['M e N','vocale','S + consonante, Z, GN, PS','qualsiasi consonante'], r:2},
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'Completa: "___ zaino nuovo" (articolo determinativo giusto)', ops:['la','le','lo','il'], r:2},
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'Completa: "Andiamo ___ scuola" (preposizione giusta)', ops:['da','su','tra','a'], r:3},
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'Completa: "Vivo ___ Roma" (preposizione giusta)', ops:['a','di','da','per'], r:0},
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'Il singolare di "le case" è:', ops:['i casa','la casa','il casa','le casa'], r:1},
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'Quale frase usa correttamente un pronome?', ops:['Lo scooter scoota.','Molto molto bene.','Paolo parla a Marco e gli sorride.','Paolo Paolo sorride.'], r:2},
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'Quale frase è scritta CORRETTAMENTE?', ops:['Il cane abbaia forte!??!','Abbaia il forte cane abbaia.','cane il abbaia forte','Il cane abbaia forte.'], r:3},
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'In "La maestra dà il libro A ANNA" la preposizione articolata da usare è:', ops:['alla','allo','al','della'], r:0},
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'Completa: "Il libro ___ maestro" (preposizione articolata)', ops:['degli','di','del','della'], r:2},
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'Quale preposizione semplice indica possesso?', ops:['per','tra','di','con'], r:2},
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'Il plurale di "città" è:', ops:['cità','cittas','cittali','città (invariabile)'], r:3},
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'In "Ho comprato MELE e PERE" le parole "mele" e "pere" sono:', ops:['nomi comuni','nomi propri','verbi','aggettivi'], r:0},
 {m:'Italiano', cl:'3', a:'Grammatica in pratica', d:'medio', q:'In "Ho mangiato", il verbo è al tempo:', ops:['imperfetto','passato prossimo','presente','futuro'], r:1},
  // ---- DIFFICILE ----
  // Parti del discorso
 {m:'Italiano', cl:'3', a:'Parti del discorso', d:'difficile', q:'Le preposizioni articolate sono formate da:', ops:['preposizione semplice + articolo','due verbi','due avverbi','nome + aggettivo'], r:0},
  // Tipi di testo
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'difficile', q:'La carta geografica e la pagina di enciclopedia sono testi:', ops:['poetici','mistici','informativi','fantastici'], r:2},
 {m:'Italiano', cl:'3', a:'Tipi di testo', d:'difficile', q:'Lo SCIOGLILINGUA è una frase:', ops:['difficile da pronunciare velocemente','facilissima','scientificamente vera','scritta all’estero'], r:0},
 ],

 /* ==================== CLASSE 3 - Arte e Immagine ==================== */
 '3A': [
  // ---- FACILE ----
  // I colori
 {m:'Arte e Immagine', cl:'3', a:'I colori', d:'facile', q:'Il rosa si ottiene mescolando:', ops:['verde e viola','rosso e bianco','rosso e nero','blu e giallo'], r:1},
 {m:'Arte e Immagine', cl:'3', a:'I colori', d:'facile', q:'Il grigio si ottiene mescolando:', ops:['giallo e blu','verde e rosso','bianco e nero','rosso e blu'], r:2},
  // Il punto e la linea
 {m:'Arte e Immagine', cl:'3', a:'Il punto e la linea', d:'facile', q:'Una linea è fatta di:', ops:['un solo punto','solo colori','solo suoni','tanti punti vicini'], r:3},
 {m:'Arte e Immagine', cl:'3', a:'Il punto e la linea', d:'facile', q:'Tanti punti vicini formano:', ops:['una linea','un cerchio perfetto','un suono','nulla'], r:0},
 {m:'Arte e Immagine', cl:'3', a:'Il punto e la linea', d:'facile', q:'Il punto può essere:', ops:['invisibile','grande o piccolo','solo grande','solo piccolo'], r:1},
  // Il paesaggio
 {m:'Arte e Immagine', cl:'3', a:'Il paesaggio', d:'facile', q:'Un paesaggio rappresenta:', ops:['un oggetto','un colore','la natura o un luogo','un ritratto'], r:2},
 {m:'Arte e Immagine', cl:'3', a:'Il paesaggio', d:'facile', q:'Il cielo in un paesaggio sta:', ops:['sotto terra','in alto','in basso','di lato'], r:1},
  // I materiali artistici
 {m:'Arte e Immagine', cl:'3', a:'I materiali artistici', d:'facile', q:'Le matite colorate servono per:', ops:['colorare','tagliare','incollare','cucire'], r:0},
 {m:'Arte e Immagine', cl:'3', a:'I materiali artistici', d:'facile', q:'I pennarelli hanno punta:', ops:['invisibile','colorata','di metallo','di vetro'], r:1},
 {m:'Arte e Immagine', cl:'3', a:'I materiali artistici', d:'facile', q:'Gli acquerelli si usano con:', ops:['la colla','la sabbia','l’acqua','l’olio'], r:2},
  // ---- MEDIO ----
  // I colori
 {m:'Arte e Immagine', cl:'3', a:'I colori', d:'medio', q:'Il bianco e il nero sono:', ops:['non colori (neutri)','colori primari','colori secondari','colori caldi'], r:0},
 {m:'Arte e Immagine', cl:'3', a:'I colori', d:'medio', q:'Il colore della cioccolata è:', ops:['rosa','azzurro','verde','marrone'], r:3},
 {m:'Arte e Immagine', cl:'3', a:'I colori', d:'medio', q:'I colori chiari si ottengono:', ops:['aggiungendo il bianco','aggiungendo il nero','mescolando due primari','mescolando due secondari'], r:0},
 {m:'Arte e Immagine', cl:'3', a:'I colori', d:'medio', q:'I colori scuri si ottengono:', ops:['mescolando due secondari','aggiungendo il nero','aggiungendo il bianco','mescolando due primari'], r:1},
 {m:'Arte e Immagine', cl:'3', a:'I colori', d:'medio', q:'I colori dell’arcobaleno sono:', ops:['due','dieci','sette','tre'], r:2},
 {m:'Arte e Immagine', cl:'3', a:'I colori', d:'medio', q:'I colori complementari sono:', ops:['vicini sul cerchio','sempre uguali','sempre chiari','opposti sul cerchio cromatico'], r:3},
 {m:'Arte e Immagine', cl:'3', a:'I colori', d:'medio', q:'Il complementare del rosso è:', ops:['il verde','il blu','il giallo','l’arancione'], r:0},
  // Il punto e la linea
 {m:'Arte e Immagine', cl:'3', a:'Il punto e la linea', d:'medio', q:'Il punto è:', ops:['un colore','una forma grande','il segno più piccolo','una linea lunga'], r:2},
 {m:'Arte e Immagine', cl:'3', a:'Il punto e la linea', d:'medio', q:'Con i punti si può creare:', ops:['solo vuoto','solo linee','un’immagine puntinata','solo rumore'], r:2},
 {m:'Arte e Immagine', cl:'3', a:'Il punto e la linea', d:'medio', q:'Il puntinismo è una tecnica che usa:', ops:['solo linee','solo macchie','solo collage','tanti puntini'], r:3},
  // La figura umana
 {m:'Arte e Immagine', cl:'3', a:'La figura umana', d:'medio', q:'La figura umana è:', ops:['la rappresentazione di una persona','un paesaggio','un animale','un oggetto'], r:0},
 {m:'Arte e Immagine', cl:'3', a:'La figura umana', d:'medio', q:'Le braccia sono:', ops:['quattro','una','due','tre'], r:2},
 {m:'Arte e Immagine', cl:'3', a:'La figura umana', d:'medio', q:'Le gambe sono:', ops:['tre','quattro','una','due'], r:3},
 {m:'Arte e Immagine', cl:'3', a:'La figura umana', d:'medio', q:'Per disegnare una figura umana si parte da:', ops:['uno schizzo semplice','i dettagli del viso','le scarpe','lo sfondo'], r:0},
 {m:'Arte e Immagine', cl:'3', a:'La figura umana', d:'medio', q:'Le proporzioni del corpo servono per:', ops:['ingrandirlo','disegnarlo in modo armonioso','colorarlo','nasconderlo'], r:1},
  // Il paesaggio
 {m:'Arte e Immagine', cl:'3', a:'Il paesaggio', d:'medio', q:'In un paesaggio di mare c’è:', ops:['la neve','il deserto','la foresta','l’acqua'], r:3},
 {m:'Arte e Immagine', cl:'3', a:'Il paesaggio', d:'medio', q:'In un paesaggio di montagna ci sono:', ops:['le cime','le onde','le dune','i grattacieli'], r:0},
 {m:'Arte e Immagine', cl:'3', a:'Il paesaggio', d:'medio', q:'La linea dell’orizzonte separa:', ops:['vicino e lontano','caldo e freddo','cielo e terra','destra e sinistra'], r:2},
 {m:'Arte e Immagine', cl:'3', a:'Il paesaggio', d:'medio', q:'Gli elementi lontani si disegnano:', ops:['più grandi','uguali','invisibili','più piccoli'], r:3},
 {m:'Arte e Immagine', cl:'3', a:'Il paesaggio', d:'medio', q:'Il paesaggio urbano mostra:', ops:['case e strade','solo alberi','solo mare','solo montagne'], r:0},
  // I materiali artistici
 {m:'Arte e Immagine', cl:'3', a:'I materiali artistici', d:'medio', q:'La colla serve per:', ops:['incollare','tagliare','colorare','cancellare'], r:0},
 {m:'Arte e Immagine', cl:'3', a:'I materiali artistici', d:'medio', q:'La carta da disegno è:', ops:['di ferro','resistente','trasparente','di vetro'], r:1},
 {m:'Arte e Immagine', cl:'3', a:'I materiali artistici', d:'medio', q:'Le tempere si stendono con:', ops:['la matita','la gomma','il pennello','le forbici'], r:2},
  // ---- DIFFICILE ----
  // I colori
 {m:'Arte e Immagine', cl:'3', a:'I colori', d:'difficile', q:'Il cerchio cromatico serve per:', ops:['misurare','capire i rapporti tra colori','cucinare','dormire'], r:1},
  // Il punto e la linea
 {m:'Arte e Immagine', cl:'3', a:'Il punto e la linea', d:'difficile', q:'Punto e linea sono elementi:', ops:['solo dello sport','di base del disegno','solo della musica','solo della cucina'], r:1},
 {m:'Arte e Immagine', cl:'3', a:'Il punto e la linea', d:'difficile', q:'Una linea chiusa forma:', ops:['un punto','nulla','una figura','un suono'], r:2},
 {m:'Arte e Immagine', cl:'3', a:'Il punto e la linea', d:'difficile', q:'L’artista che usò tanti puntini fu:', ops:['Michelangelo','Giotto','Leonardo','Seurat'], r:3},
  // La figura umana
 {m:'Arte e Immagine', cl:'3', a:'La figura umana', d:'difficile', q:'Un manichino aiuta a:', ops:['dormire','cucinare','correre','capire le proporzioni'], r:3},
 {m:'Arte e Immagine', cl:'3', a:'La figura umana', d:'difficile', q:'La figura umana in movimento mostra:', ops:['un’azione','solo il riposo','solo il sonno','nulla'], r:0},
 {m:'Arte e Immagine', cl:'3', a:'La figura umana', d:'difficile', q:'Nel disegno del corpo, le articolazioni servono per:', ops:['misurare','piegare braccia e gambe','colorare','fare rumore'], r:1},
  // Il paesaggio
 {m:'Arte e Immagine', cl:'3', a:'Il paesaggio', d:'difficile', q:'Gli elementi vicini si disegnano:', ops:['trasparenti','più grandi','più piccoli','uguali'], r:1},
 {m:'Arte e Immagine', cl:'3', a:'Il paesaggio', d:'difficile', q:'In un paesaggio, la prospettiva dà:', ops:['suono','peso','profondità','colore'], r:2},
 {m:'Arte e Immagine', cl:'3', a:'Il paesaggio', d:'difficile', q:'Le stagioni cambiano:', ops:['solo il suono','solo il peso','nulla','i colori del paesaggio'], r:3},
  // I materiali artistici
 {m:'Arte e Immagine', cl:'3', a:'I materiali artistici', d:'difficile', q:'La carta crespa serve per:', ops:['tagliare il legno','cucinare','dormire','decorare'], r:3},
 {m:'Arte e Immagine', cl:'3', a:'I materiali artistici', d:'difficile', q:'Il cartoncino è più:', ops:['rigido della carta','morbido della carta','liquido','trasparente'], r:0},
 {m:'Arte e Immagine', cl:'3', a:'I materiali artistici', d:'difficile', q:'Prima di usare le forbici bisogna:', ops:['chiudere gli occhi','stare attenti','correre','gridare'], r:1},
 ],

 /* ==================== CLASSE 3 - Inglese ==================== */
 '3E': [
  // ---- FACILE ----
  // La scuola
 {m:'Inglese', cl:'3', a:'La scuola', d:'facile', q:'"Class" significa:', ops:['casa','strada','parco','classe'], r:3},
 {m:'Inglese', cl:'3', a:'La scuola', d:'facile', q:'"Break" (a scuola) significa:', ops:['lezione','compito','interrogazione','ricreazione'], r:3},
  // Il tempo
 {m:'Inglese', cl:'3', a:'Il tempo', d:'facile', q:'"Sun" significa:', ops:['sole','pioggia','neve','vento'], r:0},
 {m:'Inglese', cl:'3', a:'Il tempo', d:'facile', q:'"Rain" significa:', ops:['vento','pioggia','sole','neve'], r:1},
 {m:'Inglese', cl:'3', a:'Il tempo', d:'facile', q:'"Snow" significa:', ops:['sole','vento','neve','pioggia'], r:2},
 {m:'Inglese', cl:'3', a:'Il tempo', d:'facile', q:'"Wind" significa:', ops:['pioggia','neve','sole','vento'], r:3},
 {m:'Inglese', cl:'3', a:'Il tempo', d:'facile', q:'"Cold" significa:', ops:['freddo','caldo','tiepido','mite'], r:0},
 {m:'Inglese', cl:'3', a:'Il tempo', d:'facile', q:'"Hot" significa:', ops:['fresco','caldo','freddo','tiepido'], r:1},
 {m:'Inglese', cl:'3', a:'Il tempo', d:'facile', q:'"Cloud" significa:', ops:['pioggia','neve','nuvola','sole'], r:2},
 {m:'Inglese', cl:'3', a:'Il tempo', d:'facile', q:'"Sunny" significa:', ops:['soleggiato','nuvoloso','piovoso','nebbioso'], r:0},
 {m:'Inglese', cl:'3', a:'Il tempo', d:'facile', q:'"Storm" significa:', ops:['arcobaleno','tempesta','brezza','sole'], r:1},
  // ---- MEDIO ----
  // Numeri
 {m:'Inglese', cl:'3', a:'Numeri', d:'medio', q:'"One hundred" significa:', ops:['cento','dieci','mille','venti'], r:0},
 {m:'Inglese', cl:'3', a:'Numeri', d:'medio', q:'"Twenty-one" significa:', ops:['ventuno','ventidue','undici','dodici'], r:0},
 {m:'Inglese', cl:'3', a:'Numeri', d:'medio', q:'"One thousand" significa:', ops:['cento','diecimila','un milione','mille'], r:3},
 {m:'Inglese', cl:'3', a:'Numeri', d:'medio', q:'"Ninety" significa:', ops:['novanta','ottanta','settanta','sessanta'], r:0},
 {m:'Inglese', cl:'3', a:'Numeri', d:'medio', q:'"Eighty" significa:', ops:['sessanta','ottanta','novanta','settanta'], r:1},
  // Colori
 {m:'Inglese', cl:'3', a:'Colori', d:'medio', q:'"Rainbow" significa:', ops:['sole','arcobaleno','nuvola','pioggia'], r:1},
 {m:'Inglese', cl:'3', a:'Colori', d:'medio', q:'"Silver" significa:', ops:['bronzo','rame','argento','oro'], r:2},
  // La famiglia
 {m:'Inglese', cl:'3', a:'La famiglia', d:'medio', q:'"Cousin" significa:', ops:['zio','nonno','cugino','fratello'], r:2},
 {m:'Inglese', cl:'3', a:'La famiglia', d:'medio', q:'"Parents" significa:', ops:['nonni','figli','cugini','genitori'], r:3},
 {m:'Inglese', cl:'3', a:'La famiglia', d:'medio', q:'"Children" significa:', ops:['figli','genitori','nonni','zii'], r:0},
  // La scuola
 {m:'Inglese', cl:'3', a:'La scuola', d:'medio', q:'"Lesson" significa:', ops:['lezione','ricreazione','merenda','gioco'], r:0},
 {m:'Inglese', cl:'3', a:'La scuola', d:'medio', q:'"Subject" significa:', ops:['numero','materia','oggetto','colore'], r:1},
 {m:'Inglese', cl:'3', a:'La scuola', d:'medio', q:'"Exercise book" significa:', ops:['zaino','banco','quaderno','libro'], r:2},
  // Il tempo
 {m:'Inglese', cl:'3', a:'Il tempo', d:'medio', q:'"Cloudy" significa:', ops:['soleggiato','piovoso','ventoso','nuvoloso'], r:3},
  // ---- DIFFICILE ----
  // Colori
 {m:'Inglese', cl:'3', a:'Colori', d:'difficile', q:'"Black and white" significa:', ops:['verde e giallo','grigio e rosa','nero e bianco','rosso e blu'], r:2},
  // La famiglia
 {m:'Inglese', cl:'3', a:'La famiglia', d:'difficile', q:'"Uncle and aunt" significa:', ops:['mamma e papà','zio e zia','nonno e nonna','fratello e sorella'], r:1},
 ],

 /* ==================== CLASSE 3 - Educazione Civica ==================== */
 '3EC': [
  // ---- FACILE ----
  // La raccolta differenziata
 {m:'Educazione Civica', cl:'3', a:'La raccolta differenziata', d:'facile', q:'Differenziare i rifiuti serve per:', ops:['bruciarli','nasconderli','riciclarli','buttarli insieme'], r:2},
 {m:'Educazione Civica', cl:'3', a:'La raccolta differenziata', d:'facile', q:'La carta va nel contenitore:', ops:['del vetro','dell’umido','dell’indifferenziato','della carta'], r:3},
 {m:'Educazione Civica', cl:'3', a:'La raccolta differenziata', d:'facile', q:'Il vetro va nel contenitore:', ops:['del vetro','della carta','dell’umido','della plastica'], r:0},
 {m:'Educazione Civica', cl:'3', a:'La raccolta differenziata', d:'facile', q:'La plastica va nel contenitore:', ops:['dell’umido','della plastica','del vetro','della carta'], r:1},
  // I diritti dei bambini
 {m:'Educazione Civica', cl:'3', a:'I diritti dei bambini', d:'facile', q:'Ogni bambino ha diritto:', ops:['a litigare','a sporcare','all’istruzione','a non studiare'], r:2},
 {m:'Educazione Civica', cl:'3', a:'I diritti dei bambini', d:'facile', q:'Ogni bambino ha il diritto di:', ops:['a lavorare','a non dormire','a non mangiare','al gioco'], r:3},
 {m:'Educazione Civica', cl:'3', a:'I diritti dei bambini', d:'facile', q:'Per la salute, ogni bambino ha diritto a:', ops:['alla salute','a stare male','a non curarsi','a non lavarsi'], r:0},
 {m:'Educazione Civica', cl:'3', a:'I diritti dei bambini', d:'facile', q:'Ogni bambino ha diritto a vivere:', ops:['a non avere casa','a una famiglia','a stare solo','a essere abbandonato'], r:1},
  // L’ambiente
 {m:'Educazione Civica', cl:'3', a:'L’ambiente', d:'facile', q:'L’ambiente va:', ops:['protetto','sporcato','distrutto','ignorato'], r:0},
 {m:'Educazione Civica', cl:'3', a:'L’ambiente', d:'facile', q:'Buttare i rifiuti per terra:', ops:['aiuta','inquina','pulisce','non fa nulla'], r:1},
  // ---- MEDIO ----
  // La raccolta differenziata
 {m:'Educazione Civica', cl:'3', a:'La raccolta differenziata', d:'medio', q:'Gli avanzi di cibo vanno nell’:', ops:['plastica','carta','umido','vetro'], r:2},
 {m:'Educazione Civica', cl:'3', a:'La raccolta differenziata', d:'medio', q:'Una bottiglia di vetro va:', ops:['nella carta','nell’umido','sulla strada','nel vetro'], r:3},
 {m:'Educazione Civica', cl:'3', a:'La raccolta differenziata', d:'medio', q:'Riciclare fa bene all’ambiente perché:', ops:['riduce i rifiuti','aumenta i rifiuti','sporca','fa rumore'], r:0},
  // Le regole
 {m:'Educazione Civica', cl:'3', a:'Le regole', d:'medio', q:'Le regole della classe servono per:', ops:['litigare','disturbare','stare bene insieme','fare rumore'], r:2},
  // I diritti dei bambini
 {m:'Educazione Civica', cl:'3', a:'I diritti dei bambini', d:'medio', q:'I diritti dei bambini sono scritti:', ops:['nei giornali','nei menu','nella Convenzione ONU','nei quaderni'], r:2},
 {m:'Educazione Civica', cl:'3', a:'I diritti dei bambini', d:'medio', q:'Ogni bambino ha diritto a essere:', ops:['maltrattato','abbandonato','ignorato','protetto'], r:3},
 {m:'Educazione Civica', cl:'3', a:'I diritti dei bambini', d:'medio', q:'Tutti i bambini sono:', ops:['uguali nei diritti','diversi nei diritti','senza diritti','solo con doveri'], r:0},
 {m:'Educazione Civica', cl:'3', a:'I diritti dei bambini', d:'medio', q:'Il diritto allo studio significa:', ops:['dormire','andare a scuola','stare a casa','lavorare'], r:1},
 {m:'Educazione Civica', cl:'3', a:'I diritti dei bambini', d:'medio', q:'Il diritto al gioco significa:', ops:['non giocare mai','dormire sempre','poter giocare','lavorare sempre'], r:2},
 {m:'Educazione Civica', cl:'3', a:'I diritti dei bambini', d:'medio', q:'Il diritto alla salute significa:', ops:['non curarsi','stare male','non lavarsi','essere curati'], r:3},
  // ---- DIFFICILE ----
  // La raccolta differenziata
 {m:'Educazione Civica', cl:'3', a:'La raccolta differenziata', d:'difficile', q:'Il contenitore dell’umido raccoglie:', ops:['vetro','carta pulita','scarti di cibo','ferro'], r:2},
 {m:'Educazione Civica', cl:'3', a:'La raccolta differenziata', d:'difficile', q:'Le lattine di alluminio vanno:', ops:['nel vetro','nel metallo','nella carta','nell’umido'], r:1},
 {m:'Educazione Civica', cl:'3', a:'La raccolta differenziata', d:'difficile', q:'Gettare la plastica nel mare:', ops:['pulisce','non fa nulla','aiuta i pesci','inquina'], r:3},
  // La sicurezza
 {m:'Educazione Civica', cl:'3', a:'La sicurezza', d:'difficile', q:'Prima di attraversare bisogna:', ops:['correre','chiudere gli occhi','saltare','guardare a destra e a sinistra'], r:3},
  // Le regole
 {m:'Educazione Civica', cl:'3', a:'Le regole', d:'difficile', q:'Le regole esistono anche:', ops:['solo a scuola','solo a casa','mai','nello sport e nei giochi'], r:3},
 {m:'Educazione Civica', cl:'3', a:'Le regole', d:'difficile', q:'Le regole ci proteggono:', ops:['dai pericoli','dal divertimento','dagli amici','dalla scuola'], r:0},
  // L’ambiente
 {m:'Educazione Civica', cl:'3', a:'L’ambiente', d:'difficile', q:'L’inquinamento danneggia:', ops:['la salute e la natura','solo i colori','solo i suoni','nulla'], r:0},
 ],

 /* ==================== CLASSE 3 - Educazione Fisica ==================== */
 '3EF': [
  // ---- FACILE ----
  // Le parti del corpo
 {m:'Educazione Fisica', cl:'3', a:'Le parti del corpo', d:'facile', q:'Il corpo ha:', ops:['testa, tronco e arti','solo testa','solo gambe','solo braccia'], r:0},
 {m:'Educazione Fisica', cl:'3', a:'Le parti del corpo', d:'facile', q:'Il tronco è la parte:', ops:['sotto i piedi','sopra i capelli','fuori dal corpo','centrale del corpo'], r:3},
  // Gli sport
 {m:'Educazione Fisica', cl:'3', a:'Gli sport', d:'facile', q:'La pallacanestro si gioca:', ops:['con i piedi','con la testa','senza palla','con le mani e il canestro'], r:3},
  // Le regole
 {m:'Educazione Fisica', cl:'3', a:'Le regole', d:'facile', q:'Le regole dello sport servono per:', ops:['litigare','vincere sempre','giocare in modo giusto','barare'], r:2},
 {m:'Educazione Fisica', cl:'3', a:'Le regole', d:'facile', q:'L’arbitro serve per:', ops:['far rispettare le regole','giocare','dormire','barare'], r:0},
  // La salute e l’alimentazione
 {m:'Educazione Fisica', cl:'3', a:'La salute e l’alimentazione', d:'facile', q:'La colazione è importante:', ops:['mai','per avere energia','per dormire','per ingrassare'], r:1},
 {m:'Educazione Fisica', cl:'3', a:'La salute e l’alimentazione', d:'facile', q:'Frutta e verdura fanno:', ops:['male','nulla','solo dormire','bene'], r:3},
  // ---- MEDIO ----
  // Le parti del corpo
 {m:'Educazione Fisica', cl:'3', a:'Le parti del corpo', d:'medio', q:'Le articolazioni servono per:', ops:['piegare gli arti','dormire','vedere','mangiare'], r:0},
 {m:'Educazione Fisica', cl:'3', a:'Le parti del corpo', d:'medio', q:'Il ginocchio si trova:', ops:['nel collo','nella gamba','nel braccio','nella testa'], r:1},
 {m:'Educazione Fisica', cl:'3', a:'Le parti del corpo', d:'medio', q:'Il gomito si trova:', ops:['nella testa','nel piede','nel braccio','nella gamba'], r:2},
  // I movimenti
 {m:'Educazione Fisica', cl:'3', a:'I movimenti', d:'medio', q:'La capriola si fa:', ops:['nuotando','volando','rotolando','saltando in alto'], r:2},
 {m:'Educazione Fisica', cl:'3', a:'I movimenti', d:'medio', q:'La coordinazione serve per:', ops:['muoversi bene','dormire','mangiare','vedere'], r:0},
  // Gli sport
 {m:'Educazione Fisica', cl:'3', a:'Gli sport', d:'medio', q:'Il tennis si gioca con:', ops:['la racchetta','la mazza','il bastone','le mani'], r:0},
 {m:'Educazione Fisica', cl:'3', a:'Gli sport', d:'medio', q:'Il ciclismo si fa:', ops:['volando','in bicicletta','a piedi','nuotando'], r:1},
 {m:'Educazione Fisica', cl:'3', a:'Gli sport', d:'medio', q:'L’atletica comprende:', ops:['solo calcio','solo tennis','corsa e salti','solo nuoto'], r:2},
  // Le regole
 {m:'Educazione Fisica', cl:'3', a:'Le regole', d:'medio', q:'Barare nello sport è:', ops:['giusto','scorretto','corretto','divertente'], r:1},
 {m:'Educazione Fisica', cl:'3', a:'Le regole', d:'medio', q:'Le regole vanno rispettate:', ops:['solo quando si vince','solo quando si perde','sempre','mai'], r:2},
 {m:'Educazione Fisica', cl:'3', a:'Le regole', d:'medio', q:'Il fair play significa:', ops:['barare','litigare','vincere a tutti i costi','giocare lealmente'], r:3},
 {m:'Educazione Fisica', cl:'3', a:'Le regole', d:'medio', q:'Perdere con sportività è:', ops:['un gesto corretto','un gesto scorretto','impossibile','proibito'], r:0},
 {m:'Educazione Fisica', cl:'3', a:'Le regole', d:'medio', q:'Rispettare l’arbitro è:', ops:['sbagliato','dannoso','importante','inutile'], r:2},
  // La salute e l’alimentazione
 {m:'Educazione Fisica', cl:'3', a:'La salute e l’alimentazione', d:'medio', q:'I dolci vanno mangiati:', ops:['con moderazione','sempre','mai','solo di notte'], r:0},
 {m:'Educazione Fisica', cl:'3', a:'La salute e l’alimentazione', d:'medio', q:'Un’alimentazione varia dà:', ops:['solo acqua','tutte le sostanze utili','solo dolci','solo grassi'], r:1},
 {m:'Educazione Fisica', cl:'3', a:'La salute e l’alimentazione', d:'medio', q:'Lo sport e l’alimentazione sana:', ops:['non servono','sono proibiti','aiutano a stare bene','fanno male'], r:2},
  // ---- DIFFICILE ----
  // Le parti del corpo
 {m:'Educazione Fisica', cl:'3', a:'Le parti del corpo', d:'difficile', q:'I muscoli servono per:', ops:['muoversi','vedere','sentire','annusare'], r:0},
 {m:'Educazione Fisica', cl:'3', a:'Le parti del corpo', d:'difficile', q:'Le spalle collegano:', ops:['gambe e piedi','testa e capelli','mani e dita','braccia e tronco'], r:3},
 {m:'Educazione Fisica', cl:'3', a:'Le parti del corpo', d:'difficile', q:'Lo scheletro serve per:', ops:['annusare','sostenere il corpo','vedere','sentire'], r:1},
  // I movimenti
 {m:'Educazione Fisica', cl:'3', a:'I movimenti', d:'difficile', q:'Prima di muoversi tanto bisogna:', ops:['dormire','mangiare tanto','correre subito','riscaldarsi'], r:3},
 {m:'Educazione Fisica', cl:'3', a:'I movimenti', d:'difficile', q:'La forza serve per:', ops:['vedere','sollevare e spingere','dormire','mangiare'], r:1},
 {m:'Educazione Fisica', cl:'3', a:'I movimenti', d:'difficile', q:'La velocità serve per:', ops:['mangiare','vedere','correre veloci','dormire'], r:2},
  // Gli sport
 {m:'Educazione Fisica', cl:'3', a:'Gli sport', d:'difficile', q:'Il judo è uno sport:', ops:['di nuoto','di corsa','di lancio','di combattimento regolato'], r:3},
 {m:'Educazione Fisica', cl:'3', a:'Gli sport', d:'difficile', q:'La ginnastica artistica usa:', ops:['attrezzi e corpo','solo palla','solo racchetta','solo bici'], r:0},
 {m:'Educazione Fisica', cl:'3', a:'Gli sport', d:'difficile', q:'Ogni sport ha:', ops:['solo regole inventate','le sue regole','nessuna regola','solo regole segrete'], r:1},
  // Le regole
 {m:'Educazione Fisica', cl:'3', a:'Le regole', d:'difficile', q:'Le regole proteggono:', ops:['nessuno','tutti i giocatori','solo i forti','solo i vincitori'], r:1},
 {m:'Educazione Fisica', cl:'3', a:'Le regole', d:'difficile', q:'Lo sport senza regole sarebbe:', ops:['giusto','divertente','facile','ingiusto'], r:3},
  // La salute e l’alimentazione
 {m:'Educazione Fisica', cl:'3', a:'La salute e l’alimentazione', d:'difficile', q:'Le proteine si trovano in:', ops:['solo dolci','solo acqua','solo pane','carne e legumi'], r:3},
 {m:'Educazione Fisica', cl:'3', a:'La salute e l’alimentazione', d:'difficile', q:'I carboidrati danno:', ops:['energia','sonno','freddo','sete'], r:0},
 {m:'Educazione Fisica', cl:'3', a:'La salute e l’alimentazione', d:'difficile', q:'Le vitamine si trovano in:', ops:['solo sale','frutta e verdura','solo dolci','solo acqua'], r:1},
 ],

 /* ==================== CLASSE 3 - Geografia ==================== */
 '3G': [
  // ---- FACILE ----
  // I paesaggi italiani
 {m:'Geografia', cl:'3', a:'I paesaggi italiani', d:'facile', q:'L’Italia ha la forma di:', ops:['una stella','uno stivale','una palla','un quadrato'], r:1},
  // Le regioni
 {m:'Geografia', cl:'3', a:'Le regioni', d:'facile', q:'L’Italia è divisa in:', ops:['regioni','pianeti','oceani','deserti'], r:0},
 {m:'Geografia', cl:'3', a:'Le regioni', d:'facile', q:'Quante regioni ha l’Italia?', ops:['100','20','5','10'], r:1},
 {m:'Geografia', cl:'3', a:'Le regioni', d:'facile', q:'La Lombardia ha come capoluogo:', ops:['Roma','Napoli','Torino','Milano'], r:3},
  // Le carte geografiche
 {m:'Geografia', cl:'3', a:'Le carte geografiche', d:'facile', q:'La carta geografica rappresenta:', ops:['un colore','un gioco','un territorio','un cibo'], r:2},
 {m:'Geografia', cl:'3', a:'Le carte geografiche', d:'facile', q:'Sulla carta, i monti si disegnano:', ops:['con il colore blu','con il colore verde','con il colore rosso','con il colore marrone'], r:3},
 {m:'Geografia', cl:'3', a:'Le carte geografiche', d:'facile', q:'Sulla carta, l’acqua si disegna:', ops:['con il colore blu','con il colore marrone','con il colore verde','con il colore nero'], r:0},
 {m:'Geografia', cl:'3', a:'Le carte geografiche', d:'facile', q:'Sulla carta, le pianure si disegnano:', ops:['con il colore bianco','con il colore verde','con il colore blu','con il colore marrone'], r:1},
  // Mari e monti d’Italia
 {m:'Geografia', cl:'3', a:'Mari e monti d’Italia', d:'facile', q:'L’Italia è circondata in gran parte dal:', ops:['mare','deserto','ghiaccio','vulcano'], r:0},
  // ---- MEDIO ----
  // I paesaggi italiani
 {m:'Geografia', cl:'3', a:'I paesaggi italiani', d:'medio', q:'L’Italia è:', ops:['una penisola','un’isola','un deserto','un continente'], r:0},
 {m:'Geografia', cl:'3', a:'I paesaggi italiani', d:'medio', q:'In Italia ci sono:', ops:['solo ghiacciai','solo laghi','montagne, colline e pianure','solo deserti'], r:2},
 {m:'Geografia', cl:'3', a:'I paesaggi italiani', d:'medio', q:'Il paesaggio italiano è:', ops:['tutto uguale','solo montagna','solo mare','vario'], r:3},
 {m:'Geografia', cl:'3', a:'I paesaggi italiani', d:'medio', q:'L’Italia è bagnata dal:', ops:['Mediterraneo','Polo Nord','oceano Pacifico','mar Rosso'], r:0},
 {m:'Geografia', cl:'3', a:'I paesaggi italiani', d:'medio', q:'Le Alpi si trovano a:', ops:['ovest','nord','sud','est'], r:1},
 {m:'Geografia', cl:'3', a:'I paesaggi italiani', d:'medio', q:'Gli Appennini attraversano l’Italia:', ops:['solo la Sicilia','solo la Sardegna','da nord a sud','da est a ovest'], r:2},
 {m:'Geografia', cl:'3', a:'I paesaggi italiani', d:'medio', q:'Le due grandi isole italiane sono:', ops:['Sicilia e Sardegna','Corsica e Malta','Creta e Cipro','Ibiza e Maiorca'], r:0},
  // Il clima
 {m:'Geografia', cl:'3', a:'Il clima', d:'medio', q:'Il clima è:', ops:['un colore','un gioco','il tempo che fa in una zona, per lungo tempo','un cibo'], r:2},
 {m:'Geografia', cl:'3', a:'Il clima', d:'medio', q:'In Italia il clima è:', ops:['polare','desertico','equatoriale','temperato'], r:3},
 {m:'Geografia', cl:'3', a:'Il clima', d:'medio', q:'Al mare il clima è:', ops:['mite','molto freddo','polare','desertico'], r:0},
 {m:'Geografia', cl:'3', a:'Il clima', d:'medio', q:'In montagna il clima è:', ops:['desertico','più freddo','più caldo','uguale al mare'], r:1},
 {m:'Geografia', cl:'3', a:'Il clima', d:'medio', q:'La temperatura si misura con:', ops:['il metro','l’orologio','il termometro','la bilancia'], r:2},
 {m:'Geografia', cl:'3', a:'Il clima', d:'medio', q:'La pioggia si misura con:', ops:['il termometro','il barometro','la bussola','il pluviometro'], r:3},
 {m:'Geografia', cl:'3', a:'Il clima', d:'medio', q:'Il clima mediterraneo ha:', ops:['estati calde e inverni miti','sempre neve','sempre pioggia','sempre ghiaccio'], r:0},
 {m:'Geografia', cl:'3', a:'Il clima', d:'medio', q:'Al sud Italia il clima è:', ops:['sempre piovoso','più caldo','più freddo','polare'], r:1},
 {m:'Geografia', cl:'3', a:'Il clima', d:'medio', q:'Le precipitazioni sono:', ops:['solo vento','solo sole','solo nuvole','pioggia, neve e grandine'], r:3},
  // Le regioni
 {m:'Geografia', cl:'3', a:'Le regioni', d:'medio', q:'La regione in cui si trova Roma è:', ops:['la Sicilia','la Puglia','il Lazio','la Lombardia'], r:2},
 {m:'Geografia', cl:'3', a:'Le regioni', d:'medio', q:'Il capoluogo è:', ops:['la città principale della regione','un fiume','una montagna','un lago'], r:0},
 {m:'Geografia', cl:'3', a:'Le regioni', d:'medio', q:'La Sicilia è una regione:', ops:['del nord','insulare','di pianura','di montagna soltanto'], r:1},
 {m:'Geografia', cl:'3', a:'Le regioni', d:'medio', q:'La regione con Firenze come capoluogo è:', ops:['la Campania','la Puglia','la Toscana','la Liguria'], r:2},
 {m:'Geografia', cl:'3', a:'Le regioni', d:'medio', q:'Il capoluogo del Piemonte è:', ops:['Genova','Venezia','Bologna','Torino'], r:3},
 {m:'Geografia', cl:'3', a:'Le regioni', d:'medio', q:'Il capoluogo della Campania è:', ops:['Napoli','Palermo','Bari','Firenze'], r:0},
 {m:'Geografia', cl:'3', a:'Le regioni', d:'medio', q:'Le regioni a statuto speciale sono:', ops:['solo due','alcune, con più autonomia','tutte','nessuna'], r:1},
  // Le carte geografiche
 {m:'Geografia', cl:'3', a:'Le carte geografiche', d:'medio', q:'La legenda della carta serve per:', ops:['cucinare','giocare','capire i simboli','dormire'], r:2},
 {m:'Geografia', cl:'3', a:'Le carte geografiche', d:'medio', q:'La scala della carta indica:', ops:['il peso','la temperatura','l’ora','quanto è ridotto il territorio'], r:3},
 {m:'Geografia', cl:'3', a:'Le carte geografiche', d:'medio', q:'Il nord sulla carta è di solito:', ops:['in alto','in basso','a destra','a sinistra'], r:0},
  // Mari e monti d’Italia
 {m:'Geografia', cl:'3', a:'Mari e monti d’Italia', d:'medio', q:'Il mare che bagna la Liguria è:', ops:['il mar Ionio','il mar Ligure','il mar Adriatico','il mar Tirreno'], r:1},
 {m:'Geografia', cl:'3', a:'Mari e monti d’Italia', d:'medio', q:'Le Alpi sono:', ops:['laghi','deserti','montagne alte a nord','pianure'], r:2},
 {m:'Geografia', cl:'3', a:'Mari e monti d’Italia', d:'medio', q:'Gli Appennini sono:', ops:['un mare','un fiume','un lago','una catena di monti'], r:3},
 {m:'Geografia', cl:'3', a:'Mari e monti d’Italia', d:'medio', q:'Il Vesuvio è:', ops:['un vulcano','un fiume','un lago','una pianura'], r:0},
 {m:'Geografia', cl:'3', a:'Mari e monti d’Italia', d:'medio', q:'L’Etna si trova in:', ops:['Piemonte','Sicilia','Sardegna','Lombardia'], r:1},
 {m:'Geografia', cl:'3', a:'Mari e monti d’Italia', d:'medio', q:'Il mar Adriatico bagna:', ops:['solo la Sicilia','solo la Sardegna','la costa orientale','la costa occidentale'], r:2},
 {m:'Geografia', cl:'3', a:'Mari e monti d’Italia', d:'medio', q:'Il monte più alto d’Italia è:', ops:['l’Etna','il Vesuvio','il Gran Sasso','il Monte Bianco'], r:3},
  // ---- DIFFICILE ----
  // I paesaggi italiani
 {m:'Geografia', cl:'3', a:'I paesaggi italiani', d:'difficile', q:'La Pianura Padana si trova a:', ops:['sud','ovest','nelle isole','nord'], r:3},
 {m:'Geografia', cl:'3', a:'I paesaggi italiani', d:'difficile', q:'L’Italia confina a nord con:', ops:['l’oceano','le Alpi','il mare','il deserto'], r:1},
  // Le carte geografiche
 {m:'Geografia', cl:'3', a:'Le carte geografiche', d:'difficile', q:'La carta fisica mostra:', ops:['solo strade','monti, fiumi e laghi','solo città','solo confini'], r:1},
 {m:'Geografia', cl:'3', a:'Le carte geografiche', d:'difficile', q:'La carta politica mostra:', ops:['solo fiumi','solo laghi','confini e città','solo monti'], r:2},
 {m:'Geografia', cl:'3', a:'Le carte geografiche', d:'difficile', q:'Il planisfero rappresenta:', ops:['una sola città','una sola regione','un solo mare','tutta la Terra'], r:3},
  // Mari e monti d’Italia
 {m:'Geografia', cl:'3', a:'Mari e monti d’Italia', d:'difficile', q:'Il mar Tirreno bagna:', ops:['la costa occidentale','la costa orientale','solo il nord','nessuna costa'], r:0},
 {m:'Geografia', cl:'3', a:'Mari e monti d’Italia', d:'difficile', q:'Il Gran Sasso si trova:', ops:['in Sardegna','negli Appennini','nelle Alpi','in Sicilia'], r:1},
 ],

 /* ==================== CLASSE 3 - Matematica ==================== */
 '3M': [
  // ---- FACILE ----
  // Numeri fino a 1000
 {m:'Matematica', cl:'3', a:'Numeri fino a 1000', d:'facile', q:'Nel numero 347, la cifra 3 vale:', ops:['3','30','300','3000'], r:2},
 {m:'Matematica', cl:'3', a:'Numeri fino a 1000', d:'facile', q:'Il numero 347 si scompone in:', ops:['300 + 47','300 + 40 + 7','34 + 7','3 + 4 + 7'], r:1},
 {m:'Matematica', cl:'3', a:'Numeri fino a 1000', d:'facile', q:'Quale numero è maggiore: 899 o 901?', ops:['sono uguali','non si può dire','899','901'], r:3},
 {m:'Matematica', cl:'3', a:'Numeri fino a 1000', d:'facile', q:'Quale numero viene dopo il 499?', ops:['491','600','4910','500'], r:3},
  // Operazioni in colonna
 {m:'Matematica', cl:'3', a:'Operazioni in colonna', d:'facile', q:'Quanto fa 34 + 25?', ops:['59','49','79','69'], r:0},
 {m:'Matematica', cl:'3', a:'Operazioni in colonna', d:'facile', q:'Quanto fa 58 − 23?', ops:['35','25','45','315'], r:0},
 {m:'Matematica', cl:'3', a:'Operazioni in colonna', d:'facile', q:'Quanto fa 123 + 200?', ops:['423','323','333','223'], r:1},
  // Frazioni
 {m:'Matematica', cl:'3', a:'Frazioni', d:'facile', q:'Quanto vale MEZZA pizza?', ops:['1/4','2/1','1/2','1/3'], r:2},
 {m:'Matematica', cl:'3', a:'Frazioni', d:'facile', q:'In 3/4, il numero 4 si chiama:', ops:['denominatore','quoziente','resto','numeratore'], r:0},
 {m:'Matematica', cl:'3', a:'Frazioni', d:'facile', q:'In 3/4, il numero 3 si chiama:', ops:['numeratore','denominatore','divisore','media'], r:0},
  // Misure e statistiche
 {m:'Matematica', cl:'3', a:'Misure e statistiche', d:'facile', q:'1 km equivale a quanti metri?', ops:['10.000','10','100','1000'], r:3},
  // ---- MEDIO ----
  // Numeri fino a 1000
 {m:'Matematica', cl:'3', a:'Numeri fino a 1000', d:'medio', q:'Quante centinaia ci sono in 1200?', ops:['2','10','12','100'], r:2},
 {m:'Matematica', cl:'3', a:'Numeri fino a 1000', d:'medio', q:'Il numero "settecentotrentadue" si scrive:', ops:['7032','762','732','723'], r:2},
 {m:'Matematica', cl:'3', a:'Numeri fino a 1000', d:'medio', q:'Quale numero arrotondato alle centinaia fa 1300, partendo da 1347?', ops:['1350','1000','1400','1300'], r:3},
 {m:'Matematica', cl:'3', a:'Numeri fino a 1000', d:'medio', q:'Quale sequenza è in ordine DECRESCENTE?', ops:['760, 880, 950','880, 950, 760','760, 950, 880','950, 880, 760'], r:3},
 {m:'Matematica', cl:'3', a:'Numeri fino a 1000', d:'medio', q:'Quale numero è composto da 5 centinaia, 0 decine e 8 unità?', ops:['58','508','580','5008'], r:1},
 {m:'Matematica', cl:'3', a:'Numeri fino a 1000', d:'medio', q:'Tra 698 e 701 ci sono quanti numeri?', ops:['1','2','3','4'], r:1},
 {m:'Matematica', cl:'3', a:'Numeri fino a 1000', d:'medio', q:'Quale numero arrotondato alla decina più vicina è 967?', ops:['975','900','960','970'], r:3},
  // Operazioni in colonna
 {m:'Matematica', cl:'3', a:'Operazioni in colonna', d:'medio', q:'Quanto fa 47 + 38 (con riporto)?', ops:['95','78','75','85'], r:3},
 {m:'Matematica', cl:'3', a:'Operazioni in colonna', d:'medio', q:'Quanto fa 52 − 27 (con prestito)?', ops:['25','15','27','35'], r:0},
 {m:'Matematica', cl:'3', a:'Operazioni in colonna', d:'medio', q:'Quanto fa 23 × 3 (moltiplicazione in colonna)?', ops:['66','69','63','93'], r:1},
 {m:'Matematica', cl:'3', a:'Operazioni in colonna', d:'medio', q:'Quanto fa 300 + 400?', ops:['1000','600','700','70'], r:2},
  // Frazioni
 {m:'Matematica', cl:'3', a:'Frazioni', d:'medio', q:'3/4 di 20 vale:', ops:['12','15','16','5'], r:1},
 {m:'Matematica', cl:'3', a:'Frazioni', d:'medio', q:'Quale frazione è EQUIVALENTE a 1/2?', ops:['4/6','2/3','3/6','2/5'], r:2},
  // Perimetro e area
 {m:'Matematica', cl:'3', a:'Perimetro e area', d:'medio', q:'Quanto fa 1 metro quadrato in centimetri quadrati?', ops:['1000 cm²','10.000 cm²','1.000.000 cm²','100 cm²'], r:1},
  // Misure e statistiche
 {m:'Matematica', cl:'3', a:'Misure e statistiche', d:'medio', q:'2,5 metri equivalgono a:', ops:['2500 cm','205 cm','25 cm','250 cm'], r:3},
 {m:'Matematica', cl:'3', a:'Misure e statistiche', d:'medio', q:'In un grafico a barre, la barra più ALTA rappresenta:', ops:['il valore più grande','la media','il primo dato dell’elenco','il valore più piccolo'], r:0},
 {m:'Matematica', cl:'3', a:'Misure e statistiche', d:'medio', q:'La MEDIA di 4, 6 e 8 vale:', ops:['4','6','8','18'], r:1},
 {m:'Matematica', cl:'3', a:'Misure e statistiche', d:'medio', q:'Quanto pesa mezzo chilogrammo?', ops:['250 g','100 g','500 g','1000 g'], r:2},
 {m:'Matematica', cl:'3', a:'Misure e statistiche', d:'medio', q:'I voti di Marco sono 6, 7, 7, 8. Qual è la moda?', ops:['7','8','7,5','6'], r:0},
 {m:'Matematica', cl:'3', a:'Misure e statistiche', d:'medio', q:'In un sacchetto ci sono 3 mele rosse e 2 gialle. Quante mele ci sono in tutto?', ops:['7','4','5','6'], r:2},
  // ---- DIFFICILE ----
  // Operazioni in colonna
 {m:'Matematica', cl:'3', a:'Operazioni in colonna', d:'difficile', q:'Quanto fa 145 + 267 (con riporto)?', ops:['392','422','402','412'], r:3},
 {m:'Matematica', cl:'3', a:'Operazioni in colonna', d:'difficile', q:'Quanto fa 503 − 248 (con prestito)?', ops:['265','245','355','255'], r:3},
 {m:'Matematica', cl:'3', a:'Operazioni in colonna', d:'difficile', q:'Quanto fa 21 × 4?', ops:['64','81','84','104'], r:2},
 {m:'Matematica', cl:'3', a:'Operazioni in colonna', d:'difficile', q:'La PROVA della sottrazione 50 − 17 = 33 è:', ops:['17 − 33','33 + 17 = 50','50 + 33 = 83','33 − 17 = 16'], r:1},
  // Frazioni
 {m:'Matematica', cl:'3', a:'Frazioni', d:'difficile', q:'Quale frazione è MAGGIORE: 3/5 o 2/5?', ops:['non si può dire','2/5','3/5','sono uguali'], r:2},
 {m:'Matematica', cl:'3', a:'Frazioni', d:'difficile', q:'Quale frazione è MAGGIORE: 1/2 o 1/4?', ops:['sono uguali','dipende dal giorno','1/4','1/2'], r:3},
 {m:'Matematica', cl:'3', a:'Frazioni', d:'difficile', q:'2/4 è una frazione EQUIVALENTE a:', ops:['1/2','2/8','3/4','1/3'], r:0},
 {m:'Matematica', cl:'3', a:'Frazioni', d:'difficile', q:'La frazione 5/4 è:', ops:['apparente','decimale','propria','impropria'], r:3},
 {m:'Matematica', cl:'3', a:'Frazioni', d:'difficile', q:'La frazione apparente 4/2 vale:', ops:['2','6','8','4'], r:0},
 {m:'Matematica', cl:'3', a:'Frazioni', d:'difficile', q:'1/3 di 9 caramelle è:', ops:['2 caramelle','3 caramelle','4 caramelle','6 caramelle'], r:1},
  // Perimetro e area
 {m:'Matematica', cl:'3', a:'Perimetro e area', d:'difficile', q:'L’AREA di una figura misura:', ops:['il peso','il bordo','la superficie interna','il volume'], r:2},
 {m:'Matematica', cl:'3', a:'Perimetro e area', d:'difficile', q:'L’area del rettangolo si calcola:', ops:['base + altezza','base ÷ altezza','sommando i lati','base × altezza'], r:3},
 {m:'Matematica', cl:'3', a:'Perimetro e area', d:'difficile', q:'L’area di un rettangolo di base 5 cm e altezza 3 cm è:', ops:['15 cm²','16 cm²','30 cm²','8 cm²'], r:0},
 {m:'Matematica', cl:'3', a:'Perimetro e area', d:'difficile', q:'L’area di un quadrato di lato 4 cm è:', ops:['8 cm²','12 cm²','16 cm²','20 cm²'], r:2},
 {m:'Matematica', cl:'3', a:'Perimetro e area', d:'difficile', q:'Le unità di misura dell’area sono:', ops:['litri','cm','cm²','cm³'], r:2},
 {m:'Matematica', cl:'3', a:'Perimetro e area', d:'difficile', q:'L’area del triangolo si calcola:', ops:['base + altezza','lado × 3','base × altezza','(base × altezza) ÷ 2'], r:3},
 {m:'Matematica', cl:'3', a:'Perimetro e area', d:'difficile', q:'Il perimetro di un quadrato di lato 7 cm è:', ops:['14 cm','21 cm','28 cm','49 cm'], r:2},
  // Misure e statistiche
 {m:'Matematica', cl:'3', a:'Misure e statistiche', d:'difficile', q:'La MODA è:', ops:['la somma dei dati','il valore più raro','il valore più frequente','il valore centrale'], r:2},
 {m:'Matematica', cl:'3', a:'Misure e statistiche', d:'difficile', q:'Un litro di acqua pesa circa:', ops:['1 grammo','100 grammi','1 chilogrammo','10 chili'], r:2},
 ],

 /* ==================== CLASSE 3 - Musica ==================== */
 '3MU': [
  // ---- FACILE ----
  // Le note musicali
 {m:'Musica', cl:'3', a:'Le note musicali', d:'facile', q:'La scala musicale inizia con:', ops:['SOL','DO','SI','LA'], r:1},
 {m:'Musica', cl:'3', a:'Le note musicali', d:'facile', q:'La scala musicale finisce con:', ops:['LA','SOL','SI','DO'], r:2},
  // Il pentagramma
 {m:'Musica', cl:'3', a:'Il pentagramma', d:'facile', q:'Il pentagramma ha:', ops:['4 righe','10 righe','5 righe','3 righe'], r:2},
 {m:'Musica', cl:'3', a:'Il pentagramma', d:'facile', q:'Le note si scrivono:', ops:['solo sulle righe','solo negli spazi','fuori dal foglio','sulle righe e negli spazi'], r:3},
 {m:'Musica', cl:'3', a:'Il pentagramma', d:'facile', q:'Il pentagramma serve per:', ops:['scrivere la musica','disegnare','cucinare','dormire'], r:0},
 {m:'Musica', cl:'3', a:'Il pentagramma', d:'facile', q:'Il pentagramma si legge:', ops:['mai','dal basso verso l’alto','dall’alto verso il basso','da destra a sinistra'], r:1},
  // Gli strumenti
 {m:'Musica', cl:'3', a:'Gli strumenti', d:'facile', q:'Il pianoforte è uno strumento a:', ops:['tasti','corde pizzicate','fiato','percussione'], r:0},
 {m:'Musica', cl:'3', a:'Gli strumenti', d:'facile', q:'Il violino è uno strumento a:', ops:['tasti','corde','fiato','percussione'], r:1},
 {m:'Musica', cl:'3', a:'Gli strumenti', d:'facile', q:'Il flauto è uno strumento a:', ops:['percussione','tasti','fiato','corde'], r:2},
 {m:'Musica', cl:'3', a:'Gli strumenti', d:'facile', q:'Il tamburo è uno strumento a:', ops:['corde','fiato','tasti','percussione'], r:3},
  // Le famiglie di strumenti
 {m:'Musica', cl:'3', a:'Le famiglie di strumenti', d:'facile', q:'Gli strumenti a corde si suonano:', ops:['pizzicando o strofinando le corde','soffiando','battendo','scuotendo'], r:0},
 {m:'Musica', cl:'3', a:'Le famiglie di strumenti', d:'facile', q:'Gli strumenti a fiato si suonano:', ops:['scuotendo','soffiando','pizzicando','battendo'], r:1},
 {m:'Musica', cl:'3', a:'Le famiglie di strumenti', d:'facile', q:'Gli strumenti a percussione si suonano:', ops:['pizzicando','strofinando','battendo o scuotendo','soffiando'], r:2},
 {m:'Musica', cl:'3', a:'Le famiglie di strumenti', d:'facile', q:'La chitarra appartiene alla famiglia:', ops:['dei fiati','delle percussioni','dei tasti','delle corde'], r:3},
  // ---- MEDIO ----
  // Il ritmo
 {m:'Musica', cl:'3', a:'Il ritmo', d:'medio', q:'Il ritmo è:', ops:['un profumo','una forma','la successione di suoni e pause','un colore'], r:2},
 {m:'Musica', cl:'3', a:'Il ritmo', d:'medio', q:'La pulsazione è:', ops:['una pausa','un rumore','il battito regolare','un colore'], r:2},
 {m:'Musica', cl:'3', a:'Il ritmo', d:'medio', q:'Il ritmo si può scrivere con:', ops:['i colori','i numeri','le lettere','le figure musicali'], r:3},
 {m:'Musica', cl:'3', a:'Il ritmo', d:'medio', q:'Il ritmo della marcia è:', ops:['casuale','silenzioso','invisibile','regolare'], r:3},
  // Le note musicali
 {m:'Musica', cl:'3', a:'Le note musicali', d:'medio', q:'Dopo il SI si ricomincia da:', ops:['DO','RE','MI','FA'], r:0},
 {m:'Musica', cl:'3', a:'Le note musicali', d:'medio', q:'Le note gravi sono:', ops:['lente','basse','alte','veloci'], r:1},
 {m:'Musica', cl:'3', a:'Le note musicali', d:'medio', q:'Le note acute sono:', ops:['veloci','lente','alte','basse'], r:2},
 {m:'Musica', cl:'3', a:'Le note musicali', d:'medio', q:'Una nota più alta sul pentagramma è:', ops:['più acuta','più grave','più lunga','più corta'], r:0},
 {m:'Musica', cl:'3', a:'Le note musicali', d:'medio', q:'Una nota più bassa sul pentagramma è:', ops:['più corta','più grave','più acuta','più lunga'], r:1},
  // Il pentagramma
 {m:'Musica', cl:'3', a:'Il pentagramma', d:'medio', q:'La chiave di violino si mette:', ops:['in mezzo','mai','all’inizio del pentagramma','alla fine'], r:2},
 {m:'Musica', cl:'3', a:'Il pentagramma', d:'medio', q:'La chiave di violino si chiama anche:', ops:['chiave di DO','chiave di FA','chiave di LA','chiave di SOL'], r:3},
 {m:'Musica', cl:'3', a:'Il pentagramma', d:'medio', q:'Gli spazi tra le righe sono:', ops:['quattro','cinque','tre','dieci'], r:0},
  // Gli strumenti
 {m:'Musica', cl:'3', a:'Gli strumenti', d:'medio', q:'La chitarra ha:', ops:['le corde','i tasti del pianoforte','le pelli','i sonagli'], r:0},
 {m:'Musica', cl:'3', a:'Gli strumenti', d:'medio', q:'La tromba è uno strumento a:', ops:['tasti','fiato','corde','percussione'], r:1},
 {m:'Musica', cl:'3', a:'Gli strumenti', d:'medio', q:'I piatti sono strumenti a:', ops:['fiato','tasti','percussione','corde'], r:2},
  // Le famiglie di strumenti
 {m:'Musica', cl:'3', a:'Le famiglie di strumenti', d:'medio', q:'Il flauto appartiene alla famiglia:', ops:['dei fiati','delle corde','delle percussioni','dei tasti'], r:0},
 {m:'Musica', cl:'3', a:'Le famiglie di strumenti', d:'medio', q:'Il tamburo appartiene alla famiglia:', ops:['dei tasti','delle percussioni','delle corde','dei fiati'], r:1},
 {m:'Musica', cl:'3', a:'Le famiglie di strumenti', d:'medio', q:'L’orchestra è formata da:', ops:['solo fiati','solo percussioni','tante famiglie di strumenti','una sola famiglia'], r:2},
  // ---- DIFFICILE ----
  // Le note musicali
 {m:'Musica', cl:'3', a:'Le note musicali', d:'difficile', q:'Le note si scrivono su:', ops:['un foglio qualunque','il muro','la lavagna','righe e spazi del pentagramma'], r:3},
  // Il pentagramma
 {m:'Musica', cl:'3', a:'Il pentagramma', d:'difficile', q:'La chiave di violino indica:', ops:['la velocità','la posizione delle note','il ritmo','il volume'], r:1},
 {m:'Musica', cl:'3', a:'Il pentagramma', d:'difficile', q:'Le note fuori dal pentagramma si scrivono:', ops:['solo a voce','solo a colori','sui tagli addizionali','mai'], r:2},
 {m:'Musica', cl:'3', a:'Il pentagramma', d:'difficile', q:'Il pentagramma musicale è formato da:', ops:['righe curve','punti','cerchi','righe parallele'], r:3},
  // Gli strumenti
 {m:'Musica', cl:'3', a:'Gli strumenti', d:'difficile', q:'Il violoncello è uno strumento a:', ops:['fiato','percussione','tasti','corde'], r:3},
 {m:'Musica', cl:'3', a:'Gli strumenti', d:'difficile', q:'Il clarinetto è uno strumento a:', ops:['fiato','corde','percussione','tasti'], r:0},
 {m:'Musica', cl:'3', a:'Gli strumenti', d:'difficile', q:'Lo xilofono è uno strumento a:', ops:['tasti','percussione','corde','fiato'], r:1},
  // Il ritmo
 {m:'Musica', cl:'3', a:'Il ritmo', d:'difficile', q:'Il tempo di una musica può essere:', ops:['mai','veloce o lento','solo veloce','solo lento'], r:1},
  // Le famiglie di strumenti
 {m:'Musica', cl:'3', a:'Le famiglie di strumenti', d:'difficile', q:'Il violino appartiene alla famiglia:', ops:['dei fiati','delle percussioni','dei tasti','delle corde'], r:3},
 {m:'Musica', cl:'3', a:'Le famiglie di strumenti', d:'difficile', q:'La tromba appartiene alla famiglia:', ops:['dei fiati','delle corde','delle percussioni','dei tasti'], r:0},
 {m:'Musica', cl:'3', a:'Le famiglie di strumenti', d:'difficile', q:'Lo xilofono appartiene alla famiglia:', ops:['dei tasti','delle percussioni','delle corde','dei fiati'], r:1},
 ],

 /* ==================== CLASSE 3 - Religione Cattolica ==================== */
 '3R': [
  // ---- FACILE ----
  // La Bibbia
 {m:'Religione Cattolica', cl:'3', a:'La Bibbia', d:'facile', q:'La Bibbia ha due parti:', ops:['alto e basso','Antico e Nuovo Testamento','prima e seconda','inizio e fine'], r:1},
 {m:'Religione Cattolica', cl:'3', a:'La Bibbia', d:'facile', q:'L’Antico Testamento parla:', ops:['solo dei re','solo di guerre','del popolo di Israele','solo di Gesù'], r:2},
 {m:'Religione Cattolica', cl:'3', a:'La Bibbia', d:'facile', q:'Il Nuovo Testamento parla:', ops:['solo di Mosè','solo di Noè','solo di Adamo','di Gesù'], r:3},
  // I profeti
 {m:'Religione Cattolica', cl:'3', a:'I profeti', d:'facile', q:'I profeti annunciavano:', ops:['solo notizie','solo favole','solo ricette','la parola di Dio'], r:3},
 {m:'Religione Cattolica', cl:'3', a:'I profeti', d:'facile', q:'Un grande profeta fu:', ops:['Isaia','Cesare','Erode','Nerone'], r:0},
 {m:'Religione Cattolica', cl:'3', a:'I profeti', d:'facile', q:'I profeti invitavano:', ops:['alla bugia','alla giustizia','alla guerra','all’odio'], r:1},
  // Gesù
 {m:'Religione Cattolica', cl:'3', a:'Gesù', d:'facile', q:'Gesù predicava:', ops:['la guerra','la paura','l’amore','l’odio'], r:2},
 {m:'Religione Cattolica', cl:'3', a:'Gesù', d:'facile', q:'Gesù guariva:', ops:['solo i ricchi','nessuno','solo i re','i malati'], r:3},
  // I sacramenti
 {m:'Religione Cattolica', cl:'3', a:'I sacramenti', d:'facile', q:'Quanti sono i sacramenti?', ops:['sette','due','cento','cinque'], r:0},
 {m:'Religione Cattolica', cl:'3', a:'I sacramenti', d:'facile', q:'Con il battesimo si diventa:', ops:['soldati','cristiani','ricchi','famosi'], r:1},
  // Le feste cristiane
 {m:'Religione Cattolica', cl:'3', a:'Le feste cristiane', d:'facile', q:'Il Natale è la festa:', ops:['della nascita di Gesù','della risurrezione','di fine scuola','di compleanno'], r:0},
 {m:'Religione Cattolica', cl:'3', a:'Le feste cristiane', d:'facile', q:'La Pasqua è la festa:', ops:['dell’estate','della risurrezione','della nascita','di Natale'], r:1},
 {m:'Religione Cattolica', cl:'3', a:'Le feste cristiane', d:'facile', q:'L’Avvento è il tempo:', ops:['di fine scuola','di vacanza','di carnevale','di attesa del Natale'], r:3},
  // ---- MEDIO ----
  // La Bibbia
 {m:'Religione Cattolica', cl:'3', a:'La Bibbia', d:'medio', q:'I Vangeli sono:', ops:['quattro','due','sei','cento'], r:0},
 {m:'Religione Cattolica', cl:'3', a:'La Bibbia', d:'medio', q:'Noè costruì:', ops:['un castello','una nave spaziale','l’arca','una torre'], r:2},
  // I profeti
 {m:'Religione Cattolica', cl:'3', a:'I profeti', d:'medio', q:'Il profeta è:', ops:['un soldato','un mercante','chi parla a nome di Dio','un re'], r:2},
 {m:'Religione Cattolica', cl:'3', a:'I profeti', d:'medio', q:'Elia era un:', ops:['soldato','mercante','profeta','re'], r:2},
 {m:'Religione Cattolica', cl:'3', a:'I profeti', d:'medio', q:'I profeti parlavano:', ops:['solo ai re','solo ai ricchi','a nessuno','al popolo'], r:3},
 {m:'Religione Cattolica', cl:'3', a:'I profeti', d:'medio', q:'Il profeta Geremia invitava:', ops:['a tornare a Dio','a scappare','a rubare','a mentire'], r:0},
  // Gesù
 {m:'Religione Cattolica', cl:'3', a:'Gesù', d:'medio', q:'Le parabole sono:', ops:['racconti con insegnamento','favole senza senso','ricette','numeri'], r:0},
 {m:'Religione Cattolica', cl:'3', a:'Gesù', d:'medio', q:'Gli apostoli erano:', ops:['cinque','dodici','due','cento'], r:1},
  // I sacramenti
 {m:'Religione Cattolica', cl:'3', a:'I sacramenti', d:'medio', q:'I sacramenti sono:', ops:['feste','regali','segni dell’amore di Dio','giochi'], r:2},
 {m:'Religione Cattolica', cl:'3', a:'I sacramenti', d:'medio', q:'Il primo sacramento è:', ops:['la comunione','la cresima','il matrimonio','il battesimo'], r:3},
 {m:'Religione Cattolica', cl:'3', a:'I sacramenti', d:'medio', q:'L’eucaristia è:', ops:['una festa','un regalo','la comunione','un gioco'], r:2},
 {m:'Religione Cattolica', cl:'3', a:'I sacramenti', d:'medio', q:'La cresima conferma:', ops:['un gioco','una gara','un premio','la fede'], r:3},
 {m:'Religione Cattolica', cl:'3', a:'I sacramenti', d:'medio', q:'Il battesimo si riceve:', ops:['con l’acqua','con il fuoco','con la sabbia','con il colore'], r:0},
  // Le feste cristiane
 {m:'Religione Cattolica', cl:'3', a:'Le feste cristiane', d:'medio', q:'La domenica per i cristiani è:', ops:['solo per dormire','solo per giocare','il giorno del Signore','un giorno qualunque'], r:2},
 {m:'Religione Cattolica', cl:'3', a:'Le feste cristiane', d:'medio', q:'La Quaresima dura:', ops:['quaranta giorni','un giorno','un anno','un mese'], r:0},
 {m:'Religione Cattolica', cl:'3', a:'Le feste cristiane', d:'medio', q:'La Pentecoste ricorda:', ops:['il Carnevale','la discesa dello Spirito Santo','il Natale','la Pasqua'], r:1},
 {m:'Religione Cattolica', cl:'3', a:'Le feste cristiane', d:'medio', q:'L’Epifania ricorda:', ops:['la Pasqua','la Quaresima','la visita dei Magi','la nascita di Gesù'], r:2},
  // ---- DIFFICILE ----
  // La Bibbia
 {m:'Religione Cattolica', cl:'3', a:'La Bibbia', d:'difficile', q:'Mosè guidò il popolo:', ops:['verso l’Egitto','verso Roma','verso Babilonia','fuori dall’Egitto'], r:3},
 {m:'Religione Cattolica', cl:'3', a:'La Bibbia', d:'difficile', q:'I Dieci Comandamenti li ricevette:', ops:['Mosè','Noè','Abramo','Davide'], r:0},
 {m:'Religione Cattolica', cl:'3', a:'La Bibbia', d:'difficile', q:'La Bibbia ci insegna:', ops:['a sprecare','ad amare Dio e il prossimo','a odiare','a litigare'], r:1},
  // I profeti
 {m:'Religione Cattolica', cl:'3', a:'I profeti', d:'difficile', q:'I profeti preparavano:', ops:['una gara','la venuta di Gesù','una guerra','una festa'], r:1},
 {m:'Religione Cattolica', cl:'3', a:'I profeti', d:'difficile', q:'Il profeta che visse nel deserto fu:', ops:['Erode','Davide','Giovanni Battista','Cesare'], r:2},
 {m:'Religione Cattolica', cl:'3', a:'I profeti', d:'difficile', q:'I profeti ci ricordano di essere:', ops:['cattivi','egoisti','bugiardi','giusti e buoni'], r:3},
  // Gesù
 {m:'Religione Cattolica', cl:'3', a:'Gesù', d:'difficile', q:'La parabola del buon samaritano insegna:', ops:['a passare oltre','a litigare','a scappare','ad aiutare chi è nel bisogno'], r:3},
 {m:'Religione Cattolica', cl:'3', a:'Gesù', d:'difficile', q:'Gesù è il nostro:', ops:['avversario','salvatore','nemico','giudice cattivo'], r:1},
  // I sacramenti
 {m:'Religione Cattolica', cl:'3', a:'I sacramenti', d:'difficile', q:'La confessione serve per:', ops:['dormire','chiedere perdono','ricevere un premio','giocare'], r:1},
 {m:'Religione Cattolica', cl:'3', a:'I sacramenti', d:'difficile', q:'Il matrimonio unisce:', ops:['due squadre','due scuole','due sposi','due amici'], r:2},
 {m:'Religione Cattolica', cl:'3', a:'I sacramenti', d:'difficile', q:'I sacramenti ci danno:', ops:['solo regali','solo premi','solo feste','la grazia di Dio'], r:3},
  // Le feste cristiane
 {m:'Religione Cattolica', cl:'3', a:'Le feste cristiane', d:'difficile', q:'Il Natale si prepara con:', ops:['la Quaresima','la Pentecoste','il Carnevale','l’Avvento'], r:3},
 {m:'Religione Cattolica', cl:'3', a:'Le feste cristiane', d:'difficile', q:'Le feste cristiane sono momenti di:', ops:['preghiera e gioia','solo regali','solo cibo','solo riposo'], r:0},
 {m:'Religione Cattolica', cl:'3', a:'Le feste cristiane', d:'difficile', q:'La Pasqua si prepara con:', ops:['l’estate','la Quaresima','l’Avvento','il Carnevale'], r:1},
 ],

 /* ==================== CLASSE 3 - Scienze ==================== */
 '3S': [
  // ---- FACILE ----
  // La materia
 {m:'Scienze', cl:'3', a:'La materia', d:'facile', q:'La materia è tutto ciò che:', ops:['occupa spazio','non esiste','è invisibile','è solo aria'], r:0},
  // Il ciclo dell’acqua
 {m:'Scienze', cl:'3', a:'Il ciclo dell’acqua', d:'facile', q:'Il sole fa:', ops:['fermare l’acqua','sparire l’acqua','evaporare l’acqua','congelare l’acqua'], r:2},
 {m:'Scienze', cl:'3', a:'Il ciclo dell’acqua', d:'facile', q:'Le nuvole sono formate da:', ops:['sabbia','ferro','zucchero','goccioline d’acqua'], r:3},
 {m:'Scienze', cl:'3', a:'Il ciclo dell’acqua', d:'facile', q:'La pioggia è acqua che:', ops:['cade dalle nuvole','sale dal mare','non esiste','è sempre calda'], r:0},
 {m:'Scienze', cl:'3', a:'Il ciclo dell’acqua', d:'facile', q:'La neve è acqua:', ops:['colorata','solida','liquida','gassosa'], r:1},
  // Le stagioni
 {m:'Scienze', cl:'3', a:'Le stagioni', d:'facile', q:'Quante stagioni ci sono in un anno?', ops:['quattro','due','sei','otto'], r:0},
 {m:'Scienze', cl:'3', a:'Le stagioni', d:'facile', q:'In autunno le foglie:', ops:['sbocciano','diventano verdi per sempre','non cambiano','cadono'], r:3},
  // Gli ecosistemi
 {m:'Scienze', cl:'3', a:'Gli ecosistemi', d:'facile', q:'Un bosco è un:', ops:['colore','strumento','ecosistema','giocattolo'], r:2},
 {m:'Scienze', cl:'3', a:'Gli ecosistemi', d:'facile', q:'La foresta è ricca di:', ops:['alberi','sabbia','ferro','vetro'], r:0},
 {m:'Scienze', cl:'3', a:'Gli ecosistemi', d:'facile', q:'Nel deserto piove:', ops:['due volte al giorno','pochissimo','sempre','ogni giorno'], r:1},
  // La raccolta differenziata
 {m:'Scienze', cl:'3', a:'La raccolta differenziata', d:'facile', q:'La plastica va gettata:', ops:['nel contenitore del vetro','per terra','nel fiume','nel contenitore della plastica'], r:3},
  // ---- MEDIO ----
  // La materia
 {m:'Scienze', cl:'3', a:'La materia', d:'medio', q:'I tre stati della materia sono:', ops:['rosso, verde e blu','solido, liquido e gassoso','caldo, freddo e tiepido','grande, medio e piccolo'], r:1},
 {m:'Scienze', cl:'3', a:'La materia', d:'medio', q:'Un sasso è:', ops:['gassoso','volatile','solido','liquido'], r:2},
 {m:'Scienze', cl:'3', a:'La materia', d:'medio', q:'Il succo d’arancia è:', ops:['solido','gassoso','rigido','liquido'], r:3},
 {m:'Scienze', cl:'3', a:'La materia', d:'medio', q:'L’acqua diventa ghiaccio quando:', ops:['si raffredda','si scalda','si colora','si agita'], r:0},
 {m:'Scienze', cl:'3', a:'La materia', d:'medio', q:'La fusione è il passaggio da:', ops:['gas a solido','solido a liquido','liquido a solido','liquido a gas'], r:1},
 {m:'Scienze', cl:'3', a:'La materia', d:'medio', q:'L’evaporazione è il passaggio da:', ops:['solido a liquido','solido a gas','liquido a gas','gas a liquido'], r:2},
 {m:'Scienze', cl:'3', a:'La materia', d:'medio', q:'Il ferro allo stato normale è:', ops:['solido','liquido','gassoso','morbido come la neve'], r:0},
  // Il ciclo dell’acqua
 {m:'Scienze', cl:'3', a:'Il ciclo dell’acqua', d:'medio', q:'Il vapore acqueo sale:', ops:['solo di notte','solo d’inverno','verso il cielo','verso il centro della Terra'], r:2},
 {m:'Scienze', cl:'3', a:'Il ciclo dell’acqua', d:'medio', q:'Quando il vapore si raffredda in cielo forma:', ops:['i sassi','il ferro','i fiumi','le nuvole'], r:3},
 {m:'Scienze', cl:'3', a:'Il ciclo dell’acqua', d:'medio', q:'La grandine è acqua:', ops:['ghiacciata','liquida','evaporata','scomparsa'], r:0},
 {m:'Scienze', cl:'3', a:'Il ciclo dell’acqua', d:'medio', q:'Il ciclo dell’acqua non finisce mai perché:', ops:['il sole si spegne','il mare si svuota','l’acqua si ricicla','l’acqua sparisce'], r:2},
  // Le stagioni
 {m:'Scienze', cl:'3', a:'Le stagioni', d:'medio', q:'La stagione più fredda è:', ops:['l’autunno','l’inverno','l’estate','la primavera'], r:1},
 {m:'Scienze', cl:'3', a:'Le stagioni', d:'medio', q:'La stagione più calda è:', ops:['l’autunno','la primavera','l’estate','l’inverno'], r:2},
 {m:'Scienze', cl:'3', a:'Le stagioni', d:'medio', q:'In primavera le piante:', ops:['fioriscono','perdono tutte le foglie','si congelano','spariscono'], r:0},
 {m:'Scienze', cl:'3', a:'Le stagioni', d:'medio', q:'Le stagioni cambiano perché:', ops:['le nuvole cambiano colore','la Terra gira intorno al sole','il sole si spegne','la luna balla'], r:1},
 {m:'Scienze', cl:'3', a:'Le stagioni', d:'medio', q:'In estate le giornate sono:', ops:['uguali','inesistenti','più lunghe','più corte'], r:2},
 {m:'Scienze', cl:'3', a:'Le stagioni', d:'medio', q:'In inverno le giornate sono:', ops:['più lunghe','uguali','sempre buie','più corte'], r:3},
  // Gli ecosistemi
 {m:'Scienze', cl:'3', a:'Gli ecosistemi', d:'medio', q:'Gli animali che vivono in un bosco sono:', ops:['cammelli','pinguini','scoiattoli e volpi','balene e delfini'], r:2},
 {m:'Scienze', cl:'3', a:'Gli ecosistemi', d:'medio', q:'Il prato è un ambiente:', ops:['roccioso','ghiacciato','sabbioso','erboso'], r:3},
 {m:'Scienze', cl:'3', a:'Gli ecosistemi', d:'medio', q:'Gli animali della savana sono ad esempio:', ops:['leoni ed elefanti','orsi polari','pinguini','balene'], r:0},
 {m:'Scienze', cl:'3', a:'Gli ecosistemi', d:'medio', q:'Un ecosistema è formato da:', ops:['solo vento','viventi e ambiente','solo sassi','solo acqua'], r:1},
  // ---- DIFFICILE ----
  // La materia
 {m:'Scienze', cl:'3', a:'La materia', d:'difficile', q:'La condensazione è il passaggio da:', ops:['liquido a gas','solido a gas','gas a solido','gas a liquido'], r:3},
 {m:'Scienze', cl:'3', a:'La materia', d:'difficile', q:'Per misurare la massa di un oggetto si usa:', ops:['l’orologio','la bilancia','il termometro','il metro'], r:1},
  // Il ciclo dell’acqua
 {m:'Scienze', cl:'3', a:'Il ciclo dell’acqua', d:'difficile', q:'L’acqua dei fiumi arriva al:', ops:['polo nord','mare','deserto','vulcano'], r:1},
 {m:'Scienze', cl:'3', a:'Il ciclo dell’acqua', d:'difficile', q:'Dopo la pioggia, l’acqua penetra:', ops:['nel ferro','nel vetro','nella plastica','nel terreno'], r:3},
  // Le stagioni
 {m:'Scienze', cl:'3', a:'Le stagioni', d:'difficile', q:'L’equinozio è il giorno in cui:', ops:['giorno e notte durano uguale','nevica sempre','fa sempre caldo','non c’è il sole'], r:0},
 {m:'Scienze', cl:'3', a:'Le stagioni', d:'difficile', q:'In Italia, a dicembre inizia:', ops:['l’autunno','l’inverno','l’estate','la primavera'], r:1},
  // Gli ecosistemi
 {m:'Scienze', cl:'3', a:'Gli ecosistemi', d:'difficile', q:'Se in un bosco sparisce un albero, molti animali:', ops:['non se ne accorgono','volano via','possono perdere la casa','stanno meglio'], r:2},
 {m:'Scienze', cl:'3', a:'Gli ecosistemi', d:'difficile', q:'Lo stagno è un ambiente:', ops:['desertico','ghiacciato tutto l’anno','fatto di sabbia','umido e ricco d’acqua'], r:3},
 ],

 /* ==================== CLASSE 3 - Storia ==================== */
 '3ST': [
  // ---- FACILE ----
  // La preistoria
 {m:'Storia', cl:'3', a:'La preistoria', d:'facile', q:'I primi uomini vivevano:', ops:['di internet','di supermercato','di agricoltura meccanica','di caccia e raccolta'], r:3},
  // Il Paleolitico
 {m:'Storia', cl:'3', a:'Il Paleolitico', d:'facile', q:'Il fuoco serviva per:', ops:['scaldarsi e cucinare','volare','nuotare','scrivere'], r:0},
 {m:'Storia', cl:'3', a:'Il Paleolitico', d:'facile', q:'I primi uomini vivevano in:', ops:['case moderne','caverne','palazzi','grattacieli'], r:1},
  // Il Neolitico
 {m:'Storia', cl:'3', a:'Il Neolitico', d:'facile', q:'L’agricoltura è la coltivazione di:', ops:['vetro','piante','pietre','ferro'], r:1},
 {m:'Storia', cl:'3', a:'Il Neolitico', d:'facile', q:'Con l’agricoltura gli uomini diventarono:', ops:['nomadi','volanti','invisibili','sedentari'], r:3},
  // Le civiltà dei fiumi
 {m:'Storia', cl:'3', a:'Le civiltà dei fiumi', d:'facile', q:'Le prime civiltà nacquero vicino:', ops:['ai mari ghiacciati','alle autostrade','ai fiumi','ai computer'], r:2},
 {m:'Storia', cl:'3', a:'Le civiltà dei fiumi', d:'facile', q:'I fiumi rendevano la terra:', ops:['fertile','secca','ghiacciata','sabbiosa'], r:0},
 {m:'Storia', cl:'3', a:'Le civiltà dei fiumi', d:'facile', q:'L’acqua dei fiumi serviva per:', ops:['giocare','irrigare i campi','volare','scrivere'], r:1},
  // Gli Egizi
 {m:'Storia', cl:'3', a:'Gli Egizi', d:'facile', q:'Gli Egizi vivevano lungo il fiume:', ops:['Nilo','Po','Tevere','Reno'], r:0},
 {m:'Storia', cl:'3', a:'Gli Egizi', d:'facile', q:'Il faraone era:', ops:['un pescatore','il re d’Egitto','un contadino','un soldato'], r:1},
 {m:'Storia', cl:'3', a:'Gli Egizi', d:'facile', q:'Gli Egizi costruivano:', ops:['le auto','le navi spaziali','le piramidi','i computer'], r:2},
 {m:'Storia', cl:'3', a:'Gli Egizi', d:'facile', q:'Le piramidi servivano da:', ops:['case','scuole','negozi','tombe'], r:3},
  // ---- MEDIO ----
  // La preistoria
 {m:'Storia', cl:'3', a:'La preistoria', d:'medio', q:'La preistoria è il periodo:', ops:['prima della scrittura','dopo la scrittura','del futuro','di internet'], r:0},
 {m:'Storia', cl:'3', a:'La preistoria', d:'medio', q:'La preistoria inizia con:', ops:['il telefono','la comparsa dell’uomo','la scrittura','il computer'], r:1},
 {m:'Storia', cl:'3', a:'La preistoria', d:'medio', q:'La preistoria finisce con:', ops:['la ruota','il computer','l’invenzione della scrittura','la scoperta del fuoco'], r:2},
 {m:'Storia', cl:'3', a:'La preistoria', d:'medio', q:'La pietra era usata per:', ops:['fare utensili','volare','nuotare','scrivere'], r:0},
 {m:'Storia', cl:'3', a:'La preistoria', d:'medio', q:'Il fuoco fu scoperto nella:', ops:['età contemporanea','preistoria','antichità','età moderna'], r:1},
 {m:'Storia', cl:'3', a:'La preistoria', d:'medio', q:'La preistoria si divide in:', ops:['antica e moderna','greca e romana','Paleolitico e Neolitico','Medioevo e Rinascimento'], r:2},
  // Il Paleolitico
 {m:'Storia', cl:'3', a:'Il Paleolitico', d:'medio', q:'Nel Paleolitico gli uomini usavano utensili di:', ops:['plastica','vetro','pietra','ferro'], r:2},
 {m:'Storia', cl:'3', a:'Il Paleolitico', d:'medio', q:'Gli uomini del Paleolitico erano soprattutto:', ops:['contadini','allevatori','cuochi','cacciatori'], r:3},
 {m:'Storia', cl:'3', a:'Il Paleolitico', d:'medio', q:'Nel Paleolitico gli uomini erano:', ops:['cittadini','contadini fissi','nomadi','sedentari'], r:2},
 {m:'Storia', cl:'3', a:'Il Paleolitico', d:'medio', q:'La caccia serviva per:', ops:['giocare','volare','dormire','procurarsi il cibo'], r:3},
 {m:'Storia', cl:'3', a:'Il Paleolitico', d:'medio', q:'Le pitture rupestri si trovano:', ops:['sulle pareti delle grotte','sui computer','sui libri','sui muri delle città'], r:0},
 {m:'Storia', cl:'3', a:'Il Paleolitico', d:'medio', q:'"Paleolitico" significa:', ops:['età del ferro','età del bronzo','età della pietra antica','età della pietra nuova'], r:2},
 {m:'Storia', cl:'3', a:'Il Paleolitico', d:'medio', q:'Gli uomini del Paleolitico si vestivano con:', ops:['tessuti sintetici','jeans','magliette','pelli di animali'], r:3},
  // Il Neolitico
 {m:'Storia', cl:'3', a:'Il Neolitico', d:'medio', q:'Nel Neolitico gli uomini iniziarono a:', ops:['coltivare la terra','usare il computer','volare','navigare in internet'], r:0},
 {m:'Storia', cl:'3', a:'Il Neolitico', d:'medio', q:'Nel Neolitico gli uomini allevavano:', ops:['macchine','robot','animali','computer'], r:2},
 {m:'Storia', cl:'3', a:'Il Neolitico', d:'medio', q:'"Neolitico" significa:', ops:['età della pietra nuova','età della pietra antica','età del ferro','età moderna'], r:0},
 {m:'Storia', cl:'3', a:'Il Neolitico', d:'medio', q:'I primi villaggi nacquero nel:', ops:['Rinascimento','Neolitico','Paleolitico','Medioevo'], r:1},
 {m:'Storia', cl:'3', a:'Il Neolitico', d:'medio', q:'La ceramica serviva per:', ops:['scrivere al computer','guidare','conservare il cibo','volare'], r:2},
 {m:'Storia', cl:'3', a:'Il Neolitico', d:'medio', q:'Nel Neolitico si iniziò a:', ops:['usare il computer','stampare','viaggiare in aereo','tessere e fare vasi'], r:3},
 {m:'Storia', cl:'3', a:'Il Neolitico', d:'medio', q:'I villaggi del Neolitico erano vicini:', ops:['ai computer','ai fiumi e ai campi','agli aeroporti','alle autostrade'], r:1},
  // Le civiltà dei fiumi
 {m:'Storia', cl:'3', a:'Le civiltà dei fiumi', d:'medio', q:'Il fiume più importante per l’Egitto è:', ops:['il Po','il Tevere','il Danubio','il Nilo'], r:3},
 {m:'Storia', cl:'3', a:'Le civiltà dei fiumi', d:'medio', q:'La Mesopotamia era tra i fiumi:', ops:['Nilo e Danubio','Reno e Senna','Tigri ed Eufrate','Po e Tevere'], r:2},
 {m:'Storia', cl:'3', a:'Le civiltà dei fiumi', d:'medio', q:'La scrittura nacque nelle civiltà:', ops:['del Medioevo','del Rinascimento','moderne','dei fiumi'], r:3},
 {m:'Storia', cl:'3', a:'Le civiltà dei fiumi', d:'medio', q:'Le civiltà dei fiumi costruivano:', ops:['canali e dighe','computer','aerei','auto'], r:0},
  // Gli Egizi
 {m:'Storia', cl:'3', a:'Gli Egizi', d:'medio', q:'La scrittura degli Egizi si chiamava:', ops:['geroglifici','alfabeto','cuneiforme','stampatello'], r:0},
 {m:'Storia', cl:'3', a:'Gli Egizi', d:'medio', q:'Gli Egizi scrivevano su:', ops:['vetro','papiro','carta','computer'], r:1},
 {m:'Storia', cl:'3', a:'Gli Egizi', d:'medio', q:'Il Nilo ogni anno:', ops:['spariva','si trasformava in deserto','inondava e rendeva fertile la terra','ghiacciava'], r:2},
  // ---- DIFFICILE ----
  // La preistoria
 {m:'Storia', cl:'3', a:'La preistoria', d:'difficile', q:'La ruota fu inventata nella:', ops:['età moderna','Rinascimento','contemporanea','preistoria'], r:3},
 {m:'Storia', cl:'3', a:'La preistoria', d:'difficile', q:'I primi uomini erano:', ops:['nomadi','sedentari','contadini fissi','cittadini'], r:0},
 {m:'Storia', cl:'3', a:'La preistoria', d:'difficile', q:'La scrittura nacque circa:', ops:['50000 anni fa','5000 anni fa','500 anni fa','50 anni fa'], r:1},
  // Il Paleolitico
 {m:'Storia', cl:'3', a:'Il Paleolitico', d:'difficile', q:'Le pitture rupestri raffiguravano soprattutto:', ops:['telefoni','animali','automobili','computer'], r:1},
  // Il Neolitico
 {m:'Storia', cl:'3', a:'Il Neolitico', d:'difficile', q:'L’allevamento forniva:', ops:['latte, carne e lana','solo plastica','solo vetro','solo carta'], r:0},
  // Le civiltà dei fiumi
 {m:'Storia', cl:'3', a:'Le civiltà dei fiumi', d:'difficile', q:'La prima scrittura si chiamava:', ops:['corsivo','cuneiforme','alfabeto','stampatello'], r:1},
 {m:'Storia', cl:'3', a:'Le civiltà dei fiumi', d:'difficile', q:'Le civiltà dei fiumi avevano:', ops:['solo computer','solo aerei','città e templi','solo caverne'], r:2},
 {m:'Storia', cl:'3', a:'Le civiltà dei fiumi', d:'difficile', q:'I fiumi permettevano anche:', ops:['di volare','di usare internet','di stampare','il commercio e il trasporto'], r:3},
  // Gli Egizi
 {m:'Storia', cl:'3', a:'Gli Egizi', d:'difficile', q:'Gli Egizi credevano:', ops:['nelle automobili','nei computer','negli aerei','nella vita dopo la morte'], r:3},
 {m:'Storia', cl:'3', a:'Gli Egizi', d:'difficile', q:'La sfinge ha il corpo di:', ops:['leone','cavallo','pesce','uccello'], r:0},
 {m:'Storia', cl:'3', a:'Gli Egizi', d:'difficile', q:'Gli Egizi adoravano:', ops:['solo la pioggia','molti dei','un solo dio computer','nessun dio'], r:1},
 ],

 /* ==================== CLASSE 3 - Tecnologia e Informatica ==================== */
 '3TI': [
  // ---- FACILE ----
  // Internet
 {m:'Tecnologia e Informatica', cl:'3', a:'Internet', d:'facile', q:'Internet serve per:', ops:['solo dormire','solo correre','solo mangiare','cercare informazioni'], r:3},
 {m:'Tecnologia e Informatica', cl:'3', a:'Internet', d:'facile', q:'Per navigare in internet serve:', ops:['un computer o tablet','un libro','una palla','un cucchiaio'], r:0},
  // Le macchine
 {m:'Tecnologia e Informatica', cl:'3', a:'Le macchine', d:'facile', q:'La bicicletta è una macchina:', ops:['che canta','che si muove','che dorme','che mangia'], r:1},
 {m:'Tecnologia e Informatica', cl:'3', a:'Le macchine', d:'facile', q:'La lavatrice serve per:', ops:['dormire','correre','lavare i panni','cucinare'], r:2},
 {m:'Tecnologia e Informatica', cl:'3', a:'Le macchine', d:'facile', q:'L’automobile serve per:', ops:['dormire','mangiare','cantare','trasportare'], r:3},
  // ---- MEDIO ----
  // La sicurezza online
 {m:'Tecnologia e Informatica', cl:'3', a:'La sicurezza online', d:'medio', q:'Una password sicura è:', ops:['facile','1234','il proprio nome','segreta e difficile'], r:3},
 {m:'Tecnologia e Informatica', cl:'3', a:'La sicurezza online', d:'medio', q:'Il cyberbullismo è:', ops:['un gioco','una festa','un regalo','un atto violento online'], r:3},
  // I materiali
 {m:'Tecnologia e Informatica', cl:'3', a:'I materiali', d:'medio', q:'La gomma è:', ops:['trasparente','liquida','elastica','dura come il ferro'], r:2},
  // Il computer
 {m:'Tecnologia e Informatica', cl:'3', a:'Il computer', d:'medio', q:'Il computer ha bisogno:', ops:['di elettricità','di benzina','di acqua','di sabbia'], r:0},
 {m:'Tecnologia e Informatica', cl:'3', a:'Il computer', d:'medio', q:'Il computer va spento:', ops:['colpendolo','correttamente','staccando la spina','buttandolo'], r:1},
 {m:'Tecnologia e Informatica', cl:'3', a:'Il computer', d:'medio', q:'Il processore è:', ops:['il cervello del computer','un gioco','un colore','un suono'], r:0},
  // Internet
 {m:'Tecnologia e Informatica', cl:'3', a:'Internet', d:'medio', q:'Internet è:', ops:['un cibo','un colore','una rete mondiale','un gioco'], r:2},
 {m:'Tecnologia e Informatica', cl:'3', a:'Internet', d:'medio', q:'Un sito web è:', ops:['un cibo','una pagina su internet','un libro','un gioco'], r:1},
 {m:'Tecnologia e Informatica', cl:'3', a:'Internet', d:'medio', q:'Il motore di ricerca serve per:', ops:['mangiare','correre','trovare informazioni','dormire'], r:2},
 {m:'Tecnologia e Informatica', cl:'3', a:'Internet', d:'medio', q:'La posta elettronica serve per:', ops:['dormire','mangiare','correre','inviare messaggi'], r:3},
 {m:'Tecnologia e Informatica', cl:'3', a:'Internet', d:'medio', q:'Su internet si può:', ops:['imparare e comunicare','solo dormire','solo correre','solo mangiare'], r:0},
  // Le macchine
 {m:'Tecnologia e Informatica', cl:'3', a:'Le macchine', d:'medio', q:'Una macchina è:', ops:['un oggetto che aiuta a lavorare','un colore','un suono','un profumo'], r:0},
 {m:'Tecnologia e Informatica', cl:'3', a:'Le macchine', d:'medio', q:'Le macchine ci aiutano a:', ops:['fare meno fatica','fare più fatica','dormire','annoiarci'], r:0},
 {m:'Tecnologia e Informatica', cl:'3', a:'Le macchine', d:'medio', q:'Il trattore serve in:', ops:['palestra','agricoltura','scuola','cucina'], r:1},
 {m:'Tecnologia e Informatica', cl:'3', a:'Le macchine', d:'medio', q:'Le macchine vanno usate:', ops:['senza cura','rompendole','con attenzione','con violenza'], r:2},
  // ---- DIFFICILE ----
  // Il computer
 {m:'Tecnologia e Informatica', cl:'3', a:'Il computer', d:'difficile', q:'La memoria del computer serve per:', ops:['dormire','mangiare','correre','salvare i dati'], r:3},
  // Internet
 {m:'Tecnologia e Informatica', cl:'3', a:'Internet', d:'difficile', q:'Il browser serve per:', ops:['stampare','navigare su internet','scrivere','disegnare'], r:1},
 {m:'Tecnologia e Informatica', cl:'3', a:'Internet', d:'difficile', q:'Internet collega:', ops:['solo una casa','nulla','computer di tutto il mondo','solo una scuola'], r:2},
  // Le macchine
 {m:'Tecnologia e Informatica', cl:'3', a:'Le macchine', d:'difficile', q:'Le macchine funzionano:', ops:['con la sabbia','con il silenzio','con il buio','con energia'], r:3},
 {m:'Tecnologia e Informatica', cl:'3', a:'Le macchine', d:'difficile', q:'La tecnologia ha creato:', ops:['molte macchine utili','solo giochi','solo colori','nulla'], r:0},
 {m:'Tecnologia e Informatica', cl:'3', a:'Le macchine', d:'difficile', q:'Le macchine semplici sono ad esempio:', ops:['la tv','la leva e la ruota','il computer','il telefono'], r:1},
 ],

 /* ==================== CLASSE 4 - Italiano ==================== */
 '4': [
  // ---- FACILE ----
  // Complementi
 {m:'Italiano', cl:'4', a:'Complementi', d:'facile', q:'In "Leggo un libro", "un libro" è:', ops:['avverbio','soggetto','complemento oggetto','verbo'], r:2},
  // Punteggiatura
 {m:'Italiano', cl:'4', a:'Punteggiatura', d:'facile', q:'Quale segno si mette alla FINE di una frase?', ops:['i due punti','la tilde','la virgola','il punto'], r:3},
 {m:'Italiano', cl:'4', a:'Punteggiatura', d:'facile', q:'Quale segno si usa per fare una DOMANDA?', ops:['il punto interrogativo','la virgola','il punto e virgola','il punto esclamativo'], r:0},
  // ---- MEDIO ----
  // Complementi
 {m:'Italiano', cl:'4', a:'Complementi', d:'medio', q:'In "Studio con Luca", "con Luca" è:', ops:['nome proprio','complemento di compagnia','soggetto','verbo'], r:1},
 {m:'Italiano', cl:'4', a:'Complementi', d:'medio', q:'In "Sono stanco", la parola "stanco" fa parte del:', ops:['predicato nominale','complemento oggetto','soggetto','avverbio'], r:0},
 {m:'Italiano', cl:'4', a:'Complementi', d:'medio', q:'In "Mangio una mela", chi compie l’azione?', ops:['nessuno','la mela','io (il soggetto è implicito)','il verbo'], r:2},
  // Punteggiatura
 {m:'Italiano', cl:'4', a:'Punteggiatura', d:'medio', q:'Il punto ESCLAMATIVO (!) esprime:', ops:['noia','sorpresa o emozione forte','dubbio','silenzio'], r:1},
 {m:'Italiano', cl:'4', a:'Punteggiatura', d:'medio', q:'I DUE PUNTI (:) si usano per:', ops:['chiedere il tono','separare gli elenchi e annunciare qualcosa','fare le domande','finire le frasi'], r:1},
 {m:'Italiano', cl:'4', a:'Punteggiatura', d:'medio', q:'La VIRGOLA serve per:', ops:['fare domande','urlare','separare elementi di un elenco','finire la frase'], r:2},
 {m:'Italiano', cl:'4', a:'Punteggiatura', d:'medio', q:'Le virgolette (" ") si usano per:', ops:['finire la frase','fare una pausa lunga','chiudere un capitolo','citare le parole di qualcuno o un titolo'], r:3},
 {m:'Italiano', cl:'4', a:'Punteggiatura', d:'medio', q:'I puntini di sospensione (...) indicano:', ops:['una pausa o un pensiero non finito','una parola sbagliata','un elenco','una firma'], r:0},
 {m:'Italiano', cl:'4', a:'Punteggiatura', d:'medio', q:'Quale frase è punteggiata bene?', ops:['Primamangio, postudio.','Prima, mangio poi, studio.','Prima mangio, poi studio.','Prima mangio poi studio'], r:2},
 {m:'Italiano', cl:'4', a:'Punteggiatura', d:'medio', q:'Il punto e virgola (;) serve per:', ops:['esclamare','nascondere parole','separare due frasi collegate ma più lunghe della virgola','fare una domanda'], r:2},
 {m:'Italiano', cl:'4', a:'Punteggiatura', d:'medio', q:'La MAIUSCOLA si usa:', ops:['in ogni parola','solo nei numeri','mai','all’inizio della frase e nei nomi propri'], r:3},
  // Sinonimi e contrari
 {m:'Italiano', cl:'4', a:'Sinonimi e contrari', d:'medio', q:'Un SINONIMO è una parola con:', ops:['significato simile','significato contrario','scrittura uguale','suono forte'], r:0},
 {m:'Italiano', cl:'4', a:'Sinonimi e contrari', d:'medio', q:'Un CONTRARIO è una parola con:', ops:['lo stesso articolo','significato simile','significato opposto','la stessa sillaba'], r:2},
 {m:'Italiano', cl:'4', a:'Sinonimi e contrari', d:'medio', q:'Qual è un sinonimo di "felice"?', ops:['arrabbiato','stanco','contento','triste'], r:2},
 {m:'Italiano', cl:'4', a:'Sinonimi e contrari', d:'medio', q:'Qual è il contrario di "alto"?', ops:['basso','lungo','pesante','grande'], r:0},
 {m:'Italiano', cl:'4', a:'Sinonimi e contrari', d:'medio', q:'Qual è un sinonimo di "veloce"?', ops:['rapido','lento','pesante','forte'], r:0},
 {m:'Italiano', cl:'4', a:'Sinonimi e contrari', d:'medio', q:'Qual è il contrario di "vicino"?', ops:['sopra','accanto','lontano','dentro'], r:2},
 {m:'Italiano', cl:'4', a:'Sinonimi e contrari', d:'medio', q:'Qual è un sinonimo di "casa"?', ops:['scuola','macchina','abitazione','strada'], r:2},
 {m:'Italiano', cl:'4', a:'Sinonimi e contrari', d:'medio', q:'Qual è il contrario di "pieno"?', ops:['vuoto','pesante','bagnato','grosso'], r:0},
 {m:'Italiano', cl:'4', a:'Sinonimi e contrari', d:'medio', q:'Qual è il contrario di "sopra"?', ops:['dietro','sotto','accanto','dentro'], r:1},
 {m:'Italiano', cl:'4', a:'Sinonimi e contrari', d:'medio', q:'Qual è il contrario di "imparare"?', ops:['leggere','studiare','dimenticare','ripetere'], r:2},
 {m:'Italiano', cl:'4', a:'Sinonimi e contrari', d:'medio', q:'Qual è un sinonimo di "impaurito"?', ops:['arrabbiato','sorridente','spaventato','coraggioso'], r:2},
 {m:'Italiano', cl:'4', a:'Sinonimi e contrari', d:'medio', q:'Qual è il contrario di "genuflesso"?', ops:['seduto','coricato','in corsa','in piedi'], r:3},
  // Ortografia
 {m:'Italiano', cl:'4', a:'Ortografia', d:'medio', q:'Come si scrive correttamente "canzone"?', ops:['canzone','canzoné','cansonè','canzonne'], r:0},
 {m:'Italiano', cl:'4', a:'Ortografia', d:'medio', q:'Come si scrive correttamente "bicicletta"?', ops:['biciclettae','biciclletta','bicicletta','bycicletta'], r:2},
 {m:'Italiano', cl:'4', a:'Ortografia', d:'medio', q:'Quale parola è scritta in modo SBAGLIATO?', ops:['scoolastica','famiglia','quaderno','pericolo'], r:0},
 {m:'Italiano', cl:'4', a:'Ortografia', d:'medio', q:'Qual è il FEMMINILE di "zio"?', ops:['zia','ziaa','zietto','ziona'], r:0},
 {m:'Italiano', cl:'4', a:'Ortografia', d:'medio', q:'Come si scrive correttamente "psicologo"?', ops:['psichologo','psicologo','sisicologo','pisicologo'], r:1},
 {m:'Italiano', cl:'4', a:'Ortografia', d:'medio', q:'Come si scrive correttamente "ginocchia"?', ops:['ginnocchia','chinocchia','ginocchia','ghinocchio'], r:2},
 {m:'Italiano', cl:'4', a:'Ortografia', d:'medio', q:'Come si scrive correttamente "accettare"?', ops:['acettare','azettare','accetare','accettare'], r:3},
 {m:'Italiano', cl:'4', a:'Ortografia', d:'medio', q:'Come si scrive correttamente "eccezione"?', ops:['ecezione','eccezione','ezzezione','eczetione'], r:1},
 {m:'Italiano', cl:'4', a:'Ortografia', d:'medio', q:'Come si scrive correttamente "ogni tanto"?', ops:['ognj tanto','ognitanto','ogni tanto','ognì tanto'], r:2},
  // ---- DIFFICILE ----
  // Complementi
 {m:'Italiano', cl:'4', a:'Complementi', d:'difficile', q:'Il complemento OGGETTO risponde a:', ops:['Che cosa?','Dove?','Quando?','Come mai?'], r:0},
 {m:'Italiano', cl:'4', a:'Complementi', d:'difficile', q:'Il SOGGETTO è chi o che cosa:', ops:['sta zitto','finisce la frase','fa l’azione','riceve il regalo'], r:2},
 {m:'Italiano', cl:'4', a:'Complementi', d:'difficile', q:'In "Il cane abbaia", il soggetto è:', ops:['il cane','non c’è','bau','abbaia'], r:0},
 {m:'Italiano', cl:'4', a:'Complementi', d:'difficile', q:'In "Vado a scuola", "a scuola" è un complemento:', ops:['di tempo','di luogo','di modo','di materia'], r:1},
 {m:'Italiano', cl:'4', a:'Complementi', d:'difficile', q:'In "Taglio il pane col coltello", "col coltello" è un complemento:', ops:['di luogo','di qualità','di mezzo (strumento)','di tempo'], r:2},
 {m:'Italiano', cl:'4', a:'Complementi', d:'difficile', q:'In "Mangio con appetito", "con appetito" è un complemento:', ops:['di luogo','di mezzo','di materia','di modo'], r:3},
 {m:'Italiano', cl:'4', a:'Complementi', d:'difficile', q:'In "Vivo a Roma", "a Roma" è un complemento:', ops:['di luogo','di tempo','di modo','di fine'], r:0},
 {m:'Italiano', cl:'4', a:'Complementi', d:'difficile', q:'In "Dono un fiore alla maestra", "alla maestra" è il complemento:', ops:['soggetto','di termine','oggetto','di tempo'], r:1},
 {m:'Italiano', cl:'4', a:'Complementi', d:'difficile', q:'Il complemento di TEMPO risponde a:', ops:['Con chi?','Di che cosa?','Quando?','Dove?'], r:2},
 {m:'Italiano', cl:'4', a:'Complementi', d:'difficile', q:'Quale complemento NON ha la preposizione davanti?', ops:['complemento termine','complemento di luogo','complemento di mezzo','complemento oggetto'], r:3},
 {m:'Italiano', cl:'4', a:'Complementi', d:'difficile', q:'In "Torno domani", "domani" è un complemento:', ops:['di tempo','di luogo','oggetto','di modo'], r:0},
 {m:'Italiano', cl:'4', a:'Complementi', d:'difficile', q:'In "Il libro di Stella", "di Stella" è un complemento:', ops:['soggetto','di specificazione','di modo','di tempo'], r:1},
 {m:'Italiano', cl:'4', a:'Complementi', d:'difficile', q:'In "Parlo del film", "del film" è un complemento:', ops:['di luogo','soggetto','di limitazione (argomento)','di mezzo'], r:2},
 {m:'Italiano', cl:'4', a:'Complementi', d:'difficile', q:'In "Corro verso casa", "verso casa" è un complemento:', ops:['di stato in luogo','di tempo','di modo','di moto a luogo'], r:3},
  // Ortografia
 {m:'Italiano', cl:'4', a:'Ortografia', d:'difficile', q:'Come si scrive correttamente davanti a "automobile"?', ops:['una automobil','un automobili','uno automobile','un’automobile'], r:3},
 ],

 /* ==================== CLASSE 4 - Arte e Immagine ==================== */
 '4A': [
  // ---- FACILE ----
  // La prospettiva
 {m:'Arte e Immagine', cl:'4', a:'La prospettiva', d:'facile', q:'La prospettiva serve per:', ops:['dare profondità al disegno','colorare','cancellare','incollare'], r:0},
 {m:'Arte e Immagine', cl:'4', a:'La prospettiva', d:'facile', q:'Gli oggetti lontani appaiono:', ops:['invisibili','più piccoli','più grandi','uguali'], r:1},
 {m:'Arte e Immagine', cl:'4', a:'La prospettiva', d:'facile', q:'Gli oggetti vicini appaiono:', ops:['uguali','trasparenti','più grandi','più piccoli'], r:2},
  // La composizione
 {m:'Arte e Immagine', cl:'4', a:'La composizione', d:'facile', q:'Il centro di un’opera attira:', ops:['il freddo','lo sguardo','il rumore','il peso'], r:1},
 {m:'Arte e Immagine', cl:'4', a:'La composizione', d:'facile', q:'Il soggetto principale si mette spesso:', ops:['nascosto','fuori','sotto','in evidenza'], r:3},
  // I grandi artisti
 {m:'Arte e Immagine', cl:'4', a:'I grandi artisti', d:'facile', q:'Leonardo da Vinci dipinse:', ops:['la Cappella Sistina','la Notte stellata','la Gioconda','il David'], r:2},
 {m:'Arte e Immagine', cl:'4', a:'I grandi artisti', d:'facile', q:'Michelangelo scolpì:', ops:['la Gioconda','la Notte stellata','i Girasoli','il David'], r:3},
 {m:'Arte e Immagine', cl:'4', a:'I grandi artisti', d:'facile', q:'Van Gogh dipinse:', ops:['i Girasoli','la Gioconda','il David','la Cappella Sistina'], r:0},
 {m:'Arte e Immagine', cl:'4', a:'I grandi artisti', d:'facile', q:'Michelangelo affrescò:', ops:['la Notte stellata','la Cappella Sistina','la Gioconda','i Girasoli'], r:1},
  // Le tecniche
 {m:'Arte e Immagine', cl:'4', a:'Le tecniche', d:'facile', q:'Dipingere con gli acquerelli usa:', ops:['acqua e colore','olio','colla','sabbia'], r:0},
 {m:'Arte e Immagine', cl:'4', a:'Le tecniche', d:'facile', q:'Il collage si fa:', ops:['solo cancellando','incollando pezzi di carta','solo disegnando','solo colorando'], r:1},
 {m:'Arte e Immagine', cl:'4', a:'Le tecniche', d:'facile', q:'La scultura si fa modellando:', ops:['aria','carta sottile','creta o marmo','acqua'], r:2},
 {m:'Arte e Immagine', cl:'4', a:'Le tecniche', d:'facile', q:'Il disegno a matita usa:', ops:['il pennello','la creta','le forbici','la matita'], r:3},
  // ---- MEDIO ----
  // La prospettiva
 {m:'Arte e Immagine', cl:'4', a:'La prospettiva', d:'medio', q:'La linea dell’orizzonte è:', ops:['una linea verticale','una curva','invisibile','dove il cielo tocca la terra'], r:3},
 {m:'Arte e Immagine', cl:'4', a:'La prospettiva', d:'medio', q:'Il punto di fuga è:', ops:['dove le linee sembrano incontrarsi','un colore','una forma','un suono'], r:0},
 {m:'Arte e Immagine', cl:'4', a:'La prospettiva', d:'medio', q:'Le linee in prospettiva convergono:', ops:['in cerchio','verso il punto di fuga','verso l’esterno','mai'], r:1},
 {m:'Arte e Immagine', cl:'4', a:'La prospettiva', d:'medio', q:'La prospettiva si usa soprattutto nei:', ops:['colori','punti','paesaggi e nelle strade','ritratti'], r:2},
  // I colori complementari
 {m:'Arte e Immagine', cl:'4', a:'I colori complementari', d:'medio', q:'Il complementare del blu è:', ops:['l’arancione','il verde','il viola','il rosso'], r:0},
 {m:'Arte e Immagine', cl:'4', a:'I colori complementari', d:'medio', q:'Il complementare del giallo è:', ops:['il rosso','il viola','il verde','l’arancione'], r:1},
 {m:'Arte e Immagine', cl:'4', a:'I colori complementari', d:'medio', q:'Due colori complementari vicini:', ops:['diventano neri','spariscono','si esaltano a vicenda','si annullano'], r:2},
 {m:'Arte e Immagine', cl:'4', a:'I colori complementari', d:'medio', q:'Rosso e verde sono:', ops:['complementari','primari','secondari','neutri'], r:0},
 {m:'Arte e Immagine', cl:'4', a:'I colori complementari', d:'medio', q:'Blu e arancione sono:', ops:['uguali','neutri','complementari','primari'], r:2},
 {m:'Arte e Immagine', cl:'4', a:'I colori complementari', d:'medio', q:'Giallo e viola sono:', ops:['primari','uguali','freddi','complementari'], r:3},
  // La composizione
 {m:'Arte e Immagine', cl:'4', a:'La composizione', d:'medio', q:'La composizione è:', ops:['come sono disposti gli elementi','un colore','un suono','una linea'], r:0},
 {m:'Arte e Immagine', cl:'4', a:'La composizione', d:'medio', q:'Una composizione equilibrata è:', ops:['vuota','rumorosa','armoniosa','caotica'], r:2},
 {m:'Arte e Immagine', cl:'4', a:'La composizione', d:'medio', q:'La simmetria è:', ops:['l’equilibrio tra le parti','un colore','un suono','una forma'], r:0},
 {m:'Arte e Immagine', cl:'4', a:'La composizione', d:'medio', q:'L’asimmetria è:', ops:['nulla','equilibrio senza specularità','simmetria perfetta','un colore'], r:1},
 {m:'Arte e Immagine', cl:'4', a:'La composizione', d:'medio', q:'La regola dei terzi aiuta a:', ops:['dormire','correre','collocare gli elementi','cucinare'], r:2},
 {m:'Arte e Immagine', cl:'4', a:'La composizione', d:'medio', q:'Una composizione con tanti elementi è:', ops:['affollata','vuota','minimale','invisibile'], r:0},
  // I grandi artisti
 {m:'Arte e Immagine', cl:'4', a:'I grandi artisti', d:'medio', q:'Leonardo era anche:', ops:['solo scultore','solo musicista','inventore','solo pittore'], r:2},
 {m:'Arte e Immagine', cl:'4', a:'I grandi artisti', d:'medio', q:'Van Gogh era di nazionalità:', ops:['italiana','francese','spagnola','olandese'], r:3},
  // Le tecniche
 {m:'Arte e Immagine', cl:'4', a:'Le tecniche', d:'medio', q:'L’acquerello è:', ops:['trasparente','coprente','solido','ruvido'], r:0},
 {m:'Arte e Immagine', cl:'4', a:'Le tecniche', d:'medio', q:'La tempera è:', ops:['solida','coprente','trasparente','liquida e trasparente'], r:1},
 {m:'Arte e Immagine', cl:'4', a:'Le tecniche', d:'medio', q:'Il mosaico si fa con:', ops:['solo matite','solo forbici','tessere colorate','solo pennelli'], r:2},
  // ---- DIFFICILE ----
  // La prospettiva
 {m:'Arte e Immagine', cl:'4', a:'La prospettiva', d:'difficile', q:'La prospettiva centrale ha:', ops:['due punti di fuga','nessun punto','tre punti','un punto di fuga'], r:3},
 {m:'Arte e Immagine', cl:'4', a:'La prospettiva', d:'difficile', q:'Una strada che si restringe in lontananza mostra:', ops:['la prospettiva','il colore','la texture','la luce'], r:0},
 {m:'Arte e Immagine', cl:'4', a:'La prospettiva', d:'difficile', q:'Gli artisti del Rinascimento studiarono:', ops:['lo sport','la prospettiva','la musica','la cucina'], r:1},
  // I colori complementari
 {m:'Arte e Immagine', cl:'4', a:'I colori complementari', d:'difficile', q:'Mescolando due complementari si ottiene:', ops:['un colore trasparente','un colore neutro o scuro','un colore acceso','il bianco'], r:1},
  // La composizione
 {m:'Arte e Immagine', cl:'4', a:'La composizione', d:'difficile', q:'Le diagonali in una composizione danno:', ops:['staticità','silenzio','vuoto','dinamismo'], r:3},
 {m:'Arte e Immagine', cl:'4', a:'La composizione', d:'difficile', q:'Lo spazio vuoto in un’opera serve per:', ops:['nascondere','far respirare la composizione','sporcare','riempire sempre'], r:1},
  // I grandi artisti
 {m:'Arte e Immagine', cl:'4', a:'I grandi artisti', d:'difficile', q:'Un artista famoso del Rinascimento è:', ops:['Leonardo','Picasso','Van Gogh','Monet'], r:0},
 {m:'Arte e Immagine', cl:'4', a:'I grandi artisti', d:'difficile', q:'Picasso fu un pittore:', ops:['inglese','spagnolo','italiano','tedesco'], r:1},
 {m:'Arte e Immagine', cl:'4', a:'I grandi artisti', d:'difficile', q:'Monet dipingeva soprattutto:', ops:['sculture','mosaici','paesaggi e luce','ritratti reali'], r:2},
 {m:'Arte e Immagine', cl:'4', a:'I grandi artisti', d:'difficile', q:'Le opere d’arte famose si trovano:', ops:['solo nelle case','solo nelle scuole','da nessuna parte','nei musei'], r:3},
  // Le tecniche
 {m:'Arte e Immagine', cl:'4', a:'Le tecniche', d:'difficile', q:'L’incisione è una tecnica di:', ops:['pittura','scultura','collage','stampa'], r:3},
 {m:'Arte e Immagine', cl:'4', a:'Le tecniche', d:'difficile', q:'La prospettiva aerea si ottiene:', ops:['schiarendo i colori lontani','scurendo','colorando di rosso','cancellando'], r:0},
 {m:'Arte e Immagine', cl:'4', a:'Le tecniche', d:'difficile', q:'Il frottage si fa:', ops:['solo tagliando','strofinando la matita su una superficie','solo disegnando','solo incollando'], r:1},
 ],

 /* ==================== CLASSE 4 - Inglese ==================== */
 '4E': [
  // ---- FACILE ----
  // La famiglia
 {m:'Inglese', cl:'4', a:'La famiglia', d:'facile', q:'"Niece" significa:', ops:['nipote (femmina)','cugina','sorella','zia'], r:0},
  // La casa
 {m:'Inglese', cl:'4', a:'La casa', d:'facile', q:'"House" significa:', ops:['chiesa','negozio','casa','scuola'], r:2},
 {m:'Inglese', cl:'4', a:'La casa', d:'facile', q:'"Door" significa:', ops:['finestra','tetto','muro','porta'], r:3},
 {m:'Inglese', cl:'4', a:'La casa', d:'facile', q:'"Room" significa:', ops:['tetto','stanza','porta','finestra'], r:1},
 {m:'Inglese', cl:'4', a:'La casa', d:'facile', q:'"Roof" significa:', ops:['muro','porta','tetto','pavimento'], r:2},
  // Il cibo
 {m:'Inglese', cl:'4', a:'Il cibo', d:'facile', q:'"Lunch" significa:', ops:['pranzo','colazione','cena','merenda'], r:0},
  // I vestiti
 {m:'Inglese', cl:'4', a:'I vestiti', d:'facile', q:'"Shirt" significa:', ops:['cappello','pantaloni','camicia','scarpe'], r:2},
 {m:'Inglese', cl:'4', a:'I vestiti', d:'facile', q:'"Shoes" significa:', ops:['camicia','cappello','guanti','scarpe'], r:3},
 {m:'Inglese', cl:'4', a:'I vestiti', d:'facile', q:'"Hat" significa:', ops:['cappello','scarpe','camicia','pantaloni'], r:0},
 {m:'Inglese', cl:'4', a:'I vestiti', d:'facile', q:'"Dress" significa:', ops:['cappotto','gonna','vestito','camicia'], r:2},
 {m:'Inglese', cl:'4', a:'I vestiti', d:'facile', q:'"Skirt" significa:', ops:['vestito','camicia','scarpe','gonna'], r:3},
 {m:'Inglese', cl:'4', a:'I vestiti', d:'facile', q:'"Coat" significa:', ops:['cappotto','gonna','vestito','camicia'], r:0},
 {m:'Inglese', cl:'4', a:'I vestiti', d:'facile', q:'"Scarf" significa:', ops:['cappello','cappotto','sciarpa','guanti'], r:2},
 {m:'Inglese', cl:'4', a:'I vestiti', d:'facile', q:'"Socks" significa:', ops:['scarpe','guanti','cappello','calzini'], r:3},
  // ---- MEDIO ----
  // La famiglia
 {m:'Inglese', cl:'4', a:'La famiglia', d:'medio', q:'"Grandparents" significa:', ops:['cugini','nonni','genitori','figli'], r:1},
 {m:'Inglese', cl:'4', a:'La famiglia', d:'medio', q:'"Nephew" significa:', ops:['cugino','fratello','zio','nipote (maschio)'], r:3},
 {m:'Inglese', cl:'4', a:'La famiglia', d:'medio', q:'"Relatives" significa:', ops:['compagni','parenti','amici','vicini'], r:1},
  // La casa
 {m:'Inglese', cl:'4', a:'La casa', d:'medio', q:'"Window" significa:', ops:['finestra','porta','tetto','pavimento'], r:0},
 {m:'Inglese', cl:'4', a:'La casa', d:'medio', q:'"Kitchen" significa:', ops:['bagno','salotto','cucina','camera'], r:2},
 {m:'Inglese', cl:'4', a:'La casa', d:'medio', q:'"Bathroom" significa:', ops:['bagno','cucina','camera','salotto'], r:0},
 {m:'Inglese', cl:'4', a:'La casa', d:'medio', q:'"Garden" significa:', ops:['bagno','giardino','garage','cucina'], r:1},
 {m:'Inglese', cl:'4', a:'La casa', d:'medio', q:'"Stairs" significa:', ops:['porte','finestre','muri','scale'], r:3},
  // Il cibo
 {m:'Inglese', cl:'4', a:'Il cibo', d:'medio', q:'"Breakfast" significa:', ops:['pranzo','cena','merenda','colazione'], r:3},
 {m:'Inglese', cl:'4', a:'Il cibo', d:'medio', q:'"Dinner" significa:', ops:['merenda','cena','colazione','pranzo'], r:1},
  // I vestiti
 {m:'Inglese', cl:'4', a:'I vestiti', d:'medio', q:'"Trousers" significa:', ops:['cappello','pantaloni','camicia','scarpe'], r:1},
 {m:'Inglese', cl:'4', a:'I vestiti', d:'medio', q:'"Gloves" significa:', ops:['sciarpa','guanti','scarpe','cappello'], r:1},
  // Il tempo
 {m:'Inglese', cl:'4', a:'Il tempo', d:'medio', q:'"Weather" significa:', ops:['ora','giorno','mese','tempo (meteorologico)'], r:3},
  // ---- DIFFICILE ----
  // La casa
 {m:'Inglese', cl:'4', a:'La casa', d:'difficile', q:'"Bedroom" significa:', ops:['cucina','bagno','salotto','camera da letto'], r:3},
 ],

 /* ==================== CLASSE 4 - Educazione Civica ==================== */
 '4EC': [
  // ---- FACILE ----
  // I diritti
 {m:'Educazione Civica', cl:'4', a:'I diritti', d:'facile', q:'Ogni persona ha diritto:', ops:['alla violenza','all’odio','alla libertà','alla prigione'], r:2},
 {m:'Educazione Civica', cl:'4', a:'I diritti', d:'facile', q:'Per l’uguaglianza, ogni persona ha diritto a:', ops:['alla discriminazione','all’odio','alla violenza','all’uguaglianza'], r:3},
 {m:'Educazione Civica', cl:'4', a:'I diritti', d:'facile', q:'Per la salute, ogni persona ha diritto a:', ops:['alla salute','alla malattia','al dolore','alla paura'], r:0},
 {m:'Educazione Civica', cl:'4', a:'I diritti', d:'facile', q:'Per lo studio, ogni persona ha diritto a:', ops:['alla paura','all’istruzione','all’ignoranza','alla violenza'], r:1},
  // L’ambiente
 {m:'Educazione Civica', cl:'4', a:'L’ambiente', d:'facile', q:'La raccolta differenziata serve per:', ops:['bruciare','nascondere','riciclare','buttare insieme'], r:2},
  // La cittadinanza
 {m:'Educazione Civica', cl:'4', a:'La cittadinanza', d:'facile', q:'Un buon cittadino rispetta:', ops:['solo se stesso','solo gli amici','nessuno','le leggi'], r:3},
 {m:'Educazione Civica', cl:'4', a:'La cittadinanza', d:'facile', q:'Votare è un diritto:', ops:['dei cittadini','solo dei ricchi','solo degli adulti ricchi','di nessuno'], r:0},
 {m:'Educazione Civica', cl:'4', a:'La cittadinanza', d:'facile', q:'Il sindaco governa:', ops:['l’Europa','il comune','lo Stato','la regione'], r:1},
  // ---- MEDIO ----
  // La Costituzione
 {m:'Educazione Civica', cl:'4', a:'La Costituzione', d:'medio', q:'La Repubblica italiana è:', ops:['assoluta','democratica','dittatoriale','monarchica'], r:1},
  // I diritti
 {m:'Educazione Civica', cl:'4', a:'I diritti', d:'medio', q:'I diritti umani sono:', ops:['di nessuno','solo dei ricchi','di tutti','di pochi'], r:2},
 {m:'Educazione Civica', cl:'4', a:'I diritti', d:'medio', q:'La libertà di parola significa:', ops:['stare zitti','urlare','mentire','poter esprimere le idee'], r:3},
 {m:'Educazione Civica', cl:'4', a:'I diritti', d:'medio', q:'L’uguaglianza significa:', ops:['tutti uguali davanti alla legge','tutti diversi davanti alla legge','solo alcuni uguali','nessuno uguale'], r:0},
 {m:'Educazione Civica', cl:'4', a:'I diritti', d:'medio', q:'La Dichiarazione dei diritti umani è:', ops:['di una famiglia','dell’ONU','di un solo paese','di una scuola'], r:1},
 {m:'Educazione Civica', cl:'4', a:'I diritti', d:'medio', q:'Il diritto al lavoro è:', ops:['solo dei ricchi','solo degli uomini','di nessuno','di ogni adulto'], r:3},
  // L’ambiente
 {m:'Educazione Civica', cl:'4', a:'L’ambiente', d:'medio', q:'Le energie rinnovabili:', ops:['sono inutili','non inquinano','inquinano molto','non esistono'], r:1},
 {m:'Educazione Civica', cl:'4', a:'L’ambiente', d:'medio', q:'Riciclare fa bene perché:', ops:['riduce i rifiuti','aumenta i rifiuti','sporca','fa rumore'], r:0},
  // La cittadinanza
 {m:'Educazione Civica', cl:'4', a:'La cittadinanza', d:'medio', q:'Un cittadino è:', ops:['solo un bambino','solo un adulto','chi vive in un paese','solo un turista'], r:2},
 {m:'Educazione Civica', cl:'4', a:'La cittadinanza', d:'medio', q:'Il presidente della Repubblica è:', ops:['il capo della scuola','il capo della famiglia','il capo dello Stato','il capo del comune'], r:2},
 {m:'Educazione Civica', cl:'4', a:'La cittadinanza', d:'medio', q:'Le leggi si rispettano:', ops:['mai','solo quando conviene','solo a scuola','sempre'], r:3},
 {m:'Educazione Civica', cl:'4', a:'La cittadinanza', d:'medio', q:'Un cittadino partecipa:', ops:['alla vita del paese','solo alle feste','solo ai giochi','mai'], r:0},
 {m:'Educazione Civica', cl:'4', a:'La cittadinanza', d:'medio', q:'La democrazia significa:', ops:['assenza di governo','governo del popolo','governo di uno solo','governo dei ricchi'], r:1},
  // ---- DIFFICILE ----
  // La Costituzione
 {m:'Educazione Civica', cl:'4', a:'La Costituzione', d:'difficile', q:'La Costituzione italiana è:', ops:['la legge più importante','un gioco','un cibo','una canzone'], r:0},
 {m:'Educazione Civica', cl:'4', a:'La Costituzione', d:'difficile', q:'La Costituzione contiene:', ops:['solo canzoni','diritti e doveri','solo ricette','solo giochi'], r:1},
 {m:'Educazione Civica', cl:'4', a:'La Costituzione', d:'difficile', q:'La Costituzione protegge:', ops:['solo gli adulti','nessuno','tutti i cittadini','solo i ricchi'], r:2},
 {m:'Educazione Civica', cl:'4', a:'La Costituzione', d:'difficile', q:'La Costituzione è entrata in vigore:', ops:['nel 2000','nel 1900','nel 1800','nel 1948'], r:3},
 {m:'Educazione Civica', cl:'4', a:'La Costituzione', d:'difficile', q:'I primi articoli della Costituzione parlano:', ops:['dei giochi','delle canzoni','dei principi fondamentali','delle ricette'], r:2},
 {m:'Educazione Civica', cl:'4', a:'La Costituzione', d:'difficile', q:'La Costituzione si divide in:', ops:['capitoli','paragrafi','righe','articoli'], r:3},
 {m:'Educazione Civica', cl:'4', a:'La Costituzione', d:'difficile', q:'La Costituzione garantisce:', ops:['la libertà e l’uguaglianza','solo la libertà','solo l’uguaglianza','nulla'], r:0},
 {m:'Educazione Civica', cl:'4', a:'La Costituzione', d:'difficile', q:'Rispettare la Costituzione è:', ops:['inutile','un dovere di tutti','solo dei politici','solo dei giudici'], r:1},
  // I diritti
 {m:'Educazione Civica', cl:'4', a:'I diritti', d:'difficile', q:'I diritti portano anche:', ops:['solo premi','nulla','dei doveri','solo vantaggi'], r:2},
  // La cittadinanza
 {m:'Educazione Civica', cl:'4', a:'La cittadinanza', d:'difficile', q:'Essere cittadini comporta:', ops:['solo doveri','nulla','diritti e doveri','solo diritti'], r:2},
 {m:'Educazione Civica', cl:'4', a:'La cittadinanza', d:'difficile', q:'Il comune si occupa:', ops:['solo dei giochi','solo delle feste','di nulla','dei servizi ai cittadini'], r:3},
 ],

 /* ==================== CLASSE 4 - Educazione Fisica ==================== */
 '4EF': [
  // ---- FACILE ----
  // I muscoli e le ossa
 {m:'Educazione Fisica', cl:'4', a:'I muscoli e le ossa', d:'facile', q:'Le ossa servono per:', ops:['annusare','sostenere il corpo','vedere','sentire'], r:1},
 {m:'Educazione Fisica', cl:'4', a:'I muscoli e le ossa', d:'facile', q:'Lo scheletro è formato da:', ops:['pelle','capelli','ossa','muscoli'], r:2},
 {m:'Educazione Fisica', cl:'4', a:'I muscoli e le ossa', d:'facile', q:'Il cuore è un:', ops:['osso','dente','capello','muscolo'], r:3},
  // ---- MEDIO ----
  // I muscoli e le ossa
 {m:'Educazione Fisica', cl:'4', a:'I muscoli e le ossa', d:'medio', q:'Le articolazioni collegano:', ops:['le ossa','i muscoli','i capelli','le unghie'], r:0},
 {m:'Educazione Fisica', cl:'4', a:'I muscoli e le ossa', d:'medio', q:'Lo sport rende i muscoli:', ops:['dolorosi','più forti','più deboli','invisibili'], r:1},
 {m:'Educazione Fisica', cl:'4', a:'I muscoli e le ossa', d:'medio', q:'Le ossa si rafforzano con:', ops:['solo riposo','solo tv','il calcio e il movimento','solo dolci'], r:2},
  // Le regole
 {m:'Educazione Fisica', cl:'4', a:'Le regole', d:'medio', q:'Rispettare gli avversari è:', ops:['importante','inutile','sbagliato','dannoso'], r:0},
 {m:'Educazione Fisica', cl:'4', a:'Le regole', d:'medio', q:'Un fallo è:', ops:['un punto','un premio','un’infrazione','un gol'], r:2},
  // Il fair play
 {m:'Educazione Fisica', cl:'4', a:'Il fair play', d:'medio', q:'Il fair play è:', ops:['il gioco leale','il barare','il litigare','il vincere sempre'], r:0},
 {m:'Educazione Fisica', cl:'4', a:'Il fair play', d:'medio', q:'Stringere la mano all’avversario è:', ops:['proibito','fair play','scorretto','inutile'], r:1},
 {m:'Educazione Fisica', cl:'4', a:'Il fair play', d:'medio', q:'Accettare la sconfitta è:', ops:['impossibile','proibito','fair play','scorretto'], r:2},
 {m:'Educazione Fisica', cl:'4', a:'Il fair play', d:'medio', q:'Aiutare un avversario caduto è:', ops:['scorretto','inutile','proibito','fair play'], r:3},
 {m:'Educazione Fisica', cl:'4', a:'Il fair play', d:'medio', q:'Il fair play rende lo sport:', ops:['più bello','più brutto','più noioso','impossibile'], r:0},
 {m:'Educazione Fisica', cl:'4', a:'Il fair play', d:'medio', q:'Vincere barando:', ops:['è divertente','non ha valore','è sempre bello','è giusto'], r:1},
 {m:'Educazione Fisica', cl:'4', a:'Il fair play', d:'medio', q:'Il rispetto per l’arbitro è:', ops:['inutile','proibito','fair play','scorretto'], r:2},
 {m:'Educazione Fisica', cl:'4', a:'Il fair play', d:'medio', q:'Chi fa fair play è:', ops:['rispettato','deriso','escluso','punito'], r:0},
  // La salute
 {m:'Educazione Fisica', cl:'4', a:'La salute', d:'medio', q:'Lo sport regolare:', ops:['non serve','fa male','rafforza il corpo','indebolisce'], r:2},
 {m:'Educazione Fisica', cl:'4', a:'La salute', d:'medio', q:'La postura corretta protegge:', ops:['gli occhi','i capelli','le unghie','la schiena'], r:3},
  // ---- DIFFICILE ----
  // Gli sport
 {m:'Educazione Fisica', cl:'4', a:'Gli sport', d:'difficile', q:'Il rugby si gioca:', ops:['con i piedi soltanto','con le mani soltanto','senza palla','con una palla ovale'], r:3},
 {m:'Educazione Fisica', cl:'4', a:'Gli sport', d:'difficile', q:'La scherma si pratica:', ops:['con la spada','con la palla','con la racchetta','a mani nude'], r:0},
 {m:'Educazione Fisica', cl:'4', a:'Gli sport', d:'difficile', q:'Gli sport si dividono in:', ops:['nessuna categoria','individuali e di squadra','solo individuali','solo di squadra'], r:1},
  // Il fair play
 {m:'Educazione Fisica', cl:'4', a:'Il fair play', d:'difficile', q:'Il fair play si usa:', ops:['solo nello sport','mai','solo a scuola','anche nella vita'], r:3},
 {m:'Educazione Fisica', cl:'4', a:'Il fair play', d:'difficile', q:'Il fair play insegna:', ops:['l’egoismo','il rispetto','l’odio','la rabbia'], r:1},
  // La salute
 {m:'Educazione Fisica', cl:'4', a:'La salute', d:'difficile', q:'Le proteine servono per:', ops:['sentire','costruire i muscoli','dormire','vedere'], r:1},
 {m:'Educazione Fisica', cl:'4', a:'La salute', d:'difficile', q:'Le vitamine servono per:', ops:['dormire','correre','vedere','difendersi dalle malattie'], r:3},
  // I muscoli e le ossa
 {m:'Educazione Fisica', cl:'4', a:'I muscoli e le ossa', d:'difficile', q:'Il riscaldamento prepara:', ops:['gli occhi','i capelli','le unghie','i muscoli'], r:3},
 {m:'Educazione Fisica', cl:'4', a:'I muscoli e le ossa', d:'difficile', q:'Lo stretching serve per:', ops:['allungare i muscoli','dormire','mangiare','vedere'], r:0},
 {m:'Educazione Fisica', cl:'4', a:'I muscoli e le ossa', d:'difficile', q:'Il corpo si muove grazie a:', ops:['solo unghie','muscoli e ossa','solo pelle','solo capelli'], r:1},
 ],

 /* ==================== CLASSE 4 - Geografia ==================== */
 '4G': [
  // ---- FACILE ----
  // L’Italia e le regioni
 {m:'Geografia', cl:'4', a:'L’Italia e le regioni', d:'facile', q:'L’Italia è una:', ops:['montagna','pianura','penisola','isola'], r:2},
  // Le carte
 {m:'Geografia', cl:'4', a:'Le carte', d:'facile', q:'Sulla carta politica si vedono:', ops:['confini e città','solo monti','solo fiumi','solo laghi'], r:0},
 {m:'Geografia', cl:'4', a:'Le carte', d:'facile', q:'La legenda spiega:', ops:['le canzoni','i simboli della carta','le ricette','i giochi'], r:1},
  // Il clima
 {m:'Geografia', cl:'4', a:'Il clima', d:'facile', q:'In montagna, salendo, la temperatura:', ops:['resta uguale','sparisce','diminuisce','aumenta'], r:2},
  // I fiumi e i laghi
 {m:'Geografia', cl:'4', a:'I fiumi e i laghi', d:'facile', q:'Il fiume nasce dalla:', ops:['argine','sorgente','foce','riva'], r:1},
  // Le Alpi e gli Appennini
 {m:'Geografia', cl:'4', a:'Le Alpi e gli Appennini', d:'facile', q:'Le Alpi sono più alte:', ops:['delle pianure','del mare sempre','degli Appennini','delle colline'], r:2},
 {m:'Geografia', cl:'4', a:'Le Alpi e gli Appennini', d:'facile', q:'Il Monte Bianco è nelle:', ops:['Appennini','Sicilia','Sardegna','Alpi'], r:3},
  // ---- MEDIO ----
  // L’Italia e le regioni
 {m:'Geografia', cl:'4', a:'L’Italia e le regioni', d:'medio', q:'La capitale d’Italia è:', ops:['Torino','Roma','Milano','Napoli'], r:1},
 {m:'Geografia', cl:'4', a:'L’Italia e le regioni', d:'medio', q:'La regione più grande è:', ops:['il Molise','la Liguria','il Friuli','la Sicilia'], r:3},
 {m:'Geografia', cl:'4', a:'L’Italia e le regioni', d:'medio', q:'Il capoluogo della Toscana è:', ops:['Firenze','Pisa','Siena','Livorno'], r:0},
 {m:'Geografia', cl:'4', a:'L’Italia e le regioni', d:'medio', q:'Il capoluogo della Lombardia è:', ops:['Genova','Milano','Torino','Venezia'], r:1},
 {m:'Geografia', cl:'4', a:'L’Italia e le regioni', d:'medio', q:'Il capoluogo della Sicilia è:', ops:['Messina','Napoli','Palermo','Catania'], r:2},
 {m:'Geografia', cl:'4', a:'L’Italia e le regioni', d:'medio', q:'Il capoluogo della Sardegna è:', ops:['Sassari','Olbia','Oristano','Cagliari'], r:3},
 {m:'Geografia', cl:'4', a:'L’Italia e le regioni', d:'medio', q:'Il capoluogo dell’Emilia-Romagna è:', ops:['Bologna','Modena','Parma','Ferrara'], r:0},
  // Le carte
 {m:'Geografia', cl:'4', a:'Le carte', d:'medio', q:'La carta geografica è:', ops:['un gioco','una foto','una rappresentazione del territorio','un disegno libero'], r:2},
 {m:'Geografia', cl:'4', a:'Le carte', d:'medio', q:'Sulla carta fisica i monti sono:', ops:['blu','verdi','rossi','marrone'], r:3},
 {m:'Geografia', cl:'4', a:'Le carte', d:'medio', q:'La scala serve per:', ops:['misurare la temperatura','contare','capire le distanze reali','pesare'], r:2},
 {m:'Geografia', cl:'4', a:'Le carte', d:'medio', q:'Il planisfero mostra:', ops:['una città','una regione','un fiume','tutta la Terra'], r:3},
 {m:'Geografia', cl:'4', a:'Le carte', d:'medio', q:'Su una carta, il punto in alto è:', ops:['il nord','il sud','l’est','l’ovest'], r:0},
 {m:'Geografia', cl:'4', a:'Le carte', d:'medio', q:'Il mappamondo è:', ops:['un gioco','una foto','un modello sferico della Terra','una carta piatta'], r:2},
  // Il clima
 {m:'Geografia', cl:'4', a:'Il clima', d:'medio', q:'La temperatura si esprime in:', ops:['gradi Celsius','metri','chili','litri'], r:0},
 {m:'Geografia', cl:'4', a:'Il clima', d:'medio', q:'Il vento di scirocco porta:', ops:['ghiaccio','aria calda dal sud','aria fredda dal nord','neve'], r:1},
 {m:'Geografia', cl:'4', a:'Il clima', d:'medio', q:'Le zone più fredde della Terra sono:', ops:['al mare caldo','ai poli','all’equatore','al deserto'], r:1},
  // I fiumi e i laghi
 {m:'Geografia', cl:'4', a:'I fiumi e i laghi', d:'medio', q:'Il fiume che attraversa Roma è:', ops:['il Po','l’Arno','il Nilo','il Tevere'], r:3},
 {m:'Geografia', cl:'4', a:'I fiumi e i laghi', d:'medio', q:'Il lago più grande d’Italia è:', ops:['il lago di Garda','il lago di Como','il lago Maggiore','il Trasimeno'], r:0},
 {m:'Geografia', cl:'4', a:'I fiumi e i laghi', d:'medio', q:'La foce è:', ops:['una montagna','un lago','dove il fiume entra nel mare','dove nasce'], r:2},
 {m:'Geografia', cl:'4', a:'I fiumi e i laghi', d:'medio', q:'Un affluente è:', ops:['un lago','un mare','una sorgente','un fiume che si getta in un altro'], r:3},
 {m:'Geografia', cl:'4', a:'I fiumi e i laghi', d:'medio', q:'L’Arno attraversa:', ops:['Firenze e Pisa','Roma','Milano','Napoli'], r:0},
 {m:'Geografia', cl:'4', a:'I fiumi e i laghi', d:'medio', q:'L’acqua dei fiumi serve anche per:', ops:['accendere il fuoco','volare','stampare','irrigare i campi'], r:3},
  // Le Alpi e gli Appennini
 {m:'Geografia', cl:'4', a:'Le Alpi e gli Appennini', d:'medio', q:'Le Alpi si trovano:', ops:['a nord dell’Italia','a sud','nelle isole','a est'], r:0},
 {m:'Geografia', cl:'4', a:'Le Alpi e gli Appennini', d:'medio', q:'Gli Appennini attraversano:', ops:['solo la Sardegna','tutta l’Italia','solo il nord','solo la Sicilia'], r:1},
 {m:'Geografia', cl:'4', a:'Le Alpi e gli Appennini', d:'medio', q:'Le Alpi confinano con:', ops:['Grecia','Africa','Francia, Svizzera e Austria','Spagna'], r:2},
 {m:'Geografia', cl:'4', a:'Le Alpi e gli Appennini', d:'medio', q:'Il Gran Sasso è:', ops:['nelle Alpi','in Sicilia','in Sardegna','negli Appennini'], r:3},
 {m:'Geografia', cl:'4', a:'Le Alpi e gli Appennini', d:'medio', q:'Il Vesuvio e l’Etna sono:', ops:['fiumi','vulcani','monti alpini','laghi'], r:1},
  // ---- DIFFICILE ----
  // L’Italia e le regioni
 {m:'Geografia', cl:'4', a:'L’Italia e le regioni', d:'difficile', q:'Le regioni confinano tra loro lungo:', ops:['le strade soltanto','i confini','i fiumi soltanto','le montagne soltanto'], r:1},
  // Le carte
 {m:'Geografia', cl:'4', a:'Le carte', d:'difficile', q:'La carta tematica mostra:', ops:['solo monti','un tema specifico (clima, popolazione)','solo strade','solo confini'], r:1},
 {m:'Geografia', cl:'4', a:'Le carte', d:'difficile', q:'Le coordinate servono per:', ops:['cucinare','dormire','giocare','trovare un punto sulla Terra'], r:3},
  // Il clima
 {m:'Geografia', cl:'4', a:'Il clima', d:'difficile', q:'Il clima dipende anche:', ops:['dalla vicinanza al mare e dalla quota','dal colore','dal suono','dal peso'], r:0},
 {m:'Geografia', cl:'4', a:'Il clima', d:'difficile', q:'In pianura il clima è:', ops:['glaciale','temperato','polare','desertico'], r:1},
 {m:'Geografia', cl:'4', a:'Il clima', d:'difficile', q:'Il clima mediterraneo è:', ops:['polare','desertico','glaciale','mite'], r:3},
 {m:'Geografia', cl:'4', a:'Il clima', d:'difficile', q:'Il clima alpino è:', ops:['desertico','equatoriale','freddo','caldo'], r:2},
 {m:'Geografia', cl:'4', a:'Il clima', d:'difficile', q:'La latitudine influenza:', ops:['il colore del mare','il suono','il peso','il clima'], r:3},
 {m:'Geografia', cl:'4', a:'Il clima', d:'difficile', q:'Le zone più calde della Terra sono vicino:', ops:['all’equatore','ai poli','alle montagne','ai ghiacciai'], r:0},
  // I fiumi e i laghi
 {m:'Geografia', cl:'4', a:'I fiumi e i laghi', d:'difficile', q:'Il lago di Como si trova in:', ops:['Puglia','Lombardia','Sicilia','Sardegna'], r:1},
 {m:'Geografia', cl:'4', a:'I fiumi e i laghi', d:'difficile', q:'Le dighe servono per:', ops:['nuotare','dormire','trattenere l’acqua','volare'], r:2},
  // Le Alpi e gli Appennini
 {m:'Geografia', cl:'4', a:'Le Alpi e gli Appennini', d:'difficile', q:'Le valli alpine sono scavate da:', ops:['i ghiacciai e i fiumi','il vento soltanto','il mare','la sabbia'], r:0},
 ],

 /* ==================== CLASSE 4 - Matematica ==================== */
 '4M': [
  // ---- FACILE ----
  // Numeri decimali
 {m:'Matematica', cl:'4', a:'Numeri decimali', d:'facile', q:'Nel numero 3,5 la parte DECIMALE è:', ops:['3','5','0,5','35'], r:1},
 {m:'Matematica', cl:'4', a:'Numeri decimali', d:'facile', q:'Quale numero è maggiore: 3,5 o 3,45?', ops:['non si può dire','3,45','3,5','sono uguali'], r:2},
 {m:'Matematica', cl:'4', a:'Numeri decimali', d:'facile', q:'Come si legge 0,7?', ops:['sette centesimi','settanta','sette','zero SETTE DECIMI'], r:3},
 {m:'Matematica', cl:'4', a:'Numeri decimali', d:'facile', q:'Quale simbolo separa la parte intera da quella decimale in Italia?', ops:['la virgola','il trattino','i due punti','il punto'], r:0},
  // Percentuali
 {m:'Matematica', cl:'4', a:'Percentuali', d:'facile', q:'Il 50% di un numero è:', ops:['il doppio','la metà','un quarto','lo zero'], r:1},
 {m:'Matematica', cl:'4', a:'Percentuali', d:'facile', q:'Il 100% di un numero è:', ops:['zero','il doppio','la metà','tutto il numero'], r:3},
  // Geometria: figure e formule
 {m:'Matematica', cl:'4', a:'Geometria: figure e formule', d:'facile', q:'Il raggio di un cerchio è la distanza dal centro a:', ops:['un punto della circonferenza','un altro cerchio','il suo doppio','un punto qualsiasi fuori'], r:0},
  // Potenze ed espressioni
 {m:'Matematica', cl:'4', a:'Potenze ed espressioni', d:'facile', q:'Quanto fa 3²?', ops:['5','6','9','12'], r:2},
  // Statistica e problemi
 {m:'Matematica', cl:'4', a:'Statistica e problemi', d:'facile', q:'La MEDIA si calcola:', ops:['prendendo il più frequente','prendendo il primo','sommando i dati e dividendoli per quanti sono','prendendo il più grande'], r:2},
  // ---- MEDIO ----
  // Numeri decimali
 {m:'Matematica', cl:'4', a:'Numeri decimali', d:'medio', q:'Nel numero 3,456 la cifra 5 vale:', ops:['5 decimi','5 centesimi','5 millesimi','5 unità'], r:1},
 {m:'Matematica', cl:'4', a:'Numeri decimali', d:'medio', q:'Quanto fa 2,5 + 1,5?', ops:['3','3,5','4','4,5'], r:2},
 {m:'Matematica', cl:'4', a:'Numeri decimali', d:'medio', q:'Quanto fa 5,3 − 2,1?', ops:['3,1','32','3,2','2,2'], r:2},
 {m:'Matematica', cl:'4', a:'Numeri decimali', d:'medio', q:'Quanto fa 2,5 × 2?', ops:['4,5','5','50','4'], r:1},
 {m:'Matematica', cl:'4', a:'Numeri decimali', d:'medio', q:'In una corsa di 1,5 km, quanti METRI corro?', ops:['1500 metri','1050 metri','15 metri','150 metri'], r:0},
 {m:'Matematica', cl:'4', a:'Numeri decimali', d:'medio', q:'Quale numero sta TRA 3,4 e 3,6?', ops:['3,5','3,7','3,9','3,3'], r:0},
  // Percentuali
 {m:'Matematica', cl:'4', a:'Percentuali', d:'medio', q:'Quanto vale il 25% di 100?', ops:['25','50','10','20'], r:0},
 {m:'Matematica', cl:'4', a:'Percentuali', d:'medio', q:'Quanto vale il 20% di 50?', ops:['10','15','20','5'], r:0},
 {m:'Matematica', cl:'4', a:'Percentuali', d:'medio', q:'Quanto vale il 10% di 100?', ops:['1','10','100','5'], r:1},
 {m:'Matematica', cl:'4', a:'Percentuali', d:'medio', q:'Il simbolo % significa:', ops:['più grande','per mille','per cento','per due'], r:2},
 {m:'Matematica', cl:'4', a:'Percentuali', d:'medio', q:'Un gioco costa 80 euro con uno SCONTO del 25%. Quanto paghi?', ops:['65 euro','75 euro','55 euro','60 euro'], r:3},
 {m:'Matematica', cl:'4', a:'Percentuali', d:'medio', q:'In una classe di 20 studenti, il 50% porta gli occhiali. Quanti studenti sono?', ops:['2','5','10','15'], r:2},
  // Geometria: figure e formule
 {m:'Matematica', cl:'4', a:'Geometria: figure e formule', d:'medio', q:'Quanto vale approssimativamente PI-GRECO (π)?', ops:['1,41','2,72','3,99','3,14'], r:3},
  // Potenze ed espressioni
 {m:'Matematica', cl:'4', a:'Potenze ed espressioni', d:'medio', q:'Nella potenza 5³, il numero 3 si chiama:', ops:['quoziente','radice','base','esponente'], r:3},
 {m:'Matematica', cl:'4', a:'Potenze ed espressioni', d:'medio', q:'Quanto fa 10³?', ops:['100','1000','10000','30'], r:1},
 {m:'Matematica', cl:'4', a:'Potenze ed espressioni', d:'medio', q:'Quanto fa 5² + 1?', ops:['11','26','25','36'], r:1},
 {m:'Matematica', cl:'4', a:'Potenze ed espressioni', d:'medio', q:'Quanto fa 2⁴?', ops:['24','8','6','16'], r:3},
 {m:'Matematica', cl:'4', a:'Potenze ed espressioni', d:'medio', q:'Quanto fa 2⁰?', ops:['2','10','0','1'], r:3},
 {m:'Matematica', cl:'4', a:'Potenze ed espressioni', d:'medio', q:'In un’espressione, che cosa si calcola PRIMA?', ops:['le moltiplicazioni','le parentesi','il risultato','le addizioni'], r:1},
  // Statistica e problemi
 {m:'Matematica', cl:'4', a:'Statistica e problemi', d:'medio', q:'La media di 6, 7 e 8 vale:', ops:['7','8','21','6'], r:0},
 {m:'Matematica', cl:'4', a:'Statistica e problemi', d:'medio', q:'La MEDIANA di 3, 5, 7, 8, 9 vale:', ops:['5','7','8','6'], r:1},
 {m:'Matematica', cl:'4', a:'Statistica e problemi', d:'medio', q:'Marco ha 3,50 euro e spende 2,75 euro. Quanti euro gli avanzano?', ops:['1,75','0,75','1,25','0,25'], r:1},
 {m:'Matematica', cl:'4', a:'Statistica e problemi', d:'medio', q:'Quanto vale 2/5 di 30?', ops:['15','6','10','12'], r:3},
 {m:'Matematica', cl:'4', a:'Statistica e problemi', d:'medio', q:'Un premio di 100 euro va diviso in parti UGUALI tra 4 bambini. Quanto riceve ciascuno?', ops:['20 euro','25 euro','30 euro','40 euro'], r:1},
 {m:'Matematica', cl:'4', a:'Statistica e problemi', d:'medio', q:'Un treno percorre 60 km in un’ora. In 2 ore e mezza quanti km percorre?', ops:['100 km','120 km','150 km','180 km'], r:2},
  // ---- DIFFICILE ----
  // Numeri decimali
 {m:'Matematica', cl:'4', a:'Numeri decimali', d:'difficile', q:'Quanto fa 2,5 × 1,2?', ops:['3','2,7','30','2,5'], r:0},
 {m:'Matematica', cl:'4', a:'Numeri decimali', d:'difficile', q:'Quanto fa 7,5 ÷ 1,5?', ops:['7,5','15','5','0,5'], r:2},
  // Percentuali
 {m:'Matematica', cl:'4', a:'Percentuali', d:'difficile', q:'Il 25% equivale alla frazione:', ops:['1/4','1/5','3/4','1/2'], r:0},
 {m:'Matematica', cl:'4', a:'Percentuali', d:'difficile', q:'Il 50% di 90 vale:', ops:['40','45','50','48'], r:1},
  // Geometria: figure e formule
 {m:'Matematica', cl:'4', a:'Geometria: figure e formule', d:'difficile', q:'L’area del PARALLELOGRAMMA si calcola:', ops:['lato × 4','(base × altezza) ÷ 2','base × altezza','base + altezza'], r:2},
 {m:'Matematica', cl:'4', a:'Geometria: figure e formule', d:'difficile', q:'Il DIAMETRO di un cerchio è:', ops:['uguale al raggio','il doppio del raggio','la metà del raggio','tre volte il raggio'], r:1},
 {m:'Matematica', cl:'4', a:'Geometria: figure e formule', d:'difficile', q:'L’area del TRAPEZIO si calcola:', ops:['b × h ÷ 3','(base maggiore + base minore) × altezza ÷ 2','base × altezza','lato × lato'], r:1},
 {m:'Matematica', cl:'4', a:'Geometria: figure e formule', d:'difficile', q:'La formula della CIRCONFERENZA è:', ops:['C = r²','C = 2r','C = 2πr','C = πr²'], r:2},
 {m:'Matematica', cl:'4', a:'Geometria: figure e formule', d:'difficile', q:'Se il raggio di un cerchio è 2 cm, il diametro è:', ops:['1 cm','2 cm','4 cm','6 cm'], r:2},
 {m:'Matematica', cl:'4', a:'Geometria: figure e formule', d:'difficile', q:'L’area di un quadrato di lato 5 cm è:', ops:['15 cm²','10 cm²','20 cm²','25 cm²'], r:3},
 {m:'Matematica', cl:'4', a:'Geometria: figure e formule', d:'difficile', q:'Se il lato di un quadrato RADDOPPIA, la sua area:', ops:['resta uguale','si dimezza','raddoppia','quadruplica'], r:3},
 {m:'Matematica', cl:'4', a:'Geometria: figure e formule', d:'difficile', q:'Un parallelogramma con base 8 cm e altezza 3 cm ha area:', ops:['24 cm²','16 cm²','22 cm²','11 cm²'], r:0},
  // Potenze ed espressioni
 {m:'Matematica', cl:'4', a:'Potenze ed espressioni', d:'difficile', q:'2 × 2 × 2 scritto come POTENZA è:', ops:['2³','2²','3²','2×3'], r:0},
 {m:'Matematica', cl:'4', a:'Potenze ed espressioni', d:'difficile', q:'Quanto fa 3 + 2 × 4?', ops:['20','11','24','14'], r:1},
 {m:'Matematica', cl:'4', a:'Potenze ed espressioni', d:'difficile', q:'Quanto fa (3 + 2) × 4?', ops:['14','20','11','24'], r:1},
  // Statistica e problemi
 {m:'Matematica', cl:'4', a:'Statistica e problemi', d:'difficile', q:'La media di 10 e 20 vale:', ops:['15','20','30','10'], r:0},
 ],

 /* ==================== CLASSE 4 - Musica ==================== */
 '4MU': [
  // ---- FACILE ----
  // Le figure musicali
 {m:'Musica', cl:'4', a:'Le figure musicali', d:'facile', q:'Le figure musicali indicano:', ops:['il volume','l’altezza','la durata dei suoni','il colore'], r:2},
 {m:'Musica', cl:'4', a:'Le figure musicali', d:'facile', q:'La semibreve dura:', ops:['4 tempi','2 tempi','1 tempo','mezzo tempo'], r:0},
 {m:'Musica', cl:'4', a:'Le figure musicali', d:'facile', q:'La minima dura:', ops:['mezzo tempo','2 tempi','4 tempi','1 tempo'], r:1},
  // Gli strumenti
 {m:'Musica', cl:'4', a:'Gli strumenti', d:'facile', q:'Il pianoforte è a:', ops:['tasti','corde pizzicate','fiato','percussione'], r:0},
 {m:'Musica', cl:'4', a:'Gli strumenti', d:'facile', q:'Il violino è a:', ops:['tasti','corde','fiato','percussione'], r:1},
 {m:'Musica', cl:'4', a:'Gli strumenti', d:'facile', q:'Il flauto è a:', ops:['percussione','tasti','fiato','corde'], r:2},
 {m:'Musica', cl:'4', a:'Gli strumenti', d:'facile', q:'Il tamburo è a:', ops:['corde','fiato','tasti','percussione'], r:3},
  // La melodia
 {m:'Musica', cl:'4', a:'La melodia', d:'facile', q:'La melodia si canta:', ops:['con le mani','con i piedi','con gli occhi','con la voce'], r:3},
 {m:'Musica', cl:'4', a:'La melodia', d:'facile', q:'Una melodia può essere:', ops:['allegra o triste','solo allegra','solo triste','solo rumorosa'], r:0},
 {m:'Musica', cl:'4', a:'La melodia', d:'facile', q:'La melodia è fatta di:', ops:['colori','note','parole','numeri'], r:1},
  // Le famiglie di strumenti
 {m:'Musica', cl:'4', a:'Le famiglie di strumenti', d:'facile', q:'Il violino è nelle:', ops:['tasti','corde','fiati','percussioni'], r:1},
 {m:'Musica', cl:'4', a:'Le famiglie di strumenti', d:'facile', q:'Il flauto è nei:', ops:['percussioni','tasti','fiati','corde'], r:2},
 {m:'Musica', cl:'4', a:'Le famiglie di strumenti', d:'facile', q:'Il tamburo è nelle:', ops:['corde','fiati','tasti','percussioni'], r:3},
  // ---- MEDIO ----
  // Il pentagramma
 {m:'Musica', cl:'4', a:'Il pentagramma', d:'medio', q:'La chiave di basso si chiama anche:', ops:['chiave di FA','chiave di SOL','chiave di DO','chiave di LA'], r:0},
 {m:'Musica', cl:'4', a:'Il pentagramma', d:'medio', q:'Le note fuori dalle righe usano:', ops:['i numeri','le frecce','i tagli addizionali','i colori'], r:2},
 {m:'Musica', cl:'4', a:'Il pentagramma', d:'medio', q:'Gli spazi del pentagramma sono:', ops:['quattro','cinque','tre','dieci'], r:0},
  // Le figure musicali
 {m:'Musica', cl:'4', a:'Le figure musicali', d:'medio', q:'La figura più lunga è:', ops:['la minima','la semiminima','la croma','la semibreve'], r:3},
 {m:'Musica', cl:'4', a:'Le figure musicali', d:'medio', q:'La semiminima dura:', ops:['2 tempi','mezzo tempo','1 tempo','4 tempi'], r:2},
 {m:'Musica', cl:'4', a:'Le figure musicali', d:'medio', q:'La croma dura:', ops:['1 tempo','2 tempi','4 tempi','mezzo tempo'], r:3},
 {m:'Musica', cl:'4', a:'Le figure musicali', d:'medio', q:'Le pause indicano:', ops:['il silenzio','un suono','un colore','una nota'], r:0},
  // Gli strumenti
 {m:'Musica', cl:'4', a:'Gli strumenti', d:'medio', q:'Il violoncello è a:', ops:['corde','fiato','percussione','tasti'], r:0},
 {m:'Musica', cl:'4', a:'Gli strumenti', d:'medio', q:'Il clarinetto è a:', ops:['tasti','fiato','corde','percussione'], r:1},
 {m:'Musica', cl:'4', a:'Gli strumenti', d:'medio', q:'L’organo ha:', ops:['pelli','sonagli','tasti e canne','corde'], r:2},
  // La melodia
 {m:'Musica', cl:'4', a:'La melodia', d:'medio', q:'La melodia si riconosce:', ops:['solo toccandola','solo annusandola','cantandola','solo guardandola'], r:2},
 {m:'Musica', cl:'4', a:'La melodia', d:'medio', q:'Una melodia che sale è:', ops:['discendente','ferma','invisibile','ascendente'], r:3},
 {m:'Musica', cl:'4', a:'La melodia', d:'medio', q:'Una melodia che scende è:', ops:['discendente','ascendente','ferma','invisibile'], r:0},
 {m:'Musica', cl:'4', a:'La melodia', d:'medio', q:'Il tema di una canzone è:', ops:['il volume','la melodia principale','le parole','il ritmo'], r:1},
 {m:'Musica', cl:'4', a:'La melodia', d:'medio', q:'Comporre una melodia significa:', ops:['dormire','correre','mangiare','inventare note'], r:3},
  // Le famiglie di strumenti
 {m:'Musica', cl:'4', a:'Le famiglie di strumenti', d:'medio', q:'Le famiglie di strumenti sono:', ops:['corde, fiati e percussioni','solo corde','solo fiati','solo percussioni'], r:0},
 {m:'Musica', cl:'4', a:'Le famiglie di strumenti', d:'medio', q:'L’orchestra riunisce:', ops:['tutte le famiglie','una famiglia','solo fiati','solo percussioni'], r:0},
 {m:'Musica', cl:'4', a:'Le famiglie di strumenti', d:'medio', q:'La tromba è nei:', ops:['tasti','fiati','corde','percussioni'], r:1},
 {m:'Musica', cl:'4', a:'Le famiglie di strumenti', d:'medio', q:'La chitarra è nelle:', ops:['percussioni','tasti','corde','fiati'], r:2},
  // ---- DIFFICILE ----
  // Il pentagramma
 {m:'Musica', cl:'4', a:'Il pentagramma', d:'difficile', q:'La chiave indica:', ops:['il ritmo','il volume','la velocità','la posizione delle note'], r:3},
 {m:'Musica', cl:'4', a:'Il pentagramma', d:'difficile', q:'Il rigo musicale serve per:', ops:['dormire','scrivere la melodia','disegnare','cucinare'], r:1},
  // Le figure musicali
 {m:'Musica', cl:'4', a:'Le figure musicali', d:'difficile', q:'Due crome valgono:', ops:['due semibrevi','una semiminima','una minima','una semibreve'], r:1},
 {m:'Musica', cl:'4', a:'Le figure musicali', d:'difficile', q:'Due minime valgono:', ops:['una croma','mezza croma','una semibreve','una semiminima'], r:2},
 {m:'Musica', cl:'4', a:'Le figure musicali', d:'difficile', q:'La durata si misura in:', ops:['metri','litri','gradi','tempi'], r:3},
  // Gli strumenti
 {m:'Musica', cl:'4', a:'Gli strumenti', d:'difficile', q:'Il sassofono è a:', ops:['corde','percussione','tasti','fiato'], r:3},
 {m:'Musica', cl:'4', a:'Gli strumenti', d:'difficile', q:'L’arpa è a:', ops:['corde','fiato','percussione','tasti'], r:0},
 {m:'Musica', cl:'4', a:'Gli strumenti', d:'difficile', q:'I timpani sono a:', ops:['tasti','percussione','corde','fiato'], r:1},
  // La melodia
 {m:'Musica', cl:'4', a:'La melodia', d:'difficile', q:'La melodia e il ritmo insieme formano:', ops:['solo colori','solo pause','la musica','solo parole'], r:2},
  // Le famiglie di strumenti
 {m:'Musica', cl:'4', a:'Le famiglie di strumenti', d:'difficile', q:'Il direttore d’orchestra serve per:', ops:['dormire','cucinare','correre','guidare i musicisti'], r:3},
 {m:'Musica', cl:'4', a:'Le famiglie di strumenti', d:'difficile', q:'I fiati si dividono in:', ops:['legni e ottoni','solo legni','solo ottoni','solo metalli'], r:0},
 {m:'Musica', cl:'4', a:'Le famiglie di strumenti', d:'difficile', q:'Il pianoforte appartiene:', ops:['alle corde pizzicate','agli strumenti a tastiera','ai fiati','alle percussioni'], r:1},
 ],

 /* ==================== CLASSE 4 - Religione Cattolica ==================== */
 '4R': [
  // ---- FACILE ----
  // L’Antico Testamento
 {m:'Religione Cattolica', cl:'4', a:'L’Antico Testamento', d:'facile', q:'Noè salvò gli animali:', ops:['in una grotta','in una torre','in un castello','nell’arca'], r:3},
  // Il Nuovo Testamento
 {m:'Religione Cattolica', cl:'4', a:'Il Nuovo Testamento', d:'facile', q:'Gli Atti degli Apostoli raccontano:', ops:['una guerra','la prima Chiesa','una gara','una ricetta'], r:1},
  // I sacramenti
 {m:'Religione Cattolica', cl:'4', a:'I sacramenti', d:'facile', q:'L’eucaristia è anche detta:', ops:['matrimonio','battesimo','comunione','cresima'], r:2},
  // I santi
 {m:'Religione Cattolica', cl:'4', a:'I santi', d:'facile', q:'San Francesco amava:', ops:['solo i soldi','solo il potere','la guerra','la natura e i poveri'], r:3},
 {m:'Religione Cattolica', cl:'4', a:'I santi', d:'facile', q:'San Francesco è nato ad:', ops:['Assisi','Roma','Milano','Napoli'], r:0},
 {m:'Religione Cattolica', cl:'4', a:'I santi', d:'facile', q:'Santa Lucia è la protettrice:', ops:['della musica','della vista','dello sport','della cucina'], r:1},
  // Le feste
 {m:'Religione Cattolica', cl:'4', a:'Le feste', d:'facile', q:'Il Natale si festeggia:', ops:['il 25 dicembre','il 1 gennaio','il 25 aprile','il 2 giugno'], r:0},
 {m:'Religione Cattolica', cl:'4', a:'Le feste', d:'facile', q:'L’Avvento prepara:', ops:['la Pentecoste','il Carnevale','il Natale','la Pasqua'], r:2},
 {m:'Religione Cattolica', cl:'4', a:'Le feste', d:'facile', q:'La Quaresima prepara:', ops:['il Natale','la Pentecoste','l’Epifania','la Pasqua'], r:3},
  // ---- MEDIO ----
  // L’Antico Testamento
 {m:'Religione Cattolica', cl:'4', a:'L’Antico Testamento', d:'medio', q:'Abramo è considerato:', ops:['il padre dei credenti','un re','un soldato','un mercante'], r:0},
 {m:'Religione Cattolica', cl:'4', a:'L’Antico Testamento', d:'medio', q:'Giuseppe fu venduto dai:', ops:['re','fratelli','soldati','mercanti'], r:1},
 {m:'Religione Cattolica', cl:'4', a:'L’Antico Testamento', d:'medio', q:'Davide era:', ops:['un profeta','un sacerdote','un re pastore','un mercante'], r:2},
  // Il Nuovo Testamento
 {m:'Religione Cattolica', cl:'4', a:'Il Nuovo Testamento', d:'medio', q:'Gli evangelisti sono:', ops:['solo tre','dieci','Matteo, Marco, Luca e Giovanni','solo due'], r:2},
 {m:'Religione Cattolica', cl:'4', a:'Il Nuovo Testamento', d:'medio', q:'Le lettere di Paolo sono:', ops:['favole','ricette','numeri','scritti ai cristiani'], r:3},
 {m:'Religione Cattolica', cl:'4', a:'Il Nuovo Testamento', d:'medio', q:'Il Nuovo Testamento ci parla:', ops:['dell’amore di Gesù','dell’odio','della guerra','della paura'], r:0},
 {m:'Religione Cattolica', cl:'4', a:'Il Nuovo Testamento', d:'medio', q:'L’Apocalisse è:', ops:['una favola','un libro simbolico','una ricetta','un diario'], r:1},
 {m:'Religione Cattolica', cl:'4', a:'Il Nuovo Testamento', d:'medio', q:'Il Vangelo significa:', ops:['una gara','un gioco','buona notizia','cattiva notizia'], r:2},
  // I sacramenti
 {m:'Religione Cattolica', cl:'4', a:'I sacramenti', d:'medio', q:'L’unzione degli infermi è per:', ops:['i soldati','i malati','i bambini','i re'], r:1},
  // I santi
 {m:'Religione Cattolica', cl:'4', a:'I santi', d:'medio', q:'I santi sono:', ops:['solo soldati','solo ricchi','amici di Dio','solo re'], r:2},
 {m:'Religione Cattolica', cl:'4', a:'I santi', d:'medio', q:'I santi hanno vissuto:', ops:['solo per i soldi','solo per il potere','seguendo Gesù','solo per sé'], r:2},
 {m:'Religione Cattolica', cl:'4', a:'I santi', d:'medio', q:'Sant’Antonio è noto per:', ops:['solo per giocare','solo per dormire','solo per correre','aiutare a ritrovare'], r:3},
 {m:'Religione Cattolica', cl:'4', a:'I santi', d:'medio', q:'San Martino divise:', ops:['il mantello con un povero','i soldi','i giocattoli','i dolci'], r:0},
 {m:'Religione Cattolica', cl:'4', a:'I santi', d:'medio', q:'Essere santi significa:', ops:['essere ricchi','essere famosi','vivere nell’amore','essere perfetti nei giochi'], r:2},
  // Le feste
 {m:'Religione Cattolica', cl:'4', a:'Le feste', d:'medio', q:'L’Epifania è il:', ops:['25 aprile','6 gennaio','25 dicembre','1 gennaio'], r:1},
 {m:'Religione Cattolica', cl:'4', a:'Le feste', d:'medio', q:'L’Assunzione di Maria si festeggia:', ops:['il 1 gennaio','il 2 giugno','il 15 agosto','il 25 dicembre'], r:2},
  // ---- DIFFICILE ----
  // L’Antico Testamento
 {m:'Religione Cattolica', cl:'4', a:'L’Antico Testamento', d:'difficile', q:'Mosè ricevette i comandamenti sul monte:', ops:['Olimpo','Bianco','Rosa','Sinai'], r:3},
  // Il Nuovo Testamento
 {m:'Religione Cattolica', cl:'4', a:'Il Nuovo Testamento', d:'difficile', q:'I cristiani leggono il Vangelo:', ops:['per giocare','per dormire','per correre','per seguire Gesù'], r:3},
  // I sacramenti
 {m:'Religione Cattolica', cl:'4', a:'I sacramenti', d:'difficile', q:'L’ordine sacro riguarda:', ops:['i bambini','i mercanti','i soldati','i sacerdoti'], r:3},
 {m:'Religione Cattolica', cl:'4', a:'I sacramenti', d:'difficile', q:'I sacramenti ci donano:', ops:['la grazia di Dio','solo regali','solo premi','solo feste'], r:0},
  // I santi
 {m:'Religione Cattolica', cl:'4', a:'I santi', d:'difficile', q:'I santi sono ricordati:', ops:['mai','nel calendario','solo nei libri','solo nei film'], r:1},
 {m:'Religione Cattolica', cl:'4', a:'I santi', d:'difficile', q:'Tutti possiamo:', ops:['solo alcuni','nessuno','solo i preti','diventare santi'], r:3},
  // Le feste
 {m:'Religione Cattolica', cl:'4', a:'Le feste', d:'difficile', q:'L’Immacolata si festeggia:', ops:['il 25 dicembre','il 1 gennaio','il 2 giugno','l’8 dicembre'], r:3},
 {m:'Religione Cattolica', cl:'4', a:'Le feste', d:'difficile', q:'Ognissanti si festeggia:', ops:['il 1 novembre','il 25 dicembre','il 1 gennaio','il 2 giugno'], r:0},
 ],

 /* ==================== CLASSE 4 - Scienze ==================== */
 '4S': [
  // ---- FACILE ----
  // Il sistema solare
 {m:'Scienze', cl:'4', a:'Il sistema solare', d:'facile', q:'Quanti pianeti ci sono nel sistema solare?', ops:['due','cento','mille','otto'], r:3},
  // La cellula
 {m:'Scienze', cl:'4', a:'La cellula', d:'facile', q:'Il nostro corpo è formato da:', ops:['una sola cellula','nessuna cellula','solo ossa','tante cellule'], r:3},
 {m:'Scienze', cl:'4', a:'La cellula', d:'facile', q:'Le piante sono formate da:', ops:['vetro','cellule','mattoni','ferro'], r:1},
  // La fotosintesi
 {m:'Scienze', cl:'4', a:'La fotosintesi', d:'facile', q:'Il colore verde delle foglie è dato dalla:', ops:['acqua','sabbia','colla','clorofilla'], r:3},
  // Il ciclo vitale
 {m:'Scienze', cl:'4', a:'Il ciclo vitale', d:'facile', q:'Ogni essere vivente:', ops:['non cambia mai','non muore mai','nasce, cresce, si riproduce e muore','resta sempre uguale'], r:2},
 {m:'Scienze', cl:'4', a:'Il ciclo vitale', d:'facile', q:'Le piante nascono da:', ops:['un seme','una pietra','un ferro','un vetro'], r:0},
 {m:'Scienze', cl:'4', a:'Il ciclo vitale', d:'facile', q:'Gli animali appena nati si chiamano:', ops:['nonni','cuccioli','anziani','adulti'], r:1},
  // L’energia
 {m:'Scienze', cl:'4', a:'L’energia', d:'facile', q:'L’energia serve per:', ops:['fare lavoro e movimento','dormire sempre','sparire','fermarsi'], r:0},
 {m:'Scienze', cl:'4', a:'L’energia', d:'facile', q:'Il sole produce:', ops:['buio','energia luminosa e calore','freddo','ghiaccio'], r:1},
 {m:'Scienze', cl:'4', a:'L’energia', d:'facile', q:'Il vento è una fonte di energia:', ops:['che finisce subito','che non esiste','nucleare','rinnovabile'], r:3},
  // ---- MEDIO ----
  // Il sistema solare
 {m:'Scienze', cl:'4', a:'Il sistema solare', d:'medio', q:'Il centro del sistema solare è:', ops:['il sole','la Terra','la luna','Marte'], r:0},
 {m:'Scienze', cl:'4', a:'Il sistema solare', d:'medio', q:'La Terra è:', ops:['un asteroide','un pianeta','una stella','una cometa'], r:1},
 {m:'Scienze', cl:'4', a:'Il sistema solare', d:'medio', q:'Il sole è:', ops:['una luna','un buco nero','una stella','un pianeta'], r:2},
 {m:'Scienze', cl:'4', a:'Il sistema solare', d:'medio', q:'Il pianeta più vicino al sole è:', ops:['Mercurio','Nettuno','Giove','Saturno'], r:0},
 {m:'Scienze', cl:'4', a:'Il sistema solare', d:'medio', q:'La luna è:', ops:['una cometa','un satellite naturale','un pianeta','una stella'], r:1},
 {m:'Scienze', cl:'4', a:'Il sistema solare', d:'medio', q:'Il pianeta più grande è:', ops:['Marte','Terra','Giove','Mercurio'], r:2},
 {m:'Scienze', cl:'4', a:'Il sistema solare', d:'medio', q:'Il pianeta rosso è:', ops:['Urano','Marte','Venere','Nettuno'], r:1},
  // La fotosintesi
 {m:'Scienze', cl:'4', a:'La fotosintesi', d:'medio', q:'La pianta assorbe dal terreno:', ops:['sabbia','acqua e sali minerali','ferro','vetro'], r:1},
  // Il ciclo vitale
 {m:'Scienze', cl:'4', a:'Il ciclo vitale', d:'medio', q:'La prima fase della vita è:', ops:['la morte','la vecchiaia','il sonno','la nascita'], r:3},
 {m:'Scienze', cl:'4', a:'Il ciclo vitale', d:'medio', q:'Crescere significa:', ops:['sparire','restare fermi','diventare più grandi','diventare più piccoli'], r:2},
 {m:'Scienze', cl:'4', a:'Il ciclo vitale', d:'medio', q:'La riproduzione serve per:', ops:['sparire','dormire','mangiare','avere nuovi esseri viventi'], r:3},
  // L’energia
 {m:'Scienze', cl:'4', a:'L’energia', d:'medio', q:'Le fonti rinnovabili:', ops:['non si esauriscono','finiscono subito','non esistono','sono solo il carbone'], r:0},
 {m:'Scienze', cl:'4', a:'L’energia', d:'medio', q:'Il carbone e il petrolio sono fonti:', ops:['invisibili','non rinnovabili','rinnovabili','magiche'], r:1},
 {m:'Scienze', cl:'4', a:'L’energia', d:'medio', q:'L’energia del sole si chiama:', ops:['idrica','nucleare','solare','eolica'], r:2},
  // ---- DIFFICILE ----
  // La fotosintesi
 {m:'Scienze', cl:'4', a:'La fotosintesi', d:'difficile', q:'La fotosintesi serve alla pianta per:', ops:['produrre il suo nutrimento','respirare con le branchie','volare','cantare'], r:0},
 {m:'Scienze', cl:'4', a:'La fotosintesi', d:'difficile', q:'La fotosintesi avviene nelle:', ops:['foglie','radici','pietre','nuvole'], r:0},
 {m:'Scienze', cl:'4', a:'La fotosintesi', d:'difficile', q:'Per la fotosintesi la pianta usa:', ops:['il ghiaccio','la luce del sole','il buio','il fuoco'], r:1},
 {m:'Scienze', cl:'4', a:'La fotosintesi', d:'difficile', q:'La fotosintesi produce:', ops:['plastica','benzina','ossigeno','anidride carbonica'], r:2},
 {m:'Scienze', cl:'4', a:'La fotosintesi', d:'difficile', q:'La fotosintesi avviene soprattutto:', ops:['mai','solo d’inverno','di giorno','di notte'], r:2},
 {m:'Scienze', cl:'4', a:'La fotosintesi', d:'difficile', q:'Senza le piante, l’aria avrebbe meno:', ops:['anidride carbonica','fumo','polvere','ossigeno'], r:3},
 {m:'Scienze', cl:'4', a:'La fotosintesi', d:'difficile', q:'Nella fotosintesi la pianta usa anche:', ops:['l’anidride carbonica','il ferro','la plastica','il petrolio'], r:0},
 {m:'Scienze', cl:'4', a:'La fotosintesi', d:'difficile', q:'La fotosintesi avviene grazie alla luce e alla:', ops:['gomma','clorofilla','lana','cera'], r:1},
  // Il sistema solare
 {m:'Scienze', cl:'4', a:'Il sistema solare', d:'difficile', q:'La Terra gira intorno al sole in circa:', ops:['un giorno','un’ora','un mese','un anno'], r:3},
 {m:'Scienze', cl:'4', a:'Il sistema solare', d:'difficile', q:'La Terra ruota su se stessa in circa:', ops:['24 ore','365 giorni','un anno','un mese'], r:0},
  // La cellula
 {m:'Scienze', cl:'4', a:'La cellula', d:'difficile', q:'La cellula è:', ops:['un colore','un suono','la più piccola unità vivente','una pietra'], r:2},
 {m:'Scienze', cl:'4', a:'La cellula', d:'difficile', q:'Le cellule si vedono con:', ops:['il microscopio','gli occhi da lontano','le mani','il naso'], r:0},
 {m:'Scienze', cl:'4', a:'La cellula', d:'difficile', q:'Ogni cellula ha una membrana che:', ops:['la rompe','la nasconde','la protegge','la colora'], r:2},
 {m:'Scienze', cl:'4', a:'La cellula', d:'difficile', q:'Il nucleo della cellula contiene:', ops:['acqua colorata','sabbia','ferro','il materiale genetico (DNA)'], r:3},
 {m:'Scienze', cl:'4', a:'La cellula', d:'difficile', q:'Le cellule si riproducono per:', ops:['divisione','magia','rumore','evaporazione'], r:0},
 {m:'Scienze', cl:'4', a:'La cellula', d:'difficile', q:'Gli organismi formati da una sola cellula si chiamano:', ops:['enormi','unicellulari','pluricellulari','multicellulari'], r:1},
 {m:'Scienze', cl:'4', a:'La cellula', d:'difficile', q:'Le cellule vegetali, a differenza delle animali, hanno:', ops:['le ali','le zampe','la parete cellulare','il pelo'], r:2},
 {m:'Scienze', cl:'4', a:'La cellula', d:'difficile', q:'Il DNA contiene:', ops:['il cibo','il sangue','l’acqua','le informazioni per la vita'], r:3},
  // Il ciclo vitale
 {m:'Scienze', cl:'4', a:'Il ciclo vitale', d:'difficile', q:'L’ultima fase del ciclo vitale è:', ops:['la morte','la nascita','la crescita','il gioco'], r:0},
 {m:'Scienze', cl:'4', a:'Il ciclo vitale', d:'difficile', q:'Il bruco, la crisalide e la farfalla sono fasi della:', ops:['condensazione','metamorfosi','fotosintesi','evaporazione'], r:1},
 {m:'Scienze', cl:'4', a:'Il ciclo vitale', d:'difficile', q:'I mammiferi nascono:', ops:['dai semi','dal ghiaccio','già formati dalla mamma','dalle uova sempre'], r:2},
 {m:'Scienze', cl:'4', a:'Il ciclo vitale', d:'difficile', q:'Il girino diventa:', ops:['un pesce','un uccello','un gatto','una rana'], r:3},
  // L’energia
 {m:'Scienze', cl:'4', a:'L’energia', d:'difficile', q:'L’energia elettrica accende:', ops:['i fiori','la sabbia','le lampadine','le piante'], r:2},
 {m:'Scienze', cl:'4', a:'L’energia', d:'difficile', q:'L’energia del vento si chiama:', ops:['solare','geotermica','nucleare','eolica'], r:3},
 {m:'Scienze', cl:'4', a:'L’energia', d:'difficile', q:'L’energia dell’acqua che cade si chiama:', ops:['idroelettrica','eolica','solare','nucleare'], r:0},
 {m:'Scienze', cl:'4', a:'L’energia', d:'difficile', q:'Risparmiare energia serve per:', ops:['rompere le lampadine','proteggere l’ambiente','sprecare di più','fare rumore'], r:1},
 ],

 /* ==================== CLASSE 4 - Storia ==================== */
 '4ST': [
  // ---- FACILE ----
  // Le civiltà antiche
 {m:'Storia', cl:'4', a:'Le civiltà antiche', d:'facile', q:'Le civiltà antiche avevano:', ops:['solo telefoni','città, leggi e scrittura','solo computer','solo auto'], r:1},
 {m:'Storia', cl:'4', a:'Le civiltà antiche', d:'facile', q:'Gli archeologi studiano:', ops:['le tabelline','i colori','i resti delle civiltà','le previsioni'], r:2},
 {m:'Storia', cl:'4', a:'Le civiltà antiche', d:'facile', q:'Un tempio antico era un luogo:', ops:['di sport','di internet','di scuola','di culto'], r:3},
  // I Greci
 {m:'Storia', cl:'4', a:'I Greci', d:'facile', q:'I Greci vivevano nella:', ops:['Francia','Russia','Grecia','Spagna'], r:2},
 {m:'Storia', cl:'4', a:'I Greci', d:'facile', q:'I Greci costruivano:', ops:['computer','grattacieli','aerei','templi'], r:3},
 {m:'Storia', cl:'4', a:'I Greci', d:'facile', q:'Le città-stato greche si chiamavano:', ops:['polis','computer','piramidi','castelli'], r:0},
 {m:'Storia', cl:'4', a:'I Greci', d:'facile', q:'Gli dei greci vivevano sul monte:', ops:['Vesuvio','Olimpo','Everest','Bianco'], r:1},
  // I Romani
 {m:'Storia', cl:'4', a:'I Romani', d:'facile', q:'I Romani vivevano in:', ops:['Italia','Grecia','Egitto','Francia'], r:0},
 {m:'Storia', cl:'4', a:'I Romani', d:'facile', q:'Il Colosseo si trova a:', ops:['Napoli','Torino','Roma','Milano'], r:2},
 {m:'Storia', cl:'4', a:'I Romani', d:'facile', q:'I Romani costruivano:', ops:['computer','aerei','navi spaziali','strade e acquedotti'], r:3},
  // Gli Etruschi
 {m:'Storia', cl:'4', a:'Gli Etruschi', d:'facile', q:'Gli Etruschi vivevano in:', ops:['Egitto','Spagna','Italia centrale (Toscana)','Grecia'], r:2},
 {m:'Storia', cl:'4', a:'Gli Etruschi', d:'facile', q:'Gli Etruschi erano abili:', ops:['astronauti','programmatori','piloti','artigiani e commercianti'], r:3},
 {m:'Storia', cl:'4', a:'Gli Etruschi', d:'facile', q:'Gli Etruschi vivevano in città chiamate:', ops:['lucumonie','polis','computer','castelli'], r:0},
 {m:'Storia', cl:'4', a:'Gli Etruschi', d:'facile', q:'Gli Etruschi scrivevano con un alfabeto:', ops:['arabo','proprio','latino moderno','inglese'], r:1},
  // L’impero romano
 {m:'Storia', cl:'4', a:'L’impero romano', d:'facile', q:'L’imperatore governava:', ops:['nessuno','tutto l’impero','una sola casa','una sola scuola'], r:1},
 {m:'Storia', cl:'4', a:'L’impero romano', d:'facile', q:'Le strade romane servivano per:', ops:['nuotare','dormire','spostare eserciti e merci','volare'], r:2},
 {m:'Storia', cl:'4', a:'L’impero romano', d:'facile', q:'I Romani fondarono molte:', ops:['stazioni spaziali','fabbriche di computer','aeroporti','città'], r:3},
  // ---- MEDIO ----
  // Le civiltà antiche
 {m:'Storia', cl:'4', a:'Le civiltà antiche', d:'medio', q:'Una civiltà antica è:', ops:['un popolo organizzato del passato','un computer','un aereo','un gioco'], r:0},
 {m:'Storia', cl:'4', a:'Le civiltà antiche', d:'medio', q:'Le civiltà antiche si svilupparono intorno al:', ops:['Mediterraneo','Polo Nord','deserto del Sahara','oceano Pacifico'], r:0},
 {m:'Storia', cl:'4', a:'Le civiltà antiche', d:'medio', q:'La scrittura serviva per:', ops:['dormire','registrare e comunicare','volare','nuotare'], r:1},
 {m:'Storia', cl:'4', a:'Le civiltà antiche', d:'medio', q:'Le prime città avevano:', ops:['solo aerei','solo navi spaziali','mura e mercati','solo computer'], r:2},
 {m:'Storia', cl:'4', a:'Le civiltà antiche', d:'medio', q:'Le civiltà antiche del Mediterraneo sono:', ops:['Vichinghi','Inuit','Maya','Greci e Romani'], r:3},
  // I Greci
 {m:'Storia', cl:'4', a:'I Greci', d:'medio', q:'Il re degli dei greci era:', ops:['Ares','Poseidone','Zeus','Apollo'], r:2},
 {m:'Storia', cl:'4', a:'I Greci', d:'medio', q:'Le Olimpiadi antiche si tenevano in onore di:', ops:['Apollo','Ares','Ermes','Zeus'], r:3},
 {m:'Storia', cl:'4', a:'I Greci', d:'medio', q:'I Greci erano bravi in:', ops:['filosofia, arte e sport','informatica','aviazione','astronautica'], r:0},
 {m:'Storia', cl:'4', a:'I Greci', d:'medio', q:'I poemi di Omero sono:', ops:['La Bibbia','Il Corano','Le Georgiche','Iliade e Odissea'], r:3},
  // I Romani
 {m:'Storia', cl:'4', a:'I Romani', d:'medio', q:'La leggenda dice che Roma fu fondata da:', ops:['Romolo e Remo','Cesare e Augusto','Dante e Virgilio','Achille e Ettore'], r:0},
 {m:'Storia', cl:'4', a:'I Romani', d:'medio', q:'Un famoso condottiero romano fu:', ops:['Fidia','Giulio Cesare','Omero','Platone'], r:1},
 {m:'Storia', cl:'4', a:'I Romani', d:'medio', q:'Gli acquedotti portavano:', ops:['il ferro','il fuoco','l’acqua','il cibo'], r:2},
  // Gli Etruschi
 {m:'Storia', cl:'4', a:'Gli Etruschi', d:'medio', q:'Gli Etruschi commerciavano soprattutto:', ops:['con gli Aztechi','con i Vichinghi','con i Greci','con i Maya'], r:2},
 {m:'Storia', cl:'4', a:'Gli Etruschi', d:'medio', q:'Le tombe etrusche erano ricche di:', ops:['computer','auto','telefoni','affreschi e oggetti'], r:3},
 {m:'Storia', cl:'4', a:'Gli Etruschi', d:'medio', q:'Gli Etruschi furono poi conquistati dai:', ops:['Romani','Greci','Egizi','Persiani'], r:0},
  // L’impero romano
 {m:'Storia', cl:'4', a:'L’impero romano', d:'medio', q:'La "pace romana" era:', ops:['un periodo di relativa calma','una guerra','una danza','un cibo'], r:0},
 {m:'Storia', cl:'4', a:'L’impero romano', d:'medio', q:'Il latino era la lingua:', ops:['segreta','ufficiale dell’impero','solo dei Greci','solo dei barbari'], r:1},
 {m:'Storia', cl:'4', a:'L’impero romano', d:'medio', q:'Il Colosseo ospitava:', ops:['partite di calcio','concerti rock','spettacoli e giochi','lezioni di scuola'], r:2},
  // ---- DIFFICILE ----
  // Le civiltà antiche
 {m:'Storia', cl:'4', a:'Le civiltà antiche', d:'difficile', q:'Il commercio antico avveniva:', ops:['via terra e via mare','via internet','via aereo','via satellite'], r:0},
 {m:'Storia', cl:'4', a:'Le civiltà antiche', d:'difficile', q:'Le monete servivano per:', ops:['cantare','comprare e vendere','volare','scrivere'], r:1},
  // I Greci
 {m:'Storia', cl:'4', a:'I Greci', d:'difficile', q:'Il Partenone è un tempio di:', ops:['Londra','Atene','Roma','Parigi'], r:1},
 {m:'Storia', cl:'4', a:'I Greci', d:'difficile', q:'La democrazia nacque ad:', ops:['Sparta','Cartagine','Atene','Roma'], r:2},
  // I Romani
 {m:'Storia', cl:'4', a:'I Romani', d:'difficile', q:'La capitale dell’impero romano era:', ops:['Madrid','Roma','Atene','Parigi'], r:1},
 {m:'Storia', cl:'4', a:'I Romani', d:'difficile', q:'I Romani parlavano:', ops:['il greco','il francese','l’inglese','il latino'], r:3},
 {m:'Storia', cl:'4', a:'I Romani', d:'difficile', q:'L’esercito romano era formato da:', ops:['legionari','cavalieri soltanto','marinai soltanto','contadini'], r:0},
 {m:'Storia', cl:'4', a:'I Romani', d:'difficile', q:'I Romani adoravano:', ops:['solo la pioggia','molti dei','un solo dio','nessun dio'], r:1},
  // Gli Etruschi
 {m:'Storia', cl:'4', a:'Gli Etruschi', d:'difficile', q:'Gli Etruschi vivevano in una regione oggi chiamata:', ops:['Lombardia','Toscana','Sicilia','Sardegna'], r:1},
 {m:'Storia', cl:'4', a:'Gli Etruschi', d:'difficile', q:'Gli Etruschi credevano:', ops:['negli aerei','nei robot','nella vita dopo la morte','nei computer'], r:2},
 {m:'Storia', cl:'4', a:'Gli Etruschi', d:'difficile', q:'Dalle tombe etrusche gli archeologi hanno trovato:', ops:['computer','auto','telefoni','vasi e gioielli'], r:3},
  // L’impero romano
 {m:'Storia', cl:'4', a:'L’impero romano', d:'difficile', q:'L’impero romano era:', ops:['molto vasto','piccolissimo','solo una città','solo un’isola'], r:0},
 {m:'Storia', cl:'4', a:'L’impero romano', d:'difficile', q:'I confini dell’impero erano difesi da:', ops:['computer','aerei','satelliti','soldati e fortificazioni'], r:3},
 {m:'Storia', cl:'4', a:'L’impero romano', d:'difficile', q:'L’impero romano d’Occidente cadde nel:', ops:['476 d.C.','1492','1789','2000'], r:0},
 {m:'Storia', cl:'4', a:'L’impero romano', d:'difficile', q:'Le terme romane erano:', ops:['mercati','bagni pubblici','scuole','teatri'], r:1},
 ],

 /* ==================== CLASSE 4 - Tecnologia e Informatica ==================== */
 '4TI': [
  // ---- FACILE ----
  // La programmazione
 {m:'Tecnologia e Informatica', cl:'4', a:'La programmazione', d:'facile', q:'Scratch serve per:', ops:['dormire','mangiare','correre','imparare a programmare'], r:3},
  // ---- MEDIO ----
  // Il computer
 {m:'Tecnologia e Informatica', cl:'4', a:'Il computer', d:'medio', q:'I file sono:', ops:['documenti salvati','solo giochi','solo colori','solo suoni'], r:0},
 {m:'Tecnologia e Informatica', cl:'4', a:'Il computer', d:'medio', q:'Le cartelle servono per:', ops:['correre','organizzare i file','dormire','mangiare'], r:1},
  // Internet
 {m:'Tecnologia e Informatica', cl:'4', a:'Internet', d:'medio', q:'Un indirizzo web inizia spesso con:', ops:['zzz','xxx','www','aaa'], r:2},
 {m:'Tecnologia e Informatica', cl:'4', a:'Internet', d:'medio', q:'Il download significa:', ops:['correre','scaricare','caricare','dormire'], r:1},
 {m:'Tecnologia e Informatica', cl:'4', a:'Internet', d:'medio', q:'L’upload significa:', ops:['dormire','correre','caricare','scaricare'], r:2},
  // La programmazione
 {m:'Tecnologia e Informatica', cl:'4', a:'La programmazione', d:'medio', q:'Il codice è:', ops:['un suono','le istruzioni per il computer','un gioco','un colore'], r:1},
 {m:'Tecnologia e Informatica', cl:'4', a:'La programmazione', d:'medio', q:'Il bug è:', ops:['un suono','un errore nel programma','un gioco','un colore'], r:1},
  // ---- DIFFICILE ----
  // Il computer
 {m:'Tecnologia e Informatica', cl:'4', a:'Il computer', d:'difficile', q:'Il salvataggio serve per:', ops:['perdere il lavoro','dormire','correre','non perdere il lavoro'], r:3},
 {m:'Tecnologia e Informatica', cl:'4', a:'Il computer', d:'difficile', q:'L’hardware è:', ops:['la parte fisica del computer','i programmi','i file','le cartelle'], r:0},
 {m:'Tecnologia e Informatica', cl:'4', a:'Il computer', d:'difficile', q:'Il software è:', ops:['le prese','l’insieme dei programmi','la parte fisica','i cavi'], r:1},
  // La programmazione
 {m:'Tecnologia e Informatica', cl:'4', a:'La programmazione', d:'difficile', q:'Programmare significa:', ops:['dare istruzioni al computer','dormire','mangiare','correre'], r:0},
 {m:'Tecnologia e Informatica', cl:'4', a:'La programmazione', d:'difficile', q:'I programmi sono fatti di:', ops:['solo suoni','solo disegni','istruzioni','solo colori'], r:2},
 {m:'Tecnologia e Informatica', cl:'4', a:'La programmazione', d:'difficile', q:'Un algoritmo è:', ops:['una sequenza di istruzioni','un gioco','un colore','un suono'], r:0},
 {m:'Tecnologia e Informatica', cl:'4', a:'La programmazione', d:'difficile', q:'Programmare aiuta a:', ops:['mangiare','correre','pensare in modo logico','dormire'], r:2},
 {m:'Tecnologia e Informatica', cl:'4', a:'La programmazione', d:'difficile', q:'I blocchi di Scratch si:', ops:['mangiano','dormono','corrono','trascinano e uniscono'], r:3},
 {m:'Tecnologia e Informatica', cl:'4', a:'La programmazione', d:'difficile', q:'Programmare insegna a:', ops:['risolvere problemi','litigare','dormire','correre'], r:0},
 {m:'Tecnologia e Informatica', cl:'4', a:'La programmazione', d:'difficile', q:'Il programmatore è chi:', ops:['corre','scrive programmi','dorme','mangia'], r:1},
  // Le macchine
 {m:'Tecnologia e Informatica', cl:'4', a:'Le macchine', d:'difficile', q:'Il motore serve per:', ops:['far muovere le macchine','dormire','mangiare','cantare'], r:0},
 {m:'Tecnologia e Informatica', cl:'4', a:'Le macchine', d:'difficile', q:'Le macchine hanno bisogno di:', ops:['solo sabbia','manutenzione','solo silenzio','solo buio'], r:1},
 ],

 /* ==================== CLASSE 5 - Italiano ==================== */
 '5': [
  // ---- FACILE ----
  // Poesia e rime
 {m:'Italiano', cl:'5', a:'Poesia e rime', d:'facile', q:'Quale parola fa rima con "fiore"?', ops:['cavallo','sussurro','colore','pentola'], r:2},
 {m:'Italiano', cl:'5', a:'Poesia e rime', d:'facile', q:'Quale parola fa rima con "pane"?', ops:['muro','scuola','sane','lago'], r:2},
  // Fiabe, favole e leggende
 {m:'Italiano', cl:'5', a:'Fiabe, favole e leggende', d:'facile', q:'Le FIABE finiscono spesso con:', ops:['un recapito','un esercizio di matematica','"... e vissero felici e contenti"','un triangolo'], r:2},
 {m:'Italiano', cl:'5', a:'Fiabe, favole e leggende', d:'facile', q:'Quale personaggio appartiene alle fiabe?', ops:['la fata','il vigile','il postino','il macellaio'], r:0},
  // ---- MEDIO ----
  // Poesia e rime
 {m:'Italiano', cl:'5', a:'Poesia e rime', d:'medio', q:'Una filastrocca è una composizione:', ops:['segreta','scientifica','ritmica e giocosa','giuridica'], r:2},
 {m:'Italiano', cl:'5', a:'Poesia e rime', d:'medio', q:'Le parole di una poesia sono disposte in:', ops:['colonne di numeri','caselle','paragrafi di calcolo','versi'], r:3},
 {m:'Italiano', cl:'5', a:'Poesia e rime', d:'medio', q:'La rima BACIATA ha lo schema:', ops:['AA BB','AB AB','AB BA','AB CD'], r:0},
 {m:'Italiano', cl:'5', a:'Poesia e rime', d:'medio', q:'La rima INCROCIATA ha lo schema:', ops:['AAAA','AA BB','AB AB','AB BA'], r:3},
 {m:'Italiano', cl:'5', a:'Poesia e rime', d:'medio', q:'La SIMILITUDINE confronta due cose usando:', ops:['un giorno','il fatto che','come, simile a, sembra','ma, però'], r:2},
 {m:'Italiano', cl:'5', a:'Poesia e rime', d:'medio', q:'"Bianco come la neve" è una:', ops:['rima','filastrocca','morale','similitudine'], r:3},
 {m:'Italiano', cl:'5', a:'Poesia e rime', d:'medio', q:'Quale parola fa rima con "stella"?', ops:['vento','sorella','rubino','tavola'], r:1},
 {m:'Italiano', cl:'5', a:'Poesia e rime', d:'medio', q:'In una poesia, una STROFA è:', ops:['un gruppo di versi','un tipo di rima','una parola difficile','il nome dell’autore'], r:0},
  // Fiabe, favole e leggende
 {m:'Italiano', cl:'5', a:'Fiabe, favole e leggende', d:'medio', q:'La FAVOLA è una storia breve con:', ops:['tabelline e calcoli','nessun personaggio','solo persone vere','una morale finale'], r:3},
 {m:'Italiano', cl:'5', a:'Fiabe, favole e leggende', d:'medio', q:'Le LEGGENDE sono storie antiche:', ops:['scritte in inglese','mai raccontate','con un fondo di verità','senza personaggi'], r:2},
 {m:'Italiano', cl:'5', a:'Fiabe, favole e leggende', d:'medio', q:'Le FAVOLE hanno come protagonisti spesso:', ops:['astronauti','macchine volanti','robot futuristici','animali che parlano'], r:3},
 {m:'Italiano', cl:'5', a:'Fiabe, favole e leggende', d:'medio', q:'Nella favola "La volpe e l’uva", la volpe dice che l’uva è acerba perché:', ops:['è vera','ha già mangiato','l’uva è rossa','non riesce ad arrivarci'], r:3},
 {m:'Italiano', cl:'5', a:'Fiabe, favole e leggende', d:'medio', q:'In una fiaba, il PROTAGONISTA è colui che:', ops:['vive la storia principale','scrive la storia','disegna le immagini','legge ad alta voce'], r:0},
 {m:'Italiano', cl:'5', a:'Fiabe, favole e leggende', d:'medio', q:'In una fiaba, "c’era una volta" indica:', ops:['il titolo','l’inizio della storia','la fine della storia','la morale'], r:1},
 {m:'Italiano', cl:'5', a:'Fiabe, favole e leggende', d:'medio', q:'La MORALE di una favola è:', ops:['il primo verso','il nome dell’autore','l’insegnamento della storia','il titolo'], r:2},
 {m:'Italiano', cl:'5', a:'Fiabe, favole e leggende', d:'medio', q:'La fiaba di Cappuccetto Rosso insegna soprattutto a:', ops:['correre nel bosco','portare sempre un cestino','evitare i fiori','non parlare con gli sconosciuti'], r:3},
 {m:'Italiano', cl:'5', a:'Fiabe, favole e leggende', d:'medio', q:'Che differenza c’è tra favola e fiaba?', ops:['la favola è breve, con animali e morale; la fiaba è più lunga e magica','sono la stessa cosa','la fiaba non ha personaggi','la favola è scritta sempre in versi'], r:0},
  // Testo argomentativo e scrittura
 {m:'Italiano', cl:'5', a:'Testo argomentativo e scrittura', d:'medio', q:'In un testo argomentativo la TESI è:', ops:['un colore','il titolo','l’opinione da difendere','una ricetta'], r:2},
 {m:'Italiano', cl:'5', a:'Testo argomentativo e scrittura', d:'medio', q:'Gli ARGOMENTI di un testo sono:', ops:['i titoli dei capitoli','le immagini','le firme','le ragioni che sostengono la tesi'], r:3},
 {m:'Italiano', cl:'5', a:'Testo argomentativo e scrittura', d:'medio', q:'Il RIASSUNTO deve essere scritto:', ops:['in prima persona','in modo breve, con le idee principali','inventando tutto','in 10 pagine'], r:1},
 {m:'Italiano', cl:'5', a:'Testo argomentativo e scrittura', d:'medio', q:'L’ANTITESI di una tesi è:', ops:['la bibliografia','l’opinione contraria','una conferma','il titolo'], r:1},
 {m:'Italiano', cl:'5', a:'Testo argomentativo e scrittura', d:'medio', q:'In una lettera, il saluto iniziale si mette:', ops:['in mezzo al testo','mai','all’inizio, dopo la data','alla fine, dopo la firma'], r:2},
 {m:'Italiano', cl:'5', a:'Testo argomentativo e scrittura', d:'medio', q:'In una lettera, la FIRMA si mette:', ops:['all’inizio','in mezzo al testo','sulla busta','in fondo'], r:3},
 {m:'Italiano', cl:'5', a:'Testo argomentativo e scrittura', d:'medio', q:'Per scrivere un buon testo servono soprattutto:', ops:['idee chiare e ordine','matite colorate','rumore di fondo','tante virgolette'], r:0},
 {m:'Italiano', cl:'5', a:'Testo argomentativo e scrittura', d:'medio', q:'La CONCLUSIONE di un testo argomentativo deve:', ops:['contenere un grafico','richiamare la tesi e chiudere il discorso','iniziare un nuovo argomento','essere sempre in rima'], r:1},
 {m:'Italiano', cl:'5', a:'Testo argomentativo e scrittura', d:'medio', q:'Una lettera di ringraziamento si conclude con:', ops:['una filastrocca','il destinatario','un saluto e la firma','la tesi'], r:2},
 {m:'Italiano', cl:'5', a:'Testo argomentativo e scrittura', d:'medio', q:'Quale fase viene PRIMA quando scrivi un testo?', ops:['la pianificazione (pensare le idee)','la rilettura','la stampa','la pubblicazione'], r:0},
 {m:'Italiano', cl:'5', a:'Testo argomentativo e scrittura', d:'medio', q:'Rileggere il testo prima di consegnarlo serve per:', ops:['nasconderlo','correggere gli errori','allungarlo','colorarlo'], r:1},
  // Ortografia difficile
 {m:'Italiano', cl:'5', a:'Ortografia difficile', d:'medio', q:'Come si scrive correttamente "perché"?', ops:['perche','perché’','perché','perchè'], r:2},
 {m:'Italiano', cl:'5', a:'Ortografia difficile', d:'medio', q:'Come si scrive correttamente "qual è"?', ops:['quale’','qual è','quale’’','qual’è'], r:1},
 {m:'Italiano', cl:'5', a:'Ortografia difficile', d:'medio', q:'Quale frase è scritta GIUSTA?', ops:['Ho 10 anni','Ho ho 10 anni','H’o 10 anni','O 10 anni'], r:0},
 {m:'Italiano', cl:'5', a:'Ortografia difficile', d:'medio', q:'Come si scrive correttamente "pure"?', ops:['ppur e','ppure','pure','pur e'], r:2},
 {m:'Italiano', cl:'5', a:'Ortografia difficile', d:'medio', q:'Come si scrive correttamente "sebbene"?', ops:['sebenne','sebbenè','sebbene','sebbene’'], r:2},
 {m:'Italiano', cl:'5', a:'Ortografia difficile', d:'medio', q:'Come si scrive correttamente "assai"?', ops:['assài','asssai','assah','assai'], r:3},
 {m:'Italiano', cl:'5', a:'Ortografia difficile', d:'medio', q:'Come si scrive correttamente "appena"?', ops:['appena','apena','appena’','apenna'], r:0},
 {m:'Italiano', cl:'5', a:'Ortografia difficile', d:'medio', q:'Come si scrive correttamente "abbastanza"?', ops:['abastanza’','abbastanza','abastanza','abbastanxa'], r:1},
 {m:'Italiano', cl:'5', a:'Ortografia difficile', d:'medio', q:'Qual è il plurale FEMMINILE di "buono"?', ops:['buona','buonissimo','buone','buoni'], r:2},
 {m:'Italiano', cl:'5', a:'Ortografia difficile', d:'medio', q:'Come si scrive correttamente "riccio"?', ops:['rizzio','rriccio','ricciò','riccio'], r:3},
 {m:'Italiano', cl:'5', a:'Ortografia difficile', d:'medio', q:'Come si scrive correttamente "tariffa"?', ops:['tariffa','tarifa','tarrifa','tariffà'], r:0},
  // ---- DIFFICILE ----
  // Poesia e rime
 {m:'Italiano', cl:'5', a:'Poesia e rime', d:'difficile', q:'"Il vento urla" è un esempio di:', ops:['rima','similitudine','personificazione','allitterazione'], r:2},
 {m:'Italiano', cl:'5', a:'Poesia e rime', d:'difficile', q:'L’ALLITTERAZIONE è la ripetizione:', ops:['di un titolo','della rima finale','dello stesso suono in più parole','di una poesia intera'], r:2},
 {m:'Italiano', cl:'5', a:'Poesia e rime', d:'difficile', q:'"Trentatré treni" è un esempio di:', ops:['rima baciata','strofa','onomatopeica','allitterazione'], r:3},
 {m:'Italiano', cl:'5', a:'Poesia e rime', d:'difficile', q:'La parola ONOMATOPEICA indica una parola che:', ops:['indica un colore','imita un suono (bum! splash!)','fa sempre rima','si scrive in inglese'], r:1},
  // Fiabe, favole e leggende
 {m:'Italiano', cl:'5', a:'Fiabe, favole e leggende', d:'difficile', q:'In una LEGGENDA medievale troveresti spesso:', ops:['aerei','cavalieri, draghi e castelli','computer e telefoni','supermercati'], r:1},
  // Testo argomentativo e scrittura
 {m:'Italiano', cl:'5', a:'Testo argomentativo e scrittura', d:'difficile', q:'Nei TESTI INFORMATIVI si usano soprattutto:', ops:['solo opinioni personali','rima e ritmo','parole inventate','dati, fatti e spiegazioni precise'], r:3},
  // Ortografia difficile
 {m:'Italiano', cl:'5', a:'Ortografia difficile', d:'difficile', q:'In "cassa, vassoio, esse" tutte le parole hanno:', ops:['la doppia M','la doppia S','la doppia R','la doppia N'], r:1},
 ],

 /* ==================== CLASSE 5 - Arte e Immagine ==================== */
 '5A': [
  // ---- FACILE ----
  // I grandi artisti
 {m:'Arte e Immagine', cl:'5', a:'I grandi artisti', d:'facile', q:'Leonardo dipinse:', ops:['la Gioconda','la Notte stellata','i Girasoli','il David'], r:0},
 {m:'Arte e Immagine', cl:'5', a:'I grandi artisti', d:'facile', q:'Picasso fu famoso per:', ops:['il Rinascimento','il Barocco','il Gotico','il Cubismo'], r:3},
  // La prospettiva
 {m:'Arte e Immagine', cl:'5', a:'La prospettiva', d:'facile', q:'La prospettiva dà:', ops:['suono','peso','profondità','colore'], r:2},
 {m:'Arte e Immagine', cl:'5', a:'La prospettiva', d:'facile', q:'Gli oggetti lontani si disegnano:', ops:['trasparenti','più piccoli','più grandi','uguali'], r:1},
  // I movimenti artistici
 {m:'Arte e Immagine', cl:'5', a:'I movimenti artistici', d:'facile', q:'L’Impressionismo dipingeva:', ops:['la luce e il momento','solo il buio','solo il nero','solo forme geometriche'], r:0},
 {m:'Arte e Immagine', cl:'5', a:'I movimenti artistici', d:'facile', q:'Il Cubismo usava:', ops:['solo colori freddi','forme geometriche','solo punti','solo linee'], r:1},
  // Le tecniche
 {m:'Arte e Immagine', cl:'5', a:'Le tecniche', d:'facile', q:'L’acquerello è una tecnica:', ops:['di scultura','di stampa','a base d’acqua','a base d’olio'], r:2},
 {m:'Arte e Immagine', cl:'5', a:'Le tecniche', d:'facile', q:'La scultura si fa con:', ops:['solo carta','solo acqua','solo aria','creta, marmo o legno'], r:3},
 {m:'Arte e Immagine', cl:'5', a:'Le tecniche', d:'facile', q:'Il mosaico usa:', ops:['tessere','solo pennelli','solo matite','solo forbici'], r:0},
 {m:'Arte e Immagine', cl:'5', a:'Le tecniche', d:'facile', q:'La pittura a olio usa:', ops:['solo gessetti','colori a olio','colori ad acqua','solo matite'], r:1},
  // ---- MEDIO ----
  // I grandi artisti
 {m:'Arte e Immagine', cl:'5', a:'I grandi artisti', d:'medio', q:'Monet fu un pittore:', ops:['impressionista','cubista','barocco','gotico'], r:0},
 {m:'Arte e Immagine', cl:'5', a:'I grandi artisti', d:'medio', q:'Raffaello fu un artista del:', ops:['Impressionismo','Rinascimento','Medioevo','Cubismo'], r:1},
 {m:'Arte e Immagine', cl:'5', a:'I grandi artisti', d:'medio', q:'Un’artista che dipingeva la realtà con precisione è:', ops:['Miró','Kandinsky','Caravaggio','Picasso'], r:2},
  // La prospettiva
 {m:'Arte e Immagine', cl:'5', a:'La prospettiva', d:'medio', q:'La prospettiva accidentale ha:', ops:['un punto di fuga','nessun punto','cinque punti','due punti di fuga'], r:3},
  // I movimenti artistici
 {m:'Arte e Immagine', cl:'5', a:'I movimenti artistici', d:'medio', q:'Il Surrealismo dipingeva:', ops:['i sogni e l’inconscio','solo la realtà','solo i paesaggi','solo i ritratti'], r:0},
 {m:'Arte e Immagine', cl:'5', a:'I movimenti artistici', d:'medio', q:'Il Futurismo amava:', ops:['il buio','il movimento e la velocità','la lentezza','il silenzio'], r:1},
 {m:'Arte e Immagine', cl:'5', a:'I movimenti artistici', d:'medio', q:'L’arte romanica e gotica riguardano:', ops:['il Novecento','l’antica Roma','il Medioevo','il Rinascimento'], r:2},
 {m:'Arte e Immagine', cl:'5', a:'I movimenti artistici', d:'medio', q:'Un movimento artistico è:', ops:['una tecnica sola','un gruppo di artisti con idee simili','un solo artista','un colore'], r:1},
  // Le tecniche
 {m:'Arte e Immagine', cl:'5', a:'Le tecniche', d:'medio', q:'L’incisione permette di:', ops:['scolpire','incollare','stampare più copie','dipingere'], r:2},
 {m:'Arte e Immagine', cl:'5', a:'Le tecniche', d:'medio', q:'Il frottage usa:', ops:['il pennello','la creta','le forbici','lo sfregamento della matita'], r:3},
 {m:'Arte e Immagine', cl:'5', a:'Le tecniche', d:'medio', q:'Il collage unisce:', ops:['materiali diversi','un solo colore','un solo materiale','nulla'], r:0},
  // Il patrimonio artistico
 {m:'Arte e Immagine', cl:'5', a:'Il patrimonio artistico', d:'medio', q:'Il patrimonio artistico è:', ops:['l’insieme delle opere d’arte','un colore','un suono','un gioco'], r:0},
 {m:'Arte e Immagine', cl:'5', a:'Il patrimonio artistico', d:'medio', q:'Un monumento è:', ops:['un cibo','un colore','un’opera da proteggere','un gioco'], r:2},
 {m:'Arte e Immagine', cl:'5', a:'Il patrimonio artistico', d:'medio', q:'Proteggere il patrimonio serve per:', ops:['tramandarlo alle future generazioni','distruggerlo','nasconderlo','venderlo'], r:0},
 {m:'Arte e Immagine', cl:'5', a:'Il patrimonio artistico', d:'medio', q:'Un affresco si trova:', ops:['sul vetro','sull’acqua','sui muri','sulla carta'], r:2},
  // ---- DIFFICILE ----
  // I grandi artisti
 {m:'Arte e Immagine', cl:'5', a:'I grandi artisti', d:'difficile', q:'Frida Kahlo era una pittrice:', ops:['italiana','francese','tedesca','messicana'], r:3},
 {m:'Arte e Immagine', cl:'5', a:'I grandi artisti', d:'difficile', q:'Il David di Michelangelo è una:', ops:['scultura','pittura','mosaico','incisione'], r:0},
 {m:'Arte e Immagine', cl:'5', a:'I grandi artisti', d:'difficile', q:'I musei conservano le opere per:', ops:['buttarle','farle vedere a tutti','nasconderle','venderle sempre'], r:1},
  // La prospettiva
 {m:'Arte e Immagine', cl:'5', a:'La prospettiva', d:'difficile', q:'Nel Rinascimento la prospettiva fu:', ops:['studiata e perfezionata','ignorata','vietata','dimenticata'], r:0},
 {m:'Arte e Immagine', cl:'5', a:'La prospettiva', d:'difficile', q:'La prospettiva aerea schiarisce:', ops:['nulla','gli elementi lontani','gli elementi vicini','tutto'], r:1},
 {m:'Arte e Immagine', cl:'5', a:'La prospettiva', d:'difficile', q:'Una strada lunga in un quadro mostra:', ops:['solo la texture','solo il suono','la profondità','solo il colore'], r:2},
 {m:'Arte e Immagine', cl:'5', a:'La prospettiva', d:'difficile', q:'Per disegnare in prospettiva serve:', ops:['solo il colore','solo la matita rossa','nulla','il punto di fuga'], r:3},
  // I movimenti artistici
 {m:'Arte e Immagine', cl:'5', a:'I movimenti artistici', d:'difficile', q:'Il Rinascimento fu un periodo di:', ops:['solo buio','solo musica','grande fioritura artistica','solo guerra'], r:2},
 {m:'Arte e Immagine', cl:'5', a:'I movimenti artistici', d:'difficile', q:'L’arte astratta non rappresenta:', ops:['colori','linee','forme','figure riconoscibili'], r:3},
 {m:'Arte e Immagine', cl:'5', a:'I movimenti artistici', d:'difficile', q:'Kandinsky è considerato padre dell’:', ops:['impressionismo','cubismo','futurismo','astrattismo'], r:3},
 {m:'Arte e Immagine', cl:'5', a:'I movimenti artistici', d:'difficile', q:'Il Barocco usava:', ops:['forme ricche e movimentate','forme semplici','solo linee dritte','solo il bianco'], r:0},
  // Le tecniche
 {m:'Arte e Immagine', cl:'5', a:'Le tecniche', d:'difficile', q:'La tempera è adatta per:', ops:['incisioni','superfici opache e coprenti','acquerelli trasparenti','sculture'], r:1},
 {m:'Arte e Immagine', cl:'5', a:'Le tecniche', d:'difficile', q:'La ceramica si ottiene:', ops:['solo incollando','solo tagliando','cuocendo la creta','solo disegnando'], r:2},
 {m:'Arte e Immagine', cl:'5', a:'Le tecniche', d:'difficile', q:'Il graffito si fa:', ops:['solo dipingendo','solo incollando','solo tagliando','graffiando una superficie'], r:3},
  // Il patrimonio artistico
 {m:'Arte e Immagine', cl:'5', a:'Il patrimonio artistico', d:'difficile', q:'L’UNESCO protegge:', ops:['solo i cibi','solo gli sport','solo le musiche','i patrimoni dell’umanità'], r:3},
 {m:'Arte e Immagine', cl:'5', a:'Il patrimonio artistico', d:'difficile', q:'Un restauro serve per:', ops:['riparare un’opera','distruggerla','nasconderla','venderla'], r:0},
 {m:'Arte e Immagine', cl:'5', a:'Il patrimonio artistico', d:'difficile', q:'Pompei è un sito:', ops:['solo sportivo','archeologico','solo moderno','solo naturale'], r:1},
 ],

 /* ==================== CLASSE 5 - Inglese ==================== */
 '5E': [
  // ---- FACILE ----
  // I verbi
 {m:'Inglese', cl:'5', a:'I verbi', d:'facile', q:'"To be" significa:', ops:['essere','avere','andare','fare'], r:0},
 {m:'Inglese', cl:'5', a:'I verbi', d:'facile', q:'"To go" significa:', ops:['avere','fare','andare','essere'], r:2},
 {m:'Inglese', cl:'5', a:'I verbi', d:'facile', q:'"To eat" significa:', ops:['bere','dormire','correre','mangiare'], r:3},
 {m:'Inglese', cl:'5', a:'I verbi', d:'facile', q:'"I am" significa:', ops:['io sono','io ho','io vado','io faccio'], r:0},
 {m:'Inglese', cl:'5', a:'I verbi', d:'facile', q:'"He is" significa:', ops:['tu sei','essi sono','egli è','io sono'], r:2},
 {m:'Inglese', cl:'5', a:'I verbi', d:'facile', q:'"We are" significa:', ops:['voi siete','essi sono','io sono','noi siamo'], r:3},
 {m:'Inglese', cl:'5', a:'I verbi', d:'facile', q:'"I have" significa:', ops:['io faccio','io ho','io sono','io vado'], r:1},
  // La casa
 {m:'Inglese', cl:'5', a:'La casa', d:'facile', q:'"Floor" significa:', ops:['tetto','muro','porta','pavimento'], r:3},
  // Il cibo
 {m:'Inglese', cl:'5', a:'Il cibo', d:'facile', q:'"Cake" significa:', ops:['carne','torta','pane','formaggio'], r:1},
  // Le stagioni
 {m:'Inglese', cl:'5', a:'Le stagioni', d:'facile', q:'In inglese "fall" significa anche:', ops:['estate','primavera','inverno','autunno'], r:3},
 {m:'Inglese', cl:'5', a:'Le stagioni', d:'facile', q:'"Month" significa:', ops:['anno','settimana','mese','stagione'], r:2},
 {m:'Inglese', cl:'5', a:'Le stagioni', d:'facile', q:'"Year" significa:', ops:['mese','stagione','giorno','anno'], r:3},
  // ---- MEDIO ----
  // I verbi
 {m:'Inglese', cl:'5', a:'I verbi', d:'medio', q:'"To have" significa:', ops:['fare','avere','essere','andare'], r:1},
 {m:'Inglese', cl:'5', a:'I verbi', d:'medio', q:'"You are" significa:', ops:['essi sono','tu sei','io sono','egli è'], r:1},
 {m:'Inglese', cl:'5', a:'I verbi', d:'medio', q:'"They are" significa:', ops:['essi sono','noi siamo','voi siete','egli è'], r:0},
  // La casa
 {m:'Inglese', cl:'5', a:'La casa', d:'medio', q:'"Living room" significa:', ops:['bagno','salotto','cucina','camera'], r:1},
  // Le stagioni
 {m:'Inglese', cl:'5', a:'Le stagioni', d:'medio', q:'"Spring" significa:', ops:['autunno','inverno','primavera','estate'], r:2},
 {m:'Inglese', cl:'5', a:'Le stagioni', d:'medio', q:'"Summer" significa:', ops:['primavera','autunno','inverno','estate'], r:3},
 {m:'Inglese', cl:'5', a:'Le stagioni', d:'medio', q:'"Autumn" significa:', ops:['autunno','estate','primavera','inverno'], r:0},
 {m:'Inglese', cl:'5', a:'Le stagioni', d:'medio', q:'"Winter" significa:', ops:['primavera','inverno','autunno','estate'], r:1},
 {m:'Inglese', cl:'5', a:'Le stagioni', d:'medio', q:'"Season" significa:', ops:['mese','anno','stagione','giorno'], r:2},
 {m:'Inglese', cl:'5', a:'Le stagioni', d:'medio', q:'La stagione calda è:', ops:['summer','winter','spring','autumn'], r:0},
 {m:'Inglese', cl:'5', a:'Le stagioni', d:'medio', q:'La stagione fredda è:', ops:['autumn','winter','summer','spring'], r:1},
  // ---- DIFFICILE ----
  // Le domande
 {m:'Inglese', cl:'5', a:'Le domande', d:'difficile', q:'"What?" significa:', ops:['che cosa?','chi?','dove?','quando?'], r:0},
 {m:'Inglese', cl:'5', a:'Le domande', d:'difficile', q:'"Who?" significa:', ops:['perché?','chi?','che cosa?','dove?'], r:1},
 {m:'Inglese', cl:'5', a:'Le domande', d:'difficile', q:'"Where?" significa:', ops:['quando?','perché?','dove?','chi?'], r:2},
 {m:'Inglese', cl:'5', a:'Le domande', d:'difficile', q:'"When?" significa:', ops:['dove?','chi?','che cosa?','quando?'], r:3},
 {m:'Inglese', cl:'5', a:'Le domande', d:'difficile', q:'"Why?" significa:', ops:['perché?','dove?','chi?','quando?'], r:0},
 {m:'Inglese', cl:'5', a:'Le domande', d:'difficile', q:'"How?" significa:', ops:['chi?','come?','perché?','dove?'], r:1},
 {m:'Inglese', cl:'5', a:'Le domande', d:'difficile', q:'"How old are you?" significa:', ops:['dove abiti?','chi sei?','quanti anni hai?','come stai?'], r:2},
 {m:'Inglese', cl:'5', a:'Le domande', d:'difficile', q:'"Where do you live?" significa:', ops:['quanti anni hai?','come ti chiami?','che ora è?','dove abiti?'], r:3},
 {m:'Inglese', cl:'5', a:'Le domande', d:'difficile', q:'"What time is it?" significa:', ops:['che ora è?','che giorno è?','dove sei?','chi sei?'], r:0},
 {m:'Inglese', cl:'5', a:'Le domande', d:'difficile', q:'"Do you like...?" significa:', ops:['vai...?','ti piace...?','hai...?','sei...?'], r:1},
 ],

 /* ==================== CLASSE 5 - Educazione Civica ==================== */
 '5EC': [
  // ---- FACILE ----
  // I diritti e i doveri
 {m:'Educazione Civica', cl:'5', a:'I diritti e i doveri', d:'facile', q:'Andare a scuola è un:', ops:['solo una punizione','diritto e un dovere','solo un gioco','solo un premio'], r:1},
  // L’Unione Europea
 {m:'Educazione Civica', cl:'5', a:'L’Unione Europea', d:'facile', q:'L’Italia fa parte:', ops:['di nessuna unione','dell’Unione Europea','solo dell’Asia','solo dell’Africa'], r:1},
 {m:'Educazione Civica', cl:'5', a:'L’Unione Europea', d:'facile', q:'La bandiera europea ha:', ops:['strisce','cerchi','triangoli','stelle su fondo blu'], r:3},
  // L’ambiente e la sostenibilità
 {m:'Educazione Civica', cl:'5', a:'L’ambiente e la sostenibilità', d:'facile', q:'Riciclare serve per:', ops:['dormire','proteggere l’ambiente','inquinare','sprecare'], r:1},
  // ---- MEDIO ----
  // La Costituzione
 {m:'Educazione Civica', cl:'5', a:'La Costituzione', d:'medio', q:'I principi fondamentali sono:', ops:['solo nel titolo','nei primi articoli','negli ultimi articoli','mai'], r:1},
  // I diritti e i doveri
 {m:'Educazione Civica', cl:'5', a:'I diritti e i doveri', d:'medio', q:'Un diritto è:', ops:['un gioco','un cibo','ciò che possiamo fare','ciò che dobbiamo fare'], r:2},
 {m:'Educazione Civica', cl:'5', a:'I diritti e i doveri', d:'medio', q:'Un dovere è:', ops:['ciò che possiamo fare','un gioco','un premio','ciò che dobbiamo fare'], r:3},
 {m:'Educazione Civica', cl:'5', a:'I diritti e i doveri', d:'medio', q:'Il diritto allo studio è:', ops:['di tutti','di pochi','di nessuno','solo dei ricchi'], r:0},
 {m:'Educazione Civica', cl:'5', a:'I diritti e i doveri', d:'medio', q:'Il dovere di rispettare le leggi è:', ops:['di pochi','di nessuno','solo dei bambini','di tutti'], r:3},
 {m:'Educazione Civica', cl:'5', a:'I diritti e i doveri', d:'medio', q:'I diritti e i doveri vanno:', ops:['insieme','separati','ignorati','dimenticati'], r:0},
 {m:'Educazione Civica', cl:'5', a:'I diritti e i doveri', d:'medio', q:'Rispettare gli altri è:', ops:['un premio','un regalo','un dovere','un gioco'], r:2},
  // L’Unione Europea
 {m:'Educazione Civica', cl:'5', a:'L’Unione Europea', d:'medio', q:'L’inno europeo è:', ops:['l’Inno alla Gioia','la Marsigliese','Bella Ciao','God Save'], r:0},
 {m:'Educazione Civica', cl:'5', a:'L’Unione Europea', d:'medio', q:'Sulla bandiera europea ci sono:', ops:['100 stelle','12 stelle','5 stelle','50 stelle'], r:1},
 {m:'Educazione Civica', cl:'5', a:'L’Unione Europea', d:'medio', q:'L’Unione Europea favorisce:', ops:['i conflitti','le divisioni','la pace tra i paesi','le guerre'], r:2},
  // La cittadinanza
 {m:'Educazione Civica', cl:'5', a:'La cittadinanza', d:'medio', q:'La partecipazione alla vita pubblica è:', ops:['solo un premio','inutile','un diritto e un dovere','solo un gioco'], r:2},
  // L’ambiente e la sostenibilità
 {m:'Educazione Civica', cl:'5', a:'L’ambiente e la sostenibilità', d:'medio', q:'La sostenibilità significa:', ops:['usare le risorse senza esaurirle','sprecare tutto','inquinare','distruggere'], r:0},
 {m:'Educazione Civica', cl:'5', a:'L’ambiente e la sostenibilità', d:'medio', q:'Ridurre i rifiuti si chiama:', ops:['inquinamento','riduzione','aumento','spreco'], r:1},
 {m:'Educazione Civica', cl:'5', a:'L’ambiente e la sostenibilità', d:'medio', q:'Riutilizzare gli oggetti serve per:', ops:['inquinare','dormire','non sprecare','sprecare'], r:2},
 {m:'Educazione Civica', cl:'5', a:'L’ambiente e la sostenibilità', d:'medio', q:'Le tre R dell’ambiente sono:', ops:['rompi, butta, spreca','corri, salta, gioca','dormi, mangia, bevi','riduci, riusa, ricicla'], r:3},
  // ---- DIFFICILE ----
  // La Costituzione
 {m:'Educazione Civica', cl:'5', a:'La Costituzione', d:'difficile', q:'La Costituzione è:', ops:['la legge fondamentale','un gioco','un cibo','una canzone'], r:0},
 {m:'Educazione Civica', cl:'5', a:'La Costituzione', d:'difficile', q:'La Costituzione italiana è entrata in vigore:', ops:['nel 1800','nel 1948','nel 2000','nel 1900'], r:1},
 {m:'Educazione Civica', cl:'5', a:'La Costituzione', d:'difficile', q:'La sovranità appartiene:', ops:['a un re','a un dittatore','a nessuno','al popolo'], r:3},
  // I diritti e i doveri
 {m:'Educazione Civica', cl:'5', a:'I diritti e i doveri', d:'difficile', q:'La libertà di uno finisce:', ops:['al confine','dove inizia quella di un altro','mai','dove vuole'], r:1},
 {m:'Educazione Civica', cl:'5', a:'I diritti e i doveri', d:'difficile', q:'Ogni diritto porta con sé:', ops:['solo un premio','solo un gioco','nulla','un dovere'], r:3},
  // L’Unione Europea
 {m:'Educazione Civica', cl:'5', a:'L’Unione Europea', d:'difficile', q:'L’Unione Europea è nata per:', ops:['dividerli','farli litigare','isolarli','unire i paesi europei'], r:3},
 {m:'Educazione Civica', cl:'5', a:'L’Unione Europea', d:'difficile', q:'La libera circolazione permette:', ops:['di viaggiare tra i paesi','di stare fermi','di litigare','di isolarsi'], r:0},
 {m:'Educazione Civica', cl:'5', a:'L’Unione Europea', d:'difficile', q:'L’euro si usa:', ops:['solo in Germania','in molti paesi europei','solo in Italia','solo in Francia'], r:1},
  // La cittadinanza
 {m:'Educazione Civica', cl:'5', a:'La cittadinanza', d:'difficile', q:'Le elezioni servono per:', ops:['mangiare','scegliere i rappresentanti','giocare','dormire'], r:1},
 {m:'Educazione Civica', cl:'5', a:'La cittadinanza', d:'difficile', q:'Il rispetto delle leggi rende:', ops:['la società peggiore','tutto più difficile','tutto più noioso','la società migliore'], r:3},
  // L’ambiente e la sostenibilità
 {m:'Educazione Civica', cl:'5', a:'L’ambiente e la sostenibilità', d:'difficile', q:'Non sprecare l’acqua è:', ops:['inutile','sbagliato','dannoso','importante'], r:3},
 {m:'Educazione Civica', cl:'5', a:'L’ambiente e la sostenibilità', d:'difficile', q:'Il riscaldamento globale è causato da:', ops:['inquinamento','pioggia','neve','vento'], r:0},
 {m:'Educazione Civica', cl:'5', a:'L’ambiente e la sostenibilità', d:'difficile', q:'Proteggere l’ambiente è compito:', ops:['solo dei bambini','di tutti','di nessuno','solo degli adulti'], r:1},
 ],

 /* ==================== CLASSE 5 - Educazione Fisica ==================== */
 '5EF': [
  // ---- FACILE ----
  // Gli sport olimpici
 {m:'Educazione Fisica', cl:'5', a:'Gli sport olimpici', d:'facile', q:'Le Olimpiadi si tengono:', ops:['mai','ogni quattro anni','ogni anno','ogni mese'], r:1},
 {m:'Educazione Fisica', cl:'5', a:'Gli sport olimpici', d:'facile', q:'La fiamma olimpica:', ops:['si spegne subito','non esiste','è un gioco','viene accesa e portata'], r:3},
  // ---- MEDIO ----
  // Gli sport olimpici
 {m:'Educazione Fisica', cl:'5', a:'Gli sport olimpici', d:'medio', q:'Le Olimpiadi sono:', ops:['una grande gara sportiva','un gioco','un cibo','una festa'], r:0},
 {m:'Educazione Fisica', cl:'5', a:'Gli sport olimpici', d:'medio', q:'Il simbolo delle Olimpiadi è:', ops:['un cuore','un triangolo','cinque cerchi','una stella'], r:2},
 {m:'Educazione Fisica', cl:'5', a:'Gli sport olimpici', d:'medio', q:'Le Olimpiadi antiche nacquero in:', ops:['Grecia','Italia','Francia','Egitto'], r:0},
 {m:'Educazione Fisica', cl:'5', a:'Gli sport olimpici', d:'medio', q:'La maratona è una gara di:', ops:['lancio','corsa','nuoto','salto'], r:1},
 {m:'Educazione Fisica', cl:'5', a:'Gli sport olimpici', d:'medio', q:'I cinque cerchi rappresentano:', ops:['i colori','gli sport','i continenti','i paesi'], r:2},
 {m:'Educazione Fisica', cl:'5', a:'Gli sport olimpici', d:'medio', q:'Il motto olimpico è:', ops:['vincere sempre','mai arrendersi','solo per pochi','più veloce, più in alto, più forte'], r:3},
 {m:'Educazione Fisica', cl:'5', a:'Gli sport olimpici', d:'medio', q:'Partecipare alle Olimpiadi è:', ops:['inutile','un grande onore','una punizione','un gioco'], r:1},
  // ---- DIFFICILE ----
  // Gli sport olimpici
 {m:'Educazione Fisica', cl:'5', a:'Gli sport olimpici', d:'difficile', q:'Le Olimpiadi invernali includono:', ops:['lo sci','il nuoto','il calcio','la pallavolo'], r:0},
 ],

 /* ==================== CLASSE 5 - Geografia ==================== */
 '5G': [
  // ---- FACILE ----
  // Le regioni italiane
 {m:'Geografia', cl:'5', a:'Le regioni italiane', d:'facile', q:'La Liguria ha come capoluogo:', ops:['Torino','Milano','Venezia','Genova'], r:3},
  // L’Europa
 {m:'Geografia', cl:'5', a:'L’Europa', d:'facile', q:'L’Italia fa parte del continente:', ops:['asiatico','americano','europeo','africano'], r:2},
  // ---- MEDIO ----
  // Le regioni italiane
 {m:'Geografia', cl:'5', a:'Le regioni italiane', d:'medio', q:'Le regioni italiane sono:', ops:['20','10','5','100'], r:0},
 {m:'Geografia', cl:'5', a:'Le regioni italiane', d:'medio', q:'La Valle d’Aosta è:', ops:['un vulcano','una regione','un fiume','un lago'], r:1},
 {m:'Geografia', cl:'5', a:'Le regioni italiane', d:'medio', q:'Il capoluogo della Puglia è:', ops:['Palermo','Roma','Bari','Napoli'], r:2},
 {m:'Geografia', cl:'5', a:'Le regioni italiane', d:'medio', q:'Il capoluogo del Veneto è:', ops:['Venezia','Verona','Padova','Treviso'], r:0},
 {m:'Geografia', cl:'5', a:'Le regioni italiane', d:'medio', q:'La regione più a nord d’Italia è:', ops:['la Puglia','il Trentino-Alto Adige','la Sicilia','la Calabria'], r:1},
 {m:'Geografia', cl:'5', a:'Le regioni italiane', d:'medio', q:'La Calabria si trova:', ops:['nelle Alpi','in Sardegna','a sud','a nord'], r:2},
 {m:'Geografia', cl:'5', a:'Le regioni italiane', d:'medio', q:'Il capoluogo del Friuli-Venezia Giulia è:', ops:['Udine','Venezia','Bologna','Trieste'], r:3},
  // L’Europa
 {m:'Geografia', cl:'5', a:'L’Europa', d:'medio', q:'L’Europa è:', ops:['un paese','una città','un fiume','un continente'], r:3},
 {m:'Geografia', cl:'5', a:'L’Europa', d:'medio', q:'La capitale della Francia è:', ops:['Parigi','Londra','Madrid','Roma'], r:0},
 {m:'Geografia', cl:'5', a:'L’Europa', d:'medio', q:'La capitale della Spagna è:', ops:['Berlino','Madrid','Parigi','Londra'], r:1},
 {m:'Geografia', cl:'5', a:'L’Europa', d:'medio', q:'La capitale della Germania è:', ops:['Madrid','Roma','Berlino','Parigi'], r:2},
 {m:'Geografia', cl:'5', a:'L’Europa', d:'medio', q:'La capitale del Regno Unito è:', ops:['Dublino','Parigi','Berlino','Londra'], r:3},
 {m:'Geografia', cl:'5', a:'L’Europa', d:'medio', q:'L’Europa è bagnata da:', ops:['oceano Atlantico e Mediterraneo','oceano Pacifico','oceano Indiano','mar Rosso soltanto'], r:0},
 {m:'Geografia', cl:'5', a:'L’Europa', d:'medio', q:'L’Unione Europea è:', ops:['un fiume','un’unione di molti paesi europei','un solo paese','una città'], r:1},
 {m:'Geografia', cl:'5', a:'L’Europa', d:'medio', q:'La moneta di molti paesi europei è:', ops:['il dollaro','la sterlina','l’euro','la lira'], r:2},
  // Il clima europeo
 {m:'Geografia', cl:'5', a:'Il clima europeo', d:'medio', q:'L’Europa settentrionale è:', ops:['più fredda','più calda','desertica','equatoriale'], r:0},
  // Mari e oceani
 {m:'Geografia', cl:'5', a:'Mari e oceani', d:'medio', q:'L’oceano è:', ops:['un lago','una montagna','una grandissima distesa d’acqua','un fiume'], r:2},
 {m:'Geografia', cl:'5', a:'Mari e oceani', d:'medio', q:'L’oceano più grande è:', ops:['l’Atlantico','l’Indiano','il Mediterraneo','il Pacifico'], r:3},
 {m:'Geografia', cl:'5', a:'Mari e oceani', d:'medio', q:'Il Mediterraneo è:', ops:['un mare','un oceano','un fiume','un lago'], r:0},
 {m:'Geografia', cl:'5', a:'Mari e oceani', d:'medio', q:'Il mare più vicino all’Italia è:', ops:['l’Indiano','il Mediterraneo','il Pacifico','l’Atlantico'], r:1},
 {m:'Geografia', cl:'5', a:'Mari e oceani', d:'medio', q:'L’oceano Atlantico bagna:', ops:['solo la Cina','solo l’Australia','le coste occidentali dell’Europa','solo l’Italia'], r:2},
 {m:'Geografia', cl:'5', a:'Mari e oceani', d:'medio', q:'L’acqua dell’oceano è:', ops:['dolce','zuccherata','gassata','salata'], r:3},
 {m:'Geografia', cl:'5', a:'Mari e oceani', d:'medio', q:'Le maree sono causate soprattutto:', ops:['dalla luna','dal vento','dalla pioggia','dai pesci'], r:0},
  // La popolazione
 {m:'Geografia', cl:'5', a:'La popolazione', d:'medio', q:'La popolazione è:', ops:['l’insieme degli abitanti','un fiume','un lago','una montagna'], r:0},
 {m:'Geografia', cl:'5', a:'La popolazione', d:'medio', q:'Le persone che vivono in una città sono:', ops:['gli alberi','gli abitanti','i turisti sempre','i pesci'], r:1},
 {m:'Geografia', cl:'5', a:'La popolazione', d:'medio', q:'Una città con molti abitanti è:', ops:['disabitata','inesistente','popolosa','vuota'], r:2},
 {m:'Geografia', cl:'5', a:'La popolazione', d:'medio', q:'Un paese con pochi abitanti è:', ops:['molto popolato','una metropoli','vuoto','poco popolato'], r:3},
 {m:'Geografia', cl:'5', a:'La popolazione', d:'medio', q:'La densità di popolazione indica:', ops:['quanti abitanti ci sono in un’area','il clima','l’altezza','la temperatura'], r:0},
 {m:'Geografia', cl:'5', a:'La popolazione', d:'medio', q:'Le persone si spostano da un paese all’altro per:', ops:['il peso','lavoro o famiglia','il colore','il suono'], r:1},
 {m:'Geografia', cl:'5', a:'La popolazione', d:'medio', q:'Le grandi città europee sono:', ops:['disabitate','inesistenti','molto popolate','vuote'], r:2},
 {m:'Geografia', cl:'5', a:'La popolazione', d:'medio', q:'L’emigrazione è:', ops:['arrivare in un paese','viaggiare per turismo','andare in vacanza','lasciare il proprio paese'], r:3},
 {m:'Geografia', cl:'5', a:'La popolazione', d:'medio', q:'L’immigrazione è:', ops:['arrivare in un nuovo paese','lasciare il proprio paese','viaggiare per gioco','andare al mare'], r:0},
  // ---- DIFFICILE ----
  // Le regioni italiane
 {m:'Geografia', cl:'5', a:'Le regioni italiane', d:'difficile', q:'L’Umbria è una regione:', ops:['senza sbocco sul mare','insulare','di confine nord','alpina'], r:0},
 {m:'Geografia', cl:'5', a:'Le regioni italiane', d:'difficile', q:'Le Marche si affacciano sul:', ops:['mar Ionio','mar Adriatico','mar Tirreno','mar Ligure'], r:1},
  // L’Europa
 {m:'Geografia', cl:'5', a:'L’Europa', d:'difficile', q:'L’Europa confina a est con:', ops:['l’America','l’Africa','l’Oceania','l’Asia'], r:3},
  // Il clima europeo
 {m:'Geografia', cl:'5', a:'Il clima europeo', d:'difficile', q:'Il clima dell’Europa è:', ops:['vario','tutto uguale','solo polare','solo desertico'], r:0},
 {m:'Geografia', cl:'5', a:'Il clima europeo', d:'difficile', q:'Il nord Europa ha clima:', ops:['equatoriale','freddo','caldissimo','desertico'], r:1},
 {m:'Geografia', cl:'5', a:'Il clima europeo', d:'difficile', q:'Il sud Europa ha clima:', ops:['desertico','glaciale','mediterraneo','polare'], r:2},
 {m:'Geografia', cl:'5', a:'Il clima europeo', d:'difficile', q:'Il clima atlantico è:', ops:['glaciale','umido e piovoso','secco','desertico'], r:1},
 {m:'Geografia', cl:'5', a:'Il clima europeo', d:'difficile', q:'La corrente del Golfo rende più mite il clima:', ops:['dei poli','dell’equatore','dell’Europa occidentale','del deserto'], r:2},
 {m:'Geografia', cl:'5', a:'Il clima europeo', d:'difficile', q:'Il clima continentale ha:', ops:['sempre lo stesso tempo','solo pioggia','solo neve','inverni freddi ed estati calde'], r:3},
 {m:'Geografia', cl:'5', a:'Il clima europeo', d:'difficile', q:'I paesi scandinavi hanno clima:', ops:['freddo','mediterraneo','desertico','equatoriale'], r:0},
 {m:'Geografia', cl:'5', a:'Il clima europeo', d:'difficile', q:'Il clima influenza:', ops:['solo il peso','vegetazione e attività umane','solo il colore','solo il suono'], r:1},
  // Mari e oceani
 {m:'Geografia', cl:'5', a:'Mari e oceani', d:'difficile', q:'Il Mediterraneo è collegato all’Atlantico attraverso:', ops:['il Bosforo','lo stretto di Gibilterra','il canale di Suez','lo stretto di Messina'], r:1},
 {m:'Geografia', cl:'5', a:'Mari e oceani', d:'difficile', q:'Il canale di Suez collega il Mediterraneo al:', ops:['Pacifico','Atlantico','mar Rosso','mar Nero'], r:2},
 {m:'Geografia', cl:'5', a:'Mari e oceani', d:'difficile', q:'Gli oceani coprono:', ops:['pochissimo','solo i poli','solo l’equatore','gran parte della Terra'], r:3},
  // La popolazione
 {m:'Geografia', cl:'5', a:'La popolazione', d:'difficile', q:'Roma è una città:', ops:['un villaggio','molto popolata','poco popolata','disabitata'], r:1},
 ],

 /* ==================== CLASSE 5 - Matematica ==================== */
 '5M': [
  // ---- FACILE ----
  // Operazioni con le frazioni
 {m:'Matematica', cl:'5', a:'Operazioni con le frazioni', d:'facile', q:'Quanto fa 1/2 + 1/2?', ops:['1/3','2','1','1/4'], r:2},
 {m:'Matematica', cl:'5', a:'Operazioni con le frazioni', d:'facile', q:'Quanto fa 3/8 + 2/8?', ops:['5/8','6/8','1/8','5/16'], r:0},
 {m:'Matematica', cl:'5', a:'Operazioni con le frazioni', d:'facile', q:'Quanto fa 7/8 − 3/8?', ops:['4/16','4/8','10/8','5/8'], r:1},
  // Probabilità
 {m:'Matematica', cl:'5', a:'Probabilità', d:'facile', q:'Lanciando una MONETA, la probabilità di ottenere testa è:', ops:['1/2','1/3','1','0'], r:0},
 {m:'Matematica', cl:'5', a:'Probabilità', d:'facile', q:'Un evento CERTO ha probabilità:', ops:['100','0','1/2','1'], r:3},
 {m:'Matematica', cl:'5', a:'Probabilità', d:'facile', q:'Un evento IMPOSSIBILE ha probabilità:', ops:['1/2','1/4','1','0'], r:3},
  // Statistica
 {m:'Matematica', cl:'5', a:'Statistica', d:'facile', q:'Qual è la moda di 5, 5, 5, 7?', ops:['5','7','5,5','6'], r:0},
 {m:'Matematica', cl:'5', a:'Statistica', d:'facile', q:'Il grafico a TORTA mostra:', ops:['niente','le parti di un intero','una serie di giorni','solo testi'], r:1},
  // Problemi misti
 {m:'Matematica', cl:'5', a:'Problemi misti', d:'facile', q:'Quanto fa 8/8 − 3/8?', ops:['11/8','5/16','6/8','5/8'], r:3},
  // ---- MEDIO ----
  // Numeri relativi
 {m:'Matematica', cl:'5', a:'Numeri relativi', d:'medio', q:'Lo ZERO è un numero:', ops:['né positivo né negativo','doppio','positivo','negativo'], r:0},
  // Operazioni con le frazioni
 {m:'Matematica', cl:'5', a:'Operazioni con le frazioni', d:'medio', q:'Quanto fa 1/2 + 1/3?', ops:['2/6','2/5','5/6','1/5'], r:2},
 {m:'Matematica', cl:'5', a:'Operazioni con le frazioni', d:'medio', q:'Quanto fa 2/3 × 3/4?', ops:['2/7','6/7','1/2','5/7'], r:2},
 {m:'Matematica', cl:'5', a:'Operazioni con le frazioni', d:'medio', q:'Per sommare frazioni con denominatori DIVERSI bisogna prima:', ops:['trovare un denominatore comune','sottrarle','invertirle','moltiplicarle'], r:0},
 {m:'Matematica', cl:'5', a:'Operazioni con le frazioni', d:'medio', q:'Quanto fa 1/4 × 8?', ops:['2','4','32','1/2'], r:0},
 {m:'Matematica', cl:'5', a:'Operazioni con le frazioni', d:'medio', q:'Quanto vale 3/5 di 25?', ops:['10','12','20','15'], r:3},
  // Probabilità
 {m:'Matematica', cl:'5', a:'Probabilità', d:'medio', q:'Un dado standard ha quante facce?', ops:['6','8','12','4'], r:0},
 {m:'Matematica', cl:'5', a:'Probabilità', d:'medio', q:'La probabilità di fare 3 lanciando un dado è:', ops:['1/6','1/3','1/2','6/6'], r:0},
 {m:'Matematica', cl:'5', a:'Probabilità', d:'medio', q:'La probabilità di fare un numero PARI lanciando un dado è:', ops:['2/3','1/6','1/2','1/3'], r:2},
  // Statistica
 {m:'Matematica', cl:'5', a:'Statistica', d:'medio', q:'La media di 4 e 8 vale:', ops:['8','12','6','4'], r:2},
 {m:'Matematica', cl:'5', a:'Statistica', d:'medio', q:'La mediana di 1, 3, 9 vale:', ops:['1','9','13','3'], r:3},
  // Problemi misti
 {m:'Matematica', cl:'5', a:'Problemi misti', d:'medio', q:'La temperatura è −2°C e sale di 5 gradi. Quanta temperatura c’è ora?', ops:['+3°C','−7°C','+7°C','−3°C'], r:0},
 {m:'Matematica', cl:'5', a:'Problemi misti', d:'medio', q:'Un maglione costa 40 euro con uno sconto del 25% (=10 euro). Quanto paghi?', ops:['10 euro','30 euro','20 euro','35 euro'], r:1},
 {m:'Matematica', cl:'5', a:'Problemi misti', d:'medio', q:'Quanto vale 1/2 di 18?', ops:['36','8','9','6'], r:2},
 {m:'Matematica', cl:'5', a:'Problemi misti', d:'medio', q:'Un libro costa 12 euro con il 50% di sconto. Quanto paghi?', ops:['6 euro','10 euro','8 euro','24 euro'], r:0},
  // ---- DIFFICILE ----
  // Numeri relativi
 {m:'Matematica', cl:'5', a:'Numeri relativi', d:'difficile', q:'Quale numero è maggiore: +5 o −5?', ops:['−5','+5','sono uguali','non si può dire'], r:1},
 {m:'Matematica', cl:'5', a:'Numeri relativi', d:'difficile', q:'Quale numero è maggiore: −7 o −3?', ops:['zero','−7','−3','sono uguali'], r:2},
 {m:'Matematica', cl:'5', a:'Numeri relativi', d:'difficile', q:'Quanto fa (+4) + (+3)?', ops:['−7','12','7','1'], r:2},
 {m:'Matematica', cl:'5', a:'Numeri relativi', d:'difficile', q:'Quanto fa (−2) + (−3)?', ops:['5','−1','6','−5'], r:3},
 {m:'Matematica', cl:'5', a:'Numeri relativi', d:'difficile', q:'Quanto fa (+6) + (−2)?', ops:['8','4','−4','3'], r:1},
 {m:'Matematica', cl:'5', a:'Numeri relativi', d:'difficile', q:'Quanto fa (−5) + 8?', ops:['−13','3','−3','13'], r:1},
 {m:'Matematica', cl:'5', a:'Numeri relativi', d:'difficile', q:'Quanto fa (+3) − 5?', ops:['−2','2','−8','8'], r:0},
 {m:'Matematica', cl:'5', a:'Numeri relativi', d:'difficile', q:'Quanto fa (−4) − 3?', ops:['−7','−1','7','1'], r:0},
 {m:'Matematica', cl:'5', a:'Numeri relativi', d:'difficile', q:'I numeri relativi sulla retta si rappresentano:', ops:['in diagonale','solo a destra dello zero','a destra e a sinistra dello zero','solo sotto lo zero'], r:2},
  // Operazioni con le frazioni
 {m:'Matematica', cl:'5', a:'Operazioni con le frazioni', d:'difficile', q:'Quanto fa 2/3 ÷ 3/4?', ops:['9/8','8/9','6/12','1/2'], r:1},
 {m:'Matematica', cl:'5', a:'Operazioni con le frazioni', d:'difficile', q:'Per DIVIDERE una frazione per un’altra:', ops:['si sottraggono','non si può fare','si moltiplica per l’inversa','si sommano'], r:2},
  // Geometria del cerchio
 {m:'Matematica', cl:'5', a:'Geometria del cerchio', d:'difficile', q:'La formula dell’AREA del cerchio è:', ops:['A = πd','A = r²','A = πr²','A = 2πr'], r:2},
 {m:'Matematica', cl:'5', a:'Geometria del cerchio', d:'difficile', q:'Se il raggio è 5 cm, il diametro è:', ops:['10 cm','25 cm','5 cm','2,5 cm'], r:0},
 {m:'Matematica', cl:'5', a:'Geometria del cerchio', d:'difficile', q:'Pi-greco (π) vale circa:', ops:['3,14','1,14','2,14','4,14'], r:0},
 {m:'Matematica', cl:'5', a:'Geometria del cerchio', d:'difficile', q:'La circonferenza di un cerchio con raggio 3 vale circa (2 × 3,14 × 3):', ops:['3,14','18,84','9,42','6,28'], r:1},
 {m:'Matematica', cl:'5', a:'Geometria del cerchio', d:'difficile', q:'L’area di un cerchio di raggio 1 vale circa:', ops:['1,14','9,42','3,14','6,28'], r:2},
 {m:'Matematica', cl:'5', a:'Geometria del cerchio', d:'difficile', q:'Il "Pi Day" si celebra il:', ops:['14 maggio','4 marzo','1 aprile','14 marzo'], r:3},
  // Probabilità
 {m:'Matematica', cl:'5', a:'Probabilità', d:'difficile', q:'La probabilità di fare un numero MAGGIORE DI 4 (cioè 5 o 6) lanciando un dado è:', ops:['1/6','2/3','1/3','1/2'], r:2},
 {m:'Matematica', cl:'5', a:'Probabilità', d:'difficile', q:'In una borsa ci sono 3 palline rosse e 1 blu. La probabilità di pescare la blu è:', ops:['1/3','3/4','1/2','1/4'], r:3},
  // Statistica
 {m:'Matematica', cl:'5', a:'Statistica', d:'difficile', q:'La media di 10, 20 e 30 vale:', ops:['20','10','30','60'], r:0},
 {m:'Matematica', cl:'5', a:'Statistica', d:'difficile', q:'L’istogramma assomiglia al grafico a barre, ma:', ops:['è tondo','le barre sono attaccate (dati continui)','è sempre viola','non ha numeri'], r:1},
  // Problemi misti
 {m:'Matematica', cl:'5', a:'Problemi misti', d:'difficile', q:'Quanto fa (−3) + 8?', ops:['+11','−11','+5','−5'], r:2},
 {m:'Matematica', cl:'5', a:'Problemi misti', d:'difficile', q:'Lanciando un dado, la probabilità di fare 1 oppure 2 è:', ops:['1/6','1/2','2/3','1/3'], r:3},
 {m:'Matematica', cl:'5', a:'Problemi misti', d:'difficile', q:'Quanto fa (−5) + 5?', ops:['1','0','10','−10'], r:1},
 ],

 /* ==================== CLASSE 5 - Musica ==================== */
 '5MU': [
  // ---- FACILE ----
  // La storia della musica
 {m:'Musica', cl:'5', a:'La storia della musica', d:'facile', q:'La musica esiste:', ops:['da tempi antichissimi','da pochi anni','solo da oggi','mai'], r:0},
 {m:'Musica', cl:'5', a:'La storia della musica', d:'facile', q:'I primi strumenti erano fatti di:', ops:['vetro','legno, ossa e pietre','plastica','metallo moderno'], r:1},
 {m:'Musica', cl:'5', a:'La storia della musica', d:'facile', q:'Gli antichi Greci usavano la musica:', ops:['mai','solo per cucinare','nel teatro e nelle feste','solo per dormire'], r:2},
 {m:'Musica', cl:'5', a:'La storia della musica', d:'facile', q:'Nel Medioevo la musica era soprattutto:', ops:['elettronica','rock','jazz','religiosa'], r:3},
  // I generi musicali
 {m:'Musica', cl:'5', a:'I generi musicali', d:'facile', q:'Il rock è un genere:', ops:['di pittura','di cucina','di sport','musicale'], r:3},
 {m:'Musica', cl:'5', a:'I generi musicali', d:'facile', q:'Il jazz è nato:', ops:['in America','in Italia','in Cina','in Australia'], r:0},
  // Gli strumenti
 {m:'Musica', cl:'5', a:'Gli strumenti', d:'facile', q:'La tromba è a:', ops:['percussione','tasti','fiato','corde'], r:2},
  // La notazione
 {m:'Musica', cl:'5', a:'La notazione', d:'facile', q:'La notazione musicale serve per:', ops:['cucinare','dormire','scrivere la musica','disegnare'], r:2},
 {m:'Musica', cl:'5', a:'La notazione', d:'facile', q:'La chiave di violino è anche:', ops:['chiave di SOL','chiave di FA','chiave di DO','chiave di LA'], r:0},
 {m:'Musica', cl:'5', a:'La notazione', d:'facile', q:'Le figure indicano:', ops:['la forma','la durata','il colore','il peso'], r:1},
  // I grandi compositori
 {m:'Musica', cl:'5', a:'I grandi compositori', d:'facile', q:'Mozart fu un grande:', ops:['compositore','pittore','scultore','cuoco'], r:0},
 {m:'Musica', cl:'5', a:'I grandi compositori', d:'facile', q:'Beethoven fu un grande:', ops:['scienziato','compositore','pittore','poeta'], r:1},
 {m:'Musica', cl:'5', a:'I grandi compositori', d:'facile', q:'Bach fu un grande:', ops:['scultore','attore','compositore','pittore'], r:2},
 {m:'Musica', cl:'5', a:'I grandi compositori', d:'facile', q:'Verdi scrisse soprattutto:', ops:['canzoni pop','jazz','rock','opere liriche'], r:3},
  // ---- MEDIO ----
  // La storia della musica
 {m:'Musica', cl:'5', a:'La storia della musica', d:'medio', q:'Nel Barocco visse il compositore:', ops:['Verdi','Bach','Beethoven','Mozart'], r:1},
 {m:'Musica', cl:'5', a:'La storia della musica', d:'medio', q:'La musica classica si sviluppò:', ops:['nell’antica Roma','nel Paleolitico','tra il 1700 e il 1800','nel 2000'], r:2},
  // I generi musicali
 {m:'Musica', cl:'5', a:'I generi musicali', d:'medio', q:'La musica classica è:', ops:['un colore','uno sport','un genere musicale','un cibo'], r:2},
 {m:'Musica', cl:'5', a:'I generi musicali', d:'medio', q:'La musica pop è:', ops:['mai ascoltata','molto diffusa','sconosciuta','solo per pochi'], r:1},
 {m:'Musica', cl:'5', a:'I generi musicali', d:'medio', q:'Il rap usa soprattutto:', ops:['solo strumenti','solo fischi','la parola ritmata','il silenzio'], r:2},
 {m:'Musica', cl:'5', a:'I generi musicali', d:'medio', q:'La musica folk è legata:', ops:['solo ai computer','solo al rock','solo al jazz','alla tradizione popolare'], r:3},
 {m:'Musica', cl:'5', a:'I generi musicali', d:'medio', q:'La musica elettronica usa:', ops:['strumenti elettronici','solo tamburi','solo voci','solo fischi'], r:0},
  // I grandi compositori
 {m:'Musica', cl:'5', a:'I grandi compositori', d:'medio', q:'Mozart era di nazionalità:', ops:['austriaca','italiana','francese','tedesca'], r:0},
 {m:'Musica', cl:'5', a:'I grandi compositori', d:'medio', q:'Beethoven era di nazionalità:', ops:['francese','tedesca','austriaca','italiana'], r:1},
 {m:'Musica', cl:'5', a:'I grandi compositori', d:'medio', q:'Vivaldi compose:', ops:['il Flauto Magico','la Traviata','Le Quattro Stagioni','la Nona Sinfonia'], r:2},
  // ---- DIFFICILE ----
  // La storia della musica
 {m:'Musica', cl:'5', a:'La storia della musica', d:'difficile', q:'Il Rinascimento vide nascere:', ops:['nuove forme musicali','il rock','il jazz','l’elettronica'], r:0},
 {m:'Musica', cl:'5', a:'La storia della musica', d:'difficile', q:'Il Romanticismo amava la musica:', ops:['solo elettronica','solo ritmica','solo silenziosa','espressiva e piena di sentimenti'], r:3},
 {m:'Musica', cl:'5', a:'La storia della musica', d:'difficile', q:'Il Novecento portò:', ops:['la musica elettronica e il jazz','solo il canto gregoriano','solo la musica barocca','solo la musica medievale'], r:0},
 {m:'Musica', cl:'5', a:'La storia della musica', d:'difficile', q:'Oggi la musica si ascolta:', ops:['solo in chiesa','su molti dispositivi','solo dal vivo','mai'], r:1},
  // I generi musicali
 {m:'Musica', cl:'5', a:'I generi musicali', d:'difficile', q:'Il blues è nato:', ops:['in Germania','negli Stati Uniti','in Italia','in Francia'], r:1},
 {m:'Musica', cl:'5', a:'I generi musicali', d:'difficile', q:'L’opera lirica unisce:', ops:['solo chitarra','solo silenzio','canto e orchestra','solo batteria'], r:2},
 {m:'Musica', cl:'5', a:'I generi musicali', d:'difficile', q:'Ogni genere musicale ha:', ops:['sempre lo stesso ritmo','sempre le stesse parole','mai strumenti','caratteristiche proprie'], r:3},
  // Gli strumenti
 {m:'Musica', cl:'5', a:'Gli strumenti', d:'difficile', q:'Il contrabbasso è a:', ops:['corde','fiato','percussione','tasti'], r:0},
 {m:'Musica', cl:'5', a:'Gli strumenti', d:'difficile', q:'Il fagotto è a:', ops:['tasti','fiato','corde','percussione'], r:1},
  // La notazione
 {m:'Musica', cl:'5', a:'La notazione', d:'difficile', q:'Il tempo in musica si misura in:', ops:['gradi','battute','metri','litri'], r:1},
 {m:'Musica', cl:'5', a:'La notazione', d:'difficile', q:'La legatura unisce:', ops:['più strumenti','più parole','più note','più colori'], r:2},
 {m:'Musica', cl:'5', a:'La notazione', d:'difficile', q:'Il punto dopo una nota ne:', ops:['accorcia la durata','cambia il colore','cambia il nome','allunga la durata'], r:3},
  // I grandi compositori
 {m:'Musica', cl:'5', a:'I grandi compositori', d:'difficile', q:'Il Flauto Magico è un’opera di:', ops:['Verdi','Bach','Beethoven','Mozart'], r:3},
 {m:'Musica', cl:'5', a:'I grandi compositori', d:'difficile', q:'La Nona Sinfonia è di:', ops:['Beethoven','Mozart','Vivaldi','Verdi'], r:0},
 {m:'Musica', cl:'5', a:'I grandi compositori', d:'difficile', q:'I compositori scrivono:', ops:['le poesie','la musica','i quadri','le sculture'], r:1},
 ],

 /* ==================== CLASSE 5 - Religione Cattolica ==================== */
 '5R': [
  // ---- FACILE ----
  // Le religioni
 {m:'Religione Cattolica', cl:'5', a:'Le religioni', d:'facile', q:'Il cristianesimo segue:', ops:['Maometto','Buddha','Gesù','Mosè'], r:2},
 {m:'Religione Cattolica', cl:'5', a:'Le religioni', d:'facile', q:'L’ebraismo segue:', ops:['il Vangelo','il Corano','i Veda','la Torah'], r:3},
  // La Chiesa
 {m:'Religione Cattolica', cl:'5', a:'La Chiesa', d:'facile', q:'La Chiesa cattolica è guidata dal:', ops:['sindaco','preside','Papa','re'], r:2},
 {m:'Religione Cattolica', cl:'5', a:'La Chiesa', d:'facile', q:'Il Papa vive a:', ops:['Milano','Napoli','Torino','Roma'], r:3},
 {m:'Religione Cattolica', cl:'5', a:'La Chiesa', d:'facile', q:'I sacerdoti guidano:', ops:['le comunità','le squadre','le scuole','le fabbriche'], r:0},
 {m:'Religione Cattolica', cl:'5', a:'La Chiesa', d:'facile', q:'I vescovi guidano:', ops:['le famiglie','le diocesi','le squadre','le classi'], r:1},
  // I santi
 {m:'Religione Cattolica', cl:'5', a:'I santi', d:'facile', q:'Santa Teresa di Calcutta aiutò:', ops:['i poveri','i ricchi','i re','i soldati'], r:0},
 {m:'Religione Cattolica', cl:'5', a:'I santi', d:'facile', q:'I santi hanno seguito:', ops:['solo il potere','Gesù','solo se stessi','solo i soldi'], r:1},
  // ---- MEDIO ----
  // Le religioni
 {m:'Religione Cattolica', cl:'5', a:'Le religioni', d:'medio', q:'La religione è:', ops:['la fede in Dio','un gioco','uno sport','un cibo'], r:0},
 {m:'Religione Cattolica', cl:'5', a:'Le religioni', d:'medio', q:'Le grandi religioni sono:', ops:['nessuna','cristianesimo, ebraismo e islam','solo una','solo due'], r:1},
 {m:'Religione Cattolica', cl:'5', a:'Le religioni', d:'medio', q:'L’islam segue:', ops:['il Corano','la Torah','il Vangelo','i Veda'], r:0},
 {m:'Religione Cattolica', cl:'5', a:'Le religioni', d:'medio', q:'Il libro sacro dei cristiani è:', ops:['i Veda','la Bibbia','il Corano','la Torah'], r:1},
 {m:'Religione Cattolica', cl:'5', a:'Le religioni', d:'medio', q:'Il luogo di preghiera dei musulmani è:', ops:['la sinagoga','il tempio','la moschea','la chiesa'], r:2},
 {m:'Religione Cattolica', cl:'5', a:'Le religioni', d:'medio', q:'Il luogo di preghiera degli ebrei è:', ops:['la chiesa','la moschea','il tempio','la sinagoga'], r:3},
 {m:'Religione Cattolica', cl:'5', a:'Le religioni', d:'medio', q:'Rispettare le altre religioni è:', ops:['dannoso','importante','sbagliato','inutile'], r:1},
  // La Chiesa
 {m:'Religione Cattolica', cl:'5', a:'La Chiesa', d:'medio', q:'Il Papa si chiama anche:', ops:['Capitano','Maestro','Santo Padre','Re'], r:2},
 {m:'Religione Cattolica', cl:'5', a:'La Chiesa', d:'medio', q:'I cristiani si riuniscono:', ops:['la domenica','mai','solo a Natale','solo a Pasqua'], r:0},
 {m:'Religione Cattolica', cl:'5', a:'La Chiesa', d:'medio', q:'La missione della Chiesa è:', ops:['solo correre','annunciare il Vangelo','solo giocare','solo dormire'], r:1},
 {m:'Religione Cattolica', cl:'5', a:'La Chiesa', d:'medio', q:'La carità è:', ops:['odiare','rubare','mentire','amare il prossimo'], r:3},
  // I santi
 {m:'Religione Cattolica', cl:'5', a:'I santi', d:'medio', q:'San Giovanni Bosco aiutò:', ops:['i soldati','i mercanti','i giovani','i re'], r:2},
 {m:'Religione Cattolica', cl:'5', a:'I santi', d:'medio', q:'I santi sono esempi di:', ops:['odio','paura','egoismo','amore e fede'], r:3},
 {m:'Religione Cattolica', cl:'5', a:'I santi', d:'medio', q:'Il santo patrono d’Italia è:', ops:['San Francesco','San Pietro','San Paolo','San Giovanni'], r:0},
  // I valori cristiani
 {m:'Religione Cattolica', cl:'5', a:'I valori cristiani', d:'medio', q:'L’amore per il prossimo è:', ops:['un valore cristiano','un gioco','un cibo','uno sport'], r:0},
 {m:'Religione Cattolica', cl:'5', a:'I valori cristiani', d:'medio', q:'Perdonare significa:', ops:['odiare','non portare rancore','vendicarsi','litigare'], r:1},
 {m:'Religione Cattolica', cl:'5', a:'I valori cristiani', d:'medio', q:'Aiutare chi è nel bisogno è:', ops:['un cibo','uno sport','un gesto di carità','un gioco'], r:2},
 {m:'Religione Cattolica', cl:'5', a:'I valori cristiani', d:'medio', q:'La pace è:', ops:['una guerra','un gioco','un cibo','un valore importante'], r:3},
 {m:'Religione Cattolica', cl:'5', a:'I valori cristiani', d:'medio', q:'La giustizia significa:', ops:['dare a ciascuno il suo','rubare','mentire','litigare'], r:0},
 {m:'Religione Cattolica', cl:'5', a:'I valori cristiani', d:'medio', q:'L’onestà è:', ops:['ingannare','dire sempre la verità','dire bugie','rubare'], r:1},
 {m:'Religione Cattolica', cl:'5', a:'I valori cristiani', d:'medio', q:'La solidarietà è:', ops:['litigare','odiare','aiutarsi a vicenda','pensare solo a sé'], r:2},
 {m:'Religione Cattolica', cl:'5', a:'I valori cristiani', d:'medio', q:'Il rispetto per gli altri è:', ops:['inutile','dannoso','sbagliato','fondamentale'], r:3},
  // ---- DIFFICILE ----
  // Le religioni
 {m:'Religione Cattolica', cl:'5', a:'Le religioni', d:'difficile', q:'Tutte le religioni invitano:', ops:['al bene e alla pace','alla guerra','all’odio','alla bugia'], r:0},
  // La Chiesa
 {m:'Religione Cattolica', cl:'5', a:'La Chiesa', d:'difficile', q:'La Chiesa è una grande:', ops:['scuola','fabbrica','famiglia','squadra'], r:2},
  // I sacramenti
 {m:'Religione Cattolica', cl:'5', a:'I sacramenti', d:'difficile', q:'Con l’eucaristia riceviamo:', ops:['una medaglia','Gesù','un premio','un gioco'], r:1},
  // I valori cristiani
 {m:'Religione Cattolica', cl:'5', a:'I valori cristiani', d:'difficile', q:'I valori cristiani aiutano a:', ops:['rubare','vivere insieme in pace','litigare','odiare'], r:1},
 ],

 /* ==================== CLASSE 5 - Scienze ==================== */
 '5S': [
  // ---- FACILE ----
  // Il sistema solare
 {m:'Scienze', cl:'5', a:'Il sistema solare', d:'facile', q:'Il sole è una stella che:', ops:['produce luce e calore','è fredda','è un pianeta','non esiste'], r:0},
 {m:'Scienze', cl:'5', a:'Il sistema solare', d:'facile', q:'I pianeti girano intorno al:', ops:['polo nord','sole','vulcano','mare'], r:1},
 {m:'Scienze', cl:'5', a:'Il sistema solare', d:'facile', q:'La Terra è il pianeta in cui:', ops:['c’è solo ghiaccio','non esiste acqua','viviamo','non c’è vita'], r:2},
 {m:'Scienze', cl:'5', a:'Il sistema solare', d:'facile', q:'Il movimento della Terra intorno al sole si chiama:', ops:['rotazione','pioggia','vento','rivoluzione'], r:3},
  // Il corpo umano
 {m:'Scienze', cl:'5', a:'Il corpo umano', d:'facile', q:'Il cuore fa parte dell’apparato:', ops:['respiratorio','scheletrico','circolatorio','digestivo'], r:2},
 {m:'Scienze', cl:'5', a:'Il corpo umano', d:'facile', q:'I polmoni fanno parte dell’apparato:', ops:['circolatorio','digerente','scheletrico','respiratorio'], r:3},
 {m:'Scienze', cl:'5', a:'Il corpo umano', d:'facile', q:'Lo stomaco fa parte dell’apparato:', ops:['digestivo','respiratorio','circolatorio','nervoso'], r:0},
 {m:'Scienze', cl:'5', a:'Il corpo umano', d:'facile', q:'Le ossa sostengono:', ops:['il fuoco','il corpo','il vento','l’acqua'], r:1},
  // L’energia e le fonti
 {m:'Scienze', cl:'5', a:'L’energia e le fonti', d:'facile', q:'Il sole è una fonte di energia:', ops:['che si esaurisce','nucleare','fossile','rinnovabile'], r:3},
 {m:'Scienze', cl:'5', a:'L’energia e le fonti', d:'facile', q:'Il petrolio è una fonte:', ops:['non rinnovabile','rinnovabile','che non finisce','infinita'], r:0},
 {m:'Scienze', cl:'5', a:'L’energia e le fonti', d:'facile', q:'L’energia eolica usa:', ops:['il carbone','il vento','il sole','il petrolio'], r:1},
  // La materia e le trasformazioni
 {m:'Scienze', cl:'5', a:'La materia e le trasformazioni', d:'facile', q:'La materia può cambiare:', ops:['stato','colore del sole','forma della luna','suono del vento'], r:0},
 {m:'Scienze', cl:'5', a:'La materia e le trasformazioni', d:'facile', q:'Il ghiaccio che si scioglie diventa:', ops:['sabbia','acqua','vapore','ferro'], r:1},
 {m:'Scienze', cl:'5', a:'La materia e le trasformazioni', d:'facile', q:'L’acqua che bolle diventa:', ops:['neve','pioggia fredda','vapore','ghiaccio'], r:2},
 {m:'Scienze', cl:'5', a:'La materia e le trasformazioni', d:'facile', q:'Il vapore che si raffredda diventa:', ops:['ghiaccio','ferro','vetro','acqua'], r:3},
  // ---- MEDIO ----
  // Il sistema solare
 {m:'Scienze', cl:'5', a:'Il sistema solare', d:'medio', q:'La rotazione della Terra causa:', ops:['il giorno e la notte','le stagioni','la pioggia','i terremoti'], r:0},
 {m:'Scienze', cl:'5', a:'Il sistema solare', d:'medio', q:'La luna gira intorno:', ops:['a Marte','a Nettuno','alla Terra','al sole direttamente'], r:2},
 {m:'Scienze', cl:'5', a:'Il sistema solare', d:'medio', q:'Il pianeta con gli anelli è:', ops:['Venere','Saturno','Mercurio','Marte'], r:1},
  // Il corpo umano
 {m:'Scienze', cl:'5', a:'Il corpo umano', d:'medio', q:'Il cervello fa parte del sistema:', ops:['circolatorio','scheletrico','nervoso','digerente'], r:2},
 {m:'Scienze', cl:'5', a:'Il corpo umano', d:'medio', q:'Il sangue circola nel corpo grazie al:', ops:['cuore','cervello','polmone','fegato'], r:0},
 {m:'Scienze', cl:'5', a:'Il corpo umano', d:'medio', q:'La pelle è:', ops:['un dente','l’organo più esteso del corpo','un osso','un muscolo'], r:1},
  // La fotosintesi
 {m:'Scienze', cl:'5', a:'La fotosintesi', d:'medio', q:'La pianta assorbe anidride carbonica e produce:', ops:['ossigeno','anidride carbonica','fumo','petrolio'], r:0},
 {m:'Scienze', cl:'5', a:'La fotosintesi', d:'medio', q:'Le radici assorbono acqua e:', ops:['vetro','plastica','sali minerali','ferro'], r:2},
  // L’energia e le fonti
 {m:'Scienze', cl:'5', a:'L’energia e le fonti', d:'medio', q:'L’energia solare usa:', ops:['l’acqua','il carbone','il sole','il vento'], r:2},
 {m:'Scienze', cl:'5', a:'L’energia e le fonti', d:'medio', q:'Il carbone, bruciando, inquina:', ops:['l’aria','il suono','la luce','il silenzio'], r:0},
 {m:'Scienze', cl:'5', a:'L’energia e le fonti', d:'medio', q:'Le fonti rinnovabili sono:', ops:['solo gas','sole, vento e acqua','solo petrolio','solo carbone'], r:1},
  // La materia e le trasformazioni
 {m:'Scienze', cl:'5', a:'La materia e le trasformazioni', d:'medio', q:'La combustione è una trasformazione:', ops:['chimica','solo fisica','magica','invisibile'], r:0},
 {m:'Scienze', cl:'5', a:'La materia e le trasformazioni', d:'medio', q:'Sciogliere lo zucchero nell’acqua è una trasformazione:', ops:['impossibile','fisica','chimica','nucleare'], r:1},
 {m:'Scienze', cl:'5', a:'La materia e le trasformazioni', d:'medio', q:'Il punto di congelamento dell’acqua è circa:', ops:['50 gradi','1000 gradi','0 gradi','100 gradi'], r:2},
 {m:'Scienze', cl:'5', a:'La materia e le trasformazioni', d:'medio', q:'Una trasformazione REVERSIBILE è:', ops:['la carta che brucia','il ghiaccio che si scioglie','il legno che brucia','il ferro che arrugginisce'], r:1},
  // ---- DIFFICILE ----
  // Il sistema solare
 {m:'Scienze', cl:'5', a:'Il sistema solare', d:'difficile', q:'La rivoluzione della Terra causa:', ops:['la luna','le stagioni','il giorno e la notte','il vento'], r:1},
 {m:'Scienze', cl:'5', a:'Il sistema solare', d:'difficile', q:'Le fasi lunari durano circa:', ops:['un anno','un giorno','un’ora','un mese'], r:3},
 {m:'Scienze', cl:'5', a:'Il sistema solare', d:'difficile', q:'L’eclissi di sole avviene quando:', ops:['la luna copre il sole','il sole copre la luna','la Terra sparisce','piove'], r:0},
  // Il corpo umano
 {m:'Scienze', cl:'5', a:'Il corpo umano', d:'difficile', q:'I reni servono per:', ops:['sentire','masticare','filtrare il sangue','vedere'], r:2},
  // La fotosintesi
 {m:'Scienze', cl:'5', a:'La fotosintesi', d:'difficile', q:'La fotosintesi avviene grazie alla:', ops:['luce','buio','neve','sabbia'], r:0},
 {m:'Scienze', cl:'5', a:'La fotosintesi', d:'difficile', q:'Nella fotosintesi la pianta produce:', ops:['solo vetro','ossigeno e zuccheri','solo fumo','solo plastica'], r:1},
 {m:'Scienze', cl:'5', a:'La fotosintesi', d:'difficile', q:'La fotosintesi avviene nelle parti:', ops:['sotterranee','secche','verdi della pianta','rosse della pianta'], r:2},
 {m:'Scienze', cl:'5', a:'La fotosintesi', d:'difficile', q:'La clorofilla è di colore:', ops:['rosso','blu','nero','verde'], r:3},
 {m:'Scienze', cl:'5', a:'La fotosintesi', d:'difficile', q:'La fotosintesi avviene di giorno perché serve:', ops:['il ghiaccio','la luce del sole','il buio totale','la pioggia'], r:1},
 {m:'Scienze', cl:'5', a:'La fotosintesi', d:'difficile', q:'La fotosintesi è importante per tutti perché:', ops:['produce veleni','consuma tutta l’acqua','fa rumore','produce ossigeno'], r:3},
 {m:'Scienze', cl:'5', a:'La fotosintesi', d:'difficile', q:'Gli zuccheri prodotti nella fotosintesi servono alla pianta come:', ops:['nutrimento','colore','protezione dal freddo','profumo'], r:0},
 {m:'Scienze', cl:'5', a:'La fotosintesi', d:'difficile', q:'Di notte, senza luce, la fotosintesi:', ops:['produce più ossigeno','si ferma','aumenta','non cambia'], r:1},
  // L’energia e le fonti
 {m:'Scienze', cl:'5', a:'L’energia e le fonti', d:'difficile', q:'L’energia non si vede, ma:', ops:['è sempre fredda','è sempre blu','si vedono i suoi effetti','non esiste'], r:2},
 {m:'Scienze', cl:'5', a:'L’energia e le fonti', d:'difficile', q:'L’energia idroelettrica usa:', ops:['il vento','il sole','il petrolio','l’acqua'], r:3},
 {m:'Scienze', cl:'5', a:'L’energia e le fonti', d:'difficile', q:'Usare fonti rinnovabili aiuta a:', ops:['spegnere il sole','fermare il vento','ridurre l’inquinamento','aumentare lo spreco'], r:2},
 {m:'Scienze', cl:'5', a:'L’energia e le fonti', d:'difficile', q:'L’energia geotermica viene:', ops:['dal vento','dalla luna','dal buio','dal calore della Terra'], r:3},
  // La materia e le trasformazioni
 {m:'Scienze', cl:'5', a:'La materia e le trasformazioni', d:'difficile', q:'Il punto di ebollizione dell’acqua è circa:', ops:['0 gradi','30 gradi','2000 gradi','100 gradi'], r:3},
 {m:'Scienze', cl:'5', a:'La materia e le trasformazioni', d:'difficile', q:'La ruggine del ferro è una trasformazione:', ops:['chimica','solo fisica','magica','che non esiste'], r:0},
 ],

 /* ==================== CLASSE 5 - Storia ==================== */
 '5ST': [
  // ---- FACILE ----
  // Gli Egizi
 {m:'Storia', cl:'5', a:'Gli Egizi', d:'facile', q:'Gli Egizi vissero lungo il:', ops:['Nilo','Po','Tevere','Reno'], r:0},
 {m:'Storia', cl:'5', a:'Gli Egizi', d:'facile', q:'Il capo degli Egizi era il:', ops:['re moderno','faraone','console','imperatore'], r:1},
 {m:'Storia', cl:'5', a:'Gli Egizi', d:'facile', q:'Gli Egizi costruirono le:', ops:['autostrade','ferrovie','piramidi','torri'], r:2},
 {m:'Storia', cl:'5', a:'Gli Egizi', d:'facile', q:'La scrittura egizia si chiama:', ops:['alfabeto','cuneiforme','stampatello','geroglifici'], r:3},
  // I Greci
 {m:'Storia', cl:'5', a:'I Greci', d:'facile', q:'Gli dei greci vivevano sul:', ops:['monte Olimpo','monte Bianco','monte Rosa','Vesuvio'], r:0},
  // I Romani
 {m:'Storia', cl:'5', a:'I Romani', d:'facile', q:'La lingua dei Romani era:', ops:['il greco','il francese','l’inglese','il latino'], r:3},
  // Il Medioevo
 {m:'Storia', cl:'5', a:'Il Medioevo', d:'facile', q:'Il Medioevo è il periodo:', ops:['del futuro','di internet','dopo la caduta dell’impero romano','prima dei Romani'], r:2},
 {m:'Storia', cl:'5', a:'Il Medioevo', d:'facile', q:'Nel Medioevo si costruivano:', ops:['computer','aerei','navi spaziali','castelli'], r:3},
 {m:'Storia', cl:'5', a:'Il Medioevo', d:'facile', q:'Il signore del castello si chiamava:', ops:['nobile','contadino','mercante','artigiano'], r:0},
 {m:'Storia', cl:'5', a:'Il Medioevo', d:'facile', q:'I contadini lavoravano:', ops:['in aereo','la terra','al computer','in fabbrica'], r:1},
  // Le grandi scoperte
 {m:'Storia', cl:'5', a:'Le grandi scoperte', d:'facile', q:'La stampa fu inventata da:', ops:['Gutenberg','Leonardo','Galileo','Dante'], r:0},
 {m:'Storia', cl:'5', a:'Le grandi scoperte', d:'facile', q:'La stampa permetteva di:', ops:['telefonare','produrre molti libri','volare','nuotare'], r:1},
 {m:'Storia', cl:'5', a:'Le grandi scoperte', d:'facile', q:'Le grandi scoperte geografiche avvennero:', ops:['nell’antichità','nel Medioevo','nel 2000','tra il 1400 e il 1500'], r:3},
  // ---- MEDIO ----
  // Gli Egizi
 {m:'Storia', cl:'5', a:'Gli Egizi', d:'medio', q:'Gli Egizi scrivevano sul:', ops:['papiro','vetro','ferro','computer'], r:0},
 {m:'Storia', cl:'5', a:'Gli Egizi', d:'medio', q:'Le piramidi erano:', ops:['negozi','tombe dei faraoni','case','scuole'], r:1},
 {m:'Storia', cl:'5', a:'Gli Egizi', d:'medio', q:'Il Nilo rendeva la terra:', ops:['ghiacciata','rocciosa','fertile','secca'], r:2},
  // I Greci
 {m:'Storia', cl:'5', a:'I Greci', d:'medio', q:'Il tempio più famoso di Atene è:', ops:['il Duomo','il Partenone','il Colosseo','la Torre Eiffel'], r:1},
 {m:'Storia', cl:'5', a:'I Greci', d:'medio', q:'Le Olimpiadi nacquero in:', ops:['Francia','Egitto','Grecia','Italia'], r:2},
 {m:'Storia', cl:'5', a:'I Greci', d:'medio', q:'I poemi omerici sono:', ops:['Iliade e Odissea','Eneide','Divina Commedia','Promessi Sposi'], r:0},
 {m:'Storia', cl:'5', a:'I Greci', d:'medio', q:'I filosofi greci più famosi sono:', ops:['Galileo, Newton','Socrate, Platone e Aristotele','Dante, Petrarca','Leonardo, Michelangelo'], r:1},
  // I Romani
 {m:'Storia', cl:'5', a:'I Romani', d:'medio', q:'Il Colosseo è:', ops:['un mercato','un porto','un anfiteatro','una scuola'], r:2},
 {m:'Storia', cl:'5', a:'I Romani', d:'medio', q:'Il primo imperatore romano fu:', ops:['Augusto','Giulio Cesare','Nerone','Romolo'], r:0},
 {m:'Storia', cl:'5', a:'I Romani', d:'medio', q:'I Romani erano famosi per:', ops:['la stampa','le strade e le leggi','internet','l’aviazione'], r:1},
 {m:'Storia', cl:'5', a:'I Romani', d:'medio', q:'Il diritto romano è:', ops:['un cibo','un gioco','una danza','l’insieme delle leggi romane'], r:3},
  // Il Medioevo
 {m:'Storia', cl:'5', a:'Il Medioevo', d:'medio', q:'Il cavaliere combatteva:', ops:['sul computer','in nave spaziale','a cavallo','in aereo'], r:2},
 {m:'Storia', cl:'5', a:'Il Medioevo', d:'medio', q:'Il monastero era abitato dai:', ops:['cavalieri','contadini','mercanti','monaci'], r:3},
 {m:'Storia', cl:'5', a:'Il Medioevo', d:'medio', q:'I monaci copiavano:', ops:['i libri a mano','i file del computer','i film','le foto'], r:0},
  // Le grandi scoperte
 {m:'Storia', cl:'5', a:'Le grandi scoperte', d:'medio', q:'Colombo nel 1492 arrivò:', ops:['in Antartide','sulla luna','in America','in Australia'], r:2},
 {m:'Storia', cl:'5', a:'Le grandi scoperte', d:'medio', q:'La bussola serve per:', ops:['orientarsi','cucinare','scrivere','cantare'], r:0},
 {m:'Storia', cl:'5', a:'Le grandi scoperte', d:'medio', q:'Le caravelle erano:', ops:['treni','navi veloci','automobili','aerei'], r:1},
 {m:'Storia', cl:'5', a:'Le grandi scoperte', d:'medio', q:'Leonardo da Vinci fu:', ops:['solo soldato','solo contadino','artista e inventore','solo cuoco'], r:2},
  // ---- DIFFICILE ----
  // Gli Egizi
 {m:'Storia', cl:'5', a:'Gli Egizi', d:'difficile', q:'Il processo per conservare i morti si chiamava:', ops:['fotografia','stampa','navigazione','mummificazione'], r:3},
 {m:'Storia', cl:'5', a:'Gli Egizi', d:'difficile', q:'Gli Egizi erano guidati anche dai:', ops:['sacerdoti','piloti','astronauti','programmatori'], r:0},
 {m:'Storia', cl:'5', a:'Gli Egizi', d:'difficile', q:'La civiltà egizia durò:', ops:['un mese','migliaia di anni','pochi giorni','un anno'], r:1},
  // I Greci
 {m:'Storia', cl:'5', a:'I Greci', d:'difficile', q:'Il teatro nacque in:', ops:['Francia','Inghilterra','Grecia','Italia'], r:2},
 {m:'Storia', cl:'5', a:'I Greci', d:'difficile', q:'Alessandro Magno era:', ops:['un faraone','un imperatore romano','un papa','un condottiero macedone'], r:3},
  // I Romani
 {m:'Storia', cl:'5', a:'I Romani', d:'difficile', q:'I Romani conquistarono:', ops:['gran parte del Mediterraneo','solo Roma','solo la Grecia','solo l’Egitto'], r:0},
 {m:'Storia', cl:'5', a:'I Romani', d:'difficile', q:'La caduta dell’impero d’Occidente avvenne nel:', ops:['2000','476 d.C.','1492','1789'], r:1},
  // Il Medioevo
 {m:'Storia', cl:'5', a:'Il Medioevo', d:'difficile', q:'La società medievale era divisa in:', ops:['solo cavalieri','nobili, clero e contadini','solo ricchi','solo poveri'], r:1},
 {m:'Storia', cl:'5', a:'Il Medioevo', d:'difficile', q:'I castelli servivano per:', ops:['nuotare','stampare','difendersi','volare'], r:2},
 {m:'Storia', cl:'5', a:'Il Medioevo', d:'difficile', q:'Le cattedrali medievali erano:', ops:['mercati','stadi','porti','grandi chiese'], r:3},
  // Le grandi scoperte
 {m:'Storia', cl:'5', a:'Le grandi scoperte', d:'difficile', q:'Galileo Galilei studiò:', ops:['la cucina','la moda','la danza','il cielo con il cannocchiale'], r:3},
 {m:'Storia', cl:'5', a:'Le grandi scoperte', d:'difficile', q:'La scoperta dell’America cambiò:', ops:['i commerci e le conoscenze','solo il clima','solo i colori','nulla'], r:0},
 {m:'Storia', cl:'5', a:'Le grandi scoperte', d:'difficile', q:'La stampa a caratteri mobili usava:', ops:['lettere d’aria','lettere di metallo','lettere di ghiaccio','lettere di sabbia'], r:1},
 ],

 /* ==================== CLASSE 5 - Tecnologia e Informatica ==================== */
 '5TI': [
  // ---- FACILE ----
  // L’energia e la tecnologia
 {m:'Tecnologia e Informatica', cl:'5', a:'L’energia e la tecnologia', d:'facile', q:'Per funzionare, le macchine hanno bisogno di:', ops:['energia','solo sabbia','solo silenzio','solo buio'], r:0},
 {m:'Tecnologia e Informatica', cl:'5', a:'L’energia e la tecnologia', d:'facile', q:'Le batterie forniscono:', ops:['acqua','sabbia','aria','energia'], r:3},
  // ---- MEDIO ----
  // L’energia e la tecnologia
 {m:'Tecnologia e Informatica', cl:'5', a:'L’energia e la tecnologia', d:'medio', q:'Il risparmio energetico serve per:', ops:['dormire','proteggere l’ambiente','sprecare','inquinare'], r:1},
 {m:'Tecnologia e Informatica', cl:'5', a:'L’energia e la tecnologia', d:'medio', q:'Le energie pulite sono:', ops:['sole, vento e acqua','solo carbone','solo petrolio','solo gas'], r:0},
  // ---- DIFFICILE ----
  // La programmazione
 {m:'Tecnologia e Informatica', cl:'5', a:'La programmazione', d:'difficile', q:'I videogiochi sono fatti:', ops:['con la sabbia','con la programmazione','con i colori','con i suoni'], r:1},
  // Internet
 {m:'Tecnologia e Informatica', cl:'5', a:'Internet', d:'difficile', q:'Il wi-fi serve per:', ops:['correre','collegarsi senza fili','dormire','mangiare'], r:1},
 {m:'Tecnologia e Informatica', cl:'5', a:'Internet', d:'difficile', q:'La rete si usa per:', ops:['solo correre','solo mangiare','comunicare e informarsi','solo dormire'], r:2},
  // Le macchine
 {m:'Tecnologia e Informatica', cl:'5', a:'Le macchine', d:'difficile', q:'Il computer è una macchina:', ops:['che mangia','che canta','che elabora informazioni','che dorme'], r:2},
 {m:'Tecnologia e Informatica', cl:'5', a:'Le macchine', d:'difficile', q:'Le macchine moderne sono sempre più:', ops:['lente','inutili','pesanti','efficienti'], r:3},
  // L’energia e la tecnologia
 {m:'Tecnologia e Informatica', cl:'5', a:'L’energia e la tecnologia', d:'difficile', q:'L’energia elettrica serve per:', ops:['correre','far funzionare le macchine','dormire','mangiare'], r:1},
 {m:'Tecnologia e Informatica', cl:'5', a:'L’energia e la tecnologia', d:'difficile', q:'La tecnologia usa molta:', ops:['acqua salata','sabbia','nebbia','energia'], r:3},
 {m:'Tecnologia e Informatica', cl:'5', a:'L’energia e la tecnologia', d:'difficile', q:'Usare energia pulita aiuta a:', ops:['correre','ridurre l’inquinamento','aumentare lo spreco','dormire'], r:1},
 ],
};
