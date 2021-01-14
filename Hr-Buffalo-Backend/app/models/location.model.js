module.exports = mongoose => {
	const LocationSchema = mongoose.Schema(
		{
      name: String,
      description: String,
      code: String,
      schoolYear: String,
      address: String,
      districtCode: String,
		},
		{ timestamps: true }
	);

    LocationSchema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });

	const Location = mongoose.model('Location', LocationSchema);
	return Location;
};
