import { IResolvers } from '@graphql-tools/utils';
import { Db, ObjectId } from 'mongodb';
import * as jwt from 'jsonwebtoken';

const CreateToken = (
    user: any,
    secret: jwt.Secret,
    expiration: jwt.SignOptions["expiresIn"]
) => {

    const {
        _id,
        email,
        name,
        lastname
    } = user;

    return jwt.sign(
        {
            _id,
            email,
            name,
            lastname
        },
        secret,
        {
            expiresIn: expiration
        }
    );
};

const userResolver: IResolvers = {

    Query: {

        getUser: async (
            parent,
            args,
            context: Db
        ) => {

            try {

                return await context
                    .collection('users')
                    .find()
                    .toArray();

            } catch (error) {

                console.log(error);

                throw error;
            }
        },

        getUserById: async (
            parent,
            args,
            context: Db
        ) => {

            try {

                return await context
                    .collection('users')
                    .findOne({
                        _id: new ObjectId(args._id)
                    });

            } catch (error) {

                console.log(error);

                throw error;
            }
        },

        getCurrentUser: async (
            parent,
            args,
            context: Db
        ) => {

            const token = args?.token;

            if (!token) {
                throw new Error("Token not provided");
            }

            try {

                const user: any = jwt.verify(
                    token,
                    "abc.123"
                );

                return await context
                    .collection('users')
                    .findOne({
                        _id: new ObjectId(user?._id)
                    });

            } catch (error) {

                console.log(error);

                throw error;
            }
        }
    },

    Mutation: {

        createUser: async (
            parent,
            args,
            context: Db
        ) => {

            try {

                await context
                    .collection('users')
                    .insertOne(args.userInput);

                return "User created successfully";

            } catch (error) {

                console.log(error);

                throw error;
            }
        },

        updateUser: async (
            parent,
            args,
            context: Db
        ) => {

            try {

                const userColl = await context
                    .collection('users')
                    .findOne({
                        _id: new ObjectId(args._id)
                    });

                if (!userColl) {
                    throw new Error("User not found");
                }

                await context
                    .collection('users')
                    .updateOne(
                        {
                            _id: new ObjectId(args._id)
                        },
                        {
                            $set: args.userInput
                        }
                    );

                return "User updated successfully";

            } catch (error) {

                console.log(error);

                throw error;
            }
        },

        authUser: async (
            parent,
            args,
            context: Db
        ) => {

            const {
                email,
                password
            } = args?.authInput;

            const userColl = await context
                .collection('users')
                .findOne({
                    email,
                    password
                });

            if (!userColl) {
                throw new Error(
                    "User or password incorrect"
                );
            }

            return {
                token: CreateToken(
                    userColl,
                    "abc.123",
                    "24h"
                )
            };
        }
    }
};

export default userResolver;