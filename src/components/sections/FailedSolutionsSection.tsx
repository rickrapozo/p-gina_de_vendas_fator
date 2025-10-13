import { GlassCard } from "@/components/GlassCard";
import { BookOpen, Zap, Dumbbell, X } from "lucide-react";

const failedSolutions = [
  {
    icon: BookOpen,
    title: "Livros de Autoajuda",
    description: "Você lê, se empolga, mas nada muda. Informação sem implementação = entretenimento.",
  },
  {
    icon: Zap,
    title: "Vídeos Motivacionais",
    description: "Dopamina instantânea, zero transformação duradoura. O efeito some em 48 horas.",
  },
  {
    icon: Dumbbell,
    title: "Força de Vontade",
    description: "Tentar 'se forçar' é lutar contra 95% do seu cérebro. Adivinha quem sempre ganha?",
  },
];

export const FailedSolutionsSection = () => {
  return (
    <section className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Por Que <span className="text-destructive">Nada Funcionou</span> Até Agora?
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Você já tentou de tudo. E nada resolveu. Não é coincidência.
            </p>
          </div>

          {/* Failed Solutions Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {failedSolutions.map((solution, index) => (
              <GlassCard 
                key={index}
                className="text-center animate-fade-in hover:border-destructive/30 relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* X Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                </div>

                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-muted/30 flex items-center justify-center opacity-50 group-hover:opacity-70 transition-opacity">
                    <solution.icon className="w-8 h-8" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  {solution.description}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* The Real Problem */}
          <div className="text-center">
            <GlassCard className="max-w-3xl mx-auto border-2 border-accent/30">
              <p className="text-xl md:text-2xl font-bold mb-4">
                O problema não é <span className="text-muted-foreground line-through">informação</span>.
              </p>
              <p className="text-2xl md:text-3xl font-extrabold text-gradient-accent">
                É PROGRAMAÇÃO SUBCONSCIENTE.
              </p>
              <p className="text-lg text-foreground-secondary mt-6">
                Você precisa atacar o sistema operacional, não instalar mais apps.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
