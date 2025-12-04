import { style } from '@vanilla-extract/css';


export const card_wrapper_style = style({
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    width: '288px',
    overflow: 'hidden',
});

export const card_container_style = style({
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    gap: '10px'
});

export const title_style = style({
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: '500',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '0',
    margin: '0'
});

export const title_link_style = style({
    color: '#000000',
    textDecoration: 'none'
});
