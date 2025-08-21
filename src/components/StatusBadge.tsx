import { Badge } from '@/components/ui/badge';

type StatusType = 'success' | 'warning' | 'error' | 'info';

interface StatusBadgeProps {
  status: StatusType;
  text: string;
  animate?: boolean;
}

const StatusBadge = ({ status, text, animate = false }: StatusBadgeProps) => {
  const getStatusClass = () => {
    switch (status) {
      case 'success':
        return 'bg-success text-success-foreground';
      case 'warning':
        return 'bg-warning text-warning-foreground';
      case 'error':
        return 'bg-error text-error-foreground';
      case 'info':
        return 'bg-info text-info-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Badge 
      className={`status-badge ${getStatusClass()} ${animate ? 'animate-pixel-pulse' : ''}`}
    >
      {text}
    </Badge>
  );
};

export default StatusBadge;
