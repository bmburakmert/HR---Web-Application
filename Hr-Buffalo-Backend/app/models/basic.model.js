module.exports = mongoose => {
	const schema = mongoose.Schema(
		{
			salutation: String,
			firstName: String,
			middleName: String,
      lastName: String,
      phoneExtension: String,
      roomNumber: String,
      personalEmail: String,
      cellPhone: String,
      imageUrl: String,
      isSuspended: Boolean
		},
		{ timestamps: true }
	);

  	schema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
  	});

	const Basic = mongoose.model('basic', schema);
	return Basic;
};
