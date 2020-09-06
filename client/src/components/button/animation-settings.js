export const completeVariants = {
    hidden: {
        scale: 2,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 10,
            stiffness: 200,
        }
    },
    exit: {
        scale: 0,
        opacity: 0
    }
};

export const loadingVariants = {
    hidden: {
        scale: 2,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
    },
    exit: {
        scale: 0,
        opacity: 0
    }
};

export const loadingCircleVariants = {
    repeat: {
        rotate: [0, 360],
        transition: {
            ease: "linear",
            duration: 0.4,
            repeat: Infinity
        }
    },
};

export const successVariants = {
    hidden: {
        scale: 1,
        opacity: 1,
    },
    visible: {
        scale: 1,
        opacity: 1,
    },
    exit: {
        scale: 1,
        opacity: 1,
    }
};

export const successPathVariants = {
    hidden: {
        opacity: 1,
        strokeDasharray: 30,
        strokeDashoffset: -29.9
    },
    visible: {
        opacity: 1,
        strokeDasharray: 30,
        strokeDashoffset: 0,
        transition: {
            type: "spring",
            damping: 10,
            stiffness: 100,
            delay: 0.2
        }
    },
    exit: {
        opacity: 0
    }
};

export const errorVariants = {
    hidden: {
        scale: 2,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1
    },
    exit: {
        scale: 0,
        opacity: 0
    }
};