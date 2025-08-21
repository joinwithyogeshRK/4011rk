import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Objective } from '@/types/quest';

interface QuestObjectiveProps {
  objective: Objective;
  onComplete: (id: number) => void;
}

const QuestObjective = ({ objective, onComplete }: QuestObjectiveProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="pixel-container mb-4 animate-pixel-fade">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-bold flex items-center">
            {objective.completed ? (
              <Check className="h-5 w-5 mr-2 text-success" />
            ) : (
              <span className="h-5 w-5 mr-2 inline-block border-2 border-muted-foreground"></span>
            )}
            {objective.title}
          </h3>
          
          <div className={`mt-2 ${objective.completed ? 'text-muted-foreground line-through' : ''}`}>
            {isExpanded ? objective.description : `${objective.description.substring(0, 100)}${objective.description.length > 100 ? '...' : ''}`}
          </div>
          
          {objective.description.length > 100 && (
            <Button 
              variant="link" 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-0 h-auto mt-1 text-accent"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </Button>
          )}
        </div>
        
        {!objective.completed && (
          <Button 
            className="accent-button ml-4"
            onClick={() => onComplete(objective.id)}
          >
            Complete
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuestObjective;
