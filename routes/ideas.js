const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    res.json( {success: true, data: ideas});
});

router.get('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if (!idea) {
        return res.status(404).json({success:false, error: 'Resource not found'});
    }

    res.json( {success: true, data: idea});
});

module.exports = router;

const ideas = [
    {
    id: 1,
    test: "sample text 1",
    tag: 'tech',
    username: 'Tony',
    date: '2025-01-02',
    },
    {
    id: 2,
    test: "sample text 2",
    tag: 'world',
    username: 'Tony',
    date: '2025-01-02',
    },
    {
    id: 3,
    test: "sample text 3",
    tag: 'cook',
    username: 'Marconi',
    date: '2025-01-02',
    },
];