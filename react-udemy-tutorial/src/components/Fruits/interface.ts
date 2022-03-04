export interface FruitsOwnProps {
    ownerName: string;
}

export interface FruitsStateProps {
    fruits: string[];
}

export interface FruitsDispatchProps {
    addFruits(fruits: string[]): any;
}

export type FruitProps = FruitsOwnProps & FruitsStateProps & FruitsDispatchProps;