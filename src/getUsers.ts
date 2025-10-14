import { CosmosClient } from '@azure/cosmos';
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 57095;

// Initialize Cosmos Client
const client = new CosmosClient({ endpoint: process.env.COSMOS_ENDPOINT, key: process.env.COSMOS_KEY });
const database = client.database('your-database-name');
const container = database.container('users');

// Get all users
app.get('/api/users', async (req: Request, res: Response) => {
  try {
    const { resources: users } = await container.items.query('SELECT * from c').fetchAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});