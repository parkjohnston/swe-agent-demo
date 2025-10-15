import { CosmosClient } from '@azure/cosmos';

const endpoint = process.env.COSMOS_ENDPOINT || '';
const key = process.env.COSMOS_KEY || '';
const client = new CosmosClient({ endpoint, key });

export const getUsers = async (req, res) => {
  try {
    const { resources: users } = await client.database('your-database').container('users').items.query('SELECT * FROM c').fetchAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};