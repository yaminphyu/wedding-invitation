export const calculateTimeDifference = (targetDate) => {
    const now = new Date();
    const target = new Date(targetDate);
  
    // Time difference in milliseconds
    const difference = target.getTime() - now.getTime();
  
    // Convert to different time units
    const seconds = Math.floor((difference / 1000) % 60).toString().padStart(2, '0');
    const minutes = Math.floor((difference / (1000 * 60)) % 60).toString().padStart(2, '0');
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
    const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString();
    
    return { days, hours, minutes, seconds };
};