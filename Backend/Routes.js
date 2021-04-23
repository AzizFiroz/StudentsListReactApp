const router = require('express').Router();
let Student = require('./Student');

router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
        console.log("res", res.json(students));
    }
    catch (err) {
        res.send(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const students = await Student.findById(req.params.id);
        res.json(students);
        console.log("res", res.json(students));
    }
    catch (err) {
        res.send(err);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        student.Name= req.body.Name,
        student.rollno=  req.body.rollno,
        student.email= req.body.email,
        student.phone= req.body.phone,
        student.semester= req.body.semester
        const c1 = await student.save();
        res.json(c1);
        //console.log("res", res.json(students));
    }
    catch (err) {
        res.send(err);
    }
});


router.post('/', async (req, res) => {
    try {
        console.log('Add_Student POST', req.body);
        const newStudent = new Student({
            Name: req.body.name,
            rollno:  req.body.rollNo,
            email: req.body.email,
            phone: req.body.phone,
            semester: req.body.semester
            
        });
        const c1 = await newStudent.save();
        console.log("Row Added");
        res.send(c1);
    }
    catch (err) {
        res.send(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        console.log('delete: id')
        const students = await Student.findById(req.params.id);
        const c1 = await students.delete();
        // await findByIdAndDelete(req.params.id) can be used instead of above 2 lines
        res.json(c1);
    }
    catch (err) {
        res.send(err);
    }
});

module.exports = router;