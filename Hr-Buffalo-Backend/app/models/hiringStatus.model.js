module.exports = mongoose => {
	const HiringStatusSchema = mongoose.Schema(
		{
      status: String,
      notes: String,
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

    HiringStatusSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const HiringStatus = mongoose.model('HiringStatus', HiringStatusSchema);
	return HiringStatus;
};
