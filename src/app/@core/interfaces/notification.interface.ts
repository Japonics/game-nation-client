export interface INotification {
  type?: 'danger' | 'info' | 'warning' | 'success' | 'primary' | 'default';
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left' | 'top-end' | 'bottom-end' | 'top-start' | 'bottom-start';
  title: string;
  message: string;
}
