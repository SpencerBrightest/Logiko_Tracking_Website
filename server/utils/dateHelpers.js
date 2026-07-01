export const estimateDeliveryDate = (origin, destination, cargoType) => {
  // Mock logic to calculate delivery based on distance, cargo, etc.
  const date = new Date();
  date.setDate(date.getDate() + 14); // default 14 days
  return date;
};

export const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toISOString().split('T')[0];
};

export const calculateTransitDays = (startDate, endDate) => {
  if (!startDate || !endDate) return null;
  const diffTime = Math.abs(new Date(endDate) - new Date(startDate));
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
};
