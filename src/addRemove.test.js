jest.mock('./addRemove')

const {add, remove} = require('./addRemove')

describe('add items to Todo', () => {
    
    it('should add item', () => {
        expect(add('task one')).toEqual([
            {
                description: 'task one',
                completed: false,
                index: 1
            }
        ])
    })

    it('should delete item', () => {
        expect(remove(1)).toEqual([])
    })

})