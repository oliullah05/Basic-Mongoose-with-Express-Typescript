import httpStatus from 'http-status';
import mongoose from 'mongoose';
<<<<<<< HEAD
import QueryBuilder from '../../builder/QueryBuilder';
=======
>>>>>>> ff1d0b838e0818095b1fc5dc4390ad6c77deea18
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { studentSearchableFields } from './student.constant';
import { TStudent } from './student.interface';
import { Student } from './student.model';
<<<<<<< HEAD

const getAllStudentsFromDB = async (query: Record<string, unknown>) => {
  /*
  const queryObj = { ...query }; // copying req.query object so that we can mutate the copy object 
   
  let searchTerm = '';   // SET DEFAULT VALUE 

  // IF searchTerm  IS GIVEN SET IT
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string; 
  }

  
 // HOW OUR FORMAT SHOULD BE FOR PARTIAL MATCH  : 
  { email: { $regex : query.searchTerm , $options: i}}
  { presentAddress: { $regex : query.searchTerm , $options: i}}
  { 'name.firstName': { $regex : query.searchTerm , $options: i}}

  
  // WE ARE DYNAMICALLY DOING IT USING LOOP
   const searchQuery = Student.find({
     $or: studentSearchableFields.map((field) => ({
       [field]: { $regex: searchTerm, $options: 'i' },
    })),
   });

  
   // FILTERING fUNCTIONALITY:
  
  const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
   excludeFields.forEach((el) => delete queryObj[el]);  // DELETING THE FIELDS SO THAT IT CAN'T MATCH OR FILTER EXACTLY

  const filterQuery = searchQuery
    .find(queryObj)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });

 
  // SORTING FUNCTIONALITY:
  
  let sort = '-createdAt'; // SET DEFAULT VALUE 
 
 // IF sort  IS GIVEN SET IT
  
   if (query.sort) {
    sort = query.sort as string;
  }

   const sortQuery = filterQuery.sort(sort);


   // PAGINATION FUNCTIONALITY:

   let page = 1; // SET DEFAULT VALUE FOR PAGE 
   let limit = 1; // SET DEFAULT VALUE FOR LIMIT 
   let skip = 0; // SET DEFAULT VALUE FOR SKIP


  // IF limit IS GIVEN SET IT
  
  if (query.limit) {
    limit = Number(query.limit);
  }

  // IF page IS GIVEN SET IT

  if (query.page) {
    page = Number(query.page);
    skip = (page - 1) * limit;
  }

  const paginateQuery = sortQuery.skip(skip);

  const limitQuery = paginateQuery.limit(limit);

  
  
  // FIELDS LIMITING FUNCTIONALITY:

  // HOW OUR FORMAT SHOULD BE FOR PARTIAL MATCH 

  fields: 'name,email'; // WE ARE ACCEPTING FROM REQUEST
  fields: 'name email'; // HOW IT SHOULD BE 

  let fields = '-__v'; // SET DEFAULT VALUE

  if (query.fields) {
    fields = (query.fields as string).split(',').join(' ');

  }

  const fieldQuery = await limitQuery.select(fields);

  return fieldQuery;

  */

  const studentQuery = new QueryBuilder(
    Student.find()
      .populate('admissionSemester')
      .populate({
        path: 'academicDepartment',
        populate: {
          path: 'academicFaculty',
        },
      }),
    query,
  )
    .search(studentSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await studentQuery.modelQuery;
  return result;
=======
import QueryBuilder from '../../builder/QueryBuilder';
import { studentSearchAbleFileds } from './student.const';

const getAllStudentsFromDB = async (query: Record<string, unknown>) => {

// const queryObject = {...query}

  /*
  {email:{$regex:query.searchTerm,$options:i}
  {name:{$regex:query.searchTerm,$options:i}}
  
  */

//search -1

//   const studentSearchAbleFileds = ["email", "id", "name.firstName", "age"]

//   let searchTerm = '';
//   if (query?.searchTerm) {
//     searchTerm = query.searchTerm as string
//   }


// const searchQuery =  Student.find({
//   $or: studentSearchAbleFileds.map((field) => ({
//     [field]: { $regex: searchTerm, $options: "i" }
//   }))

// })

// filtering -2

// const excludeFields = ["searchTerm","sort","limit","page","fields"]

// excludeFields.forEach(elem=>delete queryObject[elem])

//   const filterQuery =  searchQuery.find(queryObject).populate('admissionSemester')
//     .populate({
//       path: 'academicDepartment',
//       populate: {
//         path: 'academicFaculty',
//       },
//     });


//sorting -3

// let sort = "-createdAt"

// if(query.sort){
//   sort= query.sort as string
// }

// const sortQuery =  filterQuery.sort(sort)


// pagination-4


// let page =1;
// let limit = 1;
// let skip =0;



// if(query.page){
//   page= Number(query.page)
// }


// if(query.limit){
//   limit = Number(query.limit) 
//   }

//   if(query.skip){
//     skip=(page-1)*limit
//   }


// const paginateQuery = sortQuery.skip(skip)


// const limitQuery = paginateQuery.limit(limit)


//field limiting -5

// let fileds = "-__v"

// if(query.fields){
//   fileds=(query.fields as string).split(",").join(" ") 
// console.log({fileds});
// }

// const fieldQuery =await limitQuery.select(fileds)


//   return fieldQuery;


const studentQuery = new QueryBuilder(Student.find().populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    })
,query).search(studentSearchAbleFileds)
.filter()
.sort()
.paginate()
.fields()


const result = await studentQuery.modelQuery

return result



>>>>>>> ff1d0b838e0818095b1fc5dc4390ad6c77deea18
};











const getSingleStudentFromDB = async (id: string) => {
<<<<<<< HEAD
  const result = await Student.findById(id)
=======
  const result = await Student.findOne({ id })
>>>>>>> ff1d0b838e0818095b1fc5dc4390ad6c77deea18
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const updateStudentIntoDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, guardian, localGuardian, ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  /*
    guardain: {
      fatherOccupation:"Teacher"
    }

    guardian.fatherOccupation = Teacher

    name.firstName = 'Mezba'
    name.lastName = 'Abedin'
  */

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

<<<<<<< HEAD


  const result = await Student.findByIdAndUpdate(id, modifiedUpdatedData, {
=======
  console.log(modifiedUpdatedData);

  const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
>>>>>>> ff1d0b838e0818095b1fc5dc4390ad6c77deea18
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

<<<<<<< HEAD
    const deletedStudent = await Student.findByIdAndUpdate(
      id,
=======
    const deletedStudent = await Student.findOneAndUpdate(
      { id },
>>>>>>> ff1d0b838e0818095b1fc5dc4390ad6c77deea18
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');
    }

<<<<<<< HEAD
    const deletedUser = await User.findByIdAndUpdate(
      id,
=======
    const deletedUser = await User.findOneAndUpdate(
      { id },
>>>>>>> ff1d0b838e0818095b1fc5dc4390ad6c77deea18
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to delete student');
  }
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  updateStudentIntoDB,
  deleteStudentFromDB,
};
