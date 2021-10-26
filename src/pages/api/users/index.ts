import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Felix' },
        { id: 2, name: 'Morty' },
        { id: 3, name: 'Rick' },
    ]

    return response.json(users)
}