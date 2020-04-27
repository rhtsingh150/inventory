

npx sequelize-cli model:generate --name User --attributes username:string,name:string,email:string,phone:string,profession:string,profile_pic:string,role:string

npx sequelize-cli model:generate --name Timeline --attributes userId:string,partId:string,action:string,quantity:string,message:string

npx sequelize-cli model:generate --name Part --attributes name:string,image:string,quantity:string,assemblyId:string

npx sequelize-cli model:generate --name Assembly --attributes name:string,image:string,machineId:string

npx sequelize-cli model:generate --name Machine --attributes name:string,image:string,technologyId:string

npx sequelize-cli model:generate --name Technology --attributes name:string,image:string

npx sequelize-cli db:migrate