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
