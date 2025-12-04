import { style } from '@vanilla-extract/css';

export const button_style = style({
    padding: '10px 16px',
    backgroundColor: '#28bea5',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    ':hover': {
        backgroundColor: '#20a388',
    },
});