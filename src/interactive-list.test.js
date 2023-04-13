jest.mock('./interactive-list');

const { setCompleted } = require('./interactive-list.js');

describe('updating an item completed status', () => {

    it('should update the completed status', () => {
        expect(setCompleted(1)).toEqual([
            {
                description: 'task one',
                completed: false,
                index: 1,
              },
              {
                description: 'task two',
                completed: true,
                index: 2,
              },
              {
                description: 'task three',
                completed: false,
                index: 3,
              },
        ])
    })
})