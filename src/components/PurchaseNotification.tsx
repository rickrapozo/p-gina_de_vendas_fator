import { useState, useEffect, useRef } from 'react';
import { GlassCard } from './GlassCard';
import { CheckCircle, X } from 'lucide-react';

interface PurchaseNotificationProps {
  onCounterUpdate: (updateFn: (prev: number) => number) => void;
  currentCount: number;
}

const randomNames = [
  'Marcos Silva',
  'Ana Costa',
  'Pedro Santos',
  'Maria Oliveira',
  'João Ferreira',
  'Carla Mendes',
  'Rafael Lima',
  'Juliana Rocha',
  'Bruno Alves',
  'Fernanda Dias',
  'Lucas Martins',
  'Camila Souza',
  'Diego Pereira',
  'Larissa Cardoso',
  'Thiago Ribeiro',
  'Beatriz Nunes',
  'Gabriel Torres',
  'Natália Barbosa',
  'Rodrigo Castro',
  'Isabela Moreira'
];

export const PurchaseNotification = ({ onCounterUpdate, currentCount }: PurchaseNotificationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const [isClosing, setIsClosing] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0); // Contador de notificações mostradas
  const [usedNames, setUsedNames] = useState<string[]>([]); // Nomes já utilizados
  const timersRef = useRef<NodeJS.Timeout[]>([]); // Controle de timers usando ref
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null); // Timer específico para fechamento
  const maxNotifications = 4; // Limite máximo de notificações por sessão

  const getRandomName = () => {
    // Se todos os nomes foram usados, reseta a lista
    if (usedNames.length >= randomNames.length) {
      setUsedNames([]);
    }
    
    // Filtra nomes não utilizados
    const availableNames = randomNames.filter(name => !usedNames.includes(name));
    
    // Se não há nomes disponíveis, usa todos os nomes novamente
    const namesToUse = availableNames.length > 0 ? availableNames : randomNames;
    
    const randomIndex = Math.floor(Math.random() * namesToUse.length);
    const selectedName = namesToUse[randomIndex];
    
    // Adiciona o nome à lista de usados
    setUsedNames(prev => [...prev, selectedName]);
    
    return selectedName;
  };

  const showNotification = () => {
    // Para de mostrar notificações se não há mais vagas ou se atingiu o limite
    if (notificationCount >= maxNotifications || currentCount <= 0) return;
    
    // Limpa o timer anterior se existir
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    
    const newName = getRandomName();
    setCurrentName(newName);
    setIsVisible(true);
    setIsClosing(false);
    setNotificationCount(prev => prev + 1); // Incrementa o contador de notificações
    
    // Sempre diminui o contador a cada notificação usando callback para pegar valor atual
    onCounterUpdate(prev => prev - 1);
    
    // Esconde após 6 segundos
    hideTimerRef.current = setTimeout(() => {
      setIsClosing(true);
      // Após a animação de fechamento (300ms), esconde completamente
      setTimeout(() => {
        setIsVisible(false);
        hideTimerRef.current = null;
      }, 300);
    }, 6000);
  };

  const scheduleNextNotification = () => {
    // Verifica se já atingiu o limite de notificações ou se não há mais vagas
    if (notificationCount >= maxNotifications || currentCount <= 0) return;
    
    // Intervalos ajustados: entre 47 segundos e 2 minutos
    const minDelay = 47000; // 47 segundos (mínimo)
    const maxDelay = 120000; // 2 minutos (máximo)
    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    
    const nextTimer = setTimeout(() => {
      showNotification();
      scheduleNextNotification(); // Agenda a próxima apenas se não atingiu o limite
    }, randomDelay);
    
    timersRef.current.push(nextTimer);
  };

  useEffect(() => {
    // Limpa todos os timers existentes ao iniciar (evita duplicidade)
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];

    // Se não há vagas, não inicia as notificações
    if (currentCount <= 0) return;

    // Primeira notificação aparece após 2 minutos (120 segundos)
    const initialTimer = setTimeout(() => {
      showNotification();
      scheduleNextNotification(); // Inicia o ciclo de notificações
    }, 120000); // 2 minutos para a primeira notificação

    timersRef.current.push(initialTimer);

    return () => {
      // Limpa todos os timers de agendamento ao desmontar
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
      // Não limpamos o hideTimerRef aqui por dependências, pois isso faria o cartão
      // aberto parar de fechar. Ele é limpo no unmount pela limpeza geral abaixo.
    };
  }, []);

  // Limpeza geral ao desmontar para evitar setState em componente desmontado
  useEffect(() => {
    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };
  }, []);

  const handleClose = () => {
    // Limpa o timer de fechamento automático se existir
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Tempo da animação de saída
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 left-4 z-50 transition-all duration-300 ${
      isClosing ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
    }`}>
      <GlassCard className="border-green-500/30 bg-green-500/5 backdrop-blur-md shadow-xl w-72 sm:w-80 max-w-[calc(100vw-2rem)]">
        <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-foreground truncate">
              {currentName}
            </p>
            <p className="text-xs text-foreground-secondary">
              acabou de se tornar membro fundador
            </p>
          </div>
          
          <button
            onClick={handleClose}
            className="flex-shrink-0 p-1 hover:bg-muted/20 rounded-full transition-colors"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
          </button>
        </div>
        
        {/* Barra de progresso */}
        <div className="h-1 bg-muted/20 overflow-hidden">
          <div 
            className="h-full bg-green-400 animate-pulse shrink-animation"
          />
        </div>
      </GlassCard>
    </div>
  );
};