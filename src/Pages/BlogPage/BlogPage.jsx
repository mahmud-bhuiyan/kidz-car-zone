const BlogPage = () => {
  return (
    <div className="my-8">
      <div className="font-bold text-center">
        <h2 className="text-4xl underline">Blog Page</h2>
        <h3 className="text-xl underline mt-4">Q/A Section</h3>
      </div>
      <div className="divider"></div>
      {/* q-1 */}
      <div className="collapse rounded-lg collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-info text-info-content">
          <p className="font-bold">
            <span className="font-bold text-xl underline text-red-600">
              Question 1:
            </span>{" "}
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </p>
        </div>
        <div className="collapse-content">
          <div className="mt-4">
            <p>
              <span className="text-xl font-bold text-green-600 underline mr-1">
                Answer:
              </span>
              Access tokens and refresh tokens are two essential components of
              an authentication system that work together to ensure secure and
              uninterrupted access to protected resources.
            </p>
            <br />
            <p>
              An access token is issued by the server to the client after
              successful authentication. It serves as a credential that the
              client includes in API requests as an authorization header. The
              access token validates the clients identity and permissions,
              allowing them to access the protected resources. These tokens have
              a limited lifespan and expire after a certain period. Once
              expired, they are no longer valid for accessing resources.
            </p>
            <br />
            <p>
              A refresh token is also issued during authentication and has a
              longer lifespan. The client secretly stores the refresh token on
              the client-side, typically in a secure HTTP-only cookie or another
              secure storage mechanism or local storage. When the access token
              expires, the client can send the refresh token to the server to
              obtain a new access token without the need for re-authentication.
              The server verifies the refresh tokens validity and, if valid,
              issues a fresh access token to the client. Refresh tokens play a
              crucial role in maintaining a persistent authenticated session.
            </p>
            <br />
            <p>
              Storing these tokens on the client-side requires careful
              consideration. Access tokens are temporarily stored in memory or
              short-lived storage mechanisms, suitable for non-sensitive
              applications where they can be regenerated when needed. Refresh
              tokens, being more long-lived, are stored securely, typically in
              secure HTTP-only cookies. This approach prevents unauthorized
              access to the token by client-side JavaScript and minimizes the
              risk of cross-site scripting attacks. Cookies are convenient and
              secure storage mechanisms as they are automatically sent with each
              server request.
            </p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      {/* q-2 */}
      <div className="collapse rounded-lg collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-info text-info-content">
          <p className="font-bold">
            <span className="font-bold text-xl underline text-red-600">
              Question 2:
            </span>{" "}
            Compare SQL and NoSQL databases?
          </p>
        </div>
        <div className="collapse-content">
          <div className="mt-4">
            <p>
              <span className="text-xl font-bold text-green-600 underline mr-1">
                Answer:
              </span>
            </p>
            <br />
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full text-center">
                <thead>
                  <tr>
                    <th className="border"></th>
                    <th className="border">SQL</th>
                    <th className="border">NoSQL</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th className="border">1</th>
                    <td className="border">
                      SQL databases are primarily called RDBMS or Relational
                      Databases.
                    </td>
                    <td className="border">
                      NoSQL databases are primarily called as Non-relational or
                      distributed database.
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th className="border">2</th>
                    <td className="border">
                      These databases have fixed or static or predefined schema.
                    </td>
                    <td className="border">They have a dynamic schema.</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th className="border">3</th>
                    <td className="border">
                      These databases are not suited for hierarchical data
                      storage.
                    </td>
                    <td className="border">
                      These databases are best suited for hierarchical data
                      storage.
                    </td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <th className="border">4</th>
                    <td className="border">
                      These databases are best suited for complex queries.
                    </td>
                    <td className="border">
                      These databases are not so good for complex queries.
                    </td>
                  </tr>
                  {/* row 5 */}
                  <tr>
                    <th className="border">5</th>
                    <td className="border">Vertically Scalable.</td>
                    <td className="border">Horizontally scalable.</td>
                  </tr>
                  {/* row 6 */}
                  <tr>
                    <th className="border">6</th>
                    <td className="border">Follows ACID property.</td>
                    <td className="border">Follows CAP.</td>
                  </tr>
                  {/* row 7 */}
                  <tr>
                    <th className="border">7</th>
                    <td className="border">
                      Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc.
                    </td>
                    <td className="border">
                      Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      {/* q-3 */}
      <div className="collapse rounded-lg collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-info text-info-content">
          <p className="font-bold">
            <span className="font-bold text-xl underline text-red-600">
              Question 3:
            </span>{" "}
            What is express js? What is Nest JS?
          </p>
        </div>
        <div className="collapse-content">
          <div className="mt-4">
            <p>
              <span className="text-xl font-bold text-green-600 underline mr-1">
                Answer:
              </span>
            </p>
            <br />
            <p>
              Express.js is a framework designed for Node.js that enables the
              development of web applications and APIs. It offers a flexible and
              minimalistic approach, allowing developers to handle routing, http
              requests, and responses. Express.js is known for its simplicity
              and wide range of middleware and plugins, which enhance its
              functionality and make it easier to build server-side applications
              using JavaScript.
            </p>
            <br />
            <p>
              Nest.js is a TypeScript-based framework built on Express.js. It
              provides an advanced and extensible environment for building
              scalable server-side applications. Nest.js takes inspiration from
              Angular and integrates architectural patterns and features such as
              decorators and dependency injection. Encourage the use of
              TypeScript for static input and take advantage of the latest
              JavaScript features. Nest.js allows developers to organize their
              code into modules, ensuring a modular and maintainable application
              structure. It also provides various modules and integrations for
              database access, authentication, caching, etc. Nest.js is
              particularly well suited for building complex and scalable
              applications.
            </p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      {/* q-4 */}
      <div className="collapse rounded-lg collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-info text-info-content">
          <p className="font-bold">
            <span className="font-bold text-xl underline text-red-600">
              Question 4:
            </span>{" "}
            What is MongoDB aggregate and how does it work?
          </p>
        </div>
        <div className="collapse-content">
          <div className="mt-4">
            <p>
              <span className="text-xl font-bold text-green-600 underline mr-1">
                Answer:
              </span>
            </p>
            <br />
            <p>
              MongoDB's aggregate is a powerful feature that allows for advanced
              data processing and analysis within the database. It provides a
              flexible and expressive way to perform complex queries,
              transformations, and aggregations on MongoDB collections.
              <br />
              The aggregate pipeline allows for the sequential application of
              stages, where each stage takes the output of the previous stage as
              input. This enables a series of data transformations and
              manipulations to be performed on MongoDB collections. Stages
              within the pipeline can perform diverse tasks such as filtering
              documents, transforming data, grouping documents, calculating
              aggregations, and more. MongoDB provides a wide range of operators
              and expressions to support these operations. As the data flows
              through the pipeline, each stage processes the documents based on
              its operation and criteria. This allows for complex data
              manipulations and computations to be performed efficiently within
              the database, reducing the need for additional processing in the
              application layer. The aggregate feature offers flexibility and
              adaptability, empowering developers to construct sophisticated
              data processing workflows. By combining multiple stages,
              developers can extract meaningful insights from MongoDB
              collections, making it an invaluable tool for data analysis and
              manipulation.
            </p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default BlogPage;
