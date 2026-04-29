import { Hotel, Landmark, Smartphone, ShoppingCart } from "lucide-react";

const sectors = [
  {
    icon: Hotel,
    title: "Hôtellerie & Restauration",
    desc: "Captez l'avis du client avant qu'il ne parte — et avant qu'il ne publie. Transformez chaque séjour en apprentissage.",
  },
  {
    icon: Landmark,
    title: "Banque & Assurance",
    desc: "Objectivez la qualité d'accueil en agence. Identifiez les frictions dans le parcours client digital et physique.",
  },
  {
    icon: Smartphone,
    title: "Télécoms & Services",
    desc: "Suivez la satisfaction en temps réel sur vos centres d'appel, boutiques et canaux digitaux. Détectez le churn avant qu'il n'arrive.",
  },
  {
    icon: ShoppingCart,
    title: "Commerce & Distribution",
    desc: "Évaluez l'expérience en point de vente, comparez vos sites entre eux, et donnez aux managers terrain les clés pour agir.",
  },
];

export function Sectors() {
  return (
    <section id="secteurs" className="px-6 py-24 lg:px-16 lg:py-32" style={{ background: "#FFFFFF" }}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-orange">№ 04 · Pour qui ?</p>
          <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">
            Pensé pour les entreprises qui vivent au <span className="italic text-orange">contact du client.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {sectors.map((s) => (
            <div key={s.title} className="card-base group rounded-2xl p-7 hover:bg-orange-glow">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-glow text-orange transition group-hover:bg-orange group-hover:text-white">
                <s.icon className="h-6 w-6" strokeWidth="2" />
              </div>
              <h4 className="font-display text-base font-bold text-text">{s.title}</h4>
              <p className="mt-2 text-[13px] leading-relaxed text-text-dim">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
