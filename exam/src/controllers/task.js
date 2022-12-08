


const numbers = [];

export const getDates = async  (req, res) => {
    const data = await numbers;
    res.send(data);
}


export const saveDate = async (req, res) => {
    await numbers.push(req.body.num);
    res.send(req.body.num);
}