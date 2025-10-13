import { GlassCard } from "@/components/GlassCard";
import { Target, Bot, BookText, Gamepad2, Library } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Centro de Comando",
    description: "Seu ritual matinal de 15 minutos que programa o dia inteiro para prosperidade.",
    highlight: "Disciplina sem esforço",
  },
  {
    icon: Bot,
    title: "Mentor AI 24/7",
    description: "O Mentor Ai é um terapeuta pessoal de voz, que estará disponivel 24h por dia para VOCÊ. Tire duvidas, peça conselho, compartilhe suas dificuldades, metas etc... Ele foi treinado para te guiar em qualquer situação.",
    highlight: "Mentoria instantânea",
  },
  {
    icon: BookText,
    title: "Diário de Bordo",
    description: "Sistema inteligente de análise de padrões mentais. Criado para analisar seus padrões e revelar sabotagens invisíveis, programações, vírus da “Matrix Mental” e outros, que estejam rodando em seu subconsciente, mesmo que não perceba. Nosso Mentor AI analisará e te ajudará a corrigir cada um deles usando o Método 5Ps ",
    highlight: "Autoconsciência profunda",
  },
  {
    icon: Gamepad2,
    title: "Jornada Gamificada",
    description: "Missões diárias que transformam hábitos novos em vícios positivos.",
    highlight: "Progresso viciante",
  },
  {
    icon: Library,
    title: "Arsenal Mental",
    description: "Sessão 100% focada em expandir sua consciência e te armar contra o jogo sujo da Matrix, que prospera na ignorância, na falta e na escassez. Tenha acesso a Livros, palestras, audiolivros e muito mais para expandir sua mente e te preparar para guerra contra as armadilhas da Matrix mental",
    highlight: "Soluções imediatas",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Seu <span className="text-gradient-accent">Arsenal Completo</span> de Transformação
            </h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Não é um app de produtividade. É o seu sistema operacional mental atualizado.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <GlassCard
                key={index}
                className="animate-fade-in text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-tech-glow/20 flex items-center justify-center group-hover:glow-accent transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>

                {/* Highlight Badge */}
                <div className="inline-block mb-4">
                  <span className="text-xs font-semibold text-tech-glow bg-tech-glow/10 px-3 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>

                {/* Description */}
                <p className="text-foreground-secondary leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            ))}

            {/* Bonus Card */}
            <GlassCard 
              className="animate-fade-in md:col-span-2 lg:col-span-3 text-center border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="py-4">
                <p className="text-2xl font-bold mb-2">
                  + Atualizações Constantes
                </p>
                <p className="text-lg text-foreground-secondary">
                  Novos protocolos, funcionalidades e conteúdos exclusivos adicionados mensalmente.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
