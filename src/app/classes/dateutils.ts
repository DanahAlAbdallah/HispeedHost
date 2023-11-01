export class DateUtils {
    static getDaysArray(): number[] {
      const days = Array.from({ length: 31 }, (_, i) => i + 1);
      return days;
    }
  
    static getMonthsArray(): string[] {
      return [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
      ];
    }
  
    static getYearsArray(): number[] {
      const currentYear = new Date().getFullYear();
      const startYear = 1951;
      return Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);
    }
  }
  