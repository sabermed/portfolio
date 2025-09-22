export const letterSlideUp = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: "0%",
        transition: { 
            duration: 0.4, 
            delay: 0.3 + (i * 0.025),
            ease: [0.77, 0, 0.175, 1]
        }
    }),
    closed: {
        y: "100%",
        transition: { duration: 0.4 }
    }
};

export const subtitleReveal = {
    initial: {
        opacity: 0,
        y: 30,
        scale: 0.95
    },
    open: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { 
            duration: 0.6, 
            delay: 0.6,
            ease: [0.77, 0, 0.175, 1]
        }
    }
};

export const descriptionReveal = {
    initial: {
        opacity: 0,
        y: 30,
        scale: 0.95
    },
    open: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { 
            duration: 0.6, 
            delay: 0.7,
            ease: [0.77, 0, 0.175, 1]
        }
    }
};