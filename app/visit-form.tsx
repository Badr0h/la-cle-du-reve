"use client";

import { FormEvent, useState } from "react";
import { biens, whatsappLink } from "@/lib/biens";

export function VisitForm() {
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nom = String(data.get("nom") ?? "").trim();
    const telephone = String(data.get("telephone") ?? "").trim();
    const bien = String(data.get("bien") ?? "").trim();

    if (!nom || !telephone) {
      setError("Indiquez votre nom et votre téléphone.");
      return;
    }

    setError("");
    const message = [
      "Bonjour, je souhaite demander une visite.",
      "",
      `Nom : ${nom}`,
      `Téléphone : ${telephone}`,
      `Bien : ${bien}`,
    ].join("\n");

    window.location.assign(whatsappLink(message));
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid min-w-0 gap-2 text-lg">
          Nom
          <input
            name="nom"
            type="text"
            autoComplete="name"
            className="h-14 w-full border border-encre bg-papier px-4 text-lg"
          />
        </label>
        <label className="grid min-w-0 gap-2 text-lg">
          Téléphone
          <input
            name="telephone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className="h-14 w-full border border-encre bg-papier px-4 text-lg"
          />
        </label>
      </div>
      <label className="grid min-w-0 gap-2 text-lg">
        Bien concerné
        <select
          name="bien"
          defaultValue={biens[0]?.titre}
          className="h-14 w-full min-w-0 border border-encre bg-papier px-4 text-lg"
        >
          {biens.map((bien) => (
            <option key={bien.id} value={bien.titre}>
              {bien.quartier}
            </option>
          ))}
          <option value="Un autre bien">Un autre bien</option>
        </select>
      </label>
      {error ? (
        <p role="alert" className="text-lg text-toit">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="mt-2 h-14 bg-bande px-6 text-lg font-semibold text-white sm:w-fit sm:px-8"
      >
        Envoyer sur WhatsApp
      </button>
    </form>
  );
}
