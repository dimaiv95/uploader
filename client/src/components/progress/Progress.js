import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import "./Progress.scss"

const Progress = () => {
    const { progress, complete } = useSelector(({ upload }) => ({
        progress: upload.progress,
        complete: upload.complete
    }));

    return(
        <div className="progress">
            <motion.div
                animate={
                    complete ? {
                        width: "100%"
                    } : {
                        width: `${progress}%`
                    }
                }
                className="progress__meter">
            </motion.div>
            <div className="progress__line"></div>
        </div>
    );
};

export default Progress;