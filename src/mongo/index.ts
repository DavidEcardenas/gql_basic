import { MongoClient, Db } from 'mongodb';
import config from '../config';

export default class MongoLib {
    private client: MongoClient;
    private dbName: string = config.dbName;
    private mongoUri: string = config.mongoUrl;
    private static connection: Db;

    constructor() {
        this.client = new MongoClient(this.mongoUri); // Sin opciones obsoletas
    }

    async connect(): Promise<Db> {
        if (!MongoLib.connection) {
            try {
                await this.client.connect();
                console.log('Connected successfully to MongoDB');
                MongoLib.connection = this.client.db(this.dbName);
            } catch (error) {
                console.error('Error connecting to MongoDB:', error);
                throw error; // Re-lanzar el error para que se propague
            }
        }
        return MongoLib.connection;
    }
}