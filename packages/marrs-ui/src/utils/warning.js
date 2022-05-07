const warning = (shouldBe, message) => {
  if (!shouldBe) {
    console.warn(`Marrs-Warning: ${message}`);
  }
};

export default warning;
