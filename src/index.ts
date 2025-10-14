import express from 'express';
import { CosmosClient } from '@azure/cosmos';

const app = express();
const port = 58458;

const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING || '');
const databaseId = 'YourDatabaseId';
const containerId = 'YourContainerId';

app.get('/users', async (req, res) => {
  try {
    const database = client.database(databaseId);
    const container = database.container(containerId);
    const { resources: users } = await container.items.query('SELECT * FROM c').fetchAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
