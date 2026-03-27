const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const services = [
  {
    id: 1,
    slug: 'weekly-pool-service',
    title: 'Weekly Pool Service',
    description: 'Crystal-clear pool maintenance',
    price: 100,
    details: 'Comprehensive weekly swimming pool service including thorough chemical balancing, skimming, and vacuuming to ensure crystal-clear water for residents and guests alike.'
  },
  {
    id: 2,
    slug: 'pool-repairs',
    title: 'Pool Repairs',
    description: 'Expert pool repair solutions',
    price: 150,
    details: 'Precision diagnostics and repairs for pumps, filters, heaters, and advanced salt systems. Our technical approach ensures your pool equipment operates with maximum efficiency.'
  },
  {
    id: 3,
    slug: 'equipment-check',
    title: 'Equipment Check',
    description: 'Efficient pool equipment maintenance',
    price: 75,
    details: 'Full inspection of pumps, filters, heaters, and salt systems. We identify potential issues before they become costly repairs.'
  }
];

app.get('/api/services', (req, res) => {
  res.json(services);
});

app.post('/api/bookings', (req, res) => {
  const { serviceId, name, email, phone, date, message } = req.body;
  const service = services.find(s => s.id === serviceId);
  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }
  res.json({
    success: true,
    booking: { serviceId, name, email, phone, date, message, service: service.title }
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  res.json({ success: true, message: 'Inquiry received! Karen will get back to you shortly.' });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`L&D Pools server running on port ${PORT}`);
});
