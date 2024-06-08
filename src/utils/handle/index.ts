export const handleNumericInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) event.preventDefault();
};
