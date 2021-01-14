module.exports = mongoose => {
	const HiringInterviewSchema = mongoose.Schema(
		{
      type: String,
      dateTime: Date,
      score: String,
      notes: String,
      interviwedBy: String,
      applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Applicant'
      },
		},
		{ timestamps: true }
	);

    HiringInterviewSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const HiringInterview = mongoose.model('HiringInterview', HiringInterviewSchema);
	return HiringInterview;
};
