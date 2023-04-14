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
    value: DropdownOption | null;
    onChange: (option: DropdownOption) => void;
}