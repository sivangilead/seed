
const Sequelize=require('sequelize')
const {Vegetable,Gardener,Plot,db}=require('./models')



return Vegetable.create({name: "tomato",
color: "red",
planted_on: new Date('December 17, 1995 03:24:00')
})
.then((vegetables)=>{
  console.log("saved")
})



db.sync({force: true})
.then(()=>{
  console.log("connected")
})



// .then(()=>{
//     console.log("closed")
//     db.close()
// })
// .catch((err)=>{console.log(err)
//   db.close()})
// .finally(()=>{
//   db.close()
// })
