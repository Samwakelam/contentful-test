export type CheckedProps = { value: string; checked: boolean };

export interface CheckboxGroupProps {
  id?: string;
  label?: string;
  labelText: string;
  value: string;
  name?: string;
  onChecked: (box: CheckedProps) => void;
  checked: boolean;
}
