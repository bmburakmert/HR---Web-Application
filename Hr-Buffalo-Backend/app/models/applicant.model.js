module.exports = mongoose => {
	const ApplicantSchema = mongoose.Schema(
		{
      firstName: String,
      middleName: String,
      lastName: String,
      email: String,
      phone: String,
      adress: String,
      city: String,
      state: String,
      zipCode: String,
      password: String,
      rememberToken: String,
      apiToken: String,
      googleId: String,
      linkedinId: String,
      isEmployed: Boolean,
		},
		{ timestamps: true }
	);

    ApplicantSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const Applicant = mongoose.model('Applicant', ApplicantSchema);
	return Applicant;
};
