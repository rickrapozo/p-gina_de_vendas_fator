import { GlassCard } from "@/components/GlassCard";
import { ShieldCheck } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <GlassCard className="animate-fade-in border-2 border-accent/30">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center glow-accent">
                <ShieldCheck className="w-12 h-12 text-accent" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Garantia <span className="text-accent">Risco Zero</span>
            </h2>

            <p className="text-xl text-foreground-secondary leading-relaxed mb-6">
              Use o Fator Essencial por <span className="text-accent font-bold">15 dias completos</span>.
            </p>

            <p className="text-lg text-foreground-secondary leading-relaxed">
              Se você não sentir que está no caminho da transformação real, 
              é só enviar um email e eu devolvo <span className="text-foreground font-semibold">100% do seu dinheiro</span>.
            </p>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-foreground-secondary italic">
                Sem perguntas. Sem burocracia. Sem ressentimentos.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
