const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const mongoDataMethods = require("./data/db");
const typeDefs = require("./schema/shema");
const resolvers = require("./resolver/resolver");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`DB connected on port 27017`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods }),
});

app.use(cors());


const startServer = async () => {
    await server.start(); // Đảm bảo server được khởi động trước khi áp dụng middleware
    server.applyMiddleware({ app });
  
    app.listen({ port: process.env.PORT || 4000 }, () =>
      console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    );
  };
  
  startServer();
