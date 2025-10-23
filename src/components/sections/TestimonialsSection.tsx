import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  videoUrl: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Ana Silva",
    role: "Maquiadora Profissional",
    videoUrl: "https://www.youtube.com/shorts/zVUCn5RXn0U",
    rating: 5
  },
  {
    name: "Fernando Augusto",
    role: "Vendedor",
    videoUrl: "https://www.youtube.com/shorts/mZPAgYrpZ3s",
    rating: 5
  },
  {
    name: "Felipe Martins",
    role: "Empreendedor Digital",
    videoUrl: "https://www.youtube.com/shorts/0okAiLPP7j4",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background-alt min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Veja o Que Nossos <span className="text-gradient-accent">Membros</span> Estão Dizendo
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            Resultados reais de pessoas que transformaram suas vidas com o Método 5Ps
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl w-full">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-card p-4 md:p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up max-w-sm mx-auto md:max-w-none"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Video Testimonial */}
                 <div className="mb-4">
                   <div className="relative w-full bg-gray-900 rounded-lg overflow-hidden" style={{ aspectRatio: '9/16', minHeight: '400px' }}>
                     <iframe 
                       src={`https://www.youtube.com/embed/${testimonial.videoUrl.split('/').pop()}?rel=0&modestbranding=1&showinfo=0`}
                       className="w-full h-full"
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen
                       title={`Depoimento de ${testimonial.name}`}
                     />
                   </div>
                 </div>

                {/* Author Info with Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-accent to-tech-glow flex items-center justify-center mr-3">
                      <span className="text-background font-bold text-sm md:text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm md:text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-xs md:text-sm text-foreground-secondary">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-accent fill-accent" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
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