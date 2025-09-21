export const serviceHeaderReveal = {
    initial: {
        opacity: 0,
        scale: 0.94
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { 
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1]
        }
    }
};

export const serviceItemReveal = {
    initial: {
        opacity: 0,
        y: 40,
        scale: 0.94
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { 
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1]
        }
    }
};