import { graphql, buildSchema } from 'graphql';
import { BlogsData } from '../../database/blog/database';

// GraphQL Schema
var schema = buildSchema(`
    type Query {
        blogs: [Blogs]
    }

    type Blogs {
      id: Int
      title: String
      image: String
      description: String
      readUrl: String
      likes: String
      comments: String
      createdAt: String
      createdBy: String
    }
`);

// Root resolver
var root = {
  blogs: BlogsData,
};

export default async (req, res) => {
  const query = req.body.query;
  const response = await graphql(schema, query, root);

  return res.end(JSON.stringify(response));
};
