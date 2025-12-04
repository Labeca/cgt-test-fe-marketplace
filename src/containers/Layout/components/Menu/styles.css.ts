import { style } from '@vanilla-extract/css';

export const wrapper = style({
    backgroundColor: '#28bea5',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
});

export const logo = style({
    color: "#FFFFFF",
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 'bold',
    fontFamily: 'Brush Script MT, cursive',
    display: 'block',
});

export const container = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1280px',
    width: '100%'
});

export const menu = style({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 0,
    listStyleType: 'none',
});

export const menu_item = style({
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '500',
    color: '#FFFFFF',
    padding: '16px 20px',
    textDecoration: 'none',
    ':hover': {
        cursor: 'pointer',
        backgroundColor: '#1e8e7a',
    },
    position: 'relative'
});

export const menu_item_active = style({
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '500',
    padding: '16px 20px',
    textDecoration: 'none',
    ':hover': {
        cursor: 'pointer',
        backgroundColor: '#1e8e7a',
    },
    backgroundColor: "#FFFFFF",
    color: "#000000",
    position: 'relative'
});

export const shopping_cart_style = style({
    fontSize: '26px'
})

export const menu_item_counter = style({
    position: 'absolute',
    backgroundColor: 'orange',
    borderRadius: '100%',
    width: '20px',
    height: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '10px',
    display: 'flex',
    top: '7px',
    right: '5px',
    fontWeight: '700',
    border: '1px solid #FFFFFF',
    color: "#000000"
})