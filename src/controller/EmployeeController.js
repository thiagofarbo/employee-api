const mongoose = require('mongoose');

const Employee = mongoose.model('Employee');

module.exports ={
    async list(request, response){
        const { page = 1 } = request.query;
        const employee  = await Employee.paginate({}, {page, limit:10 });

        return response.json(employee);
    },

    async detail(request, response){
        const employee  = await Employee.findById(request.params.id);

        return response.json(employee);
    },

    async save(request, response){
        const employee  = await Employee.create(request.body);

        return response.json(employee);
    },

    async update(request, response){                                                        //Return the emplyee after update    
        const employee  = await Employee.findByIdAndUpdate(request.params.id, request.body, {new: true});

        return response.json(employee);
    },

    async delete(request, response){   
        await Employee.findByIdAndRemove(request.params.id);

        return response.send();
    },
};