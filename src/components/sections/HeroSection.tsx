import { CTAButton } from "@/components/CTAButton";
import { Play } from "lucide-react";
export const HeroSection = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-alt to-background opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight lg:text-4xl">
            Sua Mente <span className="text-gradient-accent">Consciente</span> Quer Prosperar,
            <br />
            Mas Seu <span className="text-gradient-accent">Subconsciente</span> Foi Treinado Para{" "}
            <span className="text-destructive">Te Sabotar</span>.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            Descubra um sistema científico de <span className="text-accent font-semibold">reprogramação mental</span> que destrói padrões limitantes
            e reconstrói sua realidade do zero.
          </p>

          {/* VSL Player */}
          <div className="max-w-4xl mx-auto my-12">
            <div className="relative aspect-video rounded-2xl overflow-hidden glass-card group cursor-pointer shadow-2xl hover:shadow-accent/20 transition-all duration-300">
              {/* Video Embed */}
              <iframe 
                src="https://drive.google.com/file/d/1bv8lsqIn8WR1wsWta9hZ_eQA8_BInB2A/preview" 
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
                title="VSL - Fator Essencial"
              />
            </div>
          </div>

          {/* Primary CTA */}
          <div className="pt-8 flex justify-center">
            <CTAButton size="xl" onClick={scrollToPricing}>
              QUERO ACESSAR AGORA
            </CTAButton>
          </div>
          <div className="text-center">
            <p className="mt-4 text-sm text-muted-foreground">
              🔒 Apenas 100 vagas para membros fundadores
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-glow/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '1s'
    }} />
    </section>;
};