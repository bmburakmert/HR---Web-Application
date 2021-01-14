module.exports = mongoose => {
	const GenderSchema = mongoose.Schema(
		{
      name: String,
      code: String
		},
		{ timestamps: true }
	);

    GenderSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const Gender = mongoose.model('Gender', GenderSchema);
	return Gender;
};
