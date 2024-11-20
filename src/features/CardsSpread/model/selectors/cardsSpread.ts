import { StateSchema } from '@app/_providers/StoreProvider';

export const getCardsSpreadIsLoading = (state: StateSchema) => state.cardsSpread?.isLoading || false;
export const getCardsSpreadError = (state: StateSchema) => state.cardsSpread?.error;
export const getCardsSpreadCards = (state: StateSchema) => state.cardsSpread?.cards || [];
