import { useState } from 'react';
import { Info, Shield, Sword, Wand, Potion, Scroll, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Item } from '@/types/inventory';

interface InventoryItemProps {
  item: Item;
  onUse: (item: Item) => void;
  onEquip: (item: Item) => void;
}

const InventoryItem = ({ item, onUse, onEquip }: InventoryItemProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const getItemIcon = () => {
    switch (item.type.toLowerCase()) {
      case 'weapon':
        return <Sword className="h-5 w-5 text-error" />;
      case 'armor':
        return <Shield className="h-5 w-5 text-primary" />;
      case 'potion':
        return <Potion className="h-5 w-5 text-success" />;
      case 'scroll':
        return <Scroll className="h-5 w-5 text-warning" />;
      case 'wand':
        return <Wand className="h-5 w-5 text-accent" />;
      case 'health':
        return <Heart className="h-5 w-5 text-error" />;
      default:
        return <Info className="h-5 w-5 text-info" />;
    }
  };

  const getRarityColor = () => {
    switch (item.rarity.toLowerCase()) {
      case 'common':
        return 'text-white';
      case 'uncommon':
        return 'text-green-400';
      case 'rare':
        return 'text-blue-400';
      case 'epic':
        return 'text-purple-400';
      case 'legendary':
        return 'text-warning';
      default:
        return 'text-white';
    }
  };

  const isEquippable = ['weapon', 'armor', 'wand'].includes(item.type.toLowerCase());
  const isUsable = ['potion', 'scroll', 'health'].includes(item.type.toLowerCase());

  return (
    <Card className="quest-card group animate-pixel-fade">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="flex items-center">
            {getItemIcon()}
            <span className="ml-2">{item.name}</span>
          </CardTitle>
          <span className={`text-sm font-medium ${getRarityColor()}`}>{item.rarity}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-2">{item.description}</p>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full mt-2 bg-surface hover:bg-primary/50"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </Button>
        
        {showDetails && (
          <div className="mt-3 text-sm animate-pixel-fade">
            <div className="grid grid-cols-2 gap-2">
              <div>Type: {item.type}</div>
              <div>Value: {item.value} gold</div>
              {item.stats && Object.entries(item.stats).map(([key, value]) => (
                <div key={key}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="flex items-center">
                          {key}: {value > 0 ? '+' : ''}{value}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{key.charAt(0).toUpperCase() + key.slice(1)} modifier</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        {isEquippable && (
          <Button 
            className="flex-1 pixel-button"
            onClick={() => onEquip(item)}
          >
            Equip
          </Button>
        )}
        {isUsable && (
          <Button 
            className="flex-1 accent-button"
            onClick={() => onUse(item)}
          >
            Use
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default InventoryItem;
