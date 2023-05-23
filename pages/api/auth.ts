import { client } from '../../utils/client';
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
    if (req.method === 'POST') {
        const user = req.body;

        client.createIfNotExists(user).then(() => res.status(200).json('Login success'));
    };
    }catch (error) {
        res.json(error);
        res.status(405).end();
    }
}
