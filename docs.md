# FTF2015 page

This is FTF2015 source files. 
Author: Matteo Cavucci (mced.it)

Based on: 
[Assemble.io](http://assemble.io)
Grunt, Bower, Libsass

## grunt tasks:

to work:
- $ grunt serve 

to build:
- $ grunt build 


## Testi

Nella cartella src/data ci sono tutti i riferimenti per i testi del sito.
Il file site.yml contiene titoli e micro-copy.
I file nome-cognome.json sono relativi ai dati di ciascuno speaker.


# Sponsors
Nel file src/data/sponsors.json ci sono i contenuti per la sezione sponsor. "Order" è l'ordine in cui viene posizionato lo sponsor; "Weight" determina in quale livello di sponsor verrà incluso.

# Speakers
Aggiungi modifica il singolo file .json relativo allo Speaker in data/speakers. Non editare data/speakers.json, è compilato in automatico da grunt. Compila il campo "image" se hai un'immagine custom, altrimenti il sistema pescherà nome-cognome.jpg nella cartella dist/images.
