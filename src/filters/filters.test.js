import { pluralize } from './';

describe('Filters', () => {
    describe('pluralize', () => {
        it('should return item if singular', () => {
            const singular = 0;
            const plural = 1
            expect(pluralize(singular)).toEqual('items')
            expect(pluralize(plural)).toEqual('item')
        })
    })
})