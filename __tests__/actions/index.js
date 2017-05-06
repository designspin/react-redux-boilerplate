import helloActionCreator from '../../src/actions/index.js'

describe('helloActionCreator', () => {
  it('should create an action for HelloWorld', () => {
      const dispatch = jest.fn();
      helloActionCreator.helloWorld()(dispatch, {});
      expect(dispatch).toBeCalledWith({ type: 'HELLO_WORLD' });
  })
})
