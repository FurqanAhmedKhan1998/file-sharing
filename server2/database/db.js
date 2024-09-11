import mongoose from 'mongoose';

const DBConnection = async () => {
    const MONGODB_URI = `mongodb+srv://furqan:furqan1998@cluster0.mg6w4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(MONGODB_URI, {
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
};

export default DBConnection;



// import mongoose from 'mongoose';



// const DBConnection = async () => {
//     const MONODB_URI = `mongodb+srv://furqan:furqan1998@cluster0.mg6w4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
//     try{
//         mongoose.connect(MONODB_URI, {useNewUrlParser: true});
//     }catch(error){
//         console.error('Error while connecting with the database', error.message);
//     }
// }

// export default DBConnection;