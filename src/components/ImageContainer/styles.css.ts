import { style } from '@vanilla-extract/css';

export const image_container_style = style({
    overflow: "hidden",
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

export const image_container_sm = style({
    height: "180px",
    width: "180px",
})

export const image_container_md = style({
    height: "256px",
    width: "256px",
})

export const image_container_lg = style({
    height: "400px",
    width: "400px",
})

export const image_style_sm = style({
    height: "180px",
    width: "auto"
})

export const image_style_md = style({
    height: "256px",
    width: "auto"
})

export const image_style_lg = style({
    height: "400px",
    width: "auto"
})