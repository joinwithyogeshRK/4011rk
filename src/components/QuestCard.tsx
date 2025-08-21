import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Skull, Coins, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Quest } from '@/types/quest';

interface QuestCardProps {
  quest: Quest;
}

const QuestCard = ({ quest }: QuestCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-success text-success-foreground';
      case 'medium':
        return 'bg-warning text-warning-foreground';
      case 'hard':
        return 'bg-error text-error-foreground';
      default:
        return 'bg-info text-info-foreground';
    }
  };

  return (
    <Card 
      className="quest-card group animate-pixel-fade transition-transform duration-300 hover:translate-y-[-5px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-accent">{quest.title}</CardTitle>
          <Badge className={getDifficultyColor(quest.difficulty)}>
            {quest.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{quest.description}</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-accent" />
                  <span>{quest.timeLimit} min</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Time Limit</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <Skull className="h-4 w-4 mr-1 text-error" />
                  <span>Level {quest.minLevel}+</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Minimum Level Required</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <Coins className="h-4 w-4 mr-1 text-warning" />
                  <span>{quest.goldReward} gold</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Gold Reward</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 mr-1 text-accent" />
                  <span>{quest.xpReward} XP</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Experience Points</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        {isHovered && (
          <div className="mt-4 invisible group-hover:visible animate-pixel-fade">
            <h4 className="font-bold text-sm mb-1">Special Rewards:</h4>
            <ul className="text-sm list-disc list-inside">
              {quest.specialRewards.map((reward, index) => (
                <li key={index}>{reward}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link to={`/quest/${quest.id}`} className="w-full">
          <Button className="w-full accent-button">Accept Quest</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default QuestCard;
