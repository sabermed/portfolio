export const headerReveal = {
    initial: {
        opacity: 0,
        y: 30
    },
    open: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.3,
            ease: [0.33, 1, 0.68, 1]
        }
    }
};

export const projectCardReveal = {
    initial: {
        opacity: 0,
        y: 60
    },
    open: (i) => ({
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.3, 
            delay: 0.1 + (i * 0.05), // Much faster stagger
            ease: [0.33, 1, 0.68, 1]
        }
    })
};

export const ctaButtonReveal = {
    initial: {
        opacity: 0,
        y: 40
    },
    open: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.3,
            delay: 0.4,
            ease: [0.33, 1, 0.68, 1]
        }
    }
};