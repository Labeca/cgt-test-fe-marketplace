import { style } from '@vanilla-extract/css';

export const wrapper_style = style({
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    gap: "10px",
    padding: "10px",
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
})

export const image_container_style = style({
    height: "180px",
    width: "180px",
    overflow: "hidden",
    borderRadius: '8px',
})
