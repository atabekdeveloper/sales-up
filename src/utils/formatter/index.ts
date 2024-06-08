export const lowerCase = (text: string) => text.toLowerCase();
export const formMessage = (text: string) => `Пожалуйста, заполните поле ${lowerCase(text)}!`;
export const formatStringJoin = (value: string) => value.split(' ').join('');
export const formatPhoneStringJoin = (value: string) => `+998${value.split(' ').join('')}`;
export const formatPrice = (number: number, type: string) => {
  if (number) return `${number.toLocaleString('en-AU')} ${type}`;
  return `0 ${type}`;
};
export const formatNum = <T>(value: T) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
export const formatEmptyValue = (value?: string) => value || '-';
