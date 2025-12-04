import { style } from '@vanilla-extract/css';

export const page_wrapper = style({
    padding: '20px 0 120px 0',
    display: 'flex',
    flexDirection: 'column',
});

export const page_header = style({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    padding: '0 0 20px 0',
});

export const title_style = style({
    padding: '0px',
    margin: '0px',
});

export const data_container_style = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
});

export const metadata_container_style = style({
    margin: '0px',
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
});

export const metadata_items_style = style({
    listStyle: 'none',
    '::first-letter': {
        textTransform: 'capitalize'
    }
});

export const decription_style = style({
    fontSize: '16px',
    lineHeight: '18px',
    padding: '20px 0 20px 0',
    borderTop: '1px solid #e0e0e0'
})

export const button_container_style = style({
    width: '300px'
})
