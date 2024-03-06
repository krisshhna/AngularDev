const pool      =   require('../../config/database');

module.exports = {
    createUser:(data)=>{
        // pool.query('
        pool.query(
            `insert into users(firstName, lastName, dob, gender, education, company, experience, package, email, password, number, date_submitted)
                values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                data.firstName,
                data.lastName,
                data.dob,
                data.gender,
                data.education,
                data.company,
                data.experience,
                data.package, 
                data.email,
                data.password,
                data.number,
                data.date_submitted
            ],
            (error, results, fields)=>{
                if(error){
                    return callBack(error)
                }

                return callBack(null, results);
            }
        )
    }
}