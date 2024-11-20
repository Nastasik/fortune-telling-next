
export type CardType = {
    src: string;
    description: string; 
    cardName: string;
}

export interface CardsSpreadSchema { 
    cards: CardType[];
    cardsCount: number;
    isLoading?: boolean;
    error?: string;
}
