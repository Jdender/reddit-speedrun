import { NowRequest, NowResponse } from '@vercel/node';
import { Post } from '../../../prisma/validate';
import { prisma } from '../../../prisma/client';

export default async (req: NowRequest, res: NowResponse) => {
    if (req.method !== 'POST') {
        res.status(405);
        res.send('Method Not Allowed');
        return;
    }

    const data = await Post.validate(req.body);

    const post = await prisma.post.create({ data });

    res.status(201);
    res.send(post);
};
