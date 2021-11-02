describe('searcher', () => {
  it('should search through an array of data and find what you are looking for', () => {
    const array = [1, 3 ,12, 32, 43, 490];
    const result = searcher(array);
    expect(result).toEqual(true);
  });
});