
export class DropdownValue<T> {
    value: T;
    label: string;

    constructor(value: T, label: string) {
        this.value = value;
        this.label = label;
    }
}