export const formatCnpj = (value: string) => {
  const cnpjRegex = /^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})$/;
  const match = value.replace(/\D/g, "").match(cnpjRegex);
  if (match) {
    return `${match[1]}${match[1] && "."}${match[2]}${match[2] && "."}${
      match[3]
    }${match[3] && "/"}${match[4]}${match[4] && "-"}${match[5]}`;
  }
  return value;
};
