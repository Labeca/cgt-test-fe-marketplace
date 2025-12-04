import { style } from '@vanilla-extract/css';

export const page_wrapper = style({
    padding: '20px 0 120px 0',
});

export const product_container = style({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    gap: '24px',
    justifyContent: 'center',
    padding: '0'
});

export const footer_style = style({
    textAlign: 'right'
})