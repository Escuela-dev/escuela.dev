// https://cal.com/gianpaj/free-class
// TODO: retrieve the available class (and num of slots available)
export function nextClassDateTime(){
  // assume that there's a next class every Mon-Sat at 11:30 am Spain's time & 19:30
  const now = new Date();
  const times = ['11:30', '19:30'];
  let nextDateTime = null;
  let minDiff = Infinity;

  // Check next 7 days to find closest class
  for (let i = 0; i < 7; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() + i);

    // Skip Sundays
    if (date.getDay() === 0) continue;

    for (const time of times) {
      const [hours, minutes] = time.split(':').map(Number);
      date.setHours(hours, minutes, 0, 0);

      const diff = date.getTime() - now.getTime();
      if (diff > 0 && diff < minDiff) {
        minDiff = diff;
        nextDateTime = new Date(date);
      }
    }
  }

  return nextDateTime;
}
