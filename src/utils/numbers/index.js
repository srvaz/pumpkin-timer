/**
 * @param {number} numberToConvert Number to ververt
 * @returns {string} Formated number, with "0" if necessary
 */
export const normalizeNumber = (numberToConvert) =>
  numberToConvert.toString().padStart(2, '0');

/**
 *
 * @param {number} startTime Where timer starts in milliseconds
 * @param {number} endTime Where timer stop in milliseconds
 */
export const dateToTime = (startTime, endTime) => {
  const distance = endTime - startTime;

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.round((distance % (1000 * 60)) / 1000);

  return { distance, minutes, seconds: seconds >= 0 ? seconds : 0 };
};
