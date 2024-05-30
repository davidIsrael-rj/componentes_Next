export default function handler(req, res){
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Marta ${codigo}`,
        email: `marta${codigo}@gmail.com`
    })
}