export interface ButtonGroupProps { 
    selected: number | null;
    onClick?(): number | null;
    direction: string;
}

export interface ButtonGroupState {}