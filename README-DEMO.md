# RoExpert Acoperișuri (replică după expert-acoperisuri.ro)

Astro 7 + Tailwind 4, cinci pagini (Acasă, Servicii, Portofoliu, Testimoniale, Contact), output static (merge pe Hostinger shared).

    npm run dev      # http://localhost:4321
    npm run build    # dist/

## Conținut
- Tot conținutul stă în `src/data/site.ts`: date de contact, servicii, galerie, testimoniale, clipuri.
- Pozele, perechile înainte/după, clipurile și textele sunt preluate de pe expert-acoperisuri.ro, pe baza confirmării că e aceeași firmă.
- Logo: `public/images/logo.webp`, decupat din PNG-ul primit (fundal negru scos). De cerut varianta vectorială.
- Rețelele sociale au fost scoase la cererea clientului.

## Ce e mock (`TODO(real)`)
- Formularul deschide WhatsApp cu mesajul precompletat. La proiectul real: trimitere și pe e-mail (Resend).

## Ce lipsește față de original
- Bannerul de cookie și linkurile legale din footer (Confidențialitate, Cookies, Termeni, ANPC/SOL). Intră la proiectul real, cu credit RTR.

## De curățat
- Fișiere placeholder rămase nefolosite: `public/images/hero.webp` și, în `public/images/galerie`, cele care nu apar în `site.ts`
  (ex. `tigla-metalica-01.webp`, `tabla-cutata-01.webp`, `fatada-01.webp`, `interior-01.webp`).

## La proiectul real
- SEO: research de keyworduri pe oraș, `LocalBusiness` JSON-LD, sitemap, pagini separate pe serviciu și pe localitate.
- Imagini în AVIF + `srcset`, clipuri video comprimate (webm + mp4).
