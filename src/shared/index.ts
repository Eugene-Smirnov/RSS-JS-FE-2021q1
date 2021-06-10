import { CAR_MODELS } from './car-models';
import { CAR_NAMES } from './car-names';

export function delay(timeout: number): Promise<void> {
  return new Promise((res) => {
    setTimeout(res, timeout);
  });
}

export function generateQueryString(
  queryParams: Record<string, string | number | boolean>
): string {
  let result;
  const arr = Object.entries(queryParams);
  const stringArr = arr.map((item) => `${item[0]}=${item[1]}`);
  result = `?${stringArr.join('&')}`;
  if (!result) result = '';
  return result;
}

export function genRandomCarName(): string {
  const name = CAR_NAMES[Math.floor(Math.random() * CAR_NAMES.length)];
  const model = CAR_MODELS[Math.floor(Math.random() * CAR_MODELS.length)];
  return `${name} ${model}`;
}

export function genRandomColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const TRACK_DISTANCE = 100;

export function animation(
  element: HTMLElement,
  animationTime: number
): { id?: number } {
  let start = 0;
  const state: { id?: number } = {};

  function step(timestamp: number) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const passed = Math.round(time * (TRACK_DISTANCE / animationTime));

    element.style.setProperty(
      '--distance',
      `${Math.min(passed, TRACK_DISTANCE)}%`
    );

    if (passed < TRACK_DISTANCE) {
      state.id = window.requestAnimationFrame(step);
    }
  }

  state.id = window.requestAnimationFrame(step);

  return state;
}
