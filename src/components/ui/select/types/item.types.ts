export interface Item {
  id: string;
  label: string;
  component?: string;
  style?: Record<string, any>;
  action?: (editor: any, style?: Record<string, any>) => void;
}
