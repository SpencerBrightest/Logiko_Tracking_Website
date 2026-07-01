export const generateTrackingId = () => {
  // Generates unique tracking codes in format LGK-XXXXXX
  const randomPart = Math.floor(100000 + Math.random() * 900000);
  return `LGK-${randomPart}`;
};
