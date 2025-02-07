import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './project.css';

const modalOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalContentVariants = {
  hidden: { y: "-50%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};

const ProjectCard = ({ title, image, body, button_url }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{minWidth: "30%", width: "30%"}} className="mobile-adapt-pr">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsModalOpen(true)}
        className="project-card"
      >
        <h3>{title}</h3>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalOverlayVariants}
            transition={{ duration: 0.3 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="modal-content"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={modalContentVariants}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} 
            >
              <img src={image} alt={title} className="project-image" />
              {button_url && (
                <a href={button_url} target="_blank" style={{alignSelf: 'center'}}><button className='close-button' >View</button></a>
              )}
              <p style={{marginTop: "10px", maxWidth: "450px", alignSelf: "center"}}>{body}</p>
              <button className="close-button" onClick={() => setIsModalOpen(false)}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { ProjectCard };
