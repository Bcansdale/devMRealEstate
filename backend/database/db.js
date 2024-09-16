import { Sequelize } from "sequelize";

const connectToDB = async (dbURI) => {
    console.log(`Connecting to DB: ${dbURI}`)

    const sequelize = new Sequelize(dbURI, {
        logging: false,
        define: {
            underscored:true,
            timestamps: false,
        }
    })

    try {
        await sequelize.authenticate()
        console.log(`Connection to DB: Successful`)
    } catch (error) {
        console.log(`Connection to DB: Unsuccessful ${error}`)
    }

    return sequelize
}
export default connectToDB