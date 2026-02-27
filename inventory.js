export default function handler(req, res) {
    const inventory = [
        {
            file: "yap.html",
            title: "Technology!!! :3",
            date: "2026-02-27",
            desc: "yapatronics!"
        }
    ];
    
    res.status(200).json(inventory);
}


