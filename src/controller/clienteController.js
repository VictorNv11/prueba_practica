const getClientes = async (req, res) => {
    res.send('llamando todos los clientes')
}

const getCliente = async (req, res) => {
    res.send('llamando cliente por id')  
  }

const postCliente = async (req, res) => {
    const cliente = req.body
    console.log(cliente)
    res.send('creando nuevo cliente')  
  }

const putCliente = async (req, res) => {
    res.send('actualizando cliente')  
  }

const deleteCliente = async (req, res) => {
    res.send('eliminando cliente')  
}
module.exports = {
    getClientes,
    getCliente,
    postCliente,
    putCliente,
    deleteCliente
}
