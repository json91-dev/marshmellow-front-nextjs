import { setupServer } from 'msw/node';
import { index } from './handlers';

export const server = setupServer(...index);
