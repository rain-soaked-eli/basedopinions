export default function handler(req, res) {
    const inventory = [
        {
            file: "yap.html",
            title: "test",
            date: "2026-02-14",
            desc: "test123"
        }
    ];
    
    res.status(200).json(inventory);
}
