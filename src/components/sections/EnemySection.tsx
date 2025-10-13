import { GlassCard } from "@/components/GlassCard";
import { Bug, Lock, AlertTriangle, Ban } from "lucide-react";

const mentalBugs = [
  {
    icon: Lock,
    title: "Teto Financeiro Invisível",
    description: "Você ganha até certo ponto, depois autossabota ou 'perde' o dinheiro.",
  },
  {
    icon: AlertTriangle,
    title: "Síndrome do Impostor",
    description: "Quanto mais você cresce, mais sente que não merece estar ali.",
  },
  {
    icon: Ban,
    title: "Paralisia por Perfeição",
    description: "Projeta mil ideias mas nunca executa porque 'não está pronto'.",
  },
  {
    icon: Bug,
    title: "Vício em Procrastinação",
    description: "Sabe o que fazer, mas uma força invisível te impede de agir.",
  },
];

export const EnemySection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              O Inimigo: <span className="text-gradient-accent">A Matrix Mental</span>
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Enquanto você luta conscientemente para mudar, seu subconsciente executa programas antigos:
            </p>
          </div>

          {/* Mental Bugs Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {mentalBugs.map((bug, index) => (
              <GlassCard 
                key={index} 
                className="animate-fade-in hover:border-destructive/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
                      <bug.icon className="w-6 h-6 text-destructive" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{bug.title}</h3>
                    <p className="text-foreground-secondary">{bug.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-16 text-center">
            <GlassCard className="max-w-3xl mx-auto border-l-4 border-destructive">
              <p className="text-xl font-semibold">
                Esses <span className="text-destructive">bugs mentais</span> não são sua culpa.
                <br />
                Mas continuar ignorando eles? <span className="text-accent">Isso é.</span>
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
