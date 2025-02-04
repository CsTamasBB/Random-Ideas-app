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

//post idea

router.post('/', (req, res) => {
    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0,10),
    };

    ideas.push(idea);

    res.json({ success: true, data: idea });
} );

//update idea

router.put('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if (!idea) {
        return res.status(404).json({success:false, error: 'Resource not found'});
    }

    idea.text = req.body.text || idea.text;
    idea.tag = req.body.tag || idea.tag;

    res.json( {success: true, data: idea});
});

//delete idea

router.delete('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if (!idea) {
        return res.status(404).json({success:false, error: 'Resource not found'});
    }
    const index = ideas.indexOf(idea);
    ideas.splice(index, 1);
    
    res.json( {success: true, data: {}});
});

module.exports = router;

const ideas = [
    {
    id: 1,
    text: "sample text 1",
    tag: 'tech',
    username: 'Tony',
    date: '2025-01-02',
    },
    {
    id: 2,
    text: "sample text 2",
    tag: 'world',
    username: 'Tony',
    date: '2025-01-02',
    },
    {
    id: 3,
    text: "sample text 3",
    tag: 'cook',
    username: 'Marconi',
    date: '2025-01-02',
    },
];