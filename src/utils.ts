import * as yup from 'yup';

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

export const techUsed = [
  'React.js',
  'React Router',
  'Typescript',
  'Css',
  'Html',
];

//Input Validation

export const nameValidation = yup.string().required();
export const emailValidation = yup.string().email().required();
export const messageValidation = yup.string().required();
