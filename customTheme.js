

export const colors = {
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'Lato',
        color: mode('myPurple.10', 'myPurple.20')(props),
      },
    }),
  },
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Lato', sans-serif`,
  },
  primary: {
    10: '#E5B8F4',
    20: '#C147E9',
    30: '#810CA8',
  },
  secondary: {
    10: '#40E0D0',
    20: '#0AB0A0',
    30: '#008678',
  },
  tertiary: {
    10: '#72B5B7',
    20: '#5D9698',
    30: '#4B6C6D',
  },
  accent: {
    10: '#633A82',
    20: '#4A2A63',
    30: '#38214A',
  },
  myPurple: {
    10: '#EDE7EF',
    20: '#9869A8',
    30: '#66287B',
    40: '#2D033B',
  }
}