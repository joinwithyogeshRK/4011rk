import { Heart, Shield, Sword, Zap, Star, Award } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Character } from '@/types/character';

interface CharacterStatsProps {
  character: Character;
}

const CharacterStats = ({ character }: CharacterStatsProps) => {
  const calculateLevelProgress = () => {
    const xpForCurrentLevel = character.level * 100;
    const xpForNextLevel = (character.level + 1) * 100;
    const xpNeeded = xpForNextLevel - xpForCurrentLevel;
    const currentProgress = character.xp - xpForCurrentLevel;
    return Math.floor((currentProgress / xpNeeded) * 100);
  };

  const calculateHealthPercentage = () => {
    return Math.floor((character.currentHealth / character.maxHealth) * 100);
  };

  const getHealthColor = () => {
    const percentage = calculateHealthPercentage();
    if (percentage <= 25) return 'bg-error';
    if (percentage <= 50) return 'bg-warning';
    return 'bg-success';
  };

  return (
    <Card className="quest-card">
      <CardHeader>
        <CardTitle className="text-accent flex items-center">
          <Award className="h-6 w-6 mr-2" />
          {character.name} - Level {character.level}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <div className="flex items-center">
              <Heart className="h-5 w-5 mr-1 text-error" />
              <span>Health</span>
            </div>
            <span>{character.currentHealth}/{character.maxHealth}</span>
          </div>
          <Progress value={calculateHealthPercentage()} className={getHealthColor()} />
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-1 text-warning" />
              <span>Experience</span>
            </div>
            <span>{character.xp} XP</span>
          </div>
          <Progress value={calculateLevelProgress()} className="bg-warning" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center">
            <Sword className="h-5 w-5 mr-2 text-error" />
            <div>
              <div className="text-sm text-muted-foreground">Attack</div>
              <div>{character.stats.attack}</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Shield className="h-5 w-5 mr-2 text-primary" />
            <div>
              <div className="text-sm text-muted-foreground">Defense</div>
              <div>{character.stats.defense}</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Zap className="h-5 w-5 mr-2 text-accent" />
            <div>
              <div className="text-sm text-muted-foreground">Magic</div>
              <div>{character.stats.magic}</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Star className="h-5 w-5 mr-2 text-warning" />
            <div>
              <div className="text-sm text-muted-foreground">Luck</div>
              <div>{character.stats.luck}</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <h3 className="font-bold mb-2">Class: {character.class}</h3>
          <p className="text-sm">{character.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterStats;
