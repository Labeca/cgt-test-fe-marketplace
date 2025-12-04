import { http, HttpResponse } from 'msw'
import data from '@mocks/data.json'
 
export const handlers = [
    http.get('http://fakestoreapi.com/products', () => {
        return HttpResponse.json(data)
    }),
    http.get('http://fakestoreapi.com/product/:id', ({ params }) => {
        const { id } = params
        const product = data.find(p => p.id === id)
        return HttpResponse.json(product)
    }),
]