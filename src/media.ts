import { generateMedia } from "styled-media-query";
import theme from './theme';

type BreakpointType = keyof typeof theme.breakpoints;
type BreakpointInPxType = {
  [key in BreakpointType]?: string;
}
const breakpointsInPx: BreakpointInPxType = {};

const {breakpoints} = theme;
for (let key in breakpoints) {
  if (breakpoints.hasOwnProperty(key)) {
    breakpointsInPx[key as BreakpointType] = `${breakpoints[key as BreakpointType]}px`;
  }
}

export default generateMedia(breakpointsInPx);
