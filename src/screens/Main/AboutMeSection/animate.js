export const wordSlideUp = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: "0%",
        transition: { 
            duration: 0.3, // Reduced from 0.4s
            delay: i * 0.02, // Reduced from 0.12s
            ease: [0.33, 1, 0.68, 1] // Using the same easing as examples
        }
    }),
    closed: {
        y: "100%",
        transition: { duration: 0.3 }
    }
};

export const buttonReveal = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: { 
            duration: 0.3, // Reduced from 0.5s
            delay: 0.4 // Reduced from 0.8s
        }
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.3 }
    }
};

export const curtainReveal = {
    initial: {
        y: "0%"
    },
    open: {
        y: "-100%",
        transition: { 
            duration: 0.6, // Reduced from 1s
            delay: 0.1, // Reduced from 0.2s
            ease: [0.33, 1, 0.68, 1]
        }
    }
};

export const imageScale = {
    initial: {
        scale: 1.1
    },
    open: {
        scale: 1,
        transition: { 
            duration: 0.6, // Reduced from 1.2s
            ease: [0.33, 1, 0.68, 1]
        }
    }
};

export const experienceItemReveal = {
    initial: {
        opacity: 0,
        y: 40
    },
    open: (i) => ({
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.3, // Reduced from 0.6s
            delay: 0.1 + (i * 0.05), // Much faster stagger
            ease: [0.33, 1, 0.68, 1]
        }
    })
};