Meteor.startup(function() {
  if (Employee.find().count() === 0) {
    var employees = [{
      'id': 2124684,
      'name' : 'Daniel Cormier',
      'job_title' : 'Part Timer',
      'join_date' : '2015/12/06 pm 12:31:37'
    }, {
      'id': 4539384,
      'name' : 'Conor Mcgregor',
      'job_title' : 'Manager',
      'join_date' : '2014/11/26 am 02:59:20'
    }, {
      'id': 2124398,
      'name' : 'Robbie Lawler',
      'job_title' : 'Part Timer',
      'join_date' : '2016/03/01 am 05:02:50'
    }, {
      'id': 3028433,
      'name' : 'Jon Jones',
      'job_title' : 'Cashier',
      'join_date' : '2016/01/31 pm 10:50:40'
    }];

    for (var i = 0; i < employees.length; i++) {
      Employee.insert(employees[i]);
    }
  };
});
