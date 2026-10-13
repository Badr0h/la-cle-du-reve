export type Bien = {
  id: string;
  statut: "Vente" | "Location";
  reference: string;
  titre: string;
  quartier: string;
  prix: string;
  details: string;
};

// Faits lus sur l’accueil archivé le 5 août 2025.
// https://web.archive.org/web/20250805073946/https://www.lacledureve.ma/
// Les fichiers photo de lacledureve.ma ne sont pas dans l’archive et le site
// live répond 404 OVH « Site not installed » (13 octobre 2026).

export const biens: Bien[] = [
  {
    // Source : accueil archivé, carte « Location / Ref42a ».
    // Aussi sur https://web.archive.org/web/20251216063515/https://www.lacledureve.ma/louer
    id: "ref42a",
    statut: "Location",
    reference: "Ref42a",
    titre: "Nouveau immeuble usage bureau à Hay al Fath",
    quartier: "Hay al Fath, Yacoub El Mansour",
    prix: "100 000 MAD",
    details: "150 m²",
  },
  {
    // Source : accueil archivé, carte « Vente / Ref39a ».
    id: "ref39a",
    statut: "Vente",
    reference: "Ref39a",
    titre: "Joli villa 1100m de Luxe à Souissi",
    quartier: "Souissi, Rabat",
    prix: "15 000 000 MAD",
    details: "1100 m², 3 chambres",
  },
  {
    // Source : accueil archivé, carte « Vente / Ref36a ».
    id: "ref36a",
    statut: "Vente",
    reference: "Ref36a",
    titre: "Villa 512m à Sidi Abed Témara Vue mer imprenable",
    quartier: "Harhoura, Témara",
    prix: "7 000 000 MAD",
    details: "512 m², 4 chambres",
  },
  {
    // Source : accueil archivé, carte « Vente / Ref32a ».
    id: "ref32a",
    statut: "Vente",
    reference: "Ref32a",
    titre: "À Vendre – Villa Meublée de Luxe à El Menzeh Zaer",
    quartier: "El Menzeh",
    prix: "9 500 000 MAD",
    details: "1030 m², 3 chambres",
  },
  {
    // Source : accueil archivé, carte « Vente / Ref11a ».
    id: "ref11a",
    statut: "Vente",
    reference: "Ref11a",
    titre: "Villa Titrée avec Jardin – Quartier Rmâl, Salé",
    quartier: "Bab Lamrissa, Salé",
    prix: "2 500 000 MAD",
    details: "340 m², 6 chambres",
  },
  {
    // Source : accueil archivé, carte « Vente / LCDR10R ».
    id: "lcdr10r",
    statut: "Vente",
    reference: "LCDR10R",
    titre: "Jolie villa moderne à Val d’Or, Harhoura – 200 m²",
    quartier: "Val d’Or, Harhoura",
    prix: "4 900 000 MAD",
    details: "200 m², 6 chambres",
  },
];

export const WHATSAPP = "https://wa.me/212658257815";

export function whatsappLink(message: string) {
  return `${WHATSAPP}?text=${encodeURIComponent(message)}`;
}
