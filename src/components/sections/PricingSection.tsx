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

export const PricingSection = ({ availableSpots = 52 }: PricingSectionProps) => {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-12 md:py-20 bg-background-alt relative overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 px-2">
              A Oferta de <span className="text-gradient-accent">Membro Fundador</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground-secondary px-4">
              Acesso vitalício por menos que um café por dia
            </p>
          </div>

          {/* Pricing Card */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <GlassCard className="border-4 border-accent/50 relative overflow-hidden shadow-2xl">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent via-tech-glow to-accent opacity-20 blur-xl animate-gradient-shift" />

                <div className="relative z-10 p-6 md:p-8 lg:p-12">
                {/* Founder Badge */}
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 md:px-6 py-2 rounded-full font-bold text-sm md:text-base">
                    <Sparkles className="w-4 h-4" />
                    ACESSO FUNDADOR
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-6 md:mb-8">
                  <div className="text-4xl md:text-6xl lg:text-7xl font-black text-gradient-accent mb-2 md:mb-4">
                    R$ 9,97<span className="text-xl md:text-2xl">/mês</span>
                  </div>
                  <p className="text-base md:text-lg text-foreground-secondary px-2">
                    Menos de <span className="text-accent font-semibold">R$ 0,33 por dia</span>
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-2 px-2">
                    (Preço promocional - Apenas 100 vagas)
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 px-2">
                    Esse valor é cobrado à vista no plano anual.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 px-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 md:w-6 h-5 md:h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 md:w-4 h-3 md:h-4 text-accent" />
                      </div>
                      <span className="text-sm md:text-base text-foreground-secondary leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center space-y-3 md:space-y-4 px-2">
                  <CTAButton 
                    size="xl" 
                    className="w-full text-sm md:text-base"
                  >
                    CRIAR MINHA CONTA AGORA
                  </CTAButton>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Crie sua conta para escolher o plano ideal.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Scarcity */}
          <div className="mt-6 md:mt-8 text-center animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
            <GlassCard className="inline-block border-destructive/30">
              <p className="text-base md:text-lg font-semibold">
                ⚠️ Restam apenas <span className="text-accent text-xl md:text-2xl font-bold">{availableSpots}</span> vagas de 100
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-2">
                Após esgotadas, o preço sobe para R$ 47,90/mês
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
