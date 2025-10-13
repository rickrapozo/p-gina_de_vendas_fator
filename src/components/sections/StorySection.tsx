export const StorySection = () => {
  return (
    <section className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
          {/* Título em vermelho degradê */}
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent leading-tight">
              Você conhece essa sensação, não conhece?
            </h2>
          </div>

          <div className="animate-fade-in">
            <p className="text-foreground-secondary">
              Domingo à noite. Aquela sensação no estômago. O despertador vai tocar em algumas horas, 
              e você já sabe como será: <span className="text-accent font-semibold">mais do mesmo</span>.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-foreground-secondary">
              Você trabalha duro. Faz tudo "certo". Mas a conta bancária não cresce, 
              o relacionamento não melhora, e aquele projeto que te empolgava virou só mais uma tarefa.
            </p>
          </div>

          <div className="animate-fade-in my-12 p-8 glass-card border-l-4 border-accent" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl md:text-3xl font-bold italic text-accent">
              "É SÓ ISSO?"
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-foreground-secondary">
              Não é preguiça. Não é falta de esforço. <span className="text-foreground font-semibold">É programação</span>.
            </p>
            <p className="text-foreground-secondary mt-4">
              Desde criança, seu cérebro foi treinado para operar dentro de limites invisíveis. 
              Você quer mais, mas algo sempre te puxa de volta para o "normal".
            </p>
          </div>

          <div className="animate-fade-in mt-12" style={{ animationDelay: '0.8s' }}>
            <p className="text-xl text-foreground font-semibold">
              E se eu te dissesse que existe um jeito de <span className="text-gradient-accent">reescrever esse código</span>?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
