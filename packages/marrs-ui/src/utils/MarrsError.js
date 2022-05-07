class MarrsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MarrsError';
  }
}

export default MarrsError;
