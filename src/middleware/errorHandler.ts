// Global error handler placeholder
export const errorHandler = (err, req, res, next) => {
    res.status(500).json({ error: err.message });
};