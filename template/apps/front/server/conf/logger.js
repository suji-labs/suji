Logger.addTransport('mongodb', {
  db: process.env.MONGO_URL,
  collection: 'logs',
  name: 'logger.main',
});
