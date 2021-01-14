module.exports = mongoose => {
	const StaffSchema = mongoose.Schema(
		{
      staffId: String,
			isSupervisor: Boolean,
			originalHireDate: Date,
			exitDate: Date,
      exitReasonCode: String,
      isActive: Boolean,
      annualSalary: String,
      contractWorkDays: String,
      employmentBasis: String,
      previousTeachingExperience: String,
      annualContractWorkMonth: String,
      educationLevel: String      
		},
		{ timestamps: true }
	);

    StaffSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const Staff = mongoose.model('Staff', StaffSchema);
	return Staff;
};
