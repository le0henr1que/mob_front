export const formatCep = (value: string) => {
  const cepRegex = /^(\d{5})(\d{3})$/;
  const match = value.replace(/\D/g, "").match(cepRegex);

  if (match) {
    return `${match[1]}-${match[2]}`;
  }
  return value;
};
