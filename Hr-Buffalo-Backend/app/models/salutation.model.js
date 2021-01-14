module.exports = mongoose => {
	const SalutationSchema = mongoose.Schema(
		{
      name: String,
		},
		{ timestamps: true }
	);

    SalutationSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const Salutation = mongoose.model('Salutation', SalutationSchema);
	return Salutation;
};
