import "@testing-library/jest-dom";
import fetchMock from "fetch-mock";



describe("SingleParkDetails", ()=> {
    beforeEach(() => {
        fetchMock.get('/api/parks/${parkCode}', 200);
      });
      afterEach(() => {
        fetchMock.restore();
      });
    
      it('should mock fetch', () => {
        expect(fetchMock).toBeDefined();
      });
})