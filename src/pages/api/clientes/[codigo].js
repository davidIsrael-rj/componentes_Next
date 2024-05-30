// MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 
// 11 close listeners added to [Server]. Use emitter.setMaxListeners() to increase limit
// (Use `node --trace-warnings ...` to show where the warning was created)
// caso ocorra esse erro acima utilize esse codico logo abaixo

// import {EventEmitter} from 'events';
// const emitter = new EventEmitter();
// emitter.setMaxListeners(20);

// por padrao são 10 ovites configurado, se precisar de mais é só configurar com o 
// código acima

export default function handler(req, res){
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Marta ${codigo}`,
        email: `marta${codigo}@gmail.com`
    })
}