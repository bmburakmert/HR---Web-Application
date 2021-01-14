module.exports = mongoose => {
	const JobApplicationSchema = mongoose.Schema(
		{
      experience: String,
      certifications: String,
      notes: String,
      status: String,
      applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Applicant'
      },
      position: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Position'
      },
		},
		{ timestamps: true }
	);

    JobApplicationSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const JobApplication = mongoose.model('JobApplication', JobApplicationSchema);
	return JobApplication;
};
