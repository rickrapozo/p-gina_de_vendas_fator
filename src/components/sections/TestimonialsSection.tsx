import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    role: "Empreendedora Digital",
    content: "Em apenas 30 dias usando o Método 5Ps, consegui quebrar padrões de autossabotagem que me limitavam há anos. Meu faturamento triplicou e finalmente me sinto no controle da minha vida.",
    rating: 5
  },
  {
    name: "Carlos Mendes",
    role: "Executivo Corporativo",
    content: "Sempre tive medo de assumir riscos na carreira. Após aplicar as técnicas de reprogramação mental, consegui a promoção que buscava há 3 anos. A mudança foi impressionante!",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Coach de Relacionamentos",
    content: "O Fator Essencial me ajudou a identificar e eliminar crenças limitantes sobre dinheiro que herdei da minha família. Hoje tenho uma relação saudável com a prosperidade.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Veja o Que Nossos <span className="text-gradient-accent">Membros</span> Estão Dizendo
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Resultados reais de pessoas que transformaram suas vidas com o Método 5Ps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-foreground-secondary mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-tech-glow flex items-center justify-center mr-4">
                  <span className="text-background font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-foreground-secondary">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 text-foreground-secondary">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm">+500 Vidas Transformadas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-tech-glow rounded-full animate-pulse"></div>
              <span className="text-sm">98% Taxa de Satisfação</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm">Resultados em 30 Dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};