import { PX_TO_REM_RATIO } from '../constants';

function getPxFromRem(rem: number): number {
  return window.innerHeight * PX_TO_REM_RATIO * rem;
}

export { getPxFromRem };
