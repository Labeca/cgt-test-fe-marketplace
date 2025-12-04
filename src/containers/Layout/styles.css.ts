import { style } from '@vanilla-extract/css';

export const wrapper = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
});

export const container = style({
    maxWidth: '1280px',
    width: '100%',
});
