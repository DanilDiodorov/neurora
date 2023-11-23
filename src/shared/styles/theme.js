const baseTheme = {
    media: {
        extraLarge: '(max-width: 1140px)',
        large: '(max-width: 960px)',
        medium: '(max-width: 720px)',
        small: '(max-width: 540px)',
    },

    sizes: {
        menu: { width: '300px' },
        borderRadius: '5px',
        main: { height: window.innerHeight },
    },
}

export const darkTheme = {
    mode: 'dark',
    colors: {
        primary: '#141627',
        secondary: '#1C1F37',
        hovered: '#153F8C',
        danger: '#F94C4C',
        dangerStroke: '#FF6969',
        grey: '#252A43',

        messageLoader: '#fff0',
        button: '#5841D9',
        hoveredButton: '#2D2173',
        stroke: '#252626',
        bgContent: '#141627',
        bgForm: '#252A43',
        bgFormInput: '#141627',
        text: '#fff',
        messageInput: '#1C1F37',
    },
    ...baseTheme,
}

export const lightTheme = {
    mode: 'light',
    colors: {
        primary: '#fff',
        secondary: '#fff',
        hovered: '#153F8C',
        danger: '#F94C4C ',
        dangerStroke: '#FF6969',
        grey: '#C0C0C0',

        messageLoader: '#c0c0c0c0',
        button: '#5990FF',
        hoveredButton: '#4067B6',
        stroke: '#ADADAD',
        bgContent: '#E5E5E5',
        bgForm: '#fff',
        bgFormInput: '#fff',
        text: '#0F172A',
        messageInput: '#fff',
    },
    ...baseTheme,
}
