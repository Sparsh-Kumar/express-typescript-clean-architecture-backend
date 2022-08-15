import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiHttp from 'chai-http';
import sinon from 'sinon';

chai.use(chaiHttp);
chai.use(chaiAsPromised);

let sinonSandbox: sinon.SinonSandbox;

describe('Todo.', () => {
  beforeEach(async () => {
    sinonSandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sinonSandbox.restore();
  });

  it('GET /todos should return a list of all todos.', async() => {

    // pretesting conditions

  });
});
