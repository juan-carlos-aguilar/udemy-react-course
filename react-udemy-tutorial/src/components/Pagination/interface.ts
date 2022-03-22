export interface PaginationProps {
    numberOfPages: number;
    onChage(selectedPage: number): void;
}

export interface PagintationState {
    selectedPage: number;
}