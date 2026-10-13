import { VisitForm } from "./visit-form";
import { biens, whatsappLink, type Bien } from "@/lib/biens";

const MAPS =
  "https://www.google.com/maps/place/La+Clé+Du+Rêve/@33.9702057,-6.8902832,17z";

const visiteGenerale = whatsappLink(
  "Bonjour, je souhaite demander une visite.",
);

function messageVisite(bien: Bien) {
  return whatsappLink(
    `Bonjour, je souhaite visiter : ${bien.titre} (${bien.quartier}).`,
  );
}

const boutonVisite =
  "flex h-14 items-center justify-center bg-bande px-6 text-lg font-semibold text-white hover:bg-[#083866]";

export default function Page() {
  const [une, ...reste] = biens;

  return (
    <>
      <header className="bg-papier">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-4">
            <h1 className="shrink-0">
              <img
                src="/logo.png"
                alt="La clé du Rêve"
                width={220}
                height={220}
                className="h-auto w-20 sm:w-24"
              />
            </h1>
            <p className="text-lg leading-snug">
              Agence immobilière
              <br />
              à Rabat
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a href="tel:+212658257815" className="text-xl font-semibold">
              +212 658-257815
            </a>
            <a href={visiteGenerale} className={`${boutonVisite} sm:px-7`}>
              Demander une visite
            </a>
          </div>
        </div>
      </header>
      <div className="h-1.5 bg-toit" />
      <div className="h-2 bg-bande" />

      <main>
        <section className="bg-brume">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:items-stretch lg:gap-12 lg:py-20">
            <div className="flex flex-col justify-center lg:col-span-7">
              <h2 className="max-w-[14ch] font-display text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
                Vente, location, gestion locative et estimation gratuite.
              </h2>
              <p className="mt-6 max-w-[38ch] text-xl leading-relaxed">
                Agence à Massira. Accompagnement pour acheter, vendre ou louer
                sur le marché de Rabat.
              </p>
            </div>
            <aside className="flex flex-col gap-5 bg-bande p-6 text-lg leading-relaxed text-white sm:p-8 lg:col-span-5">
              <p>Rue Al Falah, n° 1520, Amal 5, Massira, CYM, Rabat 10120</p>
              <div>
                <p>Lundi au vendredi, 9h00–18h00</p>
                <p>Samedi, 9h00–15h00</p>
                <p>Dimanche, fermé</p>
              </div>
              <a
                href={MAPS}
                className="w-fit font-semibold text-soleil underline"
              >
                39 avis, 4,3/5 sur Google
              </a>
              <a
                href={visiteGenerale}
                className="mt-auto flex h-14 items-center justify-center bg-soleil px-6 text-lg font-semibold text-encre hover:bg-[#f0cf00]"
              >
                Demander une visite
              </a>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20" id="biens">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Biens à visiter
          </h2>
          {une ? (
            <article className="mt-8 grid bg-papier shadow-[8px_8px_0_#0b4f88] lg:grid-cols-[22rem_minmax(0,1fr)]">
              <div className="border-t-4 border-toit bg-soleil p-6 sm:p-8">
                <p className="text-lg">{une.statut}</p>
                <p className="mt-2 font-display text-4xl leading-none font-semibold whitespace-nowrap sm:text-5xl">
                  {une.prix}
                </p>
                <p className="mt-3 text-lg">{une.details}</p>
              </div>
              <div className="flex flex-col gap-4 border border-filet p-6 sm:p-8">
                <h3 className="font-display text-2xl leading-snug font-semibold sm:text-3xl">
                  {une.titre}
                </h3>
                <p className="text-lg">{une.quartier}</p>
                <a
                  href={messageVisite(une)}
                  className={`${boutonVisite} mt-auto sm:w-fit sm:px-8`}
                >
                  Demander une visite
                </a>
              </div>
            </article>
          ) : null}
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {reste.map((bien, index) => {
              const dernier = index === reste.length - 1;
              return (
                <li
                  key={bien.id}
                  className={dernier ? "sm:col-span-2" : undefined}
                >
                  <article
                    className={
                      dernier
                        ? "grid border-x border-b border-filet border-t-4 border-t-toit bg-papier transition-colors hover:border-x-bande hover:border-b-bande sm:grid-cols-[17rem_minmax(0,1fr)_auto] sm:items-center"
                        : "flex h-full flex-col border border-filet bg-papier transition-colors hover:border-bande"
                    }
                  >
                    <div className={dernier ? "px-5 pt-5 sm:py-6" : "border-t-4 border-toit px-5 pt-5"}>
                      <p>{bien.statut}</p>
                      <p className="mt-1 font-display text-3xl font-semibold whitespace-nowrap">
                        {bien.prix}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 px-5 pt-4 pb-5 sm:py-6">
                      <h3 className="font-display text-xl leading-snug font-semibold sm:text-2xl">
                        {bien.titre}
                      </h3>
                      <p className="text-lg">{bien.quartier}</p>
                      <p>{bien.details}</p>
                      {dernier ? null : (
                        <a
                          href={messageVisite(bien)}
                          className={`${boutonVisite} mt-4`}
                        >
                          Demander une visite
                        </a>
                      )}
                    </div>
                    {dernier ? (
                      <a
                        href={messageVisite(bien)}
                        className={`${boutonVisite} mx-5 mb-5 sm:mx-0 sm:mr-5 sm:mb-0 sm:w-fit sm:px-8`}
                      >
                        Demander une visite
                      </a>
                    ) : null}
                  </article>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="bg-brume" id="visite">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-16 lg:py-20">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Demander une visite
              </h2>
              <p className="mt-4 max-w-[34ch] text-xl leading-relaxed">
                Indiquez votre nom, votre téléphone et le bien. Le message
                s’ouvre dans WhatsApp.
              </p>
              <a
                href="tel:+212658257815"
                className="mt-8 inline-block text-2xl font-semibold text-bande"
              >
                +212 658-257815
              </a>
            </div>
            <VisitForm />
          </div>
        </section>
      </main>

      <footer className="bg-bande text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 text-lg sm:px-8 md:grid-cols-3">
          <p>Rue Al Falah, n° 1520, Amal 5, Massira, CYM, Rabat 10120, Maroc</p>
          <div className="grid gap-2">
            <a href="tel:+212658257815">+212 658-257815</a>
            <a href="tel:0537790422">05 37 79 04 22</a>
            <a href="mailto:contact@lacledureve.ma">contact@lacledureve.ma</a>
          </div>
          <div className="grid content-start gap-2">
            <p>Lundi au vendredi, 9h00–18h00</p>
            <p>Samedi, 9h00–15h00</p>
            <p>Dimanche, fermé</p>
            <a href={MAPS} className="mt-2 font-semibold text-soleil underline">
              Voir l’agence sur Google Maps
            </a>
          </div>
        </div>
        <p className="mx-auto max-w-6xl px-5 pb-10 text-base text-white/75 sm:px-8">
          Maquette préparée par{" "}
          <a
            href="https://badreddine-oussaih.vercel.app"
            className="underline"
          >
            Badreddine Oussaih
          </a>
        </p>
      </footer>
    </>
  );
}
