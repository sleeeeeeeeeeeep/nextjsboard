export default function handler(req: any, res: any) {
    if(req.method == "GET") {
        let currentTime: Date = new Date();
        
        return res.status(200).json(currentTime.toJSON());
    }
}