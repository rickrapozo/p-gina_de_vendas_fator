import { useState, useEffect } from 'react';
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
  const [timers, setTimers] = useState<NodeJS.Timeout[]>([]); // Controle de timers
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
    
    const newName = getRandomName();
    setCurrentName(newName);
    setIsVisible(true);
    setIsClosing(false);
    setNotificationCount(prev => prev + 1); // Incrementa o contador de notificações
    
    // Sempre diminui o contador a cada notificação usando callback para pegar valor atual
    onCounterUpdate(prev => prev - 1);
    
    // Esconde após 6 segundos
    const hideTimer = setTimeout(() => {
      setIsClosing(true);
      const removeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Tempo da animação de saída
      
      setTimers(prev => prev.filter(timer => timer !== hideTimer));
    }, 6000);
    
    setTimers(prev => [...prev, hideTimer]);
  };

  const scheduleNextNotification = () => {
    // Verifica se já atingiu o limite de notificações ou se não há mais vagas
    if (notificationCount >= maxNotifications || currentCount <= 0) return;
    
    // Intervalos reduzidos: entre 20 e 45 segundos
    const minDelay = 20000; // 20 segundos (mínimo)
    const maxDelay = 45000; // 45 segundos (máximo)
    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    
    const nextTimer = setTimeout(() => {
      showNotification();
      scheduleNextNotification(); // Agenda a próxima apenas se não atingiu o limite
    }, randomDelay);
    
    setTimers(prev => [...prev, nextTimer]);
  };

  useEffect(() => {
    // Limpa todos os timers existentes
    timers.forEach(timer => clearTimeout(timer));
    setTimers([]);
    
    // Se não há vagas, não inicia as notificações
    if (currentCount <= 0) return;
    
    // Primeira notificação aparece mais rapidamente (15 segundos)
    const initialTimer = setTimeout(() => {
      showNotification();
      scheduleNextNotification(); // Inicia o ciclo de notificações
    }, 15000); // 15 segundos para a primeira notificação

    setTimers([initialTimer]);

    return () => {
      // Limpa todos os timers ao desmontar o componente
      timers.forEach(timer => clearTimeout(timer));
      clearTimeout(initialTimer);
    };
  }, [currentCount]); // Adiciona currentCount como dependência para reagir a mudanças

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
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
            className="h-full bg-green-400 animate-pulse"
            style={{
              animation: 'shrink 6s linear forwards'
            }}
          />
        </div>
      </GlassCard>
      
      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};