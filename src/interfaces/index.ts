export interface Item {
    id: string;
    label: string;
    content: string;
}

export interface Items {
    items: Item[];
}

export interface DropdownOption {
    label: string;
    value: string;
}

export interface DropdownOptions {
    options: DropdownOption[];
    selection: DropdownOption | null;
    onSelect: (option: DropdownOption) => void;
}