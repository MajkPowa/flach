# FLACH — koupelny a stavby

Web společnosti FLACH s.r.o., postavený v Reactu a Vite.

## Lokální vývoj

Vyžaduje Node.js 22.

```sh
npm ci
npm run dev
```

## Kontrola a sestavení

```sh
npm run typecheck
npm run build
npm run preview -- --port 4173
```

Výstup je ve složce `dist`. Relativní cesty k assetům podporují adresu GitHub Pages `/flach/` i vlastní doménu. Navigace používá URL hash, takže odkazy lze obnovit i na statickém hostingu.

TypeScript kontroluje vstupní bod webu a všechny jeho importy. Starší nepoužívané experimenty s Firebase a Gemini zůstávají mimo aktivní aplikaci i produkční bundle.

## GitHub Pages

Workflow `.github/workflows/deploy.yml` sestaví a nasadí web po pushi do `main` nebo po ručním spuštění. V nastavení repozitáře musí být pro Pages zvolen zdroj **GitHub Actions**.

Repozitář: `MajkPowa/flach`.

Očekávaná adresa: https://majkpowa.github.io/flach/

## Poptávky

Kontaktní formulář a konfigurátor připraví e-mail na `uher@flach.cz`. Návštěvník musí dokončit odeslání ve své poštovní aplikaci. Web netvrdí, že zpráva už byla odeslána, a kontaktní údaje neukládá. Telefon: +420 604 178 805.

Ve statické verzi není aktivní AI chat ani generování návrhů. Konfigurátor sestavuje přehled požadavků k osobní konzultaci. Případné budoucí AI funkce a automatické odesílání formulářů vyžadují samostatné zabezpečené serverové API; tajné klíče nepatří do klientského bundlu.

Lokální `.env*`, faktury ve složkách `output/` a `invoices/`, dočasné soubory a Firebase cache jsou vyloučené z Gitu. Soukromé doklady nepatří do veřejného webu.

## Vizuální systém a UX

Směr navazuje na stávající video a styl FLACH: teplá bílá `#f5f4f0`, antracit `#20251f`, červený akcent `#c5362b`, písmo Manrope a obrysové ikony Lucide. Sdílené proměnné, rozestupy, komponenty a responzivní pravidla jsou ve `styles.css`; formuláře v `components/Inquiry.css`. Tailwind se sestavuje lokálně přes PostCSS, bez runtime CDN. Animace respektují omezení pohybu, video lze pozastavit.

Hlavní cesta vede od nabídky koupelen přes služby, doložené realizace a postup spolupráce k poptávce. FAQ řeší nejistotu ohledně přípravy, rozpočtu a rozsahu. Poptávka má čtyři kroky a kontrolní souhrn s možností úpravy. Neznámý styl, rozměry nebo rozpočet neblokují pokračování.

### Podklady a pracovní persony

Výchozí audit využil stávající web, dodané video a veřejné stránky [FLACH](https://www.flach.cz/). Následující persony a potřeby jsou pracovní hypotézy pro návrh, nikoli závěry zákaznických rozhovorů nebo analytiky:

| Návštěvník | Potřeba / user story | Cesta |
| --- | --- | --- |
| Majitel bytu nebo domu před rekonstrukcí | Chci vidět skutečné koupelny a pochopit postup, abych mohl poptat vhodné řešení. | Realizace → postup → poptávka |
| Domácnost plánující novostavbu | Chci zjistit rozsah služeb a poradit se i bez přesné představy či rozpočtu. | Služby → detail → konzultace |
| Zákazník hledající instalatérské práce | Chci rychle najít telefon, pracovní dobu a dostupné služby. | Instalace → kontakt / telefon |

Hero video a ilustrační fotografie jsou označené jako vizuální inspirace. Skutečné reference mají rok a odkaz na původní galerii. Nedoložené počty zakázek, fiktivní členové týmu a nepodložené nabídky byly odstraněny. Nové fotografie realizací lze doplnit po dodání od FLACH.

### Provedené ověření

V prohlížeči byly ověřeny mobilní a tabletové varianty i desktop: rozložení bez vodorovného přetékání, přehrání videa, otevření FAQ, obnovení podstránky z URL a navigace na sekce včetně opakovaného kliknutí a přesunu fokusu. Poptávka prošla od zadání rozměrů a výběru vybavení přes odmítnutí neplatného kontaktu až po správný e-mailový souhrn. Úprava zachovala údaje, Escape zavřel dialog a vrátil fokus spouštěči. Testovací e-mail nebyl odeslán.

Jde o technickou a heuristickou kontrolu. Uživatelské testování se skutečnými zákazníky zatím neproběhlo. Pro následné ověření jsou připravené úkoly: najít relevantní realizaci, poptat koupelnu bez známého rozpočtu a najít kontakt pro instalace. U účastníků sledovat dokončení úkolu, místa váhání a pochopení toho, že odeslání dokončují v poštovní aplikaci.
