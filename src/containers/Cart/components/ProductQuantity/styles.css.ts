import { style } from '@vanilla-extract/css';


export const wrapper_style = style({
    display: 'flex',
    flexDirection: 'row',
    width: 'min-content',
    gap: '8px',
    alignItems: 'center',
})

export const container_style = style({
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    width: 'min-content',
    gap: '8px',
    alignItems: 'center',
    fontSize: '16px'
})

export const button_style = style({
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: '0',
    padding: '0 10px 0 10px',
    fontSize: '25px',
    ':hover': {
        backgroundColor: '#FFEEFF'
    }
})

export const delete_button_style = style({
    border: '0',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    fontSize: "16px",
    ':hover': {
        color: '#FF0000'
    }
})
