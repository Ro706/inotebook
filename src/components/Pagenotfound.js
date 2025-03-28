import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Pagenotfound() {
  return (
    <motion.div 
      className="container text-center d-flex flex-column align-items-center justify-content-center vh-100"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="display-1 fw-bold text-danger"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        404
      </motion.h1>
      <motion.p 
        className="lead text-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        The page you are looking for does not exist.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <Link to="/" className="btn btn-primary mt-3">
          Go to Home
        </Link>
      </motion.div>
    </motion.div>
  );
}
