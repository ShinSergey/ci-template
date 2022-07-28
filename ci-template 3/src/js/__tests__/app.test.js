import fetchData from '../http';
import getLevel from '../app';

jest.mock('./http')

beforeEach(() => {
    jest.resetAllMocks();
});