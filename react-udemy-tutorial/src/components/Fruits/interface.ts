export interface FruitsOwnProps {
    ownerName: string;
}

export interface FruitsStateProps {
    fruits: string[];
}

export type FruitProps = FruitsOwnProps & FruitsStateProps;