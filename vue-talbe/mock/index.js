const express = require('express')
const app = express()
const router = express.Router()
const apiData = require('./index.json')

router.get('/:name', (req, res) => {
	if (apiData[req.params.name]) {
		res.json({
			'error': '0',
			data: apiData[req.params.name]
		})
	} else {
		res.send('no such a name')
	}
})

app.use('/api', (req, res) => {
	var name = req.query.name;
	// post params; get query
	if (apiData[name]) {
		res.json({
			'error': '0',
			data: apiData[name]
		})
	} else {
		res.send('no such a name')
	}
})
app.listen(3000)
console.log('ok 3000');