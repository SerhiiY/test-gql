export const getRating = rate => {
  rate = parseFloat(rate);
  if (!rate) return "";
  if(rate > 8.5) return "Perfect";
  if(rate > 7) return "Good";
  if(rate > 5) return "Normal";
  if(rate > 3) return "Satisfactory";
  return "Bad";
};
