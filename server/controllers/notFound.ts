import {Request, Response} from 'express';

export default function (req: Request, res: Response) {
    res.sendStatus(404);
}
