[
  {
    'repeat(100, 100)': {
      id: '{{index()}}',
      basic: {
        innerid: '{{index()}}',
        img: 'http://placehold.it/32x32',
        title: function (tags) {
          var title = ['Mr.', 'Mrs.', 'Miss.'];
          return title[tags.integer(0, title.length - 1)];
        },
        name: {
          firstname: '{{firstName()}}',
          middlename: '{{surname()}}',
          lastname: '{{surname()}}',
          fullname() {
            return `${this.firstname} ${this.middlename} ${this.lastname}`;
          }
        },
        position: function (tags) {
          var position = ['Teacher - Specialty (K-4)', 'Support Teacher K-4', 'Support Teacher 5-8', 'Receptionist', 'PSR Teacher (K-4)', 'Teacher - Sci - (5-8)', 'Teacher - Elementary', 'Executive Director', 'Director', 'Nurse', 'Office Boy', 'Help Desk Technician'];
          return position[tags.integer(0, position.length - 1)];
        },
      location: {
        office: '{{street()}}',
        room: '{{integer(100, 500)}}'
      },
      phone:
      {
        officeNum: '{{integer(100, 500)}}',
        mobileNum: '{{phone()}}'
      },
      personalmail(tags) {
        return `${this.name.firstname}.${this.name.lastname}@personal${tags.domainZone()}`.toLowerCase();
      },
      businessmail(tags) {
        return `${this.name.firstname}.${this.name.lastname}@business${tags.domainZone()}`.toLowerCase();
      },
      homeAddress: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
      status: '{{bool()}}',
      salary: '{{floating(1000, 4000, 2, "$0,0.00")}}'
    },
    details: {
      birthDate: '{{date(new Date(1950,0,1), new Date(2002,0,1), "YYYY-MM-dd")}}',
      placeOfBirth: '{{city()}}',
      nativeLanguage: function (tags) {
        var nativeLanguage = ["English", "Turkish", "Dutch", "Germany", "Spanish"];
        return nativeLanguage[tags.integer(0, nativeLanguage.length - 1)];
      },
      secondaryLanguage: function (tags) {
        var secondaryLanguage = ["English", "Turkish", "Dutch", "Germany", "Spanish"];
        return secondaryLanguage[tags.integer(0, secondaryLanguage.length - 1)];
      },
      gender: function (tags) {
        var gender = ["Male", "Femalen"];
        return gender[tags.integer(0, gender.length - 1)];
      },
      countryOrigin: '{{country()}}',
      race: function (tags) {
        var race = ["White", "Black", "Hispanic", "Latino", "Asian", "Afro-american", "Caucasian"];
        return race[tags.integer(0, race.length - 1)];
      },
      hispanic: '{{bool()}}',
      hireDate: '{{date(new Date(2000, 0, 1), new Date(), "YYYY-MM-dd")}}',
      employmentBasis: '{{integer(25, 100)}}',
      workDays: '{{integer(1, 365)}}',
      workMonths: '{{integer(1, 12)}}',
      educationLevel: function (tags) {
        var educationLevel = ["Master's", "Doctor's", "Bachelor's"];
        return educationLevel[tags.integer(0, educationLevel.length - 1)];
      },
      experience: '{{integer(1, 30)}}'
    },
    files: {
      fileType: function (tags) {
        var fileType = ["pdf", "doc", "xls", "ppt", "jpg"];
        return fileType[tags.integer(0, fileType.length - 1)];
      },
      createdBy: '{{firstName()}} {{surname()}}',
      createdAt: '{{date(new Date(1990, 0, 1), new Date(), "YYYY-MM-dd")}}',
      size: '{{integer(1, 99)}}'
    }
  }
  }
]