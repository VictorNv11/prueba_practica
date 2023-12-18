const express = require('express')
const Cliente = require('../model/clienteModel')
const mongoose = require('mongoose')
const { stat } = require('fs')

const router = express.Router()

// SELECCIONAR TODOS LOS CLIENTES
router.get('/', async (req, res) => {
    const clientes = await Cliente.find()
    if (clientes.length >0){
        res.status (200).json({success: true,
                               data:clientes})    
    }else{
        res.status(404).json({success: false,
                            message: 'No se encontraron clientes'})
    }
})

//SELECCIONAR UN CLIENTE POR ID QUE PASE POR PARAMETRO
router.get('/:id', async (req, res) => { 
    const clienteId = req.params.id
        try{
            if(!mongoose.Types.ObjectId.isValid(clienteId)){
                return res.status(500).json({
                    success: false,
                    msg:  `id invalido`
                })
            }else{
                const cliente = await Cliente.findById(clienteId)
                console.log(cliente)
                if(!cliente){
                    res.status(404).json(
                        {
                            success: false,
                            
                        }
                    )
                }
            }
        }

})

