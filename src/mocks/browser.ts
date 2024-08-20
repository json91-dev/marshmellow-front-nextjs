import { setupWorker } from 'msw/browser';
import { index } from './handlers';

export const worker = setupWorker(...index);
