
const connectDB = require('./config/db');
const closeDB = require('./config/db');
const CrowdsourceInfo = require('./models/CrowdsourceInfo');
process.env.NODE_ENV = "production"
process.env.MONGO_URI = "mongodb+srv://admin:P@ssword123@mongodb-cluster.uiziy.mongodb.net/crowdsourcing?retryWrites=true&w=majority"

connectDB();

async function run() {


    CrowdsourceInfo.find({ repeatSchedule: true }, { '_id': 0 })
        .then((docs) => {
            CrowdsourceInfo.insertMany(docs).then(insertedDocs => {
                console.log(`Inserted ${insertedDocs.length} at ${new Date().toLocaleString()}`);
                closeDB();
                process.exit()
            }).catch(err => {
                console.error(`Scheduler error`, err);
                closeDB();
                process.exit()
            });
        }).catch(err => {
            console.error(`Scheduler error`, err);
            closeDB();
            process.exit()
        })



}

run()