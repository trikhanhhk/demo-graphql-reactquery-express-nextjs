const resolvers = {
  //For query
  Query: {
    students: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllStudents(),
    student: async (parent, { id }, { mongoDataMethods }) =>
      await mongoDataMethods.getStudentById(id),

    classes: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllClasses(),
    class: async (parent, { id }, { mongoDataMethods }) =>
      await mongoDataMethods.getClassById(id),

    schools: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllSchools(),
    school: async (parent, { id }, { mongoDataMethods }) =>
      await mongoDataMethods.getSchoolById(id),
  },

  Student: {
    class: async ({ classId }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getClassById(classId),
  },

  Class: {
    school: async ({ schoolId }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getSchoolById(schoolId),
    students: async ({ id }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllStudents({ classId: id }),
  },

  School: {
    classes: async ({ id }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllClasses({ schoolId: id }),
  },


  Mutation: {
    createSchool: async (parent, args, { mongoDataMethods }) =>
        await mongoDataMethods.createSchool(args),
    createClass: async (parent, args, { mongoDataMethods }) =>
        await mongoDataMethods.createClass(args),
    createStudent: async (parent, args, { mongoDataMethods }) =>
        await mongoDataMethods.createStudent(args)
}
};

module.exports = resolvers;
