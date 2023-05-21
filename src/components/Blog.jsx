import useTitle from "../hooks/useTitle";


const Blog = () => {
    useTitle('blog')
    return (
        <div className="text-xl bg-slate-200 mt-10 rounded-xl p-5 mb-10">
            <h1 className="font-bold mb-3">Question1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p className="bg-slate-50 p-5 rounded-xl">Answer1: An access token is a credential that is used to access protected resources or perform specific actions on behalf of a user or an application. It serves as proof of authentication and authorization for the requested resource. Access tokens are typically short-lived and have an expiration time. A refresh token is a long-lived credential that is used to obtain a new access token without the need for the user to reauthenticate. It provides a way to extend the validity of access tokens without requiring the users credentials again. Refresh tokens are typically long-lived and have their own expiration time, which is usually longer than access tokens.</p>
            <h1 className="font-bold mb-3">Question2: Compare SQL and NoSQL databases?</h1>
            <p className="bg-slate-50 p-5 rounded-xl">Answer2: SQL: SQL databases follow a structured, tabular data model with predefined schemas. Data is organized into tables with rows and columns, and relationships between tables are established using primary and foreign keys.NoSQL: NoSQL databases use various data models, including key-value, document, columnar, and graph. They provide flexibility in data representation and dont enforce rigid schemas. Data is stored in formats like JSON, BSON, or XML.
            </p>
            <h1 className="font-bold mb-3">Question3: What is express js? What is Nest JS(google it)?</h1>
            <p className="bg-slate-50 p-5 rounded-xl">Answer3:: Express.js enables defining routes for different HTTP methods (GET, POST, PUT, DELETE, etc.) and associating them with specific request handlers or middleware functions.
                Middleware: Express.js supports middleware functions that can be used to perform operations before or after handling requests, such as parsing request bodies, authentication, logging, error handling, and more. NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It leverages TypeScript, a statically typed superset of JavaScript, to provide enhanced tooling, maintainability, and developer productivity. NestJS takes inspiration from Angulars architecture and applies similar concepts, such as modules, controllers, services, and decorators, to build highly structured and modular applications.

                Key features of NestJS include:</p>
            <h1 className="font-bold mb-3">Question4: What is MongoDB aggregate and how does it work (google it)?</h1>
            <p className="bg-slate-50 p-5 rounded-xl">Answer4: Aggregation operations in MongoDB are defined using a pipeline approach. A pipeline consists of one or more stages, each representing a specific operation or transformation applied to the data. The output of one stage becomes the input for the next stage.</p>
        </div>
    );
};

export default Blog;