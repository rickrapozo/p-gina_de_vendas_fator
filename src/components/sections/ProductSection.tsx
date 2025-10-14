import { GlassCard } from "@/components/GlassCard";
import { Smartphone } from "lucide-react";

export const ProductSection = () => {
  return (
    <section className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="animate-fade-in order-2 md:order-1 flex justify-center">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-tech-glow/20 blur-3xl rounded-full" />
                
                {/* Video Container */}
                <div className="relative glass-card p-0 rounded-3xl shadow-2xl flex justify-center items-center mx-auto">
                  <div className="aspect-[9/16] bg-gradient-to-br from-primary to-background-alt rounded-2xl border-0 overflow-hidden mx-auto">
                    <iframe
                      src="https://drive.google.com/file/d/10dASLCj1iupsvYE0k3olDUDzYOLx0Yqy/preview"
                      width="640"
                      height="480"
                      allow="autoplay"
                      className="w-full h-full"
                      allowFullScreen
                      title="Do Subconsciente à Prosperidade Real"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in space-y-6 order-1 md:order-2" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Do Subconsciente à <span className="text-gradient-accent">Prosperidade Real</span>
              </h2>

              <div className="space-y-4 text-lg text-foreground-secondary leading-relaxed">
                <p>
                  Há 3 anos, eu estava preso na mesma Matrix que você. Trabalhava 60 horas por semana, 
                  ganhava mal, e sentia que nunca seria "suficiente".
                </p>

                <p>
                  Então descobri os <span className="text-accent font-semibold">5Ps</span>. 
                  Não de um guru, mas de <span className="text-foreground font-semibold">neurociência aplicada</span>.
                </p>

                <p className="text-xl font-bold text-foreground">
                  Em 1 ano, tripliquei minha renda. Mas o mais importante:
                </p>

                <GlassCard className="border-l-4 border-accent">
                  <p className="text-lg italic">
                    "Pela primeira vez na vida, eu me sentia no controle. 
                    Não era sorte. Era <span className="text-accent font-bold">programação consciente</span>."
                  </p>
                </GlassCard>

                <p>
                  Por isso criei o <span className="text-accent font-bold text-xl whitespace-nowrap">Fator Essencial</span>:
                </p>

                <p className="text-xl font-semibold">
                  O aplicativo que coloca o Método 5Ps no seu bolso, 
                  todos os dias, te guiando passo a passo na reprogramação completa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
