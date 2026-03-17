import { siteCopy } from "@/lib/site-data";

export const metadata = {
  title: "Privacy Policy — Timoty Drinks & Kitchen",
  description: "Informativa sulla privacy e trattamento dei dati. Timoty Drinks & Kitchen.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container page-section narrow" style={{ maxWidth: "720px" }}>
      <p className="eyebrow">Privacy</p>
      <h1 className="section-title">Informativa sulla privacy</h1>

      <div style={{ marginTop: "1.5rem" }}>
        <p className="section-copy">
          {siteCopy.brand.name} rispetta la tua privacy. I dati raccolti tramite il modulo di
          prenotazione o di contatto (nome, email, telefono, data e orario di prenotazione,
          eventuali richieste particolari) sono utilizzati esclusivamente per gestire le tue
          richieste e contattarti in relazione al servizio richiesto.
        </p>
        <p className="section-copy" style={{ marginTop: "1rem" }}>
          I dati non sono ceduti a terzi per finalità di marketing. In base al Regolamento UE
          2016/679 (GDPR) puoi esercitare i diritti di accesso, rettifica, cancellazione e
          limitazione del trattamento rivolgendoti a {siteCopy.contact.email} o al titolare del
          trattamento.
        </p>
        <p className="section-copy" style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--muted)" }}>
          Ultimo aggiornamento: marzo 2025.
        </p>
      </div>
    </div>
  );
}
