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

export default function Page() {
  return (
    <>
      <header className="bg-soleil">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-4">
            <h1 className="shrink-0">
              <img
                src="/logo.png"
                alt="La clé du Rêve"
                width={220}
                height={220}
                className="h-auto w-24 sm:w-32"
              />
            </h1>
            <p className="text-lg leading-snug sm:text-xl">
              Agence immobilière
              <br />
              à Rabat
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="tel:+212658257815"
              className="text-xl font-semibold sm:text-2xl"
            >
              +212 658-257815
            </a>
            <a
              href={visiteGenerale}
              className="flex h-14 items-center justify-center bg-bande px-6 text-lg font-semibold text-white sm:px-8"
            >
              Demander une visite
            </a>
          </div>
        </div>
      </header>
      <div className="h-2 bg-toit" />
      <div className="h-2.5 bg-bande" />

      <main>
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-24">
          <h2 className="max-w-[16ch] text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
            Vente, location, gestion locative et estimation gratuite.
          </h2>
          <p className="mt-6 max-w-[38ch] text-xl leading-relaxed">
            Agence à Massira. Accompagnement pour acheter, vendre ou louer sur
            le marché de Rabat.
          </p>
          <div className="mt-12 flex flex-col gap-6 text-lg leading-relaxed lg:mt-16 lg:flex-row lg:items-start lg:gap-20">
            <p className="max-w-[28ch]">
              Rue Al Falah, n° 1520, Amal 5, Massira, CYM, Rabat 10120
            </p>
            <div>
              <p>Lundi au vendredi, 9h00–18h00</p>
              <p>Samedi, 9h00–15h00</p>
              <p>Dimanche, fermé</p>
            </div>
            <a
              href={MAPS}
              className="w-fit font-semibold text-bande underline lg:ml-auto"
            >
              39 avis, 4,3/5 sur Google
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8" id="biens">
          <ul className="border-t-4 border-toit">
            {biens.map((bien, index) => {
              const principal = index === 0;
              return (
                <li key={bien.id}>
                  <article
                    className={
                      principal
                        ? "grid gap-5 py-10 lg:grid-cols-[18rem_minmax(0,1fr)_auto] lg:items-center lg:gap-x-12 lg:py-12"
                        : "grid gap-4 border-t border-filet py-8 lg:grid-cols-[18rem_minmax(0,1fr)_auto] lg:items-center lg:gap-x-12 lg:py-9"
                    }
                  >
                    <div>
                      <p className="text-lg">{bien.statut}</p>
                      <p
                        className={
                          principal
                            ? "mt-2 text-4xl font-semibold whitespace-nowrap sm:text-5xl"
                            : "mt-1 text-3xl font-semibold whitespace-nowrap"
                        }
                      >
                        {bien.prix}
                      </p>
                    </div>
                    <div>
                      <h3
                        className={
                          principal
                            ? "text-2xl leading-snug font-semibold sm:text-3xl"
                            : "text-xl leading-snug font-semibold sm:text-2xl"
                        }
                      >
                        {bien.titre}
                      </h3>
                      <p className="mt-2 text-lg">{bien.quartier}</p>
                      <p className="text-lg">{bien.details}</p>
                    </div>
                    <a
                      href={messageVisite(bien)}
                      className="flex h-14 items-center justify-center bg-bande px-6 text-lg font-semibold whitespace-nowrap text-white lg:w-fit lg:px-8"
                    >
                      Demander une visite
                    </a>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-20 lg:py-28"
          id="visite"
        >
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Demander une visite
            </h2>
            <p className="mt-4 max-w-[34ch] text-xl leading-relaxed">
              Laissez votre nom, votre téléphone et le bien. Le message part
              sur WhatsApp.
            </p>
          </div>
          <VisitForm />
        </section>
      </main>

      <footer className="border-t border-filet">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 text-lg sm:px-8 md:grid-cols-3">
          <p>
            Rue Al Falah, n° 1520, Amal 5, Massira, CYM, Rabat 10120, Maroc
          </p>
          <div className="grid gap-2">
            <a href="tel:+212658257815">+212 658-257815</a>
            <a href="tel:0537790422">05 37 79 04 22</a>
            <a href="mailto:contact@lacledureve.ma">contact@lacledureve.ma</a>
          </div>
          <div className="grid content-start gap-2">
            <p>Lundi au vendredi, 9h00–18h00</p>
            <p>Samedi, 9h00–15h00</p>
            <p>Dimanche, fermé</p>
            <a href={MAPS} className="mt-2 font-semibold text-bande underline">
              Voir l’agence sur Google Maps
            </a>
          </div>
        </div>
        <p className="mx-auto max-w-7xl px-5 pb-10 text-base text-encre/70 sm:px-8">
          Maquette préparée par{" "}
          <a href="https://badreddine-oussaih.vercel.app" className="underline">
            Badreddine Oussaih
          </a>
        </p>
      </footer>
    </>
  );
}
