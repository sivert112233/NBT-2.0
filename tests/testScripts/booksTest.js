import {BookLocationCodes} from "../../scripts/books.js";

describe('test Suite: Tests the book array', () => {
  it('test books array',() => {
    expect(new BookLocationCodes().allBooks.length).toEqual(55);
  });
});

