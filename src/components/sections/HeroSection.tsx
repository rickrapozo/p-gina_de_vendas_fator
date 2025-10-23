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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 animate-fade-in-up">
          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Sua Mente <span className="text-gradient-accent">Consciente</span> Quer Prosperar,
            <br className="hidden sm:block" />
            Mas Seu <span className="text-gradient-accent">Subconsciente</span> Foi Treinado Para{" "}
            <span className="text-destructive">Te Sabotar</span>.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed px-2">
            Descubra um sistema científico de <span className="text-accent font-semibold">reprogramação mental</span> que destrói padrões limitantes
            e reconstrói sua realidade do zero.
          </p>

          {/* VSL Player */}
          <div className="max-w-4xl mx-auto my-8 md:my-12 px-2">
            <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden glass-card group cursor-pointer shadow-2xl hover:shadow-accent/20 transition-all duration-300">
              {/* Video Embed */}
              <iframe 
                src="https://drive.google.com/file/d/1lLuNk2EuDyVFwc2iKLJ9_iMn4slFjprJ/preview" 
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
                title="VSL - Fator Essencial"
              />
            </div>
          </div>

          {/* Primary CTA */}
          <div className="pt-6 md:pt-8 flex justify-center px-4">
            <CTAButton size="xl">
              QUERO ACESSAR AGORA
            </CTAButton>
          </div>
          <div className="text-center px-4">
            <p className="mt-4 text-sm text-muted-foreground">
              🔒 Apenas 100 vagas para membros fundadores
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-4 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-4 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-tech-glow/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '1s'
    }} />
    </section>;
};