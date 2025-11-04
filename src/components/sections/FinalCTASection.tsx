import { CTAButton } from "@/components/CTAButton";
import { GlassCard } from "@/components/GlassCard";
import { MatrixRain } from "@/components/MatrixRain";
import { X, Sparkles } from "lucide-react";

interface FinalCTASectionProps {
  availableSpots?: number;
}

export const FinalCTASection = ({ availableSpots = 52 }: FinalCTASectionProps) => {
  return (
    <section className="py-12 md:py-20 bg-background-alt relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 px-2">
              Você Está em Uma <span className="text-gradient-accent">Encruzilhada</span>
            </h2>
          </div>

          {/* Two Paths */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 px-2">
            {/* Path 1 - Stay in Matrix */}
            <GlassCard className="animate-fade-in border-destructive/30 opacity-60 relative overflow-hidden" style={{ animationDelay: '0.1s' }}>
              {/* Matrix Rain Background */}
              <MatrixRain className="absolute inset-0 z-0 pointer-events-none" opacity={0.35} fontSize={16} />

              {/* Foreground Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
                    <X className="w-5 md:w-6 h-5 md:h-6 text-destructive" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Caminho da Matrix</h3>
                </div>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-foreground-secondary">
                  <li><span className="text-red-500">✗</span> Continuar na mesma roda de hamster</li>
                  <li><span className="text-red-500">✗</span> Esperar que "um dia" as coisas melhorem</li>
                  <li><span className="text-red-500">✗</span> Culpar circunstâncias externas</li>
                  <li><span className="text-red-500">✗</span> Viver com aquele "E se..." pra sempre</li>
                </ul>
              </div>
            </GlassCard>

            {/* Path 2 - Break Free */}
            <GlassCard className="animate-fade-in border-2 border-accent/50 bg-gradient-to-br from-accent/5 to-transparent" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center glow-accent">
                  <Sparkles className="w-5 md:w-6 h-5 md:h-6 text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Caminho do Arquiteto</h3>
              </div>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-foreground">
                <li><span className="text-green-500">✓</span> Reprogramar seu sistema operacional mental</li>
                <li><span className="text-green-500">✓</span> Tomar controle do seu subconsciente</li>
                <li><span className="text-green-500">✓</span> Construir prosperidade de dentro pra fora</li>
                <li><span className="text-green-500">✓</span> Finalmente realizar seu potencial real</li>
              </ul>
            </GlassCard>
          </div>

          {/* Scarcity Reminder */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in px-4" style={{ animationDelay: '0.3s' }}>
            <GlassCard className="inline-block border-accent/30">
              <p className="text-lg md:text-xl font-bold">
                <span className="text-accent text-2xl md:text-3xl">{availableSpots}</span> vagas restantes de 100
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-2">
                Depois disso, o preço triplica
              </p>
            </GlassCard>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-6 md:space-y-8 animate-fade-in flex flex-col items-center px-4" style={{ animationDelay: '0.4s' }}>
            <CTAButton size="xl" className="text-sm md:text-base">
              CRIAR MINHA CONTA AGORA
            </CTAButton>

            <p className="text-xs md:text-sm text-muted-foreground">
              Crie sua conta para escolher seu plano de acesso.
            </p>
          </div>

          {/* Personal Signature */}
          <div className="mt-12 md:mt-16 text-center px-4">
            <p className="text-lg md:text-xl italic text-foreground-secondary">
              "Eu te vejo do lado de fora."
            </p>
            <p className="text-base md:text-lg font-semibold text-accent mt-4">
              — Criador do Fator Essencial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
