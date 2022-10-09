export default function handler(req, res) {
  const body = req.body;

  // Logging for development purposes only.
  console.log('body: ', body);

  // Did not find name.
  if (!body.first || !body.last) {
    return res.status(400).json({ data: 'First or last name not found'});
  }

  // Found name.
  res.status(200).json({ data: `${body.first} ${body.last}` });
}