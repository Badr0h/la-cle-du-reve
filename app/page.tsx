import { VisitForm } from "./visit-form";
import { biens, whatsappLink } from "@/lib/biens";

const MAPS =
  "https://www.google.com/maps/place/La+Clé+Du+Rêve/@33.9702057,-6.8902832,17z";

const visiteGenerale = whatsappLink(
  "Bonjour, je souhaite demander une visite.",
);

export default function Page() {
  return (
    <>
      <header className="bg-soleil">
        <div className="mx-auto grid max-w-xl gap-6 px-5 py-8">
          <h1>
            {/* Logo de la fiche publique de l’agence. Le fichier
                lacledureve.ma/assets/images/logos/logo.png n’est pas dans
                l’archive Wayback. */}
            <img
              src="/logo.png"
              alt="La clé du Rêve"
              width={220}
              height={220}
              className="h-auto w-44"
            />
          </h1>
          <p className="text-xl">Agence immobilière à Rabat</p>
          <a href="tel:+212658257815" className="text-2xl font-semibold">
            +212 658-257815
          </a>
          <a
            href={visiteGenerale}
            className="flex h-14 items-center justify-center bg-bande px-6 text-lg font-semibold text-white"
          >
            Demander une visite
          </a>
        </div>
      </header>
      <div className="h-2 bg-toit" />
      <div className="h-2.5 bg-bande" />

      <main>
        <section className="mx-auto grid max-w-xl gap-8 px-5 py-12">
          <p className="max-w-[22ch] text-4xl leading-tight font-semibold">
            Vente, location, gestion locative et estimation gratuite.
          </p>
          <p className="max-w-[36ch] text-xl leading-relaxed">
            Agence à Massira. Accompagnement pour acheter, vendre ou louer sur
            le marché de Rabat.
          </p>
          <div className="grid gap-2 text-lg leading-relaxed">
            <p>Rue Al Falah, n° 1520, Amal 5, Massira, CYM, Rabat 10120</p>
            <p>Lundi au vendredi, 9h00–18h00</p>
            <p>Samedi, 9h00–15h00</p>
            <p>Dimanche, fermé</p>
          </div>
          <a href={MAPS} className="text-xl font-semibold text-bande underline">
            39 avis, 4,3/5 sur Google
          </a>
        </section>

        <section className="mx-auto grid max-w-xl gap-12 px-5 py-6" id="biens">
          <h2 className="text-3xl font-semibold">Biens</h2>
          <div className="grid gap-14">
            {biens.map((bien) => (
              <article key={bien.id} className="grid gap-4">
                <div className="grid min-h-64 content-between bg-soleil p-5">
                  <p className="text-lg">{bien.statut}</p>
                  <div>
                    <p className="text-4xl leading-none font-semibold">
                      {bien.prix}
                    </p>
                    <p className="mt-4 text-xl">{bien.quartier}</p>
                  </div>
                </div>
                <h3 className="text-2xl leading-snug font-semibold">
                  {bien.titre}
                </h3>
                <p className="text-lg">{bien.details}</p>
                <a
                  href={whatsappLink(
                    `Bonjour, je souhaite visiter : ${bien.titre} (${bien.quartier}).`,
                  )}
                  className="flex h-14 items-center justify-center bg-bande px-6 text-lg font-semibold text-white"
                >
                  Demander une visite
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-xl gap-6 px-5 py-16" id="visite">
          <h2 className="text-3xl font-semibold">Demander une visite</h2>
          <p className="text-xl leading-relaxed">
            Laissez votre nom, votre téléphone et le bien. Le message part sur
            WhatsApp.
          </p>
          <VisitForm />
        </section>
      </main>

      <footer className="border-t border-filet">
        <div className="mx-auto grid max-w-xl gap-3 px-5 py-12 text-lg">
          <p className="script text-4xl text-toit">La clé du Rêve</p>
          <p>Rue Al Falah, n° 1520, Amal 5, Massira, CYM, Rabat 10120, Maroc</p>
          <a href="tel:+212658257815">+212 658-257815</a>
          <a href="tel:0537790422">05 37 79 04 22</a>
          <a href="mailto:contact@lacledureve.ma">contact@lacledureve.ma</a>
          <p>Lundi au vendredi, 9h00–18h00</p>
          <p>Samedi, 9h00–15h00</p>
          <p>Dimanche, fermé</p>
          <a href={MAPS} className="font-semibold text-bande underline">
            Voir l’agence sur Google Maps
          </a>
          <p className="pt-8 text-base text-encre/70">
            Maquette préparée par{" "}
            <a
              href="https://badreddine-oussaih.vercel.app"
              className="underline"
            >
              Badreddine Oussaih
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
