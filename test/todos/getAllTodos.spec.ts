import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import TodoService from '../../src/todo/todo.service';

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
