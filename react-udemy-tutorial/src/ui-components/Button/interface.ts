export type ButtonType = 'primary' | 'default';

export interface ButtonProps {
    className?: string;
    selected?: boolean;
    type?: ButtonProps
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}