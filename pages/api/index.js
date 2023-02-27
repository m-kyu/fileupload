import fs from 'fs'

export const config = {
    api: {
        bodyParser: false
    }
}
export default function handler(req, res) {
    console.log(req);
    res.status(200).json({ name: 'John Doe' })
}
