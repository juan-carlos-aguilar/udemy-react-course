export interface ButtonProps {
    onClick(): void;
    type?: 'primary' | 'secondary' | 'default';
}