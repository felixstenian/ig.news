import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    console.log(request.query)
    
    const users = [
        { id: 1, name: 'Felix' },
        { id: 2, name: 'Morty' },
        { id: 3, name: 'Rick' },
    ]

    //const user = users.find(user => user.id === parseInt(request.query.id))

    return response.json(users)
}