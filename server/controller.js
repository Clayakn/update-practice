const DATA = [{id: 1, text: "asdlfhaosijdfosi"}]



module.exports = {
    update: (req, res) => {
      const { id } = req.params 
      const { text } = req.body
      const index = DATA.findIndex(element => element.id == id)
      console.log('index',index)
      DATA[index].text = text
      res.status(200).send(DATA)
    },
    read: (req, res) => {
        console.log('hit-----')
        console.log(DATA)
        res.status(200).json(DATA)
    }
}