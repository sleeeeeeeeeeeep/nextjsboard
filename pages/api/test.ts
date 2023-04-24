export default function handler(req: any, res: any) {
    console.log(req.query)

    return res.status(200).json('123')
}