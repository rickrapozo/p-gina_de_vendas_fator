import { CTAButton } from "@/components/CTAButton";
import { GlassCard } from "@/components/GlassCard";
import { Check, Sparkles } from "lucide-react";

interface PricingSectionProps {
  availableSpots?: number;
}

const benefits = [
  "Acesso completo ao app Fator Essencial",
  "Mentor AI 24/7 ilimitado",
  "Todos os protocolos de reprogramação",
  "Atualizações e novos conteúdos vitalícios",
  "Comunidade exclusiva de membros fundadores",
  "Suporte prioritário",
];

export const PricingSection = ({ availableSpots = 42 }: PricingSectionProps) => {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-background-alt relative overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              A Oferta de <span className="text-gradient-accent">Membro Fundador</span>
            </h2>
            <p className="text-xl text-foreground-secondary">
              Acesso vitalício por menos que um café por dia
            </p>
          </div>

          {/* Pricing Card */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <GlassCard className="border-4 border-accent/50 relative overflow-hidden shadow-2xl">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent via-tech-glow to-accent opacity-20 blur-xl animate-gradient-shift" />

              <div className="relative z-10 p-8 md:p-12">
                {/* Founder Badge */}
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-6 py-2 rounded-full font-bold">
                    <Sparkles className="w-4 h-4" />
                    ACESSO FUNDADOR
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="text-6xl md:text-7xl font-black text-gradient-accent mb-4">
                    R$ 9,97<span className="text-2xl">/mês</span>
                  </div>
                  <p className="text-lg text-foreground-secondary">
                    Menos de <span className="text-accent font-semibold">R$ 0,33 por dia</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    (Preço promocional - Apenas 100 vagas)
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground-secondary leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center space-y-4">
                  <CTAButton size="xl" className="w-full" onClick={scrollToBottom}>
                    QUERO MINHA VAGA DE FUNDADOR
                  </CTAButton>
                  <p className="text-sm text-muted-foreground">
                    🔒 Pagamento seguro • Cancele quando quiser
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Scarcity */}
          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <GlassCard className="inline-block border-destructive/30">
              <p className="text-lg font-semibold">
                ⚠️ Restam apenas <span className="text-accent text-2xl font-bold">{availableSpots}</span> vagas de 100
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Após esgotadas, o preço sobe para R$ 47,90/mês
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
