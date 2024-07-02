enum FormatTimerMode {
  Seconds,
  Milliseconds,
}

function formatTimer(time: number, mode: FormatTimerMode = FormatTimerMode.Seconds): string {
  const pad = (num: number) => String(num).padStart(2, '0');

  let timeInSeconds = time;

  if (mode === FormatTimerMode.Milliseconds) {
    timeInSeconds = Math.trunc(time / 1000);
  }

  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const secs = timeInSeconds % 60;

  if (hours > 99) {
    return '99:99:99';
  }

  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

export { formatTimer, FormatTimerMode };
