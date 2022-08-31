/* npm init  = inicializar o pacote jeson
npm install express = permite executar o javaS 
npm install nodemon --save = bbloteca
*/

// 1 - importamos o express, na segunada declamos a função app

const express = require('express')
const app = express()

//declamos uma porta
const port = 30000

//colocamos depois de indtalar o comando do sequelize
const {Sequelize, DataTypes} = require('Sequelize')

const TaskModel = require('./models/task')

const sequelize = new Sequelize({
    "storage": "my-database.db",
    "dialect": "sqlite"
  })
  const tasks = TaskModel(sequelize, DataTypes)
  app.use(express.json())

  //Listar as tarefas 
app.get('/tasks', async (req, res) => {
  const allTasks = await tasks.findAll()
  res.json({ allTasks })
})

// Procurar tarefa por id 
app.get('/tasks/:id', async (req, res) => {
  const taskId = req.params.id
  const task = await tasks.findByPk(taskId)
  console.log(req)

  res.json({ task })

})

 app.post('/tasks', async (req, res) => {
  const body = req.body
  const task = await tasks.create({ description: body.description, done: body.done })
  res.json(task)

})

app.put('/tasks/:id', async (req, res) => {
  const body = req.body
  const taskId = req.params.id
  const task = await tasks.findByPk(taskId)
  const result = await task.update({ description:body.description, done: body.done })
  res.send(result)
})

  // Apagar tarefa
  app.delete('/tasks/:id', async (req, res) => {
    const taskId = req.params.id
    const task = await tasks.destroy({ where: { id: taskId } })
  
    res.send('já era meu amigo')
  })




app.listen(port, () => {
    console.log(`Recebaaaaa ${port}`)
})