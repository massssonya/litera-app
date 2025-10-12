export interface NavigationButton {
    id: string;
    label: string;
    onClick?: () => void;

}

export interface Navigation {
    items: NavigationButton[]
}