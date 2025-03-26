export interface LessonTime {
  start: string;
  end: string;
}

// Full schedule for the day (all possible lessons)
const fullLessonSchedule: LessonTime[] = [
  { start: '07:35', end: '08:15' },
  { start: '08:15', end: '08:55' },
  { start: '09:10', end: '09:50' },
  { start: '09:50', end: '10:30' },
  { start: '10:35', end: '11:15' },
  { start: '11:15', end: '11:55' },
  { start: '11:55', end: '12:45' },
  { start: '12:45', end: '13:35' },
  { start: '13:35', end: '14:25' },
  { start: '14:25', end: '15:15' },
  { start: '15:15', end: '16:05' }
];

/**
 * Given a student's attendance record and the total number of lessons for that day (from the class record),
 * returns an array of absence intervals (formatted as "start-end") for the lessons not fully attended.
 */
export const getAbsenceIntervals = (
  attendance: { arrivedAt: string; leftAt: string },
  totalLessons: number
): string[] => {
  const absentIntervals: string[] = [];
  // Determine the day’s expected schedule from the total number of lessons.
  const dailySchedule = fullLessonSchedule.slice(0, totalLessons);
  const arrivedTime = new Date(attendance.arrivedAt);
  const leftTime = new Date(attendance.leftAt);

  console.log(`Calculating absence intervals for attendance from ${attendance.arrivedAt} to ${attendance.leftAt}`);
  dailySchedule.forEach((lesson, index) => {
    // Compute lesson start and end as Date objects (using the attendance date for context)
    const lessonStart = new Date(attendance.arrivedAt);
    const [sHours, sMinutes] = lesson.start.split(':').map(Number);
    lessonStart.setHours(sHours, sMinutes, 0, 0);

    const lessonEnd = new Date(attendance.arrivedAt);
    const [eHours, eMinutes] = lesson.end.split(':').map(Number);
    lessonEnd.setHours(eHours, eMinutes, 0, 0);

    console.log(`Lesson ${index + 1}: ${lesson.start} - ${lesson.end}`);
    // Mark the interval as absent if the attendance did not cover the whole lesson.
    if (arrivedTime > lessonStart || leftTime < lessonEnd) {
      absentIntervals.push(`${lesson.start}-${lesson.end}`);
      console.log(`Marked absence for lesson ${index + 1}: ${lesson.start}-${lesson.end}`);
    }
  });
  console.log('Absent intervals:', absentIntervals);
  return absentIntervals;
};

/**
 * Optionally, calculates the total missed minutes given an array of absence intervals.
 */
export const calculateMissedMinutes = (absenceIntervals: string[]): number => {
  let totalMinutes = 0;
  absenceIntervals.forEach(interval => {
    const [start, end] = interval.split('-');
    const [sHours, sMinutes] = start.split(':').map(Number);
    const [eHours, eMinutes] = end.split(':').map(Number);
    const startDate = new Date();
    startDate.setHours(sHours, sMinutes, 0, 0);
    const endDate = new Date();
    endDate.setHours(eHours, eMinutes, 0, 0);
    totalMinutes += (endDate.getTime() - startDate.getTime()) / (1000 * 60);
  });
  console.log('Total missed minutes:', totalMinutes);
  return totalMinutes;
};
