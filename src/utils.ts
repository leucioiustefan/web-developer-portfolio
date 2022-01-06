// Timer function to trigger animations

export const countdown = (time: number, setTime: (a: number) => void) => {
  const interval: any = setInterval(() => {
    if (time) {
      const next = time - 1;
      if (next === 0) return setTime(0);
      return setTime(next);
    }
    return clearInterval(interval);
  }, 1000);
  return interval;
};

export const renderInputEnum = {
  name: 'name',
  email: 'email',
  message: 'message',
};
