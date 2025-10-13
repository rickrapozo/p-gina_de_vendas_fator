import { CTAButton } from "@/components/CTAButton";
import { GlassCard } from "@/components/GlassCard";
import { MatrixRain } from "@/components/MatrixRain";
import { X, Sparkles } from "lucide-react";

interface FinalCTASectionProps {
  availableSpots?: number;
}

export const FinalCTASection = ({ availableSpots = 42 }: FinalCTASectionProps) => {
  return (
    <section className="py-20 bg-background-alt relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Você Está em Uma <span className="text-gradient-accent">Encruzilhada</span>
            </h2>
          </div>

          {/* Two Paths */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Path 1 - Stay in Matrix */}
            <GlassCard className="animate-fade-in border-destructive/30 opacity-60 relative overflow-hidden" style={{ animationDelay: '0.1s' }}>
              {/* Matrix Rain Background */}
              <MatrixRain className="absolute inset-0 z-0 pointer-events-none" opacity={0.35} fontSize={16} />

              {/* Foreground Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
                    <X className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold">Caminho da Matrix</h3>
                </div>
                <ul className="space-y-3 text-foreground-secondary">
                  <li>✗ Continuar na mesma roda de hamster</li>
                  <li>✗ Esperar que "um dia" as coisas melhorem</li>
                  <li>✗ Culpar circunstâncias externas</li>
                  <li>✗ Viver com aquele "E se..." pra sempre</li>
                </ul>
              </div>
            </GlassCard>

            {/* Path 2 - Break Free */}
            <GlassCard className="animate-fade-in border-2 border-accent/50 bg-gradient-to-br from-accent/5 to-transparent" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center glow-accent">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Caminho do Arquiteto</h3>
              </div>
              <ul className="space-y-3 text-foreground">
                <li>✓ Reprogramar seu sistema operacional mental</li>
                <li>✓ Tomar controle do seu subconsciente</li>
                <li>✓ Construir prosperidade de dentro pra fora</li>
                <li>✓ Finalmente realizar seu potencial real</li>
              </ul>
            </GlassCard>
          </div>

          {/* Scarcity Reminder */}
          <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <GlassCard className="inline-block border-accent/30">
              <p className="text-xl font-bold">
                <span className="text-accent text-3xl">{availableSpots}</span> vagas restantes de 100
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Depois disso, o preço triplica
              </p>
            </GlassCard>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-8 animate-fade-in flex flex-col items-center" style={{ animationDelay: '0.4s' }}>
            <CTAButton size="xl">
              EU ESCOLHO ME JUNTAR. QUERO MINHA VAGA.
            </CTAButton>

            <p className="text-sm text-muted-foreground">
              💳 Parcelamento disponível • 🔒 Pagamento 100% seguro • ✓ Garantia de 15 dias
            </p>
          </div>

          {/* Personal Signature */}
          <div className="mt-16 text-center">
            <p className="text-xl italic text-foreground-secondary">
              "Eu te vejo do lado de fora."
            </p>
            <p className="text-lg font-semibold text-accent mt-4">
              — Criador do Fator Essencial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
