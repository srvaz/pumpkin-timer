/**
* @param {number} numberToConvert Number to ververt
* @returns {string} Formated number, with "0" if necessary
*/
export const normalizeNumber = numberToConvert =>
  numberToConvert
    .toString()
    .padStart(2, '0');

/**
 *
 * @param {number} startTime Where timer starts
 * @param {number} endTime Where timer stop
 */
export const dateToTime = (startTime, endTime) => {
  const distance = endTime - startTime;

  const minutes = Math.round((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.round((distance % (1000 * 60)) / 1000);

  return { distance, minutes, seconds };
}