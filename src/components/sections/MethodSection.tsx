import { GlassCard } from "@/components/GlassCard";
import { Brain, Compass, Flame, Rocket, Eye } from "lucide-react";

const fivePs = [
  {
    number: "01",
    icon: Brain,
    title: "PENSAMENTO",
    subtitle: "O Comando Central",
    description: "Identifique e reprogram os scripts mentais que rodam no piloto automático.",
    color: "text-accent",
  },
  {
    number: "02",
    icon: Compass,
    title: "SENTIMENTO",
    subtitle: "O Navegador Interno",
    description: "Aprenda a interpretar e direcionar seus sentimentos como bússola de decisões.",
    color: "text-tech-glow",
  },
  {
    number: "03",
    icon: Flame,
    title: "EMOÇÃO",
    subtitle: "O Combustível",
    description: "Transforme energia emocional em força motriz ao invés de bloqueios paralisantes.",
    color: "text-accent",
  },
  {
    number: "04",
    icon: Rocket,
    title: "AÇÃO",
    subtitle: "A Execução Estratégica",
    description: "Implemente sistemas que fazem você agir mesmo quando não 'sente vontade'.",
    color: "text-tech-glow",
  },
  {
    number: "05",
    icon: Eye,
    title: "RESULTADO",
    subtitle: "O Espelho da Realidade",
    description: "Meça, ajuste e multiplique os resultados através de feedback consciente.",
    color: "text-accent",
  },
];

export const MethodSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase">
                A Solução Científica
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-6">
              O Método <span className="text-gradient-accent">5Ps</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
              Não é teoria. Não é motivação. É um <span className="text-accent font-semibold">protocolo sistemático</span> de 
              reprogramação neural baseado em neurociência aplicada.
            </p>
          </div>

          {/* 5Ps Cards */}
          <div className="space-y-4 md:space-y-6">
            {fivePs.map((p, index) => (
              <GlassCard
                key={index}
                className="animate-fade-in hover:border-accent/50 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Large Number Background */}
                <div className="absolute top-0 right-0 text-6xl md:text-9xl font-black opacity-5 select-none">
                  {p.number}
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 relative z-10">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent/20 to-tech-glow/20 flex items-center justify-center glow-accent">
                      <p.icon className={`w-8 h-8 md:w-10 md:h-10 ${p.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="text-accent text-xs font-bold tracking-wider uppercase">
                        {p.number}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-1">
                      {p.title}
                    </h3>
                    <p className="text-accent font-semibold text-base md:text-lg mb-3">
                      {p.subtitle}
                    </p>
                    <p className="text-sm md:text-base text-foreground-secondary leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 md:mt-16 text-center">
            <GlassCard className="max-w-3xl mx-auto border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
              <p className="text-lg md:text-xl lg:text-2xl font-bold">
                Cada <span className="text-accent">P</span> é uma camada de transformação.
              </p>
              <p className="text-base md:text-lg text-foreground-secondary mt-4">
                Juntos, eles formam o sistema completo de reprogramação mental que você precisa.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
